export const quoteFields = ["name", "email", "phone", "service", "property", "size", "rooms", "location", "frequency", "timing", "details"] as const;
export type QuoteField = typeof quoteFields[number];
export type QuoteValues = Record<QuoteField, string>;
export type QuoteError = "required" | "email" | "phone" | "number" | "choice" | "tooLong";
export type QuoteErrors = Partial<Record<QuoteField, QuoteError>>;
export const serviceOptions = ["home", "move-out", "window", "other", "unsure"] as const;
export const frequencyOptions = ["once", "recurring", "unsure"] as const;
export const fieldLimits: Record<QuoteField, number> = {
  name: 120, email: 254, phone: 60, service: 30, property: 120,
  size: 20, rooms: 10, location: 160, frequency: 30, timing: 160, details: 3000,
};

export function validateQuote(input: unknown): QuoteErrors {
  const record = input && typeof input === "object" && !Array.isArray(input) ? input as Record<string, unknown> : {};
  const values = {} as QuoteValues;
  const errors: QuoteErrors = {};
  for (const field of quoteFields) {
    const value = record[field];
    values[field] = typeof value === "string" ? value.trim() : "";
    if (typeof value !== "string") errors[field] = "choice";
    else if (value.length > fieldLimits[field]) errors[field] = "tooLong";
  }
  for (const field of ["name", "email", "service"] as const) {
    if (!values[field]) errors[field] = "required";
  }
  if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = "email";
  if (values.phone && (!/^[+\d\s().\-]+$/.test(values.phone) || values.phone.replace(/\D/g, "").length < 5)) errors.phone = "phone";
  if (values.service && !serviceOptions.some(option => option === values.service)) errors.service = "choice";
  if (values.frequency && !frequencyOptions.some(option => option === values.frequency)) errors.frequency = "choice";
  for (const field of ["size", "rooms"] as const) {
    const value = values[field];
    const validFormat = field === "size" ? /^\d+(?:[.,]\d{1,2})?$/.test(value) : /^\d+$/.test(value);
    if (value && (!validFormat || Number(value.replace(",", ".")) <= 0 || !Number.isFinite(Number(value.replace(",", "."))))) errors[field] = "number";
  }
  return errors;
}
