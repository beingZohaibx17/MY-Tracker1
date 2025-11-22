
import * as React from 'react';

// Map colors to prevent JIT issues
const CHART_COLORS: Record<string, any> = {
   emerald: { from: '#10b981', to: '#059669', text: '#10b981' },
   amber: { from: '#f59e0b', to: '#d97706', text: '#f59e0b' },
   cyan: { from: '#06b6d4', to: '#0891b2', text: '#06b6d4' },
   purple: { from: '#a855f7', to: '#7c3aed', text: '#a855f7' },
   rose: { from: '#f43f5e', to: '#e11d48', text: '#f43f5e' },
   orange: { from: '#f97316', to: '#ea580c', text: '#f97316' },
   pink: { from: '#ec4899', to: '#db2777', text: '#ec4899' },
   teal: { from: '#14b8a6', to: '#0d9488', text: '#14b8a6' },
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

interface LineChartProps {
  data: number[];
  color: string;
}

export const LineChart: React.FC<LineChartProps> = ({ data, color }) => {
  if (!data || data.length < 2) return <div className="text-center text-gray-500 text-xs py-10 opacity-50">Not enough data to chart</div>;

  const width = 300;
  const height = 100;
  const min = Math.min(...data) * 0.9;
  const max = Math.max(...data) * 1.1;
  const range = Math.max(1, max - min);
  const theme = CHART_COLORS[color] || CHART_COLORS['emerald'];
  
  // Create smooth bezier curve path
  const points = data.map((val, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - ((val - min) / range) * height;
    return [x, y];
  });

  const pathD = points.reduce((acc, [x, y], i, arr) => {
     if (i === 0) return `M ${x},${y}`;
     const [prevX, prevY] = arr[i-1];
     const cp1x = prevX + (x - prevX) * 0.5;
     const cp1y = prevY;
     const cp2x = x - (x - prevX) * 0.5;
     const cp2y = y;
     return `${acc} C ${cp1x},${cp1y} ${cp2x},${cp2y} ${x},${y}`;
  }, "");

  const areaD = `${pathD} L ${width},${height} L 0,${height} Z`;

  return (
    <div className="w-full h-32 select-none">
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full overflow-visible">
         <defs>
            <linearGradient id={`grad-${color}`} x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor={theme.from} stopOpacity="0.3" />
              <stop offset="100%" stopColor={theme.to} stopOpacity="0" />
            </linearGradient>
         </defs>

         <path 
           d={areaD} 
           fill={`url(#grad-${color})`} 
           className="opacity-50"
         >
             <animate attributeName="opacity" from="0" to="0.5" dur="1s" />
         </path>

         <path 
           d={pathD} 
           fill="none" 
           stroke={theme.from} 
           strokeWidth="3" 
           className="drop-shadow-md"
           strokeLinecap="round"
           strokeLinejoin="round"
         >
             <animate attributeName="stroke-dasharray" from="0 1000" to="1000 1000" dur="1.5s" />
         </path>
         
         {points.map(([x, y], i) => (
            <g key={i} className="group">
              <circle cx={x} cy={y} r="4" fill={theme.from} stroke="white" strokeWidth="2" className="transition-all duration-300 group-hover:r-6" />
              <text x={x} y={y-10} textAnchor="middle" fill={theme.from} className="text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">{data[i]}</text>
            </g>
         ))}
      </svg>
    </div>
  );
};
