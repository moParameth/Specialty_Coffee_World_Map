# Specialty Coffee World Map

A complete MVP web application for exploring specialty coffee origins through an interactive flat 2D world map.

## Features

- **Interactive 2D World Map**: Built with React Simple Maps using a public TopoJSON file.
- **Hover Tooltip**: Quick overview of coffee species, processing, and flavor notes.
- **Detailed Country Panel**: Comprehensive information including specialty highlights, varieties, altitude, and sources.
- **Sensory Profile Radar Chart**: Visual representation of coffee characteristics using Recharts.
- **Advanced Filtering**: Filter by search term, region, species, and processing methods.
- **Responsive Layout**: Designed for both desktop and mobile viewing with a coffee-inspired aesthetic.
- **Local Dataset**: Pre-filled researched dataset requiring no external API keys or backend.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- React Simple Maps
- Recharts
- Lucide React

## Getting Started

First, install the dependencies:

```bash
npm install
# Note: if you encounter peer dependency issues with react-simple-maps, run:
# npm install --legacy-peer-deps
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Build for Production

```bash
npm run build
```

## Deployment

The application is a standard Next.js project and can be deployed easily to platforms like Vercel or Netlify.

- **Vercel** (Recommended): Connect your GitHub repository and import the project. Vercel will automatically detect Next.js and configure the build settings.
- **Netlify**: Connect your repository, set the build command to `npm run build`, and the publish directory to `.next`.

## Coffee Variety Explorer

A dedicated page at `/varieties` allows users to explore coffee cultivars and varieties, highlighting their species, lineage, agronomic traits, flavor expectations, disease resistance, and countries where they are commonly found.

### MVP Features
- **Search and Filters**: Filter varieties by text search, species (Arabica vs. Robusta), genetic lineage, and specific agronomic traits (High Quality, High Yield, Rust Resistance, Compact Stature, High Altitude).
- **Comprehensive Detail Panel**: Show detailed information on plant stature, bean size, optimal altitude, disease resistance levels, flavor notes, and historical origins.
- **Dynamic Country Mapping**: Click on common countries in the variety details to jump directly to the world map with that country automatically highlighted.
- **Side-by-Side Comparison**: Select and compare up to 3 varieties simultaneously across species, lineage, parentage, yield/quality potential, optimal altitude, disease resistance, flavor notes, and common countries.

### Data Sources
- **World Coffee Research Coffee Varieties Catalog** & **Arabica and Robusta Coffee Varieties Poster** (Lineage, parentage, stature, yield, bean size, and disease resistance).
- **Specialty Coffee Association (SCA) Coffee Value Assessment / Coffee Standards** (Sensory vocabulary context for expected flavor descriptors).

### How to Extend the Dataset
You can add more coffee varieties to the explorer by editing [coffeeVarieties.ts](file:///d:/Python%20Project/specialty-coffee-map/src/data/coffeeVarieties.ts). Simply append a new variety object matching the `CoffeeVariety` interface defined in [variety.ts](file:///d:/Python%20Project/specialty-coffee-map/src/types/variety.ts).

### Notes on World Coffee Research Licensing
Data concepts are based on publicly available World Coffee Research resources. If copying WCR catalog data directly, check and comply with WCR license terms, including attribution and non-commercial/no-derivatives restrictions where applicable.

### Variety Dataset Disclaimer
The variety dataset is curated for educational visualization. Agronomic traits are simplified from reputable public references and may vary by country, farm management, altitude, climate, and disease pressure. Flavor notes are representative expectations, not official SCA scores.

## Data Disclaimer

The dataset included in this MVP is curated from reputable public sources (e.g., World Coffee Research, SCA, and national coffee boards). Sensory profile values are representative indicators for visualization purposes and not official cupping scores. Please validate data before using it for commercial or academic publication.
