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
      serviceOptions: { home: "Husvask", "move-out": "Flyttevask", window: "Vindusvask", other: "Annet", unsure: "Usikker" },
      frequencyOptions: { once: "Én gang", recurring: "Regelmessig", unsure: "Usikker" },
      choose: "Velg et alternativ",
      helpers: { timing: "Skriv gjerne en dato eller periode. Dette bekrefter ikke ledig kapasitet.", details: "Ta gjerne med oppgaver, prioriteringer og hensyn ved adkomst. Maks 3000 tegn." },
      expectation: "En forespørsel er ikke en bestilling. Omfang og tidspunkt må bekreftes før arbeidet avtales.",
      development: "Skjemaet er under utprøving. Opplysningene kontrolleres i nettleseren og på serveren, men lagres ikke og leveres ikke til Vasky. Bruk testopplysninger.",
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
      failure: "Kontrollen kunne ikke fullføres. Forespørselen er ikke levert til Vasky. Opplysningene står fortsatt i skjemaet. Prøv igjen.",
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
  "intro": {
    "eyebrow": "Priser",
    "heading": "Priser for rene rom",
    "description": "Her finner du timepriser for husvask og vindusvask, fastpriser for flyttevask og priser på tilleggstjenester. Se hva som inngår, og fortell oss hva du trenger hjelp med.",
    "primaryAction": "Be om tilbud",
    "secondaryAction": "Kontakt oss"
  },
  "hourlyUnit": "per time",
  "home": {
    "heading": "Husvask",
    "scope": {
      "heading": "Dette inngår i standard husvask",
      "description": "Der det er relevant for boligen, omfatter standard husvask følgende oppgaver. Har du andre behov, kan du ta dem opp med oss.",
      "groups": [
        {
          "heading": "Rom og flater",
          "items": [
            "Støvtørking av tilgjengelige flater og karmer",
            "Utvendig rengjøring av kjøkkenflater og kjøkkeninnredning",
            "Utvendig rengjøring av baderomsinventar og sanitærutstyr",
            "Støvsuging av møbler, tepper og gulv",
            "Gulvvask"
          ]
        }
      ]
    },
    "timeHeading": "Veiledende tidsbruk",
    "timeNote": "Tidene er veiledende, ikke en garanti. Faktisk tidsbruk avhenger av størrelse, tilstand og omfang. En ryddig bolig kan vanligvis rengjøres raskere enn en bolig der eiendeler må flyttes underveis.",
    "estimates": [
      {
        "home": "Liten bolig / leilighet",
        "area": "Ca. 50–80 m²",
        "time": "Ca. 1,5–2,5 timer"
      },
      {
        "home": "Standard bolig",
        "area": "Ca. 90–140 m²",
        "time": "Ca. 2–4 timer"
      },
      {
        "home": "Større bolig",
        "area": "Ca. 150–200+ m²",
        "time": "Ca. 4–6 timer"
      }
    ]
  },
  "moveOut": {
    "heading": "Flyttevask",
    "description": "En grundig rengjøring som skal gjøre boligen klar for neste eier eller leietaker. Se fastprisene etter boligens areal og tilleggene nedenfor.",
    "tableCaption": "Fastpriser for flyttevask",
    "areaLabel": "Areal",
    "priceLabel": "Pris",
    "upTo": "Opptil",
    "scope": {
      "heading": "Dette kan inngå i standard flyttevask",
      "description": "Oppgavene nedenfor inngår der de er relevante og trygt tilgjengelige. Utvendig vindusvask utføres bare der vinduene kan nås på en trygg måte.",
      "groups": [
        {
          "heading": "Rom og flater",
          "items": [
            "Tørrmopping eller støvtørking av tak og vegger",
            "Vask av dører, dørkarmer, lister og karmer",
            "Utvendig rengjøring av lysbrytere og stikkontakter",
            "Rengjøring av vinduskarmer",
            "Støvsuging og grundig våtvask av alle gulv",
            "Innvendig og utvendig vindusvask der det er trygt og tilgjengelig",
            "Rengjøring av ventiler"
          ]
        },
        {
          "heading": "Kjøkken",
          "items": [
            "Innvendig og utvendig vask av kjøkkenskap og skuffer",
            "Rengjøring av benkeplater",
            "Rengjøring av vaskekum og kraner"
          ]
        },
        {
          "heading": "Bad",
          "items": [
            "Vask av fliser og vegger",
            "Rengjøring av toalett og servant",
            "Rengjøring av dusj og/eller badekar",
            "Rengjøring av gulvsluk"
          ]
        }
      ]
    },
    "extrasHeading": "Tillegg til flyttevask",
    "extraLabels": {
      "appliances": "Hvitevarer",
      "balcony": "Balkong/veranda",
      "storage": "Bod/kjeller",
      "doubleWindows": "Doble vinduer / innglasset balkong",
      "blinds": "Persienner",
      "fireplace": "Peis"
    },
    "units": {
      "each": "per stk.",
      "squareMetre": "per m²",
      "window": "per vindu"
    },
    "furnishedLabel": "Møblert bolig",
    "furnishedSuffix": "av fastprisen i tillegg",
    "parkingHeading": "Parkering ved flyttevask",
    "parkingNote": "Hvis det ikke er gratis parkering ved boligen, kan parkeringsutgifter komme i tillegg til prisen for flyttevask."
  },
  "window": {
    "heading": "Vindusvask",
    "description": "Vi tilbyr privat vindusvask for eneboliger, rekkehus og leiligheter.",
    "items": [
      "Innvendig vindusvask",
      "Utvendig vindusvask der vinduene er trygt tilgjengelige"
    ]
  },
  "context": {
    "heading": "Avklar behovet med oss",
    "description": "Renholdsbehov varierer med boligen og tilstanden. Tidsanslagene for husvask er veiledende. Fortell oss om ekstra behov, prioriteringer eller forhold ved adkomsten, så kan vi avklare omfanget sammen."
  },
  "quote": {
    "eyebrow": "Neste steg",
    "heading": "Hva trenger du hjelp med?",
    "description": "Beskriv boligen og renholdet du ønsker, så har vi et utgangspunkt for å avklare oppdraget.",
    "primaryAction": "Be om tilbud",
    "secondaryAction": "Kontakt oss"
  }
},
  about: {
  "intro": {
    "eyebrow": "Om Vasky",
    "heading": "Renhold handler også om tillit.",
    "description": "Vi startet Vasky med en ambisjon om å ta med oss omtanken og sansen for detaljer fra hotellverdenen til hjemmene og bedriftene vi besøker. For oss handler det om nøye renhold, tydelig kommunikasjon og respekt for eiendommen din.",
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
  "pricingAction": "Se priser og hva som inngår",
  "items": [
  {
    "id": "home",
    "title": "Husvask",
    "description": "Renhold av hjemmet med utgangspunkt i rommene og behovene dine. Standard husvask omfatter følgende der det er relevant.",
    "scope": [
      "Støvtørking av tilgjengelige flater og karmer",
      "Utvendig rengjøring av kjøkkenflater og kjøkkeninnredning",
      "Utvendig rengjøring av baderomsinventar og sanitærutstyr",
      "Støvsuging av møbler, tepper og gulv",
      "Gulvvask"
    ],
    "suitability": "ønsker hjelp med rengjøringen hjemme. Ekstra behov kan diskuteres med oss.",
    "action": "Be om tilbud på husvask"
  },
  {
    "id": "move-out",
    "title": "Flyttevask",
    "description": "Grundig rengjøring som skal gjøre boligen klar for neste eier eller leietaker. Arbeidet kan omfatte følgende der det er relevant og trygt tilgjengelig.",
    "scope": [
      "Tørrmopping eller støvtørking av tak og vegger, samt rengjøring av dører, karmer, lister og ventiler, samt utvendig rengjøring av brytere og stikkontakter",
      "Støvsuging og grundig våtvask av gulv",
      "Rengjøring av vinduskarmer og vindusvask innvendig og utvendig der det er trygt og tilgjengelig",
      "Innvendig og utvendig vask av kjøkkenskap og skuffer, samt rengjøring av benkeplater, vaskekum og kraner",
      "Rengjøring av fliser, vegger, toalett, servant, dusj eller badekar og gulvsluk på bad"
    ],
    "suitability": "skal flytte fra en bolig og trenger renhold før overlevering. På prissiden finner du full oversikt over standardomfang, fastpriser og tillegg.",
    "action": "Be om tilbud på flyttevask"
  },
  {
    "id": "window",
    "title": "Vindusvask",
    "description": "Privat vindusvask for eneboliger, rekkehus og leiligheter. Vi avklarer hvilke vinduer som skal vaskes, og hvordan de kan nås.",
    "scope": [
      "Innvendig vindusvask",
      "Utvendig vindusvask der vinduene er trygt tilgjengelige"
    ],
    "suitability": "ønsker hjelp med vindusvask hjemme. Utvendige vinduer vaskes bare der tilgangen er trygg.",
    "action": "Be om tilbud på vindusvask"
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
      heading: "Rene rom. Trygge hender.",
      description: "Husvask, flyttevask og vindusvask med omtanke for rommene dine. Vi legger vekt på detaljene, tydelig kommunikasjon og respekt for eiendommen din.",
      primaryAction: "Be om tilbud",
      secondaryAction: "Se våre tjenester",
      photoPlaceholder: "Fotografi kommer",
    },
    services: {
      eyebrow: "Våre tjenester",
      heading: "Renhold tilpasset behovet ditt",
      description: "Ulike rom og situasjoner krever ulikt renhold. Finn tjenesten som passer det du trenger hjelp til.",
      items: [
        { id: "home", title: "Husvask", description: "Renhold i hjemmet, med utgangspunkt i rommene du bruker og behovene du har." },
        { id: "move-out", title: "Flyttevask", description: "Renhold ved flytting. Vi avklarer boligen og omfanget av oppdraget sammen." },
        { id: "window", title: "Vindusvask", description: "Privat vindusvask for eneboliger, rekkehus og leiligheter, innvendig og utvendig der det er trygt tilgjengelig." },
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
    homeLabel: "Vasky – forsiden",
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
    home: { heading: "Vasky", title: "Vasky | Renhold for hjem og arbeidsplasser", description: "Renhold for hjem og arbeidsplasser. Utforsk husvask, flyttevask og vindusvask hos Vasky." },
    services: { heading: "Tjenester", title: "Renholdstjenester | Vasky", description: "Utforsk husvask, flyttevask og vindusvask. Beskriv behovet ditt, så avklarer vi omfanget før et tilbud." },
    pricing: { heading: "Priser", title: "Priser | Vasky", description: "Se timepriser for husvask og vindusvask, fastpriser for flyttevask og priser på tilleggstjenester hos Vasky." },
    about: { heading: "Om oss", title: "Om oss | Vasky", description: "Les om Vaskys tilnærming til renhold: tydelig kommunikasjon, respekt for hjem og arbeidsplasser og et avklart omfang før oppdraget." },
    contact: { heading: "Kontakt", title: "Kontakt | Vasky", description: "Forbered en henvendelse om renhold til Vasky. Se hvilke opplysninger som er nyttige, og hvordan behov og praktiske detaljer avklares." },
    quote: { heading: "Be om tilbud", title: "Be om tilbud | Vasky", description: "Beskriv renholdet du ønsker og de viktigste opplysningene om oppdraget. Tilbudsskjemaet er under utprøving; innsending er ikke tilkoblet ennå." },
  },
} satisfies Dictionary;
