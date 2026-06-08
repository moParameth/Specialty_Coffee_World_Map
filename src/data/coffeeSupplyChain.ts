import { SupplyChainStage, EconomicCostItem, SupplyChainRisk } from "@/types/supplyChain";

export const supplyChainStages: SupplyChainStage[] = [
  {
    id: "cultivation",
    name: "Cultivation & Harvesting",
    subtitle: "The Birth of the Seed",
    phaseNumber: 1,
    location: "High-Altitude Coffee Farm (tropics, 20°N to 25°S)",
    duration: "3-5 years for tree maturity; 9 months from flower to cherry ripening",
    physicalTransition: "Soil nutrients & water -> Flowering tree -> Ripe red/yellow coffee cherry",
    keyActivities: [
      "Soil biochemistry management: replenishing organic compost, nitrogen, and minerals.",
      "Shade-grown forestry layout: planting companion trees (like banana, inga, erythrina) to block harsh solar radiation, slow cherry maturation, and boost organic acidity.",
      "Selective hand-picking: training pickers to harvest only cherry skins matching peak sugar density, measured using Brix-index refractometers (targeting 18-22% Brix)."
    ],
    detailedDescription: "The supply chain begins in the global 'Coffee Belt' on mountainous terrain. Altitude is crucial: higher elevations (1,200–2,200m+) experience colder nights, slowing bean development and locking in complex organic acids (citric, malic, phosphoric). The harvesting phase is highly labor-intensive. In commodity markets, 'strip-picking' harvests all cherries (ripe, green, over-ripe) at once. In specialty markets, pickers perform selective hand-picking, revisiting the same tree up to 5 times over months to ensure uniform sugar levels.",
    qualityControls: [
      "Refractometer (Brix) testing of raw cherry pulp to ensure optimum sugar concentrations.",
      "Strict sorting at collection stations to filter out green (unripe), black (over-ripe), or hollow cherries.",
      "Preventive agronomy monitoring to protect crops from Coffee Leaf Rust (Hemileia vastatrix) using organic sprays and shade canopy humidity control."
    ],
    imageUrl: "/images/supply-chain/cultivation.png"
  },
  {
    id: "processing",
    name: "Processing & Drying",
    subtitle: "Unlocking Chemical Precursors",
    phaseNumber: 2,
    location: "Wet Mill (Beneficio Húmedo) at farm or local cooperative",
    duration: "12-72 hours fermentation; 7-21 days drying",
    physicalTransition: "Ripe coffee cherry -> Mucilage fermentation -> Dried parchment coffee (10-12% moisture)",
    keyActivities: [
      "Hulling & pulping: stripping the cherry's outer skin using mechanical depulpers.",
      "Controlled fermentation: using native or inoculated yeasts (like Saccharomyces cerevisiae) to break down the sticky mucilage layer and synthesize volatile aroma precursors.",
      "Sun drying: spreading parchment coffee across raised African drying beds, turning every 30 minutes to ensure uniform evaporation."
    ],
    detailedDescription: "Processing transitions the cherry seed (coffee bean) into a shelf-stable dry state while crafting its core flavor profile. In the Washed process, mucilage is fermented and washed away, highlighting acidity and cleanliness. In the Natural process, the cherry dries whole, infusing the bean with intense tropical fruit and berry flavors. Drying is a highly delicate chemistry phase: if beans dry too quickly, the embryo dies and flavor structure degrades; if too slowly, mold develops. The goal is to reach exactly 10-12% moisture.",
    qualityControls: [
      "pH-meter tracking during fermentation (target range 4.5 - 3.8 to prevent acetic sourness).",
      "Density float tanks to isolate low-density beans (floaters) from dense high-grade lots.",
      "Digital pin-meter moisture checks to verify the batch hits the target moisture level (ideal 10.5%)."
    ],
    imageUrl: "/images/supply-chain/processing.png"
  },
  {
    id: "milling",
    name: "Dry Milling & Grading",
    subtitle: "Preparing for Global Transit",
    phaseNumber: 3,
    location: "Dry Mill (Beneficio Seco) near shipping ports",
    duration: "1-3 days",
    physicalTransition: "Dried parchment coffee -> Mechanical hulling -> Clean green coffee (café oro)",
    keyActivities: [
      "Mechanical hulling: peeling off the dry parchment skin (pergamino) or dried natural cherry husks.",
      "Density separation: vibrating green beans across gravity tables to segregate dense beans from light, defective ones.",
      "Optical color sorting: passing beans through high-speed digital color sorters to instantly eject black, sour, or moldy defects using pneumatic air-blasts."
    ],
    detailedDescription: "Before export, coffee must be stripped of its protective parchment coating and sorted to meet global grading standards. Dry mills utilize gravity tables, screen sizers, and optical sorters to achieve an defect-free batch. For specialty coffee, the Green Coffee Classification System (GCCS) dictates zero primary defects (black, sour, stone, pod) per 350-gram sample. The sorted green beans are packed in multi-barrier hermetic bags (GrainPro or Ecotact) to shield them from moisture and odors.",
    qualityControls: [
      "Manual screen-sizing to classify bean sizes (e.g. Screen 17/18 for large beans, Screen 15 for smaller).",
      "Pneumatic optical sorting calibration to filter out visual, insect-damaged, and mold defects.",
      "Sealing lots in hermetic bags inside thick woven jute sacks to prevent moisture re-absorption."
    ],
    imageUrl: "/images/supply-chain/milling.png"
  },
  {
    id: "logistics",
    name: "Export & Shipping",
    subtitle: "Crossing the Logistical Abyss",
    phaseNumber: 4,
    location: "Cargo Ports, Container Ships, & Import Warehouses",
    duration: "30-90 days",
    physicalTransition: "Origin warehouse -> Transoceanic sea container -> Destination warehouse",
    keyActivities: [
      "Container inspection: selecting condensation-free, dry shipping containers with no residual odors.",
      "Port customs clearance: completing phytosanitary inspections and export documentation.",
      "Transit tracking: managing route logistics through different climatic zones and equator crossings."
    ],
    detailedDescription: "Shipping green coffee across oceans is one of the highest-risk phases in the supply chain. Green coffee is hydroscopic, meaning it absorbs moisture from its surroundings. If containers cross the hot equator and sail into cold northern waters, moisture condenses on the container ceiling ('container sweat') and drops back onto the coffee, causing musty flavors or mold. Modern specialty coffee relies heavily on hermetic storage liners to completely isolate the beans from container climate fluctuations.",
    qualityControls: [
      "Lining ocean containers with thick cardboard insulation kraft-paper to prevent thermal shocks.",
      "Stowing coffee containers below deck or away from the ship's engine room to avoid baking.",
      "Destination arrival cupping: pulling samples immediately to verify that the flavor matches the original Pre-Shipment Sample (PSS) without degradation."
    ],
    imageUrl: "/images/supply-chain/logistics.png"
  },
  {
    id: "roasting",
    name: "Roasting & Degassing",
    subtitle: "Pyrolysis & Flavor Development",
    phaseNumber: 5,
    location: "Specialty Roastery at destination countries",
    duration: "8-15 minutes roasting; 5-14 days resting (degassing)",
    physicalTransition: "Raw green coffee -> Thermal pyrolysis -> Roasted, aromatic brown coffee beans",
    keyActivities: [
      "Thermal profile control: modulating conductive and convective heat to roast beans uniformly.",
      "Managing chemical transitions: driving the bean through drying, Maillard browning (synthesizing melanoidins), caramelization, and the exothermic 'First Crack'.",
      "Degassing management: allowing the built-up internal CO2 gas to escape without allowing oxygen in."
    ],
    detailedDescription: "Roasting is where raw chemical precursors (chlorogenic acids, amino acids, sucrose) are unlocked through heat. Inside a drum roaster, temperatures reach 200°C+, causing pyrolysis (thermal decomposition). The bean expands, loses moisture, turns brown, and splits open during 'First Crack'. After roasting, the bean is extremely vulnerable to staling. It must release its built-up CO2 (degassing) through a one-way valve bag, which allows gas to escape while blocking oxygen from entering and oxidizing the delicate coffee oils.",
    qualityControls: [
      "Spectrophotometer color analysis (Agtron scale) to check roast depth uniformity of bean exterior and interior.",
      "Batch data tracking: saving Rate of Rise (RoR) curves digitally to ensure consistent profiles.",
      "Strict batch QC cupping: roasting teams evaluate every single batch against sensory benchmarks before shipping."
    ],
    imageUrl: "/images/supply-chain/roasting.png"
  },
  {
    id: "brewing",
    name: "Brewing & Consumption",
    subtitle: "The Final Alchemy",
    phaseNumber: 6,
    location: "Specialty Coffee Shop or Home Kitchen",
    duration: "2-5 minutes",
    physicalTransition: "Whole roasted beans -> Precision grind -> Liquid soluble extraction -> The Cup",
    keyActivities: [
      "Precision grinding: crushing whole beans into a uniform grind size using flat or conical burr grinders.",
      "Water mineral conditioning: filtering brewing water to hit specific magnesium (extracts fruit acids), calcium (boosts sweetness), and bicarbonate (buffers acidity) ratios.",
      "Extraction parameter control: regulating coffee-to-water ratio (e.g. 1:16), temperature (90-95°C), contact time, and agitation."
    ],
    detailedDescription: "The final step converts the dry roasted coffee seed into a liquid beverage. Brewing is a chemical extraction process where water acts as a solvent. Water dissolves and extracts organic acids, caffeine, lipids, and sugars from the cellulose structure. Dialing-in is crucial: under-extracted coffee tastes sour, salty, and thin because acids extract first. Over-extracted coffee tastes bitter, dry, and astringent because heavy bitter compounds and chlorogenic degradation products extract last.",
    qualityControls: [
      "Water testing: ensuring brewing water matches Specialty Coffee Association (SCA) specs (approx. 150 mg/L TDS, pH 7.0).",
      "TDS Refractometer analysis: measuring the refractive index of the brewed cup to verify it hits the extraction yield (18% to 22%).",
      "Daily grinder recalibration: adjusting burr spacing to compensate for changes in ambient humidity and bean degassing age."
    ],
    imageUrl: "/images/supply-chain/brewing.png"
  }
];

