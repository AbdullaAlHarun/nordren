import type { HomeContent } from "@/content/types";
import type { Locale } from "@/lib/i18n/locales";
import { routes } from "@/lib/i18n/routes";
import styles from "./home.module.css";

const serviceImages = {
  home: { src: "/images/vasky-husvask.jpg", position: "65% center" },
  "move-out": { src: "/images/vasky-flyttevask.jpg", position: "55% center" },
  window: { src: "/images/vasky-vindusvask.jpg", position: "60% center" },
} as const;

export function ServicesIntro({ content, locale }: { content: HomeContent["services"]; locale: Locale }) {
  return (
    <section className={styles.services} aria-labelledby="services-heading">
      <div className={styles.sectionIntro}>
        <p className={styles.eyebrow}>{content.eyebrow}</p>
        <h2 id="services-heading">{content.heading}</h2>
        <p className={styles.description}>{content.description}</p>
      </div>
      <ul className={styles.serviceList} role="list">
        {content.items.map((service) => (
          <li key={service.id} className={styles.service}>
            <div className={styles.servicePhoto}>
              <Image
                src={serviceImages[service.id].src}
                alt={service.imageAlt}
                fill
                loading="lazy"
                sizes="(min-width: 75rem) 256px, (min-width: 64rem) 21vw, (min-width: 48rem) 52vw, (min-width: 25rem) 92vw, calc(100vw - 2rem)"
                className={styles.serviceImage}
                style={{ objectPosition: serviceImages[service.id].position }}
              />
            </div>
            <div>
              <h3>
                <a href={routes.services[locale]} className={styles.serviceLink}>
                  <span>{service.title}</span>
                  <span className={styles.arrow} aria-hidden="true">→</span>
                </a>
              </h3>
              <p>{service.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
import Image from "next/image";
