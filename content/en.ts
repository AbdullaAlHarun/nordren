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
      serviceOptions: { home: "Home cleaning", "move-out": "Move-out cleaning", office: "Office cleaning", deep: "Deep cleaning", other: "Other / not sure" },
      frequencyOptions: { once: "One-time", recurring: "Recurring", unsure: "Not sure" },
      choose: "Choose an option",
      helpers: { timing: "A date or a period is fine. This does not confirm availability.", details: "Include tasks, priorities and access considerations. Up to 3000 characters." },
      expectation: "An enquiry is not a booking. Scope and timing still need to be confirmed before work is agreed.",
      development: "This form is being tested. Details are checked in your browser and on the server, but are not stored or delivered to Nordren. Please use test information.",
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
      failure: "The check could not be completed. Your enquiry has not been delivered to Nordren. Your entries are still in the form. Please try again.",
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
    intro: {
      eyebrow: "Pricing",
      heading: "A price based on the work",
      description: "Every space has different cleaning needs. At Nordren, we first discuss what you need and clarify the scope of the work before preparing a quote.",
      primaryAction: "Request a quote",
      secondaryAction: "Contact us",
    },
    factors: {
      eyebrow: "The basis for your quote",
      heading: "What affects the price?",
      description: "Size is part of the picture. The tasks, the condition of the space and practical considerations also help determine how much work is involved.",
      items: [
        { id: "type", title: "Type of cleaning", description: "Home cleaning, move-out cleaning, office cleaning and deep cleaning can involve different tasks and take different amounts of time." },
        { id: "size", title: "Size and rooms", description: "The approximate floor area and number of rooms provide a starting point. It also helps to know how many kitchens and bathrooms need cleaning." },
        { id: "condition", title: "Scope and condition", description: "The surfaces to be cleaned and the attention they need affect the amount of work involved." },
        { id: "frequency", title: "How often you need cleaning", description: "A one-time job and regular cleaning can involve different scopes. Let us know whether you need a single visit or ongoing help." },
        { id: "priorities", title: "Specific requests", description: "Areas needing extra attention and tasks you would like to prioritise should be part of the discussion when we prepare your quote." },
        { id: "access", title: "Access and timing", description: "The location, access to the property and when the work can take place are practical factors that can affect planning and the scope of the job." },
      ],
    },
    process: {
      eyebrow: "From enquiry to quote",
      heading: "How we work out the details",
      steps: [
        { id: "need", title: "Tell us what you need", description: "Describe the space and the cleaning you have in mind. An enquiry starts a conversation; it does not create a booking or agreement." },
        { id: "scope", title: "We clarify the scope", description: "Together, we discuss the tasks, priorities and practical considerations that will form the basis of your quote." },
        { id: "quote", title: "Receive your quote", description: "You receive a quote based on what we have discussed. Review it and raise any questions before deciding." },
        { id: "agreement", title: "Agree on the work", description: "Work is only arranged once you have accepted the quote and we have agreed on timing and practical details." },
      ],
    },
    transparency: {
      eyebrow: "A clear starting point",
      heading: "Understand what your quote covers",
      description: "The quote should make the agreed scope clear before the work is arranged.",
      details: "Which rooms, surfaces and tasks are included? Is anything excluded or still to be clarified? Raise questions and discuss any changes before agreeing to the work.",
    },
    faq: {
      eyebrow: "Pricing questions",
      heading: "Before you request a quote",
      items: [
        { id: "price-list", question: "Why is there no standard price list?", answer: "We have not yet published a verified price list. Cleaning needs vary, and a quote needs to reflect the tasks and conditions at the property." },
        { id: "information", question: "What information helps you prepare a quote?", answer: "Describe the type of cleaning, approximate floor area, number of rooms and location or postcode. Include your preferred timing, how often you need cleaning and any areas that need particular attention. It is fine if some details still need to be worked out." },
        { id: "recurring", question: "Can regular cleaning be quoted differently from a one-time job?", answer: "Frequency can affect the tasks needed at each visit and therefore the basis of the quote. Regular cleaning does not in itself imply a particular discount or rate." },
        { id: "commitment", question: "Does requesting a quote commit me to a booking?", answer: "An enquiry does not automatically create a booking or agreement. Work is only arranged after you have accepted the quote and we have agreed on the practical details." },
      ],
    },
    quote: {
      eyebrow: "The next step",
      heading: "Tell us what you need",
      description: "We can discuss the scope and prepare a quote for you.",
      primaryAction: "Request a quote",
      secondaryAction: "Contact us",
    },
  },
  about: {
  "intro": {
    "eyebrow": "About Nordren",
    "heading": "Cleaning starts with trust.",
    "description": "Inviting a cleaning company into your home or workplace is a personal decision. We want clear communication, respect for your space and a shared understanding of the work to shape our relationship with you.",
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
  "items": [
    {
      "id": "home",
      "title": "Home cleaning",
      "description": "Cleaning for your home, shaped around how you use your rooms. We discuss the areas you would like help with and what you want to prioritise.",
      "suitability": "you would like help with cleaning at home and want to agree on a scope that reflects your space and daily life.",
      "action": "Request a home cleaning quote"
    },
    {
      "id": "move-out",
      "title": "Move-out cleaning",
      "description": "Cleaning a property when you move out. The size, condition and needs of the property provide the starting point for discussing the work.",
      "suitability": "you are moving out and need to arrange cleaning before handing over the property.",
      "action": "Request a move-out cleaning quote"
    },
    {
      "id": "office",
      "title": "Office cleaning",
      "description": "Cleaning for offices and workplaces, taking into account the premises and how they are used. We discuss your needs and practical considerations together.",
      "suitability": "you look after an office or workplace and would like to discuss cleaning for the premises.",
      "action": "Request an office cleaning quote"
    },
    {
      "id": "deep",
      "title": "Deep cleaning",
      "description": "More thorough cleaning when particular rooms or areas need extra attention. We discuss what you would like done before defining the scope.",
      "suitability": "your usual cleaning does not cover your needs, or you would like to focus on specific areas.",
      "action": "Request a deep cleaning quote"
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
      heading: "Cleaning you can count on.",
      description: "Professional cleaning starts with understanding your needs. Tell us about your home or workplace, and we’ll work through the details together.",
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
        { id: "office", title: "Office cleaning", description: "Cleaning for offices and workplaces, taking into account how the space is used." },
        { id: "deep", title: "Deep cleaning", description: "For rooms and areas that need a more thorough clean." },
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
    homeLabel: "Nordren – home",
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
    home: { heading: "Nordren", title: "Nordren | Cleaning for homes and workplaces", description: "Cleaning for homes and workplaces. Explore home cleaning, move-out cleaning, office cleaning and deep cleaning with Nordren." },
    services: { heading: "Services", title: "Cleaning services | Nordren", description: "Explore home cleaning, move-out cleaning, office cleaning and deep cleaning. Tell us what you need so we can clarify the scope before preparing a quote." },
    pricing: { heading: "Pricing", title: "Pricing | Nordren", description: "Learn what affects a cleaning quote, which details help us prepare it and how we clarify the scope before work is arranged." },
    about: { heading: "About us", title: "About us | Nordren", description: "Learn about Nordren’s approach to cleaning: clear communication, respect for homes and workplaces, and an agreed scope before work begins." },
    contact: { heading: "Contact", title: "Contact | Nordren", description: "Prepare a cleaning enquiry for Nordren. Learn which details are helpful and how we discuss your needs and practical arrangements." },
    quote: { heading: "Request a quote", title: "Request a quote | Nordren", description: "Describe the cleaning you need and share the key details about the work. The quote form is being tested; delivery is not connected yet." },
  },
} satisfies Dictionary;
