import type { Dictionary } from "./types";

export const en = {
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
    services: { heading: "Services", title: "Services | Nordren", description: "Information about Nordren's cleaning services will be available here." },
    pricing: { heading: "Pricing", title: "Pricing | Nordren", description: "Pricing information from Nordren will be available here." },
    about: { heading: "About us", title: "About us | Nordren", description: "Information about Nordren will be available here." },
    contact: { heading: "Contact", title: "Contact | Nordren", description: "Contact information for Nordren will be available here." },
    quote: { heading: "Request a quote", title: "Request a quote | Nordren", description: "The option to send Nordren a quote request will be available here." },
  },
} satisfies Dictionary;
