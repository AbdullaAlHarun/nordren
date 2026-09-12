import type { Dictionary } from "./types";

export const en = {
  placeholder: "This page is under development. Content and features will be added later.",
  languageSwitcher: {
    label: "Choose language",
    languages: {
      nb: { shortLabel: "NO", accessibleLabel: "Norsk bokmål" },
      en: { shortLabel: "EN", accessibleLabel: "English" },
    },
  },
  pages: {
    home: { heading: "Nordren", title: "Nordren", description: "The Nordren website is under development." },
    services: { heading: "Services", title: "Services | Nordren", description: "Information about Nordren's cleaning services will be available here." },
    pricing: { heading: "Pricing", title: "Pricing | Nordren", description: "Pricing information from Nordren will be available here." },
    about: { heading: "About us", title: "About us | Nordren", description: "Information about Nordren will be available here." },
    contact: { heading: "Contact", title: "Contact | Nordren", description: "Contact information for Nordren will be available here." },
    quote: { heading: "Request a quote", title: "Request a quote | Nordren", description: "The option to send Nordren a quote request will be available here." },
  },
} satisfies Dictionary;
