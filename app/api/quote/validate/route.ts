import { quoteFields, validateQuote, type QuoteValues } from "@/lib/quote-validation";
import { sendQuoteEmail } from "@/lib/quote-email";

export const runtime = "nodejs";

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.startsWith("application/json")) {
    return Response.json({ status: "invalid-request" }, { status: 415 });
  }
  // Bound the body while reading; Content-Length alone cannot be trusted.
  const reader = request.body?.getReader();
  if (!reader) return Response.json({ status: "invalid-request" }, { status: 400 });
  const chunks: Uint8Array[] = [];
  let size = 0;
  let input: unknown;
  try {
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 32768) {
        await reader.cancel();
        return Response.json({ status: "invalid-request" }, { status: 413 });
      }
      chunks.push(value);
    }
    const bytes = new Uint8Array(size);
    let offset = 0;
    for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.byteLength; }
    input = JSON.parse(new TextDecoder().decode(bytes));
  } catch {
    return Response.json({ status: "invalid-request" }, { status: 400 });
  } finally {
    reader.releaseLock();
  }
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    return Response.json({ status: "invalid-request" }, { status: 400 });
  }
  const record = input as Record<string, unknown>;
  if (record.website !== "" || (record.locale !== "nb" && record.locale !== "en") ||
      typeof record.submissionId !== "string" || !/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(record.submissionId)) {
    return Response.json({ status: "invalid-request" }, { status: 400 });
  }
  const errors = validateQuote(record);
  if (Object.keys(errors).length) return Response.json({ status: "invalid", errors }, { status: 422 });
  const values = Object.fromEntries(quoteFields.map(field => [field, (record[field] as string).trim()])) as QuoteValues;
  try {
    await sendQuoteEmail(values, record.locale, record.submissionId);
    return Response.json({ status: "sent" });
  } catch {
    // Provider errors can contain personal data. Never log or return them.
    return Response.json({ status: "delivery-failed" }, { status: 503 });
  }
}
