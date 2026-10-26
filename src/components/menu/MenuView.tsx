"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowLeft, Search, Wifi, Phone, QrCode, X } from "lucide-react";

import { hotelConfig } from "@/config/hotel.config";
import crest from "@/assets/hotel-crest.png";
import { Link } from "@/components/shared/Link";
import { Container } from "@/components/shared/Container";
import { PageTransition } from "@/components/shared/PageTransition";
import { CategorySidebar } from "@/components/menu/CategorySidebar";
import { CategoryTabs } from "@/components/menu/CategoryTabs";
import { DrinkGrid } from "@/components/menu/DrinkGrid";
import { MenuSearch } from "@/components/menu/MenuSearch";
import { useMenu } from "@/features/menu/hooks/useMenuCategories";
import { useActiveCategory } from "@/features/menu/hooks/useActiveCategory";
import { useMenuSearch } from "@/features/menu/hooks/useMenuSearch";
import { countDrinksByCategory, filterDrinks } from "@/features/menu/utils";

export function MenuView() {
  const { categories, drinks } = useMenu();
  const { activeSlug, setActiveSlug } = useActiveCategory(categories);
  const { value, setValue, query } = useMenuSearch();
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [showInfoModal, setShowInfoModal] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const counts = countDrinksByCategory(drinks);
  const searching = query.length > 0;

  // Smooth scroll-to-top when switching categories.
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeSlug]);

  // Focus mobile search input when expanded
  useEffect(() => {
    if (mobileSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [mobileSearchOpen]);

  const isAll = activeSlug === "all" || !activeSlug;
  const activeCategory = isAll ? undefined : categories.find((c) => c.slug === activeSlug);

  const visibleDrinks = searching
    ? filterDrinks(drinks, null, query)
    : filterDrinks(drinks, isAll ? null : (activeCategory?.id ?? activeSlug), "");

  const title = searching
    ? "Search results"
    : isAll
      ? "All Drinks"
      : (activeCategory?.name ?? "Menu");

  const subtitle = searching
    ? `Showing all categories matching “${query}”`
    : isAll
      ? `${drinks.length} drinks available across all categories`
      : `${counts[activeCategory?.id ?? ""] ?? 0} drinks available`;

  const crestSrc = typeof crest === "string" ? crest : crest.src;

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        {/* Sticky Mobile-First Navigation Bar */}
        <header className="sticky top-0 z-30 border-b border-border/70 bg-background/95 backdrop-blur-md">
          <Container className="flex h-14 items-center justify-between gap-3 sm:h-16">
            {mobileSearchOpen ? (
              /* Expanded Mobile Search Input */
              <div className="flex w-full items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileSearchOpen(false);
                    setValue("");
                  }}
                  aria-label="Close search"
                  className="flex size-9 shrink-0 items-center justify-center rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground"
                >
                  <ArrowLeft className="size-5" />
                </button>
                <div className="relative flex-1">
                  <input
                    ref={searchInputRef}
                    type="search"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder="Search drinks, beers, cocktails…"
                    aria-label="Search drinks"
                    className="h-10 w-full rounded-full border border-border bg-card pr-9 pl-4 text-sm text-foreground outline-none focus:border-gold focus:ring-1 focus:ring-gold"
                  />
                  {value && (
                    <button
                      type="button"
                      onClick={() => setValue("")}
                      className="absolute top-1/2 right-2.5 -translate-y-1/2 rounded-full p-1 text-muted-foreground hover:text-foreground"
                    >
                      <X className="size-3.5" />
                    </button>
                  )}
                </div>
              </div>
            ) : (
              <>
                {/* Brand & Prominent Back Button */}
                <Link
                  to="/"
                  aria-label={`Back to ${hotelConfig.name} home`}
                  className="group flex items-center gap-2 rounded-full py-1 pr-3 pl-1 outline-none transition-colors hover:bg-secondary/60 focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <div className="flex size-8 items-center justify-center rounded-full bg-secondary text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground sm:size-9">
                    <ArrowLeft className="size-4" aria-hidden />
                  </div>
                  <img src={crestSrc} alt="" width={28} height={28} className="size-7 rounded-full sm:size-8" />
                  <div className="flex flex-col">
                    <span className="font-display text-base font-bold leading-tight text-foreground sm:text-lg">
                      {hotelConfig.shortName}
                    </span>
                    <span className="text-[10px] font-medium tracking-wider uppercase text-muted-foreground">
                      Drinks Menu
                    </span>
                  </div>
                </Link>

                {/* Desktop Search Bar */}
                <div className="hidden md:flex items-center gap-3 flex-1 justify-end max-w-md">
                  <MenuSearch value={value} onChange={setValue} />
                </div>

                {/* Right Action Icons */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <button
                    type="button"
                    onClick={() => setMobileSearchOpen(true)}
                    aria-label="Open search"
                    className="flex size-9 items-center justify-center rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground md:hidden"
                  >
                    <Search className="size-4.5" />
                  </button>

                  <Link
                    to="/qr"
                    aria-label="Table QR Code"
                    className="hidden sm:flex size-9 items-center justify-center rounded-full text-muted-foreground hover:bg-secondary hover:text-foreground"
                    title="Table QR Code"
                  >
                    <QrCode className="size-4.5" />
                  </Link>

                  <button
                    type="button"
                    onClick={() => setShowInfoModal(true)}
                    aria-label="Hotel Info & Guest Wi-Fi"
                    className="flex size-9 items-center justify-center rounded-full border border-border/80 bg-card text-muted-foreground hover:border-gold/50 hover:text-foreground shadow-2xs"
                    title="Wi-Fi & Hotel Contact"
                  >
                    <Wifi className="size-4 text-gold-deep" />
                  </button>
                </div>
              </>
            )}
          </Container>

          {/* Mobile Category Chips (hidden while searching to keep focus) */}
          {!searching && (
            <div className="border-t border-border/60 bg-background/80 md:hidden">
              <CategoryTabs
                categories={categories}
                activeSlug={activeSlug}
                counts={counts}
                onSelect={setActiveSlug}
              />
            </div>
          )}
        </header>

        <Container className="flex gap-10 py-5 sm:py-8">
          {/* Desktop: sticky sidebar navigation */}
          <aside className="hidden w-60 shrink-0 md:block">
            <div className="sticky top-24">
              <CategorySidebar
                categories={categories}
                activeSlug={activeSlug}
                counts={counts}
                onSelect={setActiveSlug}
              />
            </div>
          </aside>

          <main className="min-w-0 flex-1">
            <div className="mb-4 sm:mb-6 flex items-end justify-between gap-3">
              <div>
                <h1 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl text-balance">
                  {title}
                </h1>
                <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">
                  {subtitle}
                </p>
              </div>

              <span className="inline-flex items-center rounded-full bg-secondary/80 px-2.5 py-1 text-xs font-semibold tabular-nums text-muted-foreground border border-border/50 shrink-0">
                {visibleDrinks.length} {visibleDrinks.length === 1 ? "drink" : "drinks"}
              </span>
            </div>

            <DrinkGrid
              drinks={visibleDrinks}
              emptyTitle={
                searching
                  ? "No drinks match your search"
                  : "Check back soon — the bar updates this list regularly."
              }
              emptyMessage={
                searching
                  ? "Try a different name — search covers every category."
                  : undefined
              }
            />
          </main>
        </Container>

        {/* Hotel Info & Guest Wi-Fi Modal */}
        {showInfoModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs"
            onClick={() => setShowInfoModal(false)}
          >
            <div
              className="w-full max-w-sm rounded-2xl border border-border bg-card p-5 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-border/60 pb-3">
                <div className="flex items-center gap-2.5">
                  <img src={crestSrc} alt="" className="size-8 rounded-full" />
                  <div>
                    <h2 className="font-display text-base font-bold text-foreground">{hotelConfig.name}</h2>
                    <p className="text-xs text-muted-foreground">{hotelConfig.tagline}</p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setShowInfoModal(false)}
                  className="rounded-full p-1.5 text-muted-foreground hover:bg-secondary hover:text-foreground"
                  aria-label="Close dialog"
                >
                  <X className="size-4" />
                </button>
              </div>

              <div className="mt-4 space-y-2.5 text-sm">
                <div className="flex items-start gap-3 rounded-xl bg-secondary/60 p-3">
                  <Wifi className="size-4.5 text-gold-deep shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">Guest Wi-Fi Network</p>
                    <p className="font-bold text-foreground">{hotelConfig.contact.wifi.network}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      Password: <span className="font-semibold text-foreground select-all">{hotelConfig.contact.wifi.password}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl bg-secondary/60 p-3">
                  <Phone className="size-4.5 text-gold-deep shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">Bar & Front Desk</p>
                    <a
                      href={hotelConfig.contact.phoneHref}
                      className="font-bold text-foreground hover:text-gold-deep underline decoration-border"
                    >
                      {hotelConfig.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-secondary/60 p-3">
                  <div className="flex items-center gap-3">
                    <QrCode className="size-4.5 text-gold-deep shrink-0" />
                    <div>
                      <p className="text-xs font-medium text-muted-foreground">Table QR Card</p>
                      <p className="text-xs font-semibold text-foreground">Print or display on tables</p>
                    </div>
                  </div>
                  <Link
                    to="/qr"
                    onClick={() => setShowInfoModal(false)}
                    className="rounded-lg bg-primary px-2.5 py-1 text-xs font-semibold text-primary-foreground hover:bg-primary/90"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </PageTransition>
  );
}
