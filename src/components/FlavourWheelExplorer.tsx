"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { coffeeFlavourWheel } from "@/data/coffeeFlavourWheel";
import { coffeeVarieties } from "@/data/coffeeVarieties";
import { coffeeCountries } from "@/data/coffeeCountries";
import { FlavourNode } from "@/types/flavour";
import { 
  Orbit, 
  Search, 
  RotateCcw, 
  Beaker, 
  Sliders, 
  Coffee, 
  Globe, 
  Info,
  ExternalLink,
  BookOpen,
  HelpCircle,
  Sparkles,
  Flower,
  Leaf,
  Flame
} from "lucide-react";

interface PlacedNode extends FlavourNode {
  startAngle: number;
  endAngle: number;
}

function isMatchedBySearch(node: FlavourNode, query: string): boolean {
  if (!query) return false;
  const q = query.toLowerCase().trim();
  
  if (node.name.toLowerCase().includes(q)) return true;
  if (node.description.toLowerCase().includes(q)) return true;
  if (node.chemicalCompounds && node.chemicalCompounds.some(c => c.toLowerCase().includes(q))) return true;
  if (node.brewingImpact && node.brewingImpact.toLowerCase().includes(q)) return true;
  
  if (node.linkedVarieties && node.linkedVarieties.some(varId => {
    if (varId.toLowerCase().includes(q)) return true;
    const matchingVar = coffeeVarieties.find(v => v.id === varId);
    if (matchingVar) {
      if (matchingVar.name.toLowerCase().includes(q)) return true;
      if (matchingVar.alternativeNames && matchingVar.alternativeNames.some(alt => alt.toLowerCase().includes(q))) return true;
    }
    return false;
  })) return true;

  if (node.linkedCountries && node.linkedCountries.some(iso3 => {
    if (iso3.toLowerCase().includes(q)) return true;
    const matchingCountry = coffeeCountries.find(c => c.iso3 === iso3);
    if (matchingCountry && matchingCountry.country.toLowerCase().includes(q)) return true;
    return false;
  })) return true;

  return false;
}

function getSensoryProfileForNode(node: FlavourNode): { acidity: number; sweetness: number; body: number; intensity: number } {
  let rootNode = node;
  if (node.level === 3) {
    const parent = coffeeFlavourWheel.find((n) => n.id === node.parent);
    if (parent) {
      const grandParent = coffeeFlavourWheel.find((n) => n.id === parent.parent);
      if (grandParent) {
        rootNode = grandParent;
      } else {
        rootNode = parent;
      }
    }
  } else if (node.level === 2) {
    const parent = coffeeFlavourWheel.find((n) => n.id === node.parent);
    if (parent) {
      rootNode = parent;
    }
  }

  const profiles: Record<string, { acidity: number; sweetness: number; body: number; intensity: number }> = {
    fruity: { acidity: 9, sweetness: 8, body: 5, intensity: 9 },
    floral: { acidity: 8, sweetness: 7, body: 4, intensity: 10 },
    sweet: { acidity: 5, sweetness: 10, body: 7, intensity: 8 },
    "nutty-cocoa": { acidity: 4, sweetness: 8, body: 8, intensity: 7 },
    spices: { acidity: 6, sweetness: 6, body: 6, intensity: 8 },
    roasted: { acidity: 2, sweetness: 4, body: 9, intensity: 7 },
    "green-vegetative": { acidity: 5, sweetness: 3, body: 5, intensity: 6 },
    "sour-fermented": { acidity: 10, sweetness: 6, body: 6, intensity: 9 },
    other: { acidity: 4, sweetness: 2, body: 6, intensity: 5 },
  };

  return profiles[rootNode.id] || { acidity: 5, sweetness: 5, body: 5, intensity: 5 };
}

