import type { Category, Drink } from "../types";
import { hotelConfig } from "@/config/hotel.config";

/** Pure helpers for the menu feature — no React, no data access. */

/** Formats a whole-Naira price as e.g. "₦1,200" using the hotel currency config. */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat(hotelConfig.currency.locale, {
    style: "currency",
    currency: hotelConfig.currency.code,
    maximumFractionDigits: 0,
  }).format(price);
}

export function sortCategories(categories: Category[]): Category[] {
  return [...categories].sort((a, b) => a.sortOrder - b.sortOrder);
}

export function normalizeQuery(raw: string): string {
  return raw.trim().toLowerCase();
}

/**
 * Filters drinks by category (when one is active) and a free-text name query.
 * An empty query searches across every category.
 */
export function filterDrinks(
  drinks: Drink[],
  categorySlugOrId: string | null,
  query: string,
): Drink[] {
  const q = normalizeQuery(query);
  return drinks.filter((drink) => {
    if (categorySlugOrId) {
      const matches =
        drink.categoryId === categorySlugOrId ||
        drink.categoryId === `cat-${categorySlugOrId}` ||
        drink.categoryId.replace(/^cat-/, "") === categorySlugOrId;
      if (!matches) return false;
    }
    if (q && !drink.name.toLowerCase().includes(q)) return false;
    return true;
  });
}

/** Count of drinks per category slug, for sidebar/tab badges. */
export function countDrinksByCategory(drinks: Drink[]): Record<string, number> {
  return drinks.reduce<Record<string, number>>((acc, drink) => {
    acc[drink.categoryId] = (acc[drink.categoryId] ?? 0) + 1;
    return acc;
  }, {});
}

export function getCategoryBySlug(categories: Category[], slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getCategoryName(
  categories: Category[],
  slug: string | null,
  fallback: string,
): string {
  if (!slug) return fallback;
  return getCategoryBySlug(categories, slug)?.name ?? fallback;
}

