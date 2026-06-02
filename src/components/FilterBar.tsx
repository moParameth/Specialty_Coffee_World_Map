import { Search, RotateCcw } from "lucide-react";

interface FilterBarProps {
  search: string;
  setSearch: (val: string) => void;
  region: string;
  setRegion: (val: string) => void;
  species: string;
  setSpecies: (val: string) => void;
  processing: string;
  setProcessing: (val: string) => void;
  onReset: () => void;
}

export default function FilterBar({
  search,
  setSearch,
  region,
  setRegion,
  species,
  setSpecies,
  processing,
  setProcessing,
  onReset,
}: FilterBarProps) {
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-white/90 backdrop-blur-md p-4 border border-slate-200 shadow-sm md:flex-row md:items-center">
      <div className="relative flex-1">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          <Search className="h-4 w-4 text-slate-400" />
        </div>
        <input
          type="text"
          className="block w-full rounded-lg bg-slate-50 border border-slate-200 py-2.5 pl-10 pr-3 text-slate-900 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm sm:leading-6 transition-all shadow-sm"
          placeholder="Search origins..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex flex-1 gap-4 md:flex-none">
        <select
          value={region}
          onChange={(e) => setRegion(e.target.value)}
          className="block w-full rounded-lg bg-slate-50 border border-slate-200 py-2.5 pl-3 pr-10 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm sm:leading-6 transition-all shadow-sm"
        >
          <option value="">All Regions</option>
          <option value="Africa">Africa</option>
          <option value="Latin America">Latin America</option>
          <option value="Asia-Pacific">Asia-Pacific</option>
        </select>

        <select
          value={species}
          onChange={(e) => setSpecies(e.target.value)}
          className="block w-full rounded-lg bg-slate-50 border border-slate-200 py-2.5 pl-3 pr-10 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm sm:leading-6 transition-all shadow-sm"
        >
          <option value="">All Species</option>
          <option value="Arabica">Arabica</option>
          <option value="Robusta">Robusta</option>
        </select>

        <select
          value={processing}
          onChange={(e) => setProcessing(e.target.value)}
          className="block w-full rounded-lg bg-slate-50 border border-slate-200 py-2.5 pl-3 pr-10 text-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent sm:text-sm sm:leading-6 transition-all shadow-sm"
        >
          <option value="">All Processing</option>
          <option value="Washed">Washed</option>
          <option value="Natural">Natural</option>
          <option value="Honey">Honey</option>
          <option value="Wet-hulled">Wet-hulled</option>
          <option value="Anaerobic">Anaerobic</option>
          <option value="Pulped natural">Pulped natural</option>
        </select>

        <button
          onClick={onReset}
          className="flex items-center justify-center gap-2 rounded-lg bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-200 hover:text-slate-900 transition-all border border-slate-200 shadow-sm"
          title="Reset Filters"
        >
          <RotateCcw className="h-4 w-4" />
          <span className="sr-only md:not-sr-only md:block">Reset</span>
        </button>
      </div>
    </div>
  );
}
