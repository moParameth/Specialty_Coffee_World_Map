export interface CoffeeFarm {
  id: string;
  name: string;
  country: string;
  region: string;
  altitude: string;
  signatureProduct: string;
  keyVarieties: string[];
  processingMethod: string;
  description: string;
  prestigeNotes: string;
  coeVictories: string;
}

export const coffeeFarms: CoffeeFarm[] = [
  {
    id: "hacienda-la-esmeralda",
    name: "Hacienda La Esmeralda",
    country: "Panama",
    region: "Boquete, Chiriquí",
    altitude: "1,600–1,850m",
    signatureProduct: "Esmeralda Special Geisha (Aerobic/Anaerobic Natural)",
    keyVarieties: ["Geisha", "Catuai"],
    processingMethod: "Extended fermentation, slow-dry patio drying",
    description: "Owned by the Peterson family, Hacienda La Esmeralda is legendary for discovering and introducing the Geisha variety to the specialty coffee world at the 2004 Best of Panama auction. Grown on the slopes of the active Volcán Barú, their Geisha lots have consistently shattered global auction price records and redefined the sensory benchmarks of specialty coffee.",
    prestigeNotes: "The birthplace of commercial Geisha. Multiple 1st place Best of Panama awards.",
    coeVictories: "Consistent multi-year Best of Panama Champions (Auction Record: $2,568/lb)"
  },
  {
    id: "gesha-village",
    name: "Gesha Village Coffee Estate",
    country: "Ethiopia",
    region: "Bench Maji, South West Ethiopia",
    altitude: "1,900–2,100m",
    signatureProduct: "Gesha Village 1931 (Chabi / Gori Gesha)",
    keyVarieties: ["Geisha (1931 selection)", "Gori Gesha", "Illubabor Forest"],
    processingMethod: "Natural, Honey, and custom anaerobic dry fermentation",
    description: "Established by Adam Gerber and Rachel Samuel in 2011 near the wild birthplace of the Geisha variety. Spanning 471 hectares of pristine native forest, Gesha Village was meticulously built by gathering wild seeds from the nearby Gori Gesha forest, resulting in genetically authentic, highly complex, tea-like, and floral profiles.",
    prestigeNotes: "Direct genetic collection from the progenitor Geisha forest. High environmental biodiversity.",
    coeVictories: "World Barista Championship favorite; annual private auction sets benchmark prices"
  },
  {
    id: "cafe-granja-la-esperanza",
    name: "Cafe Granja La Esperanza",
    country: "Colombia",
    region: "Valle del Cauca",
    altitude: "1,430–2,000m",
    signatureProduct: "Sudan Rume / Tres Dragones Natural (Bourbon)",
    keyVarieties: ["Sudan Rume", "Geisha", "Laurina", "Pink Bourbon", "Mandela"],
    processingMethod: "Controlled temperature anaerobic fermentations, double-washed",
    description: "Granja La Esperanza is a multi-estate powerhouse (Fincas Margaritas, Potosi, Las Flores, Cerro Azul) that pioneered the cultivation of exotic varieties in Colombia. They are globally renowned for their scientific approach to cultivation and experimental processing, including their famous lactic and anaerobic fermentations.",
    prestigeNotes: "Pioneers of experimental processing and exotic varietals in Colombia.",
    coeVictories: "Multiple Triple-Crown victories: Colombia Cup of Excellence & SCAA Coffee of the Year"
  },
  {
    id: "finca-el-injerto",
    name: "Finca El Injerto",
    country: "Guatemala",
    region: "La Libertad, Huehuetenango",
    altitude: "1,500–2,000m",
    signatureProduct: "Legendary Geisha / Pandora Pacamara",
    keyVarieties: ["Pacamara", "Geisha", "Bourbon", "Maragogype"],
    processingMethod: "Soaked spring-water washing, slow African-bed drying",
    description: "Owned by the Aguirre family since 1874, Finca El Injerto is the first coffee farm in Guatemala to be certified carbon-neutral. Famous for Huehuetenango's rich volcanic soils and pure mountain spring water, the farm has produced legendary Pacamara and Geisha lots that exhibit immense structure, complex malic acidity, and intense sweetness.",
    prestigeNotes: "First carbon-neutral farm in Guatemala. Ultimate benchmark for the Pacamara variety.",
    coeVictories: "Record-breaking 9-time Guatemala Cup of Excellence 1st Place Winner"
  },
  {
    id: "gachatha-factory",
    name: "Gachatha Factory (FCS)",
    country: "Kenya",
    region: "Nyeri County",
    altitude: "1,800–2,100m",
    signatureProduct: "Gachatha AA (SL28 & SL34)",
    keyVarieties: ["SL28", "SL34", "Ruiru 11", "Batian"],
    processingMethod: "Traditional Kenyan double-fermentation washed process",
    description: "Though Kenya operates primarily through cooperative washing stations ('factories') rather than private estates, Gachatha is globally celebrated as a premier micro-lot producer. Drawing from volcanic soils near the Aberdare mountain range, Gachatha produces coffees with intense blackcurrant, grape, and phosphoric acidity, representing the pinnacle of Kenyan profile complexity.",
    prestigeNotes: "Pinnacle of Nyeri County cooperative quality. Renowned for rich phosphoric acidity.",
    coeVictories: "Consistently graded as top AA lots, commanding record premiums at the Nairobi Coffee Exchange"
  },
  {
    id: "las-lajas",
    name: "Las Lajas Micro-Mill",
    country: "Costa Rica",
    region: "Sabanilla de Alajuela",
    altitude: "1,300–1,500m",
    signatureProduct: "Alma Negra / Perla Negra (Anaerobic Natural)",
    keyVarieties: ["Caturra", "Catuai", "Villa Sarchi", "SL28"],
    processingMethod: "Signature organic Honey processes (Yellow, Red, Black) and slow-dry Naturals",
    description: "Operated by Oscar and Francisca Chacón, Las Lajas is a pioneer of organic coffee farming and micro-mill processing in Costa Rica. After an earthquake cut off water to their mill in 2008, they pioneered the honey and natural drying techniques in Costa Rica. They are famous for their precise Brix-metered harvesting and shade-covered raised drying beds.",
    prestigeNotes: "Pioneers of organic farming and micro-mill honey processing in Central America.",
    coeVictories: "Frequent Cup of Excellence Top 10 finalist; highly sought-after private brand partnerships"
  },
  {
    id: "finca-kilimanjaro",
    name: "Finca Kilimanjaro",
    country: "El Salvador",
    region: "Santa Ana Volcano",
    altitude: "1,580–1,720m",
    signatureProduct: "Aida Batlle Selection (Kenya-Process Bourbon/SL28)",
    keyVarieties: ["Bourbon", "SL28", "Tekisic"],
    processingMethod: "Double-washed 'Kenya process' and carbonic maceration",
    description: "Finca Kilimanjaro gained legendary status under coffee pioneer Aida Batlle. Located on the fertile slopes of the Santa Ana Volcano, the farm famously adapted Kenyan double-fermentation and soaking methods to Salvadoran Bourbon varieties, creating a cup that combines heavy body with sparkling, tea-like clarity and citrus complexity.",
    prestigeNotes: "Founded by coffee visionary Aida Batlle. Adapted African processing to Central America.",
    coeVictories: "Inaugural El Salvador Cup of Excellence Winner and champion-maker for WBC competitors"
  },
  {
    id: "fazenda-daterra",
    name: "Fazenda Daterra",
    country: "Brazil",
    region: "Patrocínio, Cerrado Mineiro",
    altitude: "1,150–1,220m",
    signatureProduct: "Daterra Masterpieces (Aramosa / Laurina)",
    keyVarieties: ["Laurina", "Aramosa", "Catuai", "Mundo Novo"],
    processingMethod: "Semi-washed, fully natural, and custom anaerobic anaerobic jars",
    description: "Fazenda Daterra is a highly technological coffee estate and Brazil's first carbon-negative B-Corp farm. Meticulously organized into micro-plots, Daterra operates a dedicated R&D lab that breeds low-caffeine species like Aramosa and Laurina. They are famous for their 'Masterpieces' auction lots, vacuum-packed at source to preserve freshness.",
    prestigeNotes: "Brazil's premier sustainable B-Corp farm. High-technology sorting and vacuum-packed lots.",
    coeVictories: "Rainforest Alliance certified pioneer; source farm for multiple World Barista Champion winning routines"
  },
  {
    id: "jabal-haraz",
    name: "Jabal Haraz Cooperatives",
    country: "Yemen",
    region: "Haraz Mountains",
    altitude: "1,800–2,400m",
    signatureProduct: "Haraaz Red (Ancient Natural)",
    keyVarieties: ["Uddaini", "Jaadi", "Tuffahi"],
    processingMethod: "Traditional dry-natural, rooftop sun-dried",
    description: "Grown on historic stone terraces carved into the steep vertical cliffs of the Haraz Mountains. Yemen's unique high-altitude, arid climate forces coffee plants to concentrate sugars in the cherries, yielding natural coffees with complex spices (cardamom, cinnamon), dark chocolate, and heavy wine-like complexity. Farms are organized into local cooperatives that protect ancestral varieties.",
    prestigeNotes: "Terraced mountain agriculture dating back over 500 years. Extreme dry-grown terroir.",
    coeVictories: "Extremely high specialty premiums, leading Yemen's specialty coffee renaissance"
  },
  {
    id: "finca-el-puente",
    name: "Finca El Puente",
    country: "Honduras",
    region: "Chinave, Marcala",
    altitude: "1,500–1,680m",
    signatureProduct: "El Puente Geisha (Natural Anaerobic)",
    keyVarieties: ["Geisha", "Java", "Pacas", "Catuai"],
    processingMethod: "Anaerobic fermentation in sealed barrels, raised bed drying",
    description: "Owned by husband-and-wife duo Moises Herrera and Marysabel Caballero (a third-generation grower), Finca El Puente is famous for its clean farming practices and environmental preservation. Their Geisha lots are widely celebrated for intense jasmine, peach, and honey sweetness, showing the incredible terroir potential of Honduras.",
    prestigeNotes: "Honduras' premier quality estate, demonstrating COE dominance.",
    coeVictories: "1st Place Winner in the Honduras Cup of Excellence (2016)"
  }
];
