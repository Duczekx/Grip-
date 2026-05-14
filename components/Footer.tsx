import type { Translations } from "@/lib/translations";
import styles from "./Footer.module.css";

type FooterProps = {
  t: Translations["footer"];
};

export function Footer({ t }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <strong>{t.brand}</strong>
          <p>{t.text}</p>
        </div>
        <div className={styles.contact}>{t.contact}</div>
        <nav aria-label="Footer navigation" className={styles.links}>
          {t.links.map((link) => (
            <a href="#" key={link}>
              {link}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
