import type { Translations } from "@/lib/translations";
import styles from "./ProblemSolution.module.css";

type ProblemSolutionProps = {
  t: Translations["problemSolution"];
};

export function ProblemSolution({ t }: ProblemSolutionProps) {
  return (
    <section className="section sectionSoft">
      <div className="container">
        <div className="sectionHeader">
          <p className="sectionLabel">{t.label}</p>
          <h2 className="sectionTitle">{t.title}</h2>
        </div>
        <div className={styles.grid}>
          <div className={styles.copyStack}>
            <article className={styles.panel}>
              <h3>{t.problemTitle}</h3>
              <p>{t.problem}</p>
            </article>
            <article className={`${styles.panel} ${styles.solution}`}>
              <h3>{t.solutionTitle}</h3>
              <p>{t.solution}</p>
            </article>
          </div>
          <figure className={styles.imagePanel}>
            <img alt={t.imageAlt} src="/images/terra-gf-work-2.jpg" />
            <figcaption>{t.imageCaption}</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
