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

## Data Disclaimer

The dataset included in this MVP is curated from reputable public sources (e.g., World Coffee Research, SCA, and national coffee boards). Sensory profile values are representative indicators for visualization purposes and not official cupping scores. Please validate data before using it for commercial or academic publication.
