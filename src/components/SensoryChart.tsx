"use client";

import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import { SensoryProfile } from "@/types/coffee";

interface SensoryChartProps {
  profile: SensoryProfile;
}

export default function SensoryChart({ profile }: SensoryChartProps) {
  const data = [
    { subject: "Aroma", A: profile.aroma, fullMark: 10 },
    { subject: "Acidity", A: profile.acidity, fullMark: 10 },
    { subject: "Body", A: profile.body, fullMark: 10 },
    { subject: "Sweetness", A: profile.sweetness, fullMark: 10 },
    { subject: "Balance", A: profile.balance, fullMark: 10 },
    { subject: "Aftertaste", A: profile.aftertaste, fullMark: 10 },
  ];

  const renderCustomTick = (props: any) => {
    const { payload, x, y, cx, cy, textAnchor } = props;
    // Find the corresponding data point to get the score
    const dataPoint = data.find(d => d.subject === payload.value);
    const score = dataPoint ? dataPoint.A.toFixed(1) : "";
    
    return (
      <text 
        x={x} 
        y={y} 
        dy={4} 
        textAnchor={textAnchor} 
        fill="#64748b" 
        fontSize={11} 
        fontWeight={600}
      >
        {payload.value}: {score}
      </text>
    );
  };

  return (
    <div className="h-64 w-full" style={{ minHeight: 256, minWidth: 256 }}>
      <ResponsiveContainer width="100%" height="100%" minHeight={256} minWidth={256}>
        <RadarChart cx="50%" cy="50%" outerRadius="65%" data={data}>
          <PolarGrid stroke="#cbd5e1" />
          <PolarAngleAxis dataKey="subject" tick={renderCustomTick} />
          <PolarRadiusAxis angle={30} domain={[0, 10]} tick={false} axisLine={false} />
          <Radar
            name="Sensory Profile"
            dataKey="A"
            stroke="#3b82f6"
            strokeWidth={2}
            fill="#60a5fa"
            fillOpacity={0.4}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
