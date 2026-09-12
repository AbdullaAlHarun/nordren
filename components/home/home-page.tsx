import { getDictionary } from "@/content";
import { SiteShell } from "@/components/site-shell";
import type { Locale } from "@/lib/i18n/locales";
import { Hero } from "./hero";
import { ServicesIntro } from "./services-intro";
import { ServicePrinciples } from "./service-principles";
import { Process } from "./process";
import { QuoteCTA } from "./quote-cta";
import styles from "./home.module.css";

export function HomePage({ locale }: { locale: Locale }) {
  const content = getDictionary(locale).home;

  return (
    <SiteShell locale={locale} page="home">
      <div className={styles.home}>
        <Hero content={content.hero} locale={locale} />
        <ServicesIntro content={content.services} locale={locale} />
        <ServicePrinciples content={content.principles} />
        <Process content={content.process} />
        <QuoteCTA content={content.quote} locale={locale} />
      </div>
    </SiteShell>
  );
}
