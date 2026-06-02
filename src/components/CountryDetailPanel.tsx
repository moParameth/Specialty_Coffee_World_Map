import { useState, useEffect } from "react";
import { X, Globe2, Users, MapPin } from "lucide-react";
import { CoffeeCountry, ExternalCountryData } from "@/types/coffee";
import SensoryChart from "./SensoryChart";
import SourceList from "./SourceList";
import { formatList, getFlavorEmoji } from "@/utils/countryUtils";

interface CountryDetailPanelProps {
  country: CoffeeCountry | null;
  onClose: () => void;
}

export default function CountryDetailPanel({ country, onClose }: CountryDetailPanelProps) {
  const [extData, setExtData] = useState<ExternalCountryData | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!country) {
      setExtData(null);
      return;
    }

    let isMounted = true;
    setLoading(true);
    
    fetch(`https://restcountries.com/v3.1/alpha/${country.iso3}`)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted && data && data[0]) {
          setExtData(data[0]);
        }
      })
      .catch((err) => console.error("Failed to fetch country data:", err))
      .finally(() => {
        if (isMounted) setLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [country]);

  if (!country) {
    return (
      <div className="flex h-full flex-col items-center justify-center p-8 text-center">
        <div className="mb-4 rounded-full bg-blue-50 p-4 text-blue-500 shadow-sm">
          <Globe2 className="h-8 w-8" />
        </div>
        <p className="text-lg font-medium text-slate-500">Select an origin on the map to view specialty coffee details</p>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col bg-white/80 backdrop-blur-md">
      <div className="flex items-start justify-between border-b border-slate-200 p-6 bg-slate-50/90">
        <div className="flex gap-4 items-center">
          {extData?.flags?.svg && (
            <img 
              src={extData.flags.svg} 
              alt={`Flag of ${country.country}`} 
              className="h-10 w-14 object-cover rounded shadow-sm border border-slate-200"
            />
          )}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">{country.country}</h2>
            <p className="text-sm font-medium text-slate-500">{country.regionGroup}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="rounded-full p-2 text-slate-400 hover:bg-slate-200 hover:text-slate-900 transition-colors"
          aria-label="Close panel"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-8 custom-scrollbar">
        {loading ? (
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-4 py-1">
              <div className="h-4 bg-slate-200 rounded w-3/4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-slate-200 rounded"></div>
                <div className="h-4 bg-slate-200 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        ) : extData ? (
          <section className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2 rounded-xl bg-slate-50 p-3 border border-slate-200 shadow-sm">
              <MapPin className="h-4 w-4 text-slate-400" />
              <div>
                <p className="text-xs text-slate-500 uppercase">Capital</p>
                <p className="text-sm font-medium text-slate-800">{extData.capital?.[0] || "-"}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-slate-50 p-3 border border-slate-200 shadow-sm">
              <Users className="h-4 w-4 text-slate-400" />
              <div>
                <p className="text-xs text-slate-500 uppercase">Population</p>
                <p className="text-sm font-medium text-slate-800">{extData.population.toLocaleString()}</p>
              </div>
            </div>
          </section>
        ) : null}

        <section>
          <h3 className="mb-3 text-sm font-bold uppercase tracking-widest text-slate-400 border-b border-slate-200 pb-2">Overview</h3>
          <p className="text-slate-700 leading-relaxed text-sm">{country.specialtyHighlights}</p>
        </section>

        <section className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 shadow-sm">
            <h4 className="text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-wider">Key Origins</h4>
            <p className="text-slate-800 text-sm font-medium">{formatList(country.mainOrigins)}</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 shadow-sm">
            <h4 className="text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-wider">Species</h4>
            <div className="flex flex-wrap gap-1.5">
              {country.coffeeSpecies.map((species) => (
                <span key={species} className="inline-flex items-center rounded-md bg-blue-50 border border-blue-200 px-2 py-0.5 text-xs font-medium text-blue-700">
                  {species}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 shadow-sm">
            <h4 className="text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-wider">Varieties</h4>
            <p className="text-slate-800 text-sm font-medium">{formatList(country.varieties)}</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 shadow-sm">
            <h4 className="text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-wider">Notable Farms/Estates</h4>
            <p className="text-slate-800 text-sm font-medium">{formatList(country.notableFarms)}</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 shadow-sm sm:col-span-2">
            <h4 className="text-[10px] font-bold text-slate-400 mb-1.5 uppercase tracking-wider">Altitude</h4>
            <p className="text-slate-800 text-sm font-medium">{country.altitudeMeters}</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 shadow-sm sm:col-span-2">
            <h4 className="text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-wider">Processing Methods</h4>
            <div className="flex flex-wrap gap-2">
              {country.processingMethods.map((process) => (
                <span key={process} className="inline-flex items-center rounded bg-white border border-slate-200 px-2 py-1 text-xs font-medium text-slate-700 shadow-sm">
                  {process}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-xl bg-slate-50 p-4 border border-slate-200 shadow-sm sm:col-span-2">
            <h4 className="text-[10px] font-bold text-slate-400 mb-2 uppercase tracking-wider">Flavor Notes</h4>
            <div className="flex flex-wrap gap-2">
              {country.flavorNotes.map((note) => (
                <span key={note} className="inline-flex items-center gap-1.5 rounded bg-slate-100 border border-slate-200 px-2.5 py-1 text-xs font-medium text-slate-700">
                  <span>{getFlavorEmoji(note)}</span>
                  <span>{note}</span>
                </span>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-400 border-b border-slate-200 pb-2">Sensory Profile</h3>
          <div className="rounded-xl bg-white p-2 border border-slate-200 shadow-sm">
            <SensoryChart profile={country.sensoryProfile} />
          </div>
        </section>

        <section>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-400 border-b border-slate-200 pb-2">Data Sources</h3>
          <SourceList sources={country.sources} />
        </section>
      </div>
    </div>
  );
}
