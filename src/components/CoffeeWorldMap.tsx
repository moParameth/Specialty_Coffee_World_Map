"use client";

import { useState } from "react";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "@vnedyalk0v/react19-simple-maps";
import { Plus, Minus } from "lucide-react";
import { CoffeeCountry } from "@/types/coffee";
import { getCountryFillColor } from "@/utils/countryUtils";
import CountryTooltip from "./CountryTooltip";

import geoData from "../../public/world-countries.json";

interface CoffeeWorldMapProps {
  availableCountries: CoffeeCountry[];
  selectedCountry: CoffeeCountry | null;
  onSelectCountry: (country: CoffeeCountry | null) => void;
}

export default function CoffeeWorldMap({
  availableCountries,
  selectedCountry,
  onSelectCountry,
}: CoffeeWorldMapProps) {
  const [hoveredCountry, setHoveredCountry] = useState<CoffeeCountry | null>(null);
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ coordinates: [0, 0] as [number, number], zoom: 1 });

  const availableNames = availableCountries.map((c) => c.country);

  const handleMouseEnter = (geo: any, e: React.MouseEvent) => {
    const countryName = geo.properties.name;
    const country = availableCountries.find((c) => c.country === countryName);
    if (country) {
      setHoveredCountry(country);
      setTooltipPos({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (hoveredCountry) {
      setTooltipPos({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseLeave = () => {
    setHoveredCountry(null);
  };

  const handleClick = (geo: any) => {
    const countryName = geo.properties.name;
    const country = availableCountries.find((c) => c.country === countryName);
    if (country) {
      onSelectCountry(country);
    } else {
      onSelectCountry(null);
    }
  };

  const handleZoomIn = () => {
    if (position.zoom >= 4) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom * 1.5 }));
  };

  const handleZoomOut = () => {
    if (position.zoom <= 1) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom / 1.5 }));
  };

  const handleMoveEnd = (position: any) => {
    setPosition(position);
  };

  return (
    <div 
      className="relative h-full w-full bg-slate-50 overflow-hidden rounded-2xl group"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
        <button
          className="bg-white/90 hover:bg-slate-100 text-slate-700 p-2 rounded-lg shadow-md border border-slate-200 backdrop-blur transition-colors"
          onClick={handleZoomIn}
          aria-label="Zoom in"
        >
          <Plus className="h-5 w-5" />
        </button>
        <button
          className="bg-white/90 hover:bg-slate-100 text-slate-700 p-2 rounded-lg shadow-md border border-slate-200 backdrop-blur transition-colors"
          onClick={handleZoomOut}
          aria-label="Zoom out"
        >
          <Minus className="h-5 w-5" />
        </button>
      </div>

      <ComposableMap
        projection="geoEqualEarth"
        projectionConfig={{
          scale: 160,
        }}
        width={800}
        height={500}
        style={{ width: "100%", height: "100%" }}
      >
        <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates as any}
          onMoveEnd={handleMoveEnd}
        >
          <Geographies geography={geoData}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const countryName = geo.properties.name;
                const isInteractive = availableNames.includes(countryName);
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={(e) => handleMouseEnter(geo, e)}
                    onMouseLeave={handleMouseLeave}
                    onClick={() => handleClick(geo)}
                    style={{
                      default: {
                        fill: getCountryFillColor(countryName, null, selectedCountry?.country || null, availableNames),
                        stroke: "#cbd5e1", // slate-300
                        strokeWidth: 0.5 / position.zoom,
                        outline: "none",
                        transition: "fill 250ms",
                      },
                      hover: {
                        fill: isInteractive
                          ? getCountryFillColor(countryName, countryName, selectedCountry?.country || null, availableNames)
                          : "#f1f5f9", // slate-100
                        stroke: "#94a3b8", // slate-400
                        strokeWidth: 0.5 / position.zoom,
                        outline: "none",
                        cursor: isInteractive ? "pointer" : "default",
                        transition: "fill 250ms",
                      },
                      pressed: {
                        fill: isInteractive ? "#1e3a8a" : "#e2e8f0",
                        stroke: "#cbd5e1",
                        strokeWidth: 0.5 / position.zoom,
                        outline: "none",
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>

      {hoveredCountry && (
        <CountryTooltip country={hoveredCountry} x={tooltipPos.x} y={tooltipPos.y} />
      )}
    </div>
  );
}
