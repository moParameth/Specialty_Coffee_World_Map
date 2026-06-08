"use client";

import { useState, useRef, MouseEvent, TouchEvent } from "react";
import { CoffeeVariety } from "@/types/variety";
import { ZoomIn, ZoomOut, Maximize2, Info, Search } from "lucide-react";

interface Node {
  id: string;
  name: string;
  x: number;
  y: number;
  species: "Arabica" | "Robusta" | "Liberica" | "Hybrid" | "Eugenioides";
  isVirtual?: boolean;
  description?: string;
  lineage: string;
}

interface Edge {
  source: string;
  target: string;
  type?: "mutation" | "hybrid" | "selection";
}

interface VarietyTreeGraphProps {
  selectedVariety: CoffeeVariety | null;
  allVarieties: CoffeeVariety[];
  onSelectVariety: (id: string) => void;
  searchFilter: string;
}

// Coordinate layout mapping for the 1000 x 700 canvas
const nodes: Node[] = [
  {
    "id": "geisha",
    "name": "Geisha",
    "x": 120,
    "y": 60,
    "species": "Arabica",
    "lineage": "Ethiopian Landrace",
    "description": "Wild Ethiopian landrace collection"
  },
  {
    "id": "wush-wush",
    "name": "Wush Wush",
    "x": 120,
    "y": 115,
    "species": "Arabica",
    "lineage": "Ethiopian Landrace",
    "description": "Wild heirloom selection from Ethiopia"
  },
  {
    "id": "java",
    "name": "Java",
    "x": 120,
    "y": 170,
    "species": "Arabica",
    "lineage": "Ethiopian Landrace",
    "description": "Wild Ethiopian landrace via Java"
  },
  {
    "id": "sudan-rume",
    "name": "Sudan Rume",
    "x": 120,
    "y": 225,
    "species": "Arabica",
    "lineage": "Ethiopian Landrace",
    "description": "Wild South Sudan landrace selection"
  },
  {
    "id": "typica",
    "name": "Typica",
    "x": 120,
    "y": 285,
    "species": "Arabica",
    "lineage": "Typica",
    "description": "Foundational early Arabica cultivar"
  },
  {
    "id": "bourbon",
    "name": "Bourbon",
    "x": 120,
    "y": 400,
    "species": "Arabica",
    "lineage": "Bourbon",
    "description": "Foundational early Arabica cultivar"
  },
  {
    "id": "conilon",
    "name": "Conilon",
    "x": 120,
    "y": 540,
    "species": "Robusta",
    "lineage": "Robusta",
    "description": "Coffea canephora group parent"
  },
  {
    "id": "eugenioides",
    "name": "Eugenioides",
    "x": 120,
    "y": 615,
    "species": "Eugenioides",
    "lineage": "Eugenioides",
    "description": "Diploid parent species of Arabica"
  },
  {
    "id": "sl14",
    "name": "SL14",
    "x": 360,
    "y": 80,
    "species": "Arabica",
    "lineage": "Bourbon-Typica",
    "description": "Drought-tolerant selection from Typica"
  },
  {
    "id": "maragogype",
    "name": "Maragogype",
    "x": 360,
    "y": 150,
    "species": "Arabica",
    "lineage": "Typica",
    "description": "Natural giant-bean mutation of Typica"
  },
  {
    "id": "sl34",
    "name": "SL34",
    "x": 360,
    "y": 220,
    "species": "Arabica",
    "lineage": "Bourbon-Typica",
    "description": "Scott Labs selection, Typica-like genetics"
  },
  {
    "id": "caturra",
    "name": "Caturra",
    "x": 360,
    "y": 290,
    "species": "Arabica",
    "lineage": "Bourbon",
    "description": "Natural dwarf mutation of Red Bourbon"
  },
  {
    "id": "tekisic",
    "name": "Tekisic",
    "x": 360,
    "y": 350,
    "species": "Arabica",
    "lineage": "Bourbon",
    "description": "Exceptional sweetness selection of Bourbon"
  },
  {
    "id": "pacas",
    "name": "Pacas",
    "x": 360,
    "y": 410,
    "species": "Arabica",
    "lineage": "Bourbon",
    "description": "Natural dwarf mutation of Bourbon in El Salvador"
  },
  {
    "id": "k7",
    "name": "K7",
    "x": 360,
    "y": 470,
    "species": "Arabica",
    "lineage": "Bourbon-Typica",
    "description": "Kenya selection, rust & CBD resistant"
  },
  {
    "id": "sl28",
    "name": "SL28",
    "x": 360,
    "y": 530,
    "species": "Arabica",
    "lineage": "Bourbon-Typica",
    "description": "Scott Labs selection, Bourbon lineage"
  },
  {
    "id": "villa-sarchi",
    "name": "Villa Sarchi",
    "x": 360,
    "y": 590,
    "species": "Arabica",
    "lineage": "Bourbon",
    "description": "Natural dwarf mutation of Bourbon in Costa Rica"
  },
  {
    "id": "timor-hybrid",
    "name": "Timor Hybrid",
    "x": 360,
    "y": 650,
    "species": "Hybrid",
    "lineage": "Introgressed",
    "description": "Natural Arabica-Robusta cross (rust resistant)"
  },
  {
    "id": "sidra",
    "name": "Sidra",
    "x": 480,
    "y": 230,
    "species": "Arabica",
    "lineage": "Bourbon-Typica",
    "description": "Red Bourbon x Typica hybrid"
  },
  {
    "id": "laurina",
    "name": "Laurina",
    "x": 480,
    "y": 380,
    "species": "Arabica",
    "lineage": "Bourbon",
    "description": "Natural Bourbon dwarf mutation"
  },
  {
    "id": "pink-bourbon",
    "name": "Pink Bourbon",
    "x": 480,
    "y": 480,
    "species": "Arabica",
    "lineage": "Bourbon",
    "description": "Red x Yellow Bourbon natural cross"
  },
  {
    "id": "s795",
    "name": "S795",
    "x": 600,
    "y": 100,
    "species": "Arabica",
    "lineage": "Introgressed",
    "description": "Kent x S.288 (Liberica hybrid)"
  },
  {
    "id": "pacamara",
    "name": "Pacamara",
    "x": 600,
    "y": 170,
    "species": "Arabica",
    "lineage": "Bourbon-Typica",
    "description": "Pacas x Maragogype cross"
  },
  {
    "id": "mundo-novo",
    "name": "Mundo Novo",
    "x": 600,
    "y": 240,
    "species": "Arabica",
    "lineage": "Bourbon-Typica",
    "description": "Natural Typica x Red Bourbon cross"
  },
  {
    "id": "centroamericano",
    "name": "Centroamericano",
    "x": 600,
    "y": 310,
    "species": "Arabica",
    "lineage": "Sarchimor",
    "description": "T5296 x Sudan Rume F1 hybrid"
  },
  {
    "id": "anacafe-14",
    "name": "Anacafé 14",
    "x": 600,
    "y": 380,
    "species": "Arabica",
    "lineage": "Catimor",
    "description": "Pacas x Timor Hybrid natural cross"
  },
  {
    "id": "catimor",
    "name": "Catimor",
    "x": 600,
    "y": 450,
    "species": "Arabica",
    "lineage": "Catimor",
    "description": "Timor Hybrid x Caturra cross"
  },
  {
    "id": "marsellesa",
    "name": "Marsellesa",
    "x": 600,
    "y": 520,
    "species": "Arabica",
    "lineage": "Sarchimor",
    "description": "Villa Sarchi x Timor Hybrid Sarchimor line"
  },
  {
    "id": "parainema",
    "name": "Parainema",
    "x": 600,
    "y": 585,
    "species": "Arabica",
    "lineage": "Sarchimor",
    "description": "Sarchimor selection (Villa Sarchi x Timor Hybrid)"
  },
  {
    "id": "robusta-commercial-clones",
    "name": "Robusta Clones",
    "x": 600,
    "y": 650,
    "species": "Robusta",
    "lineage": "Robusta",
    "description": "Selected clones (TR4, TR9, TRS1, BP-939)"
  },
  {
    "id": "starmaya",
    "name": "Starmaya",
    "x": 840,
    "y": 120,
    "species": "Arabica",
    "lineage": "Sarchimor",
    "description": "Marsellesa x Caturra seed-propagated F1"
  },
  {
    "id": "catuai",
    "name": "Catuaí",
    "x": 840,
    "y": 210,
    "species": "Arabica",
    "lineage": "Bourbon-Typica",
    "description": "Mundo Novo x Caturra dwarf cross"
  },
  {
    "id": "obata",
    "name": "Obata",
    "x": 840,
    "y": 300,
    "species": "Arabica",
    "lineage": "Sarchimor",
    "description": "Sarchimor x Catuaí cross"
  },
  {
    "id": "colombia",
    "name": "Colombia",
    "x": 840,
    "y": 390,
    "species": "Arabica",
    "lineage": "Catimor",
    "description": "Caturra x Timor Hybrid Cenicafé composite"
  },
  {
    "id": "castillo",
    "name": "Castillo",
    "x": 840,
    "y": 470,
    "species": "Arabica",
    "lineage": "Catimor",
    "description": "Cenicafé selection to replace Colombia variety"
  },
  {
    "id": "ruiru-11",
    "name": "Ruiru 11",
    "x": 840,
    "y": 550,
    "species": "Arabica",
    "lineage": "Catimor",
    "description": "CBD & Leaf Rust resistant dwarf hybrid"
  },
  {
    "id": "batian",
    "name": "Batian",
    "x": 840,
    "y": 630,
    "species": "Arabica",
    "lineage": "Introgressed",
    "description": "Ruiru 11 x Castillo x SL28 x SL34 complex cross"
  }
];

