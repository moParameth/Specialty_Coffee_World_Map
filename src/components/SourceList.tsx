import { ExternalLink } from "lucide-react";
import { SourceLink } from "@/types/coffee";

interface SourceListProps {
  sources: SourceLink[];
}

export default function SourceList({ sources }: SourceListProps) {
  if (!sources || sources.length === 0) return null;

  return (
    <ul className="space-y-3">
      {sources.map((source, index) => (
        <li key={index} className="rounded-lg bg-slate-50 p-3 border border-slate-200 text-sm transition-colors hover:bg-slate-100 shadow-sm">
          <a
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-2 font-medium text-blue-600 hover:text-blue-500"
          >
            <span>{source.name}</span>
            <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-400 group-hover:text-blue-500 transition-colors" />
          </a>
          {source.note && <p className="mt-1.5 text-xs text-slate-500">{source.note}</p>}
        </li>
      ))}
    </ul>
  );
}
