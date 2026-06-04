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
}