const edges: Edge[] = [
  {
    "source": "typica",
    "target": "maragogype",
    "type": "mutation"
  },
  {
    "source": "typica",
    "target": "sl34",
    "type": "selection"
  },
  {
    "source": "typica",
    "target": "sl14",
    "type": "selection"
  },
  {
    "source": "bourbon",
    "target": "caturra",
    "type": "mutation"
  },
  {
    "source": "bourbon",
    "target": "pacas",
    "type": "mutation"
  },
  {
    "source": "bourbon",
    "target": "sl28",
    "type": "selection"
  },
  {
    "source": "bourbon",
    "target": "villa-sarchi",
    "type": "mutation"
  },
  {
    "source": "bourbon",
    "target": "tekisic",
    "type": "selection"
  },
  {
    "source": "bourbon",
    "target": "k7",
    "type": "selection"
  },
  {
    "source": "typica",
    "target": "s795",
    "type": "hybrid"
  },
  {
    "source": "typica",
    "target": "mundo-novo",
    "type": "hybrid"
  },
  {
    "source": "bourbon",
    "target": "mundo-novo",
    "type": "hybrid"
  },
  {
    "source": "caturra",
    "target": "catuai",
    "type": "hybrid"
  },
  {
    "source": "mundo-novo",
    "target": "catuai",
    "type": "hybrid"
  },
  {
    "source": "pacas",
    "target": "pacamara",
    "type": "hybrid"
  },
  {
    "source": "maragogype",
    "target": "pacamara",
    "type": "hybrid"
  },
  {
    "source": "typica",
    "target": "timor-hybrid",
    "type": "hybrid"
  },
  {
    "source": "conilon",
    "target": "timor-hybrid",
    "type": "hybrid"
  },
  {
    "source": "timor-hybrid",
    "target": "catimor",
    "type": "hybrid"
  },
  {
    "source": "caturra",
    "target": "catimor",
    "type": "hybrid"
  },
  {
    "source": "timor-hybrid",
    "target": "parainema",
    "type": "hybrid"
  },
  {
    "source": "villa-sarchi",
    "target": "parainema",
    "type": "hybrid"
  },
  {
    "source": "timor-hybrid",
    "target": "anacafe-14",
    "type": "hybrid"
  },
  {
    "source": "pacas",
    "target": "anacafe-14",
    "type": "hybrid"
  },
  {
    "source": "timor-hybrid",
    "target": "colombia",
    "type": "hybrid"
  },
  {
    "source": "caturra",
    "target": "colombia",
    "type": "hybrid"
  },
  {
    "source": "timor-hybrid",
    "target": "centroamericano",
    "type": "hybrid"
  },
  {
    "source": "villa-sarchi",
    "target": "centroamericano",
    "type": "hybrid"
  },
  {
    "source": "timor-hybrid",
    "target": "marsellesa",
    "type": "hybrid"
  },
  {
    "source": "villa-sarchi",
    "target": "marsellesa",
    "type": "hybrid"
  },
  {
    "source": "timor-hybrid",
    "target": "obata",
    "type": "hybrid"
  },
  {
    "source": "catuai",
    "target": "obata",
    "type": "hybrid"
  },
  {
    "source": "marsellesa",
    "target": "starmaya",
    "type": "hybrid"
  },
  {
    "source": "caturra",
    "target": "starmaya",
    "type": "hybrid"
  },
  {
    "source": "colombia",
    "target": "castillo",
    "type": "selection"
  },
  {
    "source": "catimor",
    "target": "ruiru-11",
    "type": "hybrid"
  },
  {
    "source": "sl28",
    "target": "batian",
    "type": "hybrid"
  },
  {
    "source": "sl34",
    "target": "batian",
    "type": "hybrid"
  },
  {
    "source": "castillo",
    "target": "batian",
    "type": "hybrid"
  },
  {
    "source": "ruiru-11",
    "target": "batian",
    "type": "hybrid"
  },
  {
    "source": "conilon",
    "target": "robusta-commercial-clones",
    "type": "selection"
  },
  {
    "source": "eugenioides",
    "target": "typica",
    "type": "hybrid"
  },
  {
    "source": "eugenioides",
    "target": "bourbon",
    "type": "hybrid"
  },
  {
    "source": "conilon",
    "target": "typica",
    "type": "hybrid"
  },
  {
    "source": "conilon",
    "target": "bourbon",
    "type": "hybrid"
  },
  {
    "source": "sudan-rume",
    "target": "centroamericano",
    "type": "hybrid"
  },
  {
    "source": "bourbon",
    "target": "laurina",
    "type": "mutation"
  },
  {
    "source": "bourbon",
    "target": "pink-bourbon",
    "type": "selection"
  },
  {
    "source": "bourbon",
    "target": "sidra",
    "type": "hybrid"
  },
  {
    "source": "typica",
    "target": "sidra",
    "type": "hybrid"
  }
];

