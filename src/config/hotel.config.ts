import heroExterior from "@/assets/le-exterior.png";
import heroLounge from "@/assets/le-lounge.webp";
import heroBar from "@/assets/le-bar.webp";

/**
 * Single source of truth for everything brand- or hotel-specific.
 * UI components read from here — never hardcode hotel details in JSX.
 */
export const hotelConfig = {
  name: "Le Masik Hotel",
  shortName: "Le Masik",
  location: "Oyo Town, Oyo State",
  tagline: "...feel the class",

  /** Landing hero carousel — ordered, first image is the LCP image. */
  heroImages: [
    { src: heroExterior, alt: "Le Masik Hotel building exterior, modern 4-star architecture" },
    { src: heroLounge, alt: "Le Masik Hotel poolside lounge and outdoor deck" },
    { src: heroBar, alt: "Le Masik Hotel restaurant and bar interior" },
  ],

  /**
   * Primary call-to-action label on the landing page.
   * Rename here (e.g. "Order a Drink") once ordering ships — no component changes needed.
   */
  ctaLabel: "View Menu",

  contact: {
    address: "121, Old Oyo/Ibadan Road, Fola-Tyre, Oyo Town, Oyo State, Nigeria",
    phone: "+234 915 387 8543",
    phoneHref: "tel:+2349153878543",
    email: "info@lemasikhotel.com",
    wifi: { network: "Le Masik Guest", password: "ask front desk" },
  },

  currency: {
    code: "NGN",
    locale: "en-NG",
  },

  /** Menu page path — used by CTAs and QR generation. */
  menuPath: "/menu",

  /**
   * Absolute URL printed under the QR code on the /qr table card.
   * Set to your deployed URL (e.g. "https://lemasikhotel.com") after
   * publishing; when empty, the /qr page falls back to the current origin homepage ("/").
   */
  publicMenuUrl: "",

  /** Interval (ms) for the hero crossfade. */
  heroImageIntervalMs: 6000,
} as const;

export type HotelConfig = typeof hotelConfig;

