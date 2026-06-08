"use client";

import { useState } from "react";
import { coffeeVarietyTiers, TierVariety } from "@/data/coffeeVarietyTiers";
import { 
  Award, 
  Sprout, 
  ShieldAlert, 
  Zap, 
  Layers, 
  ChevronRight, 
  Compass, 
  Search,
  Sparkles,
  HeartHandshake
} from "lucide-react";

interface VarietyTierListProps {
  onInspectVariety: (id: string) => void;
}

export default function VarietyTierList({ onInspectVariety }: VarietyTierListProps) {
  const [perspective, setPerspective] = useState<"standard" | "quality" | "agronomy">("standard");
  const [selectedId, setSelectedId] = useState<string>("geisha");
  const [searchQuery, setSearchQuery] = useState("");

  const getTierForPerspective = (variety: TierVariety) => {
    if (perspective === "quality") return variety.qualityTier;
    if (perspective === "agronomy") return variety.agronomyTier;
    return variety.standardTier;
  };

  const getSpeciesBadgeStyle = (species: string, isSelected: boolean) => {
    if (isSelected) return "bg-white/20 text-white border-transparent";
    const lower = species.toLowerCase();
    if (lower.includes("arabica") && !lower.includes("robusta")) {
      return "bg-amber-50 text-amber-800 border-amber-200/60";
    }
    if (lower.includes("robusta") && !lower.includes("arabica")) {
      return "bg-indigo-50 text-indigo-800 border-indigo-200/60";
    }
    if (lower.includes("eugenioides")) {
      return "bg-rose-50 text-rose-800 border-rose-200/60";
    }
    return "bg-purple-50 text-purple-800 border-purple-200/60";
  };

  // Filter and group varieties
  const selectedVariety = coffeeVarietyTiers.find(v => v.id === selectedId) || coffeeVarietyTiers[0];

  const filteredVarieties = coffeeVarietyTiers.filter(v => 
    v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    v.species.toLowerCase().includes(searchQuery.toLowerCase()) ||
    v.lineage.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const tiers: ("S" | "A" | "B" | "C" | "D")[] = ["S", "A", "B", "C", "D"];

  const tierStyles = {
    S: {
      bg: "bg-gradient-to-br from-rose-500 to-orange-500",
      text: "text-white",
      glow: "shadow-rose-500/10 border-rose-200",
      lightBg: "bg-rose-50/50",
      label: "S-Tier",
      desc: "Prestige / Elite"
    },
    A: {
      bg: "bg-gradient-to-br from-amber-500 to-yellow-500",
      text: "text-white",
      glow: "shadow-amber-500/10 border-amber-200",
      lightBg: "bg-amber-50/50",
      label: "A-Tier",
      desc: "Outstanding / High-End"
    },
    B: {
      bg: "bg-gradient-to-br from-emerald-500 to-teal-500",
      text: "text-white",
      glow: "shadow-emerald-500/10 border-emerald-200",
      lightBg: "bg-emerald-50/50",
      label: "B-Tier",
      desc: "Solid Workhorse"
    },
    C: {
      bg: "bg-gradient-to-br from-blue-500 to-indigo-500",
      text: "text-white",
      glow: "shadow-blue-500/10 border-blue-200",
      lightBg: "bg-blue-50/40",
      label: "C-Tier",
      desc: "Resilient / Yield-First"
    },
    D: {
      bg: "bg-gradient-to-br from-purple-500 to-fuchsia-500",
      text: "text-white",
      glow: "shadow-purple-500/10 border-purple-200",
      lightBg: "bg-purple-50/40",
      label: "D-Tier",
      desc: "Commodity / Breeding Base"
    }
  };

  const perspectiveInfo = {
    standard: {
      title: "Specialty Equilibrium Balance",
      description: "A comprehensive balanced ranking that weighs cup potential, yield metrics, and disease resistance equally. This is the ideal tier list for standard specialty operations looking to maximize both quality and survival."
    },
    quality: {
      title: "Sensory-First (Cup Quality)",
      description: "Ranked purely on cup quality potential, sensory complexity, fragrance, acidity, and prestige. Agronomic weaknesses (low yields, high rust susceptibility, altitude requirements) are ignored. Fragile specialty landraces rise to the top."
    },
    agronomy: {
      title: "Farming-First (Agronomic Resilience)",
      description: "Ranked purely on agronomic viability: yield per hectare, resistance to Coffee Leaf Rust (CLR) and Coffee Berry Disease (CBD), and overall ease of cultivation. Fragile, low-yielding varieties drop significantly, while robust modern hybrids climb."
    }
  };

  const renderMeter = (value: number, colorClass: string, icon: React.ReactNode, label: string) => {
    const filledBlocks = Math.round(value * 2); // Map 0-5 to 0-10 blocks
    return (
      <div className="space-y-1.5">
        <div className="flex justify-between items-center text-xs font-bold text-slate-700">
          <span className="flex items-center gap-1">
            {icon}
            {label}
          </span>
          <span className="font-extrabold text-slate-900">{value.toFixed(1)}/5.0</span>
        </div>
        <div className="flex gap-0.5 items-center w-full">
          {Array.from({ length: 10 }).map((_, idx) => (
            <div
              key={idx}
              className={`h-2.5 flex-1 rounded-sm transition-all duration-300 ${
                idx < filledBlocks ? colorClass : "bg-slate-200"
              }`}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {/* Perspective Toggle & Description Dashboard */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 border-b border-slate-100 pb-5">
          <div className="space-y-1">
            <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
              <Layers className="h-5 w-5 text-blue-600 animate-pulse" />
              <span>Multi-Dimensional Cultivar Tier List</span>
            </h3>
            <p className="text-xs font-semibold text-slate-500">
              Shift perspective between cup profile excellence and farming economics to see how rankings reorganize.
            </p>
          </div>

          {/* Perspective Pill Switcher */}
          <div className="flex flex-wrap items-center bg-slate-100/80 p-1 rounded-2xl border border-slate-200 self-stretch sm:self-auto">
            <button
              onClick={() => setPerspective("standard")}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all duration-200 flex items-center gap-1.5 ${
                perspective === "standard"
                  ? "bg-white text-slate-955 shadow-sm border border-slate-200/50"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <Compass className="h-3.5 w-3.5" />
              <span>Balanced</span>
            </button>
            <button
              onClick={() => setPerspective("quality")}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all duration-200 flex items-center gap-1.5 ${
                perspective === "quality"
                  ? "bg-white text-rose-600 shadow-sm border border-slate-200/50"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <Award className="h-3.5 w-3.5" />
              <span>Sensory-First</span>
            </button>
            <button
              onClick={() => setPerspective("agronomy")}
              className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all duration-200 flex items-center gap-1.5 ${
                perspective === "agronomy"
                  ? "bg-white text-emerald-600 shadow-sm border border-slate-200/50"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              <Sprout className="h-3.5 w-3.5" />
              <span>Farming-First</span>
            </button>
          </div>
        </div>

        {/* Dynamic Perspective Intro Card */}
        <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-5 flex flex-col md:flex-row items-start gap-4">
          <div className={`p-3 rounded-2xl border flex-shrink-0 ${
            perspective === "quality" ? "bg-rose-50 text-rose-600 border-rose-100" :
            perspective === "agronomy" ? "bg-emerald-50 text-emerald-600 border-emerald-100" :
            "bg-blue-50 text-blue-600 border-blue-100"
          }`}>
            {perspective === "quality" ? <Award className="h-6 w-6" /> :
             perspective === "agronomy" ? <Sprout className="h-6 w-6" /> :
             <Compass className="h-6 w-6" />}
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-black text-slate-900 uppercase tracking-wider">
              Viewing Mode: {perspectiveInfo[perspective].title}
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed font-semibold">
              {perspectiveInfo[perspective].description}
            </p>
          </div>
        </div>
      </div>

      {/* Tier Grid & Reason Split Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Columns: The Tier Board (Grid) */}
        <div className="lg:col-span-7 space-y-4">
          {/* Quick Search */}
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search tier list (e.g. Geisha, Typica, Robusta)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-xs md:text-sm font-bold bg-white border border-slate-200 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-500"
            />
          </div>

          {/* Tier Rows Container */}
          <div className="border border-slate-200 rounded-3xl bg-white shadow-sm overflow-hidden divide-y divide-slate-100">
            {tiers.map((tier) => {
              // Get varieties in this tier under active perspective
              const tierVarieties = filteredVarieties.filter(v => getTierForPerspective(v) === tier);
              const style = tierStyles[tier];

              return (
                <div key={tier} className={`flex flex-col sm:flex-row items-stretch min-h-[5.5rem] transition-colors ${style.lightBg}`}>
                  
                  {/* Tier Badge Box */}
                  <div className={`w-full sm:w-28 flex flex-col justify-center items-center py-4 px-3 text-center flex-shrink-0 ${style.bg} ${style.text}`}>
                    <span className="text-2xl font-black tracking-tighter leading-none">{style.label}</span>
                    <span className="text-[9px] font-bold opacity-80 uppercase mt-1 tracking-wider">{style.desc}</span>
                  </div>

                  {/* Cards Lane */}
                  <div className="flex-1 flex flex-wrap gap-2.5 p-4 items-center">
                    {tierVarieties.length === 0 ? (
                      <span className="text-[10px] font-bold text-slate-400 italic">No varieties in this tier</span>
                    ) : (
                      tierVarieties.map((variety) => {
                        const isSelected = selectedId === variety.id;
                        return (
                          <div
                            key={variety.id}
                            onClick={() => {
                              setSelectedId(variety.id);
                              if (window.innerWidth < 1024) {
                                const el = document.getElementById("variety-tier-detail-panel");
                                if (el) {
                                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                                }
                              }
                            }}
                            className={`px-3 py-2 rounded-xl cursor-pointer transition-all duration-300 flex items-center gap-1.5 select-none hover:-translate-y-0.5 border ${
                              isSelected
                                ? "bg-slate-900 text-white border-slate-900 shadow-md scale-102"
                                : "bg-white hover:bg-slate-50 border-slate-200 text-slate-800 shadow-sm hover:shadow"
                            }`}
                          >
                            <span className="text-xs font-black">{variety.name}</span>
                            <span className={`text-[8px] font-extrabold uppercase px-1.5 py-0.5 rounded border ${getSpeciesBadgeStyle(variety.species, isSelected)}`}>
                              {variety.species.includes("/") ? "Hybrid" : variety.species.split(" ")[0]}
                            </span>
                          </div>
                        );
                      })
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Columns: Analysis & Reasoning Panel */}
        <div id="variety-tier-detail-panel" className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6 lg:sticky lg:top-24">
          
          {/* Header Title */}
          <div className="border-b border-slate-100 pb-4 space-y-1">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h4 className="text-xl font-black text-slate-950 tracking-tight">{selectedVariety.name}</h4>
              <div className="flex items-center gap-1.5">
                <span className={`text-[9px] font-black uppercase px-2.5 py-0.5 rounded-full ${
                  tierStyles[getTierForPerspective(selectedVariety)].bg
                } text-white shadow-sm`}>
                  {getTierForPerspective(selectedVariety)}-Tier
                </span>
              </div>
            </div>
            <p className="text-xs text-slate-400 font-semibold italic">
              Lineage: {selectedVariety.lineage} ({selectedVariety.species} Species)
            </p>
          </div>

          {/* Metric Meters */}
          <div className="space-y-4 bg-slate-50/50 p-4 border border-slate-100 rounded-2xl">
            <h5 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Dimensions Rating</h5>
            
            {/* Cup Quality */}
            {renderMeter(
              selectedVariety.scores.quality, 
              "bg-rose-500", 
              <Award className="h-3.5 w-3.5 text-rose-500" />, 
              "Cup Quality Potential"
            )}
            
            {/* Yield */}
            {renderMeter(
              selectedVariety.scores.yield, 
              "bg-emerald-500", 
              <Sprout className="h-3.5 w-3.5 text-emerald-600" />, 
              "Agronomic Yield"
            )}

            {/* Disease Resistance */}
            {renderMeter(
              selectedVariety.scores.resistance, 
              "bg-blue-500", 
              <ShieldAlert className="h-3.5 w-3.5 text-blue-500" />, 
              "Disease & Pest Resistance"
            )}

            {/* Cultivation Difficulty */}
            {renderMeter(
              selectedVariety.scores.difficulty, 
              "bg-red-500", 
              <Zap className="h-3.5 w-3.5 text-red-500" />, 
              "Cultivation Difficulty"
            )}
          </div>

          {/* Deep Reasoning Text */}
          <div className="space-y-2">
            <h5 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Placement Reasoning</h5>
            <p className="text-xs text-slate-600 leading-relaxed font-semibold border-l-2 border-slate-200 pl-3.5 py-0.5">
              {selectedVariety.reasoning}
            </p>
          </div>

          {/* Verdict Box */}
          <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 text-slate-700 space-y-1 flex items-start gap-3">
            <div className="bg-blue-100 text-blue-700 p-1.5 rounded-lg border border-blue-200 mt-0.5 flex-shrink-0">
              <HeartHandshake className="h-4 w-4" />
            </div>
            <div>
              <span className="text-[9px] font-extrabold uppercase tracking-wider text-blue-700 block">Overall Verdict</span>
              <p className="text-xs text-slate-900 font-extrabold italic mt-0.5 leading-snug">{selectedVariety.verdict}</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-2 border-t border-slate-100 flex gap-3">
            <button
              onClick={() => onInspectVariety(selectedVariety.id)}
              className="flex-1 inline-flex justify-center items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-black py-2.5 transition-all shadow-md shadow-blue-500/10 cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
            >
              <Sparkles className="h-4 w-4" />
              <span>Inspect in Genetic Explorer</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
