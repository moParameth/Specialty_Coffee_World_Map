"use client";

import { useState } from "react";
import { 
  supplyChainStages, 
  economicCalculations, 
  supplyChainRisks 
} from "@/data/coffeeSupplyChain";
import { 
  MapPin, 
  Clock, 
  Activity, 
  TrendingUp, 
  Sparkles, 
  Coins, 
  ChevronRight, 
  HelpCircle,
  AlertTriangle,
  ArrowRight,
  ShieldAlert,
  ShieldCheck,
  RotateCcw,
  CheckCircle2
} from "lucide-react";

export default function SupplyChainExplorer() {
  const [selectedStageId, setSelectedStageId] = useState<string>("cultivation");
  const [activeProduct, setActiveProduct] = useState<"coffeeBag" | "cafeLatte">("coffeeBag");
  const [expandedCostIndex, setExpandedCostIndex] = useState<number | null>(0);

  // Find active stage data
  const activeStage = supplyChainStages.find(s => s.id === selectedStageId) || supplyChainStages[0];

  // Get economics data
  const ecoData = economicCalculations[activeProduct];

  return (
    <div className="space-y-12">
      {/* Hero Intro */}
      <div className="bg-gradient-to-br from-slate-950 via-amber-950 to-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-xl border border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-3xl relative z-10 space-y-4">
          <span className="inline-flex items-center gap-1.5 bg-amber-500/20 text-amber-300 border border-amber-400/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Activity className="h-3.5 w-3.5 text-amber-400" /> Ground to Cup Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">The Specialty Coffee Supply Chain</h2>
          <p className="text-sm md:text-base text-slate-300 font-semibold leading-relaxed">
            Specialty coffee is defined by traceabilty, craftsmanship, and equity. Trace the complex physical 
            transitions and economic trading models that transform seed nutrients in tropical soils into the 
            flavor-dense liquid in your cup.
          </p>
        </div>
      </div>

      {/* SECTION 1: Interactive Supply Chain Roadmap */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-4 space-y-1">
          <h3 className="text-lg font-black text-slate-950 tracking-tight">1. Supply Chain Timeline</h3>
          <p className="text-xs text-slate-500 font-semibold">Select a phase to inspect its agricultural, chemical, and physical milestones.</p>
        </div>

        {/* Timeline Pills */}
        <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
          {supplyChainStages.map((stage) => {
            const isSelected = selectedStageId === stage.id;
            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setSelectedStageId(stage.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-2xl border transition-all cursor-pointer whitespace-nowrap ${
                  isSelected
                    ? "bg-slate-900 border-slate-900 text-white shadow-md scale-[1.01]"
                    : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300"
                }`}
              >
                <div className={`h-6 w-6 rounded-full flex items-center justify-center text-xs font-black ${
                  isSelected ? "bg-amber-400 text-slate-950" : "bg-slate-100 text-slate-500"
                }`}>
                  {stage.phaseNumber}
                </div>
                <div className="text-left">
                  <p className="text-[9px] font-bold uppercase opacity-60">Phase 0{stage.phaseNumber}</p>
                  <p className="text-xs font-black tracking-tight">{stage.name.split(" & ")[0]}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Phase Details Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4 items-start">
          {/* Column A: Metadata & Description */}
          <div className="lg:col-span-6 space-y-5">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="bg-amber-500 text-slate-950 text-[10px] font-black uppercase px-2 py-0.5 rounded">
                  Phase 0{activeStage.phaseNumber}
                </span>
                <span className="text-xs font-bold text-slate-400">| {activeStage.subtitle}</span>
              </div>
              <h4 className="text-2xl font-black text-slate-950 tracking-tight leading-tight">
                {activeStage.name}
              </h4>
            </div>

            {/* Logistics Meta Tags */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-slate-50 p-4 border border-slate-100 rounded-2xl text-xs font-bold text-slate-700">
              <div className="space-y-1">
                <span className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                  <MapPin className="h-3 w-3" /> Location
                </span>
                <p className="leading-snug text-slate-800">{activeStage.location}</p>
              </div>
              <div className="space-y-1">
                <span className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                  <Clock className="h-3 w-3" /> Duration
                </span>
                <p className="leading-snug text-slate-800">{activeStage.duration}</p>
              </div>
              <div className="space-y-1">
                <span className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                  <Activity className="h-3 w-3" /> Physical Form
                </span>
                <p className="leading-snug text-slate-800">{activeStage.physicalTransition.split(" -> ").pop()}</p>
              </div>
            </div>

            {/* Transition Flow Visualizer */}
            <div className="p-3 bg-gradient-to-r from-amber-500/5 via-amber-500/10 to-amber-500/5 border border-amber-200/40 rounded-2xl flex items-center justify-between gap-2 text-xs font-extrabold text-amber-900">
              <span className="opacity-75">{activeStage.physicalTransition.split(" -> ")[0]}</span>
              <ArrowRight className="h-4 w-4 text-amber-600 flex-shrink-0 animate-pulse" />
              <span>{activeStage.physicalTransition.split(" -> ").slice(-1)[0]}</span>
            </div>

            {/* Phase Illustration */}
            {activeStage.imageUrl && (
              <div className="relative h-44 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-sm group">
                <img 
                  src={activeStage.imageUrl} 
                  alt={activeStage.name}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
            )}

            {/* Deep Description */}
            <div className="space-y-1.5">
              <h5 className="text-[10px] font-black uppercase tracking-wider text-slate-400">Scientific & Physical Context</h5>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-semibold">
                {activeStage.detailedDescription}
              </p>
            </div>
          </div>

          {/* Column B: Key Activities & Quality Control */}
          <div className="lg:col-span-6 space-y-6">
            {/* Key Activities */}
            <div className="bg-slate-50 border border-slate-100 rounded-3xl p-5 space-y-3 shadow-sm">
              <h5 className="text-[10px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5 text-blue-500" />
                <span>Primary Technical Activities</span>
              </h5>
              <ol className="space-y-3.5">
                {activeStage.keyActivities.map((act, index) => (
                  <li key={index} className="flex gap-3 text-xs leading-relaxed font-semibold text-slate-700">
                    <span className="flex-shrink-0 h-5 w-5 rounded-full bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center font-bold">
                      {index + 1}
                    </span>
                    <p className="pt-0.5">{act}</p>
                  </li>
                ))}
              </ol>
            </div>

            {/* Quality Controls */}
            <div className="bg-emerald-50/50 border border-emerald-100 rounded-3xl p-5 space-y-3 shadow-sm">
              <h5 className="text-[10px] font-black uppercase tracking-wider text-emerald-800 flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                <span>Specialty Quality Standards</span>
              </h5>
              <ul className="space-y-3">
                {activeStage.qualityControls.map((qc, index) => (
                  <li key={index} className="flex gap-2.5 text-xs leading-relaxed font-semibold text-slate-700">
                    <CheckCircle2 className="h-4.5 w-4.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{qc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 2: Interactive Economics & Value Share Calculator */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-lg font-black text-slate-950 tracking-tight flex items-center gap-1.5">
              <Coins className="h-5 w-5 text-amber-600" />
              <span>2. Coffee Economics: C-Market vs. Direct Trade</span>
            </h3>
            <p className="text-xs text-slate-500 font-semibold">
              Compare where the money goes when buying commodity C-Market coffee versus direct-trade specialty coffee.
            </p>
          </div>

          {/* Product Selectors */}
          <div className="flex bg-slate-100 p-1 rounded-xl border border-slate-200/50 self-start md:self-auto flex-shrink-0">
            <button
              onClick={() => {
                setActiveProduct("coffeeBag");
                setExpandedCostIndex(0);
              }}
              className={`px-3 py-1.5 text-xs font-black rounded-lg transition-all cursor-pointer ${
                activeProduct === "coffeeBag" ? "bg-slate-900 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Roasted Bag ($20.00)
            </button>
            <button
              onClick={() => {
                setActiveProduct("cafeLatte");
                setExpandedCostIndex(0);
              }}
              className={`px-3 py-1.5 text-xs font-black rounded-lg transition-all cursor-pointer ${
                activeProduct === "cafeLatte" ? "bg-slate-900 text-white shadow-sm" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Cafe Latte ($5.00)
            </button>
          </div>
        </div>

        {/* Product Details Header */}
        <div className="bg-slate-50 p-4 border border-slate-100 rounded-2xl">
          <h4 className="text-sm font-black text-slate-900">
            Active Breakdown: <span className="text-amber-700">{ecoData.title}</span>
          </h4>
          <p className="text-xs text-slate-500 font-semibold mt-1">
            The C-Market price is dictated by commodity exchange speculation. It frequently drops below $1.50/lb, driving farmers into debt. 
            Direct Trade pays fixed quality premiums directly, insuring farmers against market crashes.
          </p>
        </div>

        {/* Value Share Stack Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Cost Items List (Column 1) */}
          <div className="lg:col-span-7 space-y-3">
            {ecoData.breakdown.map((item, index) => {
              const isFarmer = item.label.toLowerCase().includes("farmer");
              const isExpanded = expandedCostIndex === index;
              
              // Calculate values
              const basePrice = ecoData.retailPrice;
              const commValue = (basePrice * item.commodityPercentage) / 100;
              const specValue = (basePrice * item.specialtyPercentage) / 100;

              return (
                <div
                  key={item.label}
                  onClick={() => setExpandedCostIndex(index)}
                  className={`p-4 border rounded-2xl cursor-pointer transition-all duration-300 space-y-3 ${
                    isExpanded 
                      ? "bg-slate-50 border-slate-400/60 shadow-sm" 
                      : "bg-white border-slate-200 hover:bg-slate-50/50"
                  } ${isFarmer ? "border-amber-400 bg-amber-50/10 hover:bg-amber-50/20" : ""}`}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-black text-slate-900 flex items-center gap-1.5">
                      {isFarmer && <Sparkles className="h-3.5 w-3.5 text-amber-500 animate-pulse" />}
                      {item.label}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1">
                      {isExpanded ? "Hide Details" : "Show Details"}
                      <ChevronRight className={`h-3 w-3 transition-transform ${isExpanded ? "rotate-90" : ""}`} />
                    </span>
                  </div>

                  {/* Side-by-Side Visual Bars */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                    {/* C-Market Bar */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-[10px] font-bold text-slate-500">
                        <span>C-Market</span>
                        <span>{item.commodityPercentage}% (${commValue.toFixed(2)})</span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-slate-400 transition-all duration-1000"
                          style={{ width: `${item.commodityPercentage}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Direct Trade Bar */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-[10px] font-bold text-slate-700">
                        <span>Direct Trade</span>
                        <span className={isFarmer ? "text-amber-700 font-extrabold" : "text-slate-800"}>
                          {item.specialtyPercentage}% (${specValue.toFixed(2)})
                        </span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full transition-all duration-1000 ${
                            isFarmer ? "bg-amber-500" : "bg-slate-800"
                          }`}
                          style={{ width: `${item.specialtyPercentage}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Description */}
                  {isExpanded && (
                    <div className="bg-white p-3 border border-slate-100 rounded-xl text-xs text-slate-600 leading-relaxed font-semibold mt-2">
                      {item.description}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Educational Callouts (Column 2) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-gradient-to-br from-amber-500/10 via-transparent to-transparent border border-amber-200/50 rounded-3xl p-5 space-y-3">
              <h5 className="text-sm font-black text-slate-900 flex items-center gap-1.5">
                <TrendingUp className="h-4.5 w-4.5 text-amber-600" />
                <span>The Direct Trade Premium</span>
              </h5>
              <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                Direct trade isn't just about charity; it's an investment in quality. In specialty coffee, roasters pay premiums 
                that scale with the coffee's quality score.
              </p>
              <div className="space-y-2 pt-2 border-t border-slate-200/40 text-[11px] font-bold text-slate-700">
                <div className="flex justify-between">
                  <span>80-84 Score (SCA Grade)</span>
                  <span className="text-amber-800">~$3.00 - $4.50/lb</span>
                </div>
                <div className="flex justify-between">
                  <span>85-89 Score (Exotic/Micro)</span>
                  <span className="text-amber-800">~$5.00 - $12.00/lb</span>
                </div>
                <div className="flex justify-between">
                  <span>90+ Score (Competition Lots)</span>
                  <span className="text-amber-800">~$15.00 - $2,500+/lb</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-5 space-y-3 text-xs leading-relaxed font-semibold text-slate-600">
              <h5 className="text-sm font-black text-slate-900 flex items-center gap-1">
                <HelpCircle className="h-4.5 w-4.5 text-blue-500" />
                <span>Why is Cafe coffee farmgate share low?</span>
              </h5>
              <p>
                In a retail cafe cup of coffee, local retail expenses dominate the cost structure. Over 60% of the price of your 
                latte pays for commercial rent, barista labor, water filters, electricity, and high-end equipment. 
              </p>
              <p className="text-slate-500">
                However, direct trade ensures that even if coffee beans represent only 8% of the final latte cost, the actual dollars 
                reaching the farm are 400% higher, making farming viable.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 3: Supply Chain Risks & Quality Controls */}
      <div className="space-y-4">
        <div className="space-y-1">
          <h3 className="text-lg font-black text-slate-950 tracking-tight flex items-center gap-1.5">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            <span>3. Critical Risks & Quality Mitigations</span>
          </h3>
          <p className="text-xs text-slate-500 font-semibold">
            Every step represents a potential failure point. Discover how specialty producers safeguard quality.
          </p>
        </div>

        {/* Risks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {supplyChainRisks.map((risk) => (
            <div 
              key={risk.riskName} 
              className="bg-white border border-slate-200 rounded-3xl p-5 hover:shadow-md transition-shadow duration-300 flex flex-col justify-between gap-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">
                    {risk.stageName} Phase
                  </span>
                  <ShieldAlert className="h-4.5 w-4.5 text-red-500" />
                </div>
                <h4 className="text-base font-black text-slate-950 tracking-tight">{risk.riskName}</h4>
                <p className="text-xs text-slate-600 leading-relaxed font-semibold">{risk.impact}</p>
              </div>

              {/* Mitigation Callout */}
              <div className="p-3 bg-emerald-50/50 border border-emerald-100 rounded-2xl flex gap-2.5 text-xs text-slate-700 font-bold leading-relaxed">
                <ShieldCheck className="h-4.5 w-4.5 text-emerald-600 flex-shrink-0 mt-0.5 animate-pulse" />
                <div>
                  <span className="text-[9px] font-extrabold uppercase text-emerald-800 block mb-0.5">Specialty Mitigation</span>
                  {risk.mitigation}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
