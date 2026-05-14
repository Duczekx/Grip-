import type { Translations } from "@/lib/translations";
import { Comparison } from "./Comparison";
import styles from "./Benefits.module.css";

type BenefitsProps = {
  t: Translations["benefits"];
  comparison: Translations["comparison"];
};

const iconLabels = ["01", "02", "03", "04"];

export function Benefits({ t, comparison }: BenefitsProps) {
  return (
    <section className="section" id="vorteile">
      <div className="container">
        <div className="sectionHeader">
          <p className="sectionLabel">{t.label}</p>
          <h2 className="sectionTitle">{t.title}</h2>
        </div>
        <div className={styles.grid}>
          {t.cards.map((card, index) => (
            <article className={styles.card} key={card.title}>
              <span className={styles.icon}>{iconLabels[index]}</span>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
        <div className={styles.comparisonBlock}>
          <Comparison t={comparison} embedded />
        </div>
      </div>
    </section>
  );
}
