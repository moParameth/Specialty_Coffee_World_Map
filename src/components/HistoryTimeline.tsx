"use client";

import { useState } from "react";
import Link from "next/link";
import { coffeeHistory } from "@/data/coffeeHistory";
import { coffeeVarieties } from "@/data/coffeeVarieties";
import { 
  Search, 
  MapPin, 
  Calendar, 
  ChevronDown, 
  ChevronUp, 
  RefreshCw,
  Clock,
  Sparkles,
  Link2,
  User,
  TrendingUp
} from "lucide-react";

type EraType = "all" | "origins" | "expansion" | "industrial" | "modern";

interface EraConfig {
  label: string;
  badgeClass: string;
  dotClass: string;
  colorName: string;
  period: string;
}

const eraConfigs: Record<Exclude<EraType, "all">, EraConfig> = {
  origins: {
    label: "Origins & Discovery",
    badgeClass: "bg-blue-50 text-blue-700 border-blue-200",
    dotClass: "bg-blue-400 ring-blue-100",
    colorName: "Blue-400",
    period: "c. 850 – 1500"
  },
  expansion: {
    label: "Global Expansion",
    badgeClass: "bg-blue-100 text-blue-800 border-blue-300",
    dotClass: "bg-blue-600 ring-blue-200",
    colorName: "Blue-600",
    period: "1600 – 1750"
  },
  industrial: {
    label: "Industrialization & Science",
    badgeClass: "bg-slate-100 text-slate-700 border-slate-300",
    dotClass: "bg-slate-500 ring-slate-200",
    colorName: "Slate-500",
    period: "1800 – 1950"
  },
  modern: {
    label: "Modern Waves",
    badgeClass: "bg-blue-900/10 text-blue-900 border-blue-900/20",
    dotClass: "bg-blue-900 ring-blue-900/20",
    colorName: "Blue-900",
    period: "1960 – Present"
  }
};

