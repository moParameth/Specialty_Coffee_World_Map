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
        className: "bg-[#eef5ed] border-[#cce3cb] text-[#2c532c]",
      });
    } else if (variety.species === "Robusta") {
      badges.push({
        label: "Robusta",
        className: "bg-[#f5eeeb] border-[#ebdcd5] text-[#783c24]",
      });
    }
  }

  if (isHighQuality(variety)) {
    badges.push({
      label: "High Quality",
      className: "bg-amber-50 border-amber-200 text-amber-800",
    });
  }

  if (isHighYield(variety)) {
    badges.push({
      label: "High Yield",
      className: "bg-orange-50 border-orange-200 text-orange-800",
    });
  }

  if (isLeafRustResistant(variety)) {
    badges.push({
      label: "Rust Resistant",
      className: "bg-emerald-50 border-emerald-200 text-emerald-800",
    });
  }

  if (isCoffeeBerryDiseaseResistant(variety)) {
    badges.push({
      label: "CBD Resistant",
      className: "bg-teal-50 border-teal-200 text-teal-800",
    });
  }

  if (isCompactPlant(variety)) {
    badges.push({
      label: "Compact",
      className: "bg-stone-100 border-stone-200 text-stone-700",
    });
  }

  if (isHighAltitudeSuitable(variety)) {
    badges.push({
      label: "High Altitude",
      className: "bg-sky-50 border-sky-200 text-sky-850",
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
