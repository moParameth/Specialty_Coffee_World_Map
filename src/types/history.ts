export interface HistoryEvent {
  id: string;
  year: string;
  exactYear: number;
  title: string;
  location: string;
  era: "origins" | "expansion" | "industrial" | "modern";
  summary: string;
  description: string;
  varietyConnections?: string[]; // IDs matching coffeeVarieties.ts
  keyFigures?: string[]; // E.g. ["Kaldi"]
  stats?: string; // E.g. "9 bars of pressure"
  imageUrl?: string; // Link to historical illustration or representative photo
}
