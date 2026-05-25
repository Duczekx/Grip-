"use client";

import { useRef, useState } from "react";
import type { Translations } from "@/lib/translations";
import styles from "./Gallery.module.css";

type GalleryProps = {
  t: Translations["gallery"];
};

export function Gallery({ t }: GalleryProps) {
  const [failed, setFailed] = useState<Record<string, boolean>>({});
  const [activeIndex, setActiveIndex] = useState(0);
  const pointerStart = useRef<number | null>(null);
  const activeImage = t.images[activeIndex] ?? t.images[0];

  const showImage = (direction: "previous" | "next") => {
    setActiveIndex((current) => {
      const lastIndex = t.images.length - 1;

      if (direction === "next") {
        return current === lastIndex ? 0 : current + 1;
      }

      return current === 0 ? lastIndex : current - 1;
    });
  };

  const handlePointerEnd = (x: number) => {
    if (pointerStart.current === null) {
      return;
    }

    const delta = pointerStart.current - x;
    pointerStart.current = null;

    if (Math.abs(delta) < 42) {
      return;
    }

    showImage(delta > 0 ? "next" : "previous");
  };

  return (
    <section className="section surfaceShowroom" id="galerie">
      <div className="container">
        <div className={styles.header}>
          <div className="sectionHeader">
            <h2 className="sectionTitle">{t.label}</h2>
          </div>
          <div className={styles.controls}>
            <button
              aria-label={t.previous}
              className={styles.control}
              onClick={() => showImage("previous")}
              type="button"
            >
              <ArrowIcon direction="previous" />
            </button>
            <button
              aria-label={t.next}
              className={styles.control}
              onClick={() => showImage("next")}
              type="button"
            >
              <ArrowIcon direction="next" />
            </button>
          </div>
        </div>
        <div className={styles.showcase}>
          <figure
            className={styles.feature}
            onPointerDown={(event) => {
              pointerStart.current = event.clientX;
            }}
            onPointerLeave={(event) => handlePointerEnd(event.clientX)}
            onPointerUp={(event) => handlePointerEnd(event.clientX)}
          >
            {failed[activeImage.src] ? (
              <div className={styles.placeholder}>{t.fallback}</div>
            ) : (
              <img
                alt={activeImage.label}
                draggable={false}
                onError={() => setFailed((current) => ({ ...current, [activeImage.src]: true }))}
                src={activeImage.src}
              />
            )}
            <div className={styles.overlayControls}>
              <button aria-label={t.previous} onClick={() => showImage("previous")} type="button">
                <ArrowIcon direction="previous" />
              </button>
              <button aria-label={t.next} onClick={() => showImage("next")} type="button">
                <ArrowIcon direction="next" />
              </button>
            </div>
            <div className={styles.counter}>
              {String(activeIndex + 1).padStart(2, "0")} / {String(t.images.length).padStart(2, "0")}
            </div>
          </figure>

          <div className={styles.mobileControls}>
            <button aria-label={t.previous} onClick={() => showImage("previous")} type="button">
              <ArrowIcon direction="previous" />
            </button>
            <span>
              {String(activeIndex + 1).padStart(2, "0")} / {String(t.images.length).padStart(2, "0")}
            </span>
            <button aria-label={t.next} onClick={() => showImage("next")} type="button">
              <ArrowIcon direction="next" />
            </button>
          </div>

          <div className={styles.thumbnails} aria-label={t.label}>
            {t.images.map((image, index) => (
              <button
                aria-label={image.label}
                aria-pressed={activeIndex === index}
                className={activeIndex === index ? styles.thumbnailActive : ""}
                key={`${image.src}-${image.label}`}
                onClick={() => setActiveIndex(index)}
                type="button"
              >
                <img alt="" src={image.src} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon({ direction }: { direction: "previous" | "next" }) {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="18"
      viewBox="0 0 24 24"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={direction === "next" ? "M5 12H19M14 6L20 12L14 18" : "M19 12H5M10 6L4 12L10 18"}
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.4"
      />
    </svg>
  );
}
