"use client";

import { useState } from "react";
import CoffeeWorldMap from "@/components/CoffeeWorldMap";
import CountryDetailPanel from "@/components/CountryDetailPanel";
import FilterBar from "@/components/FilterBar";
import { CoffeeCountry } from "@/types/coffee";
import { filterCoffeeCountries } from "@/utils/countryUtils";

export default function Home() {
  const [selectedCountry, setSelectedCountry] = useState<CoffeeCountry | null>(null);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [species, setSpecies] = useState("");
  const [processing, setProcessing] = useState("");

  const filteredCountries = filterCoffeeCountries(search, region, species, processing);

  const handleReset = () => {
    setSearch("");
    setRegion("");
    setSpecies("");
    setProcessing("");
  };

  return (
    <div className="flex flex-col min-h-screen lg:h-screen lg:overflow-hidden bg-slate-50 font-sans text-slate-900">
      <header className="flex-none bg-white/90 backdrop-blur-md border-b border-slate-200 px-6 py-4 z-10 relative shadow-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">Specialty Coffee World Map</h1>
            <p className="text-sm font-medium text-slate-500">Explore specialty coffee origins through an interactive flat 2D map</p>
          </div>
        </div>
      </header>

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
        <div className="flex-1 min-h-[500px] lg:min-h-0 relative rounded-2xl bg-white border border-slate-200 shadow-xl overflow-hidden flex flex-col">
          <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-md p-3 rounded-lg border border-slate-200 shadow-sm pointer-events-none">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Origins</h3>
            <div className="flex items-center gap-2 text-sm text-slate-700 font-medium">
              <span className="h-3 w-3 rounded-full bg-blue-500 inline-block shadow-[0_0_10px_rgba(59,130,246,0.5)]"></span>
              <span>Found {filteredCountries.length} origins</span>
            </div>
          </div>
          <CoffeeWorldMap
            availableCountries={filteredCountries}
            selectedCountry={selectedCountry}
            onSelectCountry={setSelectedCountry}
          />
        </div>

        <div className="w-full lg:w-96 flex-none bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200 overflow-hidden flex flex-col transition-all duration-300 min-h-[500px] lg:min-h-0">
          <CountryDetailPanel 
            country={selectedCountry} 
            onClose={() => setSelectedCountry(null)} 
          />
        </div>
      </main>
      
      <footer className="bg-white/90 backdrop-blur-md border-t border-slate-200 py-3 px-6 text-center text-xs text-slate-500">
        <p className="max-w-4xl mx-auto">
          Disclaimer: Sensory profile values are curated representative indicators for visualization, not official SCA scores. Country metadata is provided by REST Countries API.
        </p>
      </footer>
    </div>
  );
}
