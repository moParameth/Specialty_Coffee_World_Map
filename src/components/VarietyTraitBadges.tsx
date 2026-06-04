import { CoffeeVariety } from "@/types/variety";
import {
  isHighQuality,
  isHighYield,
  isLeafRustResistant,
  isCoffeeBerryDiseaseResistant,
  isCompactPlant,
  isHighAltitudeSuitable,
} from "@/utils/varietyUtils";

interface VarietyTraitBadgesProps {
  variety: CoffeeVariety;
  showSpecies?: boolean;
}

export default function VarietyTraitBadges({ variety, showSpecies = true }: VarietyTraitBadgesProps) {
  const badges: { label: string; className: string }[] = [];

  if (showSpecies) {
    if (variety.species === "Arabica") {
      badges.push({
        label: "Arabica",
        className: "bg-blue-50 border-blue-200 text-blue-700",
      });
    } else if (variety.species === "Robusta") {
      badges.push({
        label: "Robusta",
        className: "bg-slate-100 border-slate-300 text-slate-700",
      });
    }
  }

  if (isHighQuality(variety)) {
    badges.push({
      label: "High Quality",
      className: "bg-blue-50 border-blue-200 text-blue-700",
    });
  }

  if (isHighYield(variety)) {
    badges.push({
      label: "High Yield",
      className: "bg-indigo-50 border-indigo-200 text-indigo-700",
    });
  }

  if (isLeafRustResistant(variety)) {
    badges.push({
      label: "Rust Resistant",
      className: "bg-emerald-50 border-emerald-200 text-emerald-700",
    });
  }

  if (isCoffeeBerryDiseaseResistant(variety)) {
    badges.push({
      label: "CBD Resistant",
      className: "bg-teal-50 border-teal-200 text-teal-700",
    });
  }

  if (isCompactPlant(variety)) {
    badges.push({
      label: "Compact",
      className: "bg-slate-100 border-slate-200 text-slate-600",
    });
  }

  if (isHighAltitudeSuitable(variety)) {
    badges.push({
      label: "High Altitude",
      className: "bg-sky-50 border-sky-200 text-sky-700",
    });
  }

  return (
    <div className="flex flex-wrap gap-1">
      {badges.map((b) => (
        <span
          key={b.label}
          className={`inline-flex items-center rounded border px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider shadow-sm transition-all duration-200 hover:scale-102 ${b.className}`}
        >
          {b.label}
        </span>
      ))}
    </div>
  );
}