export const economicCalculations = {
  coffeeBag: {
    retailPrice: 20.00,
    title: "Specialty Roasted Beans Bag (250g / 8.8oz)",
    breakdown: [
      {
        label: "Farmer / Producer (Farmgate)",
        commodityPercentage: 7,
        specialtyPercentage: 30,
        description: "The money paid directly to the coffee grower. Under C-Market commodity rates, farmers often sell below cost of production ($1.40 for a $20 bag). Under Direct Trade specialty contracts, farmers receive a sustainable premium ($6.00 for a $20 bag), enabling fair wages and farm reinvestment."
      },
      {
        label: "Export, Hulling & Dry Milling",
        commodityPercentage: 6,
        specialtyPercentage: 9,
        description: "Fees for transporting parchment to dry mills, mechanical hulling, sorting out defects, and export taxes at origin."
      },
      {
        label: "Shipping, Import & Port Logistics",
        commodityPercentage: 8,
        specialtyPercentage: 11,
        description: "Ocean container freight forwarding, customs clearance, quarantine inspections, import warehouse storage, and delivery to the roastery."
      },
      {
        label: "Roaster Operations & Green Inventory",
        commodityPercentage: 55,
        specialtyPercentage: 35,
        description: "Includes roastery rent, energy costs, packaging bags with degassing valves, roasting labor, quality control cupping, green coffee storage inventory costs, and brand marketing."
      },
      {
        label: "Retailer / Distributor Margin",
        commodityPercentage: 24,
        specialtyPercentage: 15,
        description: "Distribution fees, wholesaler cuts, retail shelf fees, or direct-to-consumer online shipping and payment processing costs."
      }
    ]
  },
  cafeLatte: {
    retailPrice: 5.00,
    title: "Double Shot Specialty Cafe Latte (12oz)",
    breakdown: [
      {
        label: "Farmer / Coffee Beans Share",
        commodityPercentage: 2,
        specialtyPercentage: 8,
        description: "The cost value of the coffee beans used in the drink. On commodity rates, the farmer's share is a mere $0.10. Specialty direct-trade sourcing pays the farmer $0.40, a 4x increase, reflecting high green coffee quality."
      },
      {
        label: "Milling, Shipping & Import Logistics",
        commodityPercentage: 3,
        specialtyPercentage: 7,
        description: "Hulling, sorting, port duties, international shipping, and warehouse logistics transport to move the raw beans."
      },
      {
        label: "Milk, Cup, Lid & Consumables",
        commodityPercentage: 15,
        specialtyPercentage: 15,
        description: "Cost of fresh milk (or alternative oat/almond milks), compostable paper cup, plastic lid, sleeve, and stirrers."
      },
      {
        label: "Barista Labor & Benefits",
        commodityPercentage: 30,
        specialtyPercentage: 35,
        description: "Fair hourly wages, healthcare benefits, and training programs for professional baristas to dial-in grinders and steam milk."
      },
      {
        label: "Cafe Rent, Utilities & Equipment",
        commodityPercentage: 35,
        specialtyPercentage: 25,
        description: "High commercial retail rent, water filtration maintenance, power bills, and amortizing commercial espresso machines and grinders."
      },
      {
        label: "Cafe Net Profit Margin",
        commodityPercentage: 15,
        specialtyPercentage: 10,
        description: "The net profit retained by the cafe owner after all overheads, operations, and inventory are accounted for."
      }
    ]
  }
};

