import type { Metadata } from "next";
import { Cormorant_Garamond, Karla } from "next/font/google";
import "../styles.css";
import { hotelConfig } from "@/config/hotel.config";
import { QueryProvider } from "@/providers/QueryProvider";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lemasikhotel.com"),
  title: {
    default: `${hotelConfig.name} — ${hotelConfig.tagline}`,
    template: `%s | ${hotelConfig.shortName}`,
  },
  description: `${hotelConfig.name}, ${hotelConfig.location}. Scan to browse our premium digital drinks menu — cocktails, wines, beers and more.`,
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: `${hotelConfig.name} — ${hotelConfig.tagline}`,
    description: `Browse our premium digital drinks menu — cocktails, wines, beers and more, served in ${hotelConfig.location}.`,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${karla.variable} antialiased`}
    >
      <body className="min-h-screen bg-background text-foreground font-sans">
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
