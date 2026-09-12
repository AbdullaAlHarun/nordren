import type { Dictionary } from "./types";

export const nb = {
  home: {
    hero: {
      eyebrow: "For hjem og arbeidsplasser",
      heading: "Renhold du kan stole på.",
      description: "Profesjonelt renhold starter med å forstå hva du trenger. Fortell oss om hjemmet eller arbeidsplassen din, så avklarer vi oppdraget sammen.",
      primaryAction: "Be om tilbud",
      secondaryAction: "Se våre tjenester",
      photoPlaceholder: "Fotografi kommer",
    },
    services: {
      eyebrow: "Våre tjenester",
      heading: "Renhold tilpasset behovet ditt",
      description: "Ulike rom og situasjoner krever ulikt renhold. Finn tjenesten som passer det du trenger hjelp til.",
      items: [
        { id: "home", title: "Hjemmerengjøring", description: "Renhold i hjemmet, med utgangspunkt i rommene du bruker og behovene du har." },
        { id: "move-out", title: "Flyttevask", description: "Renhold ved flytting. Vi avklarer boligen og omfanget av oppdraget sammen." },
        { id: "office", title: "Kontorrengjøring", description: "Renhold av kontorer og arbeidsplasser, tilpasset hvordan lokalene brukes." },
        { id: "deep", title: "Grundig rengjøring", description: "For rom og områder som trenger en mer omfattende rengjøring." },
      ],
    },
    principles: {
      eyebrow: "Slik ønsker vi å jobbe",
      heading: "Godt renhold begynner med en god avklaring.",
      description: "For oss handler renhold om både arbeidet som gjøres og dialogen rundt det. Disse prinsippene er utgangspunktet vårt.",
      items: [
        { id: "communication", title: "Tydelig kommunikasjon", description: "En felles forståelse av hva som skal gjøres, og hva som er viktig for deg." },
        { id: "care", title: "Grundig arbeid", description: "Oppmerksomhet på detaljene og oppgavene vi har avtalt." },
        { id: "request", title: "En enkel start", description: "Du beskriver behovet. Vi tar dialogen videre og avklarer spørsmålene sammen." },
        { id: "needs", title: "Dine behov som utgangspunkt", description: "Omfanget av renholdet tar utgangspunkt i rommene, bruken og prioriteringene dine." },
      ],
    },
    process: {
      eyebrow: "Fra forespørsel til tilbud",
      heading: "Tre steg til et avklart oppdrag.",
      steps: [
        { id: "request", title: "Send forespørsel", description: "Fortell oss hva slags renhold du trenger, og litt om boligen eller lokalene." },
        { id: "clarify", title: "Vi avklarer behovet", description: "Sammen går vi gjennom omfang, ønsker og praktiske detaljer." },
        { id: "quote", title: "Du mottar et tilbud", description: "Du får et tilbud basert på det vi har avklart, som du kan ta stilling til." },
      ],
    },
    quote: {
      eyebrow: "La oss begynne med behovet ditt",
      heading: "Hva trenger du hjelp med?",
      description: "Fortell oss om renholdet du ønsker. Vi tar utgangspunkt i det du trenger når vi avklarer oppdraget.",
      primaryAction: "Be om tilbud",
      secondaryAction: "Kontakt oss",
    },
  },
  shell: {
    skipToContent: "Hopp til innhold",
    homeLabel: "Nordren – forsiden",
    primaryNavigation: "Hovedmeny",
    footerNavigation: "Navigasjon i bunntekst",
    menu: "Meny",
    navigation: {
      home: "Forside",
      services: "Tjenester",
      pricing: "Priser",
      about: "Om oss",
      contact: "Kontakt",
      quote: "Be om tilbud",
    },
  },
  placeholder: "Denne siden er under utvikling. Innhold og funksjoner kommer senere.",
  languageSwitcher: {
    label: "Velg språk",
    languages: {
      nb: { shortLabel: "NO", accessibleLabel: "Norsk bokmål" },
      en: { shortLabel: "EN", accessibleLabel: "English" },
    },
  },
  pages: {
    home: { heading: "Nordren", title: "Nordren | Renhold for hjem og arbeidsplasser", description: "Renhold for hjem og arbeidsplasser. Utforsk hjemmerengjøring, flyttevask, kontorrengjøring og grundig rengjøring hos Nordren." },
    services: { heading: "Tjenester", title: "Tjenester | Nordren", description: "Informasjon om Nordrens renholdstjenester kommer her." },
    pricing: { heading: "Priser", title: "Priser | Nordren", description: "Prisinformasjon fra Nordren kommer her." },
    about: { heading: "Om oss", title: "Om oss | Nordren", description: "Informasjon om Nordren kommer her." },
    contact: { heading: "Kontakt", title: "Kontakt | Nordren", description: "Kontaktinformasjon for Nordren kommer her." },
    quote: { heading: "Be om tilbud", title: "Be om tilbud | Nordren", description: "Her kommer muligheten til å sende en tilbudsforespørsel til Nordren." },
  },
} satisfies Dictionary;
