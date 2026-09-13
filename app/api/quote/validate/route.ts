import { validateQuote } from "@/lib/quote-validation";

// Validation only: never store, log or forward customer information here.
export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.startsWith("application/json")) {
    return Response.json({ status: "invalid-request" }, { status: 415 });
  }
  // Bound the body while reading; Content-Length alone cannot be trusted.
  const reader = request.body?.getReader();
  if (!reader) return Response.json({ status: "invalid-request" }, { status: 400 });
  const chunks: Uint8Array[] = [];
  let size = 0;
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
    const errors = validateQuote(JSON.parse(new TextDecoder().decode(bytes)));
    if (Object.keys(errors).length) return Response.json({ status: "invalid", errors }, { status: 422 });
    return Response.json({ status: "delivery-unavailable" });
  } catch {
    return Response.json({ status: "invalid-request" }, { status: 400 });
  } finally {
    reader.releaseLock();
  }
}
