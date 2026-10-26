import {
  Beer,
  Citrus,
  Coffee,
  CupSoda,
  Droplets,
  GlassWater,
  Martini,
  Wine,
  Zap,
  type LucideIcon,
} from "lucide-react";

/** Maps the optional Category.icon name to a Lucide icon. */
export const CATEGORY_ICONS: Record<string, LucideIcon> = {
  CupSoda,
  Zap,
  Beer,
  Wine,
  Martini,
  GlassWater,
  Coffee,
  Citrus,
  Droplets,
};

export function getCategoryIcon(icon?: string): LucideIcon | undefined {
  return icon ? CATEGORY_ICONS[icon] : undefined;
}
