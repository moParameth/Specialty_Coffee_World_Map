"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Map, Coffee, History, Workflow, Flame, Sparkles } from "lucide-react";

type RouteConfig = {
  path: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  themeColor: string;
  themeBg: string;
  iconBg: string;
  accentText: string;
};

const routes: RouteConfig[] = [
  {
    path: "/",
    label: "World Map",
    icon: Map,
    title: "Specialty Coffee World Map",
    subtitle: "Explore specialty coffee origins through an interactive flat 2D map",
    themeColor: "text-blue-600",
    themeBg: "bg-blue-600 border-blue-600",
    iconBg: "bg-blue-50 text-blue-600 border-blue-100",
    accentText: "text-blue-600"
  },
  {
    path: "/varieties",
    label: "Coffee Varieties",
    icon: Coffee,
    title: "Coffee Variety Explorer",
    subtitle: "Explore coffee varieties, agronomic traits, genetic lineage, disease resistance, and flavor expectations.",
    themeColor: "text-amber-700",
    themeBg: "bg-amber-900 border-amber-900",
    iconBg: "bg-amber-50 text-amber-800 border-amber-100",
    accentText: "text-amber-800"
  },
  {
    path: "/history",
    label: "Coffee History",
    icon: History,
    title: "Coffee History Timeline",
    subtitle: "Trace coffee's journey from Ethiopian highlands to the global third-wave specialty movement.",
    themeColor: "text-purple-600",
    themeBg: "bg-purple-700 border-purple-700",
    iconBg: "bg-purple-50 text-purple-700 border-purple-100",
    accentText: "text-purple-700"
  },
  {
    path: "/processing",
    label: "Coffee Processing",
    icon: Workflow,
    title: "Coffee Processing Methods",
    subtitle: "Discover the chemistry and mechanics behind Washed, Natural, Honey, and modern fermentation styles.",
    themeColor: "text-emerald-600",
    themeBg: "bg-emerald-700 border-emerald-700",
    iconBg: "bg-emerald-50 text-emerald-700 border-emerald-100",
    accentText: "text-emerald-700"
  },
  {
    path: "/roasting",
    label: "Coffee Roasting",
    icon: Flame,
    title: "Coffee Roasting Science",
    subtitle: "Understand heat transfer, chemical Maillard reactions, and the physics of roasting coffee.",
    themeColor: "text-orange-500",
    themeBg: "bg-orange-600 border-orange-600",
    iconBg: "bg-orange-50 text-orange-600 border-orange-100",
    accentText: "text-orange-600"
  }
];

export default function Header() {
  const pathname = usePathname() || "/";
  
  // Find current route config
  const currentRoute = routes.find(r => r.path === pathname) || routes[0];
  const IconComponent = currentRoute.icon;

  return (
    <header className="flex-none bg-white/90 border-b border-slate-200/80 px-4 md:px-6 py-4 sticky top-0 z-40 shadow-sm backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        {/* Brand Logo & Subtitle */}
        <div className="flex items-start md:items-center gap-3">
          <div className={`p-2.5 rounded-2xl border flex items-center justify-center shadow-inner transition-transform duration-500 hover:rotate-12 ${currentRoute.iconBg}`}>
            <IconComponent className="h-6 w-6 animate-pulse" />
          </div>
          <div className="space-y-0.5">
            <h1 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2 leading-tight">
              {currentRoute.title}
              <span className="hidden sm:inline-flex items-center gap-0.5 bg-slate-100 text-slate-600 border border-slate-200 text-[10px] font-bold px-2 py-0.5 rounded-md">
                <Sparkles className="h-3 w-3 text-amber-500" />
                Specialty Guide
              </span>
            </h1>
            <p className="text-xs font-semibold text-slate-500 leading-snug max-w-xl">
              {currentRoute.subtitle}
            </p>
          </div>
        </div>

        {/* Premium Navigation Pills (Responsive Scrollable container) */}
        <div className="w-full md:w-auto overflow-x-auto scrollbar-none py-1 -my-1">
          <nav className="flex items-center gap-1.5 min-w-max p-1 bg-slate-100/80 rounded-2xl border border-slate-200/50">
            {routes.map((route) => {
              const isActive = pathname === route.path;
              const RouteIcon = route.icon;
              return (
                <Link
                  key={route.path}
                  id={`nav-${route.label.toLowerCase().replace(/\s+/g, "-")}`}
                  href={route.path}
                  className={`flex items-center gap-1.5 px-3.5 py-2 text-xs md:text-sm font-extrabold rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
                    isActive
                      ? "bg-slate-900 text-white shadow-md shadow-slate-900/10 border border-slate-800"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white/50 border border-transparent"
                  }`}
                >
                  <RouteIcon className={`h-4 w-4 transition-transform duration-300 group-hover:rotate-12 ${isActive ? "text-white" : "text-slate-400"}`} />
                  <span>{route.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Hide Scrollbars CSS */}
      <style jsx global>{`
        .scrollbar-none::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-none {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </header>
  );
}
