import { CoffeeCountry } from "@/types/coffee";

interface CountryTooltipProps {
  country: CoffeeCountry;
  x: number;
  y: number;
}

export default function CountryTooltip({ country, x, y }: CountryTooltipProps) {
  return (
    <div
      className="pointer-events-none absolute z-50 w-64 rounded-xl bg-white/95 backdrop-blur-md p-4 shadow-xl ring-1 ring-slate-200"
      style={{
        left: x,
        top: y,
        transform: "translate(-50%, -120%)",
      }}
    >
      <div className="mb-3 border-b border-slate-100 pb-3">
        <h3 className="text-lg font-bold text-slate-900">{country.country}</h3>
        <p className="text-xs text-slate-500 uppercase tracking-wider">{country.regionGroup}</p>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex flex-col">
          <span className="font-semibold text-slate-400 text-xs uppercase mb-0.5">Species</span>
          <span className="text-blue-600 font-medium">{country.coffeeSpecies.join(", ")}</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-slate-400 text-xs uppercase mb-0.5">Key Origins</span>
          <span className="text-slate-700">
            {country.mainOrigins.slice(0, 3).join(", ")}
            {country.mainOrigins.length > 3 && " ..."}
          </span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-slate-400 text-xs uppercase mb-0.5">Processing</span>
          <span className="text-slate-700">{country.processingMethods.join(", ")}</span>
        </div>
        <div className="flex flex-col">
          <span className="font-semibold text-slate-400 text-xs uppercase mb-0.5">Flavor Notes</span>
          <span className="text-slate-700">
            {country.flavorNotes.slice(0, 4).join(", ")}
            {country.flavorNotes.length > 4 && " ..."}
          </span>
        </div>
      </div>
    </div>
  );
}