export default function FlavourWheelExplorer() {
  const [zoomNode, setZoomNode] = useState<FlavourNode | null>(null);
  const [hoveredNode, setHoveredNode] = useState<PlacedNode | null>(null);
  const [selectedNode, setSelectedNode] = useState<PlacedNode | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredCenter, setHoveredCenter] = useState(false);

  // Dimensions of the SVG Sunburst Wheel
  const size = 600;
  const center = size / 2;
  const R0 = 85;  // Center circle radius
  const R1 = 153; // Level 1 outer radius
  const R2 = 221; // Level 2 outer radius
  const R3 = 290; // Level 3 outer radius

  // Precompute weights based on Level 3 leaf count
  const weightMap = useMemo(() => {
    const weights: Record<string, number> = {};

    const getWeight = (nodeId: string): number => {
      if (weights[nodeId] !== undefined) return weights[nodeId];
      const children = coffeeFlavourWheel.filter((n) => n.parent === nodeId);
      if (children.length === 0) {
        weights[nodeId] = 1;
        return 1;
      }
      const w = children.reduce((sum, child) => sum + getWeight(child.id), 0);
      weights[nodeId] = w;
      return w;
    };

    coffeeFlavourWheel.forEach((node) => getWeight(node.id));
    return weights;
  }, []);

  // Compute start and end angles for all visible sectors in the active zoom view
  const placedNodes = useMemo<PlacedNode[]>(() => {
    const list: PlacedNode[] = [];

    if (!zoomNode) {
      // DEFAULT FULL WHEEL LAYOUT
      const level1Nodes = coffeeFlavourWheel.filter((n) => !n.parent);
      const totalWeight = level1Nodes.reduce((sum, n) => sum + weightMap[n.id], 0);

      let currentAngle = -Math.PI / 2; // Start at 12 o'clock

      const placeChildren = (parentId: string, startA: number, endA: number) => {
        const children = coffeeFlavourWheel.filter((n) => n.parent === parentId);
        if (children.length === 0) return;

        const parentWeight = weightMap[parentId];
        const parentSpan = endA - startA;

        let currentChildAngle = startA;
        children.forEach((child) => {
          const childWeight = weightMap[child.id];
          const childSpan = (childWeight / parentWeight) * parentSpan;
          const childEndAngle = currentChildAngle + childSpan;

          list.push({
            ...child,
            startAngle: currentChildAngle,
            endAngle: childEndAngle,
          });

          placeChildren(child.id, currentChildAngle, childEndAngle);
          currentChildAngle = childEndAngle;
        });
      };

      level1Nodes.forEach((node) => {
        const nodeWeight = weightMap[node.id];
        const span = (nodeWeight / totalWeight) * 2 * Math.PI;
        const endAngle = currentAngle + span;

        list.push({
          ...node,
          startAngle: currentAngle,
          endAngle: endAngle,
        });

        placeChildren(node.id, currentAngle, endAngle);
        currentAngle = endAngle;
      });

      return list;
    }

    // ZOOMED INTO LEVEL 1 CATEGORY
    if (zoomNode.level === 1) {
      // 1. Placed node itself fills center circle border area
      list.push({
        ...zoomNode,
        startAngle: -Math.PI / 2,
        endAngle: 3 * Math.PI / 2,
      });

      // 2. Place Level 2 children of zoomNode over the 360° span
      const childrenL2 = coffeeFlavourWheel.filter((n) => n.parent === zoomNode.id);
      const totalWeightL2 = childrenL2.reduce((sum, n) => sum + weightMap[n.id], 0);

      let currentAngleL2 = -Math.PI / 2;
      childrenL2.forEach((childL2) => {
        const childWeight = weightMap[childL2.id];
        const spanL2 = (childWeight / totalWeightL2) * 2 * Math.PI;
        const endAngleL2 = currentAngleL2 + spanL2;

        list.push({
          ...childL2,
          startAngle: currentAngleL2,
          endAngle: endAngleL2,
        });

        // 3. Place Level 3 grandchildren of zoomNode (children of childL2) within the parent slice
        const grandchildrenL3 = coffeeFlavourWheel.filter((n) => n.parent === childL2.id);
        const totalWeightL3 = grandchildrenL3.reduce((sum, n) => sum + weightMap[n.id], 0);

        let currentAngleL3 = currentAngleL2;
        grandchildrenL3.forEach((gc) => {
          const gcWeight = weightMap[gc.id];
          const spanL3 = (gcWeight / totalWeightL3) * spanL2;
          const endAngleL3 = currentAngleL3 + spanL3;

          list.push({
            ...gc,
            startAngle: currentAngleL3,
            endAngle: endAngleL3,
          });

          currentAngleL3 = endAngleL3;
        });

        currentAngleL2 = endAngleL2;
      });
    } 
    // ZOOMED INTO LEVEL 2 SUBCATEGORY
    else if (zoomNode.level === 2) {
      // 1. Placed node itself fills center circle border area
      list.push({
        ...zoomNode,
        startAngle: -Math.PI / 2,
        endAngle: 3 * Math.PI / 2,
      });

      // 2. Place Level 3 children of zoomNode over the 360° span
      const childrenL3 = coffeeFlavourWheel.filter((n) => n.parent === zoomNode.id);
      const k = childrenL3.length;

      let currentAngleL3 = -Math.PI / 2;
      childrenL3.forEach((childL3) => {
        const spanL3 = (2 * Math.PI) / k;
        const endAngleL3 = currentAngleL3 + spanL3;

        list.push({
          ...childL3,
          startAngle: currentAngleL3,
          endAngle: endAngleL3,
        });

        currentAngleL3 = endAngleL3;
      });
    }

    return list;
  }, [zoomNode, weightMap]);

  // Compute radii dynamically based on active zoom depth
  const getRadii = (node: PlacedNode) => {
    if (!zoomNode) {
      // Default concentric ring widths
      const rIn = node.level === 1 ? R0 : node.level === 2 ? R1 : R2;
      const rOut = node.level === 1 ? R1 : node.level === 2 ? R2 : R3;
      return { rIn, rOut };
    }

    // Zoomed into Level 1 node
    if (zoomNode.level === 1) {
      if (node.id === zoomNode.id) {
        return { rIn: R0, rOut: R1 };
      }
      if (node.level === 2) {
        return { rIn: R1, rOut: R2 };
      }
      // Level 3
      return { rIn: R2, rOut: R3 };
    }

    // Zoomed into Level 2 node
    if (node.id === zoomNode.id) {
      return { rIn: R0, rOut: R1 };
    }
    // Level 3 children of the zoomed subcategory occupy the rest of the canvas (R1 to R3)
    return { rIn: R1, rOut: R3 };
  };

  const matchedSearchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return coffeeFlavourWheel.filter((node) => isMatchedBySearch(node, searchQuery));
  }, [searchQuery]);

  const handleSelectNode = (node: FlavourNode) => {
    if (node.level === 1) {
      setZoomNode(node);
    } else if (node.level === 2) {
      setZoomNode(node);
    } else if (node.level === 3) {
      const parentNode = coffeeFlavourWheel.find((n) => n.id === node.parent);
      if (parentNode) {
        setZoomNode(parentNode);
      }
    }

    // Since changing zoomNode triggers a recalculation of placedNodes,
    // we'll defer matching selectedNode or set it manually.
    const globalPlaced = coffeeFlavourWheel.find((n) => n.id === node.id);
    if (globalPlaced) {
      setSelectedNode({
        ...globalPlaced,
        startAngle: 0,
        endAngle: 0,
      } as PlacedNode);
    }
  };

  // Click on the center circle: zooms back out
  const handleCenterClick = () => {
    if (!zoomNode) return;

    if (zoomNode.level === 2) {
      // Zoom out to Level 1 parent
      const parentNode = coffeeFlavourWheel.find((n) => n.id === zoomNode.parent);
      setZoomNode(parentNode || null);
      if (parentNode) {
        setSelectedNode({
          ...parentNode,
          startAngle: 0,
          endAngle: 0,
        } as PlacedNode);
      } else {
        setSelectedNode(null);
      }
    } else {
      // Level 1: Zoom out to full wheel
      setZoomNode(null);
      setSelectedNode(null);
    }
    setHoveredCenter(false);
  };

  // Search filter matching
  const isSearchActive = searchQuery.trim().length > 0;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setSearchQuery(val);
    if (val.trim()) {
      setZoomNode(null); // Reset zoom layout to show search matches globally
    }
  };

  // Compute active highlight IDs
  const activeHighlight = useMemo(() => {
    const activeNode = hoveredNode || selectedNode;

    if (isSearchActive) {
      const matched = placedNodes.filter((n) => isMatchedBySearch(n, searchQuery));
      const highlighted = new Set<string>();

      matched.forEach((m) => {
        highlighted.add(m.id);
        if (m.parent) {
          highlighted.add(m.parent);
          const pNode = coffeeFlavourWheel.find((n) => n.id === m.parent);
          if (pNode && pNode.parent) {
            highlighted.add(pNode.parent);
          }
        }
      });
      return highlighted;
    }

    if (!activeNode) return null;

    const highlighted = new Set<string>([activeNode.id]);

    if (activeNode.level === 3) {
      highlighted.add(activeNode.parent!);
      const pNode = coffeeFlavourWheel.find((n) => n.id === activeNode.parent);
      if (pNode && pNode.parent) {
        highlighted.add(pNode.parent);
      }
    } else if (activeNode.level === 2) {
      highlighted.add(activeNode.parent!);
      coffeeFlavourWheel
        .filter((n) => n.parent === activeNode.id)
        .forEach((c) => highlighted.add(c.id));
    } else if (activeNode.level === 1) {
      const children = coffeeFlavourWheel.filter((n) => n.parent === activeNode.id);
      children.forEach((c) => {
        highlighted.add(c.id);
        coffeeFlavourWheel
          .filter((n) => n.parent === c.id)
          .forEach((gc) => highlighted.add(gc.id));
      });
    }

    return highlighted;
  }, [hoveredNode, selectedNode, searchQuery, isSearchActive, placedNodes]);

  // Convert polar coordinates to SVG Cartesian paths
  const getArcPath = (startAngle: number, endAngle: number, rIn: number, rOut: number) => {
    const xOutStart = center + rOut * Math.cos(startAngle);
    const yOutStart = center + rOut * Math.sin(startAngle);
    const xOutEnd = center + rOut * Math.cos(endAngle);
    const yOutEnd = center + rOut * Math.sin(endAngle);

    const largeArc = endAngle - startAngle > Math.PI ? 1 : 0;

    if (rIn === 0) {
      return `M ${xOutStart} ${yOutStart} A ${rOut} ${rOut} 0 ${largeArc} 1 ${xOutEnd} ${yOutEnd} L ${center} ${center} Z`;
    }

    const xInStart = center + rIn * Math.cos(startAngle);
    const yInStart = center + rIn * Math.sin(startAngle);
    const xInEnd = center + rIn * Math.cos(endAngle);
    const yInEnd = center + rIn * Math.sin(endAngle);

    return [
      `M ${xOutStart} ${yOutStart}`,
      `A ${rOut} ${rOut} 0 ${largeArc} 1 ${xOutEnd} ${yOutEnd}`,
      `L ${xInEnd} ${yInEnd}`,
      `A ${rIn} ${rIn} 0 ${largeArc} 0 ${xInStart} ${yInStart}`,
      `Z`,
    ].join(" ");
  };

  const activeNode = hoveredNode || selectedNode;

  const handleReset = () => {
    setSearchQuery("");
    setSelectedNode(null);
    setZoomNode(null);
    setHoveredNode(null);
  };

  const getCountryIso3 = (name: string): string => {
    const matched = coffeeCountries.find(
      (c) => c.country.toLowerCase() === name.toLowerCase()
    );
    return matched ? matched.iso3 : "";
  };

  return (
    <div className="space-y-10">
      {/* Top Search & Reset Controls */}
      <div className="bg-white border border-slate-200 rounded-3xl p-5 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search flavor, compounds (e.g. Limonene, vanillin)..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full pl-10 pr-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all bg-slate-50/50"
          />
          {/* Search Dropdown Panel */}
          {isSearchActive && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-2xl shadow-xl z-50 max-h-64 overflow-y-auto p-2 space-y-1 animate-in fade-in slide-in-from-top-1 duration-150">
              <div className="text-[10px] font-black uppercase text-slate-400 px-3 py-1 flex justify-between items-center border-b border-slate-100 pb-1.5 mb-1">
                <span>Matched Descriptors</span>
                <span className="text-rose-500 bg-rose-50 px-1.5 py-0.5 rounded text-[8px] font-bold">{matchedSearchResults.length} found</span>
              </div>
              {matchedSearchResults.length > 0 ? (
                matchedSearchResults.slice(0, 10).map((node) => (
                  <button
                    key={node.id}
                    onClick={() => {
                      handleSelectNode(node);
                      setSearchQuery(""); // Clear query to hide dropdown
                    }}
                    className="w-full text-left px-3 py-2 text-xs font-bold text-slate-700 hover:bg-slate-50 active:bg-slate-100 rounded-xl flex items-center justify-between transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <span 
                        className="h-2.5 w-2.5 rounded-full border border-black/10 flex-shrink-0" 
                        style={{ backgroundColor: node.color }}
                      />
                      <span className="truncate max-w-[150px]">{node.name}</span>
                    </div>
                    <span className="text-[9px] uppercase font-black text-slate-400 group-hover:text-rose-600 transition-colors">
                      Level {node.level} • Select
                    </span>
                  </button>
                ))
              ) : (
                <div className="text-xs text-slate-400 py-4 text-center font-semibold">
                  No flavor attributes match your search.
                </div>
              )}
              {matchedSearchResults.length > 10 && (
                <div className="text-[9px] font-bold text-slate-400 text-center pt-1 border-t border-slate-100">
                  + {matchedSearchResults.length - 10} more matches shown on wheel
                </div>
              )}
            </div>
          )}
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          {zoomNode && (
            <button
              onClick={() => {
                setZoomNode(null);
                setSelectedNode(null);
              }}
              className="flex-1 md:flex-none px-4 py-2 text-xs font-bold text-slate-650 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-xl transition-all"
            >
              Zoom Out Full
            </button>
          )}
          <button
            onClick={handleReset}
            className="flex-1 md:flex-none flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-bold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-all"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            <span>Reset Wheel</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Wheel + Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Custom SVG Sunburst Chart (Covers 7 columns) */}
        <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm flex flex-col items-center justify-center relative overflow-hidden select-none">
          <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-6 w-full text-left flex items-center justify-between">
            <span>Specialty Taster's Sunburst Chart</span>
            <span className="font-semibold text-rose-600 text-[9px] bg-rose-50 border border-rose-200 px-2 py-0.5 rounded">
              {zoomNode ? "Zoomed View" : "Full View"} • {placedNodes.length} Slices
            </span>
          </h4>

          {/* SVG Canvas with mounting transition key */}
          <div className="w-full max-w-[500px] aspect-square relative">
            <svg 
              key={zoomNode ? zoomNode.id : "root"}
              viewBox={`0 0 ${size} ${size}`} 
              className="w-full h-full drop-shadow-md overflow-visible animate-in fade-in zoom-in-95 duration-500"
            >
              {/* Draw Sectors */}
              <g>
                {placedNodes.map((node) => {
                  const { rIn, rOut } = getRadii(node);
                  
                  // Skip rendering the root zoomNode itself as a slice since it represents the center circle background
                  if (zoomNode && node.id === zoomNode.id) return null;

                  const path = getArcPath(node.startAngle, node.endAngle, rIn, rOut);

                  // Calculate highlight state
                  const isDimmed = activeHighlight ? !activeHighlight.has(node.id) : false;
                  const isSelected = selectedNode?.id === node.id;
                  const isHovered = hoveredNode?.id === node.id;

                  // Label Math
                  const middleAngle = (node.startAngle + node.endAngle) / 2;
                  const deg = ((middleAngle * 180) / Math.PI) % 360;
                  const normDeg = deg < 0 ? deg + 360 : deg;

                  const isLeft = normDeg > 90 && normDeg < 270;
                  const rText = isLeft ? rOut - 8 : rIn + 8;
                  const tx = center + rText * Math.cos(middleAngle);
                  const ty = center + rText * Math.sin(middleAngle);
                  const rotation = isLeft ? normDeg + 180 : normDeg;

                  // Label rendering visibility threshold (adjusted for zoom views)
                  const span = node.endAngle - node.startAngle;
                  const showLabel = node.level === 1 || zoomNode || span > 0.045;

                  return (
                    <g 
                      key={node.id}
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredNode(node)}
                      onMouseLeave={() => setHoveredNode(null)}
                      onClick={() => {
                        setSelectedNode(node);
                        if (node.level < 3 && zoomNode?.id !== node.id) {
                          setZoomNode(node);
                        }
                      }}
                    >
                      {/* Arc sector */}
                      <path
                        d={path}
                        fill={node.color}
                        stroke="#ffffff"
                        strokeWidth={isHovered || isSelected ? 2.5 : 1.2}
                        opacity={isDimmed ? 0.15 : 1}
                        className="transition-all duration-300 hover:scale-[1.008]"
                        style={{
                          transformOrigin: `${center}px ${center}px`,
                          filter: isHovered || isSelected ? `drop-shadow(0 0 10px ${node.color}50)` : undefined
                        }}
                      />

                      {/* Rotated Text Label */}
                      {showLabel && (
                        <text
                          x={tx}
                          y={ty}
                          dy="3"
                          textAnchor={isLeft ? "end" : "start"}
                          transform={`rotate(${rotation}, ${tx}, ${ty})`}
                          fill={node.level === 1 ? "#ffffff" : "#1e293b"}
                          fontSize={zoomNode ? (node.level === 2 ? 11 : 9.5) : (node.level === 1 ? 10.5 : node.level === 2 ? 8.5 : 7.2)}
                          fontWeight={node.level === 1 ? 800 : 700}
                          className="pointer-events-none transition-opacity duration-300 uppercase tracking-wide select-none"
                          opacity={isDimmed ? 0.15 : 1}
                        >
                          {node.name}
                        </text>
                      )}
                    </g>
                  );
                })}
              </g>

              {/* Clickable Center Circle Hub */}
              <circle
                cx={center}
                cy={center}
                r={R0 - 4}
                onClick={handleCenterClick}
                onMouseEnter={() => setHoveredCenter(true)}
                onMouseLeave={() => setHoveredCenter(false)}
                className={`fill-white stroke-slate-200 stroke-2 transition-all duration-300 ${
                  zoomNode ? "cursor-pointer hover:fill-slate-50 hover:stroke-rose-400" : ""
                }`}
                style={{
                  filter: activeNode ? `drop-shadow(0 0 12px ${activeNode.color}35)` : "drop-shadow(0 4px 6px rgba(0,0,0,0.04))"
                }}
              />

              {/* Category-specific Center Icon using foreignObject */}
              {(() => {
                if (hoveredCenter) return null;
                const node = activeNode || zoomNode;
                if (!node) {
                  return (
                    <foreignObject x={center - 15} y={center - 32} width={30} height={30} className="pointer-events-none">
                      <div className="flex items-center justify-center w-full h-full text-slate-300">
                        <Orbit className="h-5.5 w-5.5 animate-spin" style={{ animationDuration: "12s" }} />
                      </div>
                    </foreignObject>
                  );
                }
                
                // Find root category ID
                let rootId = node.id;
                if (node.level === 3) {
                  const parent = coffeeFlavourWheel.find((n) => n.id === node.parent);
                  if (parent) {
                    const grand = coffeeFlavourWheel.find((n) => n.id === parent.parent);
                    rootId = grand ? grand.id : parent.id;
                  }
                } else if (node.level === 2) {
                  const parent = coffeeFlavourWheel.find((n) => n.id === node.parent);
                  rootId = parent ? parent.id : node.id;
                }

                let iconElement = <Coffee className="h-5.5 w-5.5" />;
                let iconColor = "text-slate-400";
                
                if (rootId === "fruity") {
                  iconElement = <Coffee className="h-5.5 w-5.5 animate-bounce" />;
                  iconColor = "text-rose-500";
                } else if (rootId === "floral") {
                  iconElement = <Flower className="h-5.5 w-5.5 animate-pulse" />;
                  iconColor = "text-pink-500";
                } else if (rootId === "sweet") {
                  iconElement = <Sparkles className="h-5.5 w-5.5 animate-pulse" />;
                  iconColor = "text-amber-500";
                } else if (rootId === "nutty-cocoa") {
                  iconElement = <Coffee className="h-5.5 w-5.5" />;
                  iconColor = "text-yellow-800";
                } else if (rootId === "spices") {
                  iconElement = <Flame className="h-5.5 w-5.5 animate-pulse" />;
                  iconColor = "text-orange-500";
                } else if (rootId === "roasted") {
                  iconElement = <Flame className="h-5.5 w-5.5" />;
                  iconColor = "text-zinc-600";
                } else if (rootId === "green-vegetative") {
                  iconElement = <Leaf className="h-5.5 w-5.5 animate-pulse" />;
                  iconColor = "text-emerald-500";
                } else if (rootId === "sour-fermented") {
                  iconElement = <Beaker className="h-5.5 w-5.5" />;
                  iconColor = "text-lime-655";
                } else if (rootId === "other") {
                  iconElement = <Info className="h-5.5 w-5.5" />;
                  iconColor = "text-stone-500";
                }

                return (
                  <foreignObject x={center - 15} y={center - 32} width={30} height={30} className="pointer-events-none">
                    <div className={`flex items-center justify-center w-full h-full ${iconColor}`}>
                      {iconElement}
                    </div>
                  </foreignObject>
                );
              })()}

              {/* Center text representation */}
              <g className="pointer-events-none">
                {zoomNode ? (
                  // Zoomed-in state
                  hoveredCenter ? (
                    <>
                      <text
                        x={center}
                        y={center - 8}
                        textAnchor="middle"
                        fill="#f43f5e"
                        fontSize="13"
                        fontWeight="900"
                        className="uppercase tracking-tight"
                      >
                        ← Back
                      </text>
                      <text
                        x={center}
                        y={center + 12}
                        textAnchor="middle"
                        fill="#64748b"
                        fontSize="8"
                        fontWeight="750"
                        className="uppercase tracking-wider"
                      >
                        Zoom Out
                      </text>
                    </>
                  ) : (
                    <>
                      <text
                        x={center}
                        y={center + 6}
                        textAnchor="middle"
                        fill={zoomNode.color}
                        fontSize="7"
                        fontWeight="900"
                        className="uppercase tracking-widest"
                      >
                        Zoomed In
                      </text>
                      <text
                        x={center}
                        y={center + 23}
                        textAnchor="middle"
                        fill="#0f172a"
                        fontSize={zoomNode.name.length > 10 ? "9" : "11"}
                        fontWeight="900"
                        className="uppercase tracking-tight"
                      >
                        {zoomNode.name}
                      </text>
                    </>
                  )
                ) : activeNode ? (
                  // Hovered/Selected slice state when not zoomed
                  <>
                    <text
                      x={center}
                      y={center + 6}
                      textAnchor="middle"
                      fill={activeNode.color}
                      fontSize="7"
                      fontWeight="900"
                      className="uppercase tracking-widest"
                    >
                      {activeNode.level === 1 ? "Category" : activeNode.level === 2 ? "Subcategory" : "Flavor Note"}
                    </text>
                    <text
                      x={center}
                      y={center + 23}
                      textAnchor="middle"
                      fill="#0f172a"
                      fontSize={activeNode.name.length > 12 ? "8.5" : "11"}
                      fontWeight="900"
                      className="uppercase tracking-tight"
                    >
                      {activeNode.name}
                    </text>
                  </>
                ) : (
                  // Default idle state
                  <>
                    <text
                      x={center}
                      y={center + 6}
                      textAnchor="middle"
                      fill="#64748b"
                      fontSize="7"
                      fontWeight="900"
                      className="uppercase tracking-widest"
                    >
                      Specialty
                    </text>
                    <text
                      x={center}
                      y={center + 22}
                      textAnchor="middle"
                      fill="#0f172a"
                      fontSize="9.5"
                      fontWeight="900"
                      className="uppercase tracking-widest"
                    >
                      Flavour Wheel
                    </text>
                  </>
                )}
              </g>
            </svg>
          </div>

          {/* Interactive Zoom Instruction Tip Overlay */}
          {zoomNode === null && (
            <div className="mt-4 text-[10px] text-slate-400 font-bold text-center pointer-events-none uppercase tracking-wider flex items-center gap-1.5 justify-center">
              <Sparkles className="h-3.5 w-3.5 text-rose-450 animate-pulse" />
              <span>Click any Category or Subcategory segment to zoom in</span>
            </div>
          )}
        </div>

        {/* Right Column: Detailed Sensory Profile Sidebar (Covers 5 columns) */}
        <div className="lg:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6 lg:sticky lg:top-24 min-h-[450px] flex flex-col justify-between">
          {activeNode ? (
            <div className="space-y-6">
              {/* Breadcrumb classification */}
              <div className="space-y-2 border-b border-slate-100 pb-4">
                <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-slate-400">
                  <span>Lexicon</span>
                  {activeNode.parent && (
                    <>
                      <span>/</span>
                      {(() => {
                        const parentNode = coffeeFlavourWheel.find(n => n.id === activeNode.parent);
                        if (parentNode && parentNode.parent) {
                          const grandParentNode = coffeeFlavourWheel.find(n => n.id === parentNode.parent);
                          return (
                            <>
                              <span style={{ color: grandParentNode?.color }}>{grandParentNode?.name}</span>
                              <span>/</span>
                            </>
                          );
                        }
                        return null;
                      })()}
                      <span style={{ color: coffeeFlavourWheel.find(n => n.id === activeNode.parent)?.color }}>
                        {coffeeFlavourWheel.find(n => n.id === activeNode.parent)?.name}
                      </span>
                    </>
                  )}
                </div>
                
                <div className="flex items-center gap-3">
                  <div 
                    style={{ backgroundColor: activeNode.color }}
                    className="h-5 w-5 rounded-full border border-black/10 flex-shrink-0"
                  />
                  <h3 className="text-2xl font-black text-slate-950 tracking-tight leading-none">{activeNode.name}</h3>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-1">
                <h5 className="text-[10px] font-black uppercase tracking-wider text-slate-400">Sensory Description</h5>
                <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-semibold">
                  {activeNode.description}
                </p>
              </div>

              {/* Chemical Volatile Compounds */}
              {activeNode.chemicalCompounds && activeNode.chemicalCompounds.length > 0 && (
                <div className="bg-slate-50 border border-slate-150 p-4 rounded-2xl space-y-2.5">
                  <h5 className="text-[10px] font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                    <Beaker className="h-3.5 w-3.5 text-rose-500 animate-pulse" />
                    <span>Volatile Aroma Chemistry</span>
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {activeNode.chemicalCompounds.map((comp) => (
                      <button 
                        key={comp}
                        onClick={() => {
                          setSearchQuery(comp);
                          setZoomNode(null); // Reset zoom to show matches globally
                        }}
                        className="bg-white hover:bg-rose-50 border border-slate-200 hover:border-rose-400 text-slate-700 hover:text-rose-700 px-2.5 py-1 rounded-lg text-xs font-bold shadow-sm transition-all flex items-center gap-1 cursor-pointer"
                        title={`Filter wheel for ${comp}`}
                      >
                        <span>{comp}</span>
                        <Search className="h-2.5 w-2.5 opacity-60" />
                      </button>
                    ))}
                  </div>
                  <p className="text-[10px] text-slate-400 font-medium italic">
                    These chemical esters, aldehydes, or organic acids form during metabolic ripening and pyrolysis. Click any compound to trace its links.
                  </p>
                </div>
              )}

              {/* Dynamic Sensory Profile Gauges */}
              {(() => {
                const profile = getSensoryProfileForNode(activeNode);
                const metrics = [
                  { label: "Acidity Potential", value: profile.acidity, desc: profile.acidity >= 8 ? "Bright & Vibrant" : profile.acidity >= 5 ? "Balanced & Moderate" : "Low & Subdued" },
                  { label: "Sweetness Development", value: profile.sweetness, desc: profile.sweetness >= 8 ? "Rich & Intense" : profile.sweetness >= 5 ? "Mild & Clean" : "Dry & Low" },
                  { label: "Mouthfeel / Body", value: profile.body, desc: profile.body >= 8 ? "Thick & Syrupy" : profile.body >= 5 ? "Medium & Silky" : "Light & Tea-like" },
                  { label: "Aromatic Intensity", value: profile.intensity, desc: profile.intensity >= 8 ? "Highly Pungent" : profile.intensity >= 5 ? "Moderate & Subtle" : "Mild & Delicate" }
                ];
                return (
                  <div className="bg-slate-50 border border-slate-150 p-4 rounded-2xl space-y-3">
                    <h5 className="text-[10px] font-black uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                      <Sliders className="h-3.5 w-3.5 text-rose-500" />
                      <span>Cupping Sensory Profile</span>
                    </h5>
                    <div className="space-y-2.5">
                      {metrics.map((m) => (
                        <div key={m.label} className="space-y-1">
                          <div className="flex justify-between text-xs font-bold text-slate-700">
                            <span>{m.label}</span>
                            <span className="text-[10px] font-black" style={{ color: activeNode.color }}>{m.value}/10 ({m.desc})</span>
                          </div>
                          <div className="w-full h-2 bg-slate-200/70 rounded-full overflow-hidden">
                            <div 
                              className="h-full rounded-full transition-all duration-500 ease-out"
                              style={{ width: `${m.value * 10}%`, backgroundColor: activeNode.color }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}

              {/* Brewing Recommendations */}
              <div className="p-4 rounded-2xl bg-rose-50/20 border border-rose-100 space-y-1.5">
                <h5 className="text-[10px] font-black uppercase tracking-wider text-rose-700 flex items-center gap-1.5">
                  <Sliders className="h-3.5 w-3.5" />
                  <span>Brewing Extraction Guidance</span>
                </h5>
                <p className="text-xs text-slate-600 leading-relaxed font-semibold">
                  {activeNode.brewingImpact}
                </p>
              </div>

              {/* Connected Varieties */}
              {activeNode.linkedVarieties && activeNode.linkedVarieties.length > 0 && (
                <div className="space-y-2">
                  <h5 className="text-[10px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1">
                    <Coffee className="h-3.5 w-3.5" />
                    <span>Frequently Expressed in Varieties</span>
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {activeNode.linkedVarieties.map((varId) => {
                      const matchingVar = coffeeVarieties.find((v) => v.id === varId);
                      const displayName = matchingVar ? matchingVar.name : varId;
                      return (
                        <Link
                          key={varId}
                          href={`/varieties?selected=${varId}`}
                          className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-50 border border-slate-200 hover:border-rose-450 hover:text-rose-700 rounded-xl text-xs font-black transition-all shadow-sm cursor-pointer hover:-translate-y-0.5"
                        >
                          <span>{displayName}</span>
                          <ExternalLink className="h-3 w-3 opacity-60" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Connected Origins */}
              {activeNode.linkedCountries && activeNode.linkedCountries.length > 0 && (
                <div className="space-y-2">
                  <h5 className="text-[10px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1">
                    <Globe className="h-3.5 w-3.5" />
                    <span>Producing Origins Characteristic</span>
                  </h5>
                  <div className="flex flex-wrap gap-1.5">
                    {activeNode.linkedCountries.map((iso3) => {
                      const countryName = coffeeCountries.find((c) => c.iso3 === iso3)?.country || iso3;
                      return (
                        <Link
                          key={iso3}
                          href={`/?country=${iso3}`}
                          className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-50 border border-slate-200 hover:border-rose-450 hover:text-rose-700 rounded-xl text-xs font-black transition-all shadow-sm cursor-pointer hover:-translate-y-0.5"
                        >
                          <span>{countryName}</span>
                          <ExternalLink className="h-3 w-3 opacity-60" />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center my-auto space-y-4">
              <div className="p-4 bg-rose-50/70 text-rose-500 rounded-full border border-rose-100 shadow-sm animate-pulse">
                <Orbit className="h-8 w-8" />
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-black text-slate-800 uppercase tracking-wider">Flavour Wheel Lexicon</h4>
                <p className="text-xs text-slate-500 max-w-xs leading-relaxed font-semibold">
                  Hover or select a flavor category, sub-group, or note to reveal its chemical volatiles, cupping guides, and connections.
                </p>
              </div>
              <div className="w-full text-left text-[11px] leading-relaxed p-3.5 border border-slate-150 bg-slate-50/50 rounded-2xl text-slate-600 font-semibold flex gap-2">
                <Info className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
                <span>
                  <strong>Tip:</strong> Click a category to zoom the wheel, expanding nested sub-slices for easier mobile reading. Use search to locate organic molecules like <em>vanillin</em>.
                </span>
              </div>
            </div>
          )}

          {/* Wheel Legend (Always visible in sidebar footer) */}
          <div className="pt-4 border-t border-slate-100 grid grid-cols-3 gap-2 text-[9px] font-black uppercase text-slate-500">
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-slate-100 border border-slate-350" />
              <span>Concentric 1</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded bg-slate-100 border border-slate-350" />
              <span>Concentric 2</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-[20%] bg-slate-100 border border-slate-350" />
              <span>Concentric 3</span>
            </div>
          </div>
        </div>
      </div>

      {/* SCA Cupping Sensory Guide Section */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm space-y-6">
        <div className="border-b border-slate-100 pb-4">
          <h3 className="text-lg font-black text-slate-900 tracking-tight flex items-center gap-2">
            <BookOpen className="h-5 w-5 text-rose-500" />
            <span>SCA Sensory Evaluation Guide</span>
          </h3>
          <p className="text-xs font-semibold text-slate-500 mt-1">
            Standard operating procedures for cupping coffees and mapping volatile aromas using the flavor wheel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs leading-relaxed font-semibold text-slate-600">
          <div className="space-y-2 bg-slate-50/50 p-4 border border-slate-150 rounded-2xl hover:shadow-md transition-shadow duration-300">
            <div className="h-8 w-8 rounded-full bg-rose-50 border border-rose-100 text-rose-650 flex items-center justify-center font-black">1</div>
            <h4 className="text-sm font-black text-slate-900 tracking-tight">Evaluate Fragrance & Aroma</h4>
            <p>
              Evaluate the dry coffee grounds first within 15 minutes of grinding (Fragrance). 
              After pouring water at 93°C, let it steep for 4 minutes, then break the crust and evaluate the wet aromatics (Aroma).
            </p>
          </div>

          <div className="space-y-2 bg-slate-50/50 p-4 border border-slate-150 rounded-2xl hover:shadow-md transition-shadow duration-300">
            <div className="h-8 w-8 rounded-full bg-rose-50 border border-rose-100 text-rose-650 flex items-center justify-center font-black">2</div>
            <h4 className="text-sm font-black text-slate-900 tracking-tight">Slurp to Aerate (Flavour)</h4>
            <p>
              Aerate the liquid by slurping forcefully from a cupping spoon. This vaporizes the coffee, pushing organic volatiles 
              retro-nasally into your nasal cavity to trigger olfactory receptors while mapping basic tastes on the tongue.
            </p>
          </div>

          <div className="space-y-2 bg-slate-50/50 p-4 border border-slate-150 rounded-2xl hover:shadow-md transition-shadow duration-300">
            <div className="h-8 w-8 rounded-full bg-rose-50 border border-rose-100 text-rose-650 flex items-center justify-center font-black">3</div>
            <h4 className="text-sm font-black text-slate-900 tracking-tight">Concentric Navigation</h4>
            <p>
              Navigate the wheel from the center outwards. Start with broad attributes (e.g., Fruity), isolate the subgroup 
              (e.g., Citrus), and finally target the specific note (e.g., Grapefruit) by matching memory markers.
            </p>
          </div>

          <div className="space-y-2 bg-slate-50/50 p-4 border border-slate-150 rounded-2xl hover:shadow-md transition-shadow duration-300">
            <div className="h-8 w-8 rounded-full bg-rose-50 border border-rose-100 text-rose-650 flex items-center justify-center font-black">4</div>
            <h4 className="text-sm font-black text-slate-900 tracking-tight">Assess Aftertaste & Temperature</h4>
            <p>
              Evaluate the cup at multiple temperatures. As coffee cools (from 70°C down to room temperature), volatile aromas escape, 
              revealing defects, organic acids (acidity shifts), and structural sugar density (sweetness).
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
