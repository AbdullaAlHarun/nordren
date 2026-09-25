import type { Dictionary } from "./types";

export const en = {
  quote: {
    intro: {
      eyebrow: "Request a quote",
      heading: "Tell us what you need",
      description: "Share the key details about the cleaning you have in mind. They provide a starting point for understanding your needs and discussing the scope.",
    },
    form: {
      heading: "About you and the work",
      requiredNote: "Fields marked * are required. Everything else is optional.",
      optional: "optional",
      groups: { contact: "Contact details", job: "Your cleaning needs", details: "A little more detail" },
      labels: {
        name: "Name", email: "Email", phone: "Phone number", service: "Type of cleaning",
        property: "Home or workplace", size: "Approximate size in m²", rooms: "Number of rooms",
        location: "Postcode, town or area", frequency: "Frequency", timing: "Preferred timing", details: "What would you like help with?",
      },
      serviceOptions: { home: "Home cleaning", "move-out": "Move-out cleaning", window: "Window cleaning", other: "Other", unsure: "Not sure" },
      frequencyOptions: { once: "One-time", recurring: "Recurring", unsure: "Not sure" },
      choose: "Choose an option",
      helpers: { timing: "A date or a period is fine. This does not confirm availability.", details: "Include tasks, priorities and access considerations. Up to 3000 characters." },
      expectation: "An enquiry is not a booking. Scope and timing still need to be confirmed before work is agreed.",
      development: "This form is being tested. Details are checked in your browser and on the server, but are not stored or delivered to Vasky. Please use test information.",
      noScript: "Enable JavaScript to try the form. No information has been sent.",
      submit: "Send enquiry",
      pending: "Checking your details …",
      errorHeading: "Please check these fields",
      errors: {
        required: "Complete this field.", email: "Enter an email address, such as name@domain.com.",
        phone: "Enter a phone number with at least five digits. Country codes, spaces and brackets are welcome.",
        number: "Enter a positive number. Rooms must be a whole number; size can have up to two decimal places.",
        choice: "Choose or enter a valid value.", tooLong: "This entry is too long. Please shorten it.",
      },
      unavailable: "Not sent yet. Your information passed validation, but delivery is not connected. Nothing was delivered or stored.",
      failure: "The check could not be completed. Your enquiry has not been delivered to Vasky. Your entries are still in the form. Please try again.",
    },
    help: { heading: "Not sure what you need?", contact: "Visit the contact page", services: "Explore our services" },
  },
  contact: {
    intro: {
      eyebrow: "Contact",
      heading: "Let’s talk about the cleaning you need",
      description: "Have a question about cleaning for your home or workplace? Find the right place to start here.",
      primaryAction: "Request a quote",
    },
    options: {
      eyebrow: "Start with what you need",
      heading: "A quote or a question?",
      quote: {
        heading: "Request a quote",
        description: "For when you know you need cleaning and can describe the work.",
        action: "Go to the quote page",
      },
      enquiry: {
        heading: "General enquiries",
        description: "For questions about our services or help understanding which type of cleaning fits your needs.",
        action: "View contact details",
      },
    },
    guidance: {
      eyebrow: "Helpful details",
      heading: "Help us understand your needs",
      description: "Include whatever is relevant to you. You do not need to have every detail worked out.",
      items: [
        { id: "space", title: "The space and type of cleaning", description: "Let us know whether it is a home or workplace and what kind of cleaning you have in mind." },
        { id: "size", title: "Approximate size", description: "The floor area and number of rooms can help, along with a little about kitchens and bathrooms where relevant." },
        { id: "timing", title: "Frequency and preferred timing", description: "Mention whether you need a one-time clean or regular help, and any preferred date or period." },
        { id: "attention", title: "Your priorities", description: "Describe any areas or tasks that need extra attention and any specific requests you would like to discuss." },
        { id: "access", title: "Practical considerations", description: "Mention anything about access or the property that may affect the work." },
      ],
    },
    business: {
      eyebrow: "Contact and business details",
      heading: "Contact information and business details",
      pending: "Verified contact and business details will be published here before launch. The website cannot accept enquiries or quote requests yet.",
      details: [],
    },
    quote: {
      eyebrow: "The next step",
      heading: "Already know what you need?",
      description: "Visit the quote page or take a closer look at our services.",
      primaryAction: "Request a quote",
      secondaryAction: "View services",
    },
  },
  pricing: {
  "intro": {
    "eyebrow": "Pricing",
    "heading": "Cleaning prices",
    "description": "Find hourly rates for home and window cleaning, fixed prices for move-out cleaning and the available extras. See what is included and tell us what you need.",
    "primaryAction": "Request a quote",
    "secondaryAction": "Contact us"
  },
  "hourlyUnit": "per hour",
  "home": {
    "heading": "Home cleaning",
    "scope": {
      "heading": "Standard home cleaning includes",
      "description": "Where relevant to your home, standard cleaning covers the following tasks. You can discuss any additional needs with us.",
      "groups": [
        {
          "heading": "Rooms and surfaces",
          "items": [
            "Dusting accessible surfaces and frames",
            "Cleaning kitchen surfaces and the outside of kitchen units",
            "Cleaning the exterior of bathroom fittings and sanitary fixtures",
            "Vacuuming furniture, carpets and floors",
            "Mopping floors"
          ]
        }
      ]
    },
    "timeHeading": "Indicative cleaning times",
    "timeNote": "These are estimates, not guaranteed completion times. Actual time depends on size, condition and scope. A tidy home can generally be cleaned faster than one where belongings need to be moved during cleaning.",
    "estimates": [
      {
        "home": "Small home / apartment",
        "area": "Approx. 50–80 m²",
        "time": "Approx. 1.5–2.5 hours"
      },
      {
        "home": "Standard home",
        "area": "Approx. 90–140 m²",
        "time": "Approx. 2–4 hours"
      },
      {
        "home": "Larger home",
        "area": "Approx. 150–200+ m²",
        "time": "Approx. 4–6 hours"
      }
    ]
  },
  "moveOut": {
    "heading": "Move-out cleaning",
    "description": "A thorough clean to prepare the home for its next owner or tenant. Fixed prices are based on floor area; additional services are listed below.",
    "tableCaption": "Fixed prices for move-out cleaning",
    "areaLabel": "Floor area",
    "priceLabel": "Price",
    "upTo": "Up to",
    "scope": {
      "heading": "What standard move-out cleaning can include",
      "description": "The following tasks are included where relevant and safely accessible. Exterior windows are cleaned only where they can be reached safely.",
      "groups": [
        {
          "heading": "Rooms and surfaces",
          "items": [
            "Dry mopping or dusting ceilings and walls",
            "Cleaning doors, door frames, skirting boards and trim",
            "Cleaning the outside of light switches and electrical outlets",
            "Cleaning window frames and sills",
            "Vacuuming and thoroughly wet-mopping all floors",
            "Interior and exterior window cleaning where safely accessible",
            "Cleaning vents"
          ]
        },
        {
          "heading": "Kitchen",
          "items": [
            "Cleaning kitchen cupboards and drawers inside and out",
            "Cleaning worktops",
            "Cleaning the sink and taps"
          ]
        },
        {
          "heading": "Bathroom",
          "items": [
            "Cleaning tiles and walls",
            "Cleaning the toilet and washbasin",
            "Cleaning the shower and/or bathtub",
            "Cleaning floor drains"
          ]
        }
      ]
    },
    "extrasHeading": "Move-out cleaning extras",
    "extraLabels": {
      "appliances": "Appliances",
      "balcony": "Balcony/veranda",
      "storage": "Storage room/basement",
      "doubleWindows": "Double windows / glazed balcony",
      "blinds": "Blinds",
      "fireplace": "Fireplace"
    },
    "units": {
      "each": "each",
      "squareMetre": "per m²",
      "window": "per window"
    },
    "furnishedLabel": "Furnished property",
    "furnishedSuffix": "of the fixed price added",
    "parkingHeading": "Parking for move-out cleaning",
    "parkingNote": "If free parking is not available at the property, parking charges may be added to the move-out cleaning price."
  },
  "window": {
    "heading": "Window cleaning",
    "description": "We offer private window cleaning for detached houses, terraced houses and apartments.",
    "items": [
      "Interior window cleaning",
      "Exterior window cleaning where windows are safely accessible"
    ]
  },
  "context": {
    "heading": "Discuss your needs with us",
    "description": "Cleaning needs vary with the property and its condition. Home-cleaning time estimates are indicative. Tell us about additional needs, priorities or access considerations so we can clarify the scope together."
  },
  "quote": {
    "eyebrow": "The next step",
    "heading": "How can we help?",
    "description": "Tell us about the property and the cleaning you need so we have a starting point for discussing the work.",
    "primaryAction": "Request a quote",
    "secondaryAction": "Contact us"
  }
},
  about: {
  "intro": {
    "eyebrow": "About Vasky",
    "heading": "Cleaning starts with trust.",
    "description": "We started Vasky with the ambition of bringing a hotel-inspired standard of care to the homes and businesses we serve. That means an approach built around careful cleaning, attention to detail, clear communication and respect for your property.",
    "primaryAction": "Request a quote",
    "secondaryAction": "Explore our services"
  },
  "principles": {
    "eyebrow": "How we aim to work",
    "heading": "Understanding comes first.",
    "description": "These principles describe how we aim to approach both the conversation with you and the work you need help with.",
    "items": [
      {
        "id": "communication",
        "title": "Clear communication",
        "description": "We aim to make it easy to understand what has been proposed, what has been agreed and which questions still need an answer."
      },
      {
        "id": "care",
        "title": "Care in the work",
        "description": "Attention to the tasks and details within the agreed scope is our starting point for a thorough clean."
      },
      {
        "id": "respect",
        "title": "Respect for homes and workplaces",
        "description": "Your home or workplace matters to the people who use it. We want to understand the considerations that are important in your space."
      },
      {
        "id": "scope",
        "title": "An agreed scope",
        "description": "A shared understanding of the tasks provides a clearer basis for working together. Any changes should be discussed before becoming part of the job."
      },
      {
        "id": "dialogue",
        "title": "Straightforward dialogue",
        "description": "There should be room to ask questions and explain your priorities. You do not need to know all the details of cleaning to get in touch."
      }
    ]
  },
  "expectations": {
    "eyebrow": "From first contact to the work itself",
    "heading": "An enquiry opens a conversation.",
    "steps": [
      {
        "id": "need",
        "title": "Tell us what you need",
        "description": "Describe your home or workplace and the help you have in mind. It is fine if you are not yet sure which service fits."
      },
      {
        "id": "scope",
        "title": "We clarify the scope",
        "description": "Together, we discuss the tasks, priorities and practical considerations that will inform the quote."
      },
      {
        "id": "quote",
        "title": "Consider your quote",
        "description": "You receive a quote based on that discussion. Sending an enquiry or receiving a quote does not confirm a booking."
      },
      {
        "id": "work",
        "title": "The agreement guides the work",
        "description": "Once you have accepted the quote and we have agreed on timing and practical details, the work is carried out according to the clarified scope."
      }
    ]
  },
  "transparency": {
    "eyebrow": "Business transparency",
    "heading": "Know who you are making an agreement with.",
    "description": "Verified business details have not yet been published here.",
    "details": "This section is reserved for the legal company name, organisation number, contact details and actual service area. Information about any registrations or insurance will only be added once confirmed."
  },
  "quote": {
    "eyebrow": "Start a conversation",
    "heading": "Tell us how we can help.",
    "description": "Describe the cleaning you have in mind, or get in touch if you would like to discuss something before requesting a quote.",
    "primaryAction": "Request a quote",
    "secondaryAction": "Contact us"
  }
},
  services: {
  "intro": {
    "eyebrow": "Our services",
    "heading": "Cleaning for different needs",
    "description": "The right scope depends on your home or workplace, the type of cleaning and what matters to you. Explore our services to find a starting point for your enquiry.",
    "primaryAction": "Request a quote",
    "secondaryAction": "Contact us"
  },
  "suitabilityLabel": "May suit you if",
  "pricingAction": "See prices and inclusions",
  "items": [
  {
    "id": "home",
    "title": "Home cleaning",
    "description": "Cleaning shaped around your home and your needs. Standard home cleaning includes the following, where relevant.",
    "scope": [
      "Dusting accessible surfaces and frames",
      "Cleaning kitchen surfaces and the outside of kitchen units",
      "Cleaning the exterior of bathroom fittings and sanitary fixtures",
      "Vacuuming furniture, carpets and floors",
      "Mopping floors"
    ],
    "suitability": "you would like help cleaning your home. Additional needs can be discussed with us.",
    "action": "Request a home cleaning quote"
  },
  {
    "id": "move-out",
    "title": "Move-out cleaning",
    "description": "A thorough clean to prepare the home for its next owner or tenant. The work can include the following, where relevant and safely accessible.",
    "scope": [
      "Dry mopping or dusting ceilings and walls, plus cleaning doors, frames, skirting boards, the outside of switches and sockets, and vents",
      "Vacuuming and thoroughly wet-mopping floors",
      "Cleaning window frames and sills, and interior and exterior windows where safely accessible",
      "Cleaning kitchen cupboards and drawers inside and out, plus worktops, the sink and taps",
      "Cleaning bathroom tiles, walls, the toilet, washbasin, shower or bathtub, and floor drains"
    ],
    "suitability": "you are moving out and need cleaning before handing over the property. The Pricing page has the full standard scope, fixed prices and extras.",
    "action": "Request a move-out cleaning quote"
  },
  {
    "id": "window",
    "title": "Window cleaning",
    "description": "Private window cleaning for detached houses, terraced houses and apartments. We discuss which windows need cleaning and how they can be reached.",
    "scope": [
      "Interior window cleaning",
      "Exterior window cleaning where windows are safely accessible"
    ],
    "suitability": "you would like help with windows at home. Exterior windows are cleaned only where access is safe.",
    "action": "Request a window cleaning quote"
  }
],
  "choosing": {
    "heading": "Not sure which service fits?",
    "description": "You do not need to choose in advance. Describe your situation and what you would like help with. We can clarify the type and scope of cleaning before preparing a quote.",
    "action": "Tell us what you need"
  },
  "process": {
    "eyebrow": "What to expect from an enquiry",
    "heading": "From your needs to an agreed scope",
    "steps": [
      {
        "id": "request",
        "title": "Describe the space and the work",
        "description": "Tell us about the home or premises, its approximate size and the cleaning you have in mind."
      },
      {
        "id": "clarify",
        "title": "We work through the details",
        "description": "We discuss priorities and practical considerations to establish what the quote should cover."
      },
      {
        "id": "quote",
        "title": "Consider the quote",
        "description": "Your quote reflects the scope we have discussed. Review it and raise any questions before deciding."
      }
    ]
  },
  "quote": {
    "eyebrow": "The next step",
    "heading": "Let’s discuss your cleaning needs",
    "description": "Start with an enquiry about the cleaning you have in mind, or contact us with questions about our services.",
    "primaryAction": "Request a quote",
    "secondaryAction": "Contact us"
  }
},
  home: {
    hero: {
      eyebrow: "For homes and workplaces",
      heading: "Clean spaces. Trusted hands.",
      description: "Home cleaning, move-out cleaning and window cleaning with care for your space. Our approach centres on attention to detail, clear communication and respect for your property.",
      primaryAction: "Request a quote",
      secondaryAction: "Explore our services",
      photoPlaceholder: "Photography to follow",
    },
    services: {
      eyebrow: "Our services",
      heading: "The right clean for your space",
      description: "Different spaces and occasions call for different kinds of cleaning. Find the service that fits what you need.",
      items: [
        { id: "home", title: "Home cleaning", description: "Cleaning for your home, shaped around the rooms you use and what you need." },
        { id: "move-out", title: "Move-out cleaning", description: "Cleaning when you move. We’ll discuss the property and the scope of the work with you." },
        { id: "window", title: "Window cleaning", description: "Private window cleaning for houses and apartments, inside and outside where safely accessible." },
      ],
    },
    principles: {
      eyebrow: "Our approach",
      heading: "A good clean starts with a clear understanding.",
      description: "We believe the conversation around a job matters as much as the work itself. These principles guide our approach.",
      items: [
        { id: "communication", title: "Clear communication", description: "A shared understanding of the work involved and what matters to you." },
        { id: "care", title: "Care in the details", description: "Attention to the details and the tasks we have agreed on." },
        { id: "request", title: "A straightforward start", description: "Tell us what you need. We’ll continue the conversation and work through your questions together." },
        { id: "needs", title: "Your needs come first", description: "The scope of the clean starts with your space, how you use it and your priorities." },
      ],
    },
    process: {
      eyebrow: "From enquiry to quote",
      heading: "Three steps to a clear plan.",
      steps: [
        { id: "request", title: "Send an enquiry", description: "Tell us what kind of cleaning you need and a little about your home or premises." },
        { id: "clarify", title: "We discuss your needs", description: "Together, we’ll go through the scope, your preferences and the practical details." },
        { id: "quote", title: "Receive your quote", description: "You’ll receive a quote based on what we’ve discussed, ready for you to consider." },
      ],
    },
    quote: {
      eyebrow: "Let’s start with what you need",
      heading: "How can we help?",
      description: "Tell us about the cleaning you have in mind. Your needs will be the starting point for our conversation.",
      primaryAction: "Request a quote",
      secondaryAction: "Contact us",
    },
  },
  shell: {
    skipToContent: "Skip to content",
    homeLabel: "Vasky – home",
    primaryNavigation: "Main navigation",
    footerNavigation: "Footer navigation",
    menu: "Menu",
    navigation: {
      home: "Home",
      services: "Services",
      pricing: "Pricing",
      about: "About",
      contact: "Contact",
      quote: "Request a quote",
    },
  },
  placeholder: "This page is under development. Content and features will be added later.",
  languageSwitcher: {
    label: "Choose language",
    languages: {
      nb: { shortLabel: "NO", accessibleLabel: "Norsk bokmål" },
      en: { shortLabel: "EN", accessibleLabel: "English" },
    },
  },
  pages: {
    home: { heading: "Vasky", title: "Vasky | Cleaning for homes and workplaces", description: "Cleaning for homes and workplaces. Explore home cleaning, move-out cleaning and window cleaning with Vasky." },
    services: { heading: "Services", title: "Cleaning services | Vasky", description: "Explore home cleaning, move-out cleaning and window cleaning. Tell us what you need so we can clarify the scope before preparing a quote." },
    pricing: { heading: "Pricing", title: "Pricing | Vasky", description: "View hourly rates for home and window cleaning, fixed move-out cleaning prices and additional services at Vasky." },
    about: { heading: "About us", title: "About us | Vasky", description: "Learn about Vasky’s approach to cleaning: clear communication, respect for homes and workplaces, and an agreed scope before work begins." },
    contact: { heading: "Contact", title: "Contact | Vasky", description: "Prepare a cleaning enquiry for Vasky. Learn which details are helpful and how we discuss your needs and practical arrangements." },
    quote: { heading: "Request a quote", title: "Request a quote | Vasky", description: "Describe the cleaning you need and share the key details about the work. The quote form is being tested; delivery is not connected yet." },
  },
} satisfies Dictionary;
