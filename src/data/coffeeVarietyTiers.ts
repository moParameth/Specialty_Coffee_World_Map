export interface TierVariety {
  id: string;
  name: string;
  species: string;
  lineage: string;
  standardTier: "S" | "A" | "B" | "C" | "D";
  qualityTier: "S" | "A" | "B" | "C" | "D";
  agronomyTier: "S" | "A" | "B" | "C" | "D";
  scores: {
    quality: number; // Cup quality potential (1-5)
    yield: number; // Yield potential (1-5)
    resistance: number; // Disease/pest resistance (1-5)
    difficulty: number; // Cultivation difficulty (1-5, 5 being hardest)
  };
  reasoning: string;
  verdict: string;
}

export const coffeeVarietyTiers: TierVariety[] = [
  // S-TIER
  {
    id: "geisha",
    name: "Geisha",
    species: "Arabica",
    lineage: "Ethiopian Landrace",
    standardTier: "S",
    qualityTier: "S",
    agronomyTier: "D",
    scores: {
      quality: 5.0,
      yield: 1.5,
      resistance: 1.5,
      difficulty: 4.8
    },
    reasoning: "Geisha stands at the absolute zenith of sensory complexity in coffee, boasting an unparalleled flavor profile characterized by intense jasmine florals, bergamot citrus, and tea-like elegance. However, agronomically, it is extremely fragile. It produces very low yields, requires extreme high altitudes to express its quality, and is highly susceptible to Coffee Leaf Rust (CLR) and Coffee Berry Disease (CBD).",
    verdict: "The undisputed King of Cup Quality, but an absolute nightmare for risk-averse farmers."
  },
  {
    id: "sl28",
    name: "SL28",
    species: "Arabica",
    lineage: "Bourbon-related",
    standardTier: "S",
    qualityTier: "S",
    agronomyTier: "C",
    scores: {
      quality: 4.8,
      yield: 2.5,
      resistance: 2.0,
      difficulty: 3.5
    },
    reasoning: "SL28 is Kenya's legendary cultivar, selected by Scott Agricultural Laboratories in the 1930s. It yields a cup known for striking blackcurrant acidity, complex dark fruit sweetness, and heavy body. While highly drought-tolerant and capable of surviving neglect for decades, it is highly vulnerable to major pests and diseases, and yields are only moderate.",
    verdict: "A legendary specialty cultivar that defines the high-acid East African cup profile."
  },
  {
    id: "pink-bourbon",
    name: "Pink Bourbon",
    species: "Arabica",
    lineage: "Bourbon",
    standardTier: "S",
    qualityTier: "S",
    agronomyTier: "B",
    scores: {
      quality: 4.7,
      yield: 3.5,
      resistance: 2.5,
      difficulty: 3.0
    },
    reasoning: "A natural hybrid mutation (likely Red Bourbon x Yellow Bourbon) discovered in Huila, Colombia. It produces striking pink cherries and exhibits exceptional sweetness, clean citrus acids, and floral complexities resembling high-end landraces. Agronomically, it possesses higher vigor and slightly better natural disease tolerance than standard red/yellow Bourbons, while producing solid yields.",
    verdict: "A superb balance of exotic cup complexity and reasonable farm-level viability."
  },
  {
    id: "eugenioides",
    name: "Coffea Eugenioides",
    species: "Eugenioides",
    lineage: "Progenitor Species",
    standardTier: "S",
    qualityTier: "S",
    agronomyTier: "D",
    scores: {
      quality: 4.9,
      yield: 1.0,
      resistance: 2.0,
      difficulty: 5.0
    },
    reasoning: "As one of the two genetic parents of Arabica, Eugenioides has small beans and exceptionally low yields. However, it contains naturally very low levels of caffeine (about 0.2%), completely eliminating perceived bitterness. It produces a cup that is astonishingly sweet, tasting of toasted marshmallows, yellow fruits, and sweet milk. It is extremely difficult to farm commercially and is primarily grown for barista competitions.",
    verdict: "An exotic competition anomaly with dessert-like sweetness but virtually zero commercial farm viability."
  },
  {
    id: "sidra",
    name: "Sidra",
    species: "Arabica",
    lineage: "Bourbon / Typica hybrid",
    standardTier: "S",
    qualityTier: "S",
    agronomyTier: "C",
    scores: {
      quality: 4.7,
      yield: 2.8,
      resistance: 2.0,
      difficulty: 4.0
    },
    reasoning: "Developed in Ecuador, Sidra is a cross between a Bourbon-descended variety and an Ethiopian landrace. It yields a highly complex specialty profile filled with stone fruits, red apple acidity, and intense floral aromas. It is slow-growing and requires strict shade management and high altitude, making it demanding to cultivate.",
    verdict: "A modern darling of world barista championships, highly prized for its tropical cup clarity."
  },
  {
    id: "wush-wush",
    name: "Wush Wush",
    species: "Arabica",
    lineage: "Ethiopian Landrace",
    standardTier: "S",
    qualityTier: "S",
    agronomyTier: "C",
    scores: {
      quality: 4.6,
      yield: 2.2,
      resistance: 2.0,
      difficulty: 4.0
    },
    reasoning: "Hailing from the Wushwush region in Ethiopia, this landrace variety is renowned for intense, exotic cup qualities, packed with wild berries, tropical fruits, and heavy wine-like fermentation flavors. Similar to Geisha, it suffers from low yield stability and high susceptibility to diseases outside its native terroir.",
    verdict: "An absolute fruit bomb favored by specialty roasters for anaerobic microlots."
  },
  {
    id: "sudan-rume",
    name: "Sudan Rume",
    species: "Arabica",
    lineage: "Ethiopian Landrace",
    standardTier: "S",
    qualityTier: "S",
    agronomyTier: "C",
    scores: {
      quality: 4.6,
      yield: 2.0,
      resistance: 3.8,
      difficulty: 3.5
    },
    reasoning: "An ancient wild landrace variety collected from the Boma Plateau in southeastern Sudan. It yields an incredibly complex cup, boasting sweet spices, cardamom, floral jasmine, and crisp citrus notes. While it is low-yielding, it possesses high natural genetic resistance to Coffee Berry Disease (CBD), making it highly valuable in modern hybrid breeding programs.",
    verdict: "An exotic gene pool benchmark with a spicy bouquet, widely used as an elite breeding tool."
  },

  // A-TIER
  {
    id: "bourbon",
    name: "Bourbon",
    species: "Arabica",
    lineage: "Bourbon",
    standardTier: "A",
    qualityTier: "A",
    agronomyTier: "C",
    scores: {
      quality: 4.3,
      yield: 3.0,
      resistance: 1.5,
      difficulty: 3.5
    },
    reasoning: "The foundational ancestor of many modern cultivars, Bourbon is famous for its sweet caramel, chocolate, and stone-fruit flavors, alongside a round, balanced body. While it produces 20-30% more yield than Typica, it remains highly vulnerable to Leaf Rust, Nematodes, and Coffee Berry Disease, requiring constant management.",
    verdict: "The absolute benchmark for sweetness and balance in specialty coffee."
  },
  {
    id: "typica",
    name: "Typica",
    species: "Arabica",
    lineage: "Typica",
    standardTier: "A",
    qualityTier: "A",
    agronomyTier: "D",
    scores: {
      quality: 4.2,
      yield: 2.0,
      resistance: 1.5,
      difficulty: 4.0
    },
    reasoning: "The grandmother of all Arabica coffees. Typica yields an incredibly clean, sweet, and delicate cup with mild citrus acidity. However, it is tall, low-yielding, has weak branches, and possesses no natural resistance to Leaf Rust or other major diseases, making it risky to grow without intense chemical protection.",
    verdict: "A historic cultivar of exceptional elegance, held back by low yields and weak agronomics."
  },
  {
    id: "pacamara",
    name: "Pacamara",
    species: "Arabica",
    lineage: "Pacas / Maragogype hybrid",
    standardTier: "A",
    qualityTier: "A",
    agronomyTier: "C",
    scores: {
      quality: 4.5,
      yield: 2.8,
      resistance: 1.8,
      difficulty: 4.0
    },
    reasoning: "A cross between Pacas (dwarf Bourbon) and Maragogype (giant bean Typica) created in El Salvador. It has exceptionally large leaves and beans, yielding a highly distinct cup: savory, herbal (sage, rosemary), sweet stone fruit, and heavy body. It is genetically unstable (10-12% of plants revert) and vulnerable to rust.",
    verdict: "A highly complex, savory wild-card variety that rewards careful farming with elite cup scores."
  },
  {
    id: "java",
    name: "Java",
    species: "Arabica",
    lineage: "Ethiopian Landrace",
    standardTier: "A",
    qualityTier: "A",
    agronomyTier: "A",
    scores: {
      quality: 4.2,
      yield: 3.5,
      resistance: 4.0,
      difficulty: 2.5
    },
    reasoning: "Originally selected in Ethiopia, Java was brought to Java island, and later to Central America. It exhibits excellent cup quality (often tea-like and floral at high altitudes) paired with high tolerance to Coffee Berry Disease and Leaf Rust, and low nutritional needs. This makes it a highly viable organic specialty option.",
    verdict: "A brilliant hybrid alternative that offers landrace quality with robust disease defense."
  },
  {
    id: "laurina",
    name: "Laurina",
    species: "Arabica",
    lineage: "Bourbon",
    standardTier: "A",
    qualityTier: "A",
    agronomyTier: "D",
    scores: {
      quality: 4.5,
      yield: 1.5,
      resistance: 1.2,
      difficulty: 4.5
    },
    reasoning: "A natural dwarf mutation of Bourbon discovered on Réunion Island (formerly Bourbon Island). It features a distinct Christmas-tree shape and elongated seeds. Its defining trait is a naturally low caffeine level (approx. 0.5-0.7% compared to Arabica's normal 1.2-1.5%), which yields a cup with very low bitterness, light body, and exceptional floral/stone-fruit sweetness. However, caffeine is the plant's natural insecticide; without it, Laurina is highly vulnerable to pests, diseases, and has very low yields.",
    verdict: "Naturally low-caffeine specialty mutant with exquisite sweetness, but very difficult to protect from pests."
  },
  {
    id: "tekisic",
    name: "Tekisic",
    species: "Arabica",
    lineage: "Bourbon",
    standardTier: "A",
    qualityTier: "A",
    agronomyTier: "C",
    scores: {
      quality: 4.4,
      yield: 2.2,
      resistance: 1.5,
      difficulty: 3.8
    },
    reasoning: "A mass selection of Bourbon bred in El Salvador by ISIC starting in 1949. It is a slow-maturing, low-yielding dwarf shrub that produces exceptionally sweet, clean cups with high citric and malic acidity and excellent mouthfeel. Highly vulnerable to leaf rust, CBD, and nematodes.",
    verdict: "An exquisite single-estate selection of pure Bourbon, delivering phenomenal sweetness at the cost of yield."
  },

  // B-TIER
  {
    id: "caturra",
    name: "Caturra",
    species: "Arabica",
    lineage: "Bourbon",
    standardTier: "B",
    qualityTier: "B",
    agronomyTier: "B",
    scores: {
      quality: 3.8,
      yield: 4.0,
      resistance: 1.8,
      difficulty: 2.8
    },
    reasoning: "A natural dwarf mutation of Bourbon discovered in Brazil. Its small stature allows high-density planting and easy harvesting, dramatically increasing overall farm yield. It yields a clean, sweet cup with bright citric acidity, but has zero resistance to Leaf Rust, requiring active agricultural management.",
    verdict: "The industry standard workhorse of Central American specialty coffee."
  },
  {
    id: "catuai",
    name: "Catuaí",
    species: "Arabica",
    lineage: "Mundo Novo / Caturra cross",
    standardTier: "B",
    qualityTier: "B",
    agronomyTier: "B",
    scores: {
      quality: 3.7,
      yield: 4.2,
      resistance: 2.0,
      difficulty: 2.2
    },
    reasoning: "A cross between Mundo Novo and Caturra. It is highly resistant to strong winds (cherries cling tight to branches) and features a compact stature with very high yields. Its cup is clean, sweet, and nutty, though lacking high acid complexity. Highly susceptible to rust but easy to cultivate.",
    verdict: "A highly reliable, durable, and productive standard specialty cultivar."
  },
  {
    id: "centroamericano",
    name: "Centroamericano (H1)",
    species: "Arabica",
    lineage: "Sarchimor / Geisha F1 Hybrid",
    standardTier: "B",
    qualityTier: "B",
    agronomyTier: "S",
    scores: {
      quality: 4.0,
      yield: 4.8,
      resistance: 4.8,
      difficulty: 1.8
    },
    reasoning: "A modern F1 hybrid cross between a rust-resistant Sarchimor and Geisha. It delivers exceptional yield, outstanding vigor, and complete resistance to Leaf Rust. If grown at high altitudes (1200m+), its cup quality is very high (often scoring 85+ SCA points with sweet florals and complex acidity). It represents the future of sustainable farming.",
    verdict: "A spectacular F1 hybrid that successfully bridges high disease resistance with specialty-level cup quality."
  },
  {
    id: "mundo-novo",
    name: "Mundo Novo",
    species: "Arabica",
    lineage: "Typica / Bourbon hybrid",
    standardTier: "B",
    qualityTier: "B",
    agronomyTier: "A",
    scores: {
      quality: 3.6,
      yield: 4.0,
      resistance: 2.5,
      difficulty: 2.5
    },
    reasoning: "A natural cross between Sumatra (Typica) and Bourbon found in Brazil. It grows tall and robust, offering high yields and excellent climate adaptability. The cup profile is traditional: heavy body, low acidity, and rich dark chocolate/nutty flavors, making it ideal for standard espresso blends.",
    verdict: "A robust Brazilian giant that delivers classic sweet, low-acid, chocolatey flavors."
  },
  {
    id: "sl34",
    name: "SL34",
    species: "Arabica",
    lineage: "Typica-related",
    standardTier: "B",
    qualityTier: "A",
    agronomyTier: "B",
    scores: {
      quality: 4.2,
      yield: 3.5,
      resistance: 2.2,
      difficulty: 3.2
    },
    reasoning: "A selection made by Scott Laboratories in Kenya from a single tree on Loresho Estate in Kabete. Genetically similar to Typica. It produces outstanding quality with a complex fruit-forward profile (wild berry, citric) when grown at high elevations. It has better cold and heavy rainfall resistance than SL28 but is highly susceptible to Leaf Rust and CBD.",
    verdict: "A robust, high-altitude alternative in Kenya that yields dense, fruit-forward cup profiles."
  },
  {
    id: "batian",
    name: "Batian",
    species: "Arabica",
    lineage: "Composite cultivar",
    standardTier: "B",
    qualityTier: "A",
    agronomyTier: "A",
    scores: {
      quality: 4.2,
      yield: 4.5,
      resistance: 4.8,
      difficulty: 2.0
    },
    reasoning: "A modern composite variety released in Kenya in 2010. It is bred to combine the high cup quality of SL28 with the complete CBD and Leaf Rust resistance of Ruiru 11. It is a tall variety that starts bearing fruit in just 2 years. Cups are bright, complex, and high-acid.",
    verdict: "A success of modern breeding, carrying heirloom quality with absolute disease armor."
  },
  {
    id: "maragogype",
    name: "Maragogype",
    species: "Arabica",
    lineage: "Typica mutation",
    standardTier: "B",
    qualityTier: "B",
    agronomyTier: "D",
    scores: {
      quality: 3.8,
      yield: 1.8,
      resistance: 1.5,
      difficulty: 4.0
    },
    reasoning: "A natural mutation of Typica first discovered in Bahia, Brazil, in 1870. Famous for its massive size (often called 'Elephant Beans') and wide, large leaves. It produces very low yields. The cup is mild, clean, and sweet with light acidity and delicate nut/chocolate notes. It is highly susceptible to leaf rust.",
    verdict: "Gigantic beans with a light, smooth, clean cup, though highly unproductive to farm."
  },
  {
    id: "starmaya",
    name: "Starmaya",
    species: "Arabica",
    lineage: "F1 Hybrid",
    standardTier: "B",
    qualityTier: "B",
    agronomyTier: "S",
    scores: {
      quality: 3.8,
      yield: 4.8,
      resistance: 4.7,
      difficulty: 1.8
    },
    reasoning: "A breakthrough F1 hybrid created by CIRAD. It is the first F1 hybrid that can be propagated by seeds rather than tissue culture (somatic embryogenesis), making it significantly cheaper for farmers. It offers very high yields, leaf rust resistance, and high cup quality scoring up to 83-85 SCA points.",
    verdict: "An economic breakthrough for smallholders, lowering seed costs while preserving F1 hybrid vigor."
  },
  {
    id: "s795",
    name: "S795",
    species: "Arabica",
    lineage: "Liberica/Arabica hybrid descendant",
    standardTier: "B",
    qualityTier: "B",
    agronomyTier: "A",
    scores: {
      quality: 3.7,
      yield: 3.8,
      resistance: 4.0,
      difficulty: 2.2
    },
    reasoning: "Bred in India by crossing Kent (a rust-tolerant Typica) with S.288 (a wild Liberica-Arabica hybrid). It is highly resistant to Leaf Rust, yields well, and is extremely popular in India and Indonesia. It produces a rich cup with heavy body and distinct sweet/spicy/chocolaty notes.",
    verdict: "A robust Asian classic, utilizing interspecific Liberica heritage to survive rust."
  },
  {
    id: "pacas",
    name: "Pacas",
    species: "Arabica",
    lineage: "Bourbon mutation",
    standardTier: "B",
    qualityTier: "B",
    agronomyTier: "B",
    scores: {
      quality: 3.8,
      yield: 3.8,
      resistance: 1.8,
      difficulty: 2.8
    },
    reasoning: "A natural dwarf mutation of Bourbon discovered in El Salvador in 1949. Similar to Caturra, its short stature allows high-density planting and high yield. It is highly vulnerable to rust and CBD but offers a sweet, clean Bourbon-like cup.",
    verdict: "A highly viable dwarf selection that maintains the classic, balanced sweetness of Bourbon."
  },
  {
    id: "villa-sarchi",
    name: "Villa Sarchi",
    species: "Arabica",
    lineage: "Bourbon mutation",
    standardTier: "B",
    qualityTier: "B",
    agronomyTier: "B",
    scores: {
      quality: 3.9,
      yield: 3.8,
      resistance: 2.0,
      difficulty: 2.8
    },
    reasoning: "A natural dwarf mutation of Bourbon discovered in Costa Rica. It performs exceptionally well under high wind conditions and high altitudes, producing high yields. The cup is clean and sweet, with bright acidity and pleasant fruit notes.",
    verdict: "A wind-resistant dwarf cultivar ideal for high-altitude, exposed mountain ridges."
  },

  // C-TIER
  {
    id: "castillo",
    name: "Castillo",
    species: "Arabica",
    lineage: "Catimor (Timor Hybrid descendant)",
    standardTier: "C",
    qualityTier: "C",
    agronomyTier: "S",
    scores: {
      quality: 3.5,
      yield: 4.8,
      resistance: 4.9,
      difficulty: 1.5
    },
    reasoning: "Colombia's primary rust-resistant cultivar. It was bred extensively for leaf rust resistance, high yield, and high planting density. While often criticized in the past for having a flatter cup with herbal or woody hints (due to Robusta genetics), careful cultivation and modern anaerobic fermentation can produce highly sweet, clean cups.",
    verdict: "A vital shield for Colombian coffee economics, offering maximum durability with respectable quality."
  },
  {
    id: "catimor",
    name: "Catimor",
    species: "Arabica",
    lineage: "Caturra / Timor Hybrid cross",
    standardTier: "C",
    qualityTier: "C",
    agronomyTier: "S",
    scores: {
      quality: 3.2,
      yield: 4.8,
      resistance: 4.7,
      difficulty: 1.5
    },
    reasoning: "Catimor is a genetic cross between Caturra and the Timor Hybrid (a natural Arabica-Robusta cross). It offers outstanding resistance to Leaf Rust, high yield potential, and quick maturation. However, its Robusta parentage can cause a harsh, woody, or astringent flavor profile if grown at low altitudes or poorly processed.",
    verdict: "Highly productive and disease-proof, but requires careful high-elevation farming to score well."
  },
  {
    id: "parainema",
    name: "Parainema",
    species: "Arabica",
    lineage: "Sarchimor",
    standardTier: "C",
    qualityTier: "B",
    agronomyTier: "S",
    scores: {
      quality: 3.9,
      yield: 4.2,
      resistance: 4.8,
      difficulty: 2.0
    },
    reasoning: "A dwarf Sarchimor variety selected in Honduras. It is highly resistant to Leaf Rust and Nematodes. Unlike many Catimors/Sarchimors, Parainema has surprised the industry by winning Cup of Excellence titles due to its potential to produce clean citrus, tropical fruits, and sweet herbal cups when grown at high elevations.",
    verdict: "A Sarchimor outlier capable of producing clean, award-winning flavor profiles."
  },
  {
    id: "ruiru-11",
    name: "Ruiru 11",
    species: "Arabica",
    lineage: "Catimor-descended composite",
    standardTier: "C",
    qualityTier: "C",
    agronomyTier: "S",
    scores: {
      quality: 3.4,
      yield: 4.5,
      resistance: 4.9,
      difficulty: 2.2
    },
    reasoning: "Kenya's dwarf composite variety, bred to save land and provide complete immunity to Leaf Rust and Coffee Berry Disease. It requires intense fertilization but yields heavily. Because of its complex parentage containing Robusta genetics, it generally produces a flatter cup with less fruitiness and lower acidity than SL28.",
    verdict: "An agronomic fortress that protects farmers from disease, though at the cost of Kenya's iconic cup acidity."
  },
  {
    id: "marsellesa",
    name: "Marsellesa",
    species: "Arabica",
    lineage: "Sarchimor",
    standardTier: "C",
    qualityTier: "C",
    agronomyTier: "S",
    scores: {
      quality: 3.4,
      yield: 4.5,
      resistance: 4.8,
      difficulty: 1.8
    },
    reasoning: "A Sarchimor variety selected in Nicaragua. It is highly resistant to Leaf Rust and has high yields. The cup is characterized by bright acidity, but it lacks deep complexity and sweetness compared to pure heirloom Arabicas.",
    verdict: "A durable Sarchimor with good clean acidity, built for heavy agricultural scales."
  },
  {
    id: "obata",
    name: "Obata",
    species: "Arabica",
    lineage: "Sarchimor",
    standardTier: "C",
    qualityTier: "C",
    agronomyTier: "S",
    scores: {
      quality: 3.4,
      yield: 4.6,
      resistance: 4.9,
      difficulty: 1.8
    },
    reasoning: "Bred in Brazil, Obata is a Sarchimor hybrid. It is highly resistant to Leaf Rust, yields heavily, and has high environmental adaptability. The cup quality is clean and sweet, but has low acidity and limited complex aromatics.",
    verdict: "A highly defensive cultivar that yields well, ideal for low-acid commercial blends."
  },
  {
    id: "sl14",
    name: "SL14",
    species: "Arabica",
    lineage: "Typica-related",
    standardTier: "C",
    qualityTier: "C",
    agronomyTier: "B",
    scores: {
      quality: 3.5,
      yield: 3.2,
      resistance: 2.5,
      difficulty: 2.8
    },
    reasoning: "Selected in Kenya in the 1930s by Scott Laboratories. It is widely grown in Uganda for its exceptional drought tolerance, allowing it to survive dry seasons better than SL28. The cup quality is decent, sweet, and medium-bodied, but it is highly susceptible to Leaf Rust and CBD.",
    verdict: "An exceptionally drought-resilient variety that serves as Uganda's primary Arabica choice."
  },
  {
    id: "k7",
    name: "K7",
    species: "Arabica",
    lineage: "French Mission Bourbon selection",
    standardTier: "C",
    qualityTier: "C",
    agronomyTier: "B",
    scores: {
      quality: 3.6,
      yield: 3.0,
      resistance: 3.2,
      difficulty: 2.8
    },
    reasoning: "A selection of French Mission Bourbon from Kenya. It is known for its tolerance to some races of Leaf Rust and moderate resistance to CBD. It has good cup quality, but its yields are only moderate and it is mostly limited to East Africa.",
    verdict: "An older African selection that offers moderate protection against rust and CBD."
  },
  {
    id: "anacafe-14",
    name: "Anacafé 14",
    species: "Arabica",
    lineage: "Pacas / Catimor hybrid",
    standardTier: "C",
    qualityTier: "C",
    agronomyTier: "S",
    scores: {
      quality: 3.5,
      yield: 4.8,
      resistance: 4.8,
      difficulty: 1.8
    },
    reasoning: "A natural cross of Pacas and Catimor selected in Guatemala. It is an extremely vigorous, high-yielding dwarf plant with excellent resistance to Leaf Rust. The cup is balanced and sweet, but has simple acidity and moderate complexity.",
    verdict: "Guatemala's high-yielding specialty shield, showing excellent growth vigor."
  },

  // D-TIER
  {
    id: "robusta-commercial-clones",
    name: "Robusta",
    species: "Robusta (Canephora)",
    lineage: "Canephora",
    standardTier: "D",
    qualityTier: "D",
    agronomyTier: "S",
    scores: {
      quality: 2.0,
      yield: 5.0,
      resistance: 5.0,
      difficulty: 1.0
    },
    reasoning: "A separate diploid coffee species. It contains double the caffeine of Arabica, making it highly bitter and woody/rubbery in taste. However, it is incredibly robust: it grows at low altitudes, yields heavily, thrives in warm temperatures, and is virtually immune to Leaf Rust. While low in specialty acid/aroma, clean specialty Robustas are rising.",
    verdict: "Low-end specialty potential, but essential for cheap commodity coffee and thick espresso crema."
  },
  {
    id: "timor-hybrid",
    name: "Timor Hybrid",
    species: "Arabica/Robusta Hybrid",
    lineage: "Interspecific Hybrid",
    standardTier: "D",
    qualityTier: "D",
    agronomyTier: "S",
    scores: {
      quality: 2.2,
      yield: 4.0,
      resistance: 5.0,
      difficulty: 1.0
    },
    reasoning: "Timor Hybrid is a natural interspecific hybrid of Arabica and Robusta found on Timor island. It inherited the full disease resistance of Robusta and the chromosome count of Arabica. Its cup profile is coarse, woody, flat, and astringent, making it rarely sold as single origin. However, it is the crucial genetic backbone for all modern rust-resistant cultivars.",
    verdict: "Agronomically revolutionary for breeding, but structurally poor in flavor."
  }
];
