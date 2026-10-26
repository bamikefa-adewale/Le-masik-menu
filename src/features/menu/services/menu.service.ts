import { sortCategories } from "../utils";
import type { MenuData } from "../types";
import { menuCategories, menuDrinks } from "@/data/menu.data";

/**
 * Data access layer for the menu.
 *
 * Today it reads from the typed seed data in data/menu.data.ts. When the hotel
 * wants live updates (admin dashboard), swap ONLY this file for a database or
 * API call returning the same `MenuData` shape — no component changes needed.
 */
export const menuService = {
  async getMenu(): Promise<MenuData> {
    return {
      categories: sortCategories(menuCategories),
      drinks: menuDrinks,
    };
  },
};

