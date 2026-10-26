import type { Metadata } from "next";
import { QrPageView } from "@/components/qr/QrPageView";
import { hotelConfig } from "@/config/hotel.config";

export const metadata: Metadata = {
  title: `Table Card — ${hotelConfig.name}`,
  description: `Printable QR table card linking guests to the ${hotelConfig.name} digital drinks menu.`,
};

export default function QrPage() {
  return <QrPageView />;
}
