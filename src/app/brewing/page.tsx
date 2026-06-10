import { Suspense } from "react";
import BrewingExplorer from "@/components/BrewingExplorer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Coffee Brewing Science & Methodology - Specialty Coffee World Map",
  description: "Explore coffee brewing science, ratio calculators, step-by-step extraction timelines, and chemical solubility kinetics for major brewing styles.",
};

export default function BrewingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-rose-500 selection:text-white">
      {/* Navigation Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 py-6 space-y-6 animate-in fade-in duration-500">
        
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

        {/* Brewing Explorer Dashboard */}
        <BrewingExplorer />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-4 px-6 text-center text-xs text-slate-500">
        <p className="max-w-4xl mx-auto font-medium">
          Disclaimer: Brewing extraction models are based on the SCA Gold Cup standards and ideal extraction yield formulas (18%-22% EY). Actual extraction levels depend heavily on grind distribution, water alkalinity/hardness, channeling dynamics, and bean freshness.
        </p>
      </footer>
    </div>
  );
}
