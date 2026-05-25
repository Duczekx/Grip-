"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import type { Translations } from "@/lib/translations";
import { ImageWithFallback } from "./ImageWithFallback";
import styles from "./Hero.module.css";

type HeroProps = {
  t: Translations["hero"];
};

const colorVariants = {
  red: {
    swatch: "#d71920",
    src: "/images/terra-gf-red-cutout.png"
  },
  orange: {
    swatch: "#f47b12",
    src: "/images/terra-gf-orange-cutout.png"
  },
  black: {
    swatch: "#15171a",
    src: "/images/terra-gf-black-cutout.png"
  }
} as const;

type ColorKey = keyof typeof colorVariants;

export function Hero({ t }: HeroProps) {
  const [selectedColor, setSelectedColor] = useState<ColorKey>("red");
  const selectedVariant = colorVariants[selectedColor];

  return (
    <section className={styles.hero} id="produkt">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <h1>{t.headline}</h1>
          <p className={styles.subheadline} aria-hidden={!t.subheadline}>
            {t.subheadline}
          </p>
          <p className={styles.text}>{t.text}</p>
          <div className={styles.buttons}>
            <a className="button buttonPrimary" href="#anfrage">
              {t.primaryCta}
            </a>
            <a className="button buttonSecondary" href="#technische-daten">
              {t.secondaryCta}
            </a>
          </div>
        </div>

        <div className={styles.media} aria-label={t.imageAlt}>
          <ImageWithFallback
            alt={t.imageAlt}
            className={styles.image}
            fallback={t.imageFallback}
            src={selectedVariant.src}
          />
          <div className={styles.colorPicker} aria-label={t.colorLabel}>
            <span>{t.colorLabel}</span>
            <div className={styles.swatches}>
              {(Object.keys(colorVariants) as ColorKey[]).map((color) => (
                <button
                  aria-label={t.colors[color]}
                  aria-pressed={selectedColor === color}
                  className={selectedColor === color ? styles.swatchActive : ""}
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  style={{ "--swatch": colorVariants[color].swatch } as CSSProperties & Record<string, string>}
                  title={t.colors[color]}
                  type="button"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
