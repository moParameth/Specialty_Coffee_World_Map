export interface RoastingPhase {
  id: string;
  name: string;
  tempRange: string;
  duration: string;
  description: string;
  chemicalChanges: string;
  visualState: string;
}

export interface RoastLevelMetrics {
  acidity: number; // 1-5
  body: number; // 1-5
  sweetness: number; // 1-5
  bitterness: number; // 1-5
}

export interface RoastLevel {
  id: string;
  name: string;
  alternativeNames: string[];
  tempRange: string;
  description: string;
  flavorNotes: string[];
  chemicalStatus: string;
  brewingGuide: string;
  metrics: RoastLevelMetrics;
  imageUrl: string;
  hexColor: string;
}

export interface RoasterType {
  name: string;
  mechanism: string;
  pros: string[];
  cons: string[];
}
