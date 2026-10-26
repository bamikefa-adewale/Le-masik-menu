import { useEffect, useState } from "react";
import { normalizeQuery } from "../utils";

/**
 * Owns the search state for the menu: the raw input value plus a debounced,
 * normalized query ready for filtering.
 */
export function useMenuSearch(debounceMs = 200) {
  const [value, setValue] = useState("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const id = window.setTimeout(() => setQuery(normalizeQuery(value)), debounceMs);
    return () => window.clearTimeout(id);
  }, [value, debounceMs]);

  return { value, setValue, query };
}
