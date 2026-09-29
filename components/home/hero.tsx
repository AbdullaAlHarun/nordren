import Image from "next/image";
import { ButtonLink } from "@/components/button";
import type { HomeContent } from "@/content/types";
import type { Locale } from "@/lib/i18n/locales";
import { routes } from "@/lib/i18n/routes";
import styles from "./home.module.css";

export function Hero({ content, locale }: { content: HomeContent["hero"]; locale: Locale }) {
  return (
    <section className={styles.hero} aria-labelledby="home-heading">
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}>{content.eyebrow}</p>
        <h1 id="home-heading" className={styles.heroHeading}>{content.heading}</h1>
        <p className={styles.heroDescription}>{content.description}</p>
        <div className={styles.actions}>
          <ButtonLink href={routes.quote[locale]}>{content.primaryAction}</ButtonLink>
          <ButtonLink href={routes.services[locale]} variant="text">{content.secondaryAction}</ButtonLink>
        </div>
      </div>
      <div className={styles.heroPhoto}>
        <Image
          src="/images/vasky-hero.jpg"
          alt={content.imageAlt}
          fill
          preload
          sizes="(min-width: 75rem) 550px, (min-width: 64rem) 46vw, (min-width: 25rem) 92vw, calc(100vw - 2rem)"
          className={styles.heroImage}
        />
      </div>
    </section>
  );
}
