import type { Dictionary } from "./types";

export const nb = {
  placeholder: "Denne siden er under utvikling. Innhold og funksjoner kommer senere.",
  languageSwitcher: {
    label: "Velg språk",
    languages: {
      nb: { shortLabel: "NO", accessibleLabel: "Norsk bokmål" },
      en: { shortLabel: "EN", accessibleLabel: "English" },
    },
  },
  pages: {
    home: { heading: "Nordren", title: "Nordren", description: "Nordrens nettsted er under utvikling." },
    services: { heading: "Tjenester", title: "Tjenester | Nordren", description: "Informasjon om Nordrens renholdstjenester kommer her." },
    pricing: { heading: "Priser", title: "Priser | Nordren", description: "Prisinformasjon fra Nordren kommer her." },
    about: { heading: "Om oss", title: "Om oss | Nordren", description: "Informasjon om Nordren kommer her." },
    contact: { heading: "Kontakt", title: "Kontakt | Nordren", description: "Kontaktinformasjon for Nordren kommer her." },
    quote: { heading: "Be om tilbud", title: "Be om tilbud | Nordren", description: "Her kommer muligheten til å sende en tilbudsforespørsel til Nordren." },
  },
} satisfies Dictionary;
