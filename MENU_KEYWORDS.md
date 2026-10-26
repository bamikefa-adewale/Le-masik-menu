# Digital Menu Keywords & Tagging Guide

This guide explains all badges, keywords, and tags used across the digital drinks menu. It covers customer-facing meanings, visual cues, and guidelines for hotel staff and administrators when updating drinks in [`src/data/menu.data.ts`](file:///Users/mac/Desktop/digital-menu/src/data/menu.data.ts).

---

## 1. Highlight Badges

Highlight badges appear directly beside the drink title in the menu card to draw quick attention to top recommendations.

| Badge Label | Tag Key in Code | Visual Icon | Accent Color | Primary Meaning |
| :--- | :--- | :--- | :--- | :--- |
| **Signature** | `"signature"` | ✨ Sparkles | Warm Gold (`#d4af37`) | House specialty or exclusive hotel recipe |
| **Popular** | `"popular"` | 🔥 Flame | Amber / Orange (`#f59e0b`) | Best-seller / guest favorite |
| **Local Pick** | `"local-favourite"` | ⭐ Star | Emerald Green (`#10b981`) | Authentic Nigerian heritage drink |

---

### ✨ Signature
- **Meaning**: Distinctive, craft offerings unique to the hotel bar or lounge. These drinks represent the mixologist's pride and premium brand identity.
- **Why it matters**: Guests looking for a memorable, one-of-a-kind experience will prioritize Signature drinks.
- **When to apply**:
  - Custom house cocktail creations (e.g., *Lemasik Chapman Punch*, *Smoky Hibiscus Margarita*).
  - Secret recipe blends or barrel-aged mixes.
  - Premium presentation drinks served in specialty glassware.
- **Code example**:
  ```ts
  tags: ["non-alcoholic", "signature", "popular"]
  ```

---

### 🔥 Popular
- **Meaning**: High-demand, tried-and-true crowd favorites ordered frequently by hotel guests.
- **Why it matters**: First-time visitors and fast-decision diners scan for "Popular" badges to pick reliable, widely loved choices in under 5 seconds.
- **When to apply**:
  - Top-selling soft drinks (e.g., *Coca-Cola*, *Malta Guinness*).
  - Everyday staple beers & stouts (e.g., *Heineken*, *Guinness Foreign Extra Stout*).
  - Go-to bar classics that guests order repeatedly.
- **Code example**:
  ```ts
  tags: ["non-alcoholic", "popular"]
  ```

---

### ⭐ Local Pick (Local Favourite)
- **Meaning**: Drinks rooted in Nigerian culture and local hospitality traditions that showcase homegrown flavors.
- **Why it matters**: Both local guests celebrating native favorites and international travelers seeking an authentic Nigerian experience look for this tag.
- **When to apply**:
  - Traditional Nigerian beverages (e.g., *Zobo*, *Kunu Aya*, *Fresh Palm Wine*).
  - Nigerian-brewed heritage staples (e.g., *Star Lager*, *Gulder*).
  - Regionally inspired cocktails and mocktails.
- **Code example**:
  ```ts
  tags: ["alcoholic", "local-favourite"]
  ```

---

## 2. Dietary & Content Badges

These tags appear in the tidy footer row of each drink card to give guests immediate clarity on what they are consuming.

### 🍃 Non-Alcoholic
- **Meaning**: Contains 0.0% alcohol. Suitable for all ages, designated drivers, and guests observing personal, health, or religious dietary choices.
- **Why it matters**: Allows guests who don't consume alcohol to filter or spot mocktails, juices, soft drinks, and teas effortlessly without having to ask the waiter.
- **Examples**: Fresh juices, smoothies, sodas, malt drinks, sparkling water, Chapman (virgin).

---

### 🍸 Alcoholic
- **Meaning**: Contains alcohol (beers, wines, spirits, liqueurs, cocktails).
- **Why it matters**: Ensures responsible service and transparency for guests checking beverage strength and categories.
- **Examples**: Whisky, gin, red/white wine, champagne, lagers, stouts.

---

## 3. Availability & Operational Status

### 🟢 Available (`isAvailable: true`)
- Default active state. The drink is fully stocked and ready to order.
- Displays normal pricing, full card opacity, and active hover/tap effects.

---

### ⚪ Currently Unavailable / Sold Out (`isAvailable: false`)
- **Meaning**: The item is temporarily out of stock in the bar inventory.
- **Visual styling**:
  - The card is gently muted (60% opacity) with a dashed border.
  - A clear **Currently Unavailable** badge is shown.
  - The price has an elegant strikethrough decoration.
- **Why it matters**: Prevents disappointment caused by guests ordering items that the bar cannot currently fulfill.
- **Code example**:
  ```ts
  isAvailable: false
  ```

---

## 4. Currency & Pricing Conventions

### ₦ (NGN — Nigerian Naira)
- **Formatting Rule**: Whole Naira with standard comma thousands separators (e.g., `₦600`, `₦1,200`, `₦25,000`).
- **No Decimals**: Fractional kobo (e.g., `.00`) is omitted for clean visual scannability on mobile screens.
- **Config source**: Centralized in [`src/config/hotel.config.ts`](file:///Users/mac/Desktop/digital-menu/src/config/hotel.config.ts).

---

## 5. Quick Reference for Adding Drinks

When adding or updating items in [`src/data/menu.data.ts`](file:///Users/mac/Desktop/digital-menu/src/data/menu.data.ts), use this template:

```ts
{
  id: "drink-custom-id",
  categoryId: "cat-cocktails",       // Matches a category id
  name: "Drink Name",                // Keep concise and descriptive
  description: "Short, appetizing 1-line note.", // e.g. "Infused with ginger & fresh mint."
  price: 2500,                       // Numeric integer in Naira (₦)
  isAvailable: true,                 // true = ready, false = sold out
  tags: [
    "alcoholic",                     // "alcoholic" or "non-alcoholic"
    "signature",                     // optional: "signature", "popular", "local-favourite"
  ],
}
```