export default function HistoryTimeline() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedEra, setSelectedEra] = useState<EraType>("all");
  const [expandedEvents, setExpandedEvents] = useState<Record<string, boolean>>({});
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});

  // Helper to handle image load failure
  const handleImageError = (id: string) => {
    setFailedImages((prev) => ({
      ...prev,
      [id]: true
    }));
  };

  // Helper to toggle event details collapse/expand
  const toggleExpand = (id: string) => {
    setExpandedEvents((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // Helper to get a variety's display name from its ID
  const getVarietyName = (id: string): string => {
    const found = coffeeVarieties.find((v) => v.id === id);
    return found ? found.name : id;
  };

  // Reset filters
  const handleResetFilters = () => {
    setSearchTerm("");
    setSelectedEra("all");
  };

  // Filter history events based on search term and selected era
  const filteredEvents = coffeeHistory.filter((event) => {
    const matchesEra = selectedEra === "all" || event.era === selectedEra;
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = 
      event.title.toLowerCase().includes(searchLower) ||
      event.location.toLowerCase().includes(searchLower) ||
      event.year.toLowerCase().includes(searchLower) ||
      event.summary.toLowerCase().includes(searchLower) ||
      event.description.toLowerCase().includes(searchLower);
    return matchesEra && matchesSearch;
  });

  return (
    <div className="space-y-8">
      {/* Search and Era Tabs Control Header */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
            <Clock className="h-5 w-5 text-blue-600" />
            <span>Filter Historical Milestones</span>
          </h2>
          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search historical events, countries..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 text-sm border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-600 transition-all bg-slate-50/50"
            />
          </div>
        </div>

        {/* Era Filter Buttons */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
          <button
            onClick={() => setSelectedEra("all")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border ${
              selectedEra === "all"
                ? "bg-blue-600 border-blue-600 text-white shadow-sm"
                : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900"
            }`}
          >
            All Eras ({coffeeHistory.length})
          </button>
          
          {(Object.keys(eraConfigs) as Array<keyof typeof eraConfigs>).map((key) => {
            const config = eraConfigs[key];
            const count = coffeeHistory.filter((e) => e.era === key).length;
            const isActive = selectedEra === key;

            return (
              <button
                key={key}
                onClick={() => setSelectedEra(key)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 ${
                  isActive
                    ? "bg-blue-600 border-blue-600 text-white shadow-sm"
                    : "bg-white border-slate-200 text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                }`}
              >
                <span>{config.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Timeline Layout */}
      {filteredEvents.length > 0 ? (
        <div className="relative max-w-5xl mx-auto py-8">
          {/* Vertical central line (desktop: centered, mobile: far left) */}
          <div className="absolute left-6 lg:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2"></div>

          {/* Timeline Milestones */}
          <div className="space-y-12 relative">
            {filteredEvents.map((event, index) => {
              const config = eraConfigs[event.era];
              const isEven = index % 2 === 0;
              const isExpanded = !!expandedEvents[event.id];

              return (
                <div 
                  key={event.id}
                  className={`flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-0 relative ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Timeline node dot */}
                  <div className="absolute left-6 lg:left-1/2 top-7 -translate-x-1/2 z-10 flex items-center justify-center">
                    <span className={`h-4.5 w-4.5 rounded-full ring-4 ${config.dotClass} shadow-md transition-transform duration-300 hover:scale-125`}></span>
                  </div>

                  {/* Left Column (Desktop: Event Card, Mobile: Content spacer) */}
                  <div className={`w-full lg:w-[calc(50%-2rem)] pl-16 lg:pl-0 ${
                    isEven ? "lg:text-right" : ""
                  }`}>
                    {/* On Desktop, years can hover opposite the cards. Let's make an interactive side label! */}
                    <div className={`hidden lg:flex items-center gap-2 mt-4 text-slate-400 text-sm font-bold uppercase tracking-wider ${
                      isEven ? "justify-end" : "justify-start"
                    }`}>
                      <Calendar className="h-4 w-4 text-blue-500/60" />
                      <span>{event.year}</span>
                      <span className="text-[10px] text-slate-300">•</span>
                      <span>{event.location}</span>
                    </div>
                  </div>

                  {/* Right Column (Desktop: Card, Mobile: Full Width Card) */}
                  <div className="w-full lg:w-[calc(50%-2rem)] pl-16 lg:pl-0">
                    <div className="group bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300 flex flex-col gap-3 relative">
                      {/* Event Image */}
                      {event.imageUrl && !failedImages[event.id] && (
                        <div className="w-full h-48 overflow-hidden rounded-xl border border-slate-100 bg-slate-50 relative">
                          <img
                            src={event.imageUrl}
                            alt={event.title}
                            onError={() => handleImageError(event.id)}
                            className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                      )}
                      {/* Mobile Header: Year and Location */}
                      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-wider lg:hidden">
                        <span className="text-slate-900 font-bold">{event.year}</span>
                        <span>•</span>
                        <span>{event.location}</span>
                      </div>

                      {/* Era Badge */}
                      <div className="flex items-center justify-between">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${config.badgeClass}`}>
                          {config.label}
                        </span>
                        
                        {/* Desktop Era Period Indicator */}
                        <span className="hidden lg:inline text-[10px] text-slate-400 font-medium">
                          {config.period}
                        </span>
                      </div>

                      {/* Event Title */}
                      <h3 className="text-xl font-extrabold text-slate-950 tracking-tight group-hover:text-blue-600 transition-colors">
                        {event.title}
                      </h3>

                      {/* Key Figures & Stats */}
                      {(event.keyFigures && event.keyFigures.length > 0) || event.stats ? (
                        <div className="flex flex-wrap items-center gap-1.5 mt-0.5 text-xs">
                          {event.stats && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-50 text-blue-800 font-bold border border-blue-100 shadow-[0_1px_2px_rgba(59,130,246,0.05)]">
                              <TrendingUp className="h-3.5 w-3.5 text-blue-500" />
                              <span>{event.stats}</span>
                            </span>
                          )}
                          {event.keyFigures && event.keyFigures.map((person) => (
                            <span key={person} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-slate-50 text-slate-700 font-bold border border-slate-200">
                              <User className="h-3.5 w-3.5 text-slate-400" />
                              <span>{person}</span>
                            </span>
                          ))}
                        </div>
                      ) : null}

                      {/* Summary */}
                      <p className="text-sm font-semibold text-slate-700 leading-relaxed">
                        {event.summary}
                      </p>

                      {/* Expanded Section with detailed description */}
                      {isExpanded ? (
                        <div className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3 mt-1 space-y-2 animate-fadeIn">
                          <p>{event.description}</p>
                        </div>
                      ) : null}

                      {/* Action buttons (Expand details & Variety links) */}
                      <div className="flex flex-wrap items-center justify-between gap-4 mt-2 pt-3 border-t border-slate-100/80">
                        {/* Read more button */}
                        <button
                          onClick={() => toggleExpand(event.id)}
                          className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:text-blue-800 transition-all"
                        >
                          <span>{isExpanded ? "Collapse Details" : "Read Full Story"}</span>
                          {isExpanded ? (
                            <ChevronUp className="h-3.5 w-3.5" />
                          ) : (
                            <ChevronDown className="h-3.5 w-3.5" />
                          )}
                        </button>

                        {/* Connected Variety tags */}
                        {event.varietyConnections && event.varietyConnections.length > 0 ? (
                          <div className="flex items-center gap-1.5 flex-wrap">
                            <span className="text-[10px] font-bold text-slate-400 flex items-center gap-1 uppercase tracking-wider">
                              <Link2 className="h-3 w-3" />
                              <span>Varieties:</span>
                            </span>
                            {event.varietyConnections.map((varId) => (
                              <Link
                                key={varId}
                                href={`/varieties?selected=${varId}`}
                                className="inline-flex items-center text-[10px] font-bold bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700 px-2 py-0.5 rounded-md border border-blue-100 transition-all"
                              >
                                {getVarietyName(varId)}
                              </Link>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        /* Empty Search Results State */
        <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center shadow-sm space-y-4 max-w-xl mx-auto">
          <div className="h-12 w-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
            <Search className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">No historical events match your filters</h3>
          <p className="text-sm font-semibold text-slate-500">
            We couldn't find any events matching "{searchTerm}" in the selected era. Try adjusting your query or resetting the timeline.
          </p>
          <button
            onClick={handleResetFilters}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold bg-blue-600 border border-blue-600 text-white rounded-xl shadow-sm hover:bg-blue-700 transition-all"
          >
            <RefreshCw className="h-3.5 w-3.5" />
            <span>Reset All Filters</span>
          </button>
        </div>
      )}
    </div>
  );
}
