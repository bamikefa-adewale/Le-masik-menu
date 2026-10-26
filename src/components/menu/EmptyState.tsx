import { GlassWater } from "lucide-react";

type EmptyStateProps = {
  title: string;
  message?: string | undefined;
};

/** Friendly empty state for a category or search with no drinks. */
export function EmptyState({ title, message }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border bg-card/60 px-6 py-16 text-center">
      <div className="flex size-14 items-center justify-center rounded-full bg-gold/12">
        <GlassWater className="size-6 text-gold-deep" aria-hidden />
      </div>
      <p className="font-display text-lg font-semibold">{title}</p>
      {message && <p className="max-w-sm text-sm text-muted-foreground">{message}</p>}
    </div>
  );
}
