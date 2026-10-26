export type Category = {
  id: string;
  slug: string;
  name: string;
  /** Lucide icon name, mapped in components/menu/icons.ts. Optional. */
  icon?: string;
  sortOrder: number;
};

export type DrinkTag =
  | "alcoholic"
  | "non-alcoholic"
  | "popular"
  | "signature"
  | "local-favourite";

export type Drink = {
  id: string;
  categoryId: string;
  name: string;
  description?: string;
  /** Price in the hotel currency's smallest display unit (whole Naira here). */
  price: number;
  /** Optional image URL; cards fall back to a monogram when absent. */
  image?: string;
  isAvailable: boolean;
  tags?: DrinkTag[];
};

export type MenuData = {
  categories: Category[];
  drinks: Drink[];
};
