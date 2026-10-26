"use client";

import { useEffect, useState } from "react";
import { ArrowLeft, Printer } from "lucide-react";

import { hotelConfig } from "@/config/hotel.config";
import crest from "@/assets/hotel-crest.png";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/shared/PageTransition";
import { Link } from "@/components/shared/Link";

/**
 * Printable QR table card. The QR points at hotelConfig.publicMenuUrl when
 * set, otherwise at "<current origin>/menu". Print from the browser
 * (Ctrl/Cmd+P) — the card is isolated by the print styles in styles.css.
 */
export function QrPageView() {
  const [qrDataUrl, setQrDataUrl] = useState("");
  const [menuUrl, setMenuUrl] = useState("");

  useEffect(() => {
    const url = hotelConfig.publicMenuUrl || `${window.location.origin}/menu`;
    setMenuUrl(url);
    let cancelled = false;
    void import("qrcode")
      .then(async (QRCode) =>
        QRCode.default.toDataURL(url, {
          width: 512,
          margin: 2,
          color: { dark: "#2b1d0e", light: "#ffffff" },
        }),
      )
      .then((dataUrl) => {
        if (!cancelled) setQrDataUrl(dataUrl);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const crestSrc = typeof crest === "string" ? crest : crest.src;

  return (
    <PageTransition>
      <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-secondary/50 px-4 py-10">
        <div className="print:hidden flex items-center gap-3">
          <Button asChild variant="outline" size="sm">
            <Link to="/">
              <ArrowLeft aria-hidden /> Back
            </Link>
          </Button>
          <Button size="sm" onClick={() => window.print()}>
            <Printer aria-hidden /> Print card
          </Button>
        </div>

        <div
          aria-label={`QR table card for ${hotelConfig.name}`}
          className="flex w-full max-w-sm flex-col items-center gap-5 rounded-3xl border border-border bg-card px-8 py-10 text-center shadow-xl"
        >
          <img src={crestSrc} alt="" width={56} height={56} className="size-14" />
          <div>
            <p className="font-display text-2xl font-semibold">{hotelConfig.name}</p>
            <p className="mt-1 text-sm text-muted-foreground">{hotelConfig.location}</p>
          </div>
          <p className="font-display text-lg text-balance italic">
            Scan to view our drinks menu
          </p>
          <div className="rounded-2xl border border-border bg-background p-3">
            {qrDataUrl ? (
              <img
                src={qrDataUrl}
                alt={`QR code linking to the ${hotelConfig.name} drinks menu`}
                width={220}
                height={220}
              />
            ) : (
              <div
                className="size-[220px] animate-pulse rounded-xl bg-secondary"
                aria-label="Generating QR code"
              />
            )}
          </div>
          <p className="text-xs break-all text-muted-foreground">{menuUrl}</p>
        </div>
      </div>
    </PageTransition>
  );
}
