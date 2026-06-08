"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import CoffeeWorldMap from "@/components/CoffeeWorldMap";
import CountryDetailPanel from "@/components/CountryDetailPanel";
import FilterBar from "@/components/FilterBar";
import { CoffeeCountry } from "@/types/coffee";
import { coffeeCountries } from "@/data/coffeeCountries";
import { filterCoffeeCountries } from "@/utils/countryUtils";
import Header from "@/components/Header";

function HomeContent() {
  const [selectedCountry, setSelectedCountry] = useState<CoffeeCountry | null>(null);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [species, setSpecies] = useState("");
  const [processing, setProcessing] = useState("");

  const searchParams = useSearchParams();
  const countryParam = searchParams.get("country");

  // Select country if passed in query param (e.g. /?country=KEN)
  useEffect(() => {
    if (countryParam) {
      const matched = coffeeCountries.find(
        (c) => c.iso3.toLowerCase() === countryParam.toLowerCase()
      );
      if (matched) {
        setSelectedCountry(matched);
      }
    }
  }, [countryParam]);

  const filteredCountries = filterCoffeeCountries(search, region, species, processing);

  const handleReset = () => {
    setSearch("");
    setRegion("");
    setSpecies("");
    setProcessing("");
  };

  return (
    <div className="flex flex-col min-h-screen lg:h-screen lg:overflow-hidden bg-slate-50 font-sans text-slate-800 selection:bg-blue-500 selection:text-white">
      {/* Navigation Header */}
      <Header />

      <div className="flex-none px-6 py-4 max-w-7xl mx-auto w-full z-10 relative">
        <FilterBar
          search={search}
          setSearch={setSearch}
          region={region}
          setRegion={setRegion}
          species={species}
          setSpecies={setSpecies}
          processing={processing}
          setProcessing={setProcessing}
          onReset={handleReset}
        />
      </div>

      <main className="flex-1 flex flex-col lg:flex-row lg:overflow-hidden max-w-7xl mx-auto w-full px-4 lg:px-6 pb-6 gap-6">
        <div className="flex-1 min-h-[350px] md:min-h-[500px] lg:min-h-0 relative rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden flex flex-col">
          <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur p-3 rounded-lg border border-slate-200 shadow-sm pointer-events-none">
            <h3 className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">Origins</h3>
            <div className="flex items-center gap-2 text-xs text-slate-700 font-bold">
              <span className="h-2.5 w-2.5 rounded-full bg-blue-500 inline-block shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
              <span>Found {filteredCountries.length} origins</span>
            </div>
          </div>
          <CoffeeWorldMap
            availableCountries={filteredCountries}
            selectedCountry={selectedCountry}
            onSelectCountry={setSelectedCountry}
          />
        </div>

        <div className="w-full lg:w-96 flex-none bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col transition-all duration-300">
          <CountryDetailPanel 
            country={selectedCountry} 
            onClose={() => setSelectedCountry(null)} 
          />
        </div>
      </main>
      
      <footer className="bg-white border-t border-slate-200 py-3 px-6 text-center text-xs text-slate-500">
        <p className="max-w-4xl mx-auto">
          Disclaimer: Sensory profile values are curated representative indicators for visualization, not official SCA scores. Country metadata is provided by REST Countries API.
        </p>
      </footer>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="flex h-screen items-center justify-center bg-slate-50"><div className="animate-spin rounded-full h-8 w-8 border-4 border-slate-300 border-t-slate-800"></div></div>}>
      <HomeContent />
    </Suspense>
  );
}
