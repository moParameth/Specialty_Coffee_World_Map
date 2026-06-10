import { BrewingMethod } from "@/types/brewing";

export const coffeeBrewingMethods: BrewingMethod[] = [
  {
    id: "pour-over",
    name: "Drip / Pour Over (V60)",
    tagline: "Gravity-fed filtration that highlights clean, high-clarity organic acids and delicate floral aromatics.",
    iconName: "Filter",
    defaultRatio: 16.6, // 1:16.6 ratio (60g/L)
    defaultTemp: 93,
    grindSizeText: "Medium-Fine (600-800 microns)",
    grindSizeMicrons: 700,
    filterType: "Conical Paper Filter",
    tdsRange: "1.25% - 1.45%",
    eyRange: "19.0% - 21.5%",
    physicsSummary: "Gravity acts as the driver, pulling hot water downwards through a porous bed of grounds. This is a classic percolation extraction where fresh water continuously washes over the grounds, maintaining a high concentration gradient that drives rapid solute diffusion.",
    extractionMechanic: "Gravity-driven percolation (continuous flow)",
    bypassPercentage: 15,
    volatilePreservation: "Exceptional for light-weight floral esters and citric compounds, which are protected by paper filtration of heavy lipids that would mask their clarity.",
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
        cause: "Grind size is too fine, creating high flow restriction and fines migration, or water temperature is too high.",
        solution: "Coarsen the grind size by 1-2 clicks, decrease water temperature to 90-91°C, or reduce pouring agitation."
      },
      {
        issue: "Sour & Thin (Under-extraction)",
        cause: "Grind size is too coarse, causing water to bypass too quickly without diffusing sugars.",
        solution: "Finen the grind size, increase water temperature, or apply more pouring agitation to speed up diffusion."
      },
      {
        issue: "Hollow & Weak",
        cause: "Water-to-coffee ratio is too high (too much water), or water bypass is excessive.",
        solution: "Adjust ratio to 1:15 or 1:16, or pour slower to keep water level lower in the cone."
      }
    ],
    
    // Advanced research fields
    waterChemistry: "Calcium (Ca2+) and Magnesium (Mg2+) ions act as molecular hooks, binding selectively to citric and malic acids, pulling them into the brew. Higher concentrations of Magnesium yield a punchy, fruit-forward acidity, while Calcium emphasizes creamy sweetness. Alkalinity (expressed as bicarbonate, HCO3-) behaves as a pH buffer: if alkalinity is too high (>50 ppm), it neutralizes coffee's organic acids, resulting in a flat, chalky taste. The ideal water profile for pour over is 70-120 ppm General Hardness (GH) and 20-40 ppm Alkalinity (KH) at a pH of 7.0.",
    physicsDetails: "The hydrodynamics of conical pour-over devices depend on capillary flow and percolation speed. In a 60-degree cone (like the Hario V60), the liquid column increases in height towards the center, creating hydrostatic head pressure. Ridges along the inner walls allow air to escape, preventing a vacuum seal and facilitating a steady flow rate. Grind distribution determines the porosity of the bed. A bimodal grind distribution (common in burr grinders) generates a mix of larger particles (boulders) and micro-particles (fines). The micro-fines migrate to the bottom of the paper filter, restricting flow and increasing contact time. If fines migration is excessive, it causes localized choking and channeling, where water runs through cracks in the bed, causing simultaneous over- and under-extraction.",
    bypassAndPaper: "Bypass occurs when water flows around the coffee bed rather than through it. In a V60, some water bypasses the coffee slurry by flowing along the filter paper above the grounds, diluting the final cup's TDS. Bypass is typically 10-18% of the total volume. Filter paper quality is a critical variable. Papers differ in creping (crinkling) and thickness. Double-creped papers have a larger surface area, catching micro-fines without clogging. Paper filters also absorb cafestol and kahweol—two diterpenes (lipids) present in coffee. By trapping these oils, paper filters prevent them from entering the cup, which lowers the beverage's body but significantly clarifies the flavor and keeps cholesterol-boosting compounds out of the cup.",
    puckPrepOrPouringKinetics: "Pouring kinetics govern agitation and heat transfer. Pouring from a kettle creates kinetic energy that agitates the coffee bed. Higher water drop heights increase turbulence, which disrupts the bed and increases extraction rate but risks pushing fines to the bottom of the filter. Lower kettle heights reduce agitation, maintaining a neat, stratified bed. Hydrostatic pressure—the height of the water level inside the cone—controls the flow rate; keeping the water level high increases the flow speed. Temperature profiling is another key technique: starting with hot water (94-96°C) for the bloom and first pour extracts highly soluble acids, while dropping the kettle temperature (to 88-90°C) for later pours reduces the extraction of bitter, astringent compounds in the tail end.",
    extractionFractions: "Soluble compounds extract in a predictable thermodynamic sequence based on molecular weight and polarity: \n1. **Organic Acids & Salts (0 - 45s)**: Highly polar compounds like malic, citric, and quinic acids dissolve instantly, yielding sour, bright, and salty components.\n2. **Sweetness & Lipids (45s - 110s)**: Simple sugars, carbohydrates, and light oils extract next, bringing sweetness, balance, and aroma complexity.\n3. **Bitter Tannins & Phenols (110s - 180s)**: Heavy, less polar chlorogenic acid lactones, caffeine, and dry wood-fiber phenols extract slowly. If extraction continues too long, these dominate the taste profile, producing bitterness and astringency."
  },
  {
    id: "espresso",
    name: "Espresso",
    tagline: "Pressure-driven extraction producing a dense, highly concentrated emulsion of oils, gases, and dissolved solids.",
    iconName: "Coffee",
    defaultRatio: 2.0, // 1:2 ratio (e.g. 18g in, 36g out)
    defaultTemp: 92,
    grindSizeText: "Fine (200-300 microns)",
    grindSizeMicrons: 250,
    filterType: "Perforated Metal Basket",
    tdsRange: "8.50% - 11.50%",
    eyRange: "18.5% - 22.0%",
    physicsSummary: "An intense extraction method where water heated in a pressurized boiler (under 9 bars of pressure) is forced through a finely ground, densely compacted coffee puck. Darcy's Law for fluid dynamics through porous media dictates that the flow rate is directly proportional to pressure and puck permeability, and inversely proportional to water viscosity.",
    extractionMechanic: "Pressure-driven percolation (packed bed)",
    bypassPercentage: 0,
    volatilePreservation: "Exceptional. Due to the absence of a paper filter, high-pressure extraction forces insoluble lipids and essential oils to form an emulsion in the cup, encapsulating highly volatile aromatics that explode retro-nasally upon drinking.",
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
    ],
    
    // Advanced research fields
    waterChemistry: "Because espresso is highly concentrated, water chemistry impacts are magnified. Calcium ions bind to sugars and chocolates, enhancing body and sweetness, while magnesium extracts bright, sharp flavors. However, high water temperature (92-94°C) combined with high pressure increases the solubility of scaling minerals. Espresso machines require precise buffer control (alkalinity of 40-70 ppm) to prevent scale buildup on heating elements and copper boilers while maintaining a stable pH that buffers the high organic acid concentration of espresso.",
    physicsDetails: "Puck resistance is modeled by Darcy's Law: $Q = \\frac{k \\cdot A \\cdot \\Delta P}{\\mu \\cdot L}$, where $Q$ is flow rate, $k$ is puck permeability, $A$ is area, $\\Delta P$ is pressure difference, $\\mu$ is water viscosity, and $L$ is puck height. As extraction proceeds, soluble solids wash out, increasing puck permeability ($k$). If water pressure remains constant at 9 bars, the flow rate will accelerate rapidly towards the end of the shot, leading to over-extraction. Modern pressure-profiling machines counter this by reducing pressure to 5-6 bars in the final stage, maintaining a constant flow rate. Channeling occurs when water cuts a high-velocity path through the puck (cracks or areas of low density). Water rushes through the channel, over-extracting the surrounding coffee, while leaving the rest of the compacted puck dry and under-extracted.",
    bypassAndPaper: "Espresso has zero bypass; all water must travel through the compacted puck. Filter baskets are made of stainless steel with high-precision laser-cut micro-holes (typically 500-700 holes, ~300 microns in diameter). The design of these holes determines the extraction profile: baskets with straight walls and high open areas (like VST or IMS baskets) offer less flow resistance, requiring a finer grind size and yielding higher TDS and clarity. Standard tapered baskets restrict flow towards the center, providing more body but less clarity. Paper filters are sometimes placed at the bottom of the basket to trap fines and diterpenes, increasing flow rate (by preventing hole clogging) and yielding an ultra-high extraction shot with lower body.",
    puckPrepOrPouringKinetics: "Puck preparation is the most critical variable in espresso extraction. Because water flows through the path of least resistance, any density variance in the coffee bed leads to channeling. Weiss Distribution Technique (WDT)—using thin needles (~0.35mm) to stir the bed—breaks up clumps caused by static electricity in the grinder, homogenizing puck density. Compaction via tamping must be perfectly level to prevent edge channeling, where water flows along the basket walls. The tamping force must exceed the threshold (~15 lbs) required to compress the air pockets out of the bed. Beyond this threshold, additional tamping force does not alter bed density, as the grounds are already fully compacted. Using a metal puck screen on top of the bed distributes water evenly from the shower screen, preventing jet erosion of the coffee surface.",
    extractionFractions: "Due to the fast extraction rate (25-30 seconds), the three chemical fractions extract in rapid succession:\n1. **The Ristretto Phase (0 - 10s)**: Water first dissolves highly polar acids, salts, and concentrated caffeine, flowing out thick and dark brown. Extremely intense, sour, and concentrated.\n2. **The Normale Phase (10s - 22s)**: Flow turns golden-brown (tiger striping). Sweet sugars, complex lipids, and aromas extract, balancing the initial acidity with sweetness.\n3. **The Lungo / Blonding Phase (22s - 30s)**: Flow turns light yellow (blonding) as solubles deplete. Bitter chlorogenic acid lactones and astringent wood phenols dissolve. Stopping the shot before excessive blonding is vital to prevent an ashy, drying aftertaste."
  }
];
