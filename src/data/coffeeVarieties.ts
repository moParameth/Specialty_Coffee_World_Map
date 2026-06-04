import type { CoffeeVariety } from "@/types/variety";

export const coffeeVarieties: CoffeeVariety[] = [
  {
    id: "geisha",
    name: "Geisha",
    alternativeNames: ["Gesha", "Abyssinian"],
    species: "Arabica",
    lineage: "Ethiopian Landrace",
    parentage: "Selection from wild Ethiopian landrace",
    origin: "Ethiopia (Gori Gesha forest)",
    plantStature: "Tall",
    beanSize: "High",
    yieldPotential: "Low",
    qualityPotential: "Exceptional",
    optimalAltitude: "1400–2100+ m",
    leafRustResistance: "Low",
    coffeeBerryDiseaseResistance: "Low",
    nematodeResistance: "Unknown",
    nutritionRequirement: "High",
    commonCountries: ["Panama", "Ethiopia", "Colombia", "Costa Rica", "Malawi"],
    flavorNotes: ["jasmine", "bergamot", "floral", "peach", "mandarin orange", "black tea"],
    summary: "One of the most famous and expensive coffee varieties in the world, renowned for its highly distinct floral, tea-like cup profile. It was collected from Ethiopia in the 1930s, sent to Kenya and Tanzania, and later introduced to Central America (Costa Rica and Panama) where it found fame at Hacienda La Esmeralda in Boquete, Panama.",
    relatedVarieties: ["java"],
    sources: [
      {
        name: "World Coffee Research - Geisha",
        url: "https://varieties.worldcoffeeresearch.org/varieties/geisha",
        note: "Primary traits and lineage reference"
      },
      {
        name: "SCA Coffee Value Assessment",
        url: "https://sca.coffee",
        note: "Sensory descriptors context"
      }
    ]
  },
  {
    id: "typica",
    name: "Typica",
    alternativeNames: ["Criollo", "Sumatra", "Indio"],
    species: "Arabica",
    lineage: "Typica",
    parentage: "Direct descendant of early Arabica selections from Yemen",
    origin: "Yemen (via India and Indonesia)",
    plantStature: "Tall",
    beanSize: "High",
    yieldPotential: "Low",
    qualityPotential: "Very High",
    optimalAltitude: "1000–2000 m",
    leafRustResistance: "Low",
    coffeeBerryDiseaseResistance: "Low",
    nematodeResistance: "Low",
    nutritionRequirement: "Medium",
    commonCountries: ["Jamaica", "Peru", "Colombia", "Brazil", "Indonesia", "Hawaii (USA)"],
    flavorNotes: ["chocolate", "caramel", "clean sweetness", "mild citrus", "nutty"],
    summary: "A tall, low-yielding variety with high cup quality. Along with Bourbon, it forms the genetic foundation of most modern Arabica cultivars. Originating from Yemen, it was brought to India and then to Java (Indonesia) by the Dutch, eventually spreading globally to become the standard typica lineage.",
    relatedVarieties: ["bourbon", "caturra", "mundo-novo", "maragogype"],
    sources: [
      {
        name: "World Coffee Research - Typica",
        url: "https://varieties.worldcoffeeresearch.org/varieties/typica"
      }
    ]
  },
  {
    id: "bourbon",
    name: "Bourbon",
    alternativeNames: ["French Mission", "Red Bourbon", "Yellow Bourbon"],
    species: "Arabica",
    lineage: "Bourbon",
    parentage: "Direct descendant of early Arabica selections from Yemen",
    origin: "Yemen (via Réunion/Bourbon Island)",
    plantStature: "Tall",
    beanSize: "Medium",
    yieldPotential: "Medium",
    qualityPotential: "Very High",
    optimalAltitude: "1000–2000 m",
    leafRustResistance: "Low",
    coffeeBerryDiseaseResistance: "Low",
    nematodeResistance: "Low",
    nutritionRequirement: "Medium",
    commonCountries: ["El Salvador", "Rwanda", "Burundi", "Brazil", "Guatemala"],
    flavorNotes: ["sweetness", "stone fruit", "milk chocolate", "caramel", "balanced acidity"],
    summary: "A foundational Arabica variety known for its sweetness and complex cup quality. Brought from Yemen to the island of Bourbon (now Réunion) by French missionaries, it developed a slightly higher yield and more compact branching than Typica. It is highly susceptible to major pests and diseases but remains a benchmark for specialty quality.",
    relatedVarieties: ["typica", "caturra", "pacas", "sl28"],
    sources: [
      {
        name: "World Coffee Research - Bourbon",
        url: "https://varieties.worldcoffeeresearch.org/varieties/bourbon"
      }
    ]
  },
  {
    id: "caturra",
    name: "Caturra",
    alternativeNames: ["Nanico"],
    species: "Arabica",
    lineage: "Bourbon",
    parentage: "Natural dwarf mutation of Red Bourbon",
    origin: "Brazil (Minas Gerais)",
    plantStature: "Compact",
    beanSize: "Medium",
    yieldPotential: "High",
    qualityPotential: "Good",
    optimalAltitude: "1200–1800 m",
    leafRustResistance: "Low",
    coffeeBerryDiseaseResistance: "Low",
    nematodeResistance: "Low",
    nutritionRequirement: "High",
    commonCountries: ["Colombia", "Costa Rica", "Nicaragua", "Honduras", "Guatemala"],
    flavorNotes: ["citrus", "bright acidity", "red apple", "caramel", "chocolate"],
    summary: "A natural mutation of Bourbon first discovered in Brazil in 1937. Because of its compact stature, it can be planted more densely, leading to significantly higher yields per hectare compared to Bourbon or Typica. It is highly popular in Central and South America and has become the benchmark dwarf cultivar in the coffee industry.",
    relatedVarieties: ["bourbon", "catuai", "pacas"],
    sources: [
      {
        name: "World Coffee Research - Caturra",
        url: "https://varieties.worldcoffeeresearch.org/varieties/caturra"
      }
    ]
  },
  {
    id: "catuai",
    name: "Catuaí",
    alternativeNames: ["Catuai Vermelho", "Catuai Amarelo"],
    species: "Arabica",
    lineage: "Bourbon-Typica",
    parentage: "Cross between Mundo Novo and Caturra",
    origin: "Brazil (IAC)",
    plantStature: "Compact",
    beanSize: "Medium",
    yieldPotential: "High",
    qualityPotential: "Medium",
    optimalAltitude: "1000–1600 m",
    leafRustResistance: "Low",
    coffeeBerryDiseaseResistance: "Low",
    nematodeResistance: "Low",
    nutritionRequirement: "High",
    commonCountries: ["Brazil", "Honduras", "Costa Rica", "Guatemala", "Panama"],
    flavorNotes: ["chocolate", "roasted nuts", "caramel", "honey", "medium body"],
    summary: "Developed in Brazil in the 1940s by crossing Caturra (for its compact size) and Mundo Novo (for vigor and productivity). It is highly resilient to strong winds and heavy rain due to the fruit holding tightly to the branches, making it very popular in Central America and Brazil. It requires intensive fertilizer management.",
    relatedVarieties: ["caturra", "mundo-novo"],
    sources: [
      {
        name: "World Coffee Research - Catuai",
        url: "https://varieties.worldcoffeeresearch.org/varieties/catuai"
      }
    ]
  },
  {
    id: "mundo-novo",
    name: "Mundo Novo",
    alternativeNames: ["Mundo Novo Vermelho"],
    species: "Arabica",
    lineage: "Bourbon-Typica",
    parentage: "Natural cross between Sumatra (Typica) and Red Bourbon",
    origin: "Brazil (Mineiros do Tietê)",
    plantStature: "Tall",
    beanSize: "High",
    yieldPotential: "High",
    qualityPotential: "Good",
    optimalAltitude: "1000–1500 m",
    leafRustResistance: "Low",
    coffeeBerryDiseaseResistance: "Low",
    nematodeResistance: "Low",
    nutritionRequirement: "High",
    commonCountries: ["Brazil", "Costa Rica", "Dominican Rep."],
    flavorNotes: ["dark chocolate", "nutty", "caramel", "low acidity", "heavy body"],
    summary: "A natural hybrid of Sumatra (Typica) and Red Bourbon found in Brazil around 1943. Known for its strong vigor, tall stature, and high yield, it was widely planted across Brazil. Because of its height, mechanical harvesting requires careful pruning, but it remains a staple commercial Arabica.",
    relatedVarieties: ["typica", "bourbon", "catuai"],
    sources: [
      {
        name: "World Coffee Research - Mundo Novo",
        url: "https://varieties.worldcoffeeresearch.org/varieties/mundo-novo"
      }
    ]
  },
  {
    id: "pacamara",
    name: "Pacamara",
    alternativeNames: ["Pacamara Rojo"],
    species: "Arabica",
    lineage: "Bourbon-Typica",
    parentage: "Cross between Pacas and Maragogype",
    origin: "El Salvador (ISIC)",
    plantStature: "Tall",
    beanSize: "Exceptional",
    yieldPotential: "Medium",
    qualityPotential: "Exceptional",
    optimalAltitude: "1200–1800+ m",
    leafRustResistance: "Low",
    coffeeBerryDiseaseResistance: "Low",
    nematodeResistance: "Unknown",
    nutritionRequirement: "High",
    commonCountries: ["El Salvador", "Nicaragua", "Guatemala", "Panama"],
    flavorNotes: ["herbal", "spice", "stone fruit", "dark chocolate", "grapefruit", "heavy body"],
    summary: "A cross between the dwarf mutation Pacas and the giant-beaned Maragogype, developed in El Salvador over a 30-year period starting in 1958. It is famous for its extremely large leaves and beans (elephant beans) and a complex, often savory/herbal cup profile with notes of tropical fruits and spices.",
    relatedVarieties: ["pacas"],
    sources: [
      {
        name: "World Coffee Research - Pacamara",
        url: "https://varieties.worldcoffeeresearch.org/varieties/pacamara"
      }
    ]
  },
  {
    id: "sl28",
    name: "SL28",
    alternativeNames: ["Scott Labs 28"],
    species: "Arabica",
    lineage: "Bourbon-Typica",
    parentage: "Selected from Tanganyika Drought Resistant (genetically Bourbon)",
    origin: "Kenya (Scott Agricultural Laboratories)",
    plantStature: "Tall",
    beanSize: "High",
    yieldPotential: "Medium",
    qualityPotential: "Exceptional",
    optimalAltitude: "1300–2000 m",
    leafRustResistance: "Low",
    coffeeBerryDiseaseResistance: "Low",
    nematodeResistance: "Unknown",
    nutritionRequirement: "Medium",
    commonCountries: ["Kenya", "Uganda", "Zimbabwe", "Tanzania"],
    flavorNotes: ["blackcurrant", "grapefruit", "tomato-like acidity", "wine-like", "brown sugar"],
    summary: "One of the most famous African varieties, selected in Kenya in the 1930s. It has broad, copper-colored leaves and is renowned for its intense blackcurrant acidity, rich body, and exceptional flavor. While highly susceptible to rust and CBD, it thrives in high altitude with moderate rainfall.",
    relatedVarieties: ["bourbon", "sl34"],
    sources: [
      {
        name: "World Coffee Research - SL28",
        url: "https://varieties.worldcoffeeresearch.org/varieties/sl28"
      }
    ]
  },
  {
    id: "sl34",
    name: "SL34",
    alternativeNames: ["Scott Labs 34"],
    species: "Arabica",
    lineage: "Bourbon-Typica",
    parentage: "Selected from French Mission Bourbon (genetically Typica-like)",
    origin: "Kenya (Scott Agricultural Laboratories)",
    plantStature: "Tall",
    beanSize: "High",
    yieldPotential: "High",
    qualityPotential: "Very High",
    optimalAltitude: "1300–2000 m",
    leafRustResistance: "Low",
    coffeeBerryDiseaseResistance: "Low",
    nematodeResistance: "Unknown",
    nutritionRequirement: "Medium",
    commonCountries: ["Kenya", "Uganda", "Taiwan"],
    flavorNotes: ["citrus", "black tea", "dark chocolate", "winey", "stone fruit"],
    summary: "Selected in Kenya in the 1930s from a single tree on Loresho Estate. Genetically close to Typica, it performs exceptionally well at high altitudes with heavy rainfall, displaying dark-bronze tipped leaves. Like SL28, it is highly prized for its bright acidity and complex profile, but is sensitive to disease.",
    relatedVarieties: ["typica", "sl28"],
    sources: [
      {
        name: "World Coffee Research - SL34",
        url: "https://varieties.worldcoffeeresearch.org/varieties/sl34"
      }
    ]
  },
  {
    id: "batian",
    name: "Batian",
    alternativeNames: ["Batian Selection"],
    species: "Arabica",
    lineage: "Introgressed",
    parentage: "Composite pedigree involving SL28, SL34, Ruiru 11, K7, and Castillo",
    origin: "Kenya (Coffee Research Foundation)",
    plantStature: "Tall",
    beanSize: "High",
    yieldPotential: "High",
    qualityPotential: "Very High",
    optimalAltitude: "1200–1900 m",
    leafRustResistance: "High",
    coffeeBerryDiseaseResistance: "High",
    nematodeResistance: "Unknown",
    nutritionRequirement: "Medium",
    commonCountries: ["Kenya"],
    flavorNotes: ["blackberry", "black tea", "lemon-citrus", "caramel", "clean finish"],
    summary: "Released in Kenya in 2010, Batian is a tall, high-yielding cultivar bred specifically for resistance to both Leaf Rust and Coffee Berry Disease (CBD). Unlike Ruiru 11, it was backcrossed and selected to prioritize cup quality closer to the legendary SL28 variety, reducing farm chemical costs.",
    relatedVarieties: ["sl28", "sl34", "ruiru-11"],
    sources: [
      {
        name: "World Coffee Research - Batian",
        url: "https://varieties.worldcoffeeresearch.org/varieties/batian"
      }
    ]
  },
  {
    id: "ruiru-11",
    name: "Ruiru 11",
    alternativeNames: ["Ruiru"],
    species: "Arabica",
    lineage: "Catimor",
    parentage: "Complex F1 hybrid cross between Catimor (parent) and quality selections (SL28, SL34, Sudan Rume, K7)",
    origin: "Kenya (Coffee Research Station Ruiru)",
    plantStature: "Compact",
    beanSize: "Medium",
    yieldPotential: "High",
    qualityPotential: "Good",
    optimalAltitude: "1000–1800 m",
    leafRustResistance: "High",
    coffeeBerryDiseaseResistance: "High",
    nematodeResistance: "Unknown",
    nutritionRequirement: "High",
    commonCountries: ["Kenya"],
    flavorNotes: ["chocolate", "cacao", "spice", "mild citrus", "heavy body"],
    summary: "Released in 1985 in response to severe Coffee Berry Disease epidemics. It is a compact, high-density planting cultivar resistant to both leaf rust and CBD. While highly productive, it historically received feedback of slightly lower acidity and body compared to SL28, which motivated the breeding of Batian.",
    relatedVarieties: ["catimor", "batian"],
    sources: [
      {
        name: "World Coffee Research - Ruiru 11",
        url: "https://varieties.worldcoffeeresearch.org/varieties/ruiru-11"
      }
    ]
  },
  {
    id: "castillo",
    name: "Castillo",
    alternativeNames: ["Castillo Naranjal", "Castillo Tambo"],
    species: "Arabica",
    lineage: "Catimor",
    parentage: "Multi-line selection from Colombia variety (Caturra x Timor Hybrid)",
    origin: "Colombia (Cenicafé)",
    plantStature: "Compact",
    beanSize: "High",
    yieldPotential: "High",
    qualityPotential: "Good",
    optimalAltitude: "1200–2200 m",
    leafRustResistance: "High",
    coffeeBerryDiseaseResistance: "High",
    nematodeResistance: "Unknown",
    nutritionRequirement: "High",
    commonCountries: ["Colombia", "Zambia"],
    flavorNotes: ["caramel", "milk chocolate", "citrus", "red fruit", "balanced sweet"],
    summary: "Released in 2005, Castillo is the most widely grown coffee variety in Colombia. It was bred by Cenicafé to replace the Colombia variety, offering excellent resistance to Leaf Rust. It is a composite variety, consisting of multiple sub-lines to prevent genetic monoculture rust breakdown.",
    relatedVarieties: ["caturra", "colombia", "catimor"],
    sources: [
      {
        name: "World Coffee Research - Castillo",
        url: "https://varieties.worldcoffeeresearch.org/varieties/castillo"
      }
    ]
  },
  {
    id: "colombia",
    name: "Colombia",
    alternativeNames: ["Variedad Colombia"],
    species: "Arabica",
    lineage: "Catimor",
    parentage: "Composite cross of Caturra and Timor Hybrid (Hibrido de Timor)",
    origin: "Colombia (Cenicafé)",
    plantStature: "Compact",
    beanSize: "Medium",
    yieldPotential: "High",
    qualityPotential: "Good",
    optimalAltitude: "1200–1800 m",
    leafRustResistance: "High",
    coffeeBerryDiseaseResistance: "Medium",
    nematodeResistance: "Unknown",
    nutritionRequirement: "High",
    commonCountries: ["Colombia"],
    flavorNotes: ["cocoa", "brown sugar", "orange citrus", "balanced acidity"],
    summary: "Developed in the 1980s by Cenicafé as a direct weapon against Leaf Rust before rust reached Colombia. Genetically introgressed (carrying Robusta genes via the Timor Hybrid), it has a compact stature similar to Caturra and high yield capacity, laying the breeding foundation for Castillo.",
    relatedVarieties: ["caturra", "castillo", "catimor"],
    sources: [
      {
        name: "World Coffee Research - Colombia",
        url: "https://varieties.worldcoffeeresearch.org/varieties/colombia"
      }
    ]
  },
  {
    id: "catimor",
    name: "Catimor",
    alternativeNames: ["Catimor 129", "Catimor F6"],
    species: "Arabica",
    lineage: "Catimor",
    parentage: "Hibrido de Timor (Timor Hybrid) x Caturra",
    origin: "Portugal (CIFC)",
    plantStature: "Compact",
    beanSize: "Medium",
    yieldPotential: "High",
    qualityPotential: "Medium",
    optimalAltitude: "600–1300 m",
    leafRustResistance: "High",
    coffeeBerryDiseaseResistance: "Low",
    nematodeResistance: "Unknown",
    nutritionRequirement: "High",
    commonCountries: ["Vietnam", "China", "Indonesia", "Honduras", "Peru", "Thailand"],
    flavorNotes: ["dark chocolate", "herbal", "spice", "woody", "heavy body"],
    summary: "A family of cultivars bred in Portugal in 1959, crossing the Timor Hybrid (a natural Arabica-Robusta cross, providing rust resistance) with Caturra (providing dwarf stature and high yield). Catimors are widely planted in areas with high rust pressure, though they often exhibit lower cup quality if grown at very high altitudes.",
    relatedVarieties: ["caturra", "colombia", "castillo", "parainema"],
    sources: [
      {
        name: "World Coffee Research - Catimor",
        url: "https://varieties.worldcoffeeresearch.org/varieties/catimor"
      }
    ]
  },
  {
    id: "s795",
    name: "S795",
    alternativeNames: ["S-795", "Jember"],
    species: "Arabica",
    lineage: "Introgressed",
    parentage: "Cross between S.288 (Liberica-Arabica natural hybrid) and Kent (Typica selection)",
    origin: "India (Balehonnur Coffee Research Station)",
    plantStature: "Tall",
    beanSize: "Medium",
    yieldPotential: "High",
    qualityPotential: "Good",
    optimalAltitude: "900–1500 m",
    leafRustResistance: "Medium",
    coffeeBerryDiseaseResistance: "Low",
    nematodeResistance: "Unknown",
    nutritionRequirement: "Medium",
    commonCountries: ["India", "Indonesia (Sumatra/Java)"],
    flavorNotes: ["maple syrup", "brown sugar", "herbal", "spice", "chocolate", "full body"],
    summary: "Released in the 1940s, S795 is the most widely planted Arabica variety in India and Southeast Asia. It inherits leaf rust tolerance from the S.288 parent (which contains Liberica genetic material) and a sweet, balanced profile from Kent. Locally in Indonesia, it is often called Jember.",
    relatedVarieties: ["typica"],
    sources: [
      {
        name: "World Coffee Research - S795",
        url: "https://varieties.worldcoffeeresearch.org/varieties/s795"
      }
    ]
  },
  {
    id: "java",
    name: "Java",
    alternativeNames: ["AB3", "Java Blue Mountain"],
    species: "Arabica",
    lineage: "Typica",
    parentage: "Selection from wild Ethiopian landraces",
    origin: "Ethiopia (via Java, Indonesia)",
    plantStature: "Tall",
    beanSize: "High",
    yieldPotential: "Medium",
    qualityPotential: "Very High",
    optimalAltitude: "1300–1800 m",
    leafRustResistance: "High",
    coffeeBerryDiseaseResistance: "High",
    nematodeResistance: "High",
    nutritionRequirement: "Medium",
    commonCountries: ["Bolivia", "Cameroon", "Burundi", "Indonesia"],
    flavorNotes: ["jasmine", "floral", "lemon peel", "honey", "tea-like", "crisp"],
    summary: "Originally collected from Ethiopia, it was brought to Java (Indonesia) by the Dutch. In the mid-20th century, it was introduced to Cameroon, where it was selected for resistance to Coffee Berry Disease. Java is a tall, elegant variety that produces highly floral and sweet cups, similar to Geisha.",
    relatedVarieties: ["geisha", "typica"],
    sources: [
      {
        name: "World Coffee Research - Java",
        url: "https://varieties.worldcoffeeresearch.org/varieties/java"
      }
    ]
  },
  {
    id: "parainema",
    name: "Parainema",
    alternativeNames: ["T5175"],
    species: "Arabica",
    lineage: "Sarchimor",
    parentage: "Selection from Sarchimor population (Villa Sarchi x Timor Hybrid)",
    origin: "Honduras (IHCAFE)",
    plantStature: "Compact",
    beanSize: "High",
    yieldPotential: "High",
    qualityPotential: "Very High",
    optimalAltitude: "1100–1600 m",
    leafRustResistance: "High",
    coffeeBerryDiseaseResistance: "Low",
    nematodeResistance: "High",
    nutritionRequirement: "High",
    commonCountries: ["Honduras", "Peru", "Costa Rica"],
    flavorNotes: ["passionfruit", "citrus", "caramel", "bright acidity", "floral", "creamy"],
    summary: "A Sarchimor variety selected in Honduras for resistance to leaf rust and root-knot nematodes. Despite being an introgressed variety (carrying Robusta genetics), Parainema has won national Cup of Excellence competitions in Honduras due to its bright, complex, tropical fruit flavor profiles.",
    relatedVarieties: ["catimor"],
    sources: [
      {
        name: "World Coffee Research - Parainema",
        url: "https://varieties.worldcoffeeresearch.org/varieties/parainema"
      }
    ]
  },
  {
    id: "anacafe-14",
    name: "Anacafé 14",
    alternativeNames: ["Catimor Anacafe 14"],
    species: "Arabica",
    lineage: "Catimor",
    parentage: "Natural cross between Pacas and Timor Hybrid (Hibrido de Timor)",
    origin: "Guatemala (ANACAFÉ)",
    plantStature: "Compact",
    beanSize: "Very High",
    yieldPotential: "Very High",
    qualityPotential: "Good",
    optimalAltitude: "900–1600 m",
    leafRustResistance: "High",
    coffeeBerryDiseaseResistance: "Low",
    nematodeResistance: "Unknown",
    nutritionRequirement: "High",
    commonCountries: ["Guatemala", "Honduras"],
    flavorNotes: ["milk chocolate", "caramel", "stone fruit", "full body", "brown sugar"],
    summary: "Discovered in Guatemala in 1984 as a natural hybrid between Pacas and the Timor Hybrid. It is a highly productive, compact plant with excellent resistance to Leaf Rust and dry weather stress. It produces large beans and a sweet, chocolatey profile popular in Central American blends.",
    relatedVarieties: ["pacas", "catimor"],
    sources: [
      {
        name: "ANACAFÉ Variety Catalog",
        url: "https://www.anacafe.org"
      }
    ]
  },
  {
    id: "conilon",
    name: "Conilon",
    alternativeNames: ["Kouillou", "Conillon"],
    species: "Robusta",
    lineage: "Robusta",
    parentage: "Selection of Coffea canephora",
    origin: "Central/West Africa (developed in Brazil)",
    plantStature: "Tall",
    beanSize: "Medium",
    yieldPotential: "Very High",
    qualityPotential: "Medium",
    optimalAltitude: "100–700 m",
    leafRustResistance: "High",
    coffeeBerryDiseaseResistance: "High",
    nematodeResistance: "High",
    nutritionRequirement: "High",
    commonCountries: ["Brazil (Espírito Santo)", "Côte d'Ivoire"],
    flavorNotes: ["dark cocoa", "macadamia nut", "cereal", "low acidity", "bold body"],
    summary: "The main Robusta variety cultivated in Brazil, representing a significant portion of its total coffee output. It is characterized by high tolerance to drought, high yield potential, and resistance to nematodes and leaf rust. It has a heavy, clean, chocolatey profile often used in espresso bases.",
    relatedVarieties: ["robusta-commercial-clones"],
    sources: [
      {
        name: "World Coffee Research - Robusta Varieties",
        url: "https://worldcoffeeresearch.org",
        note: "Robusta genetic resources"
      }
    ]
  },
  {
    id: "robusta-commercial-clones",
    name: "Robusta commercial clones",
    alternativeNames: ["TR4", "TR9", "Uganda Clones", "Vietnam Clones"],
    species: "Robusta",
    lineage: "Robusta",
    parentage: "Vegetatively propagated selections of Coffea canephora",
    origin: "Vietnam / Uganda (via research stations)",
    plantStature: "Tall",
    beanSize: "High",
    yieldPotential: "Very High",
    qualityPotential: "Medium",
    optimalAltitude: "200–1000 m",
    leafRustResistance: "High",
    coffeeBerryDiseaseResistance: "High",
    nematodeResistance: "High",
    nutritionRequirement: "High",
    commonCountries: ["Vietnam", "Uganda", "Indonesia", "Côte d'Ivoire"],
    flavorNotes: ["roasted peanut", "cocoa nibs", "malt", "black pepper", "low acidity", "creamy body"],
    summary: "In Vietnam and Uganda, robusta farming relies heavily on high-yield, disease-resistant commercial clones developed by local research institutes (like WASI in Vietnam or NaCORI in Uganda). These clones are vegetatively propagated via cuttings to ensure genetic stability, high productivity, and resistance to stem borers and rust.",
    relatedVarieties: ["conilon"],
    sources: [
      {
        name: "World Coffee Research - Vietnam / Uganda",
        url: "https://worldcoffeeresearch.org"
      }
    ]
  }
];
