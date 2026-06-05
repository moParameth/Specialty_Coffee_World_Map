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
  CheckCircle,
  XCircle,
  Activity,
  Sliders
} from "lucide-react";

export default function RoastingExplorer() {
  const [activePhaseId, setActivePhaseId] = useState<string>("charge");
  const [activeLevelId, setActiveLevelId] = useState<string>("light");
  
  // Roast Simulator Temperature state (ranges from 150°C to 245°C)
  const [simTemp, setSimTemp] = useState<number>(200);

  // Get active phase
  const activePhase = roastingPhases.find((p) => p.id === activePhaseId) || roastingPhases[0];
  // Get active level
  const activeLevel = roastLevels.find((l) => l.id === activeLevelId) || roastLevels[0];

  // Dynamic values based on Simulator Temperature (150 - 245)
  const getSimulatedDetails = (temp: number) => {
    // Determine bean color, text level, and flavor characteristics
    let color = "#cbd5e1"; // default green-gray
    let name = "Green / Drying";
    let flavor = "Grassy, wet hay, baked bread";
    let acidity = 0;
    let sweetness = 0;
    let body = 0;
    let bitterness = 0;

    if (temp < 165) {
      // Early Drying
      color = "#d1d5db"; // pale yellow-green
      name = "Drying (Early)";
      flavor = "Grassy, raw cereal, wet hay";
      acidity = 1.0;
      sweetness = 0.5;
      body = 1.0;
      bitterness = 0.0;
    } else if (temp < 185) {
      // Late Drying / Yellowing
      color = "#e2e8f0"; // pale yellowish-tan
      name = "Yellowing (Maillard)";
      flavor = "Toasted bread, grains, faint hay";
      acidity = 2.5;
      sweetness = 1.5;
      body = 2.0;
      bitterness = 0.5;
    } else if (temp < 196) {
      // Pre-Crack Caramelization
      color = "#d97706"; // golden amber
      name = "Yellow-Brown (Caramelization)";
      flavor = "Sweet malt, toast, honey notes";
      acidity = 4.0;
      sweetness = 3.0;
      body = 2.5;
      bitterness = 0.8;
    } else if (temp < 210) {
      // Light Roast range (196 - 209)
      // Transition from amber to light brown
      color = "#b45309"; // cinnamon light brown
      name = "Light Roast (Cinnamon)";
      flavor = "Lemon, jasmine, floral, crisp apple";
      acidity = 5.0;
      sweetness = 3.5;
      body = 3.0;
      bitterness = 1.0;
    } else if (temp < 220) {
      // Medium Roast range (210 - 219)
      color = "#78350f"; // milk chocolate brown
      name = "Medium Roast (City / American)";
      flavor = "Caramel, red apple, milk chocolate, hazelnut";
      acidity = 3.5;
      sweetness = 5.0;
      body = 4.0;
      bitterness = 2.0;
    } else if (temp < 230) {
      // Medium-Dark range (220 - 229)
      color = "#451a03"; // dark chestnut brown
      name = "Medium-Dark Roast (Full City / Vienna)";
      flavor = "Bittersweet cocoa, dark cherry, toasted almond";
      acidity = 2.0;
      sweetness = 4.0;
      body = 4.8;
      bitterness = 3.5;
    } else {
      // Dark Roast range (230 - 245)
      color = "#170a01"; // glossy black-brown
      name = "Dark Roast (French / Italian)";
      flavor = "Smoke, dark chocolate, tobacco, ash, charcoal";
      acidity = 0.8;
      sweetness = 2.0;
      body = 4.0;
      bitterness = 5.0;
    }

    return { color, name, flavor, acidity, sweetness, body, bitterness };
  };

  const sim = getSimulatedDetails(simTemp);

  // Render metric bars in simulator
  const renderSimMetric = (val: number, activeColor: string) => {
    // Scale 1 to 5 with 10 steps for smooth sliding
    const filledCount = Math.round(val * 2); // 0 to 10
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

      {/* Roast Simulator (Interactive Slider) */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2 border-b border-slate-100 pb-4">
          <div>
            <h3 className="text-lg font-black text-slate-950 flex items-center gap-2">
              <Sliders className="h-5 w-5 text-blue-600" />
              <span>Real-Time Roast Level Simulator</span>
            </h3>
            <p className="text-xs font-semibold text-slate-500 mt-1">
              Slide bean internal temperature to observe chemical transformations and sensory balances shifting.
            </p>
          </div>
          <div className="bg-blue-50 border border-blue-100 px-3.5 py-1.5 rounded-2xl flex items-center gap-2 text-blue-700 font-bold self-start md:self-auto shadow-sm">
            <Thermometer className="h-4.5 w-4.5 text-blue-500 animate-pulse" />
            <span className="text-sm font-black">{simTemp}°C ({Math.round(simTemp * 1.8 + 32)}°F)</span>
          </div>
        </div>

        {/* Slider control */}
        <div className="space-y-2">
          <div className="relative">
            <input
              type="range"
              min="150"
              max="245"
              value={simTemp}
              onChange={(e) => setSimTemp(parseInt(e.target.value))}
              className="w-full h-3 bg-slate-200 rounded-xl appearance-none cursor-pointer accent-blue-600 focus:outline-none"
            />
            {/* Tick labels */}
            <div className="flex justify-between text-[10px] text-slate-400 font-bold uppercase tracking-wider pt-2 px-1">
              <span>150°C (Drying)</span>
              <span>180°C (Maillard)</span>
              <span>196°C (First Crack)</span>
              <span>215°C (Medium City)</span>
              <span>225°C (Vienna)</span>
              <span>245°C (Italian Dark)</span>
            </div>
          </div>
        </div>

        {/* Simulator Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-2">
          {/* Simulated Bean Visualizer */}
          <div className="md:col-span-4 flex flex-col items-center justify-center p-6 border border-slate-100 bg-slate-50/50 rounded-2xl text-center space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Bean Appearance</h4>
            
            {/* Oily / non-oily bean rendering */}
            <div className="relative flex items-center justify-center">
              {/* Coffee bean shape styled using CSS border-radius and shadow */}
              <div
                style={{ backgroundColor: sim.color }}
                className="h-28 w-20 rounded-[50%_50%_50%_50%_/_60%_60%_40%_40%] shadow-lg transition-colors duration-300 relative overflow-hidden flex items-center justify-center border border-black/10"
              >
                {/* Center crack line */}
                <div className="absolute top-0 bottom-0 w-1 bg-yellow-100/40 rounded-full left-1/2 -translate-x-1/2 border-l border-r border-black/5 rotate-2"></div>
                {/* Glossy oily reflection (only shows in dark/medium-dark temperature ranges) */}
                {simTemp >= 220 && (
                  <div className="absolute inset-1.5 rounded-[50%] bg-white/20 blur-[1px] opacity-40 pointer-events-none transform -rotate-12 translate-x-2 -translate-y-2 h-10 w-6"></div>
                )}
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-base font-black text-slate-900 tracking-tight">{sim.name}</p>
              <p className="text-xs font-semibold text-slate-400 italic">Representative Swatch: {sim.color}</p>
            </div>
          </div>

          {/* Sensory Charts */}
          <div className="md:col-span-8 space-y-4">
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 pb-2">Sensory & Volatiles Shift</h4>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Volatiles / Flavor Aromas */}
              <div className="space-y-3 bg-blue-50/30 border border-blue-100/50 p-4 rounded-xl">
                <h5 className="text-xs font-bold text-blue-800 flex items-center gap-1.5">
                  <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                  <span>Aromatic Compounds</span>
                </h5>
                <p className="text-xs font-bold text-slate-700 mt-2 leading-relaxed">
                  {sim.flavor}
                </p>
                <div className="text-[10px] text-slate-400 font-semibold leading-relaxed pt-2 border-t border-slate-200/50">
                  {simTemp < 196 ? (
                    <span>Moisture vaporizing. Starch structures preparing for decomposition.</span>
                  ) : simTemp < 220 ? (
                    <span>Maillard compounds active. High concentration of organic acids and sugars.</span>
                  ) : (
                    <span>Pyrolysis active. Carbonization destroying cellular structures; oils leaking.</span>
                  )}
                </div>
              </div>

              {/* Metric meters */}
              <div className="space-y-3">
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
                  <div className="w-full h-44 sm:h-52 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 relative flex items-center justify-center">
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
