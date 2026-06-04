import { CoffeeVariety } from "@/types/variety";
import { Globe, Scale, ArrowRight } from "lucide-react";
import VarietyTraitBadges from "./VarietyTraitBadges";

interface VarietyCardProps {
  variety: CoffeeVariety;
  isActive: boolean;
  onViewDetails: () => void;
  isComparing: boolean;
  onToggleCompare: () => void;
}

export default function VarietyCard({
  variety,
  isActive,
  onViewDetails,
  isComparing,
  onToggleCompare,
}: VarietyCardProps) {
  // Take first 3 flavor notes as tags
  const flavorTags = variety.flavorNotes.slice(0, 3);
  const countryCount = variety.commonCountries.length;

  return (
    <div
      className={`group flex flex-col justify-between rounded-2xl border bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
        isActive
          ? "border-amber-500 ring-2 ring-amber-500/20 shadow-sm"
          : "border-amber-900/10 hover:border-amber-900/20 shadow-sm"
      }`}
    >
      <div>
        {/* Name and Species Badge */}
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h3 className="text-lg font-black text-slate-800 tracking-tight transition-colors group-hover:text-amber-900">
            {variety.name}
          </h3>
          <span
            className={`inline-flex items-center rounded-md border px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider ${
              variety.species === "Arabica"
                ? "bg-[#eef5ed] border-[#cce3cb] text-[#2c532c]"
                : "bg-[#f5eeeb] border-[#ebdcd5] text-[#783c24]"
            }`}
          >
            {variety.species}
          </span>
        </div>

        {/* Alternative Names */}
        {variety.alternativeNames && variety.alternativeNames.length > 0 && (
          <p className="text-xs text-slate-400 font-medium mb-3 italic">
            Alt: {variety.alternativeNames.join(", ")}
          </p>
        )}

        {/* Lineage and Stature Info */}
        <div className="flex flex-wrap items-center gap-1.5 mb-3">
          <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
            {variety.lineage}
          </span>
          {variety.plantStature && variety.plantStature !== "Unknown" && (
            <span className="text-[10px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
              {variety.plantStature} Plant
            </span>
          )}
        </div>

        {/* Key Traits Badges */}
        <div className="mb-4">
          <VarietyTraitBadges variety={variety} showSpecies={false} />
        </div>

        {/* Flavor Notes Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {flavorTags.map((flavor) => (
            <span
              key={flavor}
              className="inline-flex items-center rounded-full bg-amber-50/50 border border-amber-900/5 px-2.5 py-0.5 text-xs text-amber-900/80 font-medium"
            >
              {flavor}
            </span>
          ))}
          {variety.flavorNotes.length > 3 && (
            <span className="text-xs text-slate-400 self-center font-bold pl-1">
              +{variety.flavorNotes.length - 3}
            </span>
          )}
        </div>
      </div>

      {/* Footer Details/Actions */}
      <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
        {/* Country Indicator */}
        <div className="flex items-center gap-1 text-slate-550 text-xs font-semibold">
          <Globe className="h-3.5 w-3.5 text-slate-400" />
          <span>
            {countryCount} {countryCount === 1 ? "country" : "countries"}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          {/* Compare Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleCompare();
            }}
            className={`flex items-center gap-1 px-2.5 py-1.5 text-xs font-bold rounded-lg border transition-all ${
              isComparing
                ? "bg-amber-900 border-amber-900 text-white shadow-sm"
                : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300"
            }`}
          >
            <Scale className="h-3 w-3" />
            <span>Compare</span>
          </button>

          {/* View Details Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails();
            }}
            className="flex items-center gap-1 bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-950 px-2.5 py-1.5 text-xs font-bold rounded-lg transition-all"
          >
            <span>Details</span>
            <ArrowRight className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
