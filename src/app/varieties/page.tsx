import { Suspense } from "react";
import VarietyExplorer from "@/components/VarietyExplorer";
import Link from "next/link";
import { ArrowLeft, Map, Coffee } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coffee Variety Explorer - Specialty Coffee World Map",
  description: "Browse coffee varieties, genetic lineages, agronomic traits, disease resistance, and flavor profiles.",
};

export default function VarietiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#faf8f5] text-slate-800 font-sans selection:bg-amber-600 selection:text-white">
      {/* Header Bar */}
      <header className="flex-none bg-white border-b border-amber-900/10 px-6 py-4 sticky top-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Logo & Subtitle */}
          <div>
            <div className="flex items-center gap-2">
              <Coffee className="h-6 w-6 text-amber-800" />
              <h1 id="page-title" className="text-2xl font-black text-slate-900 tracking-tight">
                Coffee Variety Explorer
              </h1>
            </div>
            <p className="text-xs font-semibold text-slate-500 mt-1 max-w-xl">
              Explore coffee varieties, agronomic traits, genetic lineage, disease resistance, and flavor expectations.
            </p>
          </div>

          {/* Primary Navigation Buttons */}
          <nav className="flex items-center gap-2">
            <Link
              id="nav-world-map"
              href="/"
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-bold text-slate-650 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all"
            >
              <Map className="h-4 w-4 text-slate-400" />
              <span>World Map</span>
            </Link>
            <Link
              id="nav-coffee-varieties"
              href="/varieties"
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-bold bg-amber-900 border border-amber-900 text-white rounded-xl shadow-sm hover:bg-amber-950 transition-all"
            >
              <Coffee className="h-4 w-4" />
              <span>Coffee Varieties</span>
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-6 space-y-6">
        {/* Back Link */}
        <div className="flex items-center">
          <Link
            id="back-to-map-link"
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-amber-900 hover:text-amber-750 hover:underline transition-all"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to World Map</span>
          </Link>
        </div>

        {/* Explorer Wrapper (Suspended for useSearchParams) */}
        <Suspense
          fallback={
            <div className="flex flex-col items-center justify-center min-h-[400px] py-12">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-amber-900/10 border-t-amber-900"></div>
              <p className="mt-4 text-sm font-semibold text-slate-500">Loading varieties dataset...</p>
            </div>
          }
        >
          <VarietyExplorer />
        </Suspense>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-amber-900/10 py-4 px-6 text-center text-xs text-slate-500">
        <p className="max-w-4xl mx-auto font-medium">
          Disclaimer: The variety dataset is curated for educational visualization. Agronomic traits are simplified from reputable public references and may vary by country, farm management, altitude, climate, and disease pressure. Flavor notes are representative expectations, not official SCA scores.
        </p>
      </footer>
    </div>
  );
}
