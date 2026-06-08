export interface SupplyChainStage {
  id: string;
  name: string;
  subtitle: string;
  phaseNumber: number;
  location: string;
  duration: string;
  physicalTransition: string;
  keyActivities: string[];
  detailedDescription: string;
  qualityControls: string[];
}

export interface EconomicCostItem {
  label: string;
  commodityPercentage: number; // e.g. 10 for 10%
  specialtyPercentage: number; // e.g. 30 for 30%
  description: string;
}

export interface SupplyChainRisk {
  stageName: string;
  riskName: string;
  impact: string;
  mitigation: string;
}
