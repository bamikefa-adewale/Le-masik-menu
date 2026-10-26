"use client";

import { useState } from "react";
import { Copy, Check, MapPin, Phone, Wifi } from "lucide-react";

import { hotelConfig } from "@/config/hotel.config";
import { Container } from "@/components/shared/Container";

/**
 * Clean, understated footer with hotel contact, location, and guest Wi-Fi details.
 */
export function HotelInfoFooter() {
  const [copied, setCopied] = useState(false);
  const { contact } = hotelConfig;

  const copyWifiPassword = () => {
    navigator.clipboard.writeText(contact.wifi.password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="border-t border-border/70 bg-card/60 py-10 text-muted-foreground">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-col gap-2">
          <p className="font-display text-lg font-semibold text-foreground">
            {hotelConfig.name}
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-3.5 text-gold-deep" aria-hidden />
              {contact.address}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Phone className="size-3.5 text-gold-deep" aria-hidden />
              <a
                href={contact.phoneHref}
                className="underline-offset-4 hover:text-foreground hover:underline"
              >
                {contact.phone}
              </a>
            </span>
          </div>
        </div>

        {/* Wi-Fi card */}
        <div className="flex items-center gap-3 rounded-2xl border border-border/80 bg-background/80 px-4 py-2.5 text-xs shadow-sm">
          <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold-deep">
            <Wifi className="size-4" aria-hidden />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-semibold tracking-wider uppercase text-muted-foreground">
              Guest Wi-Fi
            </span>
            <span className="font-medium text-foreground">{contact.wifi.network}</span>
          </div>
          <button
            type="button"
            onClick={copyWifiPassword}
            className="ml-2 inline-flex items-center gap-1 rounded-full border border-border px-2.5 py-1 text-[11px] font-medium text-foreground transition-colors hover:bg-secondary"
            title="Copy Wi-Fi password"
          >
            {copied ? (
              <>
                <Check className="size-3 text-emerald-500" /> Copied
              </>
            ) : (
              <>
                <Copy className="size-3 text-muted-foreground" /> Copy Pass
              </>
            )}
          </button>
        </div>
      </Container>

      <Container className="mt-8 pt-6 border-t border-border/40 text-[11px] text-muted-foreground flex justify-between items-center">
        <span>© 2026 {hotelConfig.name}. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <a href="/qr" className="underline-offset-4 hover:text-foreground hover:underline">
            Table QR Standee
          </a>
          <span>{hotelConfig.location}</span>
        </div>
      </Container>
    </footer>
  );
}
