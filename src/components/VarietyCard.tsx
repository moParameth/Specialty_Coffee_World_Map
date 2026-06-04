import { useState } from "react";
import { CoffeeVariety } from "@/types/variety";
import { Globe, Scale, ArrowRight, Coffee } from "lucide-react";
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
  const [imageError, setImageError] = useState(false);
  // Take first 3 flavor notes as tags
  const flavorTags = variety.flavorNotes.slice(0, 3);
  const countryCount = variety.commonCountries.length;

  return (
    <div
      className={`group flex flex-col justify-between rounded-2xl border bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
        isActive
          ? "border-blue-500 ring-2 ring-blue-500/20 shadow-sm"
          : "border-slate-200 hover:border-slate-300 shadow-sm"
      }`}
    >
      <div>
        {/* Image Thumbnail */}
        <div className="w-full h-32 mb-4 overflow-hidden rounded-xl border border-slate-100 bg-slate-50 relative flex items-center justify-center">
          {variety.imageUrl && !imageError ? (
            <img
              src={variety.imageUrl}
              alt={variety.name}
              onError={() => setImageError(true)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-slate-400 gap-1 select-none">
              <Coffee className="h-8 w-8 text-blue-200/60 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">No Photo</span>
            </div>
          )}
        </div>

        {/* Name and Species Badge */}
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <h3 className="text-lg font-black text-slate-800 tracking-tight transition-colors group-hover:text-blue-600">
            {variety.name}
          </h3>
          <span
            className={`inline-flex items-center rounded-md border px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider ${
              variety.species === "Arabica"
                ? "bg-blue-50 border-blue-200 text-blue-700"
                : "bg-slate-100 border-slate-300 text-slate-700"
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
          <span className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded font-bold uppercase tracking-wider border border-slate-200">
            {variety.lineage}
          </span>
          {variety.plantStature && variety.plantStature !== "Unknown" && (
            <span className="text-[10px] bg-stone-100 text-stone-600 px-2 py-0.5 rounded font-bold uppercase tracking-wider border border-stone-200">
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
              className="inline-flex items-center rounded-full bg-blue-50/40 border border-blue-100 px-2.5 py-0.5 text-xs text-blue-900/70 font-semibold"
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
        <div className="flex items-center gap-1 text-slate-500 text-xs font-semibold">
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
                ? "bg-blue-600 border-blue-600 text-white shadow-sm hover:bg-blue-700"
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
            className="flex items-center gap-1 bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-700 px-2.5 py-1.5 text-xs font-bold rounded-lg transition-all"
          >
            <span>Details</span>
            <ArrowRight className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
