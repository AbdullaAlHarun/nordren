import type { HomeContent } from "@/content/types";
import styles from "./home.module.css";

export function ServicePrinciples({ content }: { content: HomeContent["principles"] }) {
  return (
    <section className={styles.principles} aria-labelledby="principles-heading">
      <div className={styles.sectionIntro}>
        <p className={styles.eyebrow}>{content.eyebrow}</p>
        <h2 id="principles-heading">{content.heading}</h2>
        <p className={styles.description}>{content.description}</p>
      </div>
      <dl className={styles.principleList}>
        {content.items.map((principle) => (
          <div key={principle.id}>
            <dt>{principle.title}</dt>
            <dd>{principle.description}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
