import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";

type MenuSearchProps = {
  value: string;
  onChange: (value: string) => void;
};

/** Search input filtering drinks by name across all categories. */
export function MenuSearch({ value, onChange }: MenuSearchProps) {
  return (
    <div className="relative w-full max-w-xs">
      <Search
        className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted-foreground"
        aria-hidden
      />
      <Input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search drinks…"
        aria-label="Search drinks by name"
        className="pr-9 pl-10"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="absolute top-1/2 right-2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground outline-none hover:bg-secondary hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
        >
          <X className="size-4" aria-hidden />
        </button>
      )}
    </div>
  );
}
