import type { HomeContent } from "@/content/types";
import type { Locale } from "@/lib/i18n/locales";
import { routes } from "@/lib/i18n/routes";
import styles from "./home.module.css";

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
            <h3>
              <a href={routes.services[locale]} className={styles.serviceLink}>
                <span>{service.title}</span>
                <span className={styles.arrow} aria-hidden="true">→</span>
              </a>
            </h3>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
