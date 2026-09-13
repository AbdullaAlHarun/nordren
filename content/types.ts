import type { Locale } from "@/lib/i18n/locales";
import type { PageId } from "@/lib/i18n/routes";
import type { QuoteField, QuoteError, serviceOptions, frequencyOptions } from "@/lib/quote-validation";

export type PageContent = {
  heading: string;
  title: string;
  description: string;
};

type HomepageItem = {
  id: string;
  title: string;
  description: string;
};

export type HomeContent = {
  hero: {
    eyebrow: string;
    heading: string;
    description: string;
    primaryAction: string;
    secondaryAction: string;
    photoPlaceholder: string;
  };
  services: {
    eyebrow: string;
    heading: string;
    description: string;
    items: readonly HomepageItem[];
  };
  principles: {
    eyebrow: string;
    heading: string;
    description: string;
    items: readonly HomepageItem[];
  };
  process: {
    eyebrow: string;
    heading: string;
    steps: readonly [HomepageItem, HomepageItem, HomepageItem];
  };
  quote: {
    eyebrow: string;
    heading: string;
    description: string;
    primaryAction: string;
    secondaryAction: string;
  };
};

export type ServicesContent = {
  intro: HomeContent["quote"];
  suitabilityLabel: string;
  items: readonly {
    id: "home" | "move-out" | "office" | "deep";
    title: string;
    description: string;
    suitability: string;
    action: string;
  }[];
  choosing: { heading: string; description: string; action: string };
  process: HomeContent["process"];
  quote: HomeContent["quote"];
};

export type AboutContent = {
  intro: HomeContent["quote"];
  principles: HomeContent["principles"];
  expectations: {
    eyebrow: string;
    heading: string;
    steps: readonly [HomepageItem, HomepageItem, HomepageItem, HomepageItem];
  };
  transparency: {
    eyebrow: string;
    heading: string;
    description: string;
    details: string;
  };
  quote: HomeContent["quote"];
};

export type PricingContent = {
  intro: HomeContent["quote"];
  factors: HomeContent["principles"];
  process: AboutContent["expectations"];
  transparency: AboutContent["transparency"];
  faq: {
    eyebrow: string;
    heading: string;
    items: readonly { id: string; question: string; answer: string }[];
  };
  quote: HomeContent["quote"];
};

export type ContactContent = {
  intro: Omit<HomeContent["quote"], "secondaryAction">;
  options: {
    eyebrow: string;
    heading: string;
    quote: { heading: string; description: string; action: string };
    enquiry: { heading: string; description: string; action: string };
  };
  guidance: HomeContent["principles"];
  business: {
    eyebrow: string;
    heading: string;
    pending: string;
    details: readonly { id: string; label: string; value: string }[];
  };
  quote: HomeContent["quote"];
};

export type QuoteContent = {
  intro: { eyebrow: string; heading: string; description: string };
  form: {
    heading: string;
    requiredNote: string;
    optional: string;
    groups: { contact: string; job: string; details: string };
    labels: Record<QuoteField, string>;
    serviceOptions: Record<typeof serviceOptions[number], string>;
    frequencyOptions: Record<typeof frequencyOptions[number], string>;
    choose: string;
    helpers: { details: string; timing: string };
    expectation: string;
    development: string;
    noScript: string;
    submit: string;
    pending: string;
    errorHeading: string;
    errors: Record<QuoteError, string>;
    unavailable: string;
    failure: string;
  };
  help: { heading: string; contact: string; services: string };
};

export type Dictionary = {
  quote: QuoteContent;
  contact: ContactContent;
  pricing: PricingContent;
  about: AboutContent;
  services: ServicesContent;
  home: HomeContent;
  placeholder: string;
  shell: {
    skipToContent: string;
    homeLabel: string;
    primaryNavigation: string;
    footerNavigation: string;
    menu: string;
    navigation: Record<PageId, string>;
  };
  languageSwitcher: {
    label: string;
    languages: Record<Locale, { shortLabel: string; accessibleLabel: string }>;
  };
  pages: Record<PageId, PageContent>;
};
