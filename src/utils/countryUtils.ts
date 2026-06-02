import { coffeeCountries } from "@/data/coffeeCountries";
import type { CoffeeCountry, RegionGroup, CoffeeSpecies, ProcessingMethod } from "@/types/coffee";

export function getCountryByIso3(iso3: string): CoffeeCountry | undefined {
  return coffeeCountries.find((c) => c.iso3 === iso3);
}

export function filterCoffeeCountries(
  search: string,
  region: string,
  species: string,
  processing: string
): CoffeeCountry[] {
  return coffeeCountries.filter((c) => {
    const matchesSearch =
      search === "" ||
      c.country.toLowerCase().includes(search.toLowerCase());

    const matchesRegion = region === "" || c.regionGroup === region;
    const matchesSpecies = species === "" || c.coffeeSpecies.includes(species as CoffeeSpecies);
    const matchesProcessing =
      processing === "" || c.processingMethods.includes(processing as ProcessingMethod);

    return matchesSearch && matchesRegion && matchesSpecies && matchesProcessing;
  });
}

export function getCountryFillColor(
  geoName: string,
  hoveredName: string | null,
  selectedName: string | null,
  availableNames: string[]
): string {
  if (selectedName === geoName) return "#1e3a8a"; // blue-900
  if (hoveredName === geoName) return "#60a5fa"; // blue-400
  if (availableNames.includes(geoName)) return "#3b82f6"; // blue-500
  return "#e2e8f0"; // slate-200 for non-coffee countries
}

export function formatList(list: string[], max: number = list.length): string {
  if (!list || list.length === 0) return "-";
  if (list.length <= max) return list.join(", ");
  return `${list.slice(0, max).join(", ")} and more`;
}

export function getFlavorEmoji(note: string): string {
  const lowerNote = note.toLowerCase();
  if (lowerNote.includes("chocolate") || lowerNote.includes("cocoa") || lowerNote.includes("cacao")) return "🍫";
  if (lowerNote.includes("citrus") || lowerNote.includes("lemon") || lowerNote.includes("orange") || lowerNote.includes("bergamot")) return "🍋";
  if (lowerNote.includes("floral") || lowerNote.includes("jasmine") || lowerNote.includes("flower")) return "🌸";
  if (lowerNote.includes("berry") || lowerNote.includes("strawberry") || lowerNote.includes("blueberry") || lowerNote.includes("blackberry")) return "🫐";
  if (lowerNote.includes("nut") || lowerNote.includes("almond") || lowerNote.includes("macadamia")) return "🥜";
  if (lowerNote.includes("caramel") || lowerNote.includes("brown sugar") || lowerNote.includes("honey") || lowerNote.includes("sweet")) return "🍯";
  if (lowerNote.includes("stone fruit") || lowerNote.includes("peach") || lowerNote.includes("plum")) return "🍑";
  if (lowerNote.includes("apple")) return "🍏";
  if (lowerNote.includes("grape") || lowerNote.includes("wine")) return "🍇";
  if (lowerNote.includes("tea")) return "🍵";
  if (lowerNote.includes("spice") || lowerNote.includes("cinnamon") || lowerNote.includes("herbal")) return "🌿";
  if (lowerNote.includes("tobacco") || lowerNote.includes("smoky")) return "💨";
  if (lowerNote.includes("tropical") || lowerNote.includes("mango") || lowerNote.includes("jackfruit")) return "🥭";
  if (lowerNote.includes("earthy")) return "🌱";
  return "✨"; // Default fallback
}
