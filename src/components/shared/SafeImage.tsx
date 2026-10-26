"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

type SafeImageProps = {
  src?: string | undefined;
  alt: string;
  className?: string;
  /** Used to derive the monogram fallback letter when no image renders. */
  fallbackLabel: string;
  priority?: boolean;
};

/**
 * Image with a graceful monogram fallback — never a broken image icon.
 * Falls back when `src` is absent or fails to load. Non-priority images are
 * lazy-loaded to keep the first paint fast.
 */
export function SafeImage({ src, alt, className, fallbackLabel, priority = false }: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn(
          "flex shrink-0 items-center justify-center bg-gold/12 font-display text-xl font-semibold text-gold-deep select-none",
          className,
        )}
      >
        {fallbackLabel.charAt(0).toUpperCase()}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailed(true)}
      className={cn("object-cover", className)}
    />
  );
}
