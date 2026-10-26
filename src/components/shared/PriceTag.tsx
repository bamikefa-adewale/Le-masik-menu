import { formatPrice } from "@/features/menu/utils";
import { cn } from "@/lib/utils";

type PriceTagProps = {
  price: number;
  unavailable?: boolean;
  className?: string;
};

/** Formatted price display — the only place prices are rendered. */
export function PriceTag({ price, unavailable = false, className }: PriceTagProps) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-lg px-2.5 py-1 text-sm sm:text-base font-bold tabular-nums tracking-tight whitespace-nowrap transition-colors",
        unavailable
          ? "bg-muted/80 text-muted-foreground/70 line-through decoration-1"
          : "bg-gold/15 text-gold-deep border border-gold/30 shadow-xs",
        className,
      )}
    >
      {formatPrice(price)}
    </span>
  );
}
