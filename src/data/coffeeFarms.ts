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
    keyVarieties: ["Heirloom"],
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
  },

  // --- INDONESIA ---
  {
    id: "frinsa-collective",
    name: "Frinsa Collective (Java Frinsa Estate)",
    country: "Indonesia",
    region: "Pangalengan, West Java",
    altitude: "1,400–1,700m",
    signatureProduct: "Frinsa Manis (Anaerobic Natural with Lactobacillus)",
    keyVarieties: ["Andungsari", "Kartika"],
    processingMethod: "Anaerobic fermentation with selected local bacteria/yeast cultures",
    description: "Managed by Wildan Mustofa, Frinsa Estate is a pioneer of clean, washed, and experimentally fermented coffees in Indonesia, moving away from traditional wet-hulling. Their anaerobic fermentation lots show exceptional clarity, presenting bright tropical fruit, lactic sweetness, and complex berries.",
    prestigeNotes: "Pioneers of clean processing and lactic/yeast inoculations in Indonesia.",
    coeVictories: "Multiple entries in Indonesia's Cup of Excellence Top 10"
  },
  {
    id: "wahana-estate",
    name: "Wahana Estate",
    country: "Indonesia",
    region: "Sidikalang, North Sumatra",
    altitude: "1,200–1,500m",
    signatureProduct: "Wahana Rasuna (Natural)",
    keyVarieties: ["Toraja", "Andungsari"],
    processingMethod: "Pulped natural and full natural, dried on patio",
    description: "Wahana Estate is one of the largest single specialty estates in Sumatra. It features a dedicated R&D center, a free clinic for workers, and focuses on shade-grown, ecological agriculture, producing incredibly clean, sweet, and low-acid coffees that display complex herbal and chocolate tones.",
    prestigeNotes: "Sumatran estate leading the transition to single-varietal separation and clean processing.",
    coeVictories: "Prized by international roasting corporations; regularly wins local quality championships"
  },
  {
    id: "pantan-musara",
    name: "Pantan Musara Cooperative",
    country: "Indonesia",
    region: "Aceh Gayo, Sumatra",
    altitude: "1,550–1,700m",
    signatureProduct: "Pantan Musara Honey (Red Honey)",
    keyVarieties: ["Catimor"],
    processingMethod: "Clean pulped honey and slow-dried natural",
    description: "Situated in the high elevations of the Aceh Gayo highlands, Pantan Musara is a processing mill led by local smallholders. By utilizing raised beds and plastic dome drying structures to combat Sumatra's high humidity, they produce exceptionally clean, sweet coffees with cherry, apple, and black tea notes.",
    prestigeNotes: "Benchmark for Aceh Gayo clean honey and natural micro-lots.",
    coeVictories: "1st Place Winner in the inaugural Indonesia Cup of Excellence (2021)"
  },

  // --- PERU ---
  {
    id: "finca-el-cedro",
    name: "Finca El Cedro",
    country: "Peru",
    region: "Colasay, Cajamarca",
    altitude: "1,850–1,950m",
    signatureProduct: "Finca El Cedro Washed Caturra",
    keyVarieties: ["Caturra"],
    processingMethod: "36-hour dry fermentation, traditional washed, dried on raised beds",
    description: "Operated by Franklin Alarcón, Finca El Cedro is located in the high cloud forests of Cajamarca. Franklin's meticulous sorting and slow fermentation processes bring out sparkling malic acidity, green apple, peach, and floral jasmine notes that are highly prized in European specialty markets.",
    prestigeNotes: "Micro-lot benchmark for Cajamarca's high-altitude cloud forest terroir.",
    coeVictories: "1st Place Winner in the Peru Cup of Excellence (2020)"
  },
  {
    id: "finca-tasta",
    name: "Finca Tasta",
    country: "Peru",
    region: "Llaylla, Satipo, Junín",
    altitude: "1,450–1,650m",
    signatureProduct: "Tasta Honey Gesha",
    keyVarieties: ["Geisha", "Caturra", "Typica"],
    processingMethod: "Double anaerobic fermentation Red Honey",
    description: "Run by sibling duo Edith and Ivan Meza, Finca Tasta is a modern, eco-friendly estate that implements organic and regenerative farming. Edith is a Q-grader and uses her expertise to design precise fermentation profiles, yielding highly complex cups with honey, ginger, and citrus tones.",
    prestigeNotes: "Led by young siblings pioneering micro-mill and Q-grading standards in Junín.",
    coeVictories: "Regular finalist in Peru Cup of Excellence; high specialty exporter favorite"
  },
  {
    id: "finca-churupampa",
    name: "Finca Churupampa",
    country: "Peru",
    region: "Chirinos, San Ignacio, Cajamarca",
    altitude: "1,600–1,900m",
    signatureProduct: "Churupampa Organic Natural (Caturra)",
    keyVarieties: ["Caturra", "Typica"],
    processingMethod: "Suspended raised bed natural, slow-dry",
    description: "Owned by the Tocto family, Finca Churupampa operates both as a single estate and a cooperative hub. It provides agricultural training, soil analysis, and organic composting support to hundreds of surrounding smallholders, proving that community-driven quality leads to world-class sweet, chocolate, and stone-fruit profiles.",
    prestigeNotes: "Model farm for community organic training and specialty micro-milling.",
    coeVictories: "Highly respected social enterprise with multiple top-tier places in national competitions"
  },

  // --- BURUNDI ---
  {
    id: "kibingo-washing-station",
    name: "Kibingo Washing Station",
    country: "Burundi",
    region: "Kayanza Province",
    altitude: "1,700–1,900m",
    signatureProduct: "Kibingo Yeast Inoculated Natural",
    keyVarieties: ["Bourbon"],
    processingMethod: "Fermentation inoculated with specialty yeasts (e.g. Lalcafe Oro)",
    description: "Kibingo serves over 3,000 local smallholders, providing organic fertilizer from coffee pulp and young seedlings. The station is equipped with water treatment systems and utilizes double-fermentation methods and yeast fermentations to yield clean, juicy coffees with pineapple, black tea, and citrus complexity.",
    prestigeNotes: "Famous Kayanza washing station demonstrating yeast fermentation excellence.",
    coeVictories: "Multiple Cup of Excellence national awards, including Top 5 placements"
  },
  {
    id: "heza-washing-station",
    name: "Heza Washing Station (Long Miles)",
    country: "Burundi",
    region: "Kayanza Province (Mutana Hill)",
    altitude: "1,900–2,100m",
    signatureProduct: "Heza Natural (Bourbon)",
    keyVarieties: ["Bourbon"],
    processingMethod: "Hand-sorted dry natural, dried on elevated African beds under canopy",
    description: "Established by Ben and Kristy Carlson of the Long Miles Coffee Project, Heza is built on the side of a steep hill. It bridges the gap between wild smallholder farming and direct-trade roasters, protecting ancestral Bourbon varieties and producing coffees with wild red fruit, currant, and baking spice profiles.",
    prestigeNotes: "Part of the visionary Long Miles Coffee Project. Focuses on smallholder traceability.",
    coeVictories: "High-ranking Cup of Excellence places and regular choice for World Barista competition"
  },
  {
    id: "bukeye-washing-station",
    name: "Bukeye Washing Station (Long Miles)",
    country: "Burundi",
    region: "Muramvya Province",
    altitude: "1,750–1,850m",
    signatureProduct: "Bukeye Washed Bourbon",
    keyVarieties: ["Bourbon"],
    processingMethod: "Double-washed (dry ferment, wet ferment, then mountain water soak)",
    description: "Bukeye was the first washing station built by the Long Miles Coffee Project. Located near the forest reserves, it processes cherries from nearby hills (Gaharo, Ninga). The double-washed method produces classic Burundian clarity with sparkling phosphoric acidity, blackcurrant, and maple sweetness.",
    prestigeNotes: "The founding station of the Long Miles Coffee Project. High social impact.",
    coeVictories: "Highly prized by leading specialty roasters in the US, Europe, and Japan"
  },

  // --- RWANDA ---
  {
    id: "mahembe-washing-station",
    name: "Mahembe Washing Station",
    country: "Rwanda",
    region: "Nyamasheke, Western Province",
    altitude: "1,700–1,900m",
    signatureProduct: "Mahembe Washed Double Ferment",
    keyVarieties: ["Bourbon"],
    processingMethod: "Wet-fermented twice, soaked in clean spring water, sun-dried on beds",
    description: "Owned by Justin Musabyiama, Mahembe processes cherries from his 8-hectare farm and small outgrowers in Nyamasheke near Lake Kivu. Justin's obsessive attention to detail in sorting and floating cherries yields washed Bourbons with immense lime acidity, black tea structure, and floral honey sweetness.",
    prestigeNotes: "Family-owned washing station representing Nyamasheke's ultimate quality standards.",
    coeVictories: "Multiple Cup of Excellence winning lots (including Top 10 finishes)"
  },
  {
    id: "gasharu-coffee",
    name: "Gasharu Coffee",
    country: "Rwanda",
    region: "Macuba, Nyamasheke",
    altitude: "1,600–2,100m",
    signatureProduct: "Gasharu Intego (Anaerobic Natural)",
    keyVarieties: ["Bourbon"],
    processingMethod: "60-hour anaerobic fermentation in sealed tanks before slow drying",
    description: "Operated by the Celestin Rumashana family, Gasharu Coffee has supported local communities since the 1980s. Their 'Intego' experimental process mimics traditional banana wine fermentation, producing a highly complex cup with intense blackberry, passionfruit, and dark chocolate flavor notes.",
    prestigeNotes: "Generational farm focused on local community welfare and fermentation innovations.",
    coeVictories: "Highly rated in Rwanda Cup of Excellence and specialty auction programs"
  },
  {
    id: "kinini-washing-station",
    name: "Kinini Washing Station",
    country: "Rwanda",
    region: "Rulindo District",
    altitude: "1,800–2,200m",
    signatureProduct: "Kinini Natural Bourbon",
    keyVarieties: ["Bourbon"],
    processingMethod: "Raised African bed dry natural, covered during midday heat",
    description: "Kinini is a cooperative station formed by Jacquie Turner and Malcolm Clear. It works with local smallholders, returning 100% of profits back to community development, school construction, and health services. The high altitude of Rulindo results in slow cherry development, yielding sweet, complex cups with black tea, orange peel, and raspberry notes.",
    prestigeNotes: "100% community development reinvestment model with high-altitude Rulindo terroir.",
    coeVictories: "Regularly scores high in the Rwanda Cup of Excellence national jury evaluations"
  },

  // --- NICARAGUA ---
  {
    id: "finca-limoncillo",
    name: "Finca Limoncillo",
    country: "Nicaragua",
    region: "Yasica del Sur, Matagalpa",
    altitude: "1,200–1,350m",
    signatureProduct: "Limoncillo Funky Natural (Java)",
    keyVarieties: ["Java", "Pacamara"],
    processingMethod: "Extended 'Funky' natural (prolonged cherry fermentation in thick piles)",
    description: "Operated by the legendary Mierisch family, Finca Limoncillo is famous for its steep terrain, heavy shade canopy, and waterfalls. They are pioneers in cultivating exotic varieties in Nicaragua, particularly the long-bean Java, and are known for precise experimental drying methods.",
    prestigeNotes: "Pioneered the cultivation of Java variety in Central America.",
    coeVictories: "Multiple Cup of Excellence Top 10 awards (including 2nd Place)"
  },
  {
    id: "finca-los-delirios",
    name: "Finca Los Delirios",
    country: "Nicaragua",
    region: "Lipululo, Madriz",
    altitude: "1,250–1,550m",
    signatureProduct: "Los Delirios Anaerobic Java",
    keyVarieties: ["Java", "Bourbon", "Caturra"],
    processingMethod: "72-hour anaerobic fermentation in sealed bags",
    description: "Owned by master producer Eleanor de Jesus Blandon, Finca Los Delirios is a model of environmental conservation and shade-grown agriculture. Eleanor's anaerobic Javas are prized for their jasmine, lemongrass, and clean grape acidity, demonstrating the high-elevation potential of the Madriz region.",
    prestigeNotes: "Renowned for environmental conservation and clean anaerobic micro-lots.",
    coeVictories: "Consistent Cup of Excellence finalist; wins high premiums in direct-trade markets"
  },
  {
    id: "finca-san-jose",
    name: "Finca San Jose",
    country: "Nicaragua",
    region: "Jinotega",
    altitude: "1,250–1,400m",
    signatureProduct: "San Jose Miel (Red Honey Pacamara)",
    keyVarieties: ["Pacamara", "Caturra", "Java"],
    processingMethod: "Red Honey, slow-dry on shade beds",
    description: "Another flagship estate of the Mierisch family, Finca San Jose was where they developed many of their signature honey processing techniques. The volcanic soils and consistent mist (bajareque) yield highly sweet Pacamaras with intense red apple, caramel, and floral honey characteristics.",
    prestigeNotes: "Pioneer of honey processing and varietal separation in Jinotega.",
    coeVictories: "High placements in Nicaragua Cup of Excellence; partner farm to global champions"
  },

  // --- ECUADOR ---
  {
    id: "finca-soledad",
    name: "Finca Soledad",
    country: "Ecuador",
    region: "Intag Valley, Imbabura",
    altitude: "1,515m",
    signatureProduct: "Soledad Wave (Synergistic Anaerobic Typica Mejorada)",
    keyVarieties: ["Typica", "Sidra", "Geisha"],
    processingMethod: "Anaerobic fermentation in cherry followed by carbonic maceration",
    description: "Owned by Pepe Jijón, Finca Soledad is a biodiverse forest farm situated in the remote Intag Valley. Pepe, a former explorer, operates the farm as a sanctuary for Typica Mejorada and Sidra. His highly conceptualized fermentations yield incredibly complex coffees with jasmine, white tea, ginger, and distinct tropical notes.",
    prestigeNotes: "Globally famous benchmark for Typica Mejorada and Sidra.",
    coeVictories: "WBC favorite lot; 1st Place Winner in regional Ecuador auctions and top COE ranks"
  },
  {
    id: "hacienda-la-papaya",
    name: "Hacienda La Papaya",
    country: "Ecuador",
    region: "Saraguro, Loja",
    altitude: "2,000–2,100m",
    signatureProduct: "La Papaya Typica Mejorada (Washed / Oak Fermented)",
    keyVarieties: ["Typica", "Sidra"],
    processingMethod: "Controlled temperature tank fermentation, washed, finished in oak barrels",
    description: "Owned by Juan Peña, Hacienda La Papaya is a highly scientific research farm. Juan, a former flower exporter, utilizes precise agricultural sensors, leaf analysis, and tailored nutrient schedules. His Typica Mejorada lots exhibit sparkling phosphoric acidity, bergamot, and heavy peach sweetness.",
    prestigeNotes: "Super-high altitude scientific farming. Source farm for multiple World Barista competitors.",
    coeVictories: "1st Place Winner in the Ecuador Cup of Excellence; commands elite auction premiums"
  },
  {
    id: "finca-cruz-verde",
    name: "Finca Cruz Verde",
    country: "Ecuador",
    region: "Pichincha",
    altitude: "1,600–1,750m",
    signatureProduct: "Cruz Verde Sidra (Double Anaerobic Natural)",
    keyVarieties: ["Sidra", "Typica"],
    processingMethod: "Double anaerobic fermentation in cherry, slow-dry under shade",
    description: "Managed by the Gallegos family, Finca Cruz Verde is located on the volcanic slopes of Pichincha. Specializing in the Ecuador-native Sidra variety, their natural lots yield sparkling tropical fruit, red wine, and floral jasmine profiles, exemplifying Pichincha's rich volcanic terroir.",
    prestigeNotes: "Specialty hub for high-end Sidra micro-lots.",
    coeVictories: "High placing in Ecuador's Cup of Excellence"
  },

  // --- BOLIVIA ---
  {
    id: "finca-takesi",
    name: "Finca Takesi",
    country: "Bolivia",
    region: "Yanacachi, Yungas",
    altitude: "1,900–2,600m",
    signatureProduct: "Finca Takesi Geisha (Washed)",
    keyVarieties: ["Geisha", "Typica", "Caturra"],
    processingMethod: "Mountain-water washed, slow patio dried",
    description: "Finca Takesi is widely considered one of the highest coffee farms in the world, growing coffee at altitudes up to 2,600 meters. The freezing nights and thin air force the coffee cherries to mature extremely slowly, concentrating sugars and producing an unbelievably elegant cup with intense peach, jasmine, and sparkling citric acidity.",
    prestigeNotes: "The highest commercial coffee farm in the world. Exceptional bean density.",
    coeVictories: "Multiple Bolivia Cup of Excellence 1st Place awards; commands record global prices"
  },
  {
    id: "finca-alasitas",
    name: "Finca Alasitas",
    country: "Bolivia",
    region: "Caranavi, Yungas",
    altitude: "1,500–1,700m",
    signatureProduct: "Alasitas Coco Natural (Geisha)",
    keyVarieties: ["Geisha", "Sidra", "Batian"],
    processingMethod: "Coco Natural (dried slowly on raised beds in whole cherry, under plastic domes)",
    description: "Owned by the Rodriguez family (Agricafe Bolivia), Finca Alasitas was established to revitalize Bolivian specialty coffee after a production decline. Alasitas is a model farm testing advanced drying techniques and exotic varieties, producing coffees with intense stone fruit, vanilla, and floral honey profiles.",
    prestigeNotes: "Model farm for Bolivian coffee restoration led by the Rodriguez family.",
    coeVictories: "Multiple Cup of Excellence finalist and WBC competitor favorite"
  },
  {
    id: "finca-floripondio",
    name: "Finca Floripondio",
    country: "Bolivia",
    region: "Samaipata, Santa Cruz",
    altitude: "1,700m",
    signatureProduct: "Floripondio Batian (Natural)",
    keyVarieties: ["Batian", "Sidra", "Geisha", "Caturra"],
    processingMethod: "Slow dry natural on raised beds",
    description: "Also owned by the Rodriguez family, Floripondio is located in a unique microclimate in Samaipata, surrounded by native forest and ferns. The farm acts as a trial estate where over 50 different coffee varieties are tested to see how they adapt to Samaipata's cooler, humid climate.",
    prestigeNotes: "Global experimental varietal research center in Samaipata.",
    coeVictories: "Prized by boutique roasters worldwide for its rare varietal separations (like Batian)"
  },

  // --- JAMAICA ---
  {
    id: "clifton-mount",
    name: "Clifton Mount Coffee Estate",
    country: "Jamaica",
    region: "Blue Mountains",
    altitude: "1,300–1,400m",
    signatureProduct: "Clifton Mount Blue Mountain (Washed Typica)",
    keyVarieties: ["Typica"],
    processingMethod: "Traditional washed, patio sun-dried, rested in wooden barrels",
    description: "Clifton Mount is the oldest continuously functioning coffee estate in Jamaica, dating back to the 1750s. Located on the cool, misty slopes of Catherine's Peak, the farm is Rainforest Alliance certified. Their washed Typicas represent the classic Blue Mountain cup: mild acidity, exceptionally smooth body, and clean cocoa sweetness.",
    prestigeNotes: "The oldest active estate in Jamaica and the first Rainforest Alliance certified Blue Mountain farm.",
    coeVictories: "Commands extremely high global export premiums, particularly in Japan"
  },
  {
    id: "wallenford-estate",
    name: "Wallenford Estate",
    country: "Jamaica",
    region: "Blue Mountains",
    altitude: "1,100–1,350m",
    signatureProduct: "Wallenford Blue Mountain Typica",
    keyVarieties: ["Typica"],
    processingMethod: "Traditional washed, rested in white oak barrels before shipping",
    description: "Wallenford is a historic estate in the heart of the Blue Mountains. Known for mist-covered volcanic soils and slow growth, it produces coffees characterized by a smooth, balanced body, sweet herbal notes, and a clean finish without bitterness.",
    prestigeNotes: "Historic state-associated benchmark for authentic Blue Mountain certification.",
    coeVictories: "Renowned globally; highly sought after in premium auction markets"
  },
  {
    id: "sherwood-forest-estate",
    name: "Sherwood Forest Estate",
    country: "Jamaica",
    region: "Blue Mountains",
    altitude: "1,000–1,200m",
    signatureProduct: "Sherwood Forest Estate Washed",
    keyVarieties: ["Typica"],
    processingMethod: "Traditional washed, dried on historic stone barbecues (patios)",
    description: "Sherwood Forest Estate is a historic plantation with processing facilities dating back to the early 19th century. Known for its rich heritage and cool mountain microclimate, the estate produces classic washed Typica with notes of hazelnut, milk chocolate, and sweet orange.",
    prestigeNotes: "Historic estate featuring 19th-century stone drying patios.",
    coeVictories: "Prized by traditional connoisseurs for its classic, defect-free cleanliness"
  },

  // --- UNITED STATES ---
  {
    id: "monarch-coffee",
    name: "Monarch Coffee",
    country: "United States",
    region: "Kona, Big Island, Hawaii",
    altitude: "600–900m",
    signatureProduct: "Monarch Kona Gesha (Champagne Yeast Natural)",
    keyVarieties: ["Geisha", "Typica"],
    processingMethod: "Champagne yeast inoculated natural fermentation",
    description: "Owned by Greg and Susannah Payne, Monarch Coffee is located in the high-elevation Holualoa region of the Kona coffee belt. Monarch is famous for bringing Geisha to Kona and applying advanced wine-yeast fermentations, resulting in high-specialty cups with sparkling raspberry, wine, and tropical notes.",
    prestigeNotes: "Pioneers of Geisha cultivation and advanced yeast fermentation in the Kona region.",
    coeVictories: "1st Place Winner in the Hawaii Coffee Association cupping competition"
  },
  {
    id: "greenwell-farms",
    name: "Greenwell Farms",
    country: "United States",
    region: "Kealakekua, Kona, Hawaii",
    altitude: "450–600m",
    signatureProduct: "Greenwell Elizabeth J (Kona Typica Natural)",
    keyVarieties: ["Typica", "Bourbon"],
    processingMethod: "Full natural, slow-dried on raised deck structures (hoshidanas)",
    description: "Established in 1850 by Henry Nicholas Greenwell, this is one of Kona's oldest and most historic coffee estates. The farm utilizes volcanic soils, shade trees, and traditional hoshidana drying beds. Their 'Elizabeth J' natural Typica lot shows intense sweetness, cherry, and vanilla notes.",
    prestigeNotes: "One of the oldest continuously operated coffee farms in the United States.",
    coeVictories: "Multi-year champion in Hawaii Coffee Association cupping competitions"
  },
  {
    id: "kona-farm-direct",
    name: "Kona Farm Direct",
    country: "United States",
    region: "Kona, Big Island, Hawaii",
    altitude: "500–750m",
    signatureProduct: "Kona Typica Double Washed",
    keyVarieties: ["Typica"],
    processingMethod: "Double-washed (fermented twice with spring water)",
    description: "Managed by the Krahe family, this estate is dedicated to high-density organic farming and single-origin Kona Typica. By employing organic composts and double-washing techniques, they produce exceptionally clean, sweet coffees with notes of macadamia nut, honey, and citrus.",
    prestigeNotes: "Focuses on high-density organic farming and clean double-washing in Kona.",
    coeVictories: "High placing in Hawaii Coffee Association awards; supplies top US boutique roasters"
  },

  // --- MEXICO ---
  {
    id: "finca-santa-cruz",
    name: "Finca Santa Cruz",
    country: "Mexico",
    region: "La Concordia, Chiapas",
    altitude: "1,400–1,700m",
    signatureProduct: "Santa Cruz Geisha (Double Anaerobic Natural)",
    keyVarieties: ["Geisha", "Bourbon", "Typica"],
    processingMethod: "Double anaerobic fermentation in sealed barrels",
    description: "Owned by José Arguello, Finca Santa Cruz has put Mexico on the map for high-end specialty coffee. Jose's dedication to organic fertilizer, forest conservation, and advanced anaerobic fermentations yields Geishas with explosive jasmine, raspberry, and clean honey profiles.",
    prestigeNotes: "Benchmark farm for modern anaerobic fermentation in Chiapas.",
    coeVictories: "1st Place Winner in the Mexico Cup of Excellence (multiple years, including 2019 and 2021)"
  },
  {
    id: "finca-el-estribo-mexico",
    name: "Finca El Estribo",
    country: "Mexico",
    region: "Coatepec, Veracruz",
    altitude: "1,200–1,400m",
    signatureProduct: "El Estribo Typica (Washed)",
    keyVarieties: ["Typica", "Bourbon"],
    processingMethod: "Traditional washed, fermented in concrete tanks, patio dried",
    description: "Managed by the Landa family, Finca El Estribo is located in the historic Coatepec region of Veracruz. The farm maintains old-growth Typica plants under a dense native forest canopy. Their traditional washed process highlights sparkling red apple acidity, caramel, and chocolate sweetness.",
    prestigeNotes: "Historic Veracruz farm preserving old-growth Typica and native forest cover.",
    coeVictories: "Consistent Cup of Excellence top 10 finalist"
  },
  {
    id: "finca-las-delicias",
    name: "Finca Las Delicias",
    country: "Mexico",
    region: "Jaltenango, Chiapas",
    altitude: "1,300–1,500m",
    signatureProduct: "Las Delicias Natural Bourbon",
    keyVarieties: ["Bourbon", "Caturra"],
    processingMethod: "Natural, slow-dried on raised beds",
    description: "Managed by the Perez family, Finca Las Delicias is situated in the highlands of Chiapas. Their shade canopy protects ancient varieties, and their slow-dried natural processing highlights intense tropical fruit, cocoa, and sweet hazelnut notes.",
    prestigeNotes: "Specialist in shade-grown traditional cultivars in Chiapas.",
    coeVictories: "Frequently places in the Mexico Cup of Excellence top 10"
  }
];
