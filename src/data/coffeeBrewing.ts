import { BrewingMethod } from "@/types/brewing";

export const coffeeBrewingMethods: BrewingMethod[] = [
  {
    id: "pour-over",
    name: "Drip / Pour Over (V60)",
    tagline: "Vibrant, clean cup profile highlighting delicate organic acids and floral aromatics.",
    iconName: "Filter",
    defaultRatio: 16.6, // 1:16.6 ratio (60g/L)
    defaultTemp: 93,
    grindSizeText: "Medium-Fine (600-800 microns)",
    grindSizeMicrons: 700,
    filterType: "Paper (conical, high flow-rate)",
    tdsRange: "1.25% - 1.40%",
    eyRange: "19% - 21%",
    physicsSummary: "Gravity-driven filtration with percolation. The 60-degree cone angle directs hot water toward the center, forcing it to travel through the entire coffee bed. The large hole at the bottom removes structural flow restriction, meaning flow rate is controlled entirely by grind size, paper porosity, and pouring technique.",
    extractionMechanic: "Percolation (continuous fresh solvent flowing through solute matrix)",
    bypassPercentage: 15,
    volatilePreservation: "High. Volatile floral and fruit esters are preserved and clarified by paper filtration, which traps lipid oils and micro-fines.",
    stepRecipe: [
      {
        time: 0,
        action: "Bloom Phase",
        waterAdded: 50,
        detail: "Pour 50g of water. Agitate or swirl lightly. Let bloom for 45 seconds to release trapped carbon dioxide gas (degassing), expanding the coffee bed and preventing dry pockets."
      },
      {
        time: 45,
        action: "First Main Pour",
        waterAdded: 150,
        detail: "Pour in circular motions from the center outwards up to 150g. This initiates primary extraction of highly soluble organic acids."
      },
      {
        time: 75,
        action: "Second Pour",
        waterAdded: 250,
        detail: "Pour steadily up to 250g in concentric circles. This maintains hydrostatic pressure and extracts caramel sugars and sweet components."
      },
      {
        time: 110,
        action: "Final Drawdown",
        waterAdded: 250,
        detail: "Give a final gentle swirl to wash down grounds from the paper walls. Let gravity pull the remaining water through to extract body compounds."
      }
    ],
    troubleshooting: [
      {
        issue: "Bitter & Dry (Over-extraction)",
        cause: "Grind size is too fine, creating high flow restriction and channeling, or water temperature is too high.",
        solution: "Coarsen the grind size by 1-2 clicks, or decrease water temperature to 90-91°C."
      },
      {
        issue: "Sour & Thin (Under-extraction)",
        cause: "Grind size is too coarse, causing water to pass through too quickly without extracting sugars.",
        solution: "Finen the grind size, increase water temperature, or apply more pouring agitation to speed up diffusion."
      },
      {
        issue: "Hollow & Weak",
        cause: "Water-to-coffee ratio is too high (too much water), or water bypass is excessive.",
        solution: "Adjust ratio to 1:15 or 1:16, or pour slower to keep water level lower in the cone."
      }
    ]
  },
  {
    id: "espresso",
    name: "Espresso",
    tagline: "Ultra-concentrated, viscous shot with a dense crema of emulsified lipids and gases.",
    iconName: "Coffee",
    defaultRatio: 2.0, // 1:2 ratio (e.g. 18g in, 36g out)
    defaultTemp: 92,
    grindSizeText: "Fine (200-300 microns)",
    grindSizeMicrons: 250,
    filterType: "Metal Basket (perforated)",
    tdsRange: "8.00% - 12.00%",
    eyRange: "18% - 22%",
    physicsSummary: "High-pressure percolation. Water heated in a boiler is forced through a tightly compressed, fine-particle coffee puck under 9 bars of pressure. The intense pressure forces insoluble oils and carbon dioxide gas into an emulsion (crema) while extracting soluble compounds rapidly.",
    extractionMechanic: "Pressure-driven percolation",
    bypassPercentage: 0,
    volatilePreservation: "Exceptional. Oils and insoluble solids are suspended directly in the cup, trapping highly volatile aromatics that would otherwise be filtered out by paper.",
    stepRecipe: [
      {
        time: 0,
        action: "Pre-infusion",
        waterAdded: 6,
        detail: "Saturate the puck with low-pressure water (1-3 bars) for 5-8 seconds. This wets the puck uniformly, expanding the grid structure and reducing the risk of channeling."
      },
      {
        time: 7,
        action: "High Pressure Extraction",
        waterAdded: 36,
        detail: "Ramp pressure to 9 bars. Solvent flows through, extracting organic acids and sweetness while emulsifying lipids into a crema."
      },
      {
        time: 25,
        action: "Blonding & Cutoff",
        waterAdded: 36,
        detail: "Watch the stream color. Once it turns translucent or light yellow (blonding), immediately stop the pump to prevent bitter, astringent compounds from diluting the shot."
      }
    ],
    troubleshooting: [
      {
        issue: "Sour, Salty & Fast (Under-extraction)",
        cause: "Water found a path of least resistance (channeling), or grounds are too coarse.",
        solution: "Use a puck prep tool (WDT) to distribute grounds evenly, finen the grind size, or lengthen pre-infusion."
      },
      {
        issue: "Bitter, Ashy & Slow (Over-extraction)",
        cause: "Grind size is too fine, choking the machine, or water temperature is too hot.",
        solution: "Coarsen the grind size, adjust the dose weight down slightly, or decrease brew temperature."
      },
      {
        issue: "Thin & No Crema",
        cause: "Stale coffee beans (no CO2 gas left to form crema), or pressure is too low.",
        solution: "Use fresh roasted specialty beans (7-21 days post-roast), or verify the pump pressure is at 9 bars."
      }
    ]
  },
  {
    id: "french-press",
    name: "French Press (Immersion)",
    tagline: "Heavy-bodied, full-textured brew highlighting chocolate, caramel, and deep earthy notes.",
    iconName: "Thermometer",
    defaultRatio: 15.0, // 1:15 ratio
    defaultTemp: 95,
    grindSizeText: "Coarse (1000-1400 microns)",
    grindSizeMicrons: 1200,
    filterType: "Metal Mesh",
    tdsRange: "1.30% - 1.50%",
    eyRange: "18% - 20%",
    physicsSummary: "Full immersion brewing. Coffee particles remain suspended in water for the entire brew time. Diffusion kinetics govern extraction: as the water becomes saturated with dissolved solids, the extraction rate naturally slows down, making this method highly forgiving to over-extraction.",
    extractionMechanic: "Immersion (static solvent-solute diffusion)",
    bypassPercentage: 0,
    volatilePreservation: "Very High. The metal mesh filter allows insoluble micro-fines and heavy lipids to pass through, yielding a heavy, oily mouthfeel with rich, deep-toned aromatics.",
    stepRecipe: [
      {
        time: 0,
        action: "Stir & Steeping",
        waterAdded: 300,
        detail: "Pour all 300g of water. Stir vigorously for 10 seconds to break dry clumps and ensure uniform saturation. Place plunger lid on to trap heat."
      },
      {
        time: 240,
        action: "Break the Crust",
        waterAdded: 300,
        detail: "Remove lid. Stir the top layer to break the floating crust. Grounds will sink to the bottom. Let sit for another 4-6 minutes to cool and clarify."
      },
      {
        time: 540,
        action: "Plunge & Pour",
        waterAdded: 300,
        detail: "Gently depress the mesh plunger to separate grounds. Decant immediately into a server or cup to halt the extraction process."
      }
    ],
    troubleshooting: [
      {
        issue: "Muddy & Gritty",
        cause: "Grinding is inconsistent (creating too many fine particles), or plunger was depressed too violently.",
        solution: "Plunge extremely slowly, or use a high-quality burr grinder. Let the grounds settle naturally without plunging all the way down."
      },
      {
        issue: "Sour & Under-extracted",
        cause: "Steeping time was too short, or water temperature cooled down too fast.",
        solution: "Extend steep time to 8-10 minutes (it is safe due to immersion limits), use boiling water, or pre-heat the glass press."
      },
      {
        issue: "Astringent & Bitter",
        cause: "Coffee grounds were left in contact with water in the press after plunging.",
        solution: "Always decant the entire beverage into a separate server immediately after plunging."
      }
    ]
  },
  {
    id: "aeropress",
    name: "AeroPress (Hybrid)",
    tagline: "Versatile, clean yet dense cup with a wide range of extraction styles.",
    iconName: "Droplets",
    defaultRatio: 12.0, // 1:12 ratio (e.g. 15g coffee, 180g water)
    defaultTemp: 85,
    grindSizeText: "Medium-Fine (400-600 microns)",
    grindSizeMicrons: 500,
    filterType: "Paper Disc",
    tdsRange: "1.40% - 1.80%",
    eyRange: "19% - 22%",
    physicsSummary: "Hybrid steep-and-squeeze brewing. Coffee is initially steeped in water (immersion), and then forced through a paper filter under pneumatic pressure (percolation) using a hand plunger. The pressure drives fast extraction and allows for high-yield, clean extractions.",
    extractionMechanic: "Immersion followed by pneumatic filtration",
    bypassPercentage: 0,
    volatilePreservation: "High. Hybrid nature allows clean, paper-filtered aromatics with enhanced sweetness and clarity, while retaining espresso-like density.",
    stepRecipe: [
      {
        time: 0,
        action: "Stir & Steep",
        waterAdded: 200,
        detail: "Pour all 200g of water. Stir 10 times to agitate. Insert plunger slightly to create a vacuum seal and prevent dripping."
      },
      {
        time: 60,
        action: "Swirl & Settle",
        waterAdded: 200,
        detail: "Remove plunger, swirl the chamber gently to settle the grounds into a flat bed, preparing for filtration."
      },
      {
        time: 75,
        action: "Plunge",
        waterAdded: 200,
        detail: "Press plunger down slowly over 30 seconds. Stop when you hear a hissing sound (air escaping)."
      }
    ],
    troubleshooting: [
      {
        issue: "Hard to Press",
        cause: "Grind size is too fine, clogging the filter, or filter paper is double-stacked.",
        solution: "Coarsen the grind slightly, or reduce your downward pressing force to let gravity assist."
      },
      {
        issue: "Weak & Sour",
        cause: "Grind size is too coarse, or water temperature was too cold.",
        solution: "Finen the grind size, stir more vigorously, or use hotter water (up to 90-95°C)."
      },
      {
        issue: "Bitter & Burnt",
        cause: "Water temperature was too hot for dark roast coffee, or steep time was too long.",
        solution: "Reduce water temperature to 80-85°C, or reduce steep time to 45 seconds."
      }
    ]
  },
  {
    id: "siphon",
    name: "Siphon (Vacuum Pot)",
    tagline: "Vibrant, clean, tea-like cup with complex aromatics and high thermal temperature profile.",
    iconName: "Sliders",
    defaultRatio: 15.0,
    defaultTemp: 91,
    grindSizeText: "Medium (700-900 microns)",
    grindSizeMicrons: 800,
    filterType: "Cloth Filter",
    tdsRange: "1.20% - 1.35%",
    eyRange: "18% - 21%",
    physicsSummary: "Vapor-pressure vacuum brewing. Water is boiled in a lower bulb, generating steam pressure that forces hot water up a tube into the upper chamber containing coffee grounds. When heat is removed, the steam condenses, creating a vacuum that sucks the brewed coffee back down through a filter.",
    extractionMechanic: "Immersion with vacuum-assisted filtration",
    bypassPercentage: 0,
    volatilePreservation: "Exceptional. Cloth filter traps grinds but permits oils to pass through. Constant high heat extracts clean, vibrant, tea-like clarity.",
    stepRecipe: [
      {
        time: 0,
        action: "Rise & Saturate",
        waterAdded: 250,
        detail: "Boil water in lower bulb. Once water rises to upper chamber, add grounds and stir to saturate. Turn heat down slightly."
      },
      {
        time: 45,
        action: "Steep & Agitate",
        waterAdded: 250,
        detail: "Stir the slurry in a paddle motion to agitate. Keep heat active to maintain water height."
      },
      {
        time: 60,
        action: "Vacuum Drawdown",
        waterAdded: 250,
        detail: "Remove heat source. Cold air cools the lower bulb, creating a vacuum. Brew draws down through cloth filter."
      }
    ],
    troubleshooting: [
      {
        issue: "Slow Drawdown (Choking)",
        cause: "Grind size is too fine, or cloth filter is dirty and clogged with oils.",
        solution: "Coarsen the grind, or wash/replace the cloth filter. Ensure it is stored in cold water between uses."
      },
      {
        issue: "Thin & Sour",
        cause: "Agitation was insufficient, or heat was removed too early.",
        solution: "Stir the grounds thoroughly when water first rises, and steep for at least 45-60 seconds before removing heat."
      },
      {
        issue: "Muddy Sediment",
        cause: "Cloth filter was not sealed tightly against the glass tube.",
        solution: "Verify the filter spring hook is securely fastened to the bottom of the siphon tube."
      }
    ]
  },
  {
    id: "cold-brew",
    name: "Cold Brew",
    tagline: "Highly sweet, low-acidity brew with chocolate tones and long shelf life.",
    iconName: "Sliders",
    defaultRatio: 10.0, // 1:10 ratio for concentrate
    defaultTemp: 15,
    grindSizeText: "Very Coarse (1200-1600 microns)",
    grindSizeMicrons: 1400,
    filterType: "Felt/Paper/Mesh",
    tdsRange: "1.50% - 2.50% (diluted to ~1.3%)",
    eyRange: "16% - 19%",
    physicsSummary: "Slow-rate cold diffusion. Low temperature severely reduces extraction rate. To compensate, contact time is extended to hours. Fatty acids, bitter oils, and caffeine extract at slower rates in cold water, yielding a low-acid, sweet beverage.",
    extractionMechanic: "Cold immersion diffusion",
    bypassPercentage: 0,
    volatilePreservation: "Moderate. Highly heat-volatile floral and citric aromatics do not extract well at cold temperatures, emphasizing heavy chocolate and wood tones.",
    stepRecipe: [
      {
        time: 0,
        action: "Saturation",
        waterAdded: 500,
        detail: "Mix coarse grounds and cold water. Stir thoroughly to wet all grounds. Cover container."
      },
      {
        time: 43200, // 12 hours
        action: "Steeping Phase",
        waterAdded: 500,
        detail: "Let steep in refrigerator or room temperature for 12 to 18 hours. Extraction happens slowly."
      },
      {
        time: 64800, // 18 hours
        action: "Filtration",
        waterAdded: 500,
        detail: "Decant and filter through felt or paper to separate grounds. Yields a concentrated brew."
      }
    ],
    troubleshooting: [
      {
        issue: "Woody & Flat",
        cause: "Steeping time was too long (exceeding 24 hours), extracting bitter wood compounds.",
        solution: "Limit steeping time to 12-16 hours at room temperature, or 18-20 hours in the refrigerator."
      },
      {
        issue: "Weak & Watery",
        cause: "Ratio was too high, or grind size was too coarse for cold extraction.",
        solution: "Finen the grind slightly, or reduce ratio to 1:8 or 1:10 to make a strong concentrate."
      },
      {
        issue: "Cloudy & Gritty",
        cause: "Fines bypassed the filter system.",
        solution: "Filter a second time through a paper coffee filter (V60 or Aeropress paper) to clarify."
      }
    ]
  },
  {
    id: "moka-pot",
    name: "Moka Pot (Stovetop)",
    tagline: "Thick, intense, espresso-like cup from steam-driven pressure.",
    iconName: "Flame",
    defaultRatio: 10.0,
    defaultTemp: 94,
    grindSizeText: "Medium-Fine (300-500 microns)",
    grindSizeMicrons: 400,
    filterType: "Metal Plate",
    tdsRange: "3.00% - 5.00%",
    eyRange: "17% - 20%",
    physicsSummary: "Low-pressure steam extraction. Water boils in the lower chamber, generating steam pressure (around 1.5 bars) that forces boiling water up through a funnel, through a packed basket of grounds, and out into the top reservoir.",
    extractionMechanic: "Steam-driven percolation",
    bypassPercentage: 0,
    volatilePreservation: "High. Delivers a thick, rich, espresso-style cup with significant oils and body, preserving chocolate, roasted, and caramel notes.",
    stepRecipe: [
      {
        time: 0,
        action: "Heating Phase",
        waterAdded: 150,
        detail: "Fill base with boiling water. Insert funnel with grounds. Screw top on and place over medium heat."
      },
      {
        time: 120,
        action: "Extraction Rise",
        waterAdded: 150,
        detail: "Water heats and steam forces it through grounds. Coffee will begin flowing slowly out of the central column."
      },
      {
        time: 180,
        action: "Sputtering & Cooling",
        waterAdded: 150,
        detail: "When flow turns light yellow and sputters, remove from heat and cool base in cold water immediately to halt extraction."
      }
    ],
    troubleshooting: [
      {
        issue: "Ashy & Metallic Taste",
        cause: "Pot overheated, scorching the grounds, or water temperature was too high at the start.",
        solution: "Use pre-boiled water to minimize time the dry grounds spend heating on the stove, and brew at a lower heat."
      },
      {
        issue: "Steam Escapes from Valve",
        cause: "Funnel filter is clogged, or coffee was tamped too hard, blocking flow.",
        solution: "Do not tamp coffee grounds in a Moka pot; just level them. Verify the safety valve is clean."
      },
      {
        issue: "Weak & Sputtery Flow",
        cause: "Pot is not screwed together tightly, leaking steam pressure.",
        solution: "Ensure the rubber gasket is clean and screw the upper and lower halves together firmly."
      }
    ]
  },
  {
    id: "turkish",
    name: "Turkish Coffee",
    tagline: "Thick, intense, unfiltered brew with centuries of tradition.",
    iconName: "Sliders",
    defaultRatio: 10.0,
    defaultTemp: 96,
    grindSizeText: "Ultra-Fine (50-150 microns)",
    grindSizeMicrons: 100,
    filterType: "None (unfiltered)",
    tdsRange: "2.50% - 4.00%",
    eyRange: "18% - 21%",
    physicsSummary: "Decoction brewing. Unfiltered ultra-fine coffee powder is boiled with water in a copper pot (Ibrik/Cezve). The boiling creates convection currents that extract the coffee rapidly, and the fine particles remain in the cup, continuing to settle.",
    extractionMechanic: "Boiling decoction (unfiltered suspension)",
    bypassPercentage: 0,
    volatilePreservation: "Very High. Since there is no filter, all volatile organic molecules, micro-fines, and essential oils are poured directly into the cup, creating intense body.",
    stepRecipe: [
      {
        time: 0,
        action: "Initial Heating",
        waterAdded: 100,
        detail: "Combine water, ultra-fine coffee, and sugar (optional) in Cezve. Mix well. Place over heat source."
      },
      {
        time: 90,
        action: "First Foam Rise",
        waterAdded: 100,
        detail: "As mixture heats, foam will rise. Remove Cezve from heat just before boiling over. Pour some foam into cup."
      },
      {
        time: 150,
        action: "Second Rise & Serve",
        waterAdded: 100,
        detail: "Place Cezve back on heat. Let foam rise a second time, then pour entire contents into cup without filtering."
      }
    ],
    troubleshooting: [
      {
        issue: "Gritty & Muddy Cup",
        cause: "Coffee was not ground fine enough (Turkish requires a powder consistency), or cup was drank too quickly.",
        solution: "Ensure the grind is powdery like flour, and let the cup rest for 2-3 minutes before drinking so particles settle."
      },
      {
        issue: "No Foam (Kaimaki)",
        cause: "Coffee was boiled too aggressively, or beans are stale.",
        solution: "Do not let the coffee boil over or bubble rapidly. Heat slowly on low flame to allow dense foam to form."
      },
      {
        issue: "Bitter & Over-boiled",
        cause: "Brew was heated for too long or boiled multiple times.",
        solution: "Limit to 1-2 foam rises. Turkish coffee extracts very fast due to the extreme surface area of ultra-fine particles."
      }
    ]
  }
];
