import "server-only";
import { Resend } from "resend";
import { getDictionary } from "@/content";
import type { Locale } from "@/lib/i18n/locales";
import { frequencyOptions, quoteFields, serviceOptions, type QuoteValues } from "@/lib/quote-validation";

function escapeHtml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

// Called only after shared server validation has succeeded.
export async function sendQuoteEmail(values: QuoteValues, locale: Locale, submissionId: string) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("Email delivery unavailable");

  const content = getDictionary(locale).quote.form;
  const service = serviceOptions.find(option => option === values.service)!;
  const frequency = frequencyOptions.find(option => option === values.frequency);
  const heading = locale === "nb" ? "Ny tilbudsforespørsel" : "New quote request";
  const rows = quoteFields.filter(field => values[field]).map(field => ({
    label: content.labels[field],
    value: field === "service" ? content.serviceOptions[service]
      : field === "frequency" && frequency ? content.frequencyOptions[frequency] : values[field],
  }));
  rows.push({ label: locale === "nb" ? "Språk" : "Language", value: locale === "nb" ? "Norsk" : "English" });

  const title = heading.toLocaleUpperCase(locale);
  const fieldLabel = (label: string) => /[?:]$/.test(label) ? label : `${label}:`;
  const text = `${title}\n\n${rows.map(row => `${fieldLabel(row.label)}\n${row.value}`).join("\n\n")}\n`
    .replace(/\r\n|\r|\n/g, "\r\n");
  // Email clients may strip definition-list styling. Table rows, cell padding and
  // explicit breaks keep labels and values separated without relying on margins.
  const html = `<!doctype html>
<html lang="${locale}">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
<body style="margin:0;padding:16px;background-color:#ffffff;color:#222222;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;table-layout:fixed;border-collapse:collapse;font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:24px;">
    <tr><td style="padding:0 0 24px 0;"><h1 style="margin:0;font-size:22px;line-height:30px;">${escapeHtml(title)}</h1></td></tr>
    ${rows.map(row => `<tr><td valign="top" style="padding:0 0 20px 0;word-wrap:break-word;overflow-wrap:anywhere;word-break:break-word;">
      <strong>${escapeHtml(fieldLabel(row.label))}</strong><br>
      ${escapeHtml(row.value).replace(/\r\n|\r|\n/g, "<br>")}
    </td></tr>`).join("\n")}
  </table>
</body>
</html>`;

  const { data, error } = await new Resend(apiKey).emails.send({
    from: "Vasky nettside <website@vasky-renhold.no>",
    to: "post@vasky-renhold.no",
    replyTo: values.email,
    subject: `${heading} – ${content.serviceOptions[service]} – ${values.name.replace(/[\r\n\u0000-\u001f\u007f]/g, " ")}`,
    text,
    html,
  }, { idempotencyKey: `quote/${submissionId}` });
  if (error || !data?.id) throw new Error("Email delivery unavailable");
}
