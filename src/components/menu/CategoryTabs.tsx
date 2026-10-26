"use client";

import { useEffect, useRef } from "react";
import type { Category } from "@/features/menu/types";
import { getCategoryIcon } from "./icons";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type CategoryTabsProps = {
  categories: Category[];
  activeSlug: string;
  counts: Record<string, number>;
  onSelect: (slug: string) => void;
};

/**
 * Mobile sticky horizontal category tab bar — compact, thumb-friendly chips
 * with automatic smooth scroll-into-view for the selected category.
 */
export function CategoryTabs({ categories, activeSlug, counts, onSelect }: CategoryTabsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);

  const totalCount = Object.values(counts).reduce((acc, count) => acc + count, 0);
  const isAllActive = activeSlug === "all" || !activeSlug;

  // Auto-scroll the active tab into the center of the viewport on selection
  useEffect(() => {
    if (activeTabRef.current && containerRef.current) {
      activeTabRef.current.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeSlug]);

  return (
    <div
      ref={containerRef}
      className="no-scrollbar flex gap-2 overflow-x-auto px-4 py-2 scroll-smooth"
      role="tablist"
      aria-label="Menu categories"
    >
      <button
        ref={isAllActive ? activeTabRef : null}
        type="button"
        role="tab"
        aria-selected={isAllActive}
        onClick={() => onSelect("all")}
        className={cn(
          "flex h-9 shrink-0 items-center gap-1.5 rounded-full border px-3.5 text-xs font-semibold tracking-tight outline-none transition-all duration-200 active:scale-95 focus-visible:ring-2 focus-visible:ring-ring",
          isAllActive
            ? "border-transparent bg-primary text-primary-foreground shadow-xs"
            : "border-border/80 bg-card/90 text-muted-foreground hover:bg-secondary hover:text-foreground",
        )}
      >
        <Sparkles className="size-3.5" aria-hidden />
        All Drinks
        <span
          className={cn(
            "rounded-full px-1.5 py-0.5 text-[10px] font-bold tabular-nums",
            isAllActive ? "bg-white/20 text-primary-foreground" : "bg-secondary text-muted-foreground",
          )}
        >
          {totalCount}
        </span>
      </button>

      {categories.map((category) => {
        const Icon = getCategoryIcon(category.icon);
        const active = category.slug === activeSlug;
        return (
          <button
            key={category.slug}
            ref={active ? activeTabRef : null}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onSelect(category.slug)}
            className={cn(
              "flex h-9 shrink-0 items-center gap-1.5 rounded-full border px-3.5 text-xs font-semibold tracking-tight outline-none transition-all duration-200 active:scale-95 focus-visible:ring-2 focus-visible:ring-ring",
              active
                ? "border-transparent bg-primary text-primary-foreground shadow-xs"
                : "border-border/80 bg-card/90 text-muted-foreground hover:bg-secondary hover:text-foreground",
            )}
          >
            {Icon && <Icon className="size-3.5" aria-hidden />}
            {category.name}
            <span
              className={cn(
                "rounded-full px-1.5 py-0.5 text-[10px] font-bold tabular-nums",
                active ? "bg-white/20 text-primary-foreground" : "bg-secondary text-muted-foreground",
              )}
            >
              {counts[category.id] ?? 0}
            </span>
          </button>
        );
      })}
    </div>
  );
}
