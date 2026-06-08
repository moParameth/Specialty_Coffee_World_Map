"use client";

import { useState } from "react";
import { coffeeFarms, CoffeeFarm } from "@/data/coffeeFarms";
import { coffeeCountries } from "@/data/coffeeCountries";
import { 
  Search, 
  MapPin, 
  ArrowUp, 
  Award, 
  Trophy, 
  SlidersHorizontal,
  ChevronRight,
  Flame,
  Globe,
  Tag,
  Sparkles
} from "lucide-react";

interface VarietyFarmListProps {
  onInspectVariety: (id: string) => void;
}

export default function VarietyFarmList({ onInspectVariety }: VarietyFarmListProps) {
  const [selectedId, setSelectedId] = useState<string>("hacienda-la-esmeralda");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRegion, setSelectedRegion] = useState<string>("All");
  const [selectedCountry, setSelectedCountry] = useState<string>("All");

  // Map country name to its region group for fast lookup
  const countryToRegion = new Map(coffeeCountries.map(c => [c.country, c.regionGroup]));

  // Get list of sorted countries, optionally filtered by selected region
  const allCountries = Array.from(new Set(coffeeCountries.map(c => c.country))).sort();
  const countriesToShow = selectedRegion === "All"
    ? allCountries
    : coffeeCountries.filter(c => c.regionGroup === selectedRegion).map(c => c.country).sort();

  const countries = ["All", ...countriesToShow];

  const handleRegionChange = (region: string) => {
    setSelectedRegion(region);
    setSelectedCountry("All");
  };

  const filteredFarms = coffeeFarms.filter(f => {
    const regionGroup = countryToRegion.get(f.country) || "";
    const matchesRegion = selectedRegion === "All" || regionGroup === selectedRegion;
    const matchesCountry = selectedCountry === "All" || f.country.toLowerCase() === selectedCountry.toLowerCase();
    const matchesSearch = 
      f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.signatureProduct.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.keyVarieties.some(v => v.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesRegion && matchesCountry && matchesSearch;
  });

  // Dynamically resolve the selected farm. If the current selectedId is not in the filtered list,
  // fall back to the first item of the filtered list, or the first overall farm.
  const selectedFarm = filteredFarms.find(f => f.id === selectedId) || filteredFarms[0] || coffeeFarms[0];

  const mapVarietyNameToId = (name: string): string => {
    const normalized = name.toLowerCase().trim();
    if (normalized.includes("geisha")) return "geisha";
    if (normalized.includes("catuai") || normalized.includes("catuaí")) return "catuai";
    if (normalized.includes("sl28")) return "sl28";
    if (normalized.includes("sl34")) return "sl34";
    if (normalized.includes("pacamara")) return "pacamara";
    if (normalized.includes("pink bourbon") || normalized.includes("pink-bourbon")) return "pink-bourbon";
    if (normalized.includes("bourbon")) return "bourbon"; 
    if (normalized.includes("typica")) return "typica";
    if (normalized.includes("caturra")) return "caturra";
    if (normalized.includes("mundo novo") || normalized.includes("mundo-novo")) return "mundo-novo";
    if (normalized.includes("castillo")) return "castillo";
    if (normalized.includes("colombia")) return "colombia";
    if (normalized.includes("catimor")) return "catimor";
    if (normalized.includes("ruiru 11") || normalized.includes("ruiru-11")) return "ruiru-11";
    if (normalized.includes("robusta")) return "robusta-commercial-clones";
    if (normalized.includes("batian")) return "batian";
    if (normalized.includes("s795")) return "s795";
    if (normalized.includes("anacafé 14") || normalized.includes("anacafe-14")) return "anacafe-14";
    if (normalized.includes("java")) return "java";
    if (normalized.includes("parainema")) return "parainema";
    if (normalized.includes("eugenioides")) return "eugenioides";
    if (normalized.includes("sidra")) return "sidra";
    if (normalized.includes("wush wush") || normalized.includes("wush-wush")) return "wush-wush";
    if (normalized.includes("sudan rume") || normalized.includes("sudan-rume")) return "sudan-rume";
    if (normalized.includes("centroamericano")) return "centroamericano";
    if (normalized.includes("starmaya")) return "starmaya";
    if (normalized.includes("maragogype")) return "maragogype";
    if (normalized.includes("tekisic")) return "tekisic";
    if (normalized.includes("villa sarchi") || normalized.includes("villa-sarchi") || normalized.includes("sarchi")) return "villa-sarchi";
    if (normalized.includes("marsellesa")) return "marsellesa";
    if (normalized.includes("obata") || normalized.includes("obatã")) return "obata";
    if (normalized.includes("sl14")) return "sl14";
    if (normalized.includes("k7")) return "k7";
    if (normalized.includes("timor hybrid") || normalized.includes("timor-hybrid")) return "timor-hybrid";
    return "";
  };

  const getCountryColor = (country: string) => {
    switch(country.toLowerCase()) {
      case "panama": return "border-red-200 bg-red-50 text-red-700";
      case "ethiopia": return "border-emerald-200 bg-emerald-50 text-emerald-800";
      case "colombia": return "border-blue-200 bg-blue-50 text-blue-700";
      case "guatemala": return "border-cyan-200 bg-cyan-50 text-cyan-800";
      case "kenya": return "border-rose-200 bg-rose-50 text-rose-700";
      case "costa rica": return "border-orange-200 bg-orange-50 text-orange-700";
      case "el salvador": return "border-amber-200 bg-amber-50 text-amber-700";
      case "brazil": return "border-green-200 bg-green-50 text-green-700";
      case "yemen": return "border-purple-200 bg-purple-50 text-purple-700";
      case "honduras": return "border-teal-200 bg-teal-50 text-teal-700";
      case "indonesia": return "border-indigo-200 bg-indigo-50 text-indigo-700";
      case "peru": return "border-sky-200 bg-sky-50 text-sky-700";
      case "burundi": return "border-yellow-200 bg-yellow-50 text-yellow-850";
      case "rwanda": return "border-lime-200 bg-lime-50 text-lime-800";
      case "nicaragua": return "border-fuchsia-200 bg-fuchsia-50 text-fuchsia-700";
      case "ecuador": return "border-violet-200 bg-violet-50 text-violet-750";
      case "bolivia": return "border-zinc-200 bg-zinc-50 text-zinc-700";
      case "jamaica": return "border-amber-300 bg-amber-50 text-amber-850";
      case "united states":
      case "united states of america": return "border-slate-300 bg-slate-50 text-slate-800";
      case "mexico": return "border-emerald-200 bg-emerald-50 text-emerald-700";
      case "vietnam": return "border-teal-300 bg-teal-50 text-teal-800";
      case "thailand": return "border-orange-300 bg-orange-50/70 text-orange-850";
      case "india": return "border-amber-400 bg-amber-50/60 text-amber-900";
      case "papua new guinea": return "border-rose-300 bg-rose-50/50 text-rose-800";
      case "uganda": return "border-yellow-300 bg-yellow-50/70 text-yellow-900";
      case "tanzania": return "border-sky-300 bg-sky-50 text-sky-850";
      case "china": return "border-red-300 bg-red-50 text-red-800";
      case "malawi": return "border-indigo-300 bg-indigo-50 text-indigo-850";
      case "timor-leste": return "border-teal-300 bg-teal-50 text-teal-900";
      case "taiwan": return "border-purple-300 bg-purple-50/60 text-purple-900";
      default: {
        const region = countryToRegion.get(country) || "";
        if (region === "Africa") {
          return "border-emerald-200 bg-emerald-50 text-emerald-800";
        } else if (region === "Latin America") {
          return "border-amber-200 bg-amber-50 text-amber-800";
        } else if (region === "Asia-Pacific") {
          return "border-indigo-200 bg-indigo-50/80 text-indigo-800";
        }
        return "border-slate-200 bg-slate-50 text-slate-700";
      }
    }
  };

  return (
    <div className="space-y-8">
      {/* Intro Banner */}
      <div className="bg-gradient-to-br from-slate-900 via-amber-950 to-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-xl border border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-3xl relative z-10 space-y-3">
          <span className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 border border-amber-400/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Trophy className="h-3.5 w-3.5 text-amber-400" /> Elite Coffee Farms
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">World's Most Prestigious Micro-Lots & Estates</h2>
          <p className="text-sm md:text-base text-slate-300 font-semibold leading-relaxed">
            Discover the legendary estates behind high-end barista competition lots, record-breaking auctions, 
            and pioneering agricultural science. Explore their exclusive signature products and geographical microclimates.
          </p>
        </div>
      </div>

      {/* Main Dual Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Directory & List */}
        <div className="lg:col-span-7 space-y-4">
          
          {/* Filters Directory */}
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by farm, country, signature product, or cultivar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs md:text-sm font-bold bg-white border border-slate-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500"
            />
          </div>

          {/* Region Selector Tabs */}
          <div className="flex gap-2 overflow-x-auto border-b border-slate-100 pb-1 scrollbar-thin scrollbar-thumb-slate-100 scrollbar-track-transparent">
            {["All", "Latin America", "Africa", "Asia-Pacific"].map((region) => {
              const isActive = selectedRegion === region;
              return (
                <button
                  key={region}
                  type="button"
                  onClick={() => handleRegionChange(region)}
                  className={`px-4 py-1.5 text-xs font-black whitespace-nowrap cursor-pointer transition-all border-b-2 -mb-px ${
                    isActive
                      ? "text-slate-950 border-slate-950"
                      : "text-slate-400 border-transparent hover:text-slate-600"
                  }`}
                >
                  {region === "All" ? "All Regions" : region}
                </button>
              );
            })}
          </div>

          {/* Country Pill Selector */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
            {countries.map((country) => {
              const isActive = selectedCountry === country;
              return (
                <button
                  key={country}
                  type="button"
                  onClick={() => setSelectedCountry(country)}
                  className={`px-4 py-1.5 rounded-full text-xs font-black whitespace-nowrap cursor-pointer transition-all border ${
                    isActive
                      ? "bg-slate-900 border-slate-900 text-white shadow-sm"
                      : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300"
                  }`}
                >
                  {country === "All" ? "All Countries" : country}
                </button>
              );
            })}
          </div>

          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 px-1">
            <SlidersHorizontal className="h-3.5 w-3.5" />
            <span>Farms ({filteredFarms.length} matches)</span>
          </h3>

          {/* Farm Cards Directory List */}
          <div className="space-y-3">
            {filteredFarms.length === 0 ? (
              <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center shadow-sm">
                <p className="text-sm font-bold text-slate-500">No farms match your search.</p>
              </div>
            ) : (
              filteredFarms.map((farm) => {
                const isSelected = selectedFarm.id === farm.id;
                return (
                  <div
                    key={farm.id}
                    onClick={() => {
                      setSelectedId(farm.id);
                      if (window.innerWidth < 1024) {
                        const el = document.getElementById("variety-farm-detail-panel");
                        if (el) {
                          el.scrollIntoView({ behavior: "smooth", block: "start" });
                        }
                      }
                    }}
                    className={`p-4 border rounded-2xl cursor-pointer transition-all duration-300 flex flex-col justify-between gap-3 ${
                      isSelected
                        ? "bg-slate-900 border-slate-900 shadow-md text-white scale-[1.01]"
                        : "bg-white border-slate-200 hover:bg-slate-50 text-slate-800 shadow-sm hover:shadow"
                    }`}
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={`text-[9px] font-black uppercase px-2 py-0.5 border rounded-md ${
                            isSelected ? "bg-white/20 border-transparent text-white" : getCountryColor(farm.country)
                          }`}>
                            {farm.country}
                          </span>
                          <span className="text-xs font-bold flex items-center gap-1 opacity-70">
                            <MapPin className="h-3 w-3" />
                            {farm.region.split(",")[0]}
                          </span>
                        </div>
                        <h4 className="text-base font-black tracking-tight">{farm.name}</h4>
                      </div>
                      <span className="text-xs font-bold opacity-60 flex items-center gap-1 flex-shrink-0">
                        <ArrowUp className="h-3 w-3" />
                        {farm.altitude}
                      </span>
                    </div>

                    {/* Signature Callout */}
                    <div className={`p-2.5 rounded-xl text-xs font-semibold ${
                      isSelected ? "bg-white/10 text-amber-200" : "bg-amber-50/70 text-amber-900 border border-amber-100"
                    }`}>
                      <span className="font-extrabold uppercase tracking-wider text-[8px] opacity-70 block mb-0.5">Signature Product</span>
                      {farm.signatureProduct}
                    </div>

                    <div className="flex justify-between items-center text-xs">
                      <div className="flex flex-wrap gap-1">
                        {farm.keyVarieties.map(v => (
                          <span key={v} className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                            isSelected ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600 border border-slate-200/40"
                          }`}>
                            {v}
                          </span>
                        ))}
                      </div>
                      <ChevronRight className="h-4 w-4 opacity-50 flex-shrink-0 ml-2" />
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Right Side: Detailed Profile Dashboard */}
        <div id="variety-farm-detail-panel" className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6 lg:sticky lg:top-24">
          
          {/* Header Title */}
          <div className="border-b border-slate-100 pb-4 space-y-1.5">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`text-[10px] font-black uppercase px-2.5 py-0.5 border rounded-full ${
                getCountryColor(selectedFarm.country)
              }`}>
                {selectedFarm.country}
              </span>
              <span className="text-xs font-bold text-slate-500 flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-blue-500" />
                {selectedFarm.region}
              </span>
            </div>
            <h4 className="text-xl font-black text-slate-950 tracking-tight">{selectedFarm.name}</h4>
            <div className="flex flex-wrap gap-4 text-xs font-bold text-slate-600">
              <span className="flex items-center gap-1"><ArrowUp className="h-4 w-4 text-slate-400" /> {selectedFarm.altitude}</span>
              <span className="flex items-center gap-1"><Globe className="h-4 w-4 text-slate-400" /> {selectedFarm.processingMethod.split(",")[0]}</span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-1">
            <h5 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Farm Story & Terroir</h5>
            <p className="text-xs text-slate-600 leading-relaxed font-semibold">
              {selectedFarm.description}
            </p>
          </div>

          {/* Signature Product Callout (Stunning Gold Style) */}
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/70 text-amber-900 space-y-1.5 shadow-sm">
            <div className="flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider text-amber-800">
              <Sparkles className="h-3.5 w-3.5 text-amber-600" />
              <span>Signature Exclusive Lot</span>
            </div>
            <p className="text-sm font-black leading-snug">{selectedFarm.signatureProduct}</p>
            <p className="text-xs text-amber-800/80 font-medium">Processing: {selectedFarm.processingMethod}</p>
          </div>

          {/* Cultivars Produced (Interactive Inspect Links) */}
          <div className="space-y-3 bg-slate-50/50 p-4 border border-slate-100 rounded-2xl">
            <h5 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
              <Tag className="h-3 w-3" />
              <span>Cultivated Varieties (Click to Inspect)</span>
            </h5>
            <div className="flex flex-wrap gap-2">
              {selectedFarm.keyVarieties.map((varName) => {
                const varId = mapVarietyNameToId(varName);
                if (varId) {
                  return (
                    <button
                      key={varName}
                      onClick={() => onInspectVariety(varId)}
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 hover:border-blue-400 hover:text-blue-600 rounded-xl text-xs font-black transition-all cursor-pointer shadow-sm hover:shadow hover:-translate-y-0.5 active:scale-98"
                    >
                      <span>{varName}</span>
                      <ChevronRight className="h-3 w-3 text-slate-400" />
                    </button>
                  );
                }
                return (
                  <span key={varName} className="px-3 py-1.5 bg-slate-100 border border-slate-200 rounded-xl text-xs font-bold text-slate-500">
                    {varName}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Prestige Rating & Auction Notes */}
          <div className="space-y-3 pt-3 border-t border-slate-100">
            <div className="flex gap-3 text-xs leading-relaxed font-semibold">
              <div className="bg-slate-100 text-slate-700 p-2 rounded-xl flex-shrink-0 flex items-center justify-center">
                <Award className="h-4.5 w-4.5 text-blue-500" />
              </div>
              <div className="space-y-0.5">
                <span className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400">Prestige & Vigor</span>
                <p className="text-slate-700 font-bold">{selectedFarm.prestigeNotes}</p>
              </div>
            </div>

            <div className="flex gap-3 text-xs leading-relaxed font-semibold">
              <div className="bg-slate-100 text-slate-700 p-2 rounded-xl flex-shrink-0 flex items-center justify-center">
                <Flame className="h-4.5 w-4.5 text-orange-500 animate-pulse" />
              </div>
              <div className="space-y-0.5">
                <span className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400">Auction / Competition Status</span>
                <p className="text-slate-700 font-bold">{selectedFarm.coeVictories}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
