import { HeroSection } from "@/components/landing/HeroSection";
import { HotelInfoFooter } from "@/components/landing/HotelInfoFooter";
import { PageTransition } from "@/components/shared/PageTransition";

export default function LandingPage() {
  return (
    <PageTransition>
      <div className="flex min-h-svh flex-col">
        <HeroSection />
        <HotelInfoFooter />
      </div>
    </PageTransition>
  );
}