export const supplyChainRisks: SupplyChainRisk[] = [
  {
    stageName: "Cultivation",
    riskName: "Climate Shifting & Frost",
    impact: "Extreme weather patterns and rising global temperatures push the ideal Arabica belt to higher altitudes, squeezing cultivable land and triggering devastating leaf rust outbreaks.",
    mitigation: "Adopting agroforestry models (shade trees to cool microclimates) and cultivating resilient F1 hybrids (like Centroamericano) that offer high disease immunity with specialty cup scores."
  },
  {
    stageName: "Processing",
    riskName: "Over-Fermentation (Rot)",
    impact: "Wild microbes multiplying out of control inside wet-mill tanks can produce high levels of acetic acid, rendering the coffee sour, vinegary, and chemically defective.",
    mitigation: "Implementing strict temperature controls, tracking pH levels (not letting pH drop below 3.8), and utilizing sealed anaerobic steel tanks with yeast inoculations."
  },
  {
    stageName: "Milling",
    riskName: "Defect Contamination",
    impact: "A single sour, black, or moldy bean escaping sorting can ruin an entire cup, introducing harsh, chemical, and medicine-like notes to the sensory profile.",
    mitigation: "Using dual mechanical sorting (gravity tables + optical color sorters) followed by a final manual inspection on sorting conveyor belts."
  },
  {
    stageName: "Logistics",
    riskName: "Container Sweat & Odors",
    impact: "Climatic changes during oceanic transit cause water to condense on steel container ceilings, dropping onto jute bags. Beans absorb moisture and ship smells (fuel, wood, other cargo).",
    mitigation: "Packing green coffee in multi-layer hermetic bags (like GrainPro/Ecotact) that block gas and moisture exchange, keeping the internal relative humidity stable at ~10.5%."
  },
  {
    stageName: "Roasting",
    riskName: "Roast Defects (Baking/Scorching)",
    impact: "Scorching (drum temperature too high) chars the bean surface, causing smoky, charcoal flavors. Baking (heat rate of rise drops to flat) stalls chemical browning, resulting in flat, bread-like coffee.",
    mitigation: "Monitoring bean temperature curves in real-time with digital logging software (like Cropster) and adjusting thermal burner energy proactively."
  },
  {
    stageName: "Brewing",
    riskName: "Channelling & Stale Extraction",
    impact: "Poor grind consistency or uneven tamping causes hot water to force micro-channels through the coffee bed. The channelled water over-extracts (bitter), while the rest is under-extracted (sour).",
    mitigation: "Using professional-grade flat-burr grinders, employing grind-distribution tools (WDT), and verifying mineral balances (150 TDS) in brewing water."
  }
];
