import type { ReactNode } from "react";
import { Geist } from "next/font/google";
import type { Locale } from "@/lib/i18n/locales";
import "@/app/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export function Document({ locale, children }: { locale: Locale; children: ReactNode }) {
  return (
    <html lang={locale} className={geistSans.variable}>
      <body>{children}</body>
    </html>
  );
}
