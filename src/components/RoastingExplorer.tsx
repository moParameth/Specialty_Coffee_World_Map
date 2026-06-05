"use client";

import { useState } from "react";
import { roastingPhases, roastLevels, roasterTypes } from "@/data/coffeeRoasting";
import {
  Flame,
  Thermometer,
  Clock,
  Sparkles,
  Info,
  Layers,
  Scale,
  Compass,
  Coffee,
  Heart,
  Activity,
  Sliders,
  AlertTriangle,
  CheckCircle,
  XCircle
} from "lucide-react";

type RoastDefect = {
  name: string;
  description: string;
  causes: string;
  flavorImpact: string;
  colorClass: string;
};

const roastDefects: RoastDefect[] = [
  {
    name: "Underdevelopment",
    description: "The interior of the coffee bean remains dense, raw, and light, while the exterior appears brown and roasted. The heat failed to penetrate the bean core.",
    causes: "Roasting too rapidly (excessive heat/burner power) or ending the roast too early without sufficient development time ratio (DTR).",
    flavorImpact: "Grassy, sour, metallic, peanut-like, and astringent. Lacks sweetness and mouthfeel.",
    colorClass: "border-amber-200 bg-amber-50/40 text-amber-900"
  },
  {
    name: "Baked Roast",
    description: "The roasting temperature stalls or rises too slowly, causing the beans to 'bake' rather than roast. The temperature curve levels off or becomes flat.",
    causes: "Burner heat too low or drum airflow too high, stalling the Rate of Rise (RoR) and prolonging the roast time.",
    flavorImpact: "Flat, dry, paper-like, bready, and oats. Acidity, sweetness, and complex origin notes are completely destroyed.",
    colorClass: "border-slate-200 bg-slate-50 text-slate-800"
  },
  {
    name: "Scorching & Facing",
    description: "Dark, charred circular patches appear on the flat face of the beans. The bean surface literally burns due to contact with excessively hot metal.",
    causes: "Roaster charge temperature too high, drum speed too slow (causing beans to slide rather than tumble), or excessive conduction heat transfer.",
    flavorImpact: "Smoky, harsh, bitter, and carbonaceous. Tastes like ash and charcoal.",
    colorClass: "border-rose-200 bg-rose-50/40 text-rose-900"
  },
  {
    name: "Tipping",
    description: "The tips or edges of the beans (where the cell structure is weakest) are charred black, while the rest of the bean body is normally developed.",
    causes: "Applying high heat too early in the roast (during the drying phase) when the bean core still contains high moisture, steam-burning the tips.",
    flavorImpact: "Bitter, charcoal, burnt toast, masking the delicate floral and fruity origin notes.",
    colorClass: "border-orange-200 bg-orange-50/40 text-orange-950"
  }
];

