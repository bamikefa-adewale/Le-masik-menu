import { EmptyState } from "./EmptyState";
import { DrinkCard } from "./DrinkCard";
import type { Drink } from "@/features/menu/types";

type DrinkGridProps = {
  drinks: Drink[];
  /** Shown when there is nothing to display. */
  emptyTitle: string;
  emptyMessage?: string;
};

/** Responsive grid of drink cards with an empty state. */
export function DrinkGrid({ drinks, emptyTitle, emptyMessage }: DrinkGridProps) {
  if (drinks.length === 0) {
    return <EmptyState title={emptyTitle} message={emptyMessage} />;
  }

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 sm:gap-4">
      {drinks.map((drink) => (
        <DrinkCard key={drink.id} drink={drink} />
      ))}
    </div>
  );
}
