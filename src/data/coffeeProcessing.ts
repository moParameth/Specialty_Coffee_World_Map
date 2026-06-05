import { CoffeeProcessingMethod } from "@/types/processing";

export const coffeeProcessingMethods: CoffeeProcessingMethod[] = [
  {
    id: "washed",
    name: "Washed",
    alternativeNames: ["Wet Process"],
    summary: "The outer skin and pulp are removed mechanically before the coffee is fermented in water to break down the mucilage, then washed clean and dried.",
    description: "Washed processing is the standard for specialty coffee focusing on origin representation. By stripping the fruit skin and pulp immediately after harvesting, and then fermenting and washing away the remaining sticky mucilage, the final flavor is driven purely by the bean's genetics, soil, and terroir. It requires a significant amount of water and mechanical equipment, making it a capital-intensive but reliable method.",
    flavorProfile: {
      description: "Characterized by high flavor clarity, clean mouthfeel, and bright, pronounced acidity. It highlights delicate floral and bright citrus notes without fruit fermentation flavors.",
      descriptors: ["Citrus", "Jasmine", "Floral", "Clean", "Bright", "Black Tea"]
    },
    metrics: {
      difficulty: 3,
      waterUsage: 5,
      dryingDuration: "7-12 Days",
      flavorClarity: 5,
      body: 2,
      sweetness: 3
    },
    steps: [
      {
        name: "Harvesting & Floating",
        duration: "Day 1",
        description: "Ripe coffee cherries are hand-picked and dumped into water tanks or channels. Underripe cherries, leaves, and debris float to the top and are skimmed off, while dense, ripe cherries sink to the bottom."
      },
      {
        name: "De-pulping",
        duration: "Day 1",
        description: "The sorted cherries pass through a de-pulper machine that squeezes the seed out of the skin. The skin is discarded (often composted), leaving the seeds covered in a sticky, sugar-rich mucilage layer."
      },
      {
        name: "Fermentation",
        duration: "12-36 Hours",
        description: "The mucilage-covered seeds are placed into fermentation tanks. Natural microflora (bacteria and yeasts) break down the sticky pectins, loosening the mucilage from the parchment shell."
      },
      {
        name: "Washing",
        duration: "Day 2",
        description: "The coffee is flushed through long, sloping water channels. Agitated with paddles, the loosened mucilage is completely washed away, leaving clean parchment coffee."
      },
      {
        name: "Drying",
        duration: "7-12 Days",
        description: "The wet parchment is spread on concrete patios or raised drying beds. It is turned regularly to ensure even drying until moisture content drops to 10-12%."
      },
      {
        name: "Dry Milling",
        duration: "Variable",
        description: "Prior to export, the dried parchment is fed into a hulling machine that strips away the papery parchment layer, exposing the clean green coffee beans ready for grading and packing."
      }
    ],
    pros: [
      "Highest flavor clarity and expression of terroir",
      "Very consistent and uniform quality control",
      "Lower risk of mold or wild fermentation defects"
    ],
    cons: [
      "Extremely high water consumption, leading to environmental wastewater issues if not treated",
      "Requires expensive machinery (de-pulpers, channels, tanks)",
      "Can yield less body and sweetness compared to natural processes"
    ]
  },
  {
    id: "natural",
    name: "Natural",
    alternativeNames: ["Dry Process"],
    summary: "Whole coffee cherries are dried under the sun with skin and pulp intact, allowing fruit sugars and compounds to absorb directly into the seed.",
    description: "The natural process is the oldest and most traditional method of preparing coffee, common in regions with limited water access like Ethiopia and parts of Brazil. Ripe cherries are dried whole. Because the seed remains in contact with the fermenting fruit pulp for weeks, it absorbs sugars and organic compounds, resulting in intense fruit-forward flavors and a heavy, syrupy body.",
    flavorProfile: {
      description: "Presents a heavy, winey mouthfeel, low to medium acidity, and intense sweetness. It often exhibits strong berry, tropical fruit, and chocolatey characteristics.",
      descriptors: ["Blueberry", "Strawberry", "Winey", "Chocolate", "Tropical Fruit", "Heavy Body"]
    },
    metrics: {
      difficulty: 4,
      waterUsage: 1,
      dryingDuration: "14-30 Days",
      flavorClarity: 2,
      body: 5,
      sweetness: 5
    },
    steps: [
      {
        name: "Harvesting & Sorting",
        duration: "Day 1",
        description: "Cherries are hand-harvested. Since the fruit remains on the seed, meticulous sorting is critical to ensure only perfectly ripe cherries are dried, preventing mold and over-fermented flavors."
      },
      {
        name: "Spreading on Beds",
        duration: "Day 1",
        description: "Whole cherries are spread in thin layers on raised African drying beds or concrete patios directly under the sun."
      },
      {
        name: "Sun Drying & Turning",
        duration: "14-30 Days",
        description: "Cherries dry slowly as whole fruits. Workers turn them hourly to prevent mold, rot, or uneven fermentation. The cherries gradually change from red to dark purple, and finally to hard, brown dried husks."
      },
      {
        name: "Moisture Stabilization",
        duration: "2-4 Weeks",
        description: "The dried cherries ('dry pods') are stored in sacks or silos to rest (cure), allowing the moisture level across all beans to equalize before milling."
      },
      {
        name: "Hulling & Milling",
        duration: "Variable",
        description: "The dry pods are run through a huller that strips away the dried skin, pulp, and parchment in a single pass, revealing the green coffee beans."
      }
    ],
    pros: [
      "Extremely low water footprint, making it eco-friendly",
      "High sweetness, body, and intense fruit flavors",
      "No expensive wet-milling machinery required"
    ],
    cons: [
      "Highly susceptible to weather changes (rain or humidity can ruin the harvest)",
      "High risk of mold or wild, vinegar-like fermentation defects",
      "Lower cup clarity and can mask the delicate nuances of coffee varieties"
    ]
  },
  {
    id: "honey",
    name: "Honey",
    alternativeNames: ["Pulped Natural", "Semi-Washed"],
    summary: "The outer skin is removed, but a portion of sticky mucilage is left on the parchment during drying, oxidizing into a golden, reddish, or black sticky coating.",
    description: "Popularized in Costa Rica, Honey processing sits between washed and natural. The coffee skin is removed (pulped), but the sugary mucilage (referred to as honey or 'miel') is left on the bean. Depending on how much mucilage remains and how it is dried, it is categorized as White, Yellow, Red, or Black Honey. Less mucilage and faster drying yields White/Yellow; more mucilage and shaded, slower drying yields Red/Black.",
    flavorProfile: {
      description: "Combines the clean profile of a washed coffee with the sweetness and body of a natural. Tends to showcase notes of stone fruits, honey, caramel, and a creamy mouthfeel.",
      descriptors: ["Honey", "Caramel", "Peach", "Plum", "Creamy", "Red Apple"]
    },
    metrics: {
      difficulty: 4,
      waterUsage: 2,
      dryingDuration: "10-18 Days",
      flavorClarity: 3,
      body: 4,
      sweetness: 4
    },
    steps: [
      {
        name: "Selective Harvesting",
        duration: "Day 1",
        description: "Harvesting must be highly selective, targeting cherries with high sugar content (Brix level) to ensure the mucilage performs well during drying."
      },
      {
        name: "De-pulping (Mucilage Control)",
        duration: "Day 1",
        description: "The outer skin is mechanically removed. The de-pulper is calibrated to leave a specific percentage of mucilage on the parchment. (White Honey: ~10%, Yellow: ~20-50%, Red: ~50-80%, Black: ~80-100%)."
      },
      {
        name: "Spread Drying",
        duration: "Day 2",
        description: "The sticky parchment is spread onto raised beds. It immediately begins to oxidize and clump together due to the high sugar content."
      },
      {
        name: "Raking & Shade Management",
        duration: "10-18 Days",
        description: "To prevent mold and fermentation rot, workers must rake the sticky beans constantly. Black honey is dried slowly under shade tarps, while White/Yellow honey is dried quickly in open sun."
      },
      {
        name: "Dry Hulling",
        duration: "Variable",
        description: "Once dried to 11% moisture, the sticky, hardened mucilage layer and parchment are milled off, exposing the polished green beans."
      }
    ],
    pros: [
      "Uses significantly less water than washed processing",
      "Creates a unique, balanced flavor profile blending body and clarity",
      "Higher market premiums for farmers producing Red or Black Honey"
    ],
    cons: [
      "Extremely labor-intensive; sticking beans require constant raking",
      "High risk of insect damage and mold during the sticky drying stage",
      "Inconsistent drying if not managed meticulously"
    ]
  },
  {
    id: "anaerobic",
    name: "Anaerobic Fermentation",
    alternativeNames: ["Anerobic Fermented", "Oxygen-Free Fermentation"],
    summary: "Coffee is sealed in airtight tanks, excluding oxygen to encourage anaerobic microbes to break down sugars, producing unique organic acids.",
    description: "Anaerobic fermentation is a modern specialty coffee technique. By sealing coffee (either whole cherries or depulped parchment) in oxygen-depleted stainless steel or plastic tanks, anaerobic microbes (like lactic acid bacteria) thrive. This leads to the production of high amounts of lactic and other organic acids, completely shifting the sensory profile toward exotic, intense, and spice-like notes.",
    flavorProfile: {
      description: "Boasts a highly complex, wild acidity, thick syrupy mouthfeel, and unusual spice and tropical notes. Expect intense aromas of cinnamon, cacao nibs, pineapple, and clove.",
      descriptors: ["Cinnamon", "Clove", "Pineapple", "Cacao Nibs", "Syrupy", "Rum"]
    },
    metrics: {
      difficulty: 5,
      waterUsage: 3,
      dryingDuration: "10-20 Days",
      flavorClarity: 3,
      body: 4,
      sweetness: 5
    },
    steps: [
      {
        name: "Harvesting & Tank Prep",
        duration: "Day 1",
        description: "Cherries are harvested and sorted. They can be placed in the tank as whole cherries (Anaerobic Natural) or de-pulped first (Anaerobic Washed)."
      },
      {
        name: "Sealing & Purging",
        duration: "Day 1",
        description: "The coffee is loaded into food-grade plastic barrels or stainless steel tanks. The lid is sealed airtight. A one-way valve allows carbon dioxide (released during fermentation) to escape while preventing oxygen from entering."
      },
      {
        name: "Monitored Fermentation",
        duration: "24-120 Hours",
        description: "The coffee ferments in the oxygen-free environment. Producers monitor temperature, pH, and sugar levels. The pressure inside the tank increases, forcing juices and sugars back into the seed."
      },
      {
        name: "Discharge & Washing",
        duration: "Day 2-5",
        description: "The tanks are opened, emitting an intense alcoholic, fruity aroma. If processing as anaerobic washed, the coffee is washed to remove residue; if natural, it proceeds straight to drying."
      },
      {
        name: "Slow Drying",
        duration: "10-20 Days",
        description: "The coffee is spread onto drying beds, often under shade canopy, to allow a slow moisture release and lock in the volatile aroma compounds."
      }
    ],
    pros: [
      "Creates incredibly distinct, exotic, and high-scoring flavor profiles",
      "Provides precise control over the fermentation environment (pH, temperature)",
      "Commands premium prices in specialty coffee competitions"
    ],
    cons: [
      "Requires expensive equipment, training, and instrumentation (pH meters, sealed tanks)",
      "High risk of ruined batches; over-fermentation can taste like vinegar or paint thinner",
      "Very long fermentation window increases production bottlenecks"
    ]
  },
  {
    id: "carbonic-maceration",
    name: "Carbonic Maceration",
    alternativeNames: ["CM Process"],
    summary: "Inspired by winemaking, whole cherries are placed in sealed tanks flushed with carbon dioxide gas, initiating fermentation from inside the fruit.",
    description: "Borrowed from the Beaujolais wine region, Carbonic Maceration involves placing intact, ripe coffee cherries into a sealed tank, which is then pressurized by injecting carbon dioxide (CO2) gas to purge all oxygen. This forces an intracellular fermentation, where the fruit cells break down sugars from the inside out, producing extremely clean, wine-like, and bubblegum-like flavor compounds.",
    flavorProfile: {
      description: "Presents a sparkling, effervescent, wine-like acidity, highly intense red fruit flavors, and unique candy-like or floral aromas. Very distinct and structured.",
      descriptors: ["Red Wine", "Raspberry", "Bubblegum", "Effervescent", "Stone Fruit", "Florals"]
    },
    metrics: {
      difficulty: 5,
      waterUsage: 2,
      dryingDuration: "12-22 Days",
      flavorClarity: 4,
      body: 3,
      sweetness: 4
    },
    steps: [
      {
        name: "Intact Cherry Selection",
        duration: "Day 1",
        description: "Producers select only perfectly intact, fully ripe cherries. Damaged cherries must be removed because they would ferment too rapidly and ruin the intracellular process."
      },
      {
        name: "CO2 Gas Flushing",
        duration: "Day 1",
        description: "Cherries are sealed inside airtight stainless steel tanks. Carbon dioxide (CO2) is injected under pressure, completely pushing out all oxygen and creating a pressurized carbonic atmosphere."
      },
      {
        name: "Intracellular Maceration",
        duration: "3-8 Days",
        description: "Lacking oxygen, yeast and bacteria metabolize sugars within the grape-like cell structure of the cherry. The skin prevents external bacteria from interfering, producing very clean esters."
      },
      {
        name: "Depulping or Direct Drying",
        duration: "Day 4-9",
        description: "The cherries are removed from the tanks. They are either depulped and washed (CM Washed) or spread directly on drying beds as whole fruit (CM Natural)."
      },
      {
        name: "Canopy Drying",
        duration: "12-22 Days",
        description: "Dried slowly under shade canopies or in climate-controlled solar dryers to carefully stabilize the complex sugars and chemical compounds."
      }
    ],
    pros: [
      "Unparalleled complexity and clean, wine-like flavor structure",
      "Allows creators to guide specific flavor notes by controlling CO2 pressure and temperature",
      "Increases the quality ceiling of standard coffee varieties"
    ],
    cons: [
      "Extremely technical and difficult to execute correctly",
      "Requires constant purchases of food-grade CO2 gas cylinders",
      "Very high capital investment for specialized pressurized tanks"
    ]
  },
  {
    id: "wet-hulled",
    name: "Wet Hulled",
    alternativeNames: ["Giling Basah"],
    summary: "A traditional Indonesian method where the parchment is mechanically hulled off the seed at a high moisture level of 30-40% before final drying.",
    description: "Wet hulling, locally known as 'Giling Basah,' is a unique method native to Indonesia, especially Sumatra. Due to the region's humid, rainy climate, coffee cannot dry in parchment without rotting. To speed up the process, farmers pulp the coffee, ferment it overnight, dry it for just a day, and then hull off the wet parchment shell when the bean is still soft (30-40% moisture). The naked beans are then dried directly on concrete patios, giving Sumatran coffee its signature dark green appearance and low-acid, earthy flavor.",
    flavorProfile: {
      description: "Low in acidity and very heavy in body. It features bold, rustic, and complex savory notes of cedar wood, fresh tobacco, sweet herbs, and dark chocolate.",
      descriptors: ["Cedar Wood", "Tobacco", "Earthy", "Dark Chocolate", "Herbal", "Low Acidity"]
    },
    metrics: {
      difficulty: 3,
      waterUsage: 3,
      dryingDuration: "3-7 Days",
      flavorClarity: 1,
      body: 5,
      sweetness: 2
    },
    steps: [
      {
        name: "Farm Pulper Extraction",
        duration: "Day 1",
        description: "Smallholder farmers harvest cherries and run them through hand-cranked or small motorized de-pulpers in their backyards to remove the outer skins."
      },
      {
        name: "Bag Fermentation",
        duration: "Overnight",
        description: "The mucilage-coated seeds are collected in woven plastic sacks and left overnight to ferment, loosening the sticky mucilage."
      },
      {
        name: "Washing & Pre-Drying",
        duration: "Day 2",
        description: "The mucilage is washed off by hand in tubs. The clean parchment is spread on patios for a few hours to a day, dropping the moisture to around 30-40% (still very wet)."
      },
      {
        name: "Wet Hulling (Giling Basah)",
        duration: "Day 3",
        description: "The wet, soft, and bluish-green coffee beans are fed into a specialized high-power wet huller. It friction-peels the wet parchment off the soft seed, exposing the naked bean."
      },
      {
        name: "Direct Sun Drying",
        duration: "3-5 Days",
        description: "The naked green coffee seeds are spread directly onto concrete patios. Because there is no protective shell, the coffee dries very rapidly, taking only a few days."
      },
      {
        name: "Defect Sorting",
        duration: "Variable",
        description: "The soft beans are easily crushed or distorted during wet hulling, creating distinct split beans known as 'goat's foot.' Meticulous hand-sorting is done to remove damaged beans."
      }
    ],
    pros: [
      "Extremely fast drying time, crucial for humid and rainy environments",
      "Creates a unique, heavy, and earthy profile favored by traditional espresso blenders",
      "Low acidity makes it gentle on the stomach"
    ],
    cons: [
      "High rate of physical bean defects (splits, crushed beans, mold entry)",
      "Low flavor clarity; completely masks bright origin notes",
      "Prone to earthy defects if drying patios are not clean"
    ]
  },
  {
    id: "co-fermentation",
    name: "Yeast/Fruit Co-fermentation",
    alternativeNames: ["Infused Coffee", "Yeast Inoculated", "Koji Fermented"],
    summary: "During fermentation, specific wine yeasts, fruits, spices, or sugars are added to the tank to infuse intense, candy-like flavors into the seed.",
    description: "Yeast or Fruit Co-fermentation is a highly modern and controversial processing innovation. During the fermentation stage in sealed tanks, producers add specific commercial wine yeasts (like Lalvin), koji spores, or ingredients like sliced passion fruit, oranges, pineapples, cinnamon, or mint. The microbes ferment these added items, creating aromatic esters that are absorbed directly by the porous green coffee seed, leading to highly intense, exotic cup profiles.",
    flavorProfile: {
      description: "Hyper-fruity, candy-like sweetness, and explosive aroma. The flavor directly mimics the added ingredient (e.g. peach, cinnamon, passion fruit) with an intense, long-lasting finish.",
      descriptors: ["Peach", "Passion Fruit", "Cinnamon", "Candy-like", "Effervescent", "Mint"]
    },
    metrics: {
      difficulty: 5,
      waterUsage: 3,
      dryingDuration: "10-20 Days",
      flavorClarity: 2,
      body: 4,
      sweetness: 5
    },
    steps: [
      {
        name: "Harvesting & Pulped Prep",
        duration: "Day 1",
        description: "Ripe coffee cherries are harvested, sorted, and depulped to expose the sticky mucilage layer, which will act as the food source for the added yeasts."
      },
      {
        name: "Additive Tank Loading",
        duration: "Day 1",
        description: "Coffee is placed in fermentation tanks. The producer adds the co-fermentation ingredients: commercial wine yeast cultures, fruit pulp/puree (e.g., passion fruit, peach), or spices."
      },
      {
        name: "Extended Co-Fermentation",
        duration: "48-120 Hours",
        description: "The tanks are sealed. The added yeast metabolizes the fruit sugars alongside the coffee mucilage. This creates a dense cocktail of esters and acids that penetrate the porous structure of the coffee seed."
      },
      {
        name: "Thorough Washing",
        duration: "Day 4-6",
        description: "The coffee is thoroughly washed with clean water to remove all sticky fruit residues, preventing mold growth and securing the infused elements inside the seed."
      },
      {
        name: "Shaded Bed Drying",
        duration: "10-20 Days",
        description: "The coffee is dried slowly on raised beds in shaded or wind-controlled houses, preventing the volatile aromatic compounds from evaporating."
      }
    ],
    pros: [
      "Explosive, distinct, candy-like flavors that appeal to new-wave coffee drinkers",
      "Enables producers to achieve exotic flavors even with standard coffee varieties",
      "Highly customizable and replicable flavor recipes"
    ],
    cons: [
      "Highly controversial; traditionalists argue it is 'infusion' rather than true coffee processing",
      "Can mask the intrinsic quality and regional terroir of the coffee",
      "Requires careful washing to prevent mold from sugar residue"
    ]
  }
];