export default function VarietyTreeGraph({
  selectedVariety,
  allVarieties,
  onSelectVariety,
  searchFilter
}: VarietyTreeGraphProps) {
  // Zoom & Pan States
  const [zoom, setZoom] = useState<number>(0.9);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 30, y: 10 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragStart = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Hover states for lineage path highlighting
  const [hoveredNodeId, setHoveredNodeId] = useState<string | null>(null);

  // Calculate high-lighted nodes & links based on active node (hovered or selected)
  const getLineageHighlightInfo = () => {
    const activeNodeId = hoveredNodeId || selectedVariety?.id;
    if (!activeNodeId) return { nodes: new Set<string>(), edges: new Set<string>() };

    const highlightedNodes = new Set<string>([activeNodeId]);
    const highlightedEdges = new Set<string>();

    // 1. Recursive trace for all ancestors (going up the tree)
    const traceAncestors = (nodeId: string) => {
      edges.forEach((edge) => {
        if (edge.target === nodeId) {
          const edgeId = `${edge.source}->${edge.target}`;
          if (!highlightedEdges.has(edgeId)) {
            highlightedNodes.add(edge.source);
            highlightedEdges.add(edgeId);
            traceAncestors(edge.source);
          }
        }
      });
    };

    // 2. Recursive trace for all descendants (going down the tree)
    const traceDescendants = (nodeId: string) => {
      edges.forEach((edge) => {
        if (edge.source === nodeId) {
          const edgeId = `${edge.source}->${edge.target}`;
          if (!highlightedEdges.has(edgeId)) {
            highlightedNodes.add(edge.target);
            highlightedEdges.add(edgeId);
            traceDescendants(edge.target);
          }
        }
      });
    };

    traceAncestors(activeNodeId);
    traceDescendants(activeNodeId);

    return { nodes: highlightedNodes, edges: highlightedEdges };
  };

  const highlight = getLineageHighlightInfo();

  // Dragging Handlers for pan
  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).tagName === "button" || (e.target as HTMLElement).closest("button")) {
      return;
    }
    setIsDragging(true);
    dragStart.current = { x: e.clientX - pan.x, y: e.clientY - pan.y };
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setPan({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch controls for mobile
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 1) {
      setIsDragging(true);
      dragStart.current = { x: e.touches[0].clientX - pan.x, y: e.touches[0].clientY - pan.y };
    }
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (!isDragging || e.touches.length !== 1) return;
    setPan({
      x: e.touches[0].clientX - dragStart.current.x,
      y: e.touches[0].clientY - dragStart.current.y
    });
  };

  // Zoom handlers
  const zoomIn = () => setZoom((z) => Math.min(z + 0.1, 1.8));
  const zoomOut = () => setZoom((z) => Math.max(z - 0.1, 0.5));
  const resetFit = () => {
    setZoom(0.9);
    setPan({ x: 30, y: 10 });
  };

  // Filter search queries
  const isNodeSearched = (node: Node) => {
    if (!searchFilter) return false;
    const query = searchFilter.toLowerCase();
    
    // Match name
    if (node.name.toLowerCase().includes(query)) return true;
    
    // Match variety metadata in dataset
    const matchedVariety = allVarieties.find((v) => v.id === node.id);
    if (matchedVariety) {
      if (matchedVariety.species.toLowerCase().includes(query)) return true;
      if (matchedVariety.lineage.toLowerCase().includes(query)) return true;
      if (matchedVariety.alternativeNames?.some((n) => n.toLowerCase().includes(query))) return true;
    }
    return false;
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[620px] rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden select-none cursor-grab active:cursor-grabbing touch-none"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleMouseUp}
    >
      {/* Background Category Lanes */}
      <div className="absolute inset-0 pointer-events-none grid grid-cols-4 text-center opacity-70">
        <div className="border-r border-slate-100 bg-slate-50/20 flex flex-col justify-between p-4">
          <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">Ancestral Landraces</span>
          <span className="text-[9px] text-slate-400 font-medium">Yemen & Ethiopian Origins</span>
        </div>
        <div className="border-r border-slate-100 bg-slate-50/40 flex flex-col justify-between p-4">
          <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">Mutations & Selections</span>
          <span className="text-[9px] text-slate-400 font-medium">Early Clonal & Field Selections</span>
        </div>
        <div className="border-r border-slate-100 bg-slate-50/20 flex flex-col justify-between p-4">
          <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">Primary Hybrid Crosses</span>
          <span className="text-[9px] text-slate-400 font-medium">F1 Crossings & Timor Derivatives</span>
        </div>
        <div className="bg-slate-50/40 flex flex-col justify-between p-4">
          <span className="text-[10px] font-black uppercase tracking-wider text-slate-400">Advanced Selections</span>
          <span className="text-[9px] text-slate-400 font-medium">Modern Composite Cultivars</span>
        </div>
      </div>

      {/* Floating Info Guide */}
      <div className="absolute bottom-4 left-4 z-10 pointer-events-none max-w-xs bg-slate-900/90 text-white rounded-xl p-3 shadow-md backdrop-blur border border-slate-700 text-[11px] leading-relaxed flex items-start gap-2.5">
        <Info className="h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" />
        <div>
          <span className="font-bold block mb-1 text-slate-100">Interactive Lineage Graph</span>
          Hover over nodes to trace ancestry lines. Solid nodes are clickable varieties that update details. Dashed nodes represent virtual botanical links. Drag to pan, scroll/buttons to zoom.
        </div>
      </div>

      {/* Floating Zoom & Pan Controls */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 bg-white/90 backdrop-blur border border-slate-200 p-1.5 rounded-xl shadow-sm">
        <button
          onClick={zoomIn}
          title="Zoom In"
          className="p-1.5 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-all active:scale-95"
        >
          <ZoomIn className="h-4 w-4" />
        </button>
        <button
          onClick={zoomOut}
          title="Zoom Out"
          className="p-1.5 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-all active:scale-95"
        >
          <ZoomOut className="h-4 w-4" />
        </button>
        <div className="h-4 w-[1px] bg-slate-200"></div>
        <button
          onClick={resetFit}
          title="Reset Fit"
          className="p-1.5 rounded-lg text-slate-600 hover:text-blue-600 hover:bg-slate-50 transition-all active:scale-95 flex items-center gap-1 text-[10px] font-bold"
        >
          <Maximize2 className="h-4 w-4" />
          <span>Reset</span>
        </button>
      </div>

      {/* Main SVG Canvas */}
      <svg className="w-full h-full">
        <defs>
          {/* Arrow markers for directed parent-child edges */}
          {/* Regular targets */}
          <marker
            id="arrow"
            viewBox="0 0 10 10"
            refX="22"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#cbd5e1" />
          </marker>
          <marker
            id="arrow-highlighted"
            viewBox="0 0 10 10"
            refX="22"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6" />
          </marker>

          {/* Selected targets (radius 20, offset by 26) */}
          <marker
            id="arrow-selected"
            viewBox="0 0 10 10"
            refX="26"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#cbd5e1" />
          </marker>
          <marker
            id="arrow-highlighted-selected"
            viewBox="0 0 10 10"
            refX="26"
            refY="5"
            markerWidth="6"
            markerHeight="6"
            orient="auto-start-reverse"
          >
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#3b82f6" />
          </marker>
        </defs>

        {/* Transformed Group for Zoom & Pan */}
        <g
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            transformOrigin: "0 0",
            transition: isDragging ? "none" : "transform 0.15s ease-out"
          }}
        >
          {/* --- DRAW EDGES (LINES) --- */}
          <g>
            {edges.map((edge, idx) => {
              const sourceNode = nodes.find((n) => n.id === edge.source);
              const targetNode = nodes.find((n) => n.id === edge.target);
              if (!sourceNode || !targetNode) return null;

              const linkId = `${edge.source}->${edge.target}`;
              const isHighlighted = (hoveredNodeId || selectedVariety?.id) ? highlight.edges.has(linkId) : false;
              
              // Faded link state (only when hovering something)
              const isFaded = hoveredNodeId ? !highlight.edges.has(linkId) : false;

              // Check if target is selected to choose proper marker offset
              const isTargetSelected = selectedVariety?.id === edge.target;
              let markerUrl = isHighlighted ? "url(#arrow-highlighted)" : "url(#arrow)";
              if (isTargetSelected) {
                markerUrl = isHighlighted ? "url(#arrow-highlighted-selected)" : "url(#arrow-selected)";
              }

              // Draw curved cubic bezier paths for premium visuals
              const dx = targetNode.x - sourceNode.x;
              let pathData = "";
              if (Math.abs(dx) < 1) {
                // Same column link. Curve outwards symmetrically to bypass intermediate nodes.
                const isLeft = sourceNode.x < 500;
                const offset = isLeft ? -55 : 55;
                const controlX = sourceNode.x + offset;
                pathData = `M ${sourceNode.x} ${sourceNode.y} C ${controlX} ${sourceNode.y}, ${controlX} ${targetNode.y}, ${targetNode.x} ${targetNode.y}`;
              } else {
                // Normal horizontal flow
                const controlX1 = sourceNode.x + dx * 0.4;
                const controlX2 = sourceNode.x + dx * 0.6;
                pathData = `M ${sourceNode.x} ${sourceNode.y} C ${controlX1} ${sourceNode.y}, ${controlX2} ${targetNode.y}, ${targetNode.x} ${targetNode.y}`;
              }

              return (
                <path
                  key={idx}
                  d={pathData}
                  fill="none"
                  stroke={isHighlighted ? "#3b82f6" : "#e2e8f0"}
                  strokeWidth={isHighlighted ? 2.5 : 1.5}
                  strokeDasharray={edge.type === "mutation" ? "4,4" : undefined}
                  markerEnd={markerUrl}
                  opacity={isFaded ? 0.15 : 1}
                  className="transition-all duration-300"
                />
              );
            })}
          </g>

          {/* --- DRAW NODES --- */}
          <g>
            {nodes.map((node) => {
              const isSelected = selectedVariety?.id === node.id;
              const isSearched = isNodeSearched(node);
              const isHighlighted = (hoveredNodeId || selectedVariety?.id) ? highlight.nodes.has(node.id) : false;
              
              // Faded node state (only when hovering something)
              const isFaded = hoveredNodeId ? !highlight.nodes.has(node.id) : false;

              // Species styling
              let nodeFillColor = "fill-white";
              
              if (node.species === "Robusta") {
                nodeFillColor = "fill-amber-50/20";
              } else if (node.species === "Hybrid") {
                nodeFillColor = "fill-purple-50/20";
              } else if (node.species === "Eugenioides") {
                nodeFillColor = "fill-emerald-50/20";
              }

              return (
                <g
                  key={node.id}
                  transform={`translate(${node.x}, ${node.y})`}
                  className={`cursor-pointer transition-all duration-300 ${
                    isFaded ? "opacity-25" : "opacity-100"
                  }`}
                  onMouseEnter={() => setHoveredNodeId(node.id)}
                  onMouseLeave={() => setHoveredNodeId(null)}
                  onClick={() => {
                    if (!node.isVirtual) {
                      onSelectVariety(node.id);
                    }
                  }}
                >
                  {/* Search Glow Circle Indicator */}
                  {isSearched && (
                    <circle
                      r="32"
                      className="fill-blue-100/70 stroke-blue-400 stroke-[2] animate-pulse"
                  />
                  )}

                  {/* Selected Node Pulsating Ring */}
                  {isSelected && (
                    <circle
                      r="28"
                      className="fill-none stroke-blue-500 stroke-[1.5] animate-ping"
                      style={{ animationDuration: "3s" }}
                    />
                  )}

                  {/* Outer Node Circle */}
                  <circle
                    r={isSelected ? 20 : 16}
                    className={`${nodeFillColor} stroke-2 transition-all ${
                      isSelected
                        ? "stroke-blue-600 shadow-md stroke-[3]"
                        : isHighlighted
                        ? "stroke-blue-500 stroke-[2]"
                        : node.isVirtual
                        ? "stroke-slate-300 stroke-[1.5]"
                        : "stroke-slate-400 hover:stroke-blue-500 stroke-[1.5]"
                    }`}
                    style={{
                      strokeDasharray: node.isVirtual ? "4,3" : undefined
                    }}
                  />

                  {/* Species Color Center Dot */}
                  <circle
                    r="6"
                    className={`${
                      node.species === "Robusta"
                        ? "fill-amber-600"
                        : node.species === "Hybrid"
                        ? "fill-purple-500"
                        : node.species === "Eugenioides"
                        ? "fill-emerald-500"
                        : "fill-blue-500"
                    }`}
                  />

                  {/* Label Box (Positioned above or below node based on column layout) */}
                  <g transform="translate(0, 0)">
                    {/* Label Text */}
                    <text
                      textAnchor="middle"
                      y={isSelected ? -28 : -24}
                      className={`text-[11px] transition-all select-none ${
                        isSelected
                          ? "fill-blue-700 font-black text-[12px]"
                          : isHighlighted
                          ? "fill-blue-600 font-bold"
                          : node.isVirtual
                          ? "fill-slate-400 font-medium italic"
                          : "fill-slate-700 font-bold hover:fill-blue-600"
                      }`}
                    >
                      {node.name}
                    </text>
                    
                    {/* Lineage small text badge (Only for highlighted nodes/zoomed states) */}
                    {(isSelected || isHighlighted || isSearched) && (
                      <text
                        textAnchor="middle"
                        y={isSelected ? 32 : 28}
                        className="text-[8px] font-bold fill-slate-400 uppercase tracking-widest pointer-events-none"
                      >
                        {node.lineage}
                      </text>
                    )}
                  </g>

                  {/* Simple tooltip structure inside SVG for touch devices */}
                  <title>{`${node.name} (${node.species} species)\nLineage: ${node.lineage}\n${node.description || ""}`}</title>
                </g>
              );
            })}
          </g>
        </g>
      </svg>

      {/* Floating Legend Panel */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2.5 bg-white/90 backdrop-blur border border-slate-200 p-3 rounded-xl shadow-sm text-[10px] pointer-events-none">
        <span className="font-extrabold text-slate-800 uppercase tracking-wider text-[9px] border-b border-slate-100 pb-1">Lineage Legend</span>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-blue-500"></span>
          <span className="font-bold text-slate-700">Arabica (C. arabica)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-amber-600"></span>
          <span className="font-bold text-slate-700">Robusta (C. canephora)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-purple-500"></span>
          <span className="font-bold text-slate-700">Arabica-Robusta Hybrids</span>
        </div>
        <div className="flex items-center gap-2 border-t border-slate-100 pt-1">
          <span className="w-3 h-[2px] bg-slate-300"></span>
          <span className="text-slate-500 font-medium">Standard breeding line</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-[1px] border-t border-dashed border-slate-400"></span>
          <span className="text-slate-500 font-medium">Natural mutation lineage</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 border-1.5 border-dashed border-slate-300 rounded-full flex items-center justify-center text-[7px] text-slate-400 font-bold">V</span>
          <span className="text-slate-500 font-medium">Virtual botanical parent</span>
        </div>
      </div>
    </div>
  );
}
