"use client";

import { useState } from "react";
import type { Translations } from "@/lib/translations";
import styles from "./Gallery.module.css";

type GalleryProps = {
  t: Translations["gallery"];
};

export function Gallery({ t }: GalleryProps) {
  const [failed, setFailed] = useState<Record<string, boolean>>({});

  return (
    <section className="section" id="galerie">
      <div className="container">
        <div className="sectionHeader">
          <p className="sectionLabel">{t.label}</p>
          <h2 className="sectionTitle">{t.title}</h2>
        </div>
        <div className={styles.grid}>
          {t.images.map((image) => (
            <figure className={styles.item} key={`${image.src}-${image.label}`}>
              {failed[image.src] ? (
                <div className={styles.placeholder}>{t.fallback}</div>
              ) : (
                <img
                  alt={image.label}
                  onError={() => setFailed((current) => ({ ...current, [image.src]: true }))}
                  src={image.src}
                />
              )}
              <figcaption>{image.label}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
