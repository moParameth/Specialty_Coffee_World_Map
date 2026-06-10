import { Suspense } from "react";
import FlavourWheelExplorer from "@/components/FlavourWheelExplorer";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Interactive Coffee Flavour Wheel - Specialty Coffee World Map",
  description: "Explore the Specialty Coffee Association (SCA) flavor wheel lexicon, volatile aroma chemistry, and cupping parameters.",
};

export default function FlavourWheelPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-rose-500 selection:text-white">
      {/* Navigation Header */}
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

        {/* Flavour Wheel Component */}
        <FlavourWheelExplorer />
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-4 px-6 text-center text-xs text-slate-500">
        <p className="max-w-4xl mx-auto font-medium">
          Disclaimer: Sensory wheel data is mapped for educational visualization, based on Specialty Coffee Association (SCA) and World Coffee Research (WCR) sensory lexicon standards. Aroma chemistry compounds represent typical volatile indicators and may vary depending on green storage, roasting development, and extraction ratios.
        </p>
      </footer>
    </div>
  );
}
