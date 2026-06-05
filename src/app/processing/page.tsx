import { Suspense } from "react";
import ProcessingExplorer from "@/components/ProcessingExplorer";
import Link from "next/link";
import { ArrowLeft, Map, Coffee, History, Workflow } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coffee Processing Methods - Specialty Coffee World Map",
  description: "Learn how specialty coffee processing methods (Washed, Natural, Honey, Anaerobic, Carbonic Maceration, Wet Hulled, and Co-fermentation) shape the flavor profile, acidity, body, and sweetness.",
};

export default function ProcessingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-blue-500 selection:text-white">
      {/* Header Bar */}
      <header className="flex-none bg-white border-b border-slate-200 px-6 py-4 sticky top-0 z-20 shadow-sm bg-white/95 backdrop-blur">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          {/* Logo & Subtitle */}
          <div>
            <div className="flex items-center gap-2">
              <Workflow className="h-6 w-6 text-blue-600" />
              <h1 id="page-title" className="text-2xl font-black text-slate-900 tracking-tight">
                Coffee Processing Methods
              </h1>
            </div>
            <p className="text-xs font-semibold text-slate-500 mt-1 max-w-xl">
              Discover the chemistry and mechanics behind Washed, Natural, Honey, and modern fermentation styles.
            </p>
          </div>

          {/* Primary Navigation Buttons */}
          <nav className="flex items-center gap-2">
            <Link
              id="nav-world-map"
              href="/"
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all"
            >
              <Map className="h-4 w-4 text-slate-400" />
              <span>World Map</span>
            </Link>
            <Link
              id="nav-coffee-varieties"
              href="/varieties"
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all"
            >
              <Coffee className="h-4 w-4 text-slate-400" />
              <span>Coffee Varieties</span>
            </Link>
            <Link
              id="nav-coffee-history"
              href="/history"
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all"
            >
              <History className="h-4 w-4 text-slate-400" />
              <span>Coffee History</span>
            </Link>
            <Link
              id="nav-coffee-processing"
              href="/processing"
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-bold bg-blue-600 border border-blue-600 text-white rounded-xl shadow-sm hover:bg-blue-700 transition-all"
            >
              <Workflow className="h-4 w-4" />
              <span>Coffee Processing</span>
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
            className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-blue-800 hover:underline transition-all"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to World Map</span>
          </Link>
        </div>

        {/* Explorer Wrapper (Suspended for any client hook triggers) */}
        <Suspense
          fallback={
            <div className="flex flex-col items-center justify-center min-h-[400px] py-12">
              <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-900/10 border-t-blue-600"></div>
              <p className="mt-4 text-sm font-semibold text-slate-500">Loading processing science...</p>
            </div>
          }
        >
          <ProcessingExplorer />
        </Suspense>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-4 px-6 text-center text-xs text-slate-500">
        <p className="max-w-4xl mx-auto font-medium">
          Disclaimer: Coffee processing definitions compile industry standard practices and academic science. Actual processing variables, fermentation times, and flavor profiles vary significantly depending on climatic factors, water quality, producer expertise, and equipment specifications.
        </p>
      </footer>
    </div>
  );
}
