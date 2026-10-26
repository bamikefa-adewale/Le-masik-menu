"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import type { Category } from "../types";

/**
 * Owns the "active category" state, synced to the URL (?category=slug) so
 * links are shareable and refresh keeps state. Defaults to "all" to show
 * the entire drinks catalog unless a specific category is requested.
 */
export function useActiveCategory(categories: Category[]) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategory = searchParams.get("category");
  const isValidCategory = categories.some((c) => c.slug === currentCategory);
  const activeSlug = currentCategory === "all" || isValidCategory
    ? (currentCategory as string)
    : "all";

  const setActiveSlug = useCallback(
    (slug: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (slug === "all") {
        params.delete("category");
      } else {
        params.set("category", slug);
      }
      const qs = params.toString();
      router.push(`/menu${qs ? `?${qs}` : ""}`, { scroll: false });
    },
    [router, searchParams],
  );

  return { activeSlug, setActiveSlug };
}
