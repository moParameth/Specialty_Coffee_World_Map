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
  // --- PANAMA ---
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
    id: "finca-deborah",
    name: "Finca Deborah",
    country: "Panama",
    region: "Volcán, Chiriquí",
    altitude: "1,900–2,000m",
    signatureProduct: "Deborah Echo (Anaerobic Natural Geisha)",
    keyVarieties: ["Geisha"],
    processingMethod: "Nitrogen gas infused anaerobic fermentation",
    description: "Operated by Jamison Savage, Finca Deborah is a pioneer of advanced processing. Located at extreme altitudes, it leverages temperature control and carbonic/nitrogen macerations to produce ultra-clean, floral Geishas that dominate the World Barista Championships and represent the pinnacle of modern cup clarity.",
    prestigeNotes: "Pioneer of carbonic maceration and nitrogen flushing in coffee processing.",
    coeVictories: "Multiple World Barista Championship winning lots; high-end private auctions"
  },
  {
    id: "elida-estate",
    name: "Elida Estate",
    country: "Panama",
    region: "Alto Quiel, Boquete",
    altitude: "1,700–2,500m",
    signatureProduct: "Elida Geisha Green Tip (ASD Natural)",
    keyVarieties: ["Geisha", "Catuai", "Typica"],
    processingMethod: "Anaerobic Slow Dry (ASD)",
    description: "Owned by the Lamastus family since 1918, Elida Estate boasts some of the highest coffee-growing altitudes in Central America. Their ASD (Anaerobic Slow Dry) process involves fermenting cherries in sealed tanks for up to 5 days before an extended drying cycle, producing explosive tropical fruit and floral complexity.",
    prestigeNotes: "Produced the highest-scoring coffee in Best of Panama history.",
    coeVictories: "Multiple Best of Panama 1st place awards (Auction record holder at $1,029/lb and $2,200/lb)"
  },

  // --- ETHIOPIA ---
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
    id: "hambela-estate",
    name: "Hambela Estate",
    country: "Ethiopia",
    region: "Guji, Oromia",
    altitude: "1,900–2,200m",
    signatureProduct: "Hambela Wamena (Natural)",
    keyVarieties: ["Heirloom"],
    processingMethod: "Traditional Natural, raised African beds",
    description: "Managed by METAD (the Aman Adinew family), Hambela is an organic-certified estate in the high-altitude Guji zone. The estate provides extensive support to local outgrowers and is celebrated for producing clean, berry-forward, and highly floral natural-process coffees.",
    prestigeNotes: "Pioneer of modern estate-model specialty farming in Guji.",
    coeVictories: "Multiple SCAA Origin Awards; Top placing in Ethiopia Cup of Excellence"
  },
  {
    id: "guji-shakiso",
    name: "Guji Shakiso (Tade GG Estate)",
    country: "Ethiopia",
    region: "Shakiso, Guji",
    altitude: "1,800–2,000m",
    signatureProduct: "Tade GG Organic (Natural / Washed)",
    keyVarieties: ["Heirloom"],
    processingMethod: "Sun-dried on raised beds, eco-pulped washed",
    description: "Tade GG Estate, founded by agronomist Tesfaye Bekele, was established to restore forest lands after wildfire damage. The farm produces certified organic coffees with signature peach, jasmine, and citrus notes, showcasing the high-altitude volcanic terroir of Shakiso.",
    prestigeNotes: "Pioneer of organic coffee agroforestry in Shakiso.",
    coeVictories: "High-ranking Cup of Excellence finalist and international roaster favorite"
  },

  // --- COLOMBIA ---
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
    id: "finca-el-paraiso",
    name: "Finca El Paraíso",
    country: "Colombia",
    region: "Piendamó, Cauca",
    altitude: "1,850–1,930m",
    signatureProduct: "El Paraíso Geisha / Castillo (Double Anaerobic Thermal Shock)",
    keyVarieties: ["Castillo", "Geisha", "Pink Bourbon"],
    processingMethod: "Thermal Shock double anaerobic fermentation",
    description: "Owned by Diego Samuel Bermúdez, Finca El Paraíso is a highly technological farm resembling a bio-lab. Diego's signature 'Thermal Shock' method involves washing fermented cherries with warm water (40°C) then cold water (12°C) to lock in volatile aroma compounds, producing intense, fruit-punch like flavors of peach, strawberry, and yogurt.",
    prestigeNotes: "Creator of the thermal shock processing method. Highly scientific cultivation.",
    coeVictories: "Dominates Cup of Excellence auctions with record-breaking score profiles"
  },
  {
    id: "la-palma-y-el-tucan",
    name: "La Palma y El Tucán",
    country: "Colombia",
    region: "Zipacón, Cundinamarca",
    altitude: "1,650–1,800m",
    signatureProduct: "Sidra Lactic Fermentation",
    keyVarieties: ["Sidra", "Geisha", "SL28"],
    processingMethod: "Lactic fermentation in sealed tanks for 60-80 hours",
    description: "Founded by Felipe Sardi and Elisa Madriñan, this estate focuses on bio-dynamic farming, restoring biodiversity, and collaborating with local smallholders via their 'Neighbors & Crops' program. They are famous for popularizing the rare Sidra variety and advanced lactic acid fermentations.",
    prestigeNotes: "Pioneers of biodynamic farming and community outgrower programs in Colombia.",
    coeVictories: "Chosen by multiple World Barista Championship finalists for its unique lactic acidity"
  },

  // --- GUATEMALA ---
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
    id: "finca-santa-felisa",
    name: "Finca Santa Felisa",
    country: "Guatemala",
    region: "Acatenango",
    altitude: "1,550–1,900m",
    signatureProduct: "Red Pacamara Double Fermentation (Koji / Yeast)",
    keyVarieties: ["Pacamara", "Geisha", "Bourbon", "Typica", "Sudan Rume"],
    processingMethod: "Koji-yeast co-fermentation, slow dry under shade",
    description: "Operated by siblings Anabella and Antonio Meneses, Santa Felisa has been producing coffee since 1904. Anabella, an agronomist and Q-grader, approaches processing as a science, customizing yeast strains, utilizing Koji mold, and tracking sugars via Brix meters to create complex sensory profiles.",
    prestigeNotes: "Pioneer of Koji fermentation in Central America.",
    coeVictories: "1st Place Cup of Excellence winner; annual private auction sets benchmark prices"
  },
  {
    id: "finca-bella-vista",
    name: "Finca Bella Vista",
    country: "Guatemala",
    region: "Antigua Guatemala",
    altitude: "1,500–1,800m",
    signatureProduct: "Bella Carmona Bourbon (Classic Washed)",
    keyVarieties: ["Bourbon", "Caturra", "Villa Sarchi"],
    processingMethod: "Traditional washed, patio sun-dried",
    description: "Managed by Luis Pedro Zelaya Zamora, Finca Bella Vista is a historic farm in the Antigua valley. Leveraging rich volcanic soils, shade trees, and Zelaya's agronomic expertise, Bella Vista produces classic Antigua coffees with deep chocolate, brown sugar, and clean orange acidity.",
    prestigeNotes: "Benchmark for traditional washed Antigua coffee under Luis Pedro Zelaya.",
    coeVictories: "Regular finalist in Guatemala Cup of Excellence; supplies top specialty roasters globally"
  },

  // --- KENYA ---
  {
    id: "gachatha-factory",
    name: "Gachatha Factory (FCS)",
    country: "Kenya",
    region: "Nyeri County",
    altitude: "1,800–2,100m",
    signatureProduct: "Gachatha AA (SL28 & SL34)",
    keyVarieties: ["SL28", "SL34", "Ruiru 11", "Batian"],
    processingMethod: "Traditional Kenyan double-fermentation washed process",
    description: "Though Kenya operates primarily through cooperative washing stations ('factories') rather than private estates, Gachatha is globally celebrated as a premier micro-lot producer. Drawing from volcanic soils near the Aberdare mountain range, Gachatha produces coffees with intense blackcurrant, grape, and phosphoric acidity, representing the pinnacle of Kenyan complexity.",
    prestigeNotes: "Pinnacle of Nyeri County cooperative quality. Renowned for rich phosphoric acidity.",
    coeVictories: "Consistently graded as top AA lots, commanding record premiums at the Nairobi Coffee Exchange"
  },
  {
    id: "ndumberi-factory",
    name: "Ndumberi Factory (Kiambu FCS)",
    country: "Kenya",
    region: "Kiambu County",
    altitude: "1,700–1,900m",
    signatureProduct: "Ndumberi AB (Washed SL28)",
    keyVarieties: ["SL28", "SL34"],
    processingMethod: "Double-washed (fermented twice, soaked in clean spring water)",
    description: "Ndumberi is part of the Ndumberi Coffee Farmers' Cooperative Society in Kiambu, close to Nairobi. Benefiting from deep red volcanic soils, Ndumberi produces bright, sparkling coffees with notes of grapefruit, hibiscus, and black tea.",
    prestigeNotes: "Iconic Kiambu origin cooperative with historic SL28 plantings.",
    coeVictories: "Frequently commands high prices at the Nairobi Coffee Auction; prized by European and Asian roasters"
  },
  {
    id: "kangocho-factory",
    name: "Kangocho Factory (Gikanda FCS)",
    country: "Kenya",
    region: "Karatina, Nyeri County",
    altitude: "1,700–1,850m",
    signatureProduct: "Kangocho AA (Double Washed SL28/SL34)",
    keyVarieties: ["SL28", "SL34", "Batian"],
    processingMethod: "Traditional washed, triple-rinsed with local river water, patio dried",
    description: "Kangocho is operated by the Gikanda Farmers Cooperative Society, known for some of the most rigorous sorting standards in Nyeri. The cooperative pays high premiums back to growers, ensuring exceptional cherry selection that translates to intense red currant, blood orange, and sweet sugarcane flavors.",
    prestigeNotes: "Part of the famous Gikanda FCS (along with Ndaroini). Superb cherry sorting standards.",
    coeVictories: "Consistently earns highest grades at Nairobi Coffee Exchange, frequently winning buyer auctions"
  },

  // --- COSTA RICA ---
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
    id: "volcan-azul",
    name: "Volcán Azul",
    country: "Costa Rica",
    region: "West Valley",
    altitude: "1,500–1,700m",
    signatureProduct: "Volcán Azul SL28 / Geisha (Double Anaerobic Natural)",
    keyVarieties: ["SL28", "Geisha", "Caturra", "Catuai", "Villa Sarchi"],
    processingMethod: "Extended anaerobic fermentation, slow-drying",
    description: "Led by Alejo Castro Kahle, a fifth-generation producer, Volcán Azul represents over 150 years of family heritage. Castro has introduced exotic cultivars like SL28 and Geisha to the farm's volcanic slopes, pairing them with innovative fermentations to secure top global positions in competitions.",
    prestigeNotes: "Over a century of heritage combined with advanced varietal selection (SL28, Geisha).",
    coeVictories: "Multiple Top-3 finishes in the Costa Rica Cup of Excellence (2nd place in 2020 with Geisha Natural)"
  },
  {
    id: "hacienda-la-minita",
    name: "Hacienda La Minita",
    country: "Costa Rica",
    region: "Tarrazú",
    altitude: "1,200–1,800m",
    signatureProduct: "La Minita (Classic Washed)",
    keyVarieties: ["Caturra", "Catuai"],
    processingMethod: "Meticulous traditional washed, mechanical pre-drying, and hand-sorting",
    description: "Hacienda La Minita is one of the most famous estate coffees in the world, renowned for its absolute consistency. Founded by Bill McAlpin, the farm employs a massive hand-sorting staff that inspects every bean, ensuring a completely defect-free product with a balanced citrus, chocolate, and stone fruit profile.",
    prestigeNotes: "Pioneer of extreme quality control and hand-sorting in specialty coffee.",
    coeVictories: "Highly respected estate brand; widely considered the ultimate standard for classic Tarrazú profile"
  },

  // --- EL SALVADOR ---
  {
    id: "finca-kilimanjaro",
    name: "Finca Kilimanjaro",
    country: "El Salvador",
    region: "Santa Ana Volcano",
    altitude: "1,580–1,720m",
    signatureProduct: "Aida Batlle Selection (Kenya-Process Bourbon/SL28)",
    keyVarieties: ["Bourbon", "SL28"],
    processingMethod: "Double-washed 'Kenya process' and carbonic maceration",
    description: "Finca Kilimanjaro gained legendary status under coffee pioneer Aida Batlle. Located on the fertile slopes of the Santa Ana Volcano, the farm famously adapted Kenyan double-fermentation and soaking methods to Salvadoran Bourbon varieties, creating a cup that combines heavy body with sparkling, tea-like clarity and citrus complexity.",
    prestigeNotes: "Founded by coffee visionary Aida Batlle. Adapted African processing to Central America.",
    coeVictories: "Inaugural El Salvador Cup of Excellence Winner and champion-maker for WBC competitors"
  },
  {
    id: "finca-los-planes",
    name: "Finca Los Planes",
    country: "El Salvador",
    region: "Citalá, Chalatenango",
    altitude: "1,450–1,700m",
    signatureProduct: "Los Planes Pacamara (Washed / Natural)",
    keyVarieties: ["Pacamara", "Bourbon"],
    processingMethod: "Traditional washed, mountain water fermented, patio dried",
    description: "Owned by Sergio Ticas Yeyes, Finca Los Planes is located in the mountainous northwest of El Salvador near the Honduran border. The farm is famous for putting Chalatenango on the specialty map through its massive, complex Pacamara lots, characterized by herbal, blackberry, and chocolate profiles.",
    prestigeNotes: "Landmark farm for the Chalatenango region and Pacamara cultivar.",
    coeVictories: "2nd Place Winner in the 2006 Cup of Excellence, and multiple top ten placements"
  },
  {
    id: "finca-el-soplo",
    name: "Finca El Soplo",
    country: "El Salvador",
    region: "Apaneca-Ilamatepec, Ahuachapán",
    altitude: "1,500–1,600m",
    signatureProduct: "Pacas Viejo (Natural)",
    keyVarieties: ["Pacas", "Bourbon", "Pacamara"],
    processingMethod: "Anaerobic natural in sealed steel containers",
    description: "Part of the Ruffatti family estates, Finca El Soplo is a biodiverse shade-grown farm focusing on soil regeneration and ancestral El Salvador varieties (specifically old-vine Pacas, known as Pacas Viejo). Under the direction of Rodolfo Ruffatti, the farm experiments with native wild yeast fermentations.",
    prestigeNotes: "Focuses on ancestral cultivars and wild native fermentations.",
    coeVictories: "High demand in European specialty roaster auctions"
  },

  // --- BRAZIL ---
  {
    id: "fazenda-daterra",
    name: "Fazenda Daterra",
    country: "Brazil",
    region: "Patrocínio, Cerrado Mineiro",
    altitude: "1,150–1,220m",
    signatureProduct: "Daterra Masterpieces (Aramosa / Laurina)",
    keyVarieties: ["Laurina", "Aramosa", "Catuai", "Mundo Novo"],
    processingMethod: "Semi-washed, fully natural, and custom anaerobic in steel tanks",
    description: "Fazenda Daterra is a highly technological coffee estate and Brazil's first carbon-negative B-Corp farm. Meticulously organized into micro-plots, Daterra operates a dedicated R&D lab that breeds low-caffeine species like Aramosa and Laurina. They are famous for their 'Masterpieces' auction lots, vacuum-packed at source to preserve freshness.",
    prestigeNotes: "Brazil's premier sustainable B-Corp farm. High-technology sorting and vacuum-packed lots.",
    coeVictories: "Rainforest Alliance certified pioneer; source farm for multiple World Barista Champion winning routines"
  },
  {
    id: "fazenda-ambiental-fortaleza",
    name: "Fazenda Ambiental Fortaleza (FAF)",
    country: "Brazil",
    region: "Mococa, East São Paulo",
    altitude: "900–1,400m",
    signatureProduct: "Bobolink Catuai (Pulped Natural)",
    keyVarieties: ["Catuai", "Bourbon", "Mundo Novo"],
    processingMethod: "Pulped natural, suspended African bed drying",
    description: "Owned by Silvia and Marcos Croce, FAF is a model for environmental consciousness in Brazil. They transformed a traditional high-chemical estate into a biodiverse organic polyculture farm. Under the 'Bobolink' project name, they support a network of smallholder farms in adopting clean, chemical-free practices.",
    prestigeNotes: "Global pioneer in sustainable organic coffee agriculture and community education.",
    coeVictories: "Winner of numerous sustainability and quality accolades (SCA Sustainability Award)"
  },
  {
    id: "fazenda-sertao",
    name: "Fazenda Sertão",
    country: "Brazil",
    region: "Carmo de Minas",
    altitude: "1,100–1,450m",
    signatureProduct: "Sertão Yellow Bourbon (Natural)",
    keyVarieties: ["Bourbon", "Catuai"],
    processingMethod: "Classic Brazilian Natural, patio sun-dried",
    description: "A historic estate dating back to 1912, Sertão is managed by the Pereira family. Located in the fertile hills of Carmo de Minas, the farm has ideal microclimate conditions with mild temperatures and high altitudes. Their Yellow Bourbon natural lots exhibit signature notes of milk chocolate, hazelnut, and sweet yellow fruits.",
    prestigeNotes: "One of the pioneering estates in Carmo de Minas specialty coffee movement.",
    coeVictories: "Frequently ranks in the Brazil Cup of Excellence top 10"
  },

  // --- YEMEN ---
  {
    id: "jabal-haraz",
    name: "Jabal Haraz Cooperatives",
    country: "Yemen",
    region: "Haraz Mountains",
    altitude: "1,800–2,400m",
    signatureProduct: "Haraaz Red (Ancient Natural)",
    keyVarieties: ["Heirloom"], // maps to landraces
    processingMethod: "Traditional dry-natural, rooftop sun-dried",
    description: "Grown on historic stone terraces carved into the steep vertical cliffs of the Haraz Mountains. Yemen's unique high-altitude, arid climate forces coffee plants to concentrate sugars in the cherries, yielding natural coffees with complex spices (cardamom, cinnamon), dark chocolate, and heavy wine-like complexity. Farms are organized into local cooperatives that protect ancestral varieties.",
    prestigeNotes: "Terraced mountain agriculture dating back over 500 years. Extreme dry-grown terroir.",
    coeVictories: "Extremely high specialty premiums, leading Yemen's specialty coffee renaissance"
  },
  {
    id: "bait-alal-cooperative",
    name: "Bait Alal Cooperative",
    country: "Yemen",
    region: "Hayma Outer, Sana'a",
    altitude: "2,200–2,400m",
    signatureProduct: "Bait Alal Yemenia (Natural)",
    keyVarieties: ["Yemenia"],
    processingMethod: "Extended slow natural drying on elevated raised screens",
    description: "Bait Alal is a high-altitude farming village in the rugged Hayma Outer district. The cooperative is famous for producing 'Yemenia,' a new parent genetic group of Arabica coffee discovered in 2020. This coffee exhibits incredible notes of passionfruit, rose water, and complex sandalwood.",
    prestigeNotes: "Key center for the cultivation of Yemenia, the mother group of Arabica.",
    coeVictories: "Achieved record prices ($400+/lb) at national specialty auctions"
  },
  {
    id: "bani-ismail-cooperative",
    name: "Bani Ismail Cooperative",
    country: "Yemen",
    region: "Hayma Inner, Sana'a",
    altitude: "2,100–2,300m",
    signatureProduct: "Bani Ismail Ancient Natural",
    keyVarieties: ["Heirloom"],
    processingMethod: "Slow dry in cherry under partial shade",
    description: "Comprising smallholder families farming tiny plots of terraced land in the remote Bani Ismail valley. The plants are irrigated with mountain spring water and dried slowly in the shade to maintain acidity, resulting in clean, intense dried-cherry, red wine, and jasmine flavors.",
    prestigeNotes: "Renowned for high-acid, clean stone fruit profiles in Yemen.",
    coeVictories: "Highly sought-after micro-lots, commanding massive premiums from specialty importers"
  },

  // --- HONDURAS ---
  {
    id: "finca-el-puente",
    name: "Finca El Puente",
    country: "Honduras",
    region: "Chinacla, Marcala",
    altitude: "1,500–1,680m",
    signatureProduct: "El Puente Geisha (Natural Anaerobic)",
    keyVarieties: ["Geisha", "Java", "Pacas", "Catuai"],
    processingMethod: "Anaerobic fermentation in sealed barrels, raised bed drying",
    description: "Owned by husband-and-wife duo Moises Herrera and Marysabel Caballero (a third-generation grower), Finca El Puente is famous for its clean farming practices and environmental preservation. Their Geisha lots are widely celebrated for intense jasmine, peach, and honey sweetness, showing the incredible terroir potential of Honduras.",
    prestigeNotes: "Honduras' premier quality estate, demonstrating COE dominance.",
    coeVictories: "1st Place Winner in the Honduras Cup of Excellence (2016)"
  },
  {
    id: "finca-santa-elena",
    name: "Finca Santa Elena",
    country: "Honduras",
    region: "San Juan, Intibucá",
    altitude: "1,650–1,800m",
    signatureProduct: "Santa Elena Honey Pacamara",
    keyVarieties: ["Pacamara", "Catuai", "Bourbon"],
    processingMethod: "Red Honey (pulped with 80% mucilage, slow-dried on beds)",
    description: "Managed by Jobneel Caceres Diosa, Finca Santa Elena is located in one of Honduras' highest and coldest growing regions. The cold nights slow down coffee cherry maturation, creating extremely dense seeds that produce complex green apple acidity, caramel body, and intense floral aromas.",
    prestigeNotes: "High-altitude cold climate terroir. Specializes in Pacamara honey processing.",
    coeVictories: "Regularly scores in the top 10 of Honduras Cup of Excellence"
  },
  {
    id: "finca-los-robles",
    name: "Finca Los Robles",
    country: "Honduras",
    region: "Santiago de Puringla, La Paz",
    altitude: "1,550–1,700m",
    signatureProduct: "Los Robles Parainema (Washed)",
    keyVarieties: ["Parainema", "Pacas"],
    processingMethod: "24-hour dry fermentation washed, patio dried",
    description: "Operated by the Martinez family, Finca Los Robles is celebrated for its mastery of the 'Parainema' variety (a Sarchimor selection resistant to coffee leaf rust). This farm showcases Parainema's capacity to produce high-specialty cups with distinct eucalyptus, lemongrass, and bright green apple notes.",
    prestigeNotes: "Benchmark farm for specialty Parainema production in Honduras.",
    coeVictories: "Multiple Cup of Excellence national winner"
  }
];
