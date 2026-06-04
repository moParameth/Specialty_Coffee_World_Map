import type { CoffeeVariety, TraitLevel, VarietySpecies, VarietyLineage } from "@/types/variety";

export function normalizeVarietyId(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function isHighQuality(variety: CoffeeVariety): boolean {
  const highLevels: TraitLevel[] = ["High", "Very High", "Exceptional", "Very Good", "Good"];
  return highLevels.includes(variety.qualityPotential || "Unknown");
}

export function isHighYield(variety: CoffeeVariety): boolean {
  const highLevels: TraitLevel[] = ["High", "Very High", "Exceptional", "Very Good", "Good"];
  return highLevels.includes(variety.yieldPotential || "Unknown");
}

export function isLeafRustResistant(variety: CoffeeVariety): boolean {
  const resistantLevels: TraitLevel[] = ["High", "Very High", "Exceptional", "Very Good", "Good"];
  return resistantLevels.includes(variety.leafRustResistance || "Unknown");
}

export function isCoffeeBerryDiseaseResistant(variety: CoffeeVariety): boolean {
  const resistantLevels: TraitLevel[] = ["High", "Very High", "Exceptional", "Very Good", "Good"];
  return resistantLevels.includes(variety.coffeeBerryDiseaseResistance || "Unknown");
}

export function isDiseaseResistant(variety: CoffeeVariety): boolean {
  return isLeafRustResistant(variety) || isCoffeeBerryDiseaseResistant(variety);
}

export function isCompactPlant(variety: CoffeeVariety): boolean {
  return variety.plantStature === "Compact" || variety.plantStature === "Dwarf";
}

export function isHighAltitudeSuitable(variety: CoffeeVariety): boolean {
  if (!variety.optimalAltitude || variety.optimalAltitude === "Unknown") return false;
  const numbers = variety.optimalAltitude.match(/\d+/g)?.map(Number) || [];
  return numbers.some((n) => n >= 1200);
}

export function getTraitColor(level: TraitLevel): { bg: string; text: string; border: string } {
  switch (level) {
    case "Exceptional":
    case "Very High":
    case "Very Good":
      return {
        bg: "bg-emerald-50",
        text: "text-emerald-700",
        border: "border-emerald-200"
      };
    case "High":
    case "Good":
      return {
        bg: "bg-teal-50",
        text: "text-teal-700",
        border: "border-teal-200"
      };
    case "Medium":
      return {
        bg: "bg-amber-50",
        text: "text-amber-700",
        border: "border-amber-200"
      };
    case "Low":
    case "Very Low":
      return {
        bg: "bg-rose-50",
        text: "text-rose-700",
        border: "border-rose-200"
      };
    case "Unknown":
    default:
      return {
        bg: "bg-slate-50",
        text: "text-slate-500",
        border: "border-slate-200"
      };
  }
}

export function getVarietyById(id: string, varieties: CoffeeVariety[]): CoffeeVariety | undefined {
  const normId = normalizeVarietyId(id);
  return varieties.find(
    (v) =>
      v.id === normId ||
      normalizeVarietyId(v.name) === normId ||
      v.alternativeNames?.some((alt) => normalizeVarietyId(alt) === normId)
  );
}

export function getVarietiesByCountry(countryName: string, varieties: CoffeeVariety[]): CoffeeVariety[] {
  const lowerCountry = countryName.toLowerCase();
  return varieties.filter((v) =>
    v.commonCountries.some((c) => c.toLowerCase() === lowerCountry)
  );
}

export function getRelatedVarieties(variety: CoffeeVariety, allVarieties: CoffeeVariety[]): CoffeeVariety[] {
  if (!variety.relatedVarieties) return [];
  return allVarieties.filter((v) => variety.relatedVarieties?.includes(v.id));
}

export interface VarietyFilters {
  search: string;
  species: string;
  lineage: string;
  trait: string; // e.g., "High Quality Potential", "High Yield Potential", "Leaf Rust Resistant", "Compact Plant", "High Altitude Suitable", "All Traits"
}

export function filterVarieties(varieties: CoffeeVariety[], filters: VarietyFilters): CoffeeVariety[] {
  return varieties.filter((v) => {
    // 1. Search text matches name, alternative names, lineage, origin, common countries, or flavor notes
    const matchesSearch =
      filters.search === "" ||
      v.name.toLowerCase().includes(filters.search.toLowerCase()) ||
      v.alternativeNames?.some((alt) => alt.toLowerCase().includes(filters.search.toLowerCase())) ||
      v.lineage.toLowerCase().includes(filters.search.toLowerCase()) ||
      v.origin?.toLowerCase().includes(filters.search.toLowerCase()) ||
      v.commonCountries.some((c) => c.toLowerCase().includes(filters.search.toLowerCase())) ||
      v.flavorNotes.some((fn) => fn.toLowerCase().includes(filters.search.toLowerCase()));

    // 2. Species filter
    const matchesSpecies =
      filters.species === "" ||
      filters.species === "All Species" ||
      v.species.toLowerCase() === filters.species.toLowerCase();

    // 3. Lineage filter
    const matchesLineage =
      filters.lineage === "" ||
      filters.lineage === "All Lineages" ||
      v.lineage.toLowerCase() === filters.lineage.toLowerCase();

    // 4. Trait filter
    let matchesTrait = true;
    if (filters.trait && filters.trait !== "All Traits") {
      switch (filters.trait) {
        case "High Quality Potential":
          matchesTrait = isHighQuality(v);
          break;
        case "High Yield Potential":
          matchesTrait = isHighYield(v);
          break;
        case "Leaf Rust Resistant":
          matchesTrait = isLeafRustResistant(v);
          break;
        case "Compact Plant":
          matchesTrait = isCompactPlant(v);
          break;
        case "High Altitude Suitable":
          matchesTrait = isHighAltitudeSuitable(v);
          break;
        default:
          matchesTrait = true;
      }
    }

    return matchesSearch && matchesSpecies && matchesLineage && matchesTrait;
  });
}
