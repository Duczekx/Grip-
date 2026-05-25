import type { Translations } from "@/lib/translations";
import styles from "./Inquiry.module.css";

type InquiryProps = {
  t: Translations["inquiry"];
};

export function Inquiry({ t }: InquiryProps) {
  const fields = [
    ["name", t.fields.name, "text"],
    ["company", t.fields.company, "text"],
    ["email", t.fields.email, "email"],
    ["phone", t.fields.phone, "tel"],
    ["tractor", t.fields.tractor, "text"],
    ["mounting", t.fields.mounting, "text"],
    ["application", t.fields.application, "text"]
  ] as const;

  return (
    <section className="section surfaceInquiry" id="anfrage">
      <div className="container">
        <div className={styles.layout}>
          <div className={styles.copy}>
            <p className="sectionLabel">{t.label}</p>
            <h2 className="sectionTitle">{t.title}</h2>
            <p className="sectionText">{t.text}</p>
          </div>

          <form className={styles.form}>
            <div className={styles.fields}>
              {fields.map(([name, label, type]) => (
                <label key={name}>
                  <span>{label}</span>
                  <input name={name} type={type} />
                </label>
              ))}
              <label className={styles.full}>
                <span>{t.fields.message}</span>
                <textarea name="message" rows={5} />
              </label>
            </div>
            <button className="button buttonPrimary" type="button">
              {t.submit}
            </button>
            <p className={styles.note}>{t.note}</p>
          </form>
        </div>
      </div>
    </section>
  );
}
