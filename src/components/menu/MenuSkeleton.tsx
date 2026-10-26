import { Skeleton } from "@/components/ui/skeleton";

/** Loading skeleton shown while the menu data loads (Suspense fallback). */
export function MenuSkeleton() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6" aria-busy="true" aria-label="Loading menu">
      <Skeleton className="h-16 w-full rounded-full" />
      <div className="mt-8 flex gap-8">
        <div className="hidden w-56 shrink-0 flex-col gap-2 md:flex">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className="h-11 w-full rounded-xl" />
          ))}
        </div>
        <div className="grid flex-1 grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-32 w-full rounded-2xl" />
          ))}
        </div>
      </div>
    </div>
  );
}