export default function RoastingExplorer() {
  const [activePhaseId, setActivePhaseId] = useState<string>("charge");
  const [activeLevelId, setActiveLevelId] = useState<string>("light");
  const [simTemp, setSimTemp] = useState<number>(200);

  // Get active phase
  const activePhase = roastingPhases.find((p) => p.id === activePhaseId) || roastingPhases[0];
  // Get active level
  const activeLevel = roastLevels.find((l) => l.id === activeLevelId) || roastLevels[0];

  // Dynamic values based on Simulator Temperature (150 - 245)
  const getSimulatedDetails = (temp: number) => {
    let color = "#cbd5e1";
    let name = "Green / Drying";
    let flavor = "Grassy, wet hay, baked bread";
    let acidity = 0;
    let sweetness = 0;
    let body = 0;
    let bitterness = 0;

    if (temp < 165) {
      color = "#cbd5c0"; // raw yellow-green
      name = "Drying Phase";
      flavor = "Grassy, raw cereal, green tea";
      acidity = 1.2;
      sweetness = 0.5;
      body = 1.0;
      bitterness = 0.0;
    } else if (temp < 185) {
      color = "#e2d2b4"; // yellowing
      name = "Yellowing (Maillard)";
      flavor = "Toasted bread, grains, baked cookie";
      acidity = 2.8;
      sweetness = 1.8;
      body = 2.2;
      bitterness = 0.5;
    } else if (temp < 196) {
      color = "#d97706"; // golden amber
      name = "Caramelization Stage";
      flavor = "Sweet malt, toast, honey, maple syrup";
      acidity = 4.2;
      sweetness = 3.2;
      body = 2.8;
      bitterness = 0.8;
    } else if (temp < 210) {
      color = "#b45309"; // light brown
      name = "Light Roast (Cinnamon)";
      flavor = "Lemon, jasmine, floral, green apple, black tea";
      acidity = 5.0;
      sweetness = 3.8;
      body = 3.2;
      bitterness = 1.2;
    } else if (temp < 220) {
      color = "#78350f"; // medium brown
      name = "Medium Roast (City / American)";
      flavor = "Caramel, milk chocolate, hazelnut, cherry";
      acidity = 3.5;
      sweetness = 5.0;
      body = 4.2;
      bitterness = 2.0;
    } else if (temp < 230) {
      color = "#451a03"; // dark chestnut brown
      name = "Medium-Dark (Full City / Vienna)";
      flavor = "Bittersweet chocolate, roasted walnut, dark cherry";
      acidity = 2.0;
      sweetness = 4.0;
      body = 4.8;
      bitterness = 3.5;
    } else {
      color = "#1c0d02"; // oily black-brown
      name = "Dark Roast (French / Italian)";
      flavor = "Smoke, dark chocolate, tobacco, ash, charcoal";
      acidity = 0.8;
      sweetness = 2.0;
      body = 3.8;
      bitterness = 5.0;
    }

    return { color, name, flavor, acidity, sweetness, body, bitterness };
  };

  const sim = getSimulatedDetails(simTemp);

  // Render metric bars in simulator
  const renderSimMetric = (val: number, activeColor: string) => {
    const filledCount = Math.round(val * 2);
    return (
      <div className="flex gap-0.5 items-center w-full">
        {Array.from({ length: 10 }).map((_, idx) => (
          <div
            key={idx}
            className={`h-2.5 flex-1 rounded-sm transition-all duration-200 ${
              idx < filledCount ? activeColor : "bg-slate-200"
            }`}
          />
        ))}
        <span className="text-xs font-bold text-slate-500 w-10 text-right ml-2">
          {val.toFixed(1)}/5
        </span>
      </div>
    );
  };

  // SVG Roasting Curve mapping logic
  // Returns time (0-12) based on temperature slider (150-245)
  const getCurveTime = (temp: number): number => {
    if (temp < 196) {
      // Linear map 150°C to 196°C -> 5.0 to 9.0 mins
      return 5.0 + ((temp - 150) / (196 - 150)) * 4.0;
    } else if (temp < 224) {
      // Linear map 196°C to 224°C -> 9.0 to 11.0 mins
      return 9.0 + ((temp - 196) / (224 - 196)) * 2.0;
    } else {
      // Linear map 224°C to 245°C -> 11.0 to 12.0 mins
      return 11.0 + ((temp - 224) / (245 - 224)) * 1.0;
    }
  };

  const activeTime = getCurveTime(simTemp);
  // SVG size is 500x250
  // X: 50 (margin left) to 470 (margin right) -> width 420
  // Y: 210 (margin bottom) to 30 (margin top) -> height 180 (for temp 50 to 250)
  const getSvgCoords = (time: number, temp: number) => {
    const x = 50 + (time / 12) * 420;
    const y = 210 - ((temp - 50) / 200) * 180;
    return { x, y };
  };

  const activePointer = getSvgCoords(activeTime, simTemp);

  return (
    <div className="space-y-10">
      {/* Intro Banner */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-xl border border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-3xl relative z-10 space-y-3">
          <span className="inline-flex items-center gap-1 bg-blue-500/20 text-blue-300 border border-blue-400/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Flame className="h-3 w-3 text-orange-400" /> Roasting Science
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">The Art & Physics of Coffee Roasting</h2>
          <p className="text-sm md:text-base text-slate-300 font-medium leading-relaxed">
            Roasting transforms green seeds through thermodynamics, shifting them from endothermic drying 
            to exothermic cracking. Deep within the bean, Maillard reactions create thousands of aromatics, 
            caramelization sweetens the sugars, and pyrolysis breaks down cellulose to define body and bitterness.
          </p>
        </div>
      </div>

      {/* Roast Simulator (Interactive Slider & Live SVG Graph) */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 border-b border-slate-100 pb-4">
          <div>
            <h3 className="text-lg font-black text-slate-950 flex items-center gap-2">
              <Sliders className="h-5 w-5 text-blue-600" />
              <span>Real-Time Roast Curve Simulator</span>
            </h3>
            <p className="text-xs font-semibold text-slate-500 mt-1">
              Drag the temperature slider below. The indicator dot on the thermodynamic curve moves in real time.
            </p>
          </div>
          <div className="bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-2xl flex items-center gap-2 text-blue-700 font-bold self-start md:self-auto shadow-sm">
            <Thermometer className="h-4.5 w-4.5 text-blue-500 animate-pulse" />
            <span className="text-sm font-black">{simTemp}°C ({Math.round(simTemp * 1.8 + 32)}°F)</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Interactive SVG Roasting Curve */}
          <div className="lg:col-span-7 border border-slate-150 rounded-2xl p-4 bg-slate-50/50 relative">
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center justify-between">
              <span>Thermodynamic Roast Profile Graph</span>
              <span className="font-semibold text-blue-600 text-[9px] bg-blue-50 border border-blue-150 px-2 py-0.5 rounded">
                Simulated Time: {activeTime.toFixed(1)} Min
              </span>
            </h4>

            {/* SVG Graph Container */}
            <div className="w-full">
              <svg viewBox="0 0 500 250" className="w-full h-auto" fill="none">
                {/* Horizontal Grid lines */}
                <line x1="50" y1="30" x2="470" y2="30" stroke="#e2e8f0" strokeDasharray="3 3" />
                <line x1="50" y1="75" x2="470" y2="75" stroke="#e2e8f0" strokeDasharray="3 3" />
                <line x1="50" y1="120" x2="470" y2="120" stroke="#e2e8f0" strokeDasharray="3 3" />
                <line x1="50" y1="165" x2="470" y2="165" stroke="#e2e8f0" strokeDasharray="3 3" />
                <line x1="50" y1="210" x2="470" y2="210" stroke="#e2e8f0" />

                {/* Y-Axis labels (Temps) */}
                <text x="15" y="34" className="fill-slate-400 font-bold text-[9px]">250°C</text>
                <text x="15" y="79" className="fill-slate-400 font-bold text-[9px]">200°C</text>
                <text x="15" y="124" className="fill-slate-400 font-bold text-[9px]">150°C</text>
                <text x="15" y="169" className="fill-slate-400 font-bold text-[9px]">100°C</text>
                <text x="20" y="214" className="fill-slate-400 font-bold text-[9px]">50°C</text>

                {/* X-Axis labels (Time in Mins) */}
                <text x="50" y="230" className="fill-slate-400 font-bold text-[9px] text-center" textAnchor="middle">0 Min</text>
                <text x="155" y="230" className="fill-slate-400 font-bold text-[9px]" textAnchor="middle">3 Min</text>
                <text x="260" y="230" className="fill-slate-400 font-bold text-[9px]" textAnchor="middle">6 Min</text>
                <text x="365" y="230" className="fill-slate-400 font-bold text-[9px]" textAnchor="middle">9 Min</text>
                <text x="470" y="230" className="fill-slate-400 font-bold text-[9px]" textAnchor="middle">12 Min</text>

                {/* Roasting Curve path (Charge -> TP -> Drying -> First Crack -> Dark) */}
                {/* Bezier profile line */}
                <path
                  d="M 50,75 C 60,180 90,185 102.5,174 C 130,150 180,135 225,120 C 300,95 330,85 365,78.6 C 400,72 420,60 435,53.4 C 450,47 465,38 470,34.5"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  strokeLinecap="round"
                />

                {/* Key Phase Point Markers on the Graph */}
                {/* Charge */}
                <circle cx="50" cy="75" r="4" className="fill-slate-400 stroke-white stroke-2 hover:r-5 cursor-pointer" />
                {/* Turning Point */}
                <circle cx="102.5" cy="174" r="4" className="fill-blue-500 stroke-white stroke-2 hover:r-5 cursor-pointer" />
                {/* Drying (150C) */}
                <circle cx="225" cy="120" r="4" className="fill-yellow-500 stroke-white stroke-2 hover:r-5 cursor-pointer" />
                {/* First Crack (196C) */}
                <circle cx="365" cy="78.6" r="4" className="fill-orange-500 stroke-white stroke-2 hover:r-5 cursor-pointer" />
                {/* Second Crack (224C) */}
                <circle cx="435" cy="53.4" r="4" className="fill-red-600 stroke-white stroke-2 hover:r-5 cursor-pointer" />

                {/* Phase labels floating */}
                <text x="80" y="195" className="fill-blue-600 font-black text-[8px]" textAnchor="middle">Turning Pt</text>
                <text x="225" y="140" className="fill-yellow-600 font-black text-[8px]" textAnchor="middle">Drying</text>
                <text x="365" y="96" className="fill-orange-600 font-black text-[8px]" textAnchor="middle">1st Crack</text>
                <text x="445" y="68" className="fill-red-600 font-black text-[8px]" textAnchor="middle">2nd Crack</text>

                {/* Active Dynamic Pointer (synchronised with the temp slider) */}
                <g>
                  {/* Glowing outer aura */}
                  <circle cx={activePointer.x} cy={activePointer.y} r="8" className="fill-orange-500/30 animate-ping" />
                  {/* Outer ring */}
                  <circle cx={activePointer.x} cy={activePointer.y} r="6" className="stroke-orange-600 stroke-2 fill-none" />
                  {/* Inner solid dot */}
                  <circle cx={activePointer.x} cy={activePointer.y} r="3.5" className="fill-orange-500" />
                </g>
              </svg>
            </div>
          </div>

          {/* Right Column: Simulated Bean & Sensory Dashboard */}
          <div className="lg:col-span-5 space-y-5">
            {/* Appearance Card */}
            <div className="flex items-center gap-4 bg-slate-50/50 p-4 border border-slate-100 rounded-2xl">
              <div
                style={{ backgroundColor: sim.color }}
                className="h-20 w-14 rounded-[50%_50%_50%_50%_/_60%_60%_40%_40%] shadow-md transition-colors duration-300 relative overflow-hidden flex-shrink-0 border border-black/10"
              >
                {/* Center crack line */}
                <div className="absolute top-0 bottom-0 w-0.5 bg-yellow-100/40 rounded-full left-1/2 -translate-x-1/2 rotate-2"></div>
                {/* Glossy oily reflection */}
                {simTemp >= 220 && (
                  <div className="absolute inset-1 rounded-[50%] bg-white/20 blur-[1px] opacity-40 pointer-events-none transform -rotate-12 translate-x-1 -translate-y-1 h-7 w-4"></div>
                )}
              </div>
              <div className="space-y-1">
                <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Live Stage</h4>
                <p className="text-base font-black text-slate-900 leading-tight">{sim.name}</p>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">Descriptors: <span className="font-bold">{sim.flavor}</span></p>
              </div>
            </div>

            {/* Slider control directly underneath */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs font-bold text-slate-600 px-1">
                <span>Internal Temperature</span>
                <span>Adjust Slider</span>
              </div>
              <input
                type="range"
                min="150"
                max="245"
                value={simTemp}
                onChange={(e) => setSimTemp(parseInt(e.target.value))}
                className="w-full h-3 bg-slate-200 rounded-xl appearance-none cursor-pointer accent-blue-600 focus:outline-none"
              />
            </div>

            {/* Sensory Metric sliders */}
            <div className="space-y-3 pt-2">
              {/* Acidity */}
              <div className="space-y-1">
                <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                  <span className="flex items-center gap-1">
                    <Compass className="h-3.5 w-3.5 text-cyan-600" /> Acidity
                  </span>
                </div>
                {renderSimMetric(sim.acidity, "bg-cyan-500")}
              </div>

              {/* Sweetness */}
              <div className="space-y-1">
                <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                  <span className="flex items-center gap-1">
                    <Heart className="h-3.5 w-3.5 text-rose-500" /> Sweetness
                  </span>
                </div>
                {renderSimMetric(sim.sweetness, "bg-rose-500")}
              </div>

              {/* Body */}
              <div className="space-y-1">
                <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                  <span className="flex items-center gap-1">
                    <Coffee className="h-3.5 w-3.5 text-amber-700" /> Body
                  </span>
                </div>
                {renderSimMetric(sim.body, "bg-amber-700")}
              </div>

              {/* Bitterness */}
              <div className="space-y-1">
                <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                  <span className="flex items-center gap-1">
                    <Flame className="h-3.5 w-3.5 text-slate-600" /> Bitterness
                  </span>
                </div>
                {renderSimMetric(sim.bitterness, "bg-slate-700")}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Roasting Phase Curve Timeline */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <h3 className="text-lg font-black text-slate-900 tracking-tight flex items-center gap-2">
            <Activity className="h-5 w-5 text-blue-600" />
            <span>Roasting Thermodynamic Phases</span>
          </h3>
          <span className="text-xs bg-slate-100 border border-slate-200 text-slate-500 px-3 py-1 rounded-full font-bold">
            {roastingPhases.length} Phases
          </span>
        </div>

        {/* Phase Timeline Stepper Buttons */}
        <div className="flex overflow-x-auto pb-4 gap-2 scrollbar-thin scrollbar-thumb-slate-200 select-none">
          {roastingPhases.map((phase, idx) => {
            const isActive = phase.id === activePhaseId;
            return (
              <button
                key={phase.id}
                type="button"
                onClick={() => setActivePhaseId(phase.id)}
                className={`flex-shrink-0 flex items-center gap-2.5 px-4 py-3 rounded-2xl border transition-all duration-300 ${
                  isActive
                    ? "bg-blue-600 border-blue-600 text-white shadow-sm"
                    : "bg-slate-50 border-slate-200 hover:bg-slate-100/80 text-slate-700"
                }`}
              >
                <span className={`flex items-center justify-center h-6 w-6 rounded-full text-xs font-black border ${
                  isActive ? "bg-white text-blue-600 border-white" : "bg-slate-200 text-slate-600 border-slate-300"
                }`}>
                  {idx + 1}
                </span>
                <div className="text-left">
                  <p className="text-xs font-bold tracking-tight whitespace-nowrap">{phase.name}</p>
                  <p className={`text-[9px] font-semibold flex items-center gap-0.5 mt-0.5 ${isActive ? "text-blue-200" : "text-slate-400"}`}>
                    <Clock className="h-2.5 w-2.5" /> {phase.duration}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Phase Details */}
        <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-5 md:p-6 relative overflow-hidden transition-all duration-500">
          <div className="absolute top-0 right-0 h-32 w-32 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500/5 to-transparent pointer-events-none rounded-bl-full"></div>
          
          <div className="space-y-4 relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/50 pb-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full">
                Phase {roastingPhases.indexOf(activePhase) + 1} of {roastingPhases.length}
              </span>
              <span className="text-xs font-bold text-slate-600 flex items-center gap-1.5">
                <Thermometer className="h-4 w-4 text-blue-500" />
                {activePhase.tempRange}
              </span>
            </div>

            <div className="space-y-2">
              <h4 className="text-lg font-black text-slate-900">{activePhase.name}</h4>
              <p className="text-sm text-slate-600 leading-relaxed font-semibold">
                {activePhase.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-200/50">
              <div className="space-y-1">
                <h5 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Chemical Reaction</h5>
                <p className="text-xs text-slate-600 font-semibold leading-relaxed">{activePhase.chemicalChanges}</p>
              </div>
              <div className="space-y-1">
                <h5 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Physical / Visual State</h5>
                <p className="text-xs text-slate-600 font-semibold leading-relaxed">{activePhase.visualState}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Roast Level Explorer */}
      <div className="space-y-4">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 px-1">
          <Layers className="h-3.5 w-3.5" />
          <span>Explore Roast Level Standards</span>
        </h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Tabs Column */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {roastLevels.map((level) => {
              const isActive = level.id === activeLevelId;
              return (
                <button
                  key={level.id}
                  onClick={() => setActiveLevelId(level.id)}
                  className={`flex items-center justify-between p-4 rounded-2xl border text-left transition-all duration-300 hover:shadow-sm ${
                    isActive
                      ? "border-blue-600 bg-white shadow-sm ring-2 ring-blue-500/15"
                      : "border-slate-200 bg-white/60 hover:bg-white hover:border-slate-300"
                  }`}
                >
                  <div className="space-y-1">
                    <p className="text-sm font-black text-slate-900">{level.name}</p>
                    <p className="text-[10px] text-slate-400 font-medium">Alt: {level.alternativeNames.join(", ")}</p>
                  </div>
                  {/* Small colored color swatch indicator */}
                  <div
                    style={{ backgroundColor: level.hexColor }}
                    className="h-6 w-6 rounded-full border border-black/10 shadow-inner"
                  ></div>
                </button>
              );
            })}
          </div>

          {/* Details Column */}
          <div className="lg:col-span-8 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              {/* Illustration and swatch */}
              <div className="md:col-span-5 space-y-4">
                {activeLevel.imageUrl && (
                  <div className="w-full h-44 sm:h-52 overflow-hidden rounded-2xl border border-slate-200 bg-slate-55 relative flex items-center justify-center">
                    <img
                      src={activeLevel.imageUrl}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover blur-md opacity-25 scale-105 pointer-events-none"
                      aria-hidden="true"
                    />
                    <img
                      src={activeLevel.imageUrl}
                      alt={activeLevel.name}
                      className="relative z-10 max-h-[calc(100%-1.5rem)] max-w-[calc(100%-1.5rem)] object-contain rounded-xl shadow-sm transition-transform duration-500 hover:scale-[1.01]"
                      loading="lazy"
                    />
                  </div>
                )}
                
                {/* Specific metrics summary */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
                  <h5 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Sensory Metrics</h5>
                  
                  <div className="space-y-2 text-xs font-bold text-slate-700">
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-1 text-cyan-600"><Compass className="h-3.5 w-3.5" /> Acidity</span>
                      <span>{activeLevel.metrics.acidity}/5</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-1 text-rose-500"><Heart className="h-3.5 w-3.5" /> Sweetness</span>
                      <span>{activeLevel.metrics.sweetness}/5</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-1 text-amber-700"><Coffee className="h-3.5 w-3.5" /> Body</span>
                      <span>{activeLevel.metrics.body}/5</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-1 text-slate-600"><Flame className="h-3.5 w-3.5" /> Bitterness</span>
                      <span>{activeLevel.metrics.bitterness}/5</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text detail */}
              <div className="md:col-span-7 space-y-5">
                <div className="pb-3 border-b border-slate-100 space-y-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-xl font-black text-slate-900 tracking-tight">{activeLevel.name}</h4>
                    <span className="text-[10px] font-bold bg-orange-50 border border-orange-200 text-orange-700 px-2.5 py-0.5 rounded-full">
                      {activeLevel.tempRange}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 font-semibold italic">Alt names: {activeLevel.alternativeNames.join(", ")}</p>
                </div>

                <div className="space-y-1">
                  <h5 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Description</h5>
                  <p className="text-xs text-slate-600 font-semibold leading-relaxed">{activeLevel.description}</p>
                </div>

                {/* Flavor tags */}
                <div className="space-y-2">
                  <h5 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Sensory Markers</h5>
                  <div className="flex flex-wrap gap-1.5">
                    {activeLevel.flavorNotes.map((note) => (
                      <span key={note} className="bg-blue-50/50 border border-blue-100 text-blue-700 px-2.5 py-0.5 rounded-lg text-xs font-bold">
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-1">
                  <h5 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Chemical Breakdown</h5>
                  <p className="text-xs text-slate-500 font-semibold leading-relaxed">{activeLevel.chemicalStatus}</p>
                </div>

                <div className="p-3.5 rounded-2xl bg-amber-50/40 border border-amber-100/60 space-y-1.5">
                  <h5 className="text-[10px] font-bold uppercase tracking-wider text-amber-800">Brewing recommendation</h5>
                  <p className="text-xs text-slate-600 font-semibold leading-relaxed">{activeLevel.brewingGuide}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Roasting Defects Guide Section */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <h3 className="text-lg font-black text-slate-900 tracking-tight flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-orange-500 animate-bounce" />
            <span>Guide to Coffee Roasting Defects</span>
          </h3>
          <p className="text-xs font-semibold text-slate-500 mt-1">
            Understanding thermodynamic faults and burner manipulation failures that ruin a batch's sensory potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roastDefects.map((defect) => (
            <div
              key={defect.name}
              className={`border rounded-2xl p-5 space-y-3 flex flex-col justify-between transition-all duration-300 hover:shadow-md ${defect.colorClass}`}
            >
              <div className="space-y-2">
                <h4 className="text-base font-black tracking-tight">{defect.name}</h4>
                <p className="text-xs leading-relaxed font-semibold">{defect.description}</p>
              </div>
              <div className="pt-3 border-t border-black/5 space-y-1.5 text-xs">
                <p>
                  <span className="font-bold uppercase tracking-wider text-[9px] block text-slate-400">Root Cause</span>
                  <span className="font-medium">{defect.causes}</span>
                </p>
                <p className="pt-1">
                  <span className="font-bold uppercase tracking-wider text-[9px] block text-slate-400">Cup Profile Impact</span>
                  <span className="font-black italic">{defect.flavorImpact}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Roaster Equipment & Heat Transfer Comparison */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <h3 className="text-lg font-black text-slate-900 tracking-tight flex items-center gap-2">
            <Scale className="h-5 w-5 text-blue-600" />
            <span>Comparison: Roaster Technology</span>
          </h3>
          <p className="text-xs font-semibold text-slate-500 mt-1">
            Compare drum roasters vs. fluid-bed roasters on heating principles, roasting control, and sensory profiles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roasterTypes.map((type) => (
            <div key={type.name} className="border border-slate-200 rounded-2xl p-5 space-y-4 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all duration-300">
              <div className="space-y-1">
                <h4 className="text-base font-black text-slate-950">{type.name}</h4>
                <p className="text-xs text-slate-500 font-semibold leading-relaxed">{type.mechanism}</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-200/50">
                {/* Pros */}
                <div className="space-y-2">
                  <h5 className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 flex items-center gap-1.5">
                    <CheckCircle className="h-3 w-3" /> Pros
                  </h5>
                  <ul className="space-y-1 text-[11px] text-slate-600 font-medium">
                    {type.pros.map((pro, index) => (
                      <li key={index} className="flex gap-1.5 items-start">
                        <span className="h-1 w-1 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0"></span>
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cons */}
                <div className="space-y-2">
                  <h5 className="text-[10px] font-bold uppercase tracking-wider text-rose-600 flex items-center gap-1.5">
                    <XCircle className="h-3 w-3" /> Cons
                  </h5>
                  <ul className="space-y-1 text-[11px] text-slate-600 font-medium">
                    {type.cons.map((con, index) => (
                      <li key={index} className="flex gap-1.5 items-start">
                        <span className="h-1 w-1 rounded-full bg-rose-400 mt-1.5 flex-shrink-0"></span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
