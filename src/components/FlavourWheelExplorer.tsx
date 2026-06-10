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
  Sparkles
} from "lucide-react";

interface PlacedNode extends FlavourNode {
  startAngle: number;
  endAngle: number;
}

export default function FlavourWheelExplorer() {
  const [hoveredNode, setHoveredNode] = useState<PlacedNode | null>(null);
  const [selectedNode, setSelectedNode] = useState<PlacedNode | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Dimensions of the SVG Sunburst Wheel
  const size = 600;
  const center = size / 2;
  const R0 = 80;  // Center circle radius
  const R1 = 150; // Level 1 outer radius
  const R2 = 220; // Level 2 outer radius
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

  // Compute start and end angles for all sectors in standard radian coordinates
  const placedNodes = useMemo<PlacedNode[]>(() => {
    const list: PlacedNode[] = [];
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
  }, [weightMap]);

  // Handle search checks
  const isMatchedBySearch = (node: PlacedNode, query: string) => {
    if (!query) return false;
    const q = query.toLowerCase();
    return (
      node.name.toLowerCase().includes(q) ||
      node.description.toLowerCase().includes(q) ||
      node.chemicalCompounds.some((c) => c.toLowerCase().includes(q))
    );
  };

  // Compute highlighted nodes
  const activeHighlight = useMemo(() => {
    const activeNode = hoveredNode || selectedNode;

    if (searchQuery) {
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
      // Children
      coffeeFlavourWheel
        .filter((n) => n.parent === activeNode.id)
        .forEach((c) => highlighted.add(c.id));
    } else if (activeNode.level === 1) {
      // Children & Grandchildren
      const children = coffeeFlavourWheel.filter((n) => n.parent === activeNode.id);
      children.forEach((c) => {
        highlighted.add(c.id);
        coffeeFlavourWheel
          .filter((n) => n.parent === c.id)
          .forEach((gc) => highlighted.add(gc.id));
      });
    }

    return highlighted;
  }, [hoveredNode, selectedNode, searchQuery, placedNodes]);

  // Convert polar coordinates to SVG Cartesian paths
  const getArcPath = (startAngle: number, endAngle: number, rIn: number, rOut: number) => {
    // Outer points
    const xOutStart = center + rOut * Math.cos(startAngle);
    const yOutStart = center + rOut * Math.sin(startAngle);
    const xOutEnd = center + rOut * Math.cos(endAngle);
    const yOutEnd = center + rOut * Math.sin(endAngle);

    const largeArc = endAngle - startAngle > Math.PI ? 1 : 0;

    if (rIn === 0) {
      return `M ${xOutStart} ${yOutStart} A ${rOut} ${rOut} 0 ${largeArc} 1 ${xOutEnd} ${yOutEnd} L ${center} ${center} Z`;
    }

    // Inner points
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
    setHoveredNode(null);
  };

  // Helper to map country name to ISO3
  const getCountryIso3 = (name: string): string => {
    const matched = coffeeCountries.find(
      (c) => c.country.toLowerCase() === name.toLowerCase()
    );
    return matched ? matched.iso3 : "";
  };

  // Helper to resolve variety names to IDs
  const getVarietyId = (name: string): string => {
    const matched = coffeeVarieties.find(
      (v) => v.name.toLowerCase() === name.toLowerCase()
    );
    return matched ? matched.id : name.toLowerCase().replace(/\s+/g, "-");
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
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all bg-slate-50/50"
          />
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          {selectedNode && (
            <button
              onClick={() => setSelectedNode(null)}
              className="flex-1 md:flex-none px-4 py-2 text-xs font-bold text-slate-600 bg-slate-100 hover:bg-slate-250 border border-slate-200 rounded-xl transition-all"
            >
              Deselect Flavor
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
              {placedNodes.length} Sensory Slices
            </span>
          </h4>

          {/* SVG Canvas */}
          <div className="w-full max-w-[500px] aspect-square relative">
            <svg 
              viewBox={`0 0 ${size} ${size}`} 
              className="w-full h-full drop-shadow-md overflow-visible"
            >
              {/* Draw Sectors */}
              <g>
                {placedNodes.map((node) => {
                  const rIn = node.level === 1 ? R0 : node.level === 2 ? R1 : R2;
                  const rOut = node.level === 1 ? R1 : node.level === 2 ? R2 : R3;
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

                  // Label rendering visibility threshold
                  const span = node.endAngle - node.startAngle;
                  const showLabel = node.level === 1 || span > 0.07;

                  return (
                    <g 
                      key={node.id}
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredNode(node)}
                      onMouseLeave={() => setHoveredNode(null)}
                      onClick={() => setSelectedNode(node)}
                    >
                      {/* Arc sector */}
                      <path
                        d={path}
                        fill={node.color}
                        stroke="#ffffff"
                        strokeWidth={isHovered || isSelected ? 2.5 : 1}
                        opacity={isDimmed ? 0.15 : 1}
                        className="transition-all duration-300 hover:scale-[1.01]"
                        style={{
                          transformOrigin: `${center}px ${center}px`,
                          filter: isHovered || isSelected ? `drop-shadow(0 0 8px ${node.color}40)` : undefined
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
                          fill={node.level === 1 ? "#ffffff" : "#334155"}
                          fontSize={node.level === 1 ? 10 : node.level === 2 ? 8.5 : 7}
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

              {/* Center Circle Hub */}
              <circle
                cx={center}
                cy={center}
                r={R0 - 4}
                className="fill-white stroke-slate-200 stroke-2"
                style={{
                  filter: activeNode ? `drop-shadow(0 0 12px ${activeNode.color}30)` : "drop-shadow(0 4px 6px rgba(0,0,0,0.04))"
                }}
              />

              {/* Center text representation */}
              <g className="pointer-events-none">
                {activeNode ? (
                  <>
                    <text
                      x={center}
                      y={center - 10}
                      textAnchor="middle"
                      fill={activeNode.color}
                      fontSize="9"
                      fontWeight="900"
                      className="uppercase tracking-widest"
                    >
                      {activeNode.level === 1 ? "Category" : activeNode.level === 2 ? "Subcategory" : "Flavor Note"}
                    </text>
                    <text
                      x={center}
                      y={center + 12}
                      textAnchor="middle"
                      fill="#0f172a"
                      fontSize={activeNode.name.length > 10 ? "11" : "14"}
                      fontWeight="900"
                      className="uppercase tracking-tight"
                    >
                      {activeNode.name}
                    </text>
                  </>
                ) : (
                  <>
                    <text
                      x={center}
                      y={center - 6}
                      textAnchor="middle"
                      fill="#64748b"
                      fontSize="9"
                      fontWeight="800"
                      className="uppercase tracking-widest"
                    >
                      Specialty
                    </text>
                    <text
                      x={center}
                      y={center + 10}
                      textAnchor="middle"
                      fill="#0f172a"
                      fontSize="11"
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
                      {/* Check grandparent */}
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
                      <span 
                        key={comp}
                        className="bg-white border border-slate-200 text-slate-700 px-2.5 py-1 rounded-lg text-xs font-bold shadow-sm"
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                  <p className="text-[10px] text-slate-400 font-medium italic">
                    These chemical esters, aldehydes, or organic acids form during metabolic ripening and pyrolysis.
                  </p>
                </div>
              )}

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
                          className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-50 border border-slate-200 hover:border-rose-400 hover:text-rose-650 rounded-xl text-xs font-black transition-all shadow-sm cursor-pointer hover:-translate-y-0.5"
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
                          className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-50 border border-slate-200 hover:border-rose-400 hover:text-rose-650 rounded-xl text-xs font-black transition-all shadow-sm cursor-pointer hover:-translate-y-0.5"
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
              <div className="p-4 bg-rose-50 text-rose-500 rounded-full border border-rose-100 shadow-sm animate-pulse">
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
                  <strong>Tip:</strong> The wheel is grouped logically. Use the search bar to locate specific chemicals like <em>vanillin</em> or volatile <em>linalool</em>.
                </span>
              </div>
            </div>
          )}

          {/* Wheel Legend (Always visible in sidebar footer) */}
          <div className="pt-4 border-t border-slate-100 grid grid-cols-3 gap-2 text-[9px] font-black uppercase text-slate-500">
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-full bg-slate-100 border border-slate-300" />
              <span>Concentric 1</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded bg-slate-100 border border-slate-300" />
              <span>Concentric 2</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="h-2 w-2 rounded-[20%] bg-slate-100 border border-slate-300" />
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
          {/* Step 1 */}
          <div className="space-y-2 bg-slate-50/50 p-4 border border-slate-150 rounded-2xl hover:shadow-sm transition-shadow duration-300">
            <div className="h-8 w-8 rounded-full bg-rose-50 border border-rose-100 text-rose-650 flex items-center justify-center font-black">1</div>
            <h4 className="text-sm font-black text-slate-900 tracking-tight">Evaluate Fragrance & Aroma</h4>
            <p>
              Evaluate the dry coffee grounds first within 15 minutes of grinding (Fragrance). 
              After pouring water at 93°C, let it steep for 4 minutes, then break the crust and evaluate the wet aromatics (Aroma).
            </p>
          </div>

          {/* Step 2 */}
          <div className="space-y-2 bg-slate-50/50 p-4 border border-slate-150 rounded-2xl hover:shadow-sm transition-shadow duration-300">
            <div className="h-8 w-8 rounded-full bg-rose-50 border border-rose-100 text-rose-650 flex items-center justify-center font-black">2</div>
            <h4 className="text-sm font-black text-slate-900 tracking-tight">Slurp to Aerate (Flavour)</h4>
            <p>
              Aerate the liquid by slurping forcefully from a cupping spoon. This vaporizes the coffee, pushing organic volatiles 
              retro-nasally into your nasal cavity to trigger olfactory receptors while mapping basic tastes on the tongue.
            </p>
          </div>

          {/* Step 3 */}
          <div className="space-y-2 bg-slate-50/50 p-4 border border-slate-150 rounded-2xl hover:shadow-sm transition-shadow duration-300">
            <div className="h-8 w-8 rounded-full bg-rose-50 border border-rose-100 text-rose-650 flex items-center justify-center font-black">3</div>
            <h4 className="text-sm font-black text-slate-900 tracking-tight">Concentric Navigation</h4>
            <p>
              Navigate the wheel from the center outwards. Start with broad attributes (e.g., Fruity), isolate the subgroup 
              (e.g., Citrus), and finally target the specific note (e.g., Grapefruit) by matching memory markers.
            </p>
          </div>

          {/* Step 4 */}
          <div className="space-y-2 bg-slate-50/50 p-4 border border-slate-150 rounded-2xl hover:shadow-sm transition-shadow duration-300">
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
