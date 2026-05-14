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
          <h2 className="sectionTitle">{t.label}</h2>
        </div>
        <div className={styles.grid}>
          {t.images.map((image, index) => (
            <figure
              className={`${styles.item} ${index < 3 ? styles.productShot : styles.photoShot}`}
              key={`${image.src}-${image.label}`}
            >
              {failed[image.src] ? (
                <div className={styles.placeholder}>{t.fallback}</div>
              ) : (
                <img
                  alt={image.label}
                  onError={() => setFailed((current) => ({ ...current, [image.src]: true }))}
                  src={image.src}
                />
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
