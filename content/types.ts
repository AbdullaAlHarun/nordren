import type { Locale } from "@/lib/i18n/locales";
import type { PageId } from "@/lib/i18n/routes";

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

export type Dictionary = {
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
