import { RoastingPhase, RoastLevel, RoasterType } from "@/types/roasting";

export const roastingPhases: RoastingPhase[] = [
  {
    id: "charge",
    name: "Charge & Drop",
    tempRange: "180°C - 210°C (356°F - 410°F)",
    duration: "0:00",
    description: "The initial moment when green coffee beans are loaded into the pre-heated roaster drum. The temperature reading inside the drum drops instantly.",
    chemicalChanges: "Thermodynamic shock. The moisture in the beans begins to absorb heat, transitioning the beans from room temp to roasting temperature.",
    visualState: "Beans are raw, pale green or yellow-green, dense, and have a grassy, earthy smell."
  },
  {
    id: "turning-point",
    name: "Turning Point",
    tempRange: "80°C - 100°C (176°F - 212°F)",
    duration: "1:00 - 1:30",
    description: "The thermal equilibrium point where the roaster's air temperature sensor matches the surface temperature of the cooling beans. The temperature curve stops falling and begins its upward climb.",
    chemicalChanges: "Conduction heat transfer begins. Free water inside the bean's structure is heated toward the boiling point.",
    visualState: "Beans turn a lighter shade of green/white, expanding slightly."
  },
  {
    id: "drying",
    name: "Drying Phase",
    tempRange: "100°C - 150°C (212°F - 302°F)",
    duration: "4:00 - 5:00",
    description: "The first major phase of roasting where water content (normally 10-12% of the green bean) evaporates as steam. A critical phase because roasting cannot truly begin until the bean is dried.",
    chemicalChanges: "Moisture evaporation, pressure building inside the bean cell structure. Chlorophyll begins to degrade.",
    visualState: "Beans turn from light green to yellow, emitting an aroma similar to wet hay or warm bread."
  },
  {
    id: "maillard",
    name: "Maillard Reaction",
    tempRange: "150°C - 170°C (302°F - 338°F)",
    duration: "2:00 - 3:00",
    description: "The reaction between amino acids and reducing sugars. This reaction creates hundreds of new flavor compounds and melanoidins, which color the beans brown.",
    chemicalChanges: "Synthesis of aromatic compounds (furanones, pyrazines). Acidity increases as organic acids (like citric and malic) are synthesized, while chlorogenic acids begin to break down.",
    visualState: "Beans transition from yellow to light brown. The seam on the flat side begins to open, and chaff (silverskin) is shed."
  },
  {
    id: "caramelization",
    name: "Caramelization",
    tempRange: "170°C - 196°C (338°F - 385°F)",
    duration: "1:30 - 2:30",
    description: "Thermal decomposition of sucrose. Sucrose breaks down into simpler sugars and complex caramelans, adding sweetness, body, and complex nutty/caramel notes.",
    chemicalChanges: "Carbon dioxide gas builds up within the bean. Cellular structures begin to weaken under pressure, and organic acids start to degrade, mellowing the sharp acidity.",
    visualState: "Beans turn a rich chestnut brown. Aroma changes from toasted bread to sweet, nutty, and sugary caramel."
  },
  {
    id: "first-crack",
    name: "First Crack",
    tempRange: "196°C - 200°C (385°F - 392°F)",
    duration: "0:30 - 1:00",
    description: "An audible popping sound (similar to popcorn) caused by steam and CO2 pressure rupturing the cellulose walls of the bean. The reaction shifts from endothermic (absorbing heat) to exothermic (releasing heat).",
    chemicalChanges: "Cellular expansion. Volatile gases are expelled. Free water is almost completely gone. This is the minimum point for edible coffee (light roasts).",
    visualState: "Beans rapidly expand in volume (up to 50% larger), surface wrinkles smooth out, and the seam splits open."
  },
  {
    id: "development",
    name: "Development Phase",
    tempRange: "200°C - 224°C (392°F - 435°F)",
    duration: "1:30 - 3:00",
    description: "The phase between the first crack and the end of the roast. This is the roaster's primary window to control the balance between acidity, sweetness, and bitterness by adjusting heat application.",
    chemicalChanges: "Rapid thermal decomposition. Trigonelline breaks down into nicotinic acid and pyridines. Caramelization deepens while acidity declines.",
    visualState: "Beans range from medium brown to dark brown. The surface remains dry and matte."
  },
  {
    id: "second-crack",
    name: "Second Crack",
    tempRange: "224°C - 230°C (435°F - 446°F)",
    duration: "0:30 - 1:00",
    description: "A second, sharper crackling sound. This is a purely physical cracking of the woody cellulose matrix itself as it carbonizes and releases carbon dioxide and lipids.",
    chemicalChanges: "Pyrolysis. The cellular walls collapse completely, forcing oils (lipids) to migrate to the surface. Sugars are almost completely carbonized.",
    visualState: "Beans turn dark brown to oily black. A shiny, slick coating of coffee oil covers the surface. Aroma turns smoky, carbonaceous, and intense."
  }
];

