"use client";

import { useState } from "react";
import { coffeeProcessingMethods } from "@/data/coffeeProcessing";
import { CoffeeProcessingMethod } from "@/types/processing";
import {
  Droplets,
  Wrench,
  Sun,
  Compass,
  Coffee,
  Heart,
  CheckCircle,
  XCircle,
  Clock,
  Table,
  Workflow,
  Sparkles,
  Info,
  SlidersHorizontal,
  Filter,
  Layers,
  Activity,
  Droplet,
  Hammer,
  Scale
} from "lucide-react";

type CupStyleFilter = "all" | "clean" | "sweet" | "earthy";

export default function ProcessingExplorer() {
  const [activeMethodId, setActiveMethodId] = useState<string>("washed");
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [matrixSortKey, setMatrixSortKey] = useState<string>("name");
  const [matrixSortOrder, setMatrixSortOrder] = useState<"asc" | "desc">("asc");
  const [styleFilter, setStyleFilter] = useState<CupStyleFilter>("all");

  // Get active method
  const activeMethod = coffeeProcessingMethods.find((m) => m.id === activeMethodId) || coffeeProcessingMethods[0];

  // Helper to map methods to sensory cup styles
  const getMethodStyle = (id: string): CupStyleFilter => {
    if (id === "washed" || id === "carbonic-maceration") return "clean";
    if (id === "natural" || id === "honey" || id === "anaerobic" || id === "co-fermentation") return "sweet";
    if (id === "wet-hulled") return "earthy";
    return "all";
  };

  // Filtered list of methods for the tabs
  const filteredMethods = coffeeProcessingMethods.filter((method) => {
    if (styleFilter === "all") return true;
    return getMethodStyle(method.id) === styleFilter;
  });

  // Automatically select the first visible method if active is filtered out
  const handleStyleFilterChange = (style: CupStyleFilter) => {
    setStyleFilter(style);
    const visible = coffeeProcessingMethods.filter((m) => {
      if (style === "all") return true;
      return getMethodStyle(m.id) === style;
    });
    if (visible.length > 0 && !visible.some((m) => m.id === activeMethodId)) {
      setActiveMethodId(visible[0].id);
      setActiveStepIndex(0);
    }
  };

  // Get flavor class/badge for tabs
  const getFlavorBadge = (id: string) => {
    switch (id) {
      case "washed":
        return { text: "Bright & Clean", color: "bg-cyan-50 border-cyan-200 text-cyan-700 font-bold" };
      case "natural":
        return { text: "Sweet & Fruity", color: "bg-rose-50 border-rose-200 text-rose-700 font-bold" };
      case "honey":
        return { text: "Honey & Body", color: "bg-amber-50 border-amber-200 text-amber-700 font-bold" };
      case "anaerobic":
        return { text: "Exotic & Spiced", color: "bg-purple-50 border-purple-200 text-purple-700 font-bold" };
      case "carbonic-maceration":
        return { text: "Winey & Complex", color: "bg-indigo-50 border-indigo-200 text-indigo-700 font-bold" };
      case "wet-hulled":
        return { text: "Earthy & Cedar", color: "bg-emerald-50 border-emerald-200 text-emerald-700 font-bold" };
      case "co-fermentation":
        return { text: "Hyper-infused", color: "bg-pink-50 border-pink-200 text-pink-700 font-bold" };
      default:
        return { text: "Balanced", color: "bg-slate-50 border-slate-200 text-slate-700 font-bold" };
    }
  };

  // Step Icon Resolver
  const getStepIcon = (stepName: string) => {
    const name = stepName.toLowerCase();
    if (name.includes("harvest") || name.includes("select") || name.includes("pick") || name.includes("prep")) {
      return <Filter className="h-4 w-4" />;
    }
    if (name.includes("pulp") || name.includes("hull") || name.includes("mill") || name.includes("extraction")) {
      return <Hammer className="h-4 w-4" />;
    }
    if (name.includes("ferment") || name.includes("maceration") || name.includes("tank") || name.includes("loading")) {
      return <Activity className="h-4 w-4" />;
    }
    if (name.includes("wash") || name.includes("float") || name.includes("wet")) {
      return <Droplet className="h-4 w-4" />;
    }
    if (name.includes("dry") || name.includes("sun") || name.includes("canopy") || name.includes("spread") || name.includes("raking")) {
      return <Sun className="h-4 w-4" />;
    }
    if (name.includes("sort") || name.includes("defect") || name.includes("stabiliz") || name.includes("cure") || name.includes("bag")) {
      return <Scale className="h-4 w-4" />;
    }
    return <Layers className="h-4 w-4" />;
  };

  // Render metric bars
  const renderMetricStars = (val: number, activeColor: string) => {
    return (
      <div className="flex gap-1 items-center">
        {[1, 2, 3, 4, 5].map((num) => (
          <div
            key={num}
            className={`h-2.5 w-6 rounded-sm transition-all duration-300 ${
              num <= val ? activeColor : "bg-slate-200/70"
            }`}
          />
        ))}
        <span className="text-xs font-bold text-slate-500 ml-2">{val}/5</span>
      </div>
    );
  };

  // Matrix sorting logic
  const handleSortMatrix = (key: string) => {
    if (matrixSortKey === key) {
      setMatrixSortOrder(matrixSortOrder === "asc" ? "desc" : "asc");
    } else {
      setMatrixSortKey(key);
      setMatrixSortOrder("desc"); // Default to desc for metric sorting
    }
  };

  const sortedMethods = [...coffeeProcessingMethods].sort((a, b) => {
    let aVal: any;
    let bVal: any;

    if (keyIsMetric(matrixSortKey)) {
      aVal = a.metrics[matrixSortKey as keyof typeof a.metrics];
      bVal = b.metrics[matrixSortKey as keyof typeof b.metrics];
    } else {
      aVal = a[matrixSortKey as keyof typeof a] || "";
      bVal = b[matrixSortKey as keyof typeof b] || "";
    }

    if (typeof aVal === "string") {
      return matrixSortOrder === "asc" ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
    } else {
      return matrixSortOrder === "asc" ? aVal - bVal : bVal - aVal;
    }
  });

  function keyIsMetric(key: string): boolean {
    return ["difficulty", "waterUsage", "flavorClarity", "body", "sweetness"].includes(key);
  }

  return (
    <div className="space-y-10">
      {/* Intro Banner */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-6 md:p-8 shadow-xl border border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-3xl relative z-10 space-y-3">
          <span className="inline-flex items-center gap-1 bg-blue-500/20 text-blue-300 border border-blue-400/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="h-3 w-3" /> Processing Science
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">How Processing Shapes the Cup</h2>
          <p className="text-sm md:text-base text-slate-300 font-medium leading-relaxed">
            Coffee processing is the journey of turning raw coffee cherry fruit into dry exportable seeds. 
            The method chosen determines which chemical compounds decompose and which sugars migrate into the seed, 
            radically altering the final cup's acidity, sweetness, and mouthfeel.
          </p>
        </div>
      </div>

      {/* Flavor Profile Filtering Controls */}
      <div className="space-y-3 bg-white border border-slate-200 rounded-3xl p-5 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 px-1">
            <Filter className="h-3.5 w-3.5" />
            <span>Filter by Target Flavor Profile</span>
          </h3>
          <span className="text-[10px] text-slate-400 font-semibold italic">
            Narrow down methods based on your favorite sensory cup style.
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleStyleFilterChange("all")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
              styleFilter === "all"
                ? "bg-blue-600 border-blue-600 text-white shadow-sm"
                : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
            }`}
          >
            All Methods ({coffeeProcessingMethods.length})
          </button>
          <button
            onClick={() => handleStyleFilterChange("clean")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 ${
              styleFilter === "clean"
                ? "bg-blue-600 border-blue-600 text-white shadow-sm"
                : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
            }`}
          >
            <Compass className="h-3.5 w-3.5 text-cyan-500" />
            <span>Clean & Acidic</span>
          </button>
          <button
            onClick={() => handleStyleFilterChange("sweet")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 ${
              styleFilter === "sweet"
                ? "bg-blue-600 border-blue-600 text-white shadow-sm"
                : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
            }`}
          >
            <Heart className="h-3.5 w-3.5 text-rose-500" />
            <span>Sweet & Fruity</span>
          </button>
          <button
            onClick={() => handleStyleFilterChange("earthy")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 ${
              styleFilter === "earthy"
                ? "bg-blue-600 border-blue-600 text-white shadow-sm"
                : "bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100"
            }`}
          >
            <Coffee className="h-3.5 w-3.5 text-amber-700" />
            <span>Heavy & Earthy</span>
          </button>
        </div>
      </div>

      {/* Tabs Selector Navigation */}
      <div className="space-y-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 px-1">
          <SlidersHorizontal className="h-3.5 w-3.5" />
          <span>Processing Methods ({filteredMethods.length} shown)</span>
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-2">
          {filteredMethods.map((method) => {
            const isActive = method.id === activeMethodId;
            const badge = getFlavorBadge(method.id);
            return (
              <button
                key={method.id}
                onClick={() => {
                  setActiveMethodId(method.id);
                  setActiveStepIndex(0);
                }}
                className={`flex flex-col text-left p-3.5 rounded-2xl border transition-all duration-300 hover:shadow-sm ${
                  isActive
                    ? "border-blue-600 bg-white shadow-[0_4px_20px_rgba(37,99,235,0.06)] ring-2 ring-blue-500/15"
                    : "border-slate-200 bg-white/60 hover:bg-white hover:border-slate-300"
                }`}
              >
                <span className={`text-xs font-bold tracking-tight ${isActive ? "text-blue-600" : "text-slate-800"}`}>
                  {method.name}
                </span>
                <span className={`inline-block border px-1.5 py-0.5 rounded text-[8px] font-bold mt-1.5 uppercase tracking-wide self-start ${badge.color}`}>
                  {badge.text}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Focus Detail Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Hand: Overview & Flavor Profile */}
        <div className="lg:col-span-7 space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-6">
            {/* Custom Generated Illustration Backdrop */}
            {activeMethod.imageUrl && (
              <div className="w-full h-56 sm:h-64 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 relative flex items-center justify-center">
                {/* Blurred backdrop aspect filler */}
                <img
                  src={activeMethod.imageUrl}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover blur-md opacity-20 scale-105 pointer-events-none"
                  aria-hidden="true"
                />
                {/* Crisp foreground illustration */}
                <img
                  src={activeMethod.imageUrl}
                  alt={`${activeMethod.name} illustration`}
                  className="relative z-10 max-h-[calc(100%-1.5rem)] max-w-[calc(100%-1.5rem)] object-contain rounded-xl shadow-sm transition-transform duration-500 hover:scale-[1.01]"
                  loading="eager"
                />
              </div>
            )}

            {/* Header info */}
            <div className="space-y-2 pb-4 border-b border-slate-100">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">{activeMethod.name}</h3>
                {activeMethod.alternativeNames && activeMethod.alternativeNames.length > 0 && (
                  <span className="text-xs text-slate-400 italic font-medium">
                    Also known as: {activeMethod.alternativeNames.join(", ")}
                  </span>
                )}
              </div>
              <p className="text-sm font-semibold text-slate-600 leading-relaxed mt-2">
                {activeMethod.summary}
              </p>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Process Science & Mechanism</h4>
              <p className="text-sm text-slate-700 leading-relaxed font-medium">
                {activeMethod.description}
              </p>
            </div>

            {/* Flavor Profile Callout */}
            <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100/60 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-blue-700 flex items-center gap-1.5">
                <Sparkles className="h-3.5 w-3.5" />
                <span>Sensory Influence</span>
              </h4>
              <p className="text-xs font-semibold text-slate-600 leading-relaxed">
                {activeMethod.flavorProfile.description}
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {activeMethod.flavorProfile.descriptors.map((note) => (
                  <span
                    key={note}
                    className="inline-flex items-center rounded-full bg-white border border-blue-200/60 px-3 py-1 text-xs text-blue-900/80 font-bold shadow-sm"
                  >
                    {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Pros and Cons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              {/* Pros */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-600 flex items-center gap-1.5">
                  <CheckCircle className="h-3.5 w-3.5" />
                  <span>Advantages</span>
                </h4>
                <ul className="space-y-2">
                  {activeMethod.pros.map((pro, index) => (
                    <li key={index} className="flex items-start gap-2 text-xs font-medium text-slate-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0"></span>
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cons */}
              <div className="space-y-2.5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-rose-600 flex items-center gap-1.5">
                  <XCircle className="h-3.5 w-3.5" />
                  <span>Trade-offs & Challenges</span>
                </h4>
                <ul className="space-y-2">
                  {activeMethod.cons.map((con, index) => (
                    <li key={index} className="flex items-start gap-2 text-xs font-medium text-slate-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-rose-400 mt-1.5 flex-shrink-0"></span>
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right Hand: Comparative Metrics & Processing Specs */}
        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5 pb-2 border-b border-slate-100">
              <Info className="h-3.5 w-3.5" />
              <span>Comparative Metrics</span>
            </h3>

            {/* Flavor Clarity */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                <span className="flex items-center gap-1">
                  <Compass className="h-4 w-4 text-blue-500" /> Flavor Clarity
                </span>
                <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Clean Acid Precision</span>
              </div>
              {renderMetricStars(activeMethod.metrics.flavorClarity, "bg-blue-600")}
            </div>

            {/* Body */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                <span className="flex items-center gap-1">
                  <Coffee className="h-4 w-4 text-amber-700" /> Body / Mouthfeel
                </span>
                <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Syrupy density</span>
              </div>
              {renderMetricStars(activeMethod.metrics.body, "bg-amber-700")}
            </div>

            {/* Sweetness */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                <span className="flex items-center gap-1">
                  <Heart className="h-4 w-4 text-rose-500" /> Sweetness
                </span>
                <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Fruity Sugars</span>
              </div>
              {renderMetricStars(activeMethod.metrics.sweetness, "bg-rose-500")}
            </div>

            {/* Water Consumption */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                <span className="flex items-center gap-1">
                  <Droplets className="h-4 w-4 text-cyan-500" /> Water Consumption
                </span>
                <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Ecological impact</span>
              </div>
              {renderMetricStars(activeMethod.metrics.waterUsage, "bg-cyan-500")}
            </div>

            {/* Process Difficulty */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                <span className="flex items-center gap-1">
                  <Wrench className="h-4 w-4 text-slate-500" /> Process Difficulty
                </span>
                <span className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Risk of failure</span>
              </div>
              {renderMetricStars(activeMethod.metrics.difficulty, "bg-slate-700")}
            </div>

            {/* Drying Duration Callout */}
            <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
              <span className="flex items-center gap-1.5">
                <Sun className="h-4 w-4 text-orange-500" /> Typical Drying Duration:
              </span>
              <span className="bg-orange-50 border border-orange-200 text-orange-700 px-3 py-1 rounded-xl text-xs">
                {activeMethod.metrics.dryingDuration}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Processing Timeline */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-6">
        <div className="flex items-center justify-between border-b border-slate-100 pb-4">
          <h3 className="text-lg font-black text-slate-900 tracking-tight flex items-center gap-2">
            <Workflow className="h-5 w-5 text-blue-600" />
            <span>Interactive Processing Steps</span>
          </h3>
          <span className="text-xs bg-slate-100 border border-slate-200 text-slate-500 px-3 py-1 rounded-full font-bold">
            {activeMethod.steps.length} Steps
          </span>
        </div>

        {/* Stepper Horizontal Header */}
        <div className="flex overflow-x-auto pb-4 gap-2 scrollbar-thin scrollbar-thumb-slate-200 select-none">
          {activeMethod.steps.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveStepIndex(idx)}
                className={`flex-shrink-0 flex items-center gap-2.5 px-4 py-3 rounded-2xl border transition-all duration-300 ${
                  isActive
                    ? "bg-blue-600 border-blue-600 text-white shadow-sm"
                    : "bg-slate-50 border-slate-200 hover:bg-slate-100/80 text-slate-700"
                }`}
              >
                <span className={`flex items-center justify-center h-7 w-7 rounded-full text-xs font-black border transition-all duration-300 ${
                  isActive ? "bg-white text-blue-600 border-white" : "bg-slate-200 text-slate-600 border-slate-300"
                }`}>
                  {getStepIcon(step.name)}
                </span>
                <div className="text-left">
                  <p className="text-xs font-bold tracking-tight whitespace-nowrap">{step.name}</p>
                  {step.duration && (
                    <p className={`text-[9px] font-semibold flex items-center gap-0.5 mt-0.5 ${isActive ? "text-blue-200" : "text-slate-400"}`}>
                      <Clock className="h-2.5 w-2.5" /> {step.duration}
                    </p>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Display Current Active Step Detail */}
        <div className="bg-slate-50 border border-slate-200/60 rounded-2xl p-5 md:p-6 relative overflow-hidden transition-all duration-500 animate-in fade-in slide-in-from-bottom-2">
          <div className="absolute top-0 right-0 h-32 w-32 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500/5 to-transparent pointer-events-none rounded-bl-full"></div>
          
          <div className="space-y-3 relative z-10">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                {getStepIcon(activeMethod.steps[activeStepIndex].name)}
                <span>Step {activeStepIndex + 1} of {activeMethod.steps.length}</span>
              </span>
              {activeMethod.steps[activeStepIndex].duration && (
                <span className="text-xs text-slate-500 font-bold flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5 text-slate-400" />
                  {activeMethod.steps[activeStepIndex].duration}
                </span>
              )}
            </div>
            
            <h4 className="text-lg font-black text-slate-900">{activeMethod.steps[activeStepIndex].name}</h4>
            <p className="text-sm text-slate-600 leading-relaxed font-semibold">
              {activeMethod.steps[activeStepIndex].description}
            </p>

            {/* Stepper Navigation buttons */}
            <div className="flex items-center gap-2 pt-4 border-t border-slate-200/50 mt-4">
              <button
                type="button"
                disabled={activeStepIndex === 0}
                onClick={() => setActiveStepIndex((prev) => prev - 1)}
                className="px-3.5 py-1.5 text-xs font-bold bg-white border border-slate-200 hover:bg-slate-50 rounded-xl disabled:opacity-40 disabled:hover:bg-white transition-all text-slate-700 shadow-sm"
              >
                Previous Step
              </button>
              <button
                type="button"
                disabled={activeStepIndex === activeMethod.steps.length - 1}
                onClick={() => setActiveStepIndex((prev) => prev + 1)}
                className="px-3.5 py-1.5 text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-xl disabled:opacity-40 disabled:hover:bg-blue-600 transition-all shadow-sm"
              >
                Next Step
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Processing Matrix */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm space-y-6 overflow-hidden">
        <div className="border-b border-slate-100 pb-4">
          <h3 className="text-lg font-black text-slate-900 tracking-tight flex items-center gap-2">
            <Table className="h-5 w-5 text-blue-600" />
            <span>Process Comparison Matrix</span>
          </h3>
          <p className="text-xs font-semibold text-slate-500 mt-1">
            Sort and compare coffee processes by their characteristics and sensory impact. Click headers to sort.
          </p>
        </div>

        <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-slate-200">
          <table className="min-w-full text-left border-collapse text-xs font-semibold">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/70 text-slate-400 uppercase tracking-wider text-[10px]">
                <th
                  onClick={() => handleSortMatrix("name")}
                  className="px-4 py-3.5 cursor-pointer hover:bg-slate-100 hover:text-slate-700 select-none transition-colors rounded-tl-xl"
                >
                  Method {matrixSortKey === "name" && (matrixSortOrder === "asc" ? "▲" : "▼")}
                </th>
                <th
                  onClick={() => handleSortMatrix("flavorClarity")}
                  className="px-4 py-3.5 cursor-pointer hover:bg-slate-100 hover:text-slate-700 select-none transition-colors"
                >
                  Clarity {matrixSortKey === "flavorClarity" && (matrixSortOrder === "asc" ? "▲" : "▼")}
                </th>
                <th
                  onClick={() => handleSortMatrix("body")}
                  className="px-4 py-3.5 cursor-pointer hover:bg-slate-100 hover:text-slate-700 select-none transition-colors"
                >
                  Body {matrixSortKey === "body" && (matrixSortOrder === "asc" ? "▲" : "▼")}
                </th>
                <th
                  onClick={() => handleSortMatrix("sweetness")}
                  className="px-4 py-3.5 cursor-pointer hover:bg-slate-100 hover:text-slate-700 select-none transition-colors"
                >
                  Sweetness {matrixSortKey === "sweetness" && (matrixSortOrder === "asc" ? "▲" : "▼")}
                </th>
                <th
                  onClick={() => handleSortMatrix("waterUsage")}
                  className="px-4 py-3.5 cursor-pointer hover:bg-slate-100 hover:text-slate-700 select-none transition-colors"
                >
                  Water {matrixSortKey === "waterUsage" && (matrixSortOrder === "asc" ? "▲" : "▼")}
                </th>
                <th
                  onClick={() => handleSortMatrix("difficulty")}
                  className="px-4 py-3.5 cursor-pointer hover:bg-slate-100 hover:text-slate-700 select-none transition-colors"
                >
                  Difficulty {matrixSortKey === "difficulty" && (matrixSortOrder === "asc" ? "▲" : "▼")}
                </th>
                <th className="px-4 py-3.5 cursor-default select-none rounded-tr-xl">
                  Sensory Descriptors
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {sortedMethods.map((method) => {
                const isSelected = method.id === activeMethodId;
                return (
                  <tr
                    key={method.id}
                    onClick={() => setActiveMethodId(method.id)}
                    className={`hover:bg-slate-50/80 cursor-pointer transition-colors ${
                      isSelected ? "bg-blue-50/30" : ""
                    }`}
                  >
                    <td className="px-4 py-3 font-black text-slate-900">
                      <div className="flex flex-col">
                        <span>{method.name}</span>
                        {method.alternativeNames && method.alternativeNames.length > 0 && (
                          <span className="text-[10px] text-slate-400 italic font-medium mt-0.5">
                            {method.alternativeNames[0]}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className="font-bold text-blue-600">{method.metrics.flavorClarity}/5</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="font-bold text-amber-700">{method.metrics.body}/5</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="font-bold text-rose-500">{method.metrics.sweetness}/5</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="font-bold text-cyan-600">{method.metrics.waterUsage}/5</span>
                    </td>
                    <td className="px-4 py-3">
                      <span className="font-bold text-slate-600">{method.metrics.difficulty}/5</span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex flex-wrap gap-1">
                        {method.flavorProfile.descriptors.slice(0, 4).map((desc) => (
                          <span
                            key={desc}
                            className="bg-slate-100 text-slate-600 border border-slate-200 px-2 py-0.5 rounded-md text-[10px] font-bold"
                          >
                            {desc}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
