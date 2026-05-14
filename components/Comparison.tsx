import type { Translations } from "@/lib/translations";
import styles from "./Comparison.module.css";

type ComparisonProps = {
  t: Translations["comparison"];
};

export function Comparison({ t }: ComparisonProps) {
  return (
    <section className="section sectionSoft">
      <div className="container">
        <div className="sectionHeader">
          <p className="sectionLabel">{t.label}</p>
          <h2 className="sectionTitle">{t.title}</h2>
        </div>
        <div className={styles.grid}>
          <ComparisonColumn title={t.standardTitle} items={t.standard} tone="neutral" />
          <ComparisonColumn title={t.terraTitle} items={t.terra} tone="accent" />
        </div>
      </div>
    </section>
  );
}

function ComparisonColumn({
  title,
  items,
  tone
}: {
  title: string;
  items: readonly string[];
  tone: "neutral" | "accent";
}) {
  return (
    <article className={`${styles.column} ${tone === "accent" ? styles.accent : ""}`}>
      <h3>{title}</h3>
      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
