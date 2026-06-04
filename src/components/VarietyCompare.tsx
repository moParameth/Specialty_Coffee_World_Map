import { CoffeeVariety } from "@/types/variety";
import { getTraitColor } from "@/utils/varietyUtils";
import { Trash2, Scale } from "lucide-react";

interface VarietyCompareProps {
  selectedVarieties: CoffeeVariety[];
  onRemove: (id: string) => void;
  onClear: () => void;
}

export default function VarietyCompare({
  selectedVarieties,
  onRemove,
  onClear,
}: VarietyCompareProps) {
  if (selectedVarieties.length < 2) {
    return (
      <div className="rounded-2xl border border-amber-900/10 bg-amber-50/10 p-8 text-center border-dashed">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-50 text-amber-800 border border-amber-200">
          <Scale className="h-6 w-6" />
        </div>
        <h3 className="mt-4 text-sm font-bold text-slate-800 uppercase tracking-wider">Comparison Matrix</h3>
        <p className="mt-1 text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
          Select at least 2 varieties to compare. Click the &quot;Compare&quot; button on variety cards to add them here (up to 3).
        </p>
      </div>
    );
  }

  const attributes = [
    { label: "Species", key: "species" },
    { label: "Lineage", key: "lineage" },
    { label: "Genetic Parentage", key: "parentage" },
    { label: "Yield Potential", key: "yieldPotential", isTrait: true },
    { label: "Quality Potential", key: "qualityPotential", isTrait: true },
    { label: "Optimal Altitude", key: "optimalAltitude" },
    { label: "Leaf Rust Resistance", key: "leafRustResistance", isTrait: true },
    { label: "CBD Resistance", key: "coffeeBerryDiseaseResistance", isTrait: true },
    { label: "Nematode Resistance", key: "nematodeResistance", isTrait: true },
    { label: "Flavor Notes", key: "flavorNotes", isArray: true },
    { label: "Common Countries", key: "commonCountries", isArray: true },
  ];

  return (
    <div className="rounded-2xl border border-amber-900/10 bg-white p-6 shadow-sm overflow-hidden flex flex-col">
      {/* Header Info */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
        <div>
          <h3 className="text-lg font-black text-slate-850 tracking-tight flex items-center gap-2">
            <Scale className="h-5 w-5 text-amber-850" />
            <span>Variety Comparison</span>
          </h3>
          <p className="text-xs text-slate-500">
            Comparing {selectedVarieties.length} of 3 selected coffee varieties
          </p>
        </div>
        <button
          onClick={onClear}
          className="rounded-xl border border-amber-200 bg-amber-50 hover:bg-amber-100 active:scale-98 text-xs font-bold text-amber-955 px-3 py-2 transition-all"
        >
          Clear Comparison
        </button>
      </div>

      {/* Comparison Table */}
      <div className="overflow-x-auto custom-scrollbar">
        <table className="w-full min-w-[600px] text-left border-collapse table-fixed">
          <thead>
            <tr className="border-b border-slate-100">
              <th className="w-1/4 py-3 text-xs font-bold text-slate-400 uppercase tracking-widest">
                Attribute
              </th>
              {selectedVarieties.map((v) => (
                <th key={v.id} className="w-1/4 py-3 px-4">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-sm font-black text-slate-800 tracking-tight">{v.name}</h4>
                      <span className="inline-block mt-1 rounded bg-slate-100 px-2 py-0.5 text-[9px] font-bold text-slate-600 uppercase tracking-wider">
                        {v.species}
                      </span>
                    </div>
                    <button
                      onClick={() => onRemove(v.id)}
                      className="rounded-lg p-1.5 text-slate-400 hover:bg-rose-50 hover:text-rose-600 transition-colors"
                      title={`Remove ${v.name} from comparison`}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {attributes.map((attr) => (
              <tr key={attr.label} className="hover:bg-slate-50/50 transition-colors">
                <td className="py-3.5 text-xs font-bold text-slate-500 uppercase tracking-wider pr-2">
                  {attr.label}
                </td>
                {selectedVarieties.map((v) => {
                  const val = v[attr.key as keyof CoffeeVariety];

                  // Array display
                  if (attr.isArray && Array.isArray(val)) {
                    const items = val as string[];
                    return (
                      <td key={v.id} className="py-3.5 px-4 text-xs font-medium text-slate-800">
                        <div className="flex flex-wrap gap-1">
                          {items.map((item: string) => (
                            <span
                              key={item}
                              className="inline-flex rounded bg-slate-100 border border-slate-200 px-2 py-0.5 font-semibold text-slate-650"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </td>
                    );
                  }

                  // Trait Level badge
                  if (attr.isTrait) {
                    const colors = getTraitColor(val as any);
                    return (
                      <td key={v.id} className="py-3.5 px-4 text-xs">
                        <span
                          className={`inline-flex rounded border px-2 py-0.5 font-bold ${colors.bg} ${colors.text} ${colors.border}`}
                        >
                          {val as string}
                        </span>
                      </td>
                    );
                  }

                  // Standard text display
                  return (
                    <td key={v.id} className="py-3.5 px-4 text-xs font-medium text-slate-700 leading-relaxed">
                      {val as string || "Unknown"}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
