
import * as React from 'react';

// Map colors to prevent JIT issues
const CHART_COLORS: Record<string, any> = {
   emerald: { from: '#10b981', to: '#059669', text: '#10b981', bg: 'bg-emerald-500' },
   amber: { from: '#f59e0b', to: '#d97706', text: '#f59e0b', bg: 'bg-amber-500' },
   cyan: { from: '#06b6d4', to: '#0891b2', text: '#06b6d4', bg: 'bg-cyan-500' },
   purple: { from: '#a855f7', to: '#7c3aed', text: '#a855f7', bg: 'bg-purple-500' },
   rose: { from: '#f43f5e', to: '#e11d48', text: '#f43f5e', bg: 'bg-rose-500' },
   orange: { from: '#f97316', to: '#ea580c', text: '#f97316', bg: 'bg-orange-500' },
   pink: { from: '#ec4899', to: '#db2777', text: '#ec4899', bg: 'bg-pink-500' },
   teal: { from: '#14b8a6', to: '#0d9488', text: '#14b8a6', bg: 'bg-teal-500' },
   slate: { from: '#64748b', to: '#475569', text: '#64748b', bg: 'bg-slate-500' },
};

interface BarChartProps {
  data: number[]; 
  labels: string[];
  maxVal?: number;
  color: string; 
}

export const BarChart: React.FC<BarChartProps> = ({ data, labels, maxVal = 6, color }) => {
  const height = 120;
  const width = 300;
  const barWidth = 18;
  const spacing = data.length > 1 ? (width - (data.length * barWidth)) / (data.length - 1) : 0;
  const theme = CHART_COLORS[color] || CHART_COLORS['emerald'];

  return (
    <div className="w-full h-48 flex items-end justify-center select-none">
      <svg viewBox={`0 0 ${width} ${height + 30}`} className="w-full h-full overflow-visible">
        <defs>
           <linearGradient id={`barGrad-${color}`} x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor={theme.from} />
              <stop offset="100%" stopColor={theme.to} />
           </linearGradient>
        </defs>
        {data.map((val, i) => {
          const barH = (val / Math.max(1, maxVal || 6)) * height;
          const x = data.length > 1 ? i * (barWidth + spacing) : width / 2 - barWidth / 2;
          
          return (
            <g key={i} className="group cursor-pointer">
              {/* Bar Background */}
              <rect x={x} y={0} width={barWidth} height={height} rx="6" fill="rgba(255,255,255,0.05)" />
              
              {/* Active Bar */}
              <rect 
                x={x} 
                y={height - barH} 
                width={barWidth} 
                height={barH} 
                rx="6"
                fill={`url(#barGrad-${color})`}
                className="transition-all duration-1000 ease-out opacity-90 group-hover:opacity-100 group-hover:translate-y-[-2px]"
              >
                <animate attributeName="height" from="0" to={barH} dur="0.8s" calcMode="spline" keySplines="0.2 0.8 0.2 1" />
                <animate attributeName="y" from={height} to={height - barH} dur="0.8s" calcMode="spline" keySplines="0.2 0.8 0.2 1" />
              </rect>
              
              {/* Label */}
              <text 
                x={x + barWidth / 2} 
                y={height + 20} 
                textAnchor="middle" 
                fill="currentColor"
                className="text-[9px] font-bold uppercase opacity-40 group-hover:opacity-100 group-hover:fill-white transition-all"
              >
                {labels[i]}
              </text>
              
              {/* Popup Value */}
              <g className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <rect x={x + barWidth/2 - 12} y={height - barH - 25} width="24" height="18" rx="4" fill="#000" opacity="0.8" />
                  <text 
                    x={x + barWidth / 2} 
                    y={height - barH - 13} 
                    textAnchor="middle" 
                    fill="#fff" 
                    className="text-[10px] font-bold"
                  >
                    {val}
                  </text>
              </g>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

interface HeatmapProps {
  history: any[];
  current: any;
}

export const ActivityHeatmap: React.FC<HeatmapProps> = ({ history, current }) => {
  // Generate dates for the last 14 weeks (approx 3 months)
  const weeks = 18;
  const days = weeks * 7;
  const today = new Date();
  
  // Combine history and current day
  const allData = [...(history || [])];
  // Ensure current day is in the dataset if not already (checked by date string)
  if (!allData.find(d => d.date === current.date)) {
      allData.push(current);
  }

  // Create a map for fast lookup: "YYYY-MM-DD" -> imanScore
  const scoreMap = new Map();
  allData.forEach(day => {
      scoreMap.set(day.date, day.imanScore || 0);
  });

  const cells = [];
  // Loop backwards from today
  for (let i = days - 1; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().split('T')[0];
      const score = scoreMap.get(dateStr) || 0;
      
      let opacity = 0.1; // Default empty
      if (score > 0) opacity = 0.3;
      if (score > 30) opacity = 0.5;
      if (score > 60) opacity = 0.7;
      if (score > 80) opacity = 0.9;
      if (score > 95) opacity = 1;

      cells.push({ date: dateStr, opacity, score });
  }

  return (
    <div className="w-full overflow-hidden">
        <div className="flex gap-1 justify-end flex-wrap flex-col h-[100px] content-end">
            {cells.map((cell, i) => (
                <div 
                    key={i} 
                    className="w-2.5 h-2.5 rounded-[2px] bg-emerald-500 transition-all duration-500 hover:scale-150 hover:z-10 relative group"
                    style={{ opacity: cell.opacity }}
                >
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 hidden group-hover:block bg-black/90 text-white text-[9px] px-2 py-1 rounded whitespace-nowrap z-20 pointer-events-none">
                        {cell.date}: {Math.round(cell.score)}%
                    </div>
                </div>
            ))}
        </div>
        <div className="flex justify-between items-center mt-2 text-[9px] text-secondary uppercase tracking-widest opacity-60">
            <span>3 Months Ago</span>
            <div className="flex items-center gap-1">
                <span>Less</span>
                <div className="w-2 h-2 bg-emerald-500/10 rounded-[1px]"></div>
                <div className="w-2 h-2 bg-emerald-500/40 rounded-[1px]"></div>
                <div className="w-2 h-2 bg-emerald-500/70 rounded-[1px]"></div>
                <div className="w-2 h-2 bg-emerald-500 rounded-[1px]"></div>
                <span>More</span>
            </div>
        </div>
    </div>
  );
};
