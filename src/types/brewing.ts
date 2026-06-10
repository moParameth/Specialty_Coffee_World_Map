export interface BrewStep {
  time: number; // in seconds
  action: string;
  detail: string;
  waterAdded: number; // cumulative water weight in grams, or 0 if none
}

export interface TastingTrouble {
  issue: string;
  cause: string;
  solution: string;
}

export interface HistoryMilestone {
  year: string;
  title: string;
  description: string;
}

export interface BrewingMethod {
  id: string;
  name: string;
  tagline: string;
  iconName: string;
  defaultRatio: number; // e.g. 15 for 1:15 ratio
  defaultTemp: number; // in °C
  grindSizeText: string;
  grindSizeMicrons: number;
  filterType: string;
  tdsRange: string;
  eyRange: string;
  physicsSummary: string;
  extractionMechanic: string;
  bypassPercentage: number;
  volatilePreservation: string;
  stepRecipe: BrewStep[];
  troubleshooting: TastingTrouble[];
  
  // Advanced research fields
  waterChemistry: string;
  physicsDetails: string;
  bypassAndPaper: string;
  puckPrepOrPouringKinetics: string;
  extractionFractions: string;

  // Deeper Research Dimensions
  thermalDynamics: string;
  particleDistribution: string;
  equipmentVariations: string;

  // History & Illustrations
  history: string;
  imageUrl: string;
  historyTimeline: HistoryMilestone[];
}
