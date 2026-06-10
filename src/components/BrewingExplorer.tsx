"use client";

import { useState, useEffect, useMemo, useRef } from "react";
import { coffeeBrewingMethods } from "@/data/coffeeBrewing";
import { BrewingMethod, BrewStep, TastingTrouble } from "@/types/brewing";
import {
  Coffee,
  Filter,
  Flame,
  Sliders,
  Beaker,
  Play,
  Pause,
  RotateCcw,
  HelpCircle,
  Sparkles,
  Info,
  Clock,
  Gauge,
  SlidersHorizontal,
  ChevronRight,
  TrendingUp,
  AlertTriangle,
  RotateCw,
  Compass,
  Layers,
  Droplet,
  Compass as PhysicsIcon,
  ShieldAlert
} from "lucide-react";

export default function BrewingExplorer() {
  const [selectedMethodId, setSelectedMethodId] = useState<string>("pour-over");
  
  // Calculator States
  const [coffeeWeight, setCoffeeWeight] = useState<number>(15);
  const [brewRatio, setBrewRatio] = useState<number>(16.6);

  // Timer States
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [timerSeconds, setTimerSeconds] = useState<number>(0);
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);

  // Advanced Research Tabs
  const [activeResearchTab, setActiveResearchTab] = useState<string>("hydrodynamics");

  // Selected Method Data
  const method = useMemo<BrewingMethod>(() => {
    return coffeeBrewingMethods.find((m) => m.id === selectedMethodId) || coffeeBrewingMethods[0];
  }, [selectedMethodId]);

  // Set default parameters when method changes
  useEffect(() => {
    setBrewRatio(method.defaultRatio);
    setCoffeeWeight(method.id === "espresso" ? 18 : 15);
    resetTimer();
  }, [method]);

  // Calculations
  const calculatedWater = useMemo(() => {
    return Math.round(coffeeWeight * brewRatio);
  }, [coffeeWeight, brewRatio]);

  const expectedYield = useMemo(() => {
    // Water retention factor based on physics of the method
    const retentionFactor = method.id === "espresso" ? 1.1 : 2.0;
    const yieldVol = calculatedWater - coffeeWeight * retentionFactor;
    return Math.round(Math.max(0, yieldVol));
  }, [calculatedWater, coffeeWeight, method]);

  // Dynamic Recipe Steps with scaled water weights
  const scaledRecipeSteps = useMemo(() => {
    const steps = method.stepRecipe;
    const totalWater = calculatedWater;
    
    // Scale step water weights relative to totalWater
    const defaultTotalStepWater = Math.max(...steps.map(s => s.waterAdded), 1);
    
    return steps.map((step) => {
      const pct = step.waterAdded / defaultTotalStepWater;
      const scaledWater = Math.round(pct * totalWater);
      return {
        ...step,
        waterAdded: scaledWater
      };
    });
  }, [method, calculatedWater]);

  // Total Recipe duration helper
  const totalDuration = useMemo(() => {
    const steps = method.stepRecipe;
    if (steps.length === 0) return 0;
    
    let lastStepDuration = method.id === "espresso" ? 10 : 60;
    return steps[steps.length - 1].time + lastStepDuration;
  }, [method]);

  // Active step calculation based on timerSeconds
  const activeStepIndex = useMemo(() => {
    const steps = scaledRecipeSteps;
    let activeIdx = 0;
    for (let i = 0; i < steps.length; i++) {
      if (timerSeconds >= steps[i].time) {
        activeIdx = i;
      }
    }
    return activeIdx;
  }, [scaledRecipeSteps, timerSeconds]);

  // Timer Controls
  const startTimer = () => {
    if (isTimerRunning) return;
    setIsTimerRunning(true);
    timerIntervalRef.current = setInterval(() => {
      setTimerSeconds((prev) => {
        if (prev >= totalDuration) {
          setIsTimerRunning(false);
          if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
          return totalDuration;
        }
        return prev + 1;
      });
    }, 1000);
  };

  const pauseTimer = () => {
    setIsTimerRunning(false);
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
    }
  };

  const resetTimer = () => {
    pauseTimer();
    setTimerSeconds(0);
  };

  useEffect(() => {
    return () => {
      if (timerIntervalRef.current) clearInterval(timerIntervalRef.current);
    };
  }, []);

  // Format Timer text MM:SS
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainingSecs = secs % 60;
    return `${mins.toString().padStart(2, "0")}:${remainingSecs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="space-y-10">
      
      {/* Dual Method selector Tabs */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4">
        <h4 className="text-[10px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5 justify-center">
          <Compass className="h-4 w-4 text-rose-500" />
          <span>Core Coffee Extraction Methodology Selector</span>
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {/* Pour Over Button */}
          <button
            onClick={() => setSelectedMethodId("pour-over")}
            className={`group relative flex items-center gap-4 p-5 rounded-2xl border transition-all duration-300 hover:scale-[1.01] cursor-pointer ${
              selectedMethodId === "pour-over"
                ? "bg-slate-950 border-slate-950 text-white shadow-lg"
                : "bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100 hover:border-slate-300"
            }`}
          >
            <div className={`p-3.5 rounded-xl transition-all ${selectedMethodId === "pour-over" ? "bg-teal-500/20 text-teal-400" : "bg-white border border-slate-200 text-slate-500"}`}>
              <Filter className="h-6 w-6" />
            </div>
            <div className="text-left">
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Filter Percolation</span>
              <h4 className="text-base font-black leading-tight">Drip / Pour Over (V60)</h4>
            </div>
          </button>

          {/* Espresso Button */}
          <button
            onClick={() => setSelectedMethodId("espresso")}
            className={`group relative flex items-center gap-4 p-5 rounded-2xl border transition-all duration-300 hover:scale-[1.01] cursor-pointer ${
              selectedMethodId === "espresso"
                ? "bg-slate-950 border-slate-950 text-white shadow-lg"
                : "bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100 hover:border-slate-300"
            }`}
          >
            <div className={`p-3.5 rounded-xl transition-all ${selectedMethodId === "espresso" ? "bg-rose-500/20 text-rose-450" : "bg-white border border-slate-200 text-slate-500"}`}>
              <Coffee className="h-6 w-6" />
            </div>
            <div className="text-left">
              <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">High-Pressure Percolation</span>
              <h4 className="text-base font-black leading-tight">Espresso extraction</h4>
            </div>
          </button>
        </div>
      </div>

      {/* Main Grid: Parameters + Stepper */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Interactive Brewing Parameters & Calculator (5 columns) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
            
            {/* Header info */}
            <div className="space-y-2 pb-4 border-b border-slate-150">
              <div className="flex items-center gap-2">
                <span className="bg-rose-50 border border-rose-250 text-rose-650 px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-wider">
                  {method.extractionMechanic.split(" ")[0]}
                </span>
                <span className="text-slate-400 text-[10px] font-bold">•</span>
                <span className="text-slate-500 text-[10px] font-bold uppercase tracking-wider">{method.filterType}</span>
              </div>
              <h3 className="text-2xl font-black text-slate-950 tracking-tight leading-tight">{method.name}</h3>
              <p className="text-xs font-semibold text-slate-505 leading-relaxed italic">{method.tagline}</p>
            </div>

            {/* Scientific Illustration Figure */}
            <div className="relative h-56 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-md group">
              <img
                src={method.imageUrl}
                alt={method.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="bg-rose-500 text-white px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest mb-1.5 inline-block">
                  Figure 1.0: Extraction Physics
                </span>
                <p className="text-[10px] font-medium text-slate-200 leading-snug">
                  Visual representation of the {method.id === "espresso" ? "pressurized emulsion kinetics" : "gravity-driven capillary percolation flow"} dynamics.
                </p>
              </div>
            </div>

            {/* Interactive Calculator Sliders */}
            <div className="space-y-5">
              <h4 className="text-[10px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Sliders className="h-3.5 w-3.5 text-rose-500" />
                <span>Interactive Yield Calculator</span>
              </h4>

              {/* Coffee Weight Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                  <span>Dry Coffee Dose</span>
                  <span className="text-rose-600 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded text-[11px] font-black">
                    {coffeeWeight} grams
                  </span>
                </div>
                <input
                  type="range"
                  min={method.id === "espresso" ? 14 : 5}
                  max={method.id === "espresso" ? 22 : 45}
                  step={0.5}
                  value={coffeeWeight}
                  onChange={(e) => setCoffeeWeight(parseFloat(e.target.value))}
                  className="w-full accent-rose-500 cursor-pointer h-1.5 bg-slate-200 rounded-lg appearance-none"
                />
                <div className="flex justify-between text-[9px] text-slate-400 font-bold uppercase">
                  <span>Min ({method.id === "espresso" ? 14 : 5}g)</span>
                  <span>Max ({method.id === "espresso" ? 22 : 45}g)</span>
                </div>
              </div>

              {/* Brew Ratio Slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                  <span>Brewing Ratio</span>
                  <span className="text-rose-600 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded text-[11px] font-black">
                    1 : {brewRatio}
                  </span>
                </div>
                <input
                  type="range"
                  min={method.id === "espresso" ? 1.5 : 12.0}
                  max={method.id === "espresso" ? 3.0 : 18.0}
                  step={0.1}
                  value={brewRatio}
                  onChange={(e) => setBrewRatio(parseFloat(e.target.value))}
                  className="w-full accent-rose-500 cursor-pointer h-1.5 bg-slate-200 rounded-lg appearance-none"
                />
                <div className="flex justify-between text-[9px] text-slate-400 font-bold uppercase">
                  <span>Stronger (1:{method.id === "espresso" ? 1.5 : 12.0})</span>
                  <span>Milder (1:{method.id === "espresso" ? 3.0 : 18.0})</span>
                </div>
              </div>
            </div>

            {/* Calculated Output Grid */}
            <div className="grid grid-cols-2 gap-3.5 bg-slate-50 border border-slate-150 p-4 rounded-2xl">
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">Total Brew Water</span>
                <p className="text-xl font-black text-slate-900">{calculatedWater} <span className="text-xs text-slate-500 font-bold">g/ml</span></p>
                <p className="text-[9px] text-slate-400 font-bold">Optimal solvent volume</p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">Expected Cup Yield</span>
                <p className="text-xl font-black text-rose-600">{expectedYield} <span className="text-xs text-rose-500 font-bold">ml</span></p>
                <p className="text-[9px] text-slate-400 font-bold">Minus puck/grounds retention</p>
              </div>
            </div>

            {/* Grind Size Particle Visualizer */}
            <div className="space-y-3 p-4 border border-slate-150 rounded-2xl bg-slate-50/50">
              <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                <span className="flex items-center gap-1.5">
                  <SlidersHorizontal className="h-3.5 w-3.5 text-slate-400" />
                  <span>Grind Profile: {method.grindSizeText.split(" (")[0]}</span>
                </span>
                <span className="text-[10px] font-black text-slate-500">{method.grindSizeMicrons} µm</span>
              </div>
              {/* Styled particle board */}
              <div className="h-14 bg-slate-900 border border-slate-950 rounded-xl relative overflow-hidden flex flex-wrap content-center justify-center gap-1.5 p-2">
                {Array.from({ length: 45 }).map((_, idx) => {
                  // Higher micron = larger dots, less density, further spaced
                  const size = Math.max(1.5, Math.min(6.5, method.grindSizeMicrons / 200));
                  const opacity = 0.5 + (idx % 5) * 0.1;
                  return (
                    <div
                      key={idx}
                      className="rounded-full bg-amber-800 border border-amber-900/40 shadow-sm flex-shrink-0"
                      style={{
                        width: `${size}px`,
                        height: `${size}px`,
                        opacity: opacity,
                        margin: `${(1500 - method.grindSizeMicrons) / 350}px`
                      }}
                    />
                  );
                })}
              </div>
              <p className="text-[10px] text-slate-400 font-medium italic text-center">
                Visualizing grind surface area. Fine grinds speed up diffusion kinetics but increase flow restriction.
              </p>
            </div>
            
            {/* Scientific Extraction targets */}
            <div className="grid grid-cols-2 gap-3.5 border-t border-slate-150 pt-4">
              <div className="flex items-start gap-2.5">
                <Gauge className="h-4 w-4 text-rose-500 mt-0.5 flex-shrink-0" />
                <div className="space-y-0.5">
                  <span className="text-[9px] font-black uppercase text-slate-400">Target TDS Range</span>
                  <p className="text-xs font-black text-slate-800">{method.tdsRange}</p>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <TrendingUp className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <div className="space-y-0.5">
                  <span className="text-[9px] font-black uppercase text-slate-400">Target Extraction Yield</span>
                  <p className="text-xs font-black text-slate-800">{method.eyRange}</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column: Recipe Timeline & Chemistry (7 columns) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Timeline & Timer Component */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
            <div className="flex justify-between items-center pb-4 border-b border-slate-150">
              <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-rose-500 animate-pulse" />
                <span>Brewing Extraction Timer & Stepper</span>
              </h4>
              <span className="text-[9px] font-bold text-rose-600 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded">
                Total Target: {formatTime(totalDuration)}
              </span>
            </div>

            {/* Big Timer display */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-5 bg-slate-900 border border-slate-950 p-5 rounded-2xl text-white">
              <div className="space-y-1 text-center sm:text-left">
                <span className="text-[9px] font-black uppercase text-rose-400 tracking-wider">Active Run Time</span>
                <p className="text-4xl font-black font-mono tracking-wider">{formatTime(timerSeconds)}</p>
              </div>

              {/* Timer Controls */}
              <div className="flex items-center gap-2">
                {isTimerRunning ? (
                  <button
                    onClick={pauseTimer}
                    className="p-3 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-xl transition-all font-bold cursor-pointer"
                    title="Pause Timer"
                  >
                    <Pause className="h-5 w-5 fill-slate-950" />
                  </button>
                ) : (
                  <button
                    onClick={startTimer}
                    className="p-3 bg-emerald-500 hover:bg-emerald-600 text-slate-950 rounded-xl transition-all font-bold cursor-pointer"
                    title="Start Timer"
                  >
                    <Play className="h-5 w-5 fill-slate-950" />
                  </button>
                )}
                <button
                  onClick={resetTimer}
                  className="p-3 bg-slate-800 hover:bg-slate-750 text-white border border-slate-700 rounded-xl transition-all font-bold cursor-pointer"
                  title="Reset Timer"
                >
                  <RotateCcw className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Stepper Steps List */}
            <div className="space-y-3.5">
              {scaledRecipeSteps.map((step, idx) => {
                const isPassed = timerSeconds > step.time;
                const isCurrent = activeStepIndex === idx && timerSeconds > 0;

                return (
                  <div
                    key={idx}
                    className={`flex items-start gap-4 p-3.5 rounded-2xl border transition-all duration-300 ${
                      isCurrent
                        ? "bg-rose-50/40 border-rose-400 shadow-sm"
                        : isPassed
                        ? "bg-slate-50/60 border-slate-200 opacity-60"
                        : "bg-white border-slate-150"
                    }`}
                  >
                    {/* Time Indicator dot */}
                    <div className="flex flex-col items-center flex-shrink-0 mt-0.5">
                      <div
                        className={`h-7 w-7 rounded-full border flex items-center justify-center text-[10px] font-black transition-all ${
                          isCurrent
                            ? "bg-rose-500 border-rose-600 text-white animate-pulse"
                            : isPassed
                            ? "bg-emerald-50 border-emerald-350 text-emerald-700"
                            : "bg-slate-100 border-slate-250 text-slate-500"
                        }`}
                      >
                        {formatTime(step.time).replace(" 00s", "").replace("m", "")}
                      </div>
                      {idx < scaledRecipeSteps.length - 1 && (
                        <div className="w-[1.5px] h-10 bg-slate-200 mt-2" />
                      )}
                    </div>

                    {/* Step details */}
                    <div className="space-y-1.5 flex-1">
                      <div className="flex justify-between items-center">
                        <h5 className={`text-sm font-black tracking-tight ${isCurrent ? "text-rose-650" : "text-slate-800"}`}>
                          {step.action}
                        </h5>
                        {step.waterAdded > 0 && (
                          <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded border ${
                            isCurrent 
                              ? "bg-rose-50 border-rose-200 text-rose-600" 
                              : "bg-slate-100 border-slate-200 text-slate-500"
                          }`}>
                            Water: {step.waterAdded}g
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-605 leading-relaxed font-semibold">{step.detail}</p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Expanded Research Encyclopedia Panel */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
            <div className="pb-4 border-b border-slate-150">
              <h4 className="text-[10px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Beaker className="h-3.5 w-3.5 text-rose-500" />
                <span>Deep Research Encyclopedia</span>
              </h4>
              <p className="text-[10px] font-bold text-slate-500 mt-1">
                Explore the advanced fluid physics, chemical reactions, and hydrodynamics of extraction.
              </p>
            </div>

            {/* Research Tabs Navigation */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "hydrodynamics", label: "Fluid Dynamics", icon: PhysicsIcon },
                { id: "chemistry", label: "Water Chemistry", icon: Droplet },
                { id: "materials", label: "Filtration & Bypass", icon: Layers },
                { id: "kinetics", label: method.id === "espresso" ? "Puck Preparation" : "Pouring Kinetics", icon: Sliders },
                { id: "thermal", label: "Thermal Dynamics", icon: Flame },
                { id: "particles", label: "Particle Distribution", icon: Sparkles },
                { id: "equipment", label: "Equipment Variations", icon: Coffee }
              ].map((tab) => {
                const TabIcon = tab.icon;
                const isActive = activeResearchTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveResearchTab(tab.id)}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isActive
                        ? "bg-slate-900 text-white shadow-sm"
                        : "bg-slate-50 border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-800"
                    }`}
                  >
                    <TabIcon className="h-3.5 w-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Research Content Area */}
            <div className="p-4 bg-slate-50 border border-slate-150 rounded-2xl animate-in fade-in duration-300">
              {activeResearchTab === "hydrodynamics" && (
                <div className="space-y-2">
                  <h5 className="text-xs font-black uppercase tracking-wide text-rose-650 flex items-center gap-1">
                    <PhysicsIcon className="h-3.5 w-3.5" />
                    <span>Hydrodynamics & Fluid Resistance</span>
                  </h5>
                  <p className="text-xs text-slate-700 leading-relaxed font-semibold whitespace-pre-line">
                    {method.physicsDetails}
                  </p>
                </div>
              )}
              {activeResearchTab === "chemistry" && (
                <div className="space-y-2">
                  <h5 className="text-xs font-black uppercase tracking-wide text-teal-600 flex items-center gap-1">
                    <Droplet className="h-3.5 w-3.5" />
                    <span>Water Chemistry, pH Buffering & Volatiles</span>
                  </h5>
                  <p className="text-xs text-slate-700 leading-relaxed font-semibold whitespace-pre-line">
                    {method.waterChemistry}
                  </p>
                </div>
              )}
              {activeResearchTab === "materials" && (
                <div className="space-y-2">
                  <h5 className="text-xs font-black uppercase tracking-wide text-indigo-600 flex items-center gap-1">
                    <Layers className="h-3.5 w-3.5" />
                    <span>Material Science: Filtration & Slurry Bypass</span>
                  </h5>
                  <p className="text-xs text-slate-700 leading-relaxed font-semibold whitespace-pre-line">
                    {method.bypassAndPaper}
                  </p>
                </div>
              )}
              {activeResearchTab === "kinetics" && (
                <div className="space-y-2">
                  <h5 className="text-xs font-black uppercase tracking-wide text-amber-600 flex items-center gap-1">
                    <Sliders className="h-3.5 w-3.5" />
                    <span>{method.id === "espresso" ? "Compaction & Distribution Mechanics" : "Pouring Agitation & Hydrostatic Head"}</span>
                  </h5>
                  <p className="text-xs text-slate-700 leading-relaxed font-semibold whitespace-pre-line">
                    {method.puckPrepOrPouringKinetics}
                  </p>
                </div>
              )}
              {activeResearchTab === "thermal" && (
                <div className="space-y-2">
                  <h5 className="text-xs font-black uppercase tracking-wide text-orange-600 flex items-center gap-1">
                    <Flame className="h-3.5 w-3.5" />
                    <span>Thermal Dynamics & Heat Transfer</span>
                  </h5>
                  <p className="text-xs text-slate-700 leading-relaxed font-semibold whitespace-pre-line">
                    {method.thermalDynamics}
                  </p>
                </div>
              )}
              {activeResearchTab === "particles" && (
                <div className="space-y-2">
                  <h5 className="text-xs font-black uppercase tracking-wide text-fuchsia-600 flex items-center gap-1">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>Particle Size Distribution & Fines</span>
                  </h5>
                  <p className="text-xs text-slate-700 leading-relaxed font-semibold whitespace-pre-line">
                    {method.particleDistribution}
                  </p>
                </div>
              )}
              {activeResearchTab === "equipment" && (
                <div className="space-y-2">
                  <h5 className="text-xs font-black uppercase tracking-wide text-sky-600 flex items-center gap-1">
                    <Coffee className="h-3.5 w-3.5" />
                    <span>Equipment Geometry & Variations</span>
                  </h5>
                  <p className="text-xs text-slate-700 leading-relaxed font-semibold whitespace-pre-line">
                    {method.equipmentVariations}
                  </p>
                </div>
              )}
            </div>

            {/* Fraction timeline */}
            <div className="space-y-3.5 border-t border-slate-150 pt-4">
              <h5 className="text-xs font-black uppercase text-slate-500 flex items-center gap-1.5">
                <Info className="h-4 w-4 text-blue-500" />
                <span>Thermodynamic Fraction Stages</span>
              </h5>
              <p className="text-xs text-slate-750 font-semibold leading-relaxed whitespace-pre-line">
                {method.extractionFractions}
              </p>
            </div>
          </div>

          {/* Historical Evolution Timeline */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
            <div className="pb-4 border-b border-slate-150">
              <h4 className="text-[10px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-rose-500" />
                <span>Historical Chronology & Lineage</span>
              </h4>
              <p className="text-[10px] font-bold text-slate-505 mt-1 leading-relaxed">
                The industrial and cultural milestones that shaped modern {method.name.toLowerCase()} extraction physics.
              </p>
            </div>

            {/* Timeline UI */}
            <div className="relative border-l border-slate-150 pl-5 ml-2.5 space-y-6">
              {method.historyTimeline.map((item, index) => (
                <div key={index} className="relative group">
                  {/* Timeline point */}
                  <div className="absolute -left-[27.5px] top-1 h-3.5 w-3.5 rounded-full bg-slate-900 border-2 border-white ring-2 ring-slate-200 group-hover:scale-110 group-hover:bg-rose-500 group-hover:ring-rose-200 transition-all duration-300" />
                  
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-black text-rose-600 bg-rose-50 border border-rose-200 px-2 py-0.5 rounded-md leading-none">
                        {item.year}
                      </span>
                      <h5 className="text-xs font-black text-slate-900 group-hover:text-rose-650 transition-colors">
                        {item.title}
                      </h5>
                    </div>
                    <p className="text-xs font-semibold text-slate-605 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Brief Narrative */}
            <div className="p-4 bg-slate-50 border border-slate-150 rounded-2xl text-xs font-semibold text-slate-650 leading-relaxed italic">
              {method.history}
            </div>
          </div>

          {/* Tasting Troubleshooting Guide */}
          <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <ShieldAlert className="h-4 w-4 text-rose-500" />
              <span>Sensory Troubleshooting & Extraction Calibration</span>
            </h4>
            
            <div className="space-y-3">
              {method.troubleshooting.map((t, index) => (
                <div key={index} className="p-4 bg-rose-50/15 border border-rose-105 rounded-2xl space-y-2.5">
                  <div className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-rose-55 border border-rose-200 text-rose-600 flex items-center justify-center font-black text-xs">
                      !
                    </div>
                    <h5 className="text-xs font-black text-slate-900 uppercase tracking-wide">
                      {t.issue}
                    </h5>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-semibold text-slate-650 leading-relaxed pl-7 border-l border-slate-200">
                    <div className="space-y-1">
                      <span className="text-[9px] font-black uppercase text-slate-400 block">Root Chemical Cause</span>
                      <p className="text-slate-700">{t.cause}</p>
                    </div>
                    <div className="space-y-1">
                      <span className="text-[9px] font-black uppercase text-emerald-600 block">Physical Calibration Solution</span>
                      <p className="text-slate-950 bg-emerald-50/50 p-1.5 rounded border border-emerald-100 text-[11px] font-bold">
                        {t.solution}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
