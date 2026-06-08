import { Suspense } from "react";
import VarietyExplorer from "@/components/VarietyExplorer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Coffee Variety Explorer - Specialty Coffee World Map",
  description: "Browse coffee varieties, genetic lineages, agronomic traits, disease resistance, and flavor profiles.",
};

export default function VarietiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-500 selection:text-white">
      {/* Header Bar */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-6 space-y-6">
        {/* Back Link */}
        <div className="flex items-center">
          <Link
            id="back-to-map-link"
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 hover:underline transition-all"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to World Map</span>
          </Link>
        </div>

        {/* Explorer Wrapper (Suspended for useSearchParams) */}
        <Suspense
          fallback={
            <div className="flex flex-col items-center justify-center min-h-[400px] py-12">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-900/10 border-t-blue-600"></div>
              <p className="mt-4 text-sm font-semibold text-slate-500">Loading varieties dataset...</p>
            </div>
          }
        >
          <VarietyExplorer />
        </Suspense>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-4 px-6 text-center text-xs text-slate-500">
        <p className="max-w-4xl mx-auto font-medium">
          Disclaimer: The variety dataset is curated for educational visualization. Agronomic traits are simplified from reputable public references and may vary by country, farm management, altitude, climate, and disease pressure. Flavor notes are representative expectations, not official SCA scores.
        </p>
      </footer>
    </div>
  );
}
