import type { Dictionary } from "./types";

export const nb = {
  quote: {
    intro: {
      eyebrow: "Be om tilbud",
      heading: "Fortell oss hva du trenger",
      description: "Beskriv det viktigste om renholdet du ønsker. Opplysningene gir et utgangspunkt for å forstå behovet og avklare omfanget.",
    },
    form: {
      heading: "Om deg og oppdraget",
      requiredNote: "Felt merket med * må fylles ut. Resten er valgfritt.",
      optional: "valgfritt",
      groups: { contact: "Kontaktopplysninger", job: "Renholdet du ønsker", details: "Mer om behovet" },
      labels: {
        name: "Navn", email: "E-post", phone: "Telefon", service: "Type renhold",
        property: "Bolig eller arbeidsplass", size: "Omtrentlig størrelse i m²", rooms: "Antall rom",
        location: "Postnummer, sted eller område", frequency: "Hvor ofte", timing: "Ønsket tidspunkt", details: "Hva vil du ha hjelp med?",
      },
      serviceOptions: { home: "Hjemmerengjøring", "move-out": "Flyttevask", office: "Kontorrengjøring", deep: "Grundig rengjøring", other: "Annet / usikker" },
      frequencyOptions: { once: "Én gang", recurring: "Regelmessig", unsure: "Usikker" },
      choose: "Velg et alternativ",
      helpers: { timing: "Skriv gjerne en dato eller periode. Dette bekrefter ikke ledig kapasitet.", details: "Ta gjerne med oppgaver, prioriteringer og hensyn ved adkomst. Maks 3000 tegn." },
      expectation: "En forespørsel er ikke en bestilling. Omfang og tidspunkt må bekreftes før arbeidet avtales.",
      development: "Skjemaet er under utprøving. Opplysningene kontrolleres i nettleseren og på serveren, men lagres ikke og leveres ikke til Nordren. Bruk testopplysninger.",
      noScript: "JavaScript må være aktivert for å prøve skjemaet. Ingen opplysninger er sendt.",
      submit: "Send forespørsel",
      pending: "Kontrollerer opplysningene …",
      errorHeading: "Se over disse feltene",
      errors: {
        required: "Fyll ut dette feltet.", email: "Skriv en e-postadresse, for eksempel navn@domene.no.",
        phone: "Skriv et telefonnummer med minst fem sifre. Landskode, mellomrom og parenteser kan brukes.",
        number: "Skriv et positivt tall. Antall rom må være et heltall; areal kan ha opptil to desimaler.",
        choice: "Velg eller skriv en gyldig verdi.", tooLong: "Teksten er for lang. Forkort innholdet i feltet.",
      },
      unavailable: "Ikke sendt ennå. Opplysningene er kontrollert, men innsending er ikke tilkoblet. Ingenting er levert eller lagret.",
      failure: "Kontrollen kunne ikke fullføres. Forespørselen er ikke levert til Nordren. Opplysningene står fortsatt i skjemaet. Prøv igjen.",
    },
    help: { heading: "Usikker på hva du trenger?", contact: "Se kontaktsiden", services: "Utforsk tjenestene" },
  },
  contact: {
    intro: {
      eyebrow: "Kontakt",
      heading: "La oss snakke om renholdet du trenger",
      description: "Har du spørsmål om renhold til hjemmet eller arbeidsplassen? Her finner du veien videre.",
      primaryAction: "Be om tilbud",
    },
    options: {
      eyebrow: "Start med behovet ditt",
      heading: "Et tilbud eller et spørsmål?",
      quote: {
        heading: "Be om tilbud",
        description: "For deg som vet at du ønsker renhold og kan beskrive oppdraget.",
        action: "Gå til tilbudssiden",
      },
      enquiry: {
        heading: "Generelle spørsmål",
        description: "For deg som har spørsmål om tjenestene eller er usikker på hva slags renhold som passer.",
        action: "Se kontaktopplysninger",
      },
    },
    guidance: {
      eyebrow: "Nyttig å ha med",
      heading: "Gi oss et bilde av behovet",
      description: "Ta gjerne med det som er relevant for deg. Du trenger ikke ha alle detaljene klare.",
      items: [
        { id: "space", title: "Stedet og typen renhold", description: "Fortell om det gjelder et hjem eller en arbeidsplass, og hva slags rengjøring du ser for deg." },
        { id: "size", title: "Omtrentlig størrelse", description: "Areal og antall rom kan være nyttig, gjerne med litt informasjon om kjøkken og bad der det er relevant." },
        { id: "timing", title: "Hyppighet og ønsket tidspunkt", description: "Nevn om du ønsker hjelp én gang eller regelmessig, og om du har en ønsket dato eller periode." },
        { id: "attention", title: "Det du vil prioritere", description: "Beskriv gjerne områder eller oppgaver som trenger ekstra oppmerksomhet, og eventuelle særlige ønsker." },
        { id: "access", title: "Praktiske hensyn", description: "Nevn gjerne forhold ved adkomsten eller stedet som kan påvirke arbeidet." },
      ],
    },
    business: {
      eyebrow: "Kontakt- og virksomhetsopplysninger",
      heading: "Kontaktinformasjon og virksomhetsopplysninger",
      pending: "Verifiserte kontakt- og virksomhetsopplysninger publiseres her før lansering. Det er foreløpig ikke mulig å sende inn henvendelser eller tilbudsforespørsler på nettstedet.",
      details: [],
    },
    quote: {
      eyebrow: "Neste steg",
      heading: "Har du allerede oversikt over behovet?",
      description: "Gå videre til tilbudssiden, eller se nærmere på tjenestene våre.",
      primaryAction: "Be om tilbud",
      secondaryAction: "Se våre tjenester",
    },
  },
  pricing: {
    intro: {
      eyebrow: "Priser",
      heading: "En pris tilpasset oppdraget",
      description: "Behovet for renhold varierer fra sted til sted. Hos Nordren avklarer vi først hva du trenger hjelp med og omfanget av arbeidet, før vi gir deg et tilbud.",
      primaryAction: "Be om tilbud",
      secondaryAction: "Kontakt oss",
    },
    factors: {
      eyebrow: "Grunnlaget for tilbudet",
      heading: "Hva påvirker prisen?",
      description: "Størrelsen er én del av bildet. Oppgavene, tilstanden og de praktiske forholdene er også med på å avgjøre hvor omfattende renholdet blir.",
      items: [
        { id: "type", title: "Type renhold", description: "Hjemmerengjøring, flyttevask, kontorrengjøring og grundig rengjøring kan innebære ulike oppgaver og ulikt tidsbruk." },
        { id: "size", title: "Størrelse og rom", description: "Omtrentlig areal og antall rom gir et utgangspunkt. Fortell gjerne også hvor mange kjøkken og bad som skal rengjøres." },
        { id: "condition", title: "Omfang og tilstand", description: "Hvilke flater som skal rengjøres, og hvor mye rengjøring de trenger, påvirker arbeidsmengden." },
        { id: "frequency", title: "Hvor ofte du ønsker renhold", description: "Et enkeltoppdrag og regelmessig renhold kan ha ulikt omfang. Oppgi om du ønsker hjelp én gang eller over tid." },
        { id: "priorities", title: "Særlige ønsker", description: "Områder som trenger ekstra oppmerksomhet, eller oppgaver du ønsker å prioritere, bør tas med når vi avklarer tilbudet." },
        { id: "access", title: "Adkomst og tidspunkt", description: "Hvor stedet ligger, hvordan vi får tilgang, og når arbeidet kan gjøres, er praktiske forhold som kan påvirke planleggingen og omfanget." },
      ],
    },
    process: {
      eyebrow: "Fra forespørsel til tilbud",
      heading: "Slik avklarer vi oppdraget",
      steps: [
        { id: "need", title: "Fortell hva du trenger", description: "Beskriv stedet og renholdet du ønsker. En forespørsel er starten på en dialog, ikke en bestilling eller avtale." },
        { id: "scope", title: "Vi avklarer omfanget", description: "Sammen går vi gjennom oppgaver, prioriteringer og praktiske forhold som tilbudet skal bygge på." },
        { id: "quote", title: "Du mottar et tilbud", description: "Du får et tilbud basert på det vi har avklart. Les gjennom det og ta opp eventuelle spørsmål før du bestemmer deg." },
        { id: "agreement", title: "Vi avtaler arbeidet", description: "Arbeidet avtales først når tilbudet er akseptert og vi er enige om tidspunkt og praktiske detaljer." },
      ],
    },
    transparency: {
      eyebrow: "Et tydelig grunnlag",
      heading: "Vit hva tilbudet omfatter",
      description: "Tilbudet bør gjøre det avtalte omfanget tydelig før arbeidet avtales.",
      details: "Hvilke rom, flater og oppgaver er med? Er det noe som ikke inngår, eller som fortsatt må avklares? Ta opp spørsmål og ønsker om endringer før dere blir enige om oppdraget.",
    },
    faq: {
      eyebrow: "Spørsmål om pris",
      heading: "Greit å vite før du spør",
      items: [
        { id: "price-list", question: "Hvorfor er det ingen standard prisliste?", answer: "Vi har ikke publisert en verifisert prisliste ennå. Renholdsbehov varierer, og et tilbud må ta utgangspunkt i oppgavene og forholdene på stedet." },
        { id: "information", question: "Hva bør jeg oppgi for å få et tilbud?", answer: "Beskriv typen renhold, omtrentlig areal, antall rom og sted eller postnummer. Ta gjerne med ønsket tidspunkt, hvor ofte du ønsker renhold og områder som trenger særlig oppmerksomhet. Det er greit om ikke alle detaljer er klare ennå." },
        { id: "recurring", question: "Vurderes regelmessig renhold annerledes enn et enkeltoppdrag?", answer: "Hyppigheten kan påvirke hvilke oppgaver som trengs ved hvert besøk, og dermed grunnlaget for tilbudet. Regelmessig renhold betyr ikke i seg selv at en bestemt rabatt eller pris gjelder." },
        { id: "commitment", question: "Forplikter jeg meg ved å be om et tilbud?", answer: "En forespørsel oppretter ikke automatisk en bestilling eller avtale. Arbeidet avtales først etter at du har akseptert tilbudet og vi har avklart de praktiske detaljene." },
      ],
    },
    quote: {
      eyebrow: "Neste steg",
      heading: "Fortell oss hva du trenger",
      description: "Vi kan avklare omfanget og gi deg et tilbud.",
      primaryAction: "Be om tilbud",
      secondaryAction: "Kontakt oss",
    },
  },
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
    pricing: { heading: "Priser", title: "Priser | Nordren", description: "Se hva som påvirker et tilbud på renhold, hvilke opplysninger som er nyttige, og hvordan vi avklarer omfanget før arbeidet avtales." },
    about: { heading: "Om oss", title: "Om oss | Nordren", description: "Les om Nordrens tilnærming til renhold: tydelig kommunikasjon, respekt for hjem og arbeidsplasser og et avklart omfang før oppdraget." },
    contact: { heading: "Kontakt", title: "Kontakt | Nordren", description: "Forbered en henvendelse om renhold til Nordren. Se hvilke opplysninger som er nyttige, og hvordan behov og praktiske detaljer avklares." },
    quote: { heading: "Be om tilbud", title: "Be om tilbud | Nordren", description: "Beskriv renholdet du ønsker og de viktigste opplysningene om oppdraget. Tilbudsskjemaet er under utprøving; innsending er ikke tilkoblet ennå." },
  },
} satisfies Dictionary;
