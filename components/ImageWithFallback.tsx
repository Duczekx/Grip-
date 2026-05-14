"use client";

import { useState } from "react";

type ImageWithFallbackProps = {
  src: string;
  alt: string;
  fallback: string;
  className?: string;
};

export function ImageWithFallback({ src, alt, fallback, className }: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <div className={`imageFallback ${className ?? ""}`}>{fallback}</div>;
  }

  return <img alt={alt} className={className} onError={() => setFailed(true)} src={src} />;
}
