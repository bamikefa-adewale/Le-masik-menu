import { Suspense } from "react";
import type { Metadata } from "next";
import { MenuView } from "@/components/menu/MenuView";
import { MenuSkeleton } from "@/components/menu/MenuSkeleton";
import { hotelConfig } from "@/config/hotel.config";

export const metadata: Metadata = {
  title: `Drinks Menu — ${hotelConfig.name}`,
  description: `Browse the full drinks menu at ${hotelConfig.name}: cocktails, wines, beers, spirits, juices and more, served in ${hotelConfig.location}.`,
};

export default function MenuPage() {
  return (
    <Suspense fallback={<MenuSkeleton />}>
      <MenuView />
    </Suspense>
  );
}
