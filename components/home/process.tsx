import type { HomeContent } from "@/content/types";
import styles from "./home.module.css";

type ProcessContent = Omit<HomeContent["process"], "steps"> & {
  steps: readonly HomeContent["process"]["steps"][number][];
};

export function Process({ content }: { content: ProcessContent }) {
  return (
    <section className={styles.process} aria-labelledby="process-heading">
      <div className={styles.sectionIntro}>
        <p className={styles.eyebrow}>{content.eyebrow}</p>
        <h2 id="process-heading">{content.heading}</h2>
      </div>
      <ol className={`${styles.steps} ${content.steps.length === 4 ? styles.fourSteps : ""}`} role="list">
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