export const roastLevels: RoastLevel[] = [
  {
    id: "light",
    name: "Light Roast",
    alternativeNames: ["Cinnamon", "New England", "Light City"],
    tempRange: "196°C - 205°C (385°F - 401°F)",
    description: "Pulled immediately after First Crack finishes. The bean is light brown with a dry, matte surface. This roast level preserves the original terroir, origin character, and delicate enzymatic properties of the coffee seed.",
    flavorNotes: [
      "Pronounced citrus and floral notes",
      "Tea-like, light body",
      "High, vibrant fruit acidity",
      "Very low bitterness"
    ],
    chemicalStatus: "Retains high concentrations of chlorogenic acids (vibrant acidity) and organic compounds. Sucrose has started to decompose but has not caramelized deeply, meaning sweetness is crisp and light.",
    brewingGuide: "Best suited for drip, pour-over (V60, Chemex), or AeroPress. Use water temperatures of 93°C–96°C to extract the dense, less soluble beans.",
    metrics: {
      acidity: 5,
      body: 2,
      sweetness: 3,
      bitterness: 1
    },
    imageUrl: "/images/roasting/light.png",
    hexColor: "#c29b6c"
  },
  {
    id: "medium",
    name: "Medium Roast",
    alternativeNames: ["City", "American", "Breakfast"],
    tempRange: "210°C - 215°C (410°F - 419°F)",
    description: "Pulled mid-way between First and Second Crack. This is the standard for specialty coffee cupping, providing a harmonious balance between origin acidity and roast-induced sweetness.",
    flavorNotes: [
      "Balanced stone fruit and berry acidity",
      "Caramel and toasted nut sweetness",
      "Creamy, medium mouthfeel",
      "Clean, smooth finish"
    ],
    chemicalStatus: "Caramelization is at its peak, transforming sugars into complex caramelans. Chlorogenic acids are halved, creating a rounded, balanced acidity. Trigonelline has decomposed to form rich, aromatic volatiles.",
    brewingGuide: "Extremely versatile. Excels in filter/pour-over, drip brewers, and espresso. Very forgiving and highly soluble.",
    metrics: {
      acidity: 3.5,
      body: 3.5,
      sweetness: 5,
      bitterness: 2
    },
    imageUrl: "/images/roasting/medium.png",
    hexColor: "#93653b"
  },
  {
    id: "medium-dark",
    name: "Medium-Dark Roast",
    alternativeNames: ["Full City", "Vienna"],
    tempRange: "220°C - 225°C (428°F - 437°F)",
    description: "Pulled at the very onset of Second Crack. The beans are rich, dark chestnut brown with a light sheen of oil starting to emerge. Origin notes begin to fade, replaced by roasting-induced flavors.",
    flavorNotes: [
      "Low, muted acidity",
      "Bittersweet chocolate and cocoa notes",
      "Heavy, syrupy body",
      "Roasty, spicy undertones"
    ],
    chemicalStatus: "Pyrolysis is accelerating. Acidity is heavily reduced as citric and malic acids disintegrate. Lipids (oils) begin to leak through the fractured cellular matrix onto the surface. Carbon dioxide release is highly active.",
    brewingGuide: "Excellent for espresso, French Press, and stovetop moka pots. Provides a rich, heavy cup with thick crema and low acidity.",
    metrics: {
      acidity: 2,
      body: 4.5,
      sweetness: 4,
      bitterness: 3.5
    },
    imageUrl: "/images/roasting/medium-dark.png",
    hexColor: "#613c1c"
  },
  {
    id: "dark",
    name: "Dark Roast",
    alternativeNames: ["French", "Italian", "Spanish"],
    tempRange: "230°C - 245°C (446°F - 473°F)",
    description: "Pulled well into Second Crack or beyond. The beans are glossy, oily, and dark charcoal black-brown. The flavor is dominated entirely by the roast process, with origin characteristics completely burnt away.",
    flavorNotes: [
      "Very low to zero acidity",
      "Smoky, carbonaceous flavor",
      "Thick, heavy, but sometimes thin body due to cellulose collapse",
      "High, sharp bitterness"
    ],
    chemicalStatus: "Cellulose structure collapses. Sugar has carbonized completely, leaving charcoal-like bitterness. Volatile compounds have evaporated, and the bean is light, brittle, and fully coated in coffee oils.",
    brewingGuide: "Primarily used for traditional espresso blends, French Press, or cold brew. Requires lower brewing temperatures (85°C–89°C) to avoid extracting harsh, ash-like compounds.",
    metrics: {
      acidity: 1,
      body: 4,
      sweetness: 2,
      bitterness: 5
    },
    imageUrl: "/images/roasting/dark.png",
    hexColor: "#332011"
  }
];

export const roasterTypes: RoasterType[] = [
  {
    name: "Drum Roaster",
    mechanism: "Beans rotate inside a heated metal drum. Heat is transferred via conduction (contact with hot metal walls, ~30-40%) and convection (hot air flowing through the drum, ~60-70%).",
    pros: [
      "Creates a heavy, complex body due to conduction contact",
      "Allows excellent heat retention and thermal mass stability",
      "Excellent control over roasting phases and air-flow speed"
    ],
    cons: [
      "Slower response time to temperature adjustments",
      "Risk of scorching or tipping if the drum is spun too slow or heated too high",
      "Requires regular cleaning to prevent oily buildup on drum walls"
    ]
  },
  {
    name: "Fluid-Bed Roaster",
    mechanism: "Beans are suspended in a high-velocity column of hot air (fluidized bed). Heat is transferred almost entirely (~90-95%) via convection (hot air). Also known as air roasters.",
    pros: [
      "Very uniform roast with virtually zero chance of scorched spots",
      "Extremely fast response times; temperature changes affect beans instantly",
      "Quick roast times and efficient chaff separation"
    ],
    cons: [
      "Can result in a lighter, less complex body than drum roasters",
      "Relies heavily on continuous electrical/fan power to keep beans suspended",
      "Harder to roast large, heavy commercial batches evenly without massive airflow"
    ]
  }
];
