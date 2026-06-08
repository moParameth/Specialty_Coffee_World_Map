"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Map, Coffee, History, Workflow, Flame, Truck } from "lucide-react";

type RouteConfig = {
  path: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  iconColor: string;
};

const routes: RouteConfig[] = [
  {
    path: "/",
    label: "World Map",
    icon: Map,
    title: "Specialty Coffee World Map",
    subtitle: "Explore specialty coffee origins through an interactive flat 2D map",
    iconColor: "text-blue-500"
  },
  {
    path: "/varieties",
    label: "Coffee Varieties",
    icon: Coffee,
    title: "Coffee Variety Explorer",
    subtitle: "Explore coffee varieties, agronomic traits, genetic lineage, and flavor profiles",
    iconColor: "text-amber-600"
  },
  {
    path: "/history",
    label: "Coffee History",
    icon: History,
    title: "Coffee History Timeline",
    subtitle: "Trace coffee's journey from Ethiopian highlands to the global specialty movement",
    iconColor: "text-purple-500"
  },
  {
    path: "/processing",
    label: "Coffee Processing",
    icon: Workflow,
    title: "Coffee Processing Methods",
    subtitle: "Discover the chemistry and mechanics behind washing and fermentation styles",
    iconColor: "text-emerald-500"
  },
  {
    path: "/roasting",
    label: "Coffee Roasting",
    icon: Flame,
    title: "Coffee Roasting Science",
    subtitle: "Understand heat transfer, chemistry, and the thermodynamics of roasting",
    iconColor: "text-orange-500"
  },
  {
    path: "/supply-chain",
    label: "Supply Chain",
    icon: Truck,
    title: "Coffee Supply Chain Journey",
    subtitle: "Trace the physical, economic, and logistical journey from soil to cup",
    iconColor: "text-amber-800"
  }
];

export default function Header() {
  const pathname = usePathname() || "/";
  
  const currentRoute = routes.find(r => r.path === pathname) || routes[0];
  const IconComponent = currentRoute.icon;

  return (
    <header className="flex-none bg-white/95 border-b border-slate-200/80 px-4 md:px-6 py-3.5 sticky top-0 z-40 shadow-sm backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        {/* Brand Logo & Subtitle */}
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-xl bg-slate-50 border border-slate-200/60 flex items-center justify-center shadow-sm transition-all duration-300 hover:scale-105 ${currentRoute.iconColor}`}>
            <IconComponent className="h-5 w-5 transition-transform duration-500 hover:rotate-12" />
          </div>
          <div className="space-y-0.5">
            <h1 className="text-lg md:text-xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {currentRoute.title}
            </h1>
            <p className="text-[11px] font-semibold text-slate-500 leading-none">
              {currentRoute.subtitle}
            </p>
          </div>
        </div>

        {/* Premium Navigation Pills (Responsive Scrollable container) */}
        <div className="w-full md:w-auto overflow-x-auto scrollbar-none py-1 -my-1">
          <nav className="flex items-center gap-1 bg-slate-50 p-1 rounded-xl border border-slate-200/60">
            {routes.map((route) => {
              const isActive = pathname === route.path;
              const RouteIcon = route.icon;
              return (
                <Link
                  key={route.path}
                  id={`nav-${route.label.toLowerCase().replace(/\s+/g, "-")}`}
                  href={route.path}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs md:text-sm font-bold rounded-lg transition-all duration-200 hover:scale-[1.01] active:scale-[0.99] border ${
                    isActive
                      ? "bg-slate-900 text-white shadow-sm border-slate-800"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-200/40 border-transparent"
                  }`}
                >
                  <RouteIcon className={`h-3.5 w-3.5 ${isActive ? "text-white" : "text-slate-400"}`} />
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
