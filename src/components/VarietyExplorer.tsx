"use client";

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { coffeeVarieties } from "@/data/coffeeVarieties";
import { CoffeeVariety } from "@/types/variety";
import { filterVarieties, getVarietyById, VarietyFilters } from "@/utils/varietyUtils";
import VarietyFilterBar from "./VarietyFilterBar";
import VarietyCard from "./VarietyCard";
import VarietyDetailPanel from "./VarietyDetailPanel";
import VarietyCompare from "./VarietyCompare";
import VarietyTreeGraph from "./VarietyTreeGraph";
import { AlertCircle, SlidersHorizontal, LayoutGrid, Network } from "lucide-react";

export default function VarietyExplorer() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedParam = searchParams.get("selected");

  // Filter States
  const [filters, setFilters] = useState<VarietyFilters>({
    search: "",
    species: "All Species",
    lineage: "All Lineages",
    trait: "All Traits",
  });

  // View Mode: Grid cards vs Genealogy Lineage Tree
  const [viewMode, setViewMode] = useState<"grid" | "tree">("grid");

  // Selected Variety for details
  const [selectedVariety, setSelectedVariety] = useState<CoffeeVariety | null>(null);

  // Comparison State
  const [comparingIds, setComparingIds] = useState<string[]>([]);
  const [compareError, setCompareError] = useState<string | null>(null);

  // Sync selected variety with URL search params
  useEffect(() => {
    if (selectedParam) {
      const matched = getVarietyById(selectedParam, coffeeVarieties);
      if (matched) {
        setSelectedVariety(matched);
        return;
      }
    }
    setSelectedVariety(null);
  }, [selectedParam]);

  // Handle selected variety change
  const handleSelectVariety = (id: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("selected", id);
    router.push(`/varieties?${params.toString()}`);
  };

  // Filter varieties
  const filteredVarieties = filterVarieties(coffeeVarieties, filters);

  // Add/remove from comparison
  const handleToggleCompare = (id: string) => {
    setCompareError(null);
    if (comparingIds.includes(id)) {
      setComparingIds((prev) => prev.filter((item) => item !== id));
    } else {
      if (comparingIds.length >= 3) {
        setCompareError("You can compare up to 3 varieties.");
        // Clear error after 4 seconds
        setTimeout(() => {
          setCompareError(null);
        }, 4000);
      } else {
        setComparingIds((prev) => [...prev, id]);
      }
    }
  };

  const handleRemoveCompare = (id: string) => {
    setComparingIds((prev) => prev.filter((item) => item !== id));
  };

  const handleClearCompare = () => {
    setComparingIds([]);
    setCompareError(null);
  };

  const handleResetFilters = () => {
    setFilters({
      search: "",
      species: "All Species",
      lineage: "All Lineages",
      trait: "All Traits",
    });
  };

  const comparedVarieties = coffeeVarieties.filter((v) => comparingIds.includes(v.id));

  return (
    <div className="space-y-6">
      {/* Filters Header Section */}
      <VarietyFilterBar
        filters={filters}
        setFilters={setFilters}
        onReset={handleResetFilters}
      />

      {/* Compare Limit Error Alert */}
      {compareError && (
        <div className="flex items-center gap-2 rounded-xl bg-rose-50 border border-rose-200 p-4 text-sm text-rose-800 animate-in fade-in slide-in-from-top-2 duration-300">
          <AlertCircle className="h-4 w-4 flex-shrink-0" />
          <span className="font-bold">{compareError}</span>
        </div>
      )}

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
        {/* Left Side: Varieties Grid */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-1">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <SlidersHorizontal className="h-3.5 w-3.5" />
              <span>Results ({filteredVarieties.length} varieties)</span>
            </h3>
            
            {/* View Mode Tabs */}
            <div className="flex items-center bg-slate-100 p-0.5 rounded-xl border border-slate-200 self-start sm:self-auto">
              <button
                type="button"
                onClick={() => setViewMode("grid")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  viewMode === "grid"
                    ? "bg-white text-blue-600 shadow-sm border border-slate-200/50"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                <LayoutGrid className="h-3.5 w-3.5" />
                <span>Grid View</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("tree")}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  viewMode === "tree"
                    ? "bg-white text-blue-600 shadow-sm border border-slate-200/50"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                <Network className="h-3.5 w-3.5" />
                <span>Lineage Tree</span>
              </button>
            </div>
          </div>

          {viewMode === "tree" ? (
            <VarietyTreeGraph
              selectedVariety={selectedVariety}
              allVarieties={coffeeVarieties}
              onSelectVariety={handleSelectVariety}
              searchFilter={filters.search}
            />
          ) : filteredVarieties.length === 0 ? (
            <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center shadow-sm">
              <p className="text-sm font-bold text-slate-500">No varieties match your filters.</p>
              <button
                onClick={handleResetFilters}
                className="mt-4 inline-flex items-center rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-xs font-bold text-slate-700 px-4 py-2 transition-all shadow-sm"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredVarieties.map((variety) => (
                <VarietyCard
                  key={variety.id}
                  variety={variety}
                  isActive={selectedVariety?.id === variety.id}
                  onViewDetails={() => handleSelectVariety(variety.id)}
                  isComparing={comparingIds.includes(variety.id)}
                  onToggleCompare={() => handleToggleCompare(variety.id)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Right Side: Details Sticky Panel */}
        <div className="lg:col-span-1 lg:sticky lg:top-24">
          <VarietyDetailPanel
            variety={selectedVariety}
            allVarieties={coffeeVarieties}
            onSelectVariety={handleSelectVariety}
          />
        </div>
      </div>

      {/* Bottom Side: Compare Section */}
      <div className="w-full pt-4 border-t border-slate-200/60">
        <VarietyCompare
          selectedVarieties={comparedVarieties}
          onRemove={handleRemoveCompare}
          onClear={handleClearCompare}
        />
      </div>
    </div>
  );
}
