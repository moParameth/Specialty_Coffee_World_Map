export interface FlavourNode {
  id: string;
  name: string;
  parent?: string;
  level: 1 | 2 | 3;
  color: string;
  description: string;
  chemicalCompounds: string[];
  brewingImpact: string;
  linkedVarieties: string[]; // IDs of varieties
  linkedCountries: string[]; // ISO3 of countries
}
