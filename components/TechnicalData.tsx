import type { Translations } from "@/lib/translations";
import styles from "./TechnicalData.module.css";

type TechnicalDataProps = {
  t: Translations["technicalData"];
};

export function TechnicalData({ t }: TechnicalDataProps) {
  return (
    <section className="section surfaceTechnical" id="technische-daten">
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.introColumn}>
            <div className="sectionHeader">
              <p className="sectionLabel">{t.label}</p>
            </div>
            <div className={styles.dimensionPanel}>
              <div className={styles.dimensionImage}>
                <img alt={t.dimensions.alt} src="/images/terra-gf-top-cutout.png" />
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
