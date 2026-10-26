import type { Category } from "@/features/menu/types";
import { getCategoryIcon } from "./icons";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type CategorySidebarProps = {
  categories: Category[];
  activeSlug: string;
  counts: Record<string, number>;
  onSelect: (slug: string) => void;
};

/** Desktop vertical category navigation (sticky, keyboard navigable). */
export function CategorySidebar({ categories, activeSlug, counts, onSelect }: CategorySidebarProps) {
  const totalCount = Object.values(counts).reduce((acc, count) => acc + count, 0);
  const isAllActive = activeSlug === "all" || !activeSlug;

  return (
    <nav aria-label="Menu categories" className="flex flex-col gap-1">
      <button
        type="button"
        aria-current={isAllActive ? "true" : undefined}
        onClick={() => onSelect("all")}
        className={cn(
          "flex min-h-11 w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring",
          isAllActive
            ? "bg-primary text-primary-foreground shadow-sm"
            : "text-muted-foreground hover:bg-secondary hover:text-foreground",
        )}
      >
        <Sparkles className="size-4 shrink-0" aria-hidden />
        <span className="flex-1 truncate">All Drinks</span>
        <span
          className={cn(
            "rounded-full px-2 py-0.5 text-[11px] font-semibold tabular-nums",
            isAllActive ? "bg-white/15 text-primary-foreground" : "bg-secondary text-muted-foreground",
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
            type="button"
            aria-current={active ? "true" : undefined}
            onClick={() => onSelect(category.slug)}
            className={cn(
              "flex min-h-11 w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring",
              active
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground",
            )}
          >
            {Icon && <Icon className="size-4 shrink-0" aria-hidden />}
            <span className="flex-1 truncate">{category.name}</span>
            <span
              className={cn(
                "rounded-full px-2 py-0.5 text-[11px] font-semibold tabular-nums",
                active ? "bg-white/15 text-primary-foreground" : "bg-secondary text-muted-foreground",
              )}
            >
              {counts[category.id] ?? 0}
            </span>
          </button>
        );
      })}
    </nav>
  );
}
