export interface ProcessingStep {
  name: string;
  duration?: string;
  description: string;
}

export interface ProcessingMetrics {
  difficulty: number; // 1-5
  waterUsage: number; // 1-5
  dryingDuration: string; // e.g. "7-12 days"
  flavorClarity: number; // 1-5 (acid precision/origin expression)
  body: number; // 1-5
  sweetness: number; // 1-5
}

export interface CoffeeProcessingMethod {
  id: string;
  name: string;
  alternativeNames?: string[];
  summary: string;
  description: string;
  flavorProfile: {
    description: string;
    descriptors: string[];
  };
  metrics: ProcessingMetrics;
  steps: ProcessingStep[];
  pros: string[];
  cons: string[];
}
