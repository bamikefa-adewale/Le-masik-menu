# Le Masik Hotel — Scraped & Extracted Details

> **Source:** Scraped from [lemasikhotel.com](https://www.lemasikhotel.com/), hotels.ng, and travel listing platforms.
> **Purpose:** Use this data to update `hotel.config.ts`, hero banners, logo, and all branding across the digital menu codebase.

---

## 1. Brand Identity & Core Information

| Field | Real Value (Le Masik Hotel) | Codebase Property |
| :--- | :--- | :--- |
| **Hotel Full Name** | `Le Masik Hotel` | `hotelConfig.name` |
| **Short / Brand Name** | `Le Masik` | `hotelConfig.shortName` |
| **Classification** | 4-Star Luxury Hotel | — |
| **Location Tag** | `Oyo Town, Oyo State, Nigeria` | `hotelConfig.location` |
| **Full Address** | `121, Old Oyo/Ibadan Road, Fola-Tyre (Agodongbo), Opposite IBEDC, Oyo Town, Oyo State, Nigeria` | `hotelConfig.contact.address` |
| **Tagline / Slogan** | `...feel the class` | `hotelConfig.tagline` |
| **Secondary Brand Line** | `Where luxury meets comfort in the heart of Oyo town` | *(alternative tagline)* |
| **Primary CTA Label** | `View Menu` | `hotelConfig.ctaLabel` |

---

## 2. Contact & Guest Services Information

| Field | Real Value | Codebase Property |
| :--- | :--- | :--- |
| **Phone Number** | `+234 915 387 8543` | `hotelConfig.contact.phone` |
| **Phone Link** | `tel:+2349153878543` | `hotelConfig.contact.phoneHref` |
| **Email Address** | `info@lemasikhotel.com` | `hotelConfig.contact.email` |
| **Website** | `https://www.lemasikhotel.com/` | — |
| **Instagram** | `@lemasikhotel` | — |
| **Wi-Fi** | Complimentary high-speed Wi-Fi (password provided at check-in) | `hotelConfig.contact.wifi` |

---

## 3. Visual Assets — Logo & Banner Images

### A. Hotel Logo
- **Source URL:** `https://www.lemasikhotel.com/admin/image/upload/` *(custom backend, not WordPress)*
- **Brand Style:** Modern, sophisticated. Text reads **"Le Masik Hotel"** paired with tagline **"...feel the class"**
- **Action Required:** The logo/crest image needs to be downloaded manually or provided by the hotel. Replace `src/assets/hotel-crest.png` and `public/favicon.png` with the real Le Masik Hotel logo.

### B. Hero Banner Carousel Images
The hotel website features images of:
1. **Hotel Exterior** — The building facade, modern 4-star architecture
2. **Hotel Lounge / Reception** — Elegant lobby and lounge interior
3. **Swimming Pool** — Outdoor pool area with surrounding deck
4. **Restaurant & Bar** — Indoor dining area and outdoor bar/lounge
5. **Room Interiors** — Executive rooms with queen beds, balconies

> **Note:** The lemasikhotel.com site blocks direct scraping (connection reset). Images need to be:
> - Downloaded manually from the hotel's website gallery
> - Or sourced from their Instagram: [@lemasikhotel](https://www.instagram.com/lemasikhotel/)
> - Or sourced from hotels.ng / traveloka listings
>
> Once obtained, save as:
> - `src/assets/hero-exterior.jpg` — Hotel building exterior
> - `src/assets/hero-lounge.jpg` — Lounge, lobby, or pool area
> - `src/assets/hero-bar.jpg` — Restaurant or bar interior

---

## 4. Facilities & Amenities

- Swimming pool and fitness center / gym
- In-house restaurant (African, Chinese, Continental/American cuisines)
- Outdoor bar and lounge
- High-speed complimentary Wi-Fi
- Ample parking space
- Airport pickup / drop-off services
- Room service
- Elevator access
- 24-hour power supply
- Air-conditioned rooms with private baths, flat-screen cable TVs, refrigerators, private balconies

---

## 5. Restaurant & Dining Details

| Detail | Value |
| :--- | :--- |
| **Cuisine Types** | African/Nigerian, Chinese, Continental/American |
| **Breakfast** | 7:00 AM – 11:00 AM |
| **Lunch** | 12:00 PM – 2:00 PM |
| **Dinner** | 6:30 PM – 10:00 PM (last orders) |
| **Dress Code** | Smart casual (no shorts, hats, or sandals in main dining area) |
| **Bar Offerings** | Handcrafted cocktails, fine wines, spirits, chilled beers, liqueurs, non-alcoholic beverages, mocktails |

---

## 6. Room Types & Pricing (Reference)

| Room Type | Price/Night (approx.) | Features |
| :--- | :--- | :--- |
| **Superior Room** | ~₦80,500 | 4x6 bed, AC, Wi-Fi, TV, fridge, balcony, breakfast for 1 |
| **Deluxe Room** | ~₦92,000 | — |
| **Executive Room** | ~₦97,750 | Queen bed, AC, Wi-Fi, TV, reading desk, fridge, balcony, gym + pool for 2, breakfast for 1 |
| **Super Executive Room** | ~₦138,000 | 6x6 king bed, mini kitchenette, microwave, fridge, lounge chairs, balcony |
| **Family Room** | ~₦201,250 | — |
| **Super Executive Suite** | ~₦322,000 | Separate living room, Smart TV, king bed, kitchenette, microwave, wine, 2 fridges, bathtub, sofa, breakfast for 2 |

---

## 7. Currency & Localization (Unchanged)

| Setting | Value |
| :--- | :--- |
| **Currency Code** | `NGN` |
| **Locale** | `en-NG` |
| **Symbol** | `₦` (Naira) |

---

## 8. Booking & Operational Details

| Detail | Value |
| :--- | :--- |
| **Check-in** | 2:00 PM |
| **Check-out** | 12:00 Noon |
| **Reservations** | Via website, phone (+234 915 387 8543), or walk-in |
| **Banking** | Hydrogenco - Le Masik Hotel Limited (Access Bank) |

---

## 9. Mapping — What to Update in Codebase

| What to Change | File | New Value |
| :--- | :--- | :--- |
| **Hotel Name** | `src/config/hotel.config.ts` → `name` | `"Le Masik Hotel"` |
| **Short Name** | `src/config/hotel.config.ts` → `shortName` | `"Le Masik"` |
| **Location** | `src/config/hotel.config.ts` → `location` | `"Oyo Town, Oyo State"` |
| **Tagline** | `src/config/hotel.config.ts` → `tagline` | `"...feel the class"` |
| **Address** | `src/config/hotel.config.ts` → `contact.address` | `"121, Old Oyo/Ibadan Road, Fola-Tyre, Oyo Town, Oyo State, Nigeria"` |
| **Phone** | `src/config/hotel.config.ts` → `contact.phone` | `"+234 915 387 8543"` |
| **Phone Href** | `src/config/hotel.config.ts` → `contact.phoneHref` | `"tel:+2349153878543"` |
| **Email** | `src/config/hotel.config.ts` → `contact.email` | `"info@lemasikhotel.com"` |
| **Wi-Fi SSID** | `src/config/hotel.config.ts` → `contact.wifi.network` | *(Get from hotel — provided at check-in)* |
| **Wi-Fi Password** | `src/config/hotel.config.ts` → `contact.wifi.password` | *(Get from hotel — provided at check-in)* |
| **Logo / Crest** | Replace `src/assets/hotel-crest.png` + `public/favicon.png` + `public/icon.png` | Le Masik Hotel logo PNG |
| **Hero Images** | Replace `src/assets/hero-exterior.jpg`, `hero-lounge.jpg`, `hero-bar.jpg` | Real Le Masik Hotel photos |
| **Public Menu URL** | `src/config/hotel.config.ts` → `publicMenuUrl` | e.g. `"https://menu.lemasikhotel.com"` |

---

## 10. Updated Config Template (Ready to Apply)

```typescript
import heroExterior from "@/assets/hero-exterior.jpg";
import heroLounge from "@/assets/hero-lounge.jpg";
import heroBar from "@/assets/hero-bar.jpg";

export const hotelConfig = {
  name: "Le Masik Hotel",
  shortName: "Le Masik",
  location: "Oyo Town, Oyo State",
  tagline: "...feel the class",

  heroImages: [
    { src: heroExterior, alt: "Le Masik Hotel building exterior, modern 4-star architecture" },
    { src: heroLounge, alt: "Le Masik Hotel poolside lounge and outdoor deck" },
    { src: heroBar, alt: "Le Masik Hotel restaurant and bar interior" },
  ],

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

  menuPath: "/menu",
  publicMenuUrl: "",
  heroImageIntervalMs: 6000,
} as const;

export type HotelConfig = typeof hotelConfig;
```