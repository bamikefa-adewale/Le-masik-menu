import { Flame, Sparkles, Star } from "lucide-react";
import { PriceTag } from "@/components/shared/PriceTag";
import { SafeImage } from "@/components/shared/SafeImage";
import type { Drink } from "@/features/menu/types";
import { cn } from "@/lib/utils";

type DrinkCardProps = {
  drink: Drink;
};

/**
 * Neat, clean, mobile-optimized drink card.
 * Designed for quick scanning on mobile: Name + Highlights -> Price -> Description -> Dietary tags.
 */
export function DrinkCard({ drink }: DrinkCardProps) {
  const isPopular = drink.tags?.includes("popular");
  const isSignature = drink.tags?.includes("signature");
  const isLocal = drink.tags?.includes("local-favourite");
  const isNonAlcoholic = drink.tags?.includes("non-alcoholic");
  const isAlcoholic = drink.tags?.includes("alcoholic");

  return (
    <article
      className={cn(
        "group relative flex flex-col justify-between rounded-xl sm:rounded-2xl border border-border/80 bg-card p-4 sm:p-5 transition-all duration-200 hover:border-gold/50 hover:shadow-md active:scale-[0.995]",
        !drink.isAvailable && "opacity-60 bg-muted/20 border-dashed",
      )}
    >
      <div className="flex items-start gap-3 sm:gap-4">
        {/* Render image only if an actual image is provided; avoid bulky monogram avatar */}
        {drink.image && (
          <div className="relative size-16 shrink-0 overflow-hidden rounded-xl border border-border/60 bg-muted/40 sm:size-20">
            <SafeImage
              src={drink.image}
              alt={drink.name}
              fallbackLabel={drink.name}
              className="size-full object-cover"
            />
          </div>
        )}

        <div className="min-w-0 flex-1">
          {/* Top Line: Name & Highlights on left, Price Tag on right */}
          <div className="flex items-start justify-between gap-2.5 sm:gap-3">
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <h3 className="font-display text-lg font-bold leading-snug tracking-tight text-foreground transition-colors group-hover:text-gold-deep sm:text-xl">
                  {drink.name}
                </h3>

                {isSignature && (
                  <span className="inline-flex items-center gap-1 rounded-full border border-gold/40 bg-gold/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-gold-deep">
                    <Sparkles className="size-2.5 text-gold-deep" aria-hidden />
                    Signature
                  </span>
                )}
                {isPopular && (
                  <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/30 bg-amber-500/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-800 dark:text-amber-300">
                    <Flame className="size-2.5 text-amber-600 dark:text-amber-400" aria-hidden />
                    Popular
                  </span>
                )}
                {isLocal && (
                  <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                    <Star className="size-2.5 text-emerald-600 dark:text-emerald-400" aria-hidden />
                    Local Pick
                  </span>
                )}
              </div>
            </div>

            <PriceTag price={drink.price} unavailable={!drink.isAvailable} />
          </div>

          {/* Description: Clean, quick to read */}
          {drink.description && (
            <p className="mt-1 font-sans text-[13.5px] leading-relaxed text-muted-foreground sm:text-sm">
              {drink.description}
            </p>
          )}
        </div>
      </div>

      {/* Bottom meta row: dietary info and sold-out indicator */}
      {(isNonAlcoholic || isAlcoholic || !drink.isAvailable) && (
        <div className="mt-3 flex items-center justify-between gap-2 border-t border-border/40 pt-2.5 text-xs">
          <div className="flex items-center gap-1.5">
            {isNonAlcoholic && (
              <span className="inline-flex items-center rounded-md bg-secondary/80 px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                Non-alcoholic
              </span>
            )}
            {isAlcoholic && (
              <span className="inline-flex items-center rounded-md bg-secondary/80 px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                Alcoholic
              </span>
            )}
          </div>

          {!drink.isAvailable && (
            <span className="rounded-md bg-destructive/10 px-2 py-0.5 text-[11px] font-semibold text-destructive">
              Currently Unavailable
            </span>
          )}
        </div>
      )}
    </article>
  );
}
