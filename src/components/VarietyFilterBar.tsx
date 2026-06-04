import { Search, RotateCcw } from "lucide-react";
import { VarietyFilters } from "@/utils/varietyUtils";

interface VarietyFilterBarProps {
  filters: VarietyFilters;
  setFilters: (updateFn: (prev: VarietyFilters) => VarietyFilters) => void;
  onReset: () => void;
}

export default function VarietyFilterBar({
  filters,
  setFilters,
  onReset,
}: VarietyFilterBarProps) {
  const handleSearchChange = (val: string) => {
    setFilters((prev) => ({ ...prev, search: val }));
  };

  const handleSpeciesChange = (val: string) => {
    setFilters((prev) => ({ ...prev, species: val }));
  };

  const handleLineageChange = (val: string) => {
    setFilters((prev) => ({ ...prev, lineage: val }));
  };

  const handleTraitChange = (val: string) => {
    setFilters((prev) => ({ ...prev, trait: val }));
  };

  return (
    <div className="flex flex-col gap-3 rounded-2xl bg-white/95 backdrop-blur border border-slate-200 p-4 shadow-sm lg:flex-row lg:items-center">
      {/* Search Input */}
      <div className="relative flex-1">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <Search className="h-4 w-4 text-slate-400" />
        </div>
        <input
          type="text"
          className="block w-full rounded-xl bg-slate-50 border border-slate-200 py-2.5 pl-10 pr-3 text-sm text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white sm:text-sm transition-all shadow-sm"
          placeholder="Search varieties, lineage, countries, or flavor notes..."
          value={filters.search}
          onChange={(e) => handleSearchChange(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center">
        {/* Species Filter */}
        <select
          value={filters.species}
          onChange={(e) => handleSpeciesChange(e.target.value)}
          className="block w-full sm:w-44 rounded-xl bg-slate-50 border border-slate-200 py-2.5 pl-3 pr-8 text-xs font-semibold text-slate-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
        >
          <option value="All Species">All Species</option>
          <option value="Arabica">Arabica</option>
          <option value="Robusta">Robusta</option>
        </select>

        {/* Lineage Filter */}
        <select
          value={filters.lineage}
          onChange={(e) => handleLineageChange(e.target.value)}
          className="block w-full sm:w-44 rounded-xl bg-slate-50 border border-slate-200 py-2.5 pl-3 pr-8 text-xs font-semibold text-slate-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
        >
          <option value="All Lineages">All Lineages</option>
          <option value="Ethiopian Landrace">Ethiopian Landrace</option>
          <option value="Typica">Typica</option>
          <option value="Bourbon">Bourbon</option>
          <option value="Bourbon-Typica">Bourbon-Typica</option>
          <option value="Catimor">Catimor</option>
          <option value="Sarchimor">Sarchimor</option>
          <option value="Introgressed">Introgressed</option>
          <option value="F1 Hybrid">F1 Hybrid</option>
          <option value="Robusta">Robusta</option>
          <option value="Unknown">Unknown</option>
        </select>

        {/* Trait Filter */}
        <select
          value={filters.trait}
          onChange={(e) => handleTraitChange(e.target.value)}
          className="block w-full sm:w-48 rounded-xl bg-slate-50 border border-slate-200 py-2.5 pl-3 pr-8 text-xs font-semibold text-slate-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all shadow-sm"
        >
          <option value="All Traits">All Traits</option>
          <option value="High Quality Potential">High Quality Potential</option>
          <option value="High Yield Potential">High Yield Potential</option>
          <option value="Leaf Rust Resistant">Leaf Rust Resistant</option>
          <option value="Compact Plant">Compact Plant</option>
          <option value="High Altitude Suitable">High Altitude Suitable</option>
        </select>

        {/* Reset Button */}
        <button
          onClick={onReset}
          className="col-span-2 sm:col-span-1 flex items-center justify-center gap-2 rounded-xl bg-slate-100 px-4 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-200 active:scale-98 transition-all border border-slate-250 shadow-sm"
          title="Reset Filters"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          <span>Reset Filters</span>
        </button>
      </div>
    </div>
  );
}
