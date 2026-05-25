import type { Translations } from "@/lib/translations";
import styles from "./Applications.module.css";

type ApplicationsProps = {
  t: Translations["applications"];
};

export function Applications({ t }: ApplicationsProps) {
  return (
    <section className="section surfaceSoft" id="einsatzbereiche">
      <div className="container">
        <div className="sectionHeader">
          <p className="sectionLabel">{t.label}</p>
          <h2 className="sectionTitle">{t.title}</h2>
        </div>
        <div className={styles.grid}>
          {t.items.map((item) => (
            <article className={styles.card} key={item}>
              <span className={styles.marker} />
              <h3>{item}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
