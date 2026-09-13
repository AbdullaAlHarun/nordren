import type { Dictionary } from "./types";

export const nb = {
  about: {
  "intro": {
    "eyebrow": "Om Nordren",
    "heading": "Renhold handler også om tillit.",
    "description": "Når du slipper et renholdsfirma inn i hjemmet eller på arbeidsplassen, betyr det noe hvordan du blir møtt. Vi ønsker at tydelig kommunikasjon, respekt for stedet og en felles forståelse av oppdraget skal prege samarbeidet.",
    "primaryAction": "Be om tilbud",
    "secondaryAction": "Se våre tjenester"
  },
  "principles": {
    "eyebrow": "Slik ønsker vi å jobbe",
    "heading": "Et godt samarbeid starter med forståelse.",
    "description": "Disse prinsippene beskriver hvordan vi ønsker å møte deg og arbeidet du trenger hjelp med.",
    "items": [
      {
        "id": "communication",
        "title": "Tydelig kommunikasjon",
        "description": "Vi ønsker å gjøre det lett å forstå hva som er foreslått, hva som er avklart, og hvilke spørsmål som fortsatt står åpne."
      },
      {
        "id": "care",
        "title": "Grundig arbeid",
        "description": "Oppmerksomhet på oppgavene og detaljene i det avtalte arbeidet er utgangspunktet vårt for godt renhold."
      },
      {
        "id": "respect",
        "title": "Respekt for hjem og arbeidsplasser",
        "description": "Hjemmet og arbeidsplassen din er rom andre bruker og er opptatt av. Vi ønsker å forstå hvilke hensyn som er viktige der."
      },
      {
        "id": "scope",
        "title": "Avtalt omfang",
        "description": "En felles forståelse av oppgavene gir et tydeligere grunnlag for samarbeidet. Ønsker om endringer bør avklares før de blir en del av oppdraget."
      },
      {
        "id": "dialogue",
        "title": "Enkel dialog",
        "description": "Det skal være rom for å stille spørsmål og forklare egne prioriteringer. Du trenger ikke kjenne alle detaljene om renhold for å ta kontakt."
      }
    ]
  },
  "expectations": {
    "eyebrow": "Fra første kontakt til oppdrag",
    "heading": "En forespørsel er starten på en dialog.",
    "steps": [
      {
        "id": "need",
        "title": "Du beskriver behovet",
        "description": "Fortell om boligen eller arbeidsplassen og hva du ønsker hjelp med. Det er også greit å være usikker på hvilken tjeneste som passer."
      },
      {
        "id": "scope",
        "title": "Vi avklarer omfanget",
        "description": "Sammen går vi gjennom aktuelle oppgaver, prioriteringer og praktiske hensyn som tilbudet skal bygge på."
      },
      {
        "id": "quote",
        "title": "Du tar stilling til tilbudet",
        "description": "Du får et tilbud basert på avklaringene. En forespørsel eller et mottatt tilbud betyr ikke at et oppdrag er bestilt."
      },
      {
        "id": "work",
        "title": "Arbeidet følger avtalen",
        "description": "Når du har akseptert tilbudet og vi har avtalt tidspunkt og praktiske detaljer, utføres arbeidet med utgangspunkt i det avklarte omfanget."
      }
    ]
  },
  "transparency": {
    "eyebrow": "Åpenhet om virksomheten",
    "heading": "Tydelig informasjon om hvem du avtaler med.",
    "description": "Verifiserte virksomhetsopplysninger er ennå ikke publisert her.",
    "details": "Denne delen er satt av til juridisk selskapsnavn, organisasjonsnummer, kontaktopplysninger og faktisk tjenesteområde. Eventuelle opplysninger om registreringer og forsikring legges bare til når de er bekreftet."
  },
  "quote": {
    "eyebrow": "La oss starte dialogen",
    "heading": "Fortell oss hva du trenger hjelp med.",
    "description": "Beskriv renholdet du ønsker, eller ta kontakt hvis du vil avklare noe før du ber om et tilbud.",
    "primaryAction": "Be om tilbud",
    "secondaryAction": "Kontakt oss"
  }
},
  services: {
  "intro": {
    "eyebrow": "Våre tjenester",
    "heading": "Renhold for ulike behov",
    "description": "Hva slags renhold trenger du? Omfanget avhenger av boligen eller arbeidsplassen, typen rengjøring og det som er viktig for deg. Her får du en oversikt over tjenestene våre.",
    "primaryAction": "Be om tilbud",
    "secondaryAction": "Kontakt oss"
  },
  "suitabilityLabel": "Kan passe for deg som",
  "items": [
    {
      "id": "home",
      "title": "Hjemmerengjøring",
      "description": "Renhold av hjemmet med utgangspunkt i hvordan du bruker rommene. Vi avklarer hvilke områder du ønsker hjelp med, og hva du vil prioritere.",
      "suitability": "ønsker hjelp med rengjøringen hjemme og vil avtale omfanget ut fra boligen og hverdagen din.",
      "action": "Be om tilbud på hjemmerengjøring"
    },
    {
      "id": "move-out",
      "title": "Flyttevask",
      "description": "Renhold av boligen i forbindelse med flytting. Boligens størrelse, tilstand og behov danner grunnlaget for å avklare oppdraget.",
      "suitability": "skal flytte fra en bolig og trenger å avklare rengjøringen før overlevering.",
      "action": "Be om tilbud på flyttevask"
    },
    {
      "id": "office",
      "title": "Kontorrengjøring",
      "description": "Renhold av kontorer og arbeidsplasser med utgangspunkt i lokalene og hvordan de brukes. Vi går gjennom behov og praktiske hensyn sammen.",
      "suitability": "har ansvar for et kontor eller en arbeidsplass og ønsker å diskutere renholdet av lokalene.",
      "action": "Be om tilbud på kontorrengjøring"
    },
    {
      "id": "deep",
      "title": "Grundig rengjøring",
      "description": "Mer omfattende rengjøring når enkelte rom eller områder trenger ekstra oppmerksomhet. Vi avklarer hva du ønsker å få gjort, før vi setter omfanget.",
      "suitability": "opplever at den vanlige rengjøringen ikke dekker behovet, eller ønsker å prioritere bestemte områder.",
      "action": "Be om tilbud på grundig rengjøring"
    }
  ],
  "choosing": {
    "heading": "Usikker på hvilken tjeneste som passer?",
    "description": "Du trenger ikke velge på forhånd. Beskriv situasjonen din og hva du ønsker hjelp med, så kan vi avklare hvilken type renhold og hvilket omfang som passer før vi gir et tilbud.",
    "action": "Beskriv behovet ditt"
  },
  "process": {
    "eyebrow": "Slik fungerer en forespørsel",
    "heading": "Fra behov til avtalt omfang",
    "steps": [
      {
        "id": "request",
        "title": "Beskriv stedet og behovet",
        "description": "Ta med hva slags bolig eller lokale det gjelder, omtrent hvor stort det er, og hva du ønsker hjelp med."
      },
      {
        "id": "clarify",
        "title": "Vi går gjennom detaljene",
        "description": "Vi avklarer prioriteringer og praktiske forhold, slik at det er tydelig hva tilbudet skal omfatte."
      },
      {
        "id": "quote",
        "title": "Vurder tilbudet",
        "description": "Tilbudet bygger på omfanget vi har avklart. Gå gjennom det og ta opp eventuelle spørsmål før du bestemmer deg."
      }
    ]
  },
  "quote": {
    "eyebrow": "Neste steg",
    "heading": "La oss avklare renholdet ditt",
    "description": "Send en forespørsel med utgangspunkt i behovet ditt, eller ta kontakt hvis du har spørsmål om tjenestene.",
    "primaryAction": "Be om tilbud",
    "secondaryAction": "Kontakt oss"
  }
},
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
    services: { heading: "Tjenester", title: "Renholdstjenester | Nordren", description: "Utforsk hjemmerengjøring, flyttevask, kontorrengjøring og grundig rengjøring. Beskriv behovet ditt, så avklarer vi omfanget før et tilbud." },
    pricing: { heading: "Priser", title: "Priser | Nordren", description: "Prisinformasjon fra Nordren kommer her." },
    about: { heading: "Om oss", title: "Om oss | Nordren", description: "Les om Nordrens tilnærming til renhold: tydelig kommunikasjon, respekt for hjem og arbeidsplasser og et avklart omfang før oppdraget." },
    contact: { heading: "Kontakt", title: "Kontakt | Nordren", description: "Kontaktinformasjon for Nordren kommer her." },
    quote: { heading: "Be om tilbud", title: "Be om tilbud | Nordren", description: "Her kommer muligheten til å sende en tilbudsforespørsel til Nordren." },
  },
} satisfies Dictionary;
