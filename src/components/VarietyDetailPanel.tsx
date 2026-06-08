import { useState, useEffect } from "react";
import { CoffeeVariety } from "@/types/variety";
import { coffeeCountries } from "@/data/coffeeCountries";
import { getTraitColor } from "@/utils/varietyUtils";
import { getFlavorEmoji } from "@/utils/countryUtils";
import { Info, Leaf, Award, ExternalLink, HelpCircle, GitBranch, ArrowUp, Coffee, X } from "lucide-react";
import Link from "next/link";

interface VarietyDetailPanelProps {
  variety: CoffeeVariety | null;
  allVarieties: CoffeeVariety[];
  onSelectVariety: (id: string) => void;
  onClose?: () => void;
}

export default function VarietyDetailPanel({
  variety,
  allVarieties,
  onSelectVariety,
  onClose,
}: VarietyDetailPanelProps) {
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageError(false);
  }, [variety?.id]);

  if (!variety) {
    return (
      <div className="flex h-full flex-col items-center justify-center p-8 text-center bg-white rounded-2xl border border-slate-200 shadow-sm min-h-[400px]">
        <div className="mb-5 max-w-xs overflow-hidden rounded-xl border border-slate-200 shadow-sm bg-slate-50">
          <img 
            src="/coffee_beans.png" 
            alt="Coffee bean varieties" 
            className="w-full h-auto object-cover hover:scale-102 transition-all duration-300"
          />
        </div>
        <div className="mb-4 rounded-full bg-blue-50 p-4 text-blue-600 shadow-sm border border-blue-200/50">
          <Info className="h-7 w-7 animate-pulse" />
        </div>
        <p className="text-sm font-bold text-slate-800 uppercase tracking-wider">Select a variety</p>
        <p className="text-xs text-slate-500 max-w-xs mt-1">
          Select a coffee variety to view its details.
        </p>
      </div>
    );
  }

  // Helper to map country name to ISO3
  const getCountryIso3 = (name: string): string | null => {
    const matched = coffeeCountries.find(
      (c) => c.country.toLowerCase() === name.toLowerCase()
    );
    return matched ? matched.iso3 : null;
  };

  // Helper to find related variety name/ID
  const getRelatedVarietyInfo = (id: string): { id: string; name: string } | null => {
    const found = allVarieties.find((v) => v.id === id);
    return found ? { id: found.id, name: found.name } : null;
  };

  const traits = [
    { label: "Plant Stature", value: variety.plantStature || "Unknown", icon: Leaf },
    { label: "Bean Size", value: variety.beanSize || "Unknown", isLevel: true },
    { label: "Yield Potential", value: variety.yieldPotential || "Unknown", isLevel: true },
    { label: "Quality Potential", value: variety.qualityPotential || "Unknown", isLevel: true, icon: Award },
    { label: "Optimal Altitude", value: variety.optimalAltitude || "Unknown", icon: ArrowUp },
    { label: "Leaf Rust Resistance", value: variety.leafRustResistance || "Unknown", isLevel: true },
    { label: "Coffee Berry Disease", value: variety.coffeeBerryDiseaseResistance || "Unknown", isLevel: true },
    { label: "Nematode Resistance", value: variety.nematodeResistance || "Unknown", isLevel: true },
    { label: "Nutrition Requirement", value: variety.nutritionRequirement || "Unknown", isLevel: true },
  ];

  return (
    <div className="flex h-full flex-col bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
      {/* Image Banner */}
      <div className="w-full h-44 overflow-hidden bg-slate-50 border-b border-slate-100 relative flex items-center justify-center">
        {variety.imageUrl && !imageError ? (
          <img
            src={variety.imageUrl}
            alt={variety.name}
            onError={() => setImageError(true)}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-600 to-slate-800 flex flex-col items-center justify-center text-white/90 gap-1.5 select-none">
            <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <Coffee className="h-8 w-8 text-blue-200" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Coffee Variety Profile</span>
          </div>
        )}
      </div>

      {/* Detail Header */}
      <div className="border-b border-slate-100 p-6 bg-slate-50/50 flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span
              className={`inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider ${
                variety.species === "Arabica"
                  ? "bg-blue-50 border-blue-200 text-blue-700"
                  : "bg-slate-100 border-slate-300 text-slate-700"
              }`}
            >
              {variety.species}
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded uppercase tracking-wider border border-slate-200">
              <GitBranch className="h-3 w-3" />
              {variety.lineage}
            </span>
          </div>
          <h2 className="text-2xl font-black text-slate-900 tracking-tight mb-1 truncate">{variety.name}</h2>
          {variety.alternativeNames && variety.alternativeNames.length > 0 && (
            <p className="text-xs text-slate-500 font-semibold italic">
              Also known as: {variety.alternativeNames.join(", ")}
            </p>
          )}
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="rounded-full p-2 text-slate-400 hover:bg-slate-200 hover:text-slate-900 transition-colors flex-shrink-0"
            aria-label="Close panel"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Detail Contents */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6 max-h-[80vh] custom-scrollbar">
        {/* Summary */}
        <section>
          <h3 className="mb-2 text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-slate-200 pb-1.5">
            Variety Details
          </h3>
          <p className="text-slate-700 leading-relaxed text-sm">{variety.summary}</p>
        </section>

        {/* Technical Origins */}
        <section className="grid grid-cols-2 gap-4 rounded-xl bg-slate-50 p-4 border border-slate-200">
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Genetic Parentage</p>
            <p className="text-sm font-medium text-slate-800">{variety.parentage || "Unknown"}</p>
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Historical Origin</p>
            <p className="text-sm font-medium text-slate-800">{variety.origin || "Unknown"}</p>
          </div>
        </section>

        {/* Agronomic Traits Grid */}
        <section>
          <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-slate-200 pb-1.5">
            Agronomic Traits
          </h3>
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {traits.map((trait) => {
              const colors = trait.isLevel ? getTraitColor(trait.value) : null;
              return (
                <div
                  key={trait.label}
                  className="flex items-center justify-between rounded-xl bg-slate-50 p-3 border border-slate-200 shadow-sm"
                >
                  <span className="text-xs font-semibold text-slate-500">{trait.label}</span>
                  {colors ? (
                    <span
                      className={`inline-flex items-center rounded border px-2 py-0.5 text-xs font-bold ${colors.bg} ${colors.text} ${colors.border}`}
                    >
                      {trait.value}
                    </span>
                  ) : (
                    <span className="text-xs font-bold text-slate-800 flex items-center gap-1">
                      {trait.icon && <trait.icon className="h-3 w-3 text-slate-400" />}
                      {trait.value}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Flavor Profile */}
        <section>
          <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-slate-200 pb-1.5">
            Flavor Expectations
          </h3>
          <div className="flex flex-wrap gap-2">
            {variety.flavorNotes.map((note) => (
              <span
                key={note}
                className="inline-flex items-center gap-1.5 rounded-lg bg-blue-50/40 border border-blue-100 px-3 py-1.5 text-xs font-medium text-blue-900 shadow-sm"
              >
                <span>{getFlavorEmoji(note)}</span>
                <span>{note}</span>
              </span>
            ))}
          </div>
        </section>

        {/* Common Countries */}
        <section>
          <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-slate-200 pb-1.5">
            Common Countries
          </h3>
          <div className="flex flex-wrap gap-2">
            {variety.commonCountries.map((country) => {
              const iso3 = getCountryIso3(country);
              if (iso3) {
                return (
                  <Link
                    key={country}
                    href={`/?country=${iso3}`}
                    className="inline-flex items-center rounded-full bg-slate-100 hover:bg-blue-50 hover:text-blue-700 border border-slate-200 hover:border-blue-200 px-3 py-1 text-xs font-bold text-slate-700 shadow-sm transition-all"
                  >
                    {country}
                  </Link>
                );
              }
              return (
                <span
                  key={country}
                  className="inline-flex items-center rounded-full bg-slate-100 border border-slate-200 px-3 py-1 text-xs font-bold text-slate-500 shadow-sm"
                >
                  {country}
                </span>
              );
            })}
          </div>
        </section>

        {/* Related Varieties */}
        {variety.relatedVarieties && variety.relatedVarieties.length > 0 && (
          <section>
            <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-slate-200 pb-1.5">
              Related Varieties
            </h3>
            <div className="flex flex-wrap gap-2">
              {variety.relatedVarieties.map((relId) => {
                const info = getRelatedVarietyInfo(relId);
                if (!info) return null;
                return (
                  <button
                    key={relId}
                    onClick={() => onSelectVariety(info.id)}
                    className="inline-flex items-center gap-1 rounded bg-slate-100 hover:bg-slate-200 border border-slate-200 hover:border-slate-300 px-2.5 py-1 text-xs font-semibold text-slate-700 transition-colors"
                  >
                    {info.name}
                  </button>
                );
              })}
            </div>
          </section>
        )}

        {/* Source List */}
        <section>
          <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-slate-400 border-b border-slate-200 pb-1.5">
            Sources
          </h3>
          <ul className="space-y-2">
            {variety.sources.map((src, index) => (
              <li
                key={index}
                className="text-xs bg-slate-50 border border-slate-200 p-2.5 rounded-xl flex items-start gap-2.5"
              >
                <HelpCircle className="h-4 w-4 text-slate-400 mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <a
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-slate-700 hover:text-blue-600 hover:underline flex items-center gap-1 inline-flex"
                  >
                    <span>{src.name}</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                  {src.note && <p className="text-slate-500 mt-0.5 font-medium">{src.note}</p>}
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Disclaimer */}
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-[10px] text-slate-500 leading-relaxed font-medium">
          <strong>Disclaimer:</strong> This dataset is curated for educational visualization. Agronomic traits are simplified from reputable public references and may vary by country, farm management, altitude, climate, and disease pressure. Flavor notes are representative expectations, not official SCA scores.
        </div>
      </div>
    </div>
  );
}
