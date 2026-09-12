import type { HomeContent } from "@/content/types";
import styles from "./home.module.css";

export function Process({ content }: { content: HomeContent["process"] }) {
  return (
    <section className={styles.process} aria-labelledby="process-heading">
      <div className={styles.sectionIntro}>
        <p className={styles.eyebrow}>{content.eyebrow}</p>
        <h2 id="process-heading">{content.heading}</h2>
      </div>
      <ol className={styles.steps} role="list">
        {content.steps.map((step, index) => (
          <li key={step.id}>
            <span className={styles.stepNumber} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
            <div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
