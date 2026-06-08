import { Suspense } from "react";
import SupplyChainExplorer from "@/components/SupplyChainExplorer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Coffee Supply Chain Journey - Specialty Coffee World Map",
  description: "Trace the physical, chemical, and logistical transitions of specialty coffee from agricultural soil, wet-mill processing, and oceanic container logistics, to roastery profiling and precision cup extraction.",
};

export default function SupplyChainPage() {
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
            className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 hover:underline transition-all animate-fade-in"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to World Map</span>
          </Link>
        </div>

        {/* Explorer Wrapper (Suspended for any client-side hook triggers) */}
        <Suspense
          fallback={
            <div className="flex flex-col items-center justify-center min-h-[400px] py-12">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-900/10 border-t-blue-600"></div>
              <p className="mt-4 text-sm font-semibold text-slate-500">Loading supply chain journey...</p>
            </div>
          }
        >
          <SupplyChainExplorer />
        </Suspense>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-4 px-6 text-center text-xs text-slate-500">
        <p className="max-w-4xl mx-auto font-medium">
          Disclaimer: Coffee supply chain costs, timelines, and percentages vary dynamically by shipping line, micro-region, cup score quality, trade contracts, and cooperative organization policies.
        </p>
      </footer>
    </div>
  );
}
