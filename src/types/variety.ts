export type VarietySpecies = "Arabica" | "Robusta" | "Eugenioides" | "Other";

export type VarietyLineage =
  | "Ethiopian Landrace"
  | "Typica"
  | "Bourbon"
  | "Bourbon-Typica"
  | "Catimor"
  | "Sarchimor"
  | "Introgressed"
  | "F1 Hybrid"
  | "Robusta"
  | "Eugenioides"
  | "Unknown";

export type TraitLevel =
  | "Very Low"
  | "Low"
  | "Medium"
  | "High"
  | "Very High"
  | "Exceptional"
  | "Good"
  | "Very Good"
  | "Unknown";

export interface SourceLink {
  name: string;
  url: string;
  note?: string;
}

export interface CoffeeVariety {
  id: string;
  name: string;
  alternativeNames?: string[];
  species: VarietySpecies;
  lineage: VarietyLineage;
  parentage?: string;
  origin?: string;
  plantStature?: "Tall" | "Compact" | "Dwarf" | "Unknown";
  beanSize?: TraitLevel;
  yieldPotential?: TraitLevel;
  qualityPotential?: TraitLevel;
  optimalAltitude?: string;
  leafRustResistance?: TraitLevel;
  coffeeBerryDiseaseResistance?: TraitLevel;
  nematodeResistance?: TraitLevel;
  nutritionRequirement?: TraitLevel;
  commonCountries: string[];
  flavorNotes: string[];
  summary: string;
  relatedVarieties?: string[];
  sources: SourceLink[];
  imageUrl?: string;
}
