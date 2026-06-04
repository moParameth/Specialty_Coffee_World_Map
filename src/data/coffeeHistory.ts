import { HistoryEvent } from "@/types/history";

export const coffeeHistory: HistoryEvent[] = [
  {
    id: "kaldi-discovery",
    year: "c. 850 CE",
    exactYear: 850,
    title: "Legendary Discovery of Coffee",
    location: "Kaffa Region, Ethiopia",
    era: "origins",
    summary: "A goatherd named Kaldi discovers coffee after observing his goats' energetic behavior.",
    description: "According to legend, Kaldi noticed his goats behaving unusually energetically and 'dancing' after eating red berries from a wild shrub. Intrigued, he tried them himself and experienced a rush of energy. Kaldi took the berries to a local monk, who initially threw them into a fire, calling them devil's work. The roasting beans produced a rich, enticing aroma, leading the monks to rake the embers, dissolve the beans in hot water, and drink the first cup of coffee to stay awake for nightly prayers.",
    varietyConnections: ["typica"]
  },
  {
    id: "avicenna-medical",
    year: "c. 1000 CE",
    exactYear: 1000,
    title: "Avicenna's Medical Writings",
    location: "Bukhara, Persian Empire",
    era: "origins",
    summary: "The Persian philosopher-physician Avicenna documents coffee's medicinal properties.",
    description: "The renowned physician and philosopher Avicenna (Ibn Sina) documents the coffee bean under the name 'Bunchum' (bunchum) in his medical encyclopedia, The Canon of Medicine. He describes its medicinal characteristics, noting its ability to dry up bodily humidities, stimulate the mind, and purify the skin.",
    varietyConnections: []
  },
  {
    id: "yemen-sufi",
    year: "1400s",
    exactYear: 1400,
    title: "Sufi Monasteries in Yemen",
    location: "Mocha, Yemen",
    era: "origins",
    summary: "Sufis cultivate and brew coffee to aid concentration in nightly prayers.",
    description: "Sufi monks in Yemen begin cultivating coffee trees and brewing a drink called 'Qahwah' (an Arabic term representing its stimulating nature). They drink it to maintain alertness and deep concentration during nocturnal prayers and mystical dhikr rituals. This marks the earliest verified historical record of coffee drinking and cultivation in history.",
    varietyConnections: []
  },
  {
    id: "mecca-ban",
    year: "1511",
    exactYear: 1511,
    title: "The Mecca Ban",
    location: "Mecca, Arabia",
    era: "origins",
    summary: "Conservative Islamic jurists temporarily ban coffeehouse gatherings.",
    description: "Kha'ir Beg, the governor of Mecca, bans coffee and coffeehouses due to concerns over its stimulating properties and the political discussions held in the popular gathering spots. However, the Sultan of Cairo later repeals the ban, declaring coffee a wholesome beverage that is not intoxicating, allowing coffeehouses to expand throughout the Ottoman Empire.",
    varietyConnections: []
  },
  {
    id: "baba-budan",
    year: "c. 1600",
    exactYear: 1600,
    title: "Baba Budan's Smuggling",
    location: "Chikmagalur, India / Yemen",
    era: "expansion",
    summary: "An Indian Sufi saint smuggles seven seeds out of Yemen, breaking the Arab monopoly.",
    description: "To protect their lucrative monopoly, Yemenite traders ban the export of fertile green coffee beans, exporting only roasted or boiled beans. Baba Budan, an Indian Sufi saint, smuggles seven green coffee beans by wrapping them around his belly on his return from Mecca. He plants them in the hills of Chikmagalur, breaking the Arab monopoly and establishing coffee cultivation in India.",
    varietyConnections: ["typica", "k7"]
  },
  {
    id: "venice-introduction",
    year: "1615",
    exactYear: 1615,
    title: "European Introduction in Venice",
    location: "Venice, Italy",
    era: "expansion",
    summary: "Venetian merchants introduce coffee to Europe, blessed by Pope Clement VIII.",
    description: "Venetian merchants bring coffee to Europe, where it is initially met with suspicion as 'the bitter invention of Satan.' Pope Clement VIII decides to taste it himself. Finding it delicious, he famously declares, 'This Satan's drink is so delicious that it would be a pity to let the infidels have exclusive use of it. We shall fool Satan by baptizing it!' This papal blessing paves the way for coffee's acceptance across Christian Europe.",
    varietyConnections: []
  },
  {
    id: "london-coffeehouse",
    year: "1652",
    exactYear: 1652,
    title: "First London Coffeehouse",
    location: "London, United Kingdom",
    era: "expansion",
    summary: "Opening of London's first coffeehouse, starting the 'Penny University' era.",
    description: "Pasqua Rosée, a Greek servant of a British merchant, opens London's first coffeehouse in St. Michael's Alley, Cornhill. Coffeehouses spread rapidly, becoming known as 'Penny Universities' because for the price of a penny, anyone could enter, buy coffee, and engage in high-level intellectual, political, and commercial discussions. These establishments directly foster the birth of major institutions like the London Stock Exchange and Lloyd's of London.",
    varietyConnections: []
  },
  {
    id: "java-dutch",
    year: "1699",
    exactYear: 1699,
    title: "Dutch Colonial Cultivation in Java",
    location: "Batavia (Jakarta), Java, Indonesia",
    era: "expansion",
    summary: "Dutch colonists successfully cultivate coffee in Java, establishing a global commodity.",
    description: "After a failed attempt in 1696 due to flooding, the Dutch governor Adrian van Ommen successfully establishes coffee cultivation in Java. Java becomes a primary supplier of coffee to Europe, making the word 'Java' a universal synonym for coffee. This marks the beginning of colonial plantation cultivation and the global trade of coffee beans.",
    varietyConnections: ["typica"]
  },
  {
    id: "paris-noble-tree",
    year: "1714",
    exactYear: 1714,
    title: "The Noble Tree of Paris",
    location: "Paris, France",
    era: "expansion",
    summary: "King Louis XIV receives a coffee tree, the ancestor of millions of American plants.",
    description: "The Mayor of Amsterdam presents King Louis XIV of France with a healthy young coffee plant propagated from the Amsterdam botanical garden. Placed in the Jardin des Plantes, this single tree becomes known as the 'Noble Tree' and is the direct genetic ancestor of most Typica coffee trees subsequently planted in Central and South America.",
    varietyConnections: ["typica"]
  },
  {
    id: "martinique-clieu",
    year: "1723",
    exactYear: 1723,
    title: "Gabriel de Clieu's Martinique Seedling",
    location: "Martinique, Caribbean",
    era: "expansion",
    summary: "A French officer shares his water ration to keep a coffee seedling alive at sea.",
    description: "French naval officer Gabriel de Clieu secures a seedling from the Noble Tree in Paris and transports it to Martinique. During the arduous sea voyage, the ship is attacked by pirates, suffers a storm, and runs low on water. De Clieu shares his precious daily water ration with the seedling. It survives, is planted, and reproduces millions of trees across the Caribbean and Americas.",
    varietyConnections: ["typica"]
  },
  {
    id: "brazil-smuggling",
    year: "1727",
    exactYear: 1727,
    title: "Francisco de Melo Palheta in Brazil",
    location: "French Guiana / Brazil",
    era: "expansion",
    summary: "A Portuguese diplomat smuggles coffee seeds to Brazil in a bouquet of flowers.",
    description: "Eager to enter the lucrative coffee trade, the Portuguese governor of Brazil sends diplomat Francisco de Melo Palheta to French Guiana to settle a border dispute and smuggle coffee seeds. Under the guise of a diplomatic visit, Palheta charms the governor's wife. At his departure, she secretly presents him with a bouquet containing concealed fertile coffee seeds. He plants them in Pará, sparking Brazil's rise to become the world's largest coffee producer.",
    varietyConnections: ["typica"]
  },
  {
    id: "ceylon-leaf-rust",
    year: "1861",
    exactYear: 1861,
    title: "Ceylon Coffee Leaf Rust",
    location: "Ceylon (modern Sri Lanka)",
    era: "industrial",
    summary: "Coffee Leaf Rust decimates Ceylon's coffee plantations, forcing a shift to tea.",
    description: "The outbreak of the fungal disease Hemileia vastatrix (Coffee Leaf Rust) devastates Ceylon's massive coffee plantations. Over the next decades, the entire coffee industry of the island is wiped out. This forces the British planters to clear their lands and plant tea instead, changing the global beverage landscape and triggering a search for rust-resistant coffee hybrids.",
    varietyConnections: ["catimor", "marsellesa", "centroamericano", "parainema", "obata"]
  },
  {
    id: "espresso-invention",
    year: "1901",
    exactYear: 1901,
    title: "Invention of the Espresso Machine",
    location: "Milan, Italy",
    era: "industrial",
    summary: "Luigi Bezzera patents the first commercial espresso machine using steam.",
    description: "Luigi Bezzera patents an improvement to existing coffee machines: a device that uses steam and high pressure to force water through finely ground coffee directly into a cup. This drastically cuts brewing time from minutes to seconds, giving rise to 'espresso' (meaning fast or express) and forming the foundation of modern cafe culture.",
    varietyConnections: []
  },
  {
    id: "decaf-invention",
    year: "1903",
    exactYear: 1903,
    title: "Invention of Decaffeinated Coffee",
    location: "Bremen, Germany",
    era: "industrial",
    summary: "Ludwig Roselius accidentally invents industrial decaffeination.",
    description: "German coffee merchant Ludwig Roselius receives a shipment of coffee beans that was accidentally soaked in seawater. Instead of throwing them away, he tests them and discovers they have lost their caffeine content while retaining flavor. He refines the process, patenting the first commercial decaffeination method (using benzene) in 1906 under the brand Kaffee HAG.",
    varietyConnections: []
  },
  {
    id: "nescafe-instant",
    year: "1938",
    exactYear: 1938,
    title: "Invention of Nescafé Instant Coffee",
    location: "Switzerland / Brazil",
    era: "industrial",
    summary: "Nestlé launches Nescafé to resolve Brazil's coffee surplus.",
    description: "Following the 1929 stock market crash, Brazil has a massive surplus of coffee beans. The Brazilian government asks Nestlé to create a soluble coffee product that retains flavor and dissolves in hot water. Chemist Max Morgenthaler spends seven years perfecting the process, leading to the launch of Nescafé, which becomes a staple for WWII soldiers and popularizes instant coffee globally.",
    varietyConnections: []
  },
  {
    id: "peets-specialty",
    year: "1966",
    exactYear: 1966,
    title: "Alfred Peet and the Specialty Seed",
    location: "Berkeley, California, USA",
    era: "modern",
    summary: "Alfred Peet opens Peet's Coffee, introducing high-quality dark roasts.",
    description: "Dutch immigrant Alfred Peet opens Peet's Coffee & Tea in Berkeley. Dismayed by the weak, low-quality coffee common in America, he imports high-quality specialty beans and roasts them dark and fresh. He mentors the founders of Starbucks, teaching them his roasting techniques and supplying them with beans during their first year of business.",
    varietyConnections: []
  },
  {
    id: "starbucks-founding",
    year: "1971",
    exactYear: 1971,
    title: "The Founding of Starbucks",
    location: "Seattle, Washington, USA",
    era: "modern",
    summary: "First Starbucks opens at Pike Place Market, selling whole beans.",
    description: "English teacher Jerry Baldwin, history teacher Zev Siegl, and writer Gordon Bowker open the first Starbucks store. They initially sell only high-quality roasted coffee beans, tea, and spices, rather than brewed drinks. In 1982, Howard Schultz joins and, inspired by Italian espresso bars, later buys the company to transform it into the global coffeehouse chain we know today.",
    varietyConnections: []
  },
  {
    id: "third-wave",
    year: "2000s",
    exactYear: 2000,
    title: "The Third Wave of Coffee",
    location: "Global / United States",
    era: "modern",
    summary: "Rise of specialty coffee, single-origins, and artisanal brewing.",
    description: "The term 'Third Wave' is coined to describe a movement that treats coffee as an artisanal foodstuff rather than a simple commodity. It emphasizes transparency in the supply chain (direct trade), light roasting profiles to highlight regional terroir, precise brewing methods (like pour-over, Chemex, and Aeropress), and appreciation of specific coffee varieties.",
    varietyConnections: ["geisha", "pacamara", "sl28", "starmaya"]
  }
];
