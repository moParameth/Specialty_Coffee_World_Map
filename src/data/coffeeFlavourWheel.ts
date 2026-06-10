import { FlavourNode } from "@/types/flavour";

export const coffeeFlavourWheel: FlavourNode[] = [
  // ==========================================
  // LEVEL 1: INNERMOST CORE CATEGORIES (9 nodes)
  // ==========================================
  {
    id: "fruity",
    name: "Fruity",
    level: 1,
    color: "#ef4444",
    description: "Bright, sweet, and fleshy fruit characteristics. Fruit notes are highly desirable in specialty coffees and typically indicate high altitudes, careful sorting, and pristine processing (often natural or anaerobic).",
    chemicalCompounds: ["Volatile esters", "Aliphatic aldehydes", "Organic acids"],
    brewingImpact: "Fruit notes are highly soluble and extract early. To enhance fruitiness, use clean water (70-90ppm GH), slightly higher temperatures (92-94°C), and avoid over-extracting which introduces bitter wood notes that mask fruit.",
    linkedVarieties: ["geisha", "sl28", "pink-bourbon", "sidra", "wush-wush"],
    linkedCountries: ["ETH", "KEN", "PAN", "COL", "CRI"]
  },
  {
    id: "floral",
    name: "Floral",
    level: 1,
    color: "#ec4899",
    description: "Delicate, sweet, and botanical aromas reminiscent of blossoms and fresh tea leaves. Floral notes are typical of high-altitude washed coffees, particularly landraces or Geisha cultivars.",
    chemicalCompounds: ["Monoterpenols (Linalool, Geraniol)", "Benzyl acetate"],
    brewingImpact: "Floral compounds are extremely volatile and escape rapidly with high heat. Grind fresh immediately before brewing. Use a clean paper filter (V60 or Chemex) to separate oils, and brew around 91-93°C to preserve delicacy.",
    linkedVarieties: ["geisha", "java", "sudan-rume", "sidra"],
    linkedCountries: ["PAN", "ETH", "GTM", "BOL"]
  },
  {
    id: "sweet",
    name: "Sweet",
    level: 1,
    color: "#f59e0b",
    description: "Rich caramel, brown sugar, honey, and vanilla aromatics. Sweetness is the hallmark of a mature, well-developed roast and indicates high sugar density in the raw green cherries.",
    chemicalCompounds: ["Furanones (Furaneol)", "Maltol", "Vanillin", "Aldehydes"],
    brewingImpact: "Sweetness is maximized by achieving balanced extraction. Under-extraction tastes sour and thin; over-extraction tastes bitter. Target a extraction yield of 19-21% using a medium grind size and moderate agitation.",
    linkedVarieties: ["bourbon", "caturra", "pacas", "villa-sarchi", "tekisic"],
    linkedCountries: ["COL", "SLV", "CRI", "GTM", "BRA"]
  },
  {
    id: "nutty-cocoa",
    name: "Nutty / Cocoa",
    level: 1,
    color: "#854d0e",
    description: "Classic roasted nuts, hazelnut, almond, and chocolate notes. These are common foundational notes in coffee, typical of Central/South American washed process coffees and medium-developed roasts.",
    chemicalCompounds: ["Pyrazines (Alkylpyrazines)", "Furans", "Tetramethylpyrazine"],
    brewingImpact: "Nutty and chocolate compounds have moderate solubility and extract steadily. They provide body and balance, making these coffees highly forgiving to brew. Excellent for espresso, immersion, or milk-based beverages.",
    linkedVarieties: ["bourbon", "typica", "mundo-novo", "catuai", "castillo"],
    linkedCountries: ["BRA", "COL", "GTM", "HON", "PER"]
  },
  {
    id: "spices",
    name: "Spices",
    level: 1,
    color: "#ea580c",
    description: "Warm, sweet spices like cinnamon and nutmeg, or sharp, pungent notes like black pepper and ginger. Often linked to specific terroirs or controlled fermentations.",
    chemicalCompounds: ["Phenylpropanoids (Cinnamaldehyde, Eugenol)", "Anethole", "Piperine"],
    brewingImpact: "Spicy notes can add wonderful complexity. In washed coffees, they arise from terroir; in anaerobic fermentations, they are metabolic byproducts. Keep extraction standard; over-extracting can turn spices harsh or medicinal.",
    linkedVarieties: ["sl34", "pink-bourbon", "pacamara", "k7"],
    linkedCountries: ["KEN", "COL", "SLV", "IDN", "YEM"]
  },
  {
    id: "roasted",
    name: "Roasted",
    level: 1,
    color: "#3f3f46",
    description: "Toasted cereal, grain, tobacco, and caramelized toast notes. These notes are directly shaped by the roasting process (Maillard reaction and pyrolysis of sugars) and define body and depth.",
    chemicalCompounds: ["Pyrazines", "Pyridines (2-acetylpyridine)", "Guaiacol"],
    brewingImpact: "Roasted notes dominate in darker roasts. Because roasted bean structures are highly porous, they extract extremely fast. Use cooler water (85-88°C), coarser grinds, and shorter brew times to prevent bitter, ashy ashiness.",
    linkedVarieties: ["robusta-commercial-clones", "catimor", "ruiru-11", "castillo"],
    linkedCountries: ["VNM", "BRA", "IDN", "IND", "UGA"]
  },
  {
    id: "green-vegetative",
    name: "Green / Vegetative",
    level: 1,
    color: "#10b981",
    description: "Grassy, herbal, raw pea, or hay-like aromas. While subtle herbal notes can add complexity, strong raw vegetative notes are usually defects indicating under-ripe harvesting or under-developed roasting.",
    chemicalCompounds: ["Hexanal", "cis-3-Hexenol", "Alkylalkoxypyrazines"],
    brewingImpact: "Underdeveloped green notes cannot be resolved by brewing. However, you can minimize raw grassiness by avoiding cold water extractions and using hotter water (94°C+) to push sweet development compounds forward.",
    linkedVarieties: ["timor-hybrid", "catimor", "anacafe-14"],
    linkedCountries: ["TLS", "VNM", "CHN", "IND"]
  },
  {
    id: "sour-fermented",
    name: "Sour / Fermented",
    level: 1,
    color: "#a3e635",
    description: "Sharp organic acids (citric, malic) and complex fermented, winey, or alcoholic notes. Fermentation is a double-edged sword; controlled fermentations yield fruit bombs, while uncontrolled wet fermentations lead to sour rot.",
    chemicalCompounds: ["Organic acids (Malic, Lactic, Citric)", "Ethyl acetate", "Acetoin"],
    brewingImpact: "Acids extract immediately. If coffee is under-extracted, it will taste intensely sour. To balance strong acidity, grind finer, increase water temperature, and extend the extraction time to draw out buffering sweet and bitter compounds.",
    linkedVarieties: ["wush-wush", "pink-bourbon", "pacamara", "sl28"],
    linkedCountries: ["ETH", "COL", "KEN", "YEM", "ECU"]
  },
  {
    id: "other",
    name: "Other",
    level: 1,
    color: "#78716c",
    description: "Musty, woody, papery, or phenolic/chemical notes. Mostly regarded as defects, originating from poor storage (moisture sweating in transit), old crop aging, or dirty processing equipment.",
    chemicalCompounds: ["Geosmin", "Furfural", "trans-2-Nonenal", "Halophenols"],
    brewingImpact: "To reduce papery cardboard taste, always pre-wet your paper filters with boiling water and discard the rinse water. For aged, woody coffee (baggy notes), use slightly lower temperatures and add a pinch of mineralized buffer.",
    linkedVarieties: ["robusta-commercial-clones", "wet-hulled-derived"],
    linkedCountries: ["IDN", "VNM", "TLS"]
  },

  // ==========================================
  // LEVEL 2: MIDDLE SUB-CATEGORIES (18 nodes)
  // ==========================================
  // --- Under Fruity ---
  {
    id: "berry",
    name: "Berry",
    parent: "fruity",
    level: 2,
    color: "#db2777",
    description: "Deep, sweet berry characteristics. Typical of high-altitude natural coffees and slow-drying processes.",
    chemicalCompounds: ["Alkyl esters", "Beta-ionone"],
    brewingImpact: "Maximize extraction balance using pour-over cones. Target 20% extraction.",
    linkedVarieties: ["sl28", "wush-wush", "pink-bourbon"],
    linkedCountries: ["KEN", "ETH", "COL"]
  },
  {
    id: "citrus-fruit",
    name: "Citrus Fruit",
    parent: "fruity",
    level: 2,
    color: "#eab308",
    description: "Bright, sparkling acidity and fresh citrus oils. Characteristic of high-altitude washed Arabica.",
    chemicalCompounds: ["Limonene", "Citral", "Citric acid"],
    brewingImpact: "Highlight citric notes using a flat-bottom dripper (Kalita Wave) and high water quality (low bicarbonate buffers).",
    linkedVarieties: ["geisha", "sl28", "sl34"],
    linkedCountries: ["KEN", "ETH", "PAN"]
  },
  {
    id: "dried-fruit",
    name: "Dried Fruit",
    parent: "fruity",
    level: 2,
    color: "#b91c1c",
    description: "Concentrated, jammy fruit notes. Common in natural-processed coffees and traditional dry-processed lots.",
    chemicalCompounds: ["Furfurals", "Hydroxymethylfurfural"],
    brewingImpact: "Great in immersion brewing (French Press, AeroPress) which emphasizes heavy sweetness and jammy mouthfeel.",
    linkedVarieties: ["bourbon", "sidra", "wush-wush"],
    linkedCountries: ["ETH", "YEM", "BRA"]
  },
  {
    id: "other-fruit",
    name: "Other Fruit",
    parent: "fruity",
    level: 2,
    color: "#f43f5e",
    description: "Fleshy stone fruit, tropical fruit, and pomaceous fruit characteristics.",
    chemicalCompounds: ["Gamma-lactones", "Ethyl butyrate"],
    brewingImpact: "Brew with soft water to highlight delicate peach and apricot notes. Keep temperature at 92°C.",
    linkedVarieties: ["geisha", "pink-bourbon", "sidra"],
    linkedCountries: ["COL", "PAN", "CRI"]
  },

  // --- Under Floral ---
  {
    id: "floral-notes",
    name: "Floral Notes",
    parent: "floral",
    level: 2,
    color: "#f472b6",
    description: "Intense, clean jasmine, rose, or chamomile aromatics. Common in washed Geisha and Ethiopian heirloom varieties.",
    chemicalCompounds: ["Linalool", "Benzyl acetate", "Phenylethyl alcohol"],
    brewingImpact: "Use a clean paper filter (V60). Keep grind size medium-coarse to avoid bitter over-extraction.",
    linkedVarieties: ["geisha", "sidra", "sudan-rume"],
    linkedCountries: ["PAN", "ETH", "BOL"]
  },
  {
    id: "tea-notes",
    name: "Tea Notes",
    parent: "floral",
    level: 2,
    color: "#84cc16",
    description: "Delicate, astringent green tea or black tea profiles, common in high-altitude washed coffees.",
    chemicalCompounds: ["Polyphenols", "Geraniol"],
    brewingImpact: "Best highlighted via pour-over. A slightly faster flow rate keeps the tea-like clarity crisp and refreshing.",
    linkedVarieties: ["geisha", "sl28", "java"],
    linkedCountries: ["KEN", "ETH", "PAN"]
  },

  // --- Under Sweet ---
  {
    id: "brown-sugar",
    name: "Brown Sugar",
    parent: "sweet",
    level: 2,
    color: "#d97706",
    description: "Heavily caramelized sugars, maple syrup, honey, and molasses. The backbone of cup balance.",
    chemicalCompounds: ["Maltol", "Sotolon", "Furanones"],
    brewingImpact: "Maximized in medium-developed roasts. Use standard 1:16 ratio at 92°C to emphasize caramel body.",
    linkedVarieties: ["bourbon", "caturra", "pacamara"],
    linkedCountries: ["COL", "SLV", "BRA"]
  },
  {
    id: "vanilla-sweet",
    name: "Vanilla & Aromatics",
    parent: "sweet",
    level: 2,
    color: "#fde047",
    description: "Sweet, comforting vanilla pod and sweet aromatic extracts. Indicates healthy sugar development.",
    chemicalCompounds: ["Vanillin", "Benzaldehyde"],
    brewingImpact: "Easily extracted. Maximized by using high-quality brewing water with balanced magnesium content.",
    linkedVarieties: ["bourbon", "typica", "villa-sarchi"],
    linkedCountries: ["CRI", "GTM", "COL"]
  },

  // --- Under Nutty/Cocoa ---
  {
    id: "nutty",
    name: "Nutty",
    parent: "nutty-cocoa",
    level: 2,
    color: "#a16207",
    description: "Roasted hazelnut, almond, peanut, or walnut notes. Foundational in Central/South American lots.",
    chemicalCompounds: ["Alkylpyrazines", "Methylpyrazines"],
    brewingImpact: "Highly stable compounds. Immersion brewing (French Press) brings out rich toasted nut fats beautifully.",
    linkedVarieties: ["bourbon", "typica", "mundo-novo"],
    linkedCountries: ["BRA", "COL", "HON"]
  },
  {
    id: "cocoa",
    name: "Cocoa",
    parent: "nutty-cocoa",
    level: 2,
    color: "#7c2d12",
    description: "Varying chocolate intensities, from bittersweet cocoa powder to creamy milk chocolate.",
    chemicalCompounds: ["Tetramethylpyrazine", "Isovaleraldehyde"],
    brewingImpact: "Excellent for espresso and traditional Moka Pot extractions. Pairs beautifully with dairy or plant milks.",
    linkedVarieties: ["bourbon", "typica", "castillo"],
    linkedCountries: ["COL", "GTM", "PER"]
  },

  // --- Under Spices ---
  {
    id: "brown-spice",
    name: "Brown Spice",
    parent: "spices",
    level: 2,
    color: "#c2410c",
    description: "Sweet baking spices like cinnamon, nutmeg, clove, and anise. Brings warmth and complexity.",
    chemicalCompounds: ["Cinnamaldehyde", "Eugenol", "Myristicin"],
    brewingImpact: "Often emerges in anaerobic lots. Moderate brewing temperature (91°C) to keep the spice aromatic, not harsh.",
    linkedVarieties: ["pink-bourbon", "pacamara"],
    linkedCountries: ["COL", "SLV"]
  },
  {
    id: "pungent",
    name: "Pungent / Pepper",
    parent: "spices",
    level: 2,
    color: "#f97316",
    description: "Sharp spice aromatics like black pepper, ginger, or cardamom. Common in some East African and Asian origins.",
    chemicalCompounds: ["Piperine", "Gingerol"],
    brewingImpact: "Use slightly coarser grind sizes to avoid over-extracting sharp, bitter phenolic-adjacent spicy notes.",
    linkedVarieties: ["sl34", "k7", "robusta-commercial-clones"],
    linkedCountries: ["KEN", "IDN", "YEM"]
  },

  // --- Under Roasted ---
  {
    id: "roasted-notes",
    name: "Roasted Notes",
    parent: "roasted",
    level: 2,
    color: "#52525b",
    description: "Toasted cereal, malty grain, and toasted bread. Direct products of the Maillard reaction.",
    chemicalCompounds: ["Pyrazines", "Furans", "2-Acetylpyridine"],
    brewingImpact: "Highly soluble. Lower water temperature (88°C) to avoid pulling bitter, overdeveloped grain compounds.",
    linkedVarieties: ["castillo", "catimor"],
    linkedCountries: ["BRA", "VNM"]
  },
  {
    id: "smoky-tobacco",
    name: "Smoky & Tobacco",
    parent: "roasted",
    level: 2,
    color: "#27272a",
    description: "Wood smoke, tobacco leaves, and heavily caramelized ash notes. Typified by dark roasts.",
    chemicalCompounds: ["Guaiacol", "Nicotianine"],
    brewingImpact: "Use a short contact time (e.g. AeroPress bypass or quick pour-over) to minimize bitter ash extraction.",
    linkedVarieties: ["robusta-commercial-clones", "ruiru-11"],
    linkedCountries: ["VNM", "IDN", "IND"]
  },

  // --- Under Green/Vegetative ---
  {
    id: "greenish",
    name: "Greenish",
    parent: "green-vegetative",
    level: 2,
    color: "#059669",
    description: "Freshly cut grass, raw pea, and cucumber notes. Common in under-developed roasts or under-ripe cherries.",
    chemicalCompounds: ["cis-3-Hexenol", "Hexanal", "Alkylpyrazines"],
    brewingImpact: "Avoid cold extractions. Hot water (94°C) helps hide grassy notes by extracting sweet compounds.",
    linkedVarieties: ["timor-hybrid", "catimor"],
    linkedCountries: ["TLS", "VNM"]
  },
  {
    id: "vegetative",
    name: "Vegetative / Dry",
    parent: "green-vegetative",
    level: 2,
    color: "#15803d",
    description: "Olive oil, hay, straw, or dry wood notes. Usually indicates aging crop (old green beans).",
    chemicalCompounds: ["trans-2-Hexenal", "Trimethylpyrazine"],
    brewingImpact: "Keep brew ratio tight (1:15) to maintain flavor concentration, as these coffees tend to taste woody and thin.",
    linkedVarieties: ["catimor", "anacafe-14"],
    linkedCountries: ["CHN", "IDN"]
  },

  // --- Under Sour/Fermented ---
  {
    id: "sour-acid",
    name: "Organic Acids",
    parent: "sour-fermented",
    level: 2,
    color: "#65a30d",
    description: "Highly structural organic acids that define the acidity profile (citric, malic, lactic, phosphoric).",
    chemicalCompounds: ["Citric acid", "Malic acid", "Lactic acid"],
    brewingImpact: "If acidity tastes sour and sharp, increase extraction (finer grind, hotter water) to buffer with sweet caramel compounds.",
    linkedVarieties: ["sl28", "geisha", "pink-bourbon"],
    linkedCountries: ["KEN", "ETH", "COL"]
  },
  {
    id: "alcohol-fermented",
    name: "Alcohol & Ferment",
    parent: "sour-fermented",
    level: 2,
    color: "#4d7c0f",
    description: "Complex alcoholic notes (winey, whiskey, cider) originating from extended fermentation (anaerobic).",
    chemicalCompounds: ["Ethyl acetate", "Isoamyl alcohol", "Acetoin"],
    brewingImpact: "Very high solubility. Keep grind size medium-coarse. Excellent when brewed on flat-bottom drippers.",
    linkedVarieties: ["wush-wush", "pink-bourbon", "pacamara"],
    linkedCountries: ["COL", "ETH", "YEM"]
  },

  // --- Under Other ---
  {
    id: "papery-musty",
    name: "Papery & Musty",
    parent: "other",
    level: 2,
    color: "#57534e",
    description: "Cardboard, musty earth, or dry wood notes. Typically results from poor storage or paper filter taste.",
    chemicalCompounds: ["Geosmin", "trans-2-Nonenal", "Furfural"],
    brewingImpact: "Always rinse your paper filters thoroughly with boiling water. Store green beans in hermetic GrainPro bags.",
    linkedVarieties: ["robusta-commercial-clones"],
    linkedCountries: ["IDN", "VNM"]
  },
  {
    id: "chemical-notes",
    name: "Chemical Notes",
    parent: "other",
    level: 2,
    color: "#292524",
    description: "Medicinal phenolic, ashy, or petroleum-like aromatics. Indicates defects or contamination.",
    chemicalCompounds: ["Guaiacol", "Halophenols"],
    brewingImpact: "Chemical defects cannot be brewed out. Discard the batch and inspect green bean storage conditions.",
    linkedVarieties: ["robusta-commercial-clones"],
    linkedCountries: ["IDN", "VNM"]
  },

  // ==========================================
  // LEVEL 3: OUTERMOST SPECIFIC FLAVOUR NOTES (48 nodes)
  // ==========================================
  // --- Under Berry ---
  {
    id: "blackberry",
    name: "Blackberry",
    parent: "berry",
    level: 3,
    color: "#4c1d95",
    description: "Deep, dark, sweet berry note with complex fruit acidity. Classic indicator of Kenyan SL28 or slow-dried naturals.",
    chemicalCompounds: ["Ethyl lactate", "Butyl acetate"],
    brewingImpact: "Highlight with conical drippers and water high in magnesium to pull out dark fruit esters.",
    linkedVarieties: ["sl28", "wush-wush"],
    linkedCountries: ["KEN", "ETH"]
  },
  {
    id: "raspberry",
    name: "Raspberry",
    parent: "berry",
    level: 3,
    color: "#be185d",
    description: "Bright, tart, red berry flavor. Sharp and structural citric acidity.",
    chemicalCompounds: ["Raspberry ketone", "Citric acid"],
    brewingImpact: "Excellent on V60. Use slightly higher temperature (93°C) to draw sweetness and balance the tartness.",
    linkedVarieties: ["sl28", "pink-bourbon"],
    linkedCountries: ["KEN", "COL"]
  },
  {
    id: "blueberry",
    name: "Blueberry",
    parent: "berry",
    level: 3,
    color: "#1d4ed8",
    description: "Distinctive sweet blueberry pie aroma. Often found in natural-processed Ethiopian coffees (Yirgacheffe/Harrar).",
    chemicalCompounds: ["Methyl butyrate", "Ethyl isovalerate"],
    brewingImpact: "Avoid over-extracting. Keep grind size medium. Emphasize body and sweet esters using a slightly shorter ratio (1:15).",
    linkedVarieties: ["wush-wush", "sl28"],
    linkedCountries: ["ETH", "KEN"]
  },
  {
    id: "strawberry",
    name: "Strawberry",
    parent: "berry",
    level: 3,
    color: "#e11d48",
    description: "Sweet, juicy red strawberry character, common in carbonic maceration or anaerobic natural lots.",
    chemicalCompounds: ["Furaneol", "Ethyl methylphenylglycidate"],
    brewingImpact: "Brew on flat-bottom drippers with moderate agitation. Highlight the jammy strawberry sweetness.",
    linkedVarieties: ["pink-bourbon", "sidra"],
    linkedCountries: ["COL", "ETH"]
  },

  // --- Under Citrus Fruit ---
  {
    id: "lemon",
    name: "Lemon",
    parent: "citrus-fruit",
    level: 3,
    color: "#fef08a",
    description: "Sharp, clean, refreshing citric bite. Typical of high-altitude washed Kenyan and Ethiopian coffees.",
    chemicalCompounds: ["Citric acid", "Limonene"],
    brewingImpact: "Needs sufficient extraction to buffer the acidity. Grind slightly finer and use hotter water (93-94°C).",
    linkedVarieties: ["geisha", "sl28"],
    linkedCountries: ["ETH", "KEN"]
  },
  {
    id: "lime",
    name: "Lime",
    parent: "citrus-fruit",
    level: 3,
    color: "#a3e635",
    description: "Crisp, zesty citrus note, slightly herbal and tart. Common in washed Central American Geishas.",
    chemicalCompounds: ["Limonene", "Citral"],
    brewingImpact: "Use water with a moderate mineral composition. Paper filter separates oils to keep the lime note sharp.",
    linkedVarieties: ["geisha", "sl34"],
    linkedCountries: ["PAN", "GTM"]
  },
  {
    id: "grapefruit",
    name: "Grapefruit",
    parent: "citrus-fruit",
    level: 3,
    color: "#f43f5e",
    description: "Zesty citrus acidity combined with a pleasant, refreshing bitterness. Typical of high-altitude washed SL28/SL34.",
    chemicalCompounds: ["Nootkatone", "Citric acid"],
    brewingImpact: "Do not grind too fine; over-extracting can turn the pleasant grapefruit zest into harsh, dry bitterness.",
    linkedVarieties: ["sl28", "sl34"],
    linkedCountries: ["KEN", "TZA"]
  },
  {
    id: "orange",
    name: "Orange",
    parent: "citrus-fruit",
    level: 3,
    color: "#f97316",
    description: "Sweet, juice-like citrus note. Balanced sweetness and acidity, reminiscent of orange juice or tangerine.",
    chemicalCompounds: ["Limonene", "Octanal"],
    brewingImpact: "Highly soluble. Brew on Kalita Wave using a 1:16 ratio to highlight the juicy orange sweetness.",
    linkedVarieties: ["bourbon", "caturra", "pink-bourbon"],
    linkedCountries: ["COL", "SLV", "CRI"]
  },

  // --- Under Dried Fruit ---
  {
    id: "raisin",
    name: "Raisin",
    parent: "dried-fruit",
    level: 3,
    color: "#7f1d1d",
    description: "Sweet, dried dark grape character, indicating dense sugars and medium-dark sugar caramelization.",
    chemicalCompounds: ["Furfurals", "Isoprenoids"],
    brewingImpact: "Immersion brewing or Aeropress is perfect for emphasizing this concentrated dark sugar note.",
    linkedVarieties: ["bourbon", "caturra"],
    linkedCountries: ["COL", "BRA"]
  },
  {
    id: "fig",
    name: "Fig",
    parent: "dried-fruit",
    level: 3,
    color: "#991b1b",
    description: "Dense, earthy, jammy fruit note. Common in traditional natural coffees from East Africa or Yemen.",
    chemicalCompounds: ["Phenols", "Furan derivatives"],
    brewingImpact: "Brew at 91°C with low agitation. The goal is to draw out the deep sugar sweetness without bitterness.",
    linkedVarieties: ["wush-wush", "typica"],
    linkedCountries: ["ETH", "YEM"]
  },
  {
    id: "prune",
    name: "Prune",
    parent: "dried-fruit",
    level: 3,
    color: "#5c0606",
    description: "Rich, dried plum characteristics. Heavy sweetness, low acidity, and thick mouthfeel.",
    chemicalCompounds: ["Benzaldehyde", "Hexanoic acid"],
    brewingImpact: "Immersion or French Press brings out the heavy prune body and sugar structure beautifully.",
    linkedVarieties: ["bourbon", "mundo-novo"],
    linkedCountries: ["BRA", "SLV"]
  },

  // --- Under Other Fruit ---
  {
    id: "apple",
    name: "Apple",
    parent: "other-fruit",
    level: 3,
    color: "#86efac",
    description: "Clean pomaceous fruit note. Washed coffees from El Salvador or Colombia often feature apple-like malic acidity.",
    chemicalCompounds: ["Hexyl acetate", "Malic acid"],
    brewingImpact: "Emphasize clean malic acidity by using paper filters. Brew at 92°C with soft water.",
    linkedVarieties: ["caturra", "pacas", "sl14"],
    linkedCountries: ["SLV", "COL", "UGA"]
  },
  {
    id: "peach",
    name: "Peach",
    parent: "other-fruit",
    level: 3,
    color: "#fed7aa",
    description: "Delicate, sweet stone fruit note. Floral and sweet, typical of washed Geishas or high-end washed Ethiopians.",
    chemicalCompounds: ["Gamma-undecalactone", "Linalool"],
    brewingImpact: "Highly delicate. Use a coarse grind and low temperature (90-91°C) to highlight the soft peach sweetness.",
    linkedVarieties: ["geisha", "sidra"],
    linkedCountries: ["PAN", "ETH", "COL"]
  },
  {
    id: "cherry",
    name: "Cherry",
    parent: "other-fruit",
    level: 3,
    color: "#991b1b",
    description: "Sweet, tart red cherry note, common in anaerobic washed or carbonic maceration lots.",
    chemicalCompounds: ["Benzaldehyde", "Malic acid"],
    brewingImpact: "Maximize extraction on V60. A fine grind captures the bright cherry flavor and pleasant fruit acidity.",
    linkedVarieties: ["pink-bourbon", "wush-wush"],
    linkedCountries: ["COL", "ETH"]
  },
  {
    id: "pineapple",
    name: "Pineapple",
    parent: "other-fruit",
    level: 3,
    color: "#fde047",
    description: "Bright, exotic tropical fruit note with intense citric acidity and high sweetness.",
    chemicalCompounds: ["Ethyl butyrate", "Methyl butyrate"],
    brewingImpact: "Common in tropical anaerobic natural fermentations. Brew with fast flow rate to keep the acidity juicy.",
    linkedVarieties: ["sidra", "wush-wush"],
    linkedCountries: ["COL", "CRI"]
  },

  // --- Under Floral Notes ---
  {
    id: "jasmine",
    name: "Jasmine",
    parent: "floral-notes",
    level: 3,
    color: "#fff1f2",
    description: "Exquisite, perfume-like white blossom aroma. The absolute signature of high-altitude washed Panama Geisha.",
    chemicalCompounds: ["Benzyl acetate", "Linalool", "Methyl jasmonate"],
    brewingImpact: "Jasmine is extremely volatile. Brew immediately after grinding. Keep water temperature moderate (92°C).",
    linkedVarieties: ["geisha", "sidra"],
    linkedCountries: ["PAN", "ETH"]
  },
  {
    id: "rose",
    name: "Rose",
    parent: "floral-notes",
    level: 3,
    color: "#fda4af",
    description: "Sweet, elegant floral note reminiscent of fresh rose petals. Elegant and rare.",
    chemicalCompounds: ["Geraniol", "Phenylethyl alcohol"],
    brewingImpact: "Rinse filters. Use high quality water (low buffer) to prevent flatting out this highly delicate compound.",
    linkedVarieties: ["geisha", "sudan-rume"],
    linkedCountries: ["PAN", "COL"]
  },
  {
    id: "chamomile",
    name: "Chamomile",
    parent: "floral-notes",
    level: 3,
    color: "#fef08a",
    description: "Soft, honey-sweet herb floral aroma. Common in clean washed Pacamara or washed Geisha.",
    chemicalCompounds: ["Bisabolol", "Chamazulene"],
    brewingImpact: "Keep agitation low and use a medium-coarse grind to preserve the tea-like chamomile body.",
    linkedVarieties: ["geisha", "pacamara"],
    linkedCountries: ["SLV", "PAN"]
  },

  // --- Under Tea Notes ---
  {
    id: "black-tea",
    name: "Black Tea",
    parent: "tea-notes",
    level: 3,
    color: "#78350f",
    description: "Crisp black tea-like mouthfeel with delicate bergamot notes. Classic in high-altitude washed Ethiopians.",
    chemicalCompounds: ["Tea polyphenols", "Linalool oxides"],
    brewingImpact: "A fast flow rate on conical dripper emphasizes the clean black tea body and citrusy bergamot note.",
    linkedVarieties: ["geisha", "java"],
    linkedCountries: ["ETH", "PAN"]
  },
  {
    id: "green-tea",
    name: "Green Tea",
    parent: "tea-notes",
    level: 3,
    color: "#a7f3d0",
    description: "Clean, slightly herbal and astringent green tea leaf profile, typical of washed Central American lots.",
    chemicalCompounds: ["Hexanol", "Dimethyl sulfide"],
    brewingImpact: "Brew at slightly cooler temperatures (90°C) to keep the green tea clean and avoid drying bitterness.",
    linkedVarieties: ["geisha", "sl14"],
    linkedCountries: ["PAN", "GTM"]
  },

  // --- Under Brown Sugar ---
  {
    id: "caramel",
    name: "Caramel",
    parent: "brown-sugar",
    level: 3,
    color: "#b45309",
    description: "Rich, toasted sugar sweetness. Foundational in balanced specialty coffees.",
    chemicalCompounds: ["Maltol", "Caramelan"],
    brewingImpact: "Highly soluble. Maximize by target extraction yield of 20% using standard 1:16 ratio.",
    linkedVarieties: ["bourbon", "caturra"],
    linkedCountries: ["COL", "SLV"]
  },
  {
    id: "maple-syrup",
    name: "Maple Syrup",
    parent: "brown-sugar",
    level: 3,
    color: "#92400e",
    description: "Rich wood-sweetness and dark caramel. Thick, syrupy mouthfeel.",
    chemicalCompounds: ["Sotolon", "Cyclotene"],
    brewingImpact: "Brew using flat-bottom dripper and slightly longer extraction times to capture the syrupy body.",
    linkedVarieties: ["bourbon", "typica"],
    linkedCountries: ["COL", "CRI"]
  },
  {
    id: "molasses",
    name: "Molasses",
    parent: "brown-sugar",
    level: 3,
    color: "#451a03",
    description: "Deep, dark, bittersweet sugar note. Common in medium-dark roasts or heavy natural process lots.",
    chemicalCompounds: ["Furaneol", "Hydroxymethylfurfural"],
    brewingImpact: "Immersion brewing extracts molasses notes beautifully. Great in espresso extractions.",
    linkedVarieties: ["bourbon", "castillo"],
    linkedCountries: ["BRA", "COL"]
  },
  {
    id: "honey",
    name: "Honey",
    parent: "brown-sugar",
    level: 3,
    color: "#fbbf24",
    description: "Sweet, floral-sugar note, highly descriptive of honey-processed coffees.",
    chemicalCompounds: ["Phenylacetaldehyde", "Methyl phenylacetate"],
    brewingImpact: "Brew at 92°C with soft water. Highlight both the floral and sweet honey characteristics.",
    linkedVarieties: ["bourbon", "villa-sarchi", "caturra"],
    linkedCountries: ["CRI", "SLV"]
  },

  // --- Under Vanilla & Aromatics ---
  {
    id: "vanilla",
    name: "Vanilla",
    parent: "vanilla-sweet",
    level: 3,
    color: "#fef9c3",
    description: "Pure, sweet vanillin pod aroma. Extremely pleasant and common in medium roasts.",
    chemicalCompounds: ["Vanillin"],
    brewingImpact: "Highly stable and easily extracted. Provides foundational sweetness in the cup.",
    linkedVarieties: ["bourbon", "typica"],
    linkedCountries: ["COL", "GTM"]
  },
  {
    id: "sweet-aromatics",
    name: "Sweet Aromatics",
    parent: "vanilla-sweet",
    level: 3,
    color: "#fef08a",
    description: "Sweet extract-like aromatics, reminiscent of baking extracts or marshmallow.",
    chemicalCompounds: ["Aldehydes", "Esters"],
    brewingImpact: "Use standard brewing water. Buffers keep the cup clean and emphasize sweet aromatics.",
    linkedVarieties: ["bourbon", "caturra"],
    linkedCountries: ["COL", "CRI"]
  },

  // --- Under Nutty ---
  {
    id: "peanut",
    name: "Peanut",
    parent: "nutty",
    level: 3,
    color: "#ca8a04",
    description: "Roasted peanut or peanut butter note. Common in Brazilian commodity lots, sometimes a minor defect.",
    chemicalCompounds: ["Methylpyrazines"],
    brewingImpact: "Stable compound. Immersion brewing brings out peanut butter richness in Brazil naturals.",
    linkedVarieties: ["mundo-novo", "catuai"],
    linkedCountries: ["BRA", "HON"]
  },
  {
    id: "hazelnut",
    name: "Hazelnut",
    parent: "nutty",
    level: 3,
    color: "#b45309",
    description: "Creamy, sweet roasted hazelnut note. Highly desirable and common in washed South American coffees.",
    chemicalCompounds: ["Filbertone", "Dimethylpyrazine"],
    brewingImpact: "Provides excellent balance. Brew with Kalita Wave at 92°C to maximize sweetness and nut clarity.",
    linkedVarieties: ["bourbon", "caturra"],
    linkedCountries: ["COL", "PER"]
  },
  {
    id: "almond",
    name: "Almond",
    parent: "nutty",
    level: 3,
    color: "#fef3c7",
    description: "Sweet marzipan or almond paste aroma, indicating refined nut sweetness.",
    chemicalCompounds: ["Benzaldehyde"],
    brewingImpact: "Highlight with paper filter. Soft almond notes pair beautifully with malic apple acidity.",
    linkedVarieties: ["typica", "bourbon"],
    linkedCountries: ["GTM", "COL"]
  },
  {
    id: "walnut",
    name: "Walnut",
    parent: "nutty",
    level: 3,
    color: "#78350f",
    description: "Toasted walnut note, slightly dry and woody. Common in low-altitude Central American lots.",
    chemicalCompounds: ["Alkylpyrazines"],
    brewingImpact: "Keep brew ratio clean (1:16). Coarser grind prevents walnut drying astringency in the finish.",
    linkedVarieties: ["caturra", "mundo-novo"],
    linkedCountries: ["HON", "NIC"]
  },

  // --- Under Cocoa ---
  {
    id: "dark-chocolate",
    name: "Dark Chocolate",
    parent: "cocoa",
    level: 3,
    color: "#451a03",
    description: "Deep, bittersweet dark cacao character. Common in medium-dark roasts from Central and South America.",
    chemicalCompounds: ["Tetramethylpyrazine", "Pyrroles"],
    brewingImpact: "Brew at 89-91°C to avoid pushing bitter guaiacol notes. Excellent for espresso.",
    linkedVarieties: ["bourbon", "typica", "castillo"],
    linkedCountries: ["COL", "BRA", "GTM"]
  },
  {
    id: "milk-chocolate",
    name: "Milk Chocolate",
    parent: "cocoa",
    level: 3,
    color: "#92400e",
    description: "Creamy, sweet chocolate note with high sugar density. Highly popular in specialty blends.",
    chemicalCompounds: ["Isovaleraldehyde", "Furans"],
    brewingImpact: "Forgiving to extract. Target standard 1:16 ratio on V60 or Kalita. Great with milk.",
    linkedVarieties: ["bourbon", "caturra"],
    linkedCountries: ["COL", "BRA"]
  },
  {
    id: "cocoa-powder",
    name: "Cocoa Powder",
    parent: "cocoa",
    level: 3,
    color: "#78350f",
    description: "Dry, powdery cocoa notes, slightly astringent but sweet. Typical of washed Central American coffees.",
    chemicalCompounds: ["Trimethylpyrazine", "Amyl alcohols"],
    brewingImpact: "Keep extraction standard. Coarser grind prevents dry cocoa powder dust mouthfeel in the finish.",
    linkedVarieties: ["bourbon", "caturra"],
    linkedCountries: ["GTM", "HON"]
  },

  // --- Under Brown Spice ---
  {
    id: "cinnamon",
    name: "Cinnamon",
    parent: "brown-spice",
    level: 3,
    color: "#9a3412",
    description: "Sweet, warm cinnamon spice aroma, common in anaerobic lots and dynamic fermentations.",
    chemicalCompounds: ["Cinnamaldehyde"],
    brewingImpact: "Highly water soluble. Brew at 91°C with low agitation. Maximize cinnamon aromatics.",
    linkedVarieties: ["pink-bourbon", "sidra"],
    linkedCountries: ["COL", "CRI"]
  },
  {
    id: "clove",
    name: "Clove",
    parent: "brown-spice",
    level: 3,
    color: "#7c2d12",
    description: "Warm, spicy eugenol-like aromatics. Can add deep complexity in minor percentages.",
    chemicalCompounds: ["Eugenol"],
    brewingImpact: "Common in Yemen or some Indonesia lots. Keep grind medium to avoid heavy phenol notes.",
    linkedVarieties: ["k7", "pink-bourbon"],
    linkedCountries: ["YEM", "IDN"]
  },
  {
    id: "nutmeg",
    name: "Nutmeg",
    parent: "brown-spice",
    level: 3,
    color: "#5c1d11",
    description: "Warm, sweet, earthy spice note. Common in Central American Pacamara lots.",
    chemicalCompounds: ["Myristicin"],
    brewingImpact: "Extremely complex. Brew on Kalita Wave using soft water to highlight sweet spice complexity.",
    linkedVarieties: ["pacamara", "bourbon"],
    linkedCountries: ["SLV", "GTM"]
  },

  // --- Under Pungent ---
  {
    id: "black-pepper",
    name: "Black Pepper",
    parent: "pungent",
    level: 3,
    color: "#475569",
    description: "Sharp, spicy black pepper bite. Common in some Indian monsooned lots or East African washed lots.",
    chemicalCompounds: ["Piperine"],
    brewingImpact: "Keep extraction standard. Finer grind extracts more piperine, turning pepper too sharp.",
    linkedVarieties: ["sl34", "robusta-commercial-clones"],
    linkedCountries: ["IND", "KEN"]
  },
  {
    id: "ginger",
    name: "Ginger",
    parent: "pungent",
    level: 3,
    color: "#fed7aa",
    description: "Sharp, spicy ginger zest, slightly sweet and warm. Common in washed Kenyan coffees.",
    chemicalCompounds: ["Gingerol", "Zingerone"],
    brewingImpact: "Best brewed via pour-over to highlight the clean, spicy ginger acidity.",
    linkedVarieties: ["sl28", "sl34"],
    linkedCountries: ["KEN", "TZA"]
  },

  // --- Under Roasted Notes ---
  {
    id: "cereal",
    name: "Cereal",
    parent: "roasted-notes",
    level: 3,
    color: "#d4d4d8",
    description: "Toasted malt, raw grain, or cereal notes. Indicates high Maillard reaction compounds.",
    chemicalCompounds: ["Pyrazines", "Maltol"],
    brewingImpact: "Lower water temperature to 89°C to keep the toasted grain flavor sweet, not bitter.",
    linkedVarieties: ["castillo", "catimor"],
    linkedCountries: ["BRA", "VNM"]
  },
  {
    id: "toast",
    name: "Toast",
    parent: "roasted-notes",
    level: 3,
    color: "#e4e4e7",
    description: "Caramelized toasted bread aroma. Pleasant and common in balanced medium roasts.",
    chemicalCompounds: ["2-Acetylpyridine"],
    brewingImpact: "Extremely forgiving. Provides nice breadiness. Excellent for filter or espresso.",
    linkedVarieties: ["bourbon", "typica"],
    linkedCountries: ["COL", "PER"]
  },

  // --- Under Smoky/Tobacco ---
  {
    id: "tobacco",
    name: "Tobacco",
    parent: "smoky-tobacco",
    level: 3,
    color: "#71717a",
    description: "Toasted tobacco leaf aroma. Heavy and sweet, common in volcanic soils like Sumatra.",
    chemicalCompounds: ["Nicotianine", "Solanone"],
    brewingImpact: "Immersion or French Press maximizes the tobacco leaf sweetness and syrupy body.",
    linkedVarieties: ["robusta-commercial-clones", "wet-hulled-derived"],
    linkedCountries: ["IDN", "IND"]
  },
  {
    id: "burnt",
    name: "Burnt",
    parent: "smoky-tobacco",
    level: 3,
    color: "#09090b",
    description: "Charcoal, burnt toast, or ash notes. Directly resulting from dark roasting.",
    chemicalCompounds: ["Guaiacol", "Pyrene"],
    brewingImpact: "Use cooler water (85°C) and coarse grind to avoid extracting harsh burnt carbon compounds.",
    linkedVarieties: ["robusta-commercial-clones"],
    linkedCountries: ["VNM", "IDN"]
  },

  // --- Under Greenish ---
  {
    id: "grass",
    name: "Fresh Grass",
    parent: "greenish",
    level: 3,
    color: "#34d399",
    description: "Freshly cut green grass aroma. Typical of under-developed roasts or fresh crops.",
    chemicalCompounds: ["cis-3-Hexenol", "Hexanal"],
    brewingImpact: "Avoid cold extractions. Hot water (94°C) extracts sugars to help mask grassiness.",
    linkedVarieties: ["timor-hybrid", "catimor"],
    linkedCountries: ["TLS", "VNM"]
  },
  {
    id: "pea",
    name: "Green Pea",
    parent: "greenish",
    level: 3,
    color: "#6ee7b7",
    description: "Raw green pea or bean-like notes. Regarded as a roast development defect.",
    chemicalCompounds: ["2-Isopropyl-3-methoxypyrazine"],
    brewingImpact: "Cannot be resolved by brewing. Hot water extraction is recommended.",
    linkedVarieties: ["catimor", "anacafe-14"],
    linkedCountries: ["VNM", "CHN"]
  },
  {
    id: "cucumber",
    name: "Cucumber",
    parent: "greenish",
    level: 3,
    color: "#a7f3d0",
    description: "Fresh, watery cucumber note. Can add unique brightness to some light roasts.",
    chemicalCompounds: ["2,6-Nonadienal"],
    brewingImpact: "Brew immediately after grinding on a quick pour-over. Keeps cucumber note crisp.",
    linkedVarieties: ["geisha", "sl28"],
    linkedCountries: ["PAN", "KEN"]
  },

  // --- Under Organic Acids ---
  {
    id: "citric-acid",
    name: "Citric Acid",
    parent: "sour-acid",
    level: 3,
    color: "#fef08a",
    description: "Bright, sparkling lemon-lime acidity. Defines washed Kenyan and Ethiopian lots.",
    chemicalCompounds: ["Citric acid"],
    brewingImpact: "Acids extract fast. Grind slightly finer and use hotter water (93-94°C) to buffer citric sourness.",
    linkedVarieties: ["sl28", "geisha"],
    linkedCountries: ["KEN", "ETH"]
  },
  {
    id: "malic-acid",
    name: "Malic Acid",
    parent: "sour-acid",
    level: 3,
    color: "#bbf7d0",
    description: "Clean, crisp apple-like acidity. Found in washed Central American Arabica.",
    chemicalCompounds: ["Malic acid"],
    brewingImpact: "Use paper filter to keep malic acidity clean. Excellent in Chemex extractions.",
    linkedVarieties: ["caturra", "pacas"],
    linkedCountries: ["SLV", "COL"]
  },
  {
    id: "lactic-acid",
    name: "Lactic Acid",
    parent: "sour-acid",
    level: 3,
    color: "#fef9c3",
    description: "Smooth, creamy yogurt-like acidity. Typical of lactic fermentation methods.",
    chemicalCompounds: ["Lactic acid"],
    brewingImpact: "Lactic acid gives roundness. Immersion or AeroPress highlights the creamy lactic body.",
    linkedVarieties: ["pink-bourbon", "sidra"],
    linkedCountries: ["COL", "CRI"]
  },

  // --- Under Alcohol & Ferment ---
  {
    id: "winey",
    name: "Winey",
    parent: "alcohol-fermented",
    level: 3,
    color: "#881337",
    description: "Deep red wine-like acidity and body. Common in natural Ethiopians or anaerobics.",
    chemicalCompounds: ["Ethyl acetate", "Higher alcohols"],
    brewingImpact: "Highly soluble. Keep grind medium-coarse and brew on flat-bottom dripper.",
    linkedVarieties: ["wush-wush", "pink-bourbon"],
    linkedCountries: ["ETH", "COL"]
  },
  {
    id: "whiskey",
    name: "Whiskey",
    parent: "alcohol-fermented",
    level: 3,
    color: "#b45309",
    description: "Rich, barrel-aged whiskey notes. Often arises in yeast-infused or barrel-aged lots.",
    chemicalCompounds: ["Whiskey lactone", "Isoamyl alcohol"],
    brewingImpact: "Intense note. Keep extraction standard. Fits beautifully when brewed as a cold brew.",
    linkedVarieties: ["wush-wush", "pacamara"],
    linkedCountries: ["COL", "ECU"]
  },

  // --- Under Papery/Musty ---
  {
    id: "earthy-musty",
    name: "Earthy / Musty",
    parent: "papery-musty",
    level: 3,
    color: "#44403c",
    description: "Wet soil, musty cellar, or geosmin note. Common in wet-hulled Sumatran lots.",
    chemicalCompounds: ["Geosmin", "2-Methylisoborneol"],
    brewingImpact: "Indicates process style. Immersion accentuates Sumatra earthy body. Pre-rinse filter.",
    linkedVarieties: ["robusta-commercial-clones", "wet-hulled-derived"],
    linkedCountries: ["IDN", "VNM"]
  },
  {
    id: "wood",
    name: "Wood",
    parent: "papery-musty",
    level: 3,
    color: "#8c7853",
    description: "Dry, pencil-shaving wood notes. Indicates old crop (aged green beans) or under-development.",
    chemicalCompounds: ["Furfural", "Guaiene"],
    brewingImpact: "Rinse filters. Use hotter water to push any remaining sweet caramel compounds.",
    linkedVarieties: ["robusta-commercial-clones"],
    linkedCountries: ["VNM", "TLS"]
  },

  // --- Under Chemical Notes ---
  {
    id: "phenolic",
    name: "Phenolic",
    parent: "chemical-notes",
    level: 3,
    color: "#78716c",
    description: "Medicinal, Band-Aid, or chemical antiseptic note. Always regarded as a major processing defect.",
    chemicalCompounds: ["Guaiacol", "4-Vinylguaiacol"],
    brewingImpact: "Severe defect. Cannot be brewed out. Discard the batch and clean equipment.",
    linkedVarieties: ["robusta-commercial-clones"],
    linkedCountries: ["IDN", "VNM"]
  }
];
