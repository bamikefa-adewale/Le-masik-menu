import { queryOptions, useSuspenseQuery } from "@tanstack/react-query";
import { menuService } from "../services/menu.service";

/** React Query options for the menu — reused by loaders and hooks. */
export const menuQueryOptions = queryOptions({
  queryKey: ["menu"],
  queryFn: () => menuService.getMenu(),
});

/** Full menu: categories (sorted) + drinks. Suspends while loading. */
export function useMenu() {
  return useSuspenseQuery(menuQueryOptions).data;
}

/** Categories only, sorted for display. */
export function useMenuCategories() {
  return useMenu().categories;
}
