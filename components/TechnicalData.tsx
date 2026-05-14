import type { Translations } from "@/lib/translations";
import styles from "./TechnicalData.module.css";

type TechnicalDataProps = {
  t: Translations["technicalData"];
};

export function TechnicalData({ t }: TechnicalDataProps) {
  return (
    <section className="section sectionSoft" id="technische-daten">
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.introColumn}>
            <div className="sectionHeader">
              <p className="sectionLabel">{t.label}</p>
              <h2 className="sectionTitle">{t.title}</h2>
            </div>
            <div className={styles.dimensionPanel}>
              <div className={styles.dimensionHeader}>
                <h3>{t.dimensionTitle}</h3>
              </div>
              <div className={styles.dimensionImage}>
                <img alt={t.dimensions.alt} src="/images/terra-gf-top.png" />
                <div className={styles.widthMeasure}>
                  <span>{t.dimensions.width}</span>
                </div>
                <div className={styles.lengthMeasure}>
                  <span>{t.dimensions.length}</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
              <tbody>
                {t.rows.map(([label, value]) => (
                  <tr key={label}>
                    <th scope="row">{label}</th>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
