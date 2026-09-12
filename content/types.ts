import type { Locale } from "@/lib/i18n/locales";
import type { PageId } from "@/lib/i18n/routes";

export type PageContent = {
  heading: string;
  title: string;
  description: string;
};

export type Dictionary = {
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
