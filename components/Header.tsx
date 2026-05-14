"use client";

import { useEffect, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { Language, Translations } from "@/lib/translations";
import styles from "./Header.module.css";

type HeaderProps = {
  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;
  t: Translations["header"];
};

export function Header({ language, setLanguage, t }: HeaderProps) {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.inner}>
          <a aria-label="TERRA GF 1900" className={styles.logo} href="#produkt">
            <span className={styles.logoMark} />
            {t.logo}
          </a>

          <nav aria-label="Main navigation" className={styles.nav}>
            {t.nav.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className={styles.actions}>
            <LanguageSwitch language={language} setLanguage={setLanguage} />
            <a className="button buttonPrimary" href="#anfrage">
              {t.cta}
            </a>
          </div>

          <button
            aria-expanded={open}
            aria-label={t.menu}
            className={`${styles.menuButton} ${open ? styles.menuOpen : ""}`}
            onClick={() => setOpen((current) => !current)}
            type="button"
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        aria-hidden={!open}
        className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ""}`}
      >
        <div className={styles.mobileMenuTop}>
          <a aria-label="TERRA GF 1900" className={styles.logo} href="#produkt" onClick={closeMenu}>
            <span className={styles.logoMark} />
            {t.logo}
          </a>
          <button
            aria-label={t.menu}
            className={`${styles.menuButton} ${styles.mobileClose} ${styles.menuOpen}`}
            onClick={closeMenu}
            type="button"
          >
            <span />
            <span />
          </button>
        </div>
        <div className={styles.mobileMenuInner}>
          {t.nav.map((item) => (
            <a href={item.href} key={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <div className={styles.mobileActions}>
            <LanguageSwitch language={language} setLanguage={setLanguage} />
            <a className="button buttonPrimary" href="#anfrage" onClick={closeMenu}>
              {t.cta}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

function LanguageSwitch({
  language,
  setLanguage
}: {
  language: Language;
  setLanguage: Dispatch<SetStateAction<Language>>;
}) {
  return (
    <div aria-label="Language" className={styles.languageSwitch}>
      {(["de", "pl", "en"] as const).map((item) => (
        <button
          aria-pressed={language === item}
          className={language === item ? styles.languageActive : ""}
          key={item}
          onClick={() => setLanguage(item)}
          type="button"
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
