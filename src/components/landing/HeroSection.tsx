"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "@/components/shared/Link";
import { QrCode } from "lucide-react";

import { hotelConfig } from "@/config/hotel.config";
import { Button } from "@/components/ui/button";
import crest from "@/assets/hotel-crest.png";

/**
 * Full-screen landing hero: slow crossfade of the hotel images, name,
 * tagline and a single primary CTA into the menu.
 */
export function HeroSection() {
  const images = hotelConfig.heroImages;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % images.length),
      hotelConfig.heroImageIntervalMs,
    );
    return () => window.clearInterval(id);
  }, [images.length]);

  const crestSrc = typeof crest === "string" ? crest : crest.src;

  return (
    <section className="relative isolate flex min-h-svh flex-col justify-end overflow-hidden">
      {/* Top Floating Navigation Bar */}
      <header className="absolute top-0 inset-x-0 z-20 flex h-16 items-center justify-between px-4 sm:px-6 max-w-6xl mx-auto w-full">
        <div className="flex items-center gap-2.5">
          <img
            src={crestSrc}
            alt=""
            width={32}
            height={32}
            className="size-8 rounded-lg bg-white object-contain p-0.5 shadow-xs ring-1 ring-white/30"
          />
          <span className="font-display text-base sm:text-lg font-bold text-white tracking-wide">
            {hotelConfig.shortName}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="border-white/30 text-white bg-black/20 backdrop-blur-xs hover:bg-white/20 h-8 text-xs font-semibold px-3.5 rounded-full"
          >
            <Link to={hotelConfig.menuPath}>Menu</Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/20 size-8 p-0 rounded-full bg-black/20 backdrop-blur-xs border border-white/20"
            title="Table QR"
          >
            <Link to="/qr">
              <QrCode className="size-4" />
            </Link>
          </Button>
        </div>
      </header>

      {/* Crossfading background images; the first is eager (LCP), the rest lazy. */}
      {images.map((image, i) => {
        const imgSrc = typeof image.src === "string" ? image.src : (image.src as { src: string }).src;
        return (
          <motion.img
            key={i}
            src={imgSrc}
            alt={image.alt || ""}
            aria-hidden={i !== index}
            loading={i === 0 ? "eager" : "lazy"}
            width={1920}
            height={1280}
            initial={false}
            animate={{ opacity: i === index ? 1 : 0, scale: i === index ? 1 : 1.04 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            className="absolute inset-0 -z-20 h-full w-full object-cover"
          />
        );
      })}

      {/* Legibility scrim over the imagery */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/35 to-black/25" />

      <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-6 px-4 pt-24 pb-14 text-primary-foreground sm:px-6 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-start gap-5"
        >
          <img
            src={crestSrc}
            alt={`${hotelConfig.name} logo`}
            width={64}
            height={64}
            loading="eager"
            className="h-14 w-14 rounded-2xl bg-white p-1.5 shadow-lg ring-1 ring-white/30 sm:h-16 sm:w-16 object-contain"
          />
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-gold uppercase">
              {hotelConfig.location}
            </p>
            <h1 className="mt-2 font-display text-4xl font-semibold text-balance sm:text-6xl">
              {hotelConfig.name}
            </h1>
            <p className="mt-3 font-display text-xl text-white/85 text-pretty italic sm:text-2xl">
              {hotelConfig.tagline}
            </p>
          </div>
          <Button asChild variant="hero" size="lg" className="mt-2 min-w-44">
            <Link to={hotelConfig.menuPath}>{hotelConfig.ctaLabel}</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
