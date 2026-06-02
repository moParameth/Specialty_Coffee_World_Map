export type RegionGroup = "Africa" | "Latin America" | "Asia-Pacific";

export type CoffeeSpecies = "Arabica" | "Robusta" | "Liberica";

export type ProcessingMethod =
  | "Washed"
  | "Natural"
  | "Honey"
  | "Wet-hulled"
  | "Anaerobic"
  | "Pulped natural"
  | "Monsooned";

export interface SourceLink {
  name: string;
  url: string;
  note?: string;
}

export interface SensoryProfile {
  aroma: number;
  acidity: number;
  body: number;
  sweetness: number;
  balance: number;
  aftertaste: number;
}

export interface CoffeeCountry {
  iso3: string;
  country: string;
  regionGroup: RegionGroup;
  coffeeSpecies: CoffeeSpecies[];
  mainOrigins: string[];
  varieties: string[];
  altitudeMeters: string;
  processingMethods: ProcessingMethod[];
  flavorNotes: string[];
  notableFarms: string[];
  specialtyHighlights: string;
  sensoryProfile: SensoryProfile;
  sources: SourceLink[];
}

export interface ExternalCountryData {
  name: { common: string };
  capital?: string[];
  population: number;
  flags: { svg: string; png: string };
  region: string;
  subregion: string;
}
