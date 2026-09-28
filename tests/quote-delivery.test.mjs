import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { test } from "node:test";
import ts from "typescript";

// Isolated module loading replaces Resend and process.env before application code runs.
// No real API key is read and no network access is possible in this test context.
function harness({ key = "test-placeholder", outcome = { data: { id: "mock-email" }, error: null } } = {}) {
  const calls = [];
  const cache = new Map();
  function load(filename) {
    if (cache.has(filename)) return cache.get(filename).exports;
    const loaded = { exports: {} };
    cache.set(filename, loaded);
    const compiled = ts.transpileModule(readFileSync(filename, "utf8"), {
      compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
    }).outputText;
    const requireMock = (specifier) => {
      if (specifier === "server-only") return {};
      if (specifier === "resend") return { Resend: class {
        emails = { send: async (...args) => {
          calls.push(args);
          if (outcome instanceof Error) throw outcome;
          return outcome;
        } };
      } };
      const base = specifier.startsWith("@/") ? path.resolve(specifier.slice(2)) : path.resolve(path.dirname(filename), specifier);
      const resolved = [base + ".ts", path.join(base, "index.ts")].find(existsSync);
      if (!resolved) throw new Error("Unexpected test import");
      return load(resolved);
    };
    vm.runInNewContext(compiled, {
      module: loaded, exports: loaded.exports, require: requireMock,
      process: { env: { RESEND_API_KEY: key } },
      Response, Uint8Array, TextDecoder,
    }, { filename });
    return loaded.exports;
  }
  return { calls, post: load(path.resolve("app/api/quote/validate/route.ts")).POST };
}

function payload(overrides = {}) {
  return {
    name: "Test Customer", email: "customer@example.com", phone: "", service: "move-out",
    property: "", size: "", rooms: "", location: "", frequency: "", timing: "", details: "",
    locale: "nb", website: "", submissionId: "12345678-1234-4123-8123-123456789abc", ...overrides,
  };
}
function request(body, type = "application/json") {
  return new Request("https://example.com/api/quote/validate", {
    method: "POST", headers: { "Content-Type": type }, body: typeof body === "string" ? body : JSON.stringify(body),
  });
}

test("both languages send to Vasky with customer Reply-To and safely escaped HTML", async () => {
  for (const locale of ["nb", "en"]) {
    const { post, calls } = harness();
    const response = await post(request(payload({ locale, details: '<script>alert("x")</script> & text', phone: "+47 12345678", frequency: "once" })));
    assert.equal(response.status, 200);
    assert.equal((await response.json()).status, "sent");
    const [email, options] = calls[0];
    assert.equal(email.to, "post@vasky-renhold.no");
    assert.equal(email.from, "Vasky nettside <website@vasky-renhold.no>");
    assert.equal(email.replyTo, "customer@example.com");
    assert.ok(email.subject.includes(locale === "nb" ? "Flyttevask" : "Move-out cleaning"));
    assert.ok(email.html.includes("&lt;script&gt;"));
    assert.ok(!email.html.includes("<script>"));
    assert.ok(email.text.includes('<script>alert("x")</script> & text'));
    assert.ok(email.text.includes("+47 12345678"));
    assert.ok(!email.text.includes(locale === "nb" ? "Antall rom" : "Number of rooms"));
    assert.equal(options.idempotencyKey, "quote/" + payload().submissionId);
  }
});

test("invalid input, honeypots and oversized bodies never send", async () => {
  const { post, calls } = harness();
  for (const [body, expected] of [
    [payload({ email: "invalid" }), 422], [payload({ service: "invented" }), 422],
    [payload({ rooms: "1.5" }), 422], [payload({ details: "x".repeat(3001) }), 422],
    [payload({ website: "spam" }), 400], [payload({ website: null }), 400],
    [payload({ locale: "invalid" }), 400], [payload({ submissionId: "invalid" }), 400],
    ["{", 400], ["null", 400], ["x".repeat(32769), 413],
  ]) assert.equal((await post(request(body))).status, expected);
  assert.equal((await post(request(payload(), "text/plain"))).status, 415);
  assert.equal(calls.length, 0);
});

test("missing key and provider failures return generic errors, never success", async () => {
  for (const options of [
    { key: "" }, { outcome: { data: null, error: { message: "private provider details" } } },
    { outcome: { data: {}, error: null } }, { outcome: new Error("private provider details") },
  ]) {
    const { post, calls } = harness(options);
    const response = await post(request(payload()));
    assert.equal(response.status, 503);
    assert.deepEqual(await response.json(), { status: "delivery-failed" });
    if (options.key === "") assert.equal(calls.length, 0);
  }
});
