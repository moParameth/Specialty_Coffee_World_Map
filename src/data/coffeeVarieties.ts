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
    ],
    imageUrl: "https://optimise2.assets-servd.host/worldcoffee-research/production/images/Arabica/Geisha-1.jpg?w=2667&h=4000&auto=compress%2Cformat&fit=crop&dm=1684915617&s=e46a287f2b3a357774cb649b75db702d"
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
    ],
    imageUrl: "https://optimise2.assets-servd.host/worldcoffee-research/production/images/Arabica/Typica-1.jpg?w=3000&h=2000&auto=compress%2Cformat&fit=crop&dm=1684915651&s=98587637e4eab0ceea12508cfbf4453d"
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
    ],
    imageUrl: "https://optimise2.assets-servd.host/worldcoffee-research/production/images/Arabica/Bourbon-1.jpg?w=4000&h=2667&auto=compress%2Cformat&fit=crop&dm=1684915605&s=64849a4cf0a7ae2d049a630b4bdd73d1"
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
    ],
    imageUrl: "https://optimise2.assets-servd.host/worldcoffee-research/production/images/Arabica/Caturra-1.jpg?w=640&h=480&auto=compress%2Cformat&fit=crop&dm=1684915609&s=b16f5fc602cda33f02116250603f4a56"
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
    ],
    imageUrl: "https://optimise2.assets-servd.host/worldcoffee-research/production/images/Arabica/Catuai-1.jpg?w=3000&h=2000&auto=compress%2Cformat&fit=crop&dm=1684915609&s=7d91cdabe5228796f6da14e6451fce35"
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
    ],
    imageUrl: "https://optimise2.assets-servd.host/worldcoffee-research/production/images/Arabica/Mundo-Novo-1.jpg?w=4000&h=2667&auto=compress%2Cformat&fit=crop&dm=1684915637&s=2cffc19913b97391c73172da992d0901"
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
    ],
    imageUrl: "https://optimise2.assets-servd.host/worldcoffee-research/production/images/Arabica/Pacamara-1.jpg?w=3000&h=2000&auto=compress%2Cformat&fit=crop&dm=1684915639&s=44d815150a587f0091b97ffb8b706329"
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
    ],
    imageUrl: "https://optimise2.assets-servd.host/worldcoffee-research/production/images/Arabica/SL28-3.jpg?w=3008&h=2000&auto=compress%2Cformat&fit=crop&dm=1684915644&s=5884bf0bc4510e826b10b8ef88097163"
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
    ],
    imageUrl: "https://optimise2.assets-servd.host/worldcoffee-research/production/images/Arabica/SL34-1.jpg?w=1000&h=625&auto=compress%2Cformat&fit=crop&dm=1684915645&s=46027d6387c52caa67a3584560356369"
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
    ],
    imageUrl: "https://optimise2.assets-servd.host/worldcoffee-research/production/images/Arabica/Batian-1.jpg?w=3984&h=2988&auto=compress%2Cformat&fit=crop&crop=focalpoint&fp-x=0.5149&fp-y=0.7925&dm=1684915603&s=72173f2aa1d08b200f475d357b280846"
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
    ],
    imageUrl: "https://optimise2.assets-servd.host/worldcoffee-research/production/images/Arabica/Ruiru-11-1.jpg?w=742&h=551&auto=compress%2Cformat&fit=crop&dm=1684915642&s=f046524d82f04175241236cadf1f3797"
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
    ],
    imageUrl: "https://optimise2.assets-servd.host/worldcoffee-research/production/images/Arabica/Catimor-129-1.jpg?w=2448&h=3264&auto=compress%2Cformat&fit=crop&dm=1684915609&s=72e120d34a80d2c24a981284996873f0"
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
    commonCountries: ["India", "Indonesia"],
    flavorNotes: ["maple syrup", "brown sugar", "herbal", "spice", "chocolate", "full body"],
    summary: "Released in the 1940s, S795 is the most widely planted Arabica variety in India and Southeast Asia. It inherits leaf rust tolerance from the S.288 parent (which contains Liberica genetic material) and a sweet, balanced profile from Kent. Locally in Indonesia, it is often called Jember.",
    relatedVarieties: ["typica"],
    sources: [
      {
        name: "World Coffee Research - S795",
        url: "https://varieties.worldcoffeeresearch.org/varieties/s795"
      }
    ],
    imageUrl: "https://optimise2.assets-servd.host/worldcoffee-research/production/images/DSCF9759.JPG?w=4000&h=2667&auto=compress%2Cformat&fit=crop&dm=1756755469&s=ff9bf7bd6abf289b27554cae299d2564"
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
    ],
    imageUrl: "https://optimise2.assets-servd.host/worldcoffee-research/production/images/Arabica/Java.jpg?w=1200&h=800&auto=compress%2Cformat&fit=crop&dm=1684915623&s=cd95b22de3ab929eea9e66187d9d3d30"
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
    ],
    imageUrl: "https://optimise2.assets-servd.host/worldcoffee-research/production/images/Arabica/Parainema-1.jpg?w=4000&h=2667&auto=compress%2Cformat&fit=crop&dm=1684915640&s=c64aff5c8d60da38695d31b760face09"
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
    ],
    imageUrl: "https://optimise2.assets-servd.host/worldcoffee-research/production/images/Arabica/WCR_Guate180703_DSC8479.jpg?auto=compress%2Cformat&fit=crop&dm=1730752064&s=2ac95aa4b8ed41e04f0aae334b75fc07"
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
    commonCountries: ["Brazil", "Côte d'Ivoire"],
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
  },
  {
    "id": "maragogype",
    "name": "Maragogype",
    "alternativeNames": [
      "Maragogipe",
      "Elephant Beans"
    ],
    "species": "Arabica",
    "lineage": "Typica",
    "parentage": "Natural mutation of Typica",
    "origin": "Brazil (Marahojipe, Bahia)",
    "plantStature": "Tall",
    "beanSize": "Exceptional",
    "yieldPotential": "Low",
    "qualityPotential": "High",
    "optimalAltitude": "1100–1600 m",
    "leafRustResistance": "Low",
    "coffeeBerryDiseaseResistance": "Low",
    "nematodeResistance": "Unknown",
    "nutritionRequirement": "Medium",
    "commonCountries": [
      "Mexico",
      "Guatemala",
      "Nicaragua",
      "Colombia",
      "Brazil"
    ],
    "flavorNotes": [
      "mild citrus",
      "floral",
      "clean tea-like",
      "sweet honey",
      "light body"
    ],
    "summary": "A natural mutation of the Typica variety first discovered in Brazil in 1870. It is famous for producing extremely large seeds (elephant beans) and leaves, and has a tall stature with long internodes. While yields are low and the plant is highly susceptible to rust, its delicate, tea-like and highly sweet cup profile is prized in specialty markets.",
    "relatedVarieties": [
      "typica",
      "pacamara"
    ],
    "sources": [
      {
        "name": "World Coffee Research - Maragogype",
        "url": "https://varieties.worldcoffeeresearch.org/varieties/maragogype"
      }
    ],
    "imageUrl": "https://optimise2.assets-servd.host/worldcoffee-research/production/images/Arabica/Maragogipe-1.jpg?w=4000&h=2667&auto=compress%2Cformat&fit=crop&dm=1684915629&s=d2373d7951b6134aef9edc1f1ea34f0c"
  },
  {
    "id": "pacas",
    "name": "Pacas",
    "alternativeNames": [],
    "species": "Arabica",
    "lineage": "Bourbon",
    "parentage": "Natural dwarf mutation of Red Bourbon",
    "origin": "El Salvador (Santa Ana)",
    "plantStature": "Compact",
    "beanSize": "Medium",
    "yieldPotential": "High",
    "qualityPotential": "Good",
    "optimalAltitude": "1000–1600 m",
    "leafRustResistance": "Low",
    "coffeeBerryDiseaseResistance": "Low",
    "nematodeResistance": "Low",
    "nutritionRequirement": "Medium",
    "commonCountries": [
      "El Salvador",
      "Honduras",
      "Nicaragua"
    ],
    "flavorNotes": [
      "caramel",
      "stone fruit",
      "milk chocolate",
      "sweet acidity",
      "smooth body"
    ],
    "summary": "A natural dwarf mutation of Red Bourbon discovered in 1949 on the Pacas family farm in El Salvador. Like Caturra, its compact stature allows for dense plantings, substantially increasing yield per hectare. It is highly adapted to wind and dry conditions in Central America, and forms the genetic basis of Pacamara and Anacafé 14.",
    "relatedVarieties": [
      "bourbon",
      "pacamara",
      "anacafe-14"
    ],
    "sources": [
      {
        "name": "World Coffee Research - Pacas",
        "url": "https://varieties.worldcoffeeresearch.org/varieties/pacas"
      }
    ]
  },
  {
    "id": "villa-sarchi",
    "name": "Villa Sarchi",
    "alternativeNames": [
      "La Luisa",
      "Sarchi"
    ],
    "species": "Arabica",
    "lineage": "Bourbon",
    "parentage": "Natural dwarf mutation of Bourbon",
    "origin": "Costa Rica (Sarchí)",
    "plantStature": "Compact",
    "beanSize": "Medium",
    "yieldPotential": "High",
    "qualityPotential": "Very High",
    "optimalAltitude": "1200–1800 m",
    "leafRustResistance": "Low",
    "coffeeBerryDiseaseResistance": "Low",
    "nematodeResistance": "Low",
    "nutritionRequirement": "Medium",
    "commonCountries": [
      "Costa Rica",
      "Honduras",
      "Panama"
    ],
    "flavorNotes": [
      "bright lemon",
      "citrus",
      "floral",
      "refined sweetness",
      "crisp finish"
    ],
    "summary": "A natural dwarf mutation of Bourbon discovered in Costa Rica in 1955. It features compact stature, short internodes, and elegant bronze-tipped leaves. It thrives at high altitudes under strong winds and heavy rainfall, yielding a very sweet cup with clean, bright acidity. It is a parent of Sarchimor lines like Parainema.",
    "relatedVarieties": [
      "bourbon",
      "parainema"
    ],
    "sources": [
      {
        "name": "World Coffee Research - Villa Sarchi",
        "url": "https://varieties.worldcoffeeresearch.org/varieties/villa-sarchi"
      }
    ],
    "imageUrl": "https://optimise2.assets-servd.host/worldcoffee-research/production/images/Arabica/Villa-Sarchi-1.jpg?w=640&h=480&auto=compress%2Cformat&fit=crop&dm=1684915651&s=92d842c3fefd21fc68802c1ad54f181f"
  },
  {
    "id": "starmaya",
    "name": "Starmaya",
    "alternativeNames": [],
    "species": "Arabica",
    "lineage": "Sarchimor",
    "parentage": "Cross between Marsellesa and a male-sterile Bourbon/Caturra selection",
    "origin": "Nicaragua (developed by CIRAD & Ecom)",
    "plantStature": "Compact",
    "beanSize": "High",
    "yieldPotential": "Very High",
    "qualityPotential": "Very High",
    "optimalAltitude": "900–1500 m",
    "leafRustResistance": "High",
    "coffeeBerryDiseaseResistance": "Low",
    "nematodeResistance": "Unknown",
    "nutritionRequirement": "Medium",
    "commonCountries": [
      "Nicaragua",
      "Costa Rica"
    ],
    "flavorNotes": [
      "floral",
      "stone fruit",
      "orange peel",
      "milk chocolate",
      "creamy body"
    ],
    "summary": "Released in 2017, Starmaya is a major breakthrough in coffee breeding: it is the first F1 hybrid Arabica variety that can be propagated by seed rather than costly cloning/tissue culture, which lowers cost for farmers. It offers high resistance to Leaf Rust, exceptionally high yields, and a very complex sweet cup profile.",
    "relatedVarieties": [
      "marsellesa"
    ],
    "sources": [
      {
        "name": "World Coffee Research - Starmaya",
        "url": "https://varieties.worldcoffeeresearch.org/varieties/starmaya"
      }
    ],
    "imageUrl": "https://optimise2.assets-servd.host/worldcoffee-research/production/images/Arabica/Starmaya-4.jpg?w=4000&h=2667&auto=compress%2Cformat&fit=crop&dm=1684915649&s=dc5fcde9f8ce869307f26de14bfb8f7f"
  },
  {
    "id": "centroamericano",
    "name": "Centroamericano",
    "alternativeNames": [
      "H1",
      "H-1"
    ],
    "species": "Arabica",
    "lineage": "Sarchimor",
    "parentage": "F1 hybrid cross between Sarchimor T5296 and wild Ethiopian landrace Sudan Rume",
    "origin": "Central America (developed by CATIE, CIRAD & PROMECAFE)",
    "plantStature": "Tall",
    "beanSize": "High",
    "yieldPotential": "Very High",
    "qualityPotential": "Exceptional",
    "optimalAltitude": "1000–1800+ m",
    "leafRustResistance": "High",
    "coffeeBerryDiseaseResistance": "Low",
    "nematodeResistance": "High",
    "nutritionRequirement": "High",
    "commonCountries": [
      "Costa Rica",
      "Nicaragua",
      "Honduras",
      "Guatemala"
    ],
    "flavorNotes": [
      "jasmine",
      "floral",
      "bergamot",
      "peach",
      "brown sugar",
      "bright acidity"
    ],
    "summary": "An F1 hybrid cross of Sarchimor T5296 (rust-resistant) and the famous wild Ethiopian landrace Sudan Rume (renowned for flavor). It is highly productive, resistant to leaf rust and root-knot nematodes, and has won Cup of Excellence titles due to its exceptional floral and peach-like cup profile when grown at high altitudes.",
    "relatedVarieties": [
      "parainema"
    ],
    "sources": [
      {
        "name": "World Coffee Research - Centroamericano",
        "url": "https://varieties.worldcoffeeresearch.org/varieties/centroamericano"
      }
    ],
    "imageUrl": "https://optimise2.assets-servd.host/worldcoffee-research/production/images/Arabica/Centroamericano-1.jpg?w=2592&h=1944&auto=compress%2Cformat&fit=crop&dm=1684915613&s=8e3acb0f708fbc25fbc8d3a33db23a55"
  },
  {
    "id": "marsellesa",
    "name": "Marsellesa",
    "alternativeNames": [],
    "species": "Arabica",
    "lineage": "Sarchimor",
    "parentage": "Selection from Sarchimor population (Villa Sarchi x Timor Hybrid)",
    "origin": "Nicaragua (selected by CIRAD)",
    "plantStature": "Compact",
    "beanSize": "Medium",
    "yieldPotential": "High",
    "qualityPotential": "Good",
    "optimalAltitude": "900–1500 m",
    "leafRustResistance": "High",
    "coffeeBerryDiseaseResistance": "Low",
    "nematodeResistance": "Unknown",
    "nutritionRequirement": "High",
    "commonCountries": [
      "Mexico",
      "Nicaragua",
      "Honduras",
      "Guatemala"
    ],
    "flavorNotes": [
      "lemon citrus",
      "red apple",
      "caramel",
      "clean finish",
      "bright acidity"
    ],
    "summary": "A Sarchimor variety selected for its high resistance to leaf rust and high yield capacity. It is adapted to wet conditions and performs well at medium altitudes in Central America. It has a clean, citric cup profile with good acidity, and is a parent of the F1 hybrid Starmaya.",
    "relatedVarieties": [
      "villa-sarchi",
      "starmaya"
    ],
    "sources": [
      {
        "name": "World Coffee Research - Marsellesa",
        "url": "https://varieties.worldcoffeeresearch.org/varieties/marsellesa"
      }
    ],
    "imageUrl": "https://optimise2.assets-servd.host/worldcoffee-research/production/images/Arabica/Marsellesa-1.jpg?w=4000&h=2667&auto=compress%2Cformat&fit=crop&dm=1684915632&s=c31bfddb2e38499731701518d10de310"
  },
  {
    "id": "obata",
    "name": "Obata",
    "alternativeNames": [
      "Obata Rojo",
      "Obata Red"
    ],
    "species": "Arabica",
    "lineage": "Sarchimor",
    "parentage": "Cross between Sarchimor and Catuaí",
    "origin": "Brazil (IAC)",
    "plantStature": "Compact",
    "beanSize": "High",
    "yieldPotential": "Very High",
    "qualityPotential": "Good",
    "optimalAltitude": "800–1400 m",
    "leafRustResistance": "High",
    "coffeeBerryDiseaseResistance": "Low",
    "nematodeResistance": "Unknown",
    "nutritionRequirement": "High",
    "commonCountries": [
      "Brazil",
      "Costa Rica"
    ],
    "flavorNotes": [
      "cacao nibs",
      "roasted nuts",
      "caramel",
      "low acidity",
      "full body"
    ],
    "summary": "Bred in Brazil and released in 2000, Obata is a cross between Sarchimor (for leaf rust resistance) and Catuaí. It has a compact stature, dark bronze-tipped leaves, and high yield capacity. It is well-suited for high-density plantings and mechanical harvesting, rendering a balanced, chocolatey cup.",
    "relatedVarieties": [
      "catuai"
    ],
    "sources": [
      {
        "name": "World Coffee Research - Obata",
        "url": "https://varieties.worldcoffeeresearch.org/varieties/obata-red"
      }
    ],
    "imageUrl": "https://optimise2.assets-servd.host/worldcoffee-research/production/images/Arabica/Obata-Rojo-1.jpg?w=3000&h=2000&auto=compress%2Cformat&fit=crop&dm=1684915637&s=f8cf142b5809bc762b8e04cd18795c8e"
  },
  {
    "id": "k7",
    "name": "K7",
    "alternativeNames": [
      "K-7"
    ],
    "species": "Arabica",
    "lineage": "Bourbon-Typica",
    "parentage": "Selection from French Mission Bourbon",
    "origin": "Kenya (selected on Legetet Estate)",
    "plantStature": "Tall",
    "beanSize": "High",
    "yieldPotential": "Medium",
    "qualityPotential": "Good",
    "optimalAltitude": "1200–1600 m",
    "leafRustResistance": "High",
    "coffeeBerryDiseaseResistance": "Low",
    "nematodeResistance": "Unknown",
    "nutritionRequirement": "Medium",
    "commonCountries": [
      "Kenya",
      "Tanzania"
    ],
    "flavorNotes": [
      "citrus",
      "spice",
      "chocolate",
      "full body",
      "brown sugar"
    ],
    "summary": "Selected in Kenya in the 1930s on Legetet Estate from French Mission Bourbon trees. It is highly valued for its resistance to coffee leaf rust (specifically some races) and tolerance to CBD. It performs well at lower altitudes in rust-prone areas, displaying bronze-tipped leaves and a sweet, spicy profile.",
    "relatedVarieties": [
      "bourbon"
    ],
    "sources": [
      {
        "name": "World Coffee Research - K7",
        "url": "https://varieties.worldcoffeeresearch.org/varieties/k7"
      }
    ],
    "imageUrl": "https://optimise2.assets-servd.host/worldcoffee-research/production/images/Arabica/K7-1.jpg?w=4000&h=2667&auto=compress%2Cformat&fit=crop&dm=1684915625&s=9a3572a3fb9dca303ad090fca4bf6d5a"
  },
  {
    "id": "sl14",
    "name": "SL14",
    "alternativeNames": [
      "Scott Labs 14"
    ],
    "species": "Arabica",
    "lineage": "Bourbon-Typica",
    "parentage": "Selection from Typica (genetically Typica-like)",
    "origin": "Kenya (selected by Scott Agricultural Laboratories)",
    "plantStature": "Tall",
    "beanSize": "Medium",
    "yieldPotential": "Medium",
    "qualityPotential": "Good",
    "optimalAltitude": "1100–1500 m",
    "leafRustResistance": "Low",
    "coffeeBerryDiseaseResistance": "Low",
    "nematodeResistance": "Unknown",
    "nutritionRequirement": "Low",
    "commonCountries": [
      "Uganda",
      "Kenya"
    ],
    "flavorNotes": [
      "caramel",
      "stone fruit",
      "milk chocolate",
      "black tea",
      "creamy finish"
    ],
    "summary": "Selected in Kenya in the 1930s. It is highly drought-tolerant, making it very popular in Uganda (specifically the Mount Elgon region). While sensitive to major diseases, its low fertilizer requirement and reliable performance in dry weather make it a solid option for smallholders.",
    "relatedVarieties": [
      "typica",
      "sl28"
    ],
    "sources": [
      {
        "name": "World Coffee Research - SL14",
        "url": "https://varieties.worldcoffeeresearch.org/varieties/sl14"
      }
    ]
  },
  {
    "id": "tekisic",
    "name": "Tekisic",
    "alternativeNames": [
      "Tekisic Bourbon",
      "ISIC Bourbon"
    ],
    "species": "Arabica",
    "lineage": "Bourbon",
    "parentage": "Selection from Salvadoran Red Bourbon",
    "origin": "El Salvador (ISIC)",
    "plantStature": "Tall",
    "beanSize": "Medium",
    "yieldPotential": "Medium",
    "qualityPotential": "Exceptional",
    "optimalAltitude": "1200–1800 m",
    "leafRustResistance": "Low",
    "coffeeBerryDiseaseResistance": "Low",
    "nematodeResistance": "Low",
    "nutritionRequirement": "Medium",
    "commonCountries": [
      "El Salvador",
      "Guatemala",
      "Honduras"
    ],
    "flavorNotes": [
      "caramel",
      "brown sugar",
      "intense sweetness",
      "stone fruit",
      "clean acidity"
    ],
    "summary": "A highly refined selection of Salvadoran Bourbon developed by ISIC over 30 years starting in 1949. It is tall, low-yielding, and highly sensitive to disease, but retains world-class specialty status. It is famous for its exceptional, dense sweetness, clean caramel profile, and heavy mouthfeel.",
    "relatedVarieties": [
      "bourbon"
    ],
    "sources": [
      {
        "name": "World Coffee Research - Tekisic",
        "url": "https://varieties.worldcoffeeresearch.org/varieties/tekisic"
      }
    ],
    "imageUrl": "https://optimise2.assets-servd.host/worldcoffee-research/production/images/Arabica/Tekisic-1.jpg?w=3000&h=2000&auto=compress%2Cformat&fit=crop&dm=1684915651&s=b0ca464581510aeceb39eea31b9852da"
  },
  {
    "id": "sidra",
    "name": "Sidra",
    "alternativeNames": ["Cafe Sidra", "Sydra"],
    "species": "Arabica",
    "lineage": "Bourbon-Typica",
    "parentage": "Cross of Red Bourbon and Typica",
    "origin": "Ecuador (Pichincha)",
    "plantStature": "Tall",
    "beanSize": "High",
    "yieldPotential": "Medium",
    "qualityPotential": "Exceptional",
    "optimalAltitude": "1500–2100 m",
    "leafRustResistance": "Low",
    "coffeeBerryDiseaseResistance": "Low",
    "nematodeResistance": "Unknown",
    "nutritionRequirement": "Medium",
    "commonCountries": ["Ecuador", "Colombia"],
    "flavorNotes": ["red apple", "jasmine", "apricot", "maple syrup", "cider", "creamy body"],
    "summary": "An elite hybrid variety originating in Ecuador. It combines the sweetness and body of Bourbon with the bright, floral acidity of Typica. Sidra has gained massive acclaim in international barista competitions for its complex, fruity, and highly clean cup profile.",
    "relatedVarieties": ["bourbon", "typica"],
    "sources": [
      {
        "name": "Specialty Coffee Association (SCA)",
        "url": "https://sca.coffee"
      }
    ]
  },
  {
    "id": "pink-bourbon",
    "name": "Pink Bourbon",
    "alternativeNames": ["Bourbon Rosado"],
    "species": "Arabica",
    "lineage": "Bourbon",
    "parentage": "Natural hybridization of Red and Yellow Bourbon",
    "origin": "Colombia (Huila)",
    "plantStature": "Tall",
    "beanSize": "Medium",
    "yieldPotential": "Medium",
    "qualityPotential": "Exceptional",
    "optimalAltitude": "1400–2000 m",
    "leafRustResistance": "Low",
    "coffeeBerryDiseaseResistance": "Low",
    "nematodeResistance": "Low",
    "nutritionRequirement": "Medium",
    "commonCountries": ["Colombia"],
    "flavorNotes": ["pink grapefruit", "honey", "floral", "peach", "mandarin orange", "delicate sweetness"],
    "summary": "A highly coveted natural hybrid/mutation discovered in Huila, Colombia. It produces beautiful pink cherries when ripe, which genetically represent a cross of Red and Yellow Bourbon. It is highly prized for its exceptional sweetness, light floral notes, and elegant citrus profile.",
    "relatedVarieties": ["bourbon"],
    "sources": [
      {
        "name": "Café de Colombia",
        "url": "https://www.cafedecolombia.com"
      }
    ]
  },
  {
    "id": "laurina",
    "name": "Laurina",
    "alternativeNames": ["Bourbon Pointu", "Pointu"],
    "species": "Arabica",
    "lineage": "Bourbon",
    "parentage": "Natural dwarf mutation of Bourbon",
    "origin": "Réunion Island (Bourbon Island)",
    "plantStature": "Dwarf",
    "beanSize": "Low",
    "yieldPotential": "Very Low",
    "qualityPotential": "Very High",
    "optimalAltitude": "1200–1800 m",
    "leafRustResistance": "Low",
    "coffeeBerryDiseaseResistance": "Low",
    "nematodeResistance": "Low",
    "nutritionRequirement": "Medium",
    "commonCountries": ["Réunion", "Brazil", "Costa Rica"],
    "flavorNotes": ["peach", "rosemary", "white chocolate", "clean sweetness", "very low bitterness"],
    "summary": "A famous natural mutation of Bourbon first observed on Réunion Island in the 18th century. It features a unique compact Christmas-tree shape and produces pointed beans. Laurina is renowned for its naturally low caffeine content (around 0.5%–0.6%—half that of normal Arabica), giving it an exceptionally sweet, mild cup with almost no bitterness.",
    "relatedVarieties": ["bourbon"],
    "sources": [
      {
        "name": "World Coffee Research - Bourbon Pointu",
        "url": "https://worldcoffeeresearch.org"
      }
    ]
  },
  {
    "id": "wush-wush",
    "name": "Wush Wush",
    "alternativeNames": ["Wushwush"],
    "species": "Arabica",
    "lineage": "Ethiopian Landrace",
    "parentage": "Selection from wild Ethiopian landraces",
    "origin": "Ethiopia (Wushwush region)",
    "plantStature": "Tall",
    "beanSize": "Medium",
    "yieldPotential": "Low",
    "qualityPotential": "Exceptional",
    "optimalAltitude": "1700–2200 m",
    "leafRustResistance": "Low",
    "coffeeBerryDiseaseResistance": "Low",
    "nematodeResistance": "Unknown",
    "nutritionRequirement": "Medium",
    "commonCountries": ["Ethiopia", "Colombia"],
    "flavorNotes": ["blueberry", "winey", "strawberry", "jasmine", "cacao nibs", "complex acidity"],
    "summary": "A low-yielding heirloom landrace originating from the high-altitude forests of the Wushwush region in southwest Ethiopia. Prized for its intense cup profile, featuring deep berry notes, tropical fruits, and wine-like complexity, it has become a favorite in specialty competitions worldwide.",
    "relatedVarieties": ["geisha"],
    "sources": [
      {
        "name": "Royal Coffee - Wush Wush Profile",
        "url": "https://royalcoffee.com"
      }
    ]
  },
  {
    "id": "sudan-rume",
    "name": "Sudan Rume",
    "alternativeNames": ["Rume Sudan"],
    "species": "Arabica",
    "lineage": "Ethiopian Landrace",
    "parentage": "Wild selection from South Sudan landraces",
    "origin": "South Sudan (Boma Plateau)",
    "plantStature": "Tall",
    "beanSize": "Medium",
    "yieldPotential": "Low",
    "qualityPotential": "Exceptional",
    "optimalAltitude": "1300–1900 m",
    "leafRustResistance": "Medium",
    "coffeeBerryDiseaseResistance": "High",
    "nematodeResistance": "Unknown",
    "nutritionRequirement": "Medium",
    "commonCountries": ["South Sudan", "Colombia"],
    "flavorNotes": ["cardamom", "eucalyptus", "black tea", "lemon zest", "ginger", "herbal sweetness"],
    "summary": "A wild landrace variety collected from the Boma Plateau in South Sudan. It is genetically vital as a source of disease resistance, particularly to Coffee Berry Disease, and is a parent for breeding elite cultivars like Ruiru 11 and Centroamericano. On its own, it yields an incredibly unique, herbal, tea-like, and spicy cup.",
    "relatedVarieties": ["centroamericano"],
    "sources": [
      {
        "name": "World Coffee Research - Sudan Rume",
        "url": "https://worldcoffeeresearch.org"
      }
    ]
  },
  {
    "id": "eugenioides",
    "name": "Eugenioides",
    "alternativeNames": ["Coffea eugenioides"],
    "species": "Eugenioides",
    "lineage": "Eugenioides",
    "parentage": "Wild diploid coffee species",
    "origin": "East African Highlands (Uganda, Kenya, Rwanda)",
    "plantStature": "Compact",
    "beanSize": "Very Low",
    "yieldPotential": "Very Low",
    "qualityPotential": "Exceptional",
    "optimalAltitude": "1000–1800 m",
    "leafRustResistance": "Medium",
    "coffeeBerryDiseaseResistance": "Medium",
    "nematodeResistance": "Unknown",
    "nutritionRequirement": "Low",
    "commonCountries": ["Colombia", "Uganda"],
    "flavorNotes": ["toasted marshmallow", "lemon drops", "sweet milk", "cereal", "extremely sweet", "no bitterness"],
    "summary": "A distinct diploid coffee species native to the East African highlands. It is famous for being one of the two genetic parents of Coffea arabica (the other being Coffea canephora/Robusta). Grown in very small volumes in Colombia, it features extremely low caffeine and an astonishingly sweet, cereal-like cup profile with virtually no bitterness.",
    "relatedVarieties": ["typica", "bourbon", "conilon"],
    "sources": [
      {
        "name": "Kew Royal Botanic Gardens - Coffea eugenioides",
        "url": "https://powo.science.kew.org"
      }
    ]
  },
  {
    "id": "timor-hybrid",
    "name": "Timor Hybrid",
    "alternativeNames": ["Hibrido de Timor", "HDT"],
    "species": "Arabica",
    "lineage": "Introgressed",
    "parentage": "Spontaneous natural cross between Typica (Arabica) and Robusta",
    "origin": "Timor Island",
    "plantStature": "Tall",
    "beanSize": "High",
    "yieldPotential": "High",
    "qualityPotential": "Medium",
    "optimalAltitude": "800–1500 m",
    "leafRustResistance": "Very High",
    "coffeeBerryDiseaseResistance": "High",
    "nematodeResistance": "High",
    "nutritionRequirement": "Medium",
    "commonCountries": ["Timor-Leste", "Indonesia"],
    "flavorNotes": ["herbal", "woody", "dark cocoa", "earthy", "bold body"],
    "summary": "A spontaneous natural cross between Arabica and Robusta first discovered on Timor Island in 1917. It is genetically foundational to modern coffee breeding, as its Robusta parentage introduced complete resistance to Coffee Leaf Rust. It is the genetic ancestor of all Catimor and Sarchimor varieties.",
    "relatedVarieties": ["typica", "catimor", "centroamericano", "marsellesa", "obata"],
    "sources": [
      {
        "name": "World Coffee Research - Timor Hybrid",
        "url": "https://varieties.worldcoffeeresearch.org/varieties/timor-hybrid"
      }
    ],
    "imageUrl": "https://optimise2.assets-servd.host/worldcoffee-research/production/images/Arabica/Hibrido-de-Timor-1.jpg?w=640&h=480&auto=compress%2Cformat&fit=crop&dm=1684915621&s=4d0a927a421b446c6ea40a463eb4c134"
  }
];
