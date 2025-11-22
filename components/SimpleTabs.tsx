
import React, { useState, useEffect } from 'react';
import { AppState, SubView, DailyStats, Friend, ThemeMode } from '../types';
import { FITNESS_SCHEDULE, MEMORIZE_CONTENT, PARAH_NAMES, MASTER_ACHIEVEMENTS, getGrowthStage, getStreakTitle, STREAK_MILESTONES, RAMADAN_TIPS, QURAN_PART_LABELS, DHIKR_LABELS, WEEK_DAYS } from '../constants';
import { Check, Droplets, RotateCcw, Cigarette, ShieldAlert, CheckCircle2, ChevronLeft, BarChart2, Trophy, Dumbbell, Brain, Activity, Users, UserPlus, Radio, Cloud, Download, Upload, Smartphone, Moon, Sun, Monitor, LogOut, HeartHandshake, ShieldCheck, BookOpen, Tent, Calendar, Flame, Plus, Minus, Zap, Maximize2, X, ShoppingBag, Snowflake, AlertTriangle, Star, Scan, Trash2, Award, Volume2, Eye, MicOff, Heart, Lightbulb, Timer, MapPin, Sparkles, Orbit, Waves, Shield, Leaf, Filter, Bell, Code, Info, FileText, Terminal } from 'lucide-react';
import { BarChart, LineChart } from './Charts';

const THEME_STYLES: Record<string, any> = {
  amber: { 
    color: 'text-amber-500', 
    border: 'border-amber-500/30', 
    bg: 'bg-amber-500', 
    bgSoft: 'bg-amber-500/10', 
    gradient: 'from-amber-500/40', 
    shadow: 'shadow-amber-900/30'
  },
  cyan: { 
    color: 'text-cyan-500', 
    border: 'border-cyan-500/30', 
    bg: 'bg-cyan-500', 
    bgSoft: 'bg-cyan-500/10', 
    gradient: 'from-cyan-500/40', 
    shadow: 'shadow-cyan-900/30'
  },
  purple: { 
    color: 'text-purple-500', 
    border: 'border-purple-500/30', 
    bg: 'bg-purple-500', 
    bgSoft: 'bg-purple-500/10', 
    gradient: 'from-purple-500/40', 
    shadow: 'shadow-purple-900/30'
  },
  rose: { 
    color: 'text-rose-500', 
    border: 'border-rose-500/30', 
    bg: 'bg-rose-500', 
    bgSoft: 'bg-rose-500/10', 
    gradient: 'from-rose-500/40', 
    shadow: 'shadow-rose-900/30'
  },
  orange: { 
    color: 'text-orange-500', 
    border: 'border-orange-500/30', 
    bg: 'bg-orange-500', 
    bgSoft: 'bg-orange-500/10', 
    gradient: 'from-orange-500/40', 
    shadow: 'shadow-orange-900/30'
  },
  pink: { 
    color: 'text-pink-500', 
    border: 'border-pink-500/30', 
    bg: 'bg-pink-500', 
    bgSoft: 'bg-pink-500/10', 
    gradient: 'from-pink-500/40', 
    shadow: 'shadow-pink-900/30'
  },
  emerald: { 
    color: 'text-emerald-500', 
    border: 'border-emerald-500/30', 
    bg: 'bg-emerald-500', 
    bgSoft: 'bg-emerald-500/10', 
    gradient: 'from-emerald-500/40', 
    shadow: 'shadow-emerald-900/30'
  },
  teal: { 
    color: 'text-teal-500', 
    border: 'border-teal-500/30', 
    bg: 'bg-teal-500', 
    bgSoft: 'bg-teal-500/10', 
    gradient: 'from-teal-500/40', 
    shadow: 'shadow-teal-900/30'
  },
  gray: { 
    color: 'text-slate-500', 
    border: 'border-slate-500/30', 
    bg: 'bg-slate-500', 
    bgSoft: 'bg-slate-500/10', 
    gradient: 'from-slate-500/40', 
    shadow: 'shadow-slate-900/30'
  },
  blue: { 
    color: 'text-blue-500', 
    border: 'border-blue-500/30', 
    bg: 'bg-blue-500', 
    bgSoft: 'bg-blue-500/10', 
    gradient: 'from-blue-500/40', 
    shadow: 'shadow-blue-900/30'
  }
};

// --- VISUAL COMPONENTS ---

const LiquidGauge: React.FC<{ value: number; max: number; color: string }> = ({ value, max, color }) => {
  const percentage = Math.min(100, (value / max) * 100);
  const theme = THEME_STYLES[color];
  return (
    <div className="relative w-20 h-32 rounded-full border-[3px] border-white/10 bg-black/30 overflow-hidden mx-auto shadow-inner group transform-gpu">
       <div className={`absolute bottom-0 left-0 right-0 transition-all duration-1000 ease-in-out ${theme.bg}`} 
            style={{ height: `${percentage}%`, opacity: 0.4, transform: 'scale(1.2)' }}>
            <div className="absolute top-0 left-0 right-0 h-4 bg-white/10 animate-[float_3s_ease-in-out_infinite] opacity-50"></div>
       </div>
       <div className={`absolute bottom-0 left-0 right-0 transition-all duration-700 ease-in-out ${theme.bg}`} 
            style={{ height: `${percentage}%`, opacity: 0.8 }}>
            <div className="absolute top-0 left-0 right-0 h-2 bg-white/30 animate-pulse"></div>
       </div>
       
       {percentage > 0 && (
          <>
            <div className="absolute bottom-2 left-1/2 w-1.5 h-1.5 bg-white/40 rounded-full animate-float" style={{ animationDuration: '2s' }} />
            <div className="absolute bottom-6 left-1/3 w-2 h-2 bg-white/30 rounded-full animate-float" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
            <div className="absolute bottom-4 right-1/3 w-1 h-1 bg-white/50 rounded-full animate-float" style={{ animationDuration: '2.5s', animationDelay: '1.2s' }} />
          </>
       )}
       
       <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent pointer-events-none rounded-full"></div>
       <div className="absolute inset-0 border-[3px] border-white/5 rounded-full pointer-events-none"></div>
    </div>
  );
};

const CircularProgress: React.FC<{ value: number; max: number; color: string; size?: number; icon?: React.ReactNode; label?: string }> = ({ value, max, color, size=24, icon, label }) => {
  const r = 40;
  const c = 2 * Math.PI * r;
  const p = c - (Math.min(100, (value / max) * 100) / 100) * c;
  const theme = THEME_STYLES[color];

  return (
    <div className="flex flex-col items-center group">
        <div className="relative flex items-center justify-center drop-shadow-[0_0_15px_rgba(0,0,0,0.3)] transform transition-transform group-hover:scale-105 duration-300">
            <svg className="transform -rotate-90 w-28 h-28" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r={r} stroke="currentColor" strokeWidth="8" fill="transparent" className="text-black/10 dark:text-white/5" />
                <circle cx="50" cy="50" r={r} stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray={c} strokeDashoffset={p} strokeLinecap="round" className={`${theme.color} transition-all duration-1000 ease-[cubic-bezier(0.4,0,0.2,1)]`} />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
               {icon && <div className={`${theme.color} mb-1 animate-pulse-slow`}>{icon}</div>}
               <div className="text-xl font-bold text-primary tabular-nums">{value >= 1000 ? (value/1000).toFixed(1) + 'k' : value}</div>
               <div className="text-[9px] opacity-50 uppercase tracking-widest">/{max >= 1000 ? (max/1000).toFixed(1) + 'k' : max}</div>
            </div>
            <div className={`absolute inset-0 rounded-full ${theme.bg} blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}></div>
        </div>
        {label && <div className="text-xs font-bold uppercase tracking-wider mt-3 text-secondary">{label}</div>}
    </div>
  );
};

const LanternProgress: React.FC<{ value: number; max: number; label: string; color: string }> = ({ value, max, label, color }) => {
  const theme = THEME_STYLES[color];
  const fillPercent = Math.min(100, (value / max) * 100);
  
  return (
    <div className="flex flex-col items-center gap-3 group cursor-default transform-gpu">
       <div className="relative w-20 h-28 perspective-1000">
           <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-[2px] h-6 bg-white/20 group-hover:h-5 transition-all duration-500"></div>
           <div className={`absolute top-2 left-0 right-0 bottom-0 rounded-t-full rounded-b-2xl border-2 ${theme.border} bg-black/40 overflow-hidden backdrop-blur-md shadow-xl transition-transform duration-700 group-hover:rotate-3`}>
                <div className={`absolute bottom-0 left-0 right-0 ${theme.bg} transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]`} style={{ height: `${fillPercent}%`, opacity: 0.9 }}>
                     <div className="absolute top-0 inset-x-0 h-4 bg-white/20 blur-sm"></div>
                </div>
                <div className={`absolute inset-0 ${theme.bg} blur-2xl opacity-0 transition-opacity duration-1000`} style={{ opacity: fillPercent > 0 ? fillPercent / 150 : 0 }}></div>
                {fillPercent > 0 && <div className="absolute inset-0 flex items-center justify-center opacity-50 animate-pulse"><Star size={12} className="text-yellow-200 fill-yellow-200" /></div>}
           </div>
           <div className="absolute inset-0 pt-6 flex items-center justify-center pointer-events-none z-10">
               <div className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-bold text-2xl font-mono">{value}</div>
           </div>
       </div>
       <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-secondary group-hover:text-primary transition-colors">{label}</div>
    </div>
  );
};

const ProgressBar: React.FC<{ progress: number; color: string; segments?: number }> = ({ progress, color, segments = 1 }) => {
    const theme = THEME_STYLES[color];
    return (
        <div className="w-full h-3 bg-black/10 dark:bg-white/5 rounded-full overflow-hidden flex gap-[2px]">
            {[...Array(segments)].map((_, i) => {
                const isActive = (i + 1) <= (progress * segments);
                return (
                   <div key={i} className={`flex-1 h-full transition-all duration-500 ${isActive ? theme.bg : 'bg-transparent'} ${isActive ? 'shadow-[0_0_8px_currentColor]' : ''}`}></div>
                );
            })}
            {segments === 1 && (
                 <div className={`h-full ${theme.bg} transition-all duration-1000 ease-out shadow-[0_0_10px_currentColor]`} style={{ width: `${progress * 100}%` }}></div>
            )}
        </div>
    );
};

export const StatsCalendar: React.FC<{ 
  history: DailyStats[]; 
  current: DailyStats; 
  color: string; 
  checkDay: (day: DailyStats) => boolean;
  label?: string 
}> = ({ history, current, color, checkDay, label }) => {
  const theme = THEME_STYLES[color];
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();
  
  const statusMap: Record<number, boolean> = {};
  
  [...history, current].forEach(stat => {
      const d = new Date(stat.date);
      if(d.getMonth() === month && d.getFullYear() === year) {
          statusMap[d.getDate()] = checkDay(stat);
      }
  });

  return (
    <div className="glass-panel p-6 rounded-[2.5rem] animate-slide-up">
       <div className="flex justify-between items-center mb-4">
           <h3 className="text-sm font-bold uppercase tracking-widest text-primary">{now.toLocaleString('default', { month: 'long' })}</h3>
           {label && <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${theme.bgSoft} ${theme.color}`}>{label}</span>}
       </div>
       <div className="grid grid-cols-7 gap-2 text-center mb-2">
          {WEEK_DAYS.map(d => <div key={d} className="text-[10px] font-bold text-secondary opacity-50">{d}</div>)}
       </div>
       <div className="grid grid-cols-7 gap-2">
          {[...Array(firstDay)].map((_, i) => <div key={`empty-${i}`} />)}
          {[...Array(daysInMonth)].map((_, i) => {
              const dayNum = i + 1;
              const isToday = dayNum === now.getDate();
              const isDone = statusMap[dayNum];
              const isFuture = dayNum > now.getDate();
              
              return (
                  <div key={dayNum} className={`aspect-square rounded-xl flex items-center justify-center text-xs font-bold transition-all
                      ${isDone ? theme.bg + ' text-white shadow-md' : 'bg-white/5 text-secondary'}
                      ${isToday ? 'ring-2 ring-white ring-offset-2 ring-offset-black' : ''}
                      ${isFuture ? 'opacity-20' : ''}
                  `}>
                      {dayNum}
                  </div>
              );
          })}
       </div>
    </div>
  );
}

// --- VISUAL BACKGROUNDS ---

export const TabVisuals: React.FC<{ type: string }> = ({ type }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 mix-blend-screen dark:mix-blend-normal">
       
       {type === 'SALAH' && (
         <div className="absolute inset-0 text-emerald-500">
            <div className="absolute bottom-0 left-0 right-0 h-[40vh] opacity-30 bg-[url('https://img.freepik.com/free-vector/mosque-silhouette-sky_1048-2479.jpg')] bg-cover bg-bottom mix-blend-overlay"></div>
            <div className="absolute top-0 left-0 right-0 h-[80vh] bg-gradient-to-b from-emerald-900/60 via-emerald-900/20 to-transparent"></div>
            
            {/* Stars */}
            {[...Array(30)].map((_, i) => (
                <div key={i} className="absolute bg-emerald-200 rounded-full animate-pulse" style={{
                    top: Math.random() * 60 + '%', left: Math.random() * 100 + '%', width: Math.random() * 2 + 'px', height: Math.random() * 2 + 'px', animationDelay: Math.random() * 3 + 's', opacity: 0.6
                }} />
            ))}
            {/* Moon */}
            <div className="absolute top-20 right-10 w-24 h-24 rounded-full border-r-4 border-b-4 border-emerald-300/30 blur-sm rotate-45 animate-[float_10s_ease-in-out_infinite]"></div>
         </div>
       )}

       {type === 'DHIKR' && (
         <div className="absolute inset-0 opacity-70 text-amber-500">
            <div className="absolute top-0 left-0 right-0 h-[80vh] bg-gradient-to-b from-amber-900/50 via-amber-900/20 to-transparent"></div>
            {/* Flowing River of Beads */}
            {[...Array(20)].map((_, i) => (
                 <div key={i} className="absolute bg-amber-300/60 rounded-full blur-[1px] animate-[float_8s_ease-in-out_infinite]" style={{
                     width: Math.random() * 6 + 2 + 'px', 
                     height: Math.random() * 6 + 2 + 'px',
                     left: Math.random() * 100 + '%',
                     top: '110%',
                     animationDelay: Math.random() * 5 + 's',
                     animationDuration: Math.random() * 10 + 10 + 's',
                     opacity: 0.6
                 }} />
            ))}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
         </div>
       )}
       
       {type === 'QURAN' && (
         <div className="absolute inset-0 opacity-50 text-purple-500 flex items-center justify-center">
             <div className="absolute top-0 left-0 right-0 h-[80vh] bg-gradient-to-b from-purple-900/50 via-purple-900/20 to-transparent"></div>
             {/* Rotating Geometric Pattern */}
             <svg className="w-[140vw] h-[140vw] animate-[spin_100s_linear_infinite] opacity-15" viewBox="0 0 100 100">
                 <rect x="25" y="25" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="0.5" transform="rotate(45 50 50)" />
                 <rect x="25" y="25" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="0.5" transform="rotate(0 50 50)" />
                 <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" />
             </svg>
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')] opacity-15 mix-blend-overlay"></div>
         </div>
       )}

       {type === 'RAMADAN' && (
         <div className="absolute inset-0 text-teal-500">
             <div className="absolute top-0 left-0 right-0 h-[80vh] bg-gradient-to-b from-teal-900/60 via-teal-900/20 to-transparent"></div>
             {/* Hanging Lanterns */}
             <div className="absolute -top-10 left-[20%] origin-top animate-[swing_6s_ease-in-out_infinite_alternate] opacity-60">
                 <div className="w-[1px] h-32 bg-teal-300/50 mx-auto"></div>
                 <Tent size={48} className="text-teal-300 drop-shadow-[0_0_15px_rgba(20,184,166,0.8)]" />
             </div>
             <div className="absolute -top-20 right-[25%] origin-top animate-[swing_8s_ease-in-out_infinite_alternate] opacity-40" style={{ animationDelay: '1.5s' }}>
                 <div className="w-[1px] h-48 bg-teal-300/50 mx-auto"></div>
                 <Tent size={32} className="text-teal-300 drop-shadow-[0_0_15px_rgba(20,184,166,0.8)]" />
             </div>
             {/* Fireflies */}
             {[...Array(12)].map((_, i) => (
                 <div key={i} className="absolute bg-teal-200 w-1 h-1 rounded-full animate-float" style={{ top: Math.random()*80+20+'%', left: Math.random()*100+'%', animationDuration: Math.random()*5+5+'s', opacity: 0.8 }} />
             ))}
             {/* Glowing Crescent */}
             <div className="absolute top-32 left-10 w-16 h-16 rounded-full border-l-4 border-t-2 border-teal-200/30 blur-[2px] rotate-[-15deg] opacity-30"></div>
         </div>
       )}

       {type === 'FITNESS' && (
          <div className="absolute inset-0 opacity-60 text-orange-500">
             <div className="absolute top-0 left-0 right-0 h-[80vh] bg-gradient-to-b from-orange-900/50 via-orange-900/20 to-transparent"></div>
             {/* EKG Line */}
             <svg className="absolute top-1/3 w-full h-48 opacity-30" viewBox="0 0 200 50" preserveAspectRatio="none">
                 <path d="M0 25 L20 25 L25 5 L35 45 L40 25 L200 25" stroke="currentColor" strokeWidth="0.8" fill="none" vectorEffect="non-scaling-stroke">
                     <animate attributeName="stroke-dasharray" from="0 200" to="200 0" dur="3s" repeatCount="indefinite" />
                 </path>
             </svg>
             <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          </div>
       )}
       
       {type === 'HYGIENE' && (
          <div className="absolute inset-0 opacity-60 text-cyan-500">
             <div className="absolute top-0 left-0 right-0 h-[80vh] bg-gradient-to-b from-cyan-900/50 via-cyan-900/20 to-transparent"></div>
             {/* Bubbles */}
             {[...Array(15)].map((_, i) => (
                 <div key={i} className="absolute rounded-full border border-cyan-300/40 bg-cyan-400/10 backdrop-blur-sm animate-float" style={{ 
                     width: Math.random()*30+10+'px', 
                     height: Math.random()*30+10+'px', 
                     left: Math.random()*100+'%', 
                     bottom: -50+'px', 
                     animationDuration: Math.random()*10+10+'s', 
                     animationDelay: Math.random()*5+'s' 
                 }} />
             ))}
          </div>
       )}

       {type === 'MDF' && (
          <div className="absolute inset-0 opacity-50 text-rose-500 flex items-center justify-center">
              <div className="absolute top-0 left-0 right-0 h-[80vh] bg-gradient-to-b from-rose-900/50 via-rose-900/20 to-transparent"></div>
              {/* Radar Pulse */}
              <div className="absolute w-[100vw] h-[100vw] border border-rose-500/20 rounded-full opacity-30 animate-[ping_6s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
              <div className="absolute w-[70vw] h-[70vw] border border-rose-500/10 rounded-full opacity-40 animate-[ping_6s_cubic-bezier(0,0,0.2,1)_infinite]" style={{ animationDelay: '3s' }}></div>
              <ShieldCheck size={200} className="opacity-10 animate-pulse-slow text-rose-400" />
          </div>
       )}
       
       {type === 'MEMORIZE' && (
           <div className="absolute inset-0 opacity-60 text-pink-500">
               <div className="absolute top-0 left-0 right-0 h-[80vh] bg-gradient-to-b from-pink-900/50 via-pink-900/20 to-transparent"></div>
               {/* Rising Beams */}
               {[...Array(6)].map((_, i) => (
                   <div key={i} className="absolute bottom-0 left-1/2 origin-bottom bg-gradient-to-t from-pink-500/30 to-transparent w-16 h-[90%]" style={{ transform: `translateX(-50%) rotate(${(i-3)*15}deg)`, filter: 'blur(20px)', opacity: 0.4, animation: `pulse 4s ease-in-out infinite alternate ${i*0.5}s` }}></div>
               ))}
           </div>
       )}
       
       {type === 'SOCIAL' && (
           <div className="absolute inset-0 opacity-40 text-blue-500">
               <div className="absolute top-0 left-0 right-0 h-[80vh] bg-gradient-to-b from-blue-900/50 via-blue-900/20 to-transparent"></div>
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/connected.png')] opacity-15"></div>
               {/* Network Nodes */}
               {[...Array(8)].map((_, i) => (
                  <div key={i} className="absolute w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ top: Math.random()*80+'%', left: Math.random()*100+'%', opacity: 0.7 }}></div>
               ))}
           </div>
       )}
       
       {type === 'SETTINGS' && (
           <div className="absolute inset-0 opacity-30 text-slate-500">
               <div className="absolute top-0 left-0 right-0 h-[80vh] bg-gradient-to-b from-slate-900/50 to-transparent"></div>
               {/* Gears/Abstract */}
               <div className="absolute -right-40 -top-40 w-[500px] h-[500px] border-[60px] border-slate-500/10 rounded-full border-dashed animate-[spin_80s_linear_infinite]"></div>
           </div>
       )}
    </div>
  );
};

interface TabWrapperProps { 
  children: React.ReactNode; 
  subView?: SubView; 
  setSubView?: (v: SubView) => void; 
  themeColor: string; 
  visualType?: string;
}

export const TabWrapper: React.FC<TabWrapperProps> = ({ children, subView, setSubView, themeColor, visualType }) => {
  const theme = THEME_STYLES[themeColor] || THEME_STYLES['emerald'];
  return (
    <div className="pb-32 animate-fade-in px-2 relative min-h-screen overflow-hidden">
       <div className={`absolute top-0 left-0 right-0 h-[90vh] pointer-events-none bg-gradient-to-b ${theme.gradient} to-transparent transition-all duration-1000 opacity-100`} />
       {visualType && <TabVisuals type={visualType} />}
       
       {setSubView && (
        <div className="flex items-center justify-center pt-6 mb-6 relative z-10">
            <div className="flex bg-white/80 dark:bg-black/40 backdrop-blur-xl rounded-full p-1.5 border border-black/5 dark:border-white/10 shadow-xl">
                {['DAILY', 'STATS', 'AWARDS'].map(v => (
                   <button key={v} onClick={() => setSubView(v as SubView)} className={`px-6 py-2.5 rounded-full text-[9px] font-bold tracking-[0.2em] uppercase transition-all duration-300 ${subView === v ? `bg-black text-white dark:bg-white dark:text-black shadow-lg transform scale-105` : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'}`}>{v}</button>
                ))}
            </div>
        </div>
       )}
       <div className="animate-slide-up relative z-10">{children}</div>
    </div>
  );
};

export const RankCard: React.FC<{ stage: { icon: string, label: string }, streak: number, maxStreak?: number, color: string }> = ({ stage, streak, maxStreak, color }) => {
  const theme = THEME_STYLES[color] || THEME_STYLES['emerald'];
  const title = getStreakTitle(streak);
  const nextMilestone = STREAK_MILESTONES.find(m => m > streak) || 3650;
  const progress = Math.min(100, (streak / nextMilestone) * 100);
  const displayMax = Math.max(streak, maxStreak || streak || 0);

  return (
    <div className={`glass-panel p-8 rounded-[3rem] border flex flex-col items-center justify-center text-center relative overflow-hidden ${theme.border} ${theme.shadow} mb-8 group transition-all duration-500 bg-white/40 dark:bg-black/30 backdrop-blur-2xl transform-gpu hover:scale-[1.02]`}>
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-overlay animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
      <div className={`absolute inset-0 bg-gradient-to-b ${theme.gradient} to-transparent opacity-20`}></div>
      
      <div className="relative z-10 w-full flex flex-col items-center">
          <div className="text-8xl mb-6 animate-float drop-shadow-[0_10px_30px_rgba(0,0,0,0.4)] filter contrast-125 cursor-default select-none relative">
              <div className="absolute inset-0 animate-[spin_10s_linear_infinite] opacity-20 blur-xl bg-gradient-to-tr from-white to-transparent rounded-full"></div>
              {stage.icon}
          </div>
          
          <div className="mb-6 flex flex-col items-center gap-2">
             <span className={`px-5 py-2 rounded-full ${theme.bgSoft} border ${theme.border} ${theme.color} text-[10px] font-bold uppercase tracking-[0.25em] backdrop-blur-md shadow-sm flex items-center gap-2 ring-1 ring-white/10`}>
                <Trophy size={12} className="animate-pulse-slow" /> {title}
             </span>
             <span className="text-[9px] text-secondary uppercase tracking-wider opacity-70 font-medium">{stage.label} Stage</span>
          </div>
          
          <div className="flex items-baseline justify-center gap-1 mb-2">
            <h3 className="text-7xl font-light tracking-tighter text-primary drop-shadow-lg tabular-nums">{streak}</h3>
            <span className="text-sm font-bold opacity-50 uppercase tracking-widest transform -translate-y-4 text-primary">Days</span>
          </div>

          <div className="w-full max-w-[260px] mt-4 p-4 rounded-2xl bg-white/40 dark:bg-black/30 border border-black/5 dark:border-white/5 backdrop-blur-md shadow-inner">
             <div className="flex justify-between text-[9px] text-secondary font-bold uppercase tracking-wider mb-2 opacity-90">
                <span>Next: {nextMilestone}d</span>
                <span>{progress.toFixed(0)}%</span>
             </div>
             <div className="w-full h-2 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden backdrop-blur-sm mb-3">
                <div className={`h-full rounded-full ${theme.bg} transition-all duration-1000 ease-out shadow-[0_0_15px_currentColor]`} style={{ width: `${progress}%` }}></div>
             </div>
             <div className="flex justify-between items-center text-[9px] font-mono">
                <span className="text-secondary opacity-70">Current Streak</span>
                <span className={`${theme.color} font-bold flex items-center gap-1`}><Award size={10}/> Max: {displayMax}</span>
             </div>
          </div>
      </div>
    </div>
  );
};

export const AwardsView: React.FC<{ categories: string[]; unlocked: string[] }> = ({ categories, unlocked }) => {
  const [filter, setFilter] = useState<'ALL' | 'UNLOCKED' | 'LOCKED'>('ALL');
  const list = MASTER_ACHIEVEMENTS.filter(a => categories.includes(a.category));
  const unlockedCount = list.filter(a => unlocked.includes(a.id)).length;
  const tiers = { BRONZE: 'text-orange-400', SILVER: 'text-slate-300', GOLD: 'text-yellow-400', PLATINUM: 'text-cyan-400', DIAMOND: 'text-blue-400', LEGEND: 'text-purple-400', ETERNAL: 'text-rose-400', TITAN: 'text-red-500 font-black' };
  
  const filteredList = list.filter(a => {
      const isUnlocked = unlocked.includes(a.id);
      if (filter === 'UNLOCKED') return isUnlocked;
      if (filter === 'LOCKED') return !isUnlocked;
      return true;
  });

  return (
    <div className="space-y-4 pt-2 animate-slide-up pb-10">
      <div className="glass-panel p-6 rounded-[2rem] flex flex-col bg-white/40 dark:bg-white/5 border-white/20 dark:border-white/5 mb-4">
          <div className="flex justify-between items-center mb-4">
            <div><div className="text-xs font-bold uppercase text-secondary tracking-widest mb-1">Collection</div><div className="text-primary text-sm">Mastery Progress</div></div>
            <span className="text-3xl font-mono font-bold text-primary">{unlockedCount} <span className="text-secondary text-sm font-sans opacity-50">/ {list.length}</span></span>
          </div>
          <div className="flex gap-2">
              <button onClick={() => setFilter('ALL')} className={`flex-1 py-2 rounded-xl text-[9px] font-bold uppercase ${filter === 'ALL' ? 'bg-white/10 text-primary' : 'text-secondary hover:bg-white/5'}`}>All</button>
              <button onClick={() => setFilter('UNLOCKED')} className={`flex-1 py-2 rounded-xl text-[9px] font-bold uppercase ${filter === 'UNLOCKED' ? 'bg-emerald-500/20 text-emerald-500' : 'text-secondary hover:bg-white/5'}`}>Unlocked</button>
              <button onClick={() => setFilter('LOCKED')} className={`flex-1 py-2 rounded-xl text-[9px] font-bold uppercase ${filter === 'LOCKED' ? 'bg-white/10 text-primary' : 'text-secondary hover:bg-white/5'}`}>Locked</button>
          </div>
      </div>
      
      <div className="space-y-3">
        {filteredList.map((ach, i) => {
            const isUnlocked = unlocked.includes(ach.id);
            const isTitan = ach.tier === 'TITAN';
            return (
            <div key={ach.id} className={`p-5 rounded-[2rem] border flex items-center gap-5 transition-all duration-500 relative overflow-hidden group transform-gpu ${isUnlocked ? (isTitan ? 'glass-panel border-red-500/30 bg-red-900/10 shadow-xl shadow-red-900/20' : 'glass-panel border-emerald-500/20 bg-emerald-500/5 shadow-lg') : 'glass-panel opacity-50 grayscale hover:opacity-80 hover:grayscale-0'}`} style={{ animationDelay: `${Math.min(i * 50, 500)}ms` }}>
                {isUnlocked && <div className={`absolute inset-0 bg-gradient-to-r ${isTitan ? 'from-red-500/10' : 'from-emerald-500/10'} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}></div>}
                <div className={`text-3xl w-14 h-14 rounded-full flex items-center justify-center bg-white/10 dark:bg-black/20 border border-black/5 dark:border-white/5 ${isUnlocked ? 'animate-bounce' : ''}`}>{ach.icon}</div>
                <div className="flex-1 relative z-10">
                    <div className="flex justify-between items-start">
                        <h4 className={`font-bold text-sm ${isUnlocked ? 'text-primary' : 'text-gray-500'}`}>{ach.title}</h4>
                        {isUnlocked && <div className={`${isTitan ? 'bg-red-500/20' : 'bg-emerald-500/20'} p-1 rounded-full`}><CheckCircle2 size={12} className={isTitan ? 'text-red-500' : 'text-emerald-500'} /></div>}
                    </div>
                    <p className="text-[10px] text-secondary mt-1 leading-relaxed">{ach.description}</p>
                    <div className={`text-[8px] font-bold uppercase tracking-widest mt-2 ${tiers[ach.tier] || 'text-gray-500'}`}>{ach.tier}</div>
                </div>
            </div>
            );
        })}
      </div>
    </div>
  );
};

export const TabDhikr: React.FC<{ state: AppState; updateDhikr: (t: string, a: number) => void; addCustomDhikr: (t: string, n: number) => void }> = ({ state, updateDhikr, addCustomDhikr }) => {
  const [subView, setSubView] = useState<SubView>('DAILY');
  const [showAdd, setShowAdd] = useState(false);
  const [newDhikrName, setNewDhikrName] = useState('');
  const [newDhikrTarget, setNewDhikrTarget] = useState(100);
  
  const renderDaily = () => (
    <div className="space-y-6 animate-slide-up">
      <RankCard stage={getGrowthStage('DHIKR', state.global.streaks.dhikr)} streak={state.global.streaks.dhikr} maxStreak={state.global.streaks.maxDhikr} color="amber" />
      
      <div className="grid grid-cols-1 gap-4">
        <div onClick={() => updateDhikr('astaghfirullah', 100)} className="glass-panel p-8 rounded-[2.5rem] border-amber-500/20 active:scale-[0.99] transition-all cursor-pointer hover:shadow-amber-500/20 hover:shadow-lg flex flex-col items-center gap-4 group relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent"></div>
           <h3 className="text-3xl font-serif text-amber-600 dark:text-amber-100 group-hover:text-amber-500 leading-relaxed drop-shadow-sm" dir="rtl">{DHIKR_LABELS.astaghfirullah}</h3>
           <CircularProgress value={state.daily.dhikrAstaghfirullah} max={2100} color="amber" icon={<Orbit size={14}/>} label="Istighfar" />
           <div className="text-[9px] text-secondary uppercase tracking-widest opacity-50 mt-2">Tap to Add +100</div>
        </div>
        <div onClick={() => updateDhikr('rabbiInni', 100)} className="glass-panel p-8 rounded-[2.5rem] border-amber-500/20 active:scale-[0.99] transition-all cursor-pointer hover:shadow-amber-500/20 hover:shadow-lg flex flex-col items-center gap-4 group relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent"></div>
           <h3 className="text-2xl font-serif text-amber-600 dark:text-amber-100 group-hover:text-amber-500 leading-relaxed text-center drop-shadow-sm" dir="rtl">{DHIKR_LABELS.rabbiInni}</h3>
           <CircularProgress value={state.daily.dhikrRabbiInni} max={2100} color="amber" icon={<Lightbulb size={14}/>} label="Dua of Musa (AS)" />
           <div className="text-[9px] text-secondary uppercase tracking-widest opacity-50 mt-2">Tap to Add +100</div>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex justify-between items-center px-2 mb-4">
             <h3 className="text-xs font-bold uppercase tracking-widest text-secondary">Custom Dhikr</h3>
             <button onClick={() => setShowAdd(!showAdd)} className="text-amber-600 dark:text-amber-500 hover:text-amber-400 text-xs font-bold flex items-center gap-1 transition-colors">+ Add New</button>
        </div>
        
        {showAdd && (
            <div className="glass-panel p-6 rounded-[2rem] mb-4 animate-slide-up border-amber-500/20">
                <input type="text" placeholder="Dhikr Name" className="w-full bg-white/50 dark:bg-black/30 border border-black/10 dark:border-white/10 rounded-xl p-3 text-sm mb-3 text-primary focus:border-amber-500 outline-none transition-colors" value={newDhikrName} onChange={e => setNewDhikrName(e.target.value)} />
                <input type="number" placeholder="Target" className="w-full bg-white/50 dark:bg-black/30 border border-black/10 dark:border-white/10 rounded-xl p-3 text-sm mb-3 text-primary focus:border-amber-500 outline-none transition-colors" value={newDhikrTarget} onChange={e => setNewDhikrTarget(parseInt(e.target.value))} />
                <button onClick={() => { if(newDhikrName) { addCustomDhikr(newDhikrName, newDhikrTarget); setShowAdd(false); setNewDhikrName(''); } }} className="w-full py-3 bg-amber-500 hover:bg-amber-600 rounded-xl text-white font-bold text-xs uppercase transition-colors shadow-lg">Create</button>
            </div>
        )}

        <div className="space-y-3">
            {state.daily.customDhikr.map(d => (
                <div key={d.id} onClick={() => updateDhikr(d.id, 1)} className="glass-panel p-6 rounded-[2.5rem] border-amber-500/10 relative overflow-hidden active:scale-[0.98] transition-all cursor-pointer group hover:border-amber-500/30 hover:bg-amber-500/5">
                     <div className="relative z-10 flex justify-between items-center">
                        <div>
                            <h3 className="text-lg font-serif text-amber-900 dark:text-amber-100">{d.text}</h3>
                            <p className="text-[10px] text-amber-600/60 dark:text-amber-500/60 font-medium uppercase tracking-wider">Target: {d.target}</p>
                        </div>
                        <div className="flex items-center gap-4">
                             <CircularProgress value={d.count} max={d.target} color="amber" size={16} />
                        </div>
                     </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );

  return (
    <TabWrapper themeColor="amber" subView={subView} setSubView={setSubView} visualType="DHIKR">
      {subView === 'DAILY' && renderDaily()}
      {subView === 'STATS' && <StatsCalendar history={state.global.history} current={state.daily} color="amber" checkDay={(d) => (d.dhikrAstaghfirullah >= 2100 && d.dhikrRabbiInni >= 2100)} label="Target Met" />}
      {subView === 'AWARDS' && <AwardsView categories={['DHIKR']} unlocked={state.global.unlockedAchievements} />}
    </TabWrapper>
  );
};

export const TabMDF: React.FC<{ state: AppState; resetRelapse: () => void }> = ({ state, resetRelapse }) => {
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });
  const [subView, setSubView] = useState<SubView>('DAILY');

  useEffect(() => {
      const timer = setInterval(() => {
          const start = state.global.lastRelapseDate || Date.now();
          const diff = Date.now() - start;
          const d = Math.floor(diff / (1000 * 60 * 60 * 24));
          const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
          const m = Math.floor((diff / 1000 / 60) % 60);
          const s = Math.floor((diff / 1000) % 60);
          setTimeLeft({ d, h, m, s });
      }, 1000);
      return () => clearInterval(timer);
  }, [state.global.lastRelapseDate]);

  const renderDaily = () => (
    <div className="space-y-8 pb-10 animate-slide-up">
       <RankCard stage={getGrowthStage('MDF', state.global.streaks.mdf)} streak={state.global.streaks.mdf} maxStreak={state.global.streaks.maxMdf} color="rose" />

       <div className="relative w-72 h-72 mx-auto flex items-center justify-center mb-8">
           <div className="absolute inset-0 border-[6px] border-rose-500/10 rounded-full animate-[spin_20s_linear_infinite]"></div>
           <div className="absolute inset-4 border-2 border-rose-500/30 rounded-full border-dashed animate-[spin_15s_linear_infinite_reverse]"></div>
           <div className="absolute inset-0 rounded-full bg-rose-500/5 blur-3xl animate-pulse-slow"></div>
           
           <div className="relative z-10 text-center flex flex-col items-center bg-white/10 dark:bg-black/40 backdrop-blur-md p-10 rounded-full border border-white/5 shadow-2xl shadow-rose-900/20">
               <ShieldCheck size={32} className="text-rose-500 mb-2 animate-pulse-slow" />
               <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-rose-400 mb-2">Time Pure</div>
               <div className="text-5xl font-bold text-primary tracking-tighter font-mono">
                  {String(timeLeft.h).padStart(2,'0')}:{String(timeLeft.m).padStart(2,'0')}
               </div>
               <div className="text-sm text-rose-400/60 mt-1 font-mono">:{String(timeLeft.s).padStart(2,'0')}</div>
               <div className="mt-4 text-xs font-bold bg-rose-500/10 px-4 py-1 rounded-full border border-rose-500/20 text-rose-500 shadow-lg">{timeLeft.d} Days Streak</div>
           </div>
       </div>

       <div className="flex justify-center">
            <button onClick={() => { if(confirm("Reset your streak? This cannot be undone.")) resetRelapse(); }} className="group relative px-8 py-5 bg-white/5 dark:bg-black/40 border border-rose-500/30 rounded-2xl overflow-hidden active:scale-95 transition-all w-full shadow-lg hover:shadow-rose-500/20">
                <div className="absolute inset-0 bg-rose-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <span className="relative text-rose-500 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2"><AlertTriangle size={14} /> Emergency Relapse</span>
            </button>
       </div>
    </div>
  );

  return (
    <TabWrapper themeColor="rose" subView={subView} setSubView={setSubView} visualType="MDF">
       {subView === 'DAILY' && renderDaily()}
       {subView === 'STATS' && <StatsCalendar history={state.global.history} current={state.daily} color="rose" checkDay={(d) => !d.habits.failedToday} label="Clean Days" />}
       {subView === 'AWARDS' && <AwardsView categories={['MDF']} unlocked={state.global.unlockedAchievements} />}
    </TabWrapper>
  );
};

export const TabQuran: React.FC<{ state: AppState; updatePart: (p: string) => void; updateSurah: (s: string) => void }> = ({ state, updatePart, updateSurah }) => {
  const [subView, setSubView] = useState<SubView>('DAILY');
  const isFriday = new Date().getDay() === 5;
  
  const renderDaily = () => (
    <div className="space-y-6 animate-slide-up">
        <RankCard stage={getGrowthStage('QURAN', state.global.streaks.quranSurah)} streak={state.global.streaks.quranSurah} maxStreak={state.global.streaks.maxQuran} color="purple" />

        <div className="relative h-80 w-full flex items-center justify-center my-4 perspective-1000">
             <div className="absolute w-64 h-64 rounded-full border-2 border-purple-500/20 border-dashed animate-[spin_60s_linear_infinite]"></div>
             <div className="absolute w-56 h-56 rounded-full border border-purple-400/10 animate-[spin_40s_linear_infinite_reverse]"></div>
             
             <div className="text-center z-10 bg-white/80 dark:bg-black/60 backdrop-blur-md p-10 rounded-full border border-purple-500/30 shadow-2xl shadow-purple-500/10 transform-gpu hover:scale-105 transition-transform duration-500">
                 <div className="text-[10px] uppercase tracking-widest text-purple-400 mb-1">Current Parah</div>
                 <div className="text-6xl font-bold text-primary mb-2 tabular-nums">{state.global.currentParah}</div>
                 <div className="text-xl font-serif text-purple-600 dark:text-purple-300 opacity-80" dir="rtl">{PARAH_NAMES[state.global.currentParah - 1]}</div>
             </div>
             
             <div className="absolute w-72 h-72 animate-[spin_20s_linear_infinite] pointer-events-none">
                 <div className={`w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.8)] absolute top-0 left-1/2 -translate-x-1/2 transition-all duration-500 ${state.daily.quranParts.rub ? 'scale-125 opacity-100' : 'scale-50 opacity-30'}`}></div>
             </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
            {['rub', 'nisf', 'thalatha', 'kamil'].map((part, i) => (
                <button key={part} onClick={() => updatePart(part)} className={`p-5 rounded-2xl border transition-all shadow-sm flex flex-col items-center ${state.daily.quranParts[part as keyof typeof state.daily.quranParts] ? 'bg-purple-500 border-purple-400 text-white shadow-lg shadow-purple-500/30' : 'glass-panel hover:bg-white/10 dark:hover:bg-white/5'}`}>
                    <div className="text-xl font-serif mb-1 text-primary" dir="rtl">{QURAN_PART_LABELS[part as keyof typeof QURAN_PART_LABELS]}</div>
                    <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">{state.daily.quranParts[part as keyof typeof state.daily.quranParts] ? 'Completed' : 'Mark Read'}</div>
                </button>
            ))}
        </div>
        
        <div className="glass-panel p-6 rounded-[2rem] border-purple-500/20 mt-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-4">Daily Protection</h3>
            <div className="space-y-3">
                <div onClick={() => updateSurah('mulk')} className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all hover:scale-[1.01] ${state.daily.surahMulk ? 'bg-purple-500/20 border-purple-500/50' : 'bg-black/5 dark:bg-black/20 border-black/5 dark:border-white/5'}`}>
                    <span className="font-bold text-sm text-primary">Surah Al-Mulk</span>
                    {state.daily.surahMulk && <CheckCircle2 size={16} className="text-purple-500" />}
                </div>
                <div onClick={() => updateSurah('baqarah')} className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all hover:scale-[1.01] ${state.daily.surahBaqarah ? 'bg-purple-500/20 border-purple-500/50' : 'bg-black/5 dark:bg-black/20 border-black/5 dark:border-white/5'}`}>
                    <span className="font-bold text-sm text-primary">Last 2 Ayats Baqarah</span>
                    {state.daily.surahBaqarah && <CheckCircle2 size={16} className="text-purple-500" />}
                </div>
                {isFriday && (
                    <div onClick={() => updateSurah('kahf')} className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all hover:scale-[1.01] ring-2 ring-amber-500/20 ${state.daily.surahKahf ? 'bg-amber-500/20 border-amber-500/50' : 'bg-black/5 dark:bg-black/20 border-black/5 dark:border-white/5'}`}>
                        <div className="flex items-center gap-2">
                            <Star size={14} className="text-amber-500 fill-amber-500 animate-pulse" />
                            <span className="font-bold text-sm text-primary">Surah Al-Kahf</span>
                        </div>
                        {state.daily.surahKahf && <CheckCircle2 size={16} className="text-amber-500" />}
                    </div>
                )}
            </div>
        </div>
    </div>
  );

  return (
    <TabWrapper themeColor="purple" subView={subView} setSubView={setSubView} visualType="QURAN">
       {subView === 'DAILY' && renderDaily()}
       {subView === 'STATS' && <StatsCalendar history={state.global.history} current={state.daily} color="purple" checkDay={(d) => Object.values(d.quranParts).some(Boolean)} label="Days Read" />}
       {subView === 'AWARDS' && <AwardsView categories={['QURAN']} unlocked={state.global.unlockedAchievements} />}
    </TabWrapper>
  );
};

export const TabMemorize: React.FC<{ state: AppState; markLearned: () => void }> = ({ state, markLearned }) => {
  const [subView, setSubView] = useState<SubView>('DAILY');
  const allContent = React.useMemo(() => MEMORIZE_CONTENT.flat(), []);
  const currentIdx = state.global.memorizeProgress || 0;
  const currentDua = allContent[currentIdx] || allContent[0];

  const renderDaily = () => (
    <div className="space-y-6 pb-10 animate-slide-up">
        <div className="relative glass-panel p-8 rounded-[3rem] border-pink-500/20 text-center overflow-hidden group shadow-2xl shadow-pink-900/10">
            <div className="absolute inset-0 bg-pink-500/5 group-hover:bg-pink-500/10 transition-colors"></div>
            <div className="absolute -bottom-10 -right-10 opacity-10 text-pink-500"><Brain size={150} /></div>
            <div className="relative z-10">
                <div className="inline-block px-5 py-1.5 rounded-full bg-pink-500/10 text-pink-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-8 border border-pink-500/20 shadow-sm">
                    Week {currentDua.week} Challenge
                </div>
                <h2 className="text-3xl font-serif leading-relaxed text-primary mb-8 drop-shadow-sm" dir="rtl">{currentDua.arabic}</h2>
                <p className="text-sm text-pink-600/80 dark:text-pink-200/80 italic leading-relaxed font-medium max-w-xs mx-auto">{currentDua.english}</p>
            </div>
        </div>
        
        <button onClick={markLearned} className="w-full py-5 bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl font-bold text-white shadow-lg shadow-pink-500/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 uppercase tracking-wider text-xs">
            <Brain size={16} /> Mark as Learned
        </button>
        
        <div className="text-center px-4">
             <div className="flex justify-between text-[10px] text-secondary uppercase tracking-widest mb-2 font-bold">
                <span>Progress</span>
                <span>{Math.round((currentIdx / allContent.length) * 100)}%</span>
             </div>
             <div className="w-full h-2 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                 <div className="h-full bg-pink-500 transition-all duration-1000 ease-out shadow-[0_0_10px_currentColor]" style={{ width: `${(currentIdx / allContent.length) * 100}%` }}></div>
             </div>
        </div>
    </div>
  );

  return (
    <TabWrapper themeColor="pink" subView={subView} setSubView={setSubView} visualType="MEMORIZE">
        {subView === 'DAILY' && renderDaily()}
        {subView === 'STATS' && <div className="text-center text-secondary py-20">Stats Coming Soon</div>}
        {subView === 'AWARDS' && <AwardsView categories={['MEMORIZE']} unlocked={state.global.unlockedAchievements} />}
    </TabWrapper>
  );
};

export const TabRamadan: React.FC<{ state: AppState; updateRamadanStat: (k: string, v: number) => void }> = ({ state, updateRamadanStat }) => {
  const [subView, setSubView] = useState<SubView>('DAILY');
  const stats = state.global.ramadanStats || { fastsDone: 0, taraweehPrayed: 0, quranKhatams: 0 };
  
  const renderDaily = () => (
    <div className="space-y-8 pb-10 animate-slide-up">
        <RankCard stage={getGrowthStage('RAMADAN', state.global.streaks.ramadan)} streak={state.global.streaks.ramadan} maxStreak={state.global.streaks.maxRamadan} color="teal" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center py-6">
            <div className="flex flex-col items-center gap-2">
                 <LanternProgress value={stats.fastsDone} max={30} label="Fasts" color="teal" />
                 <div className="flex gap-2 mt-2 bg-black/20 p-1 rounded-full backdrop-blur-md">
                    <button onClick={() => updateRamadanStat('fastsDone', -1)} className="w-8 h-8 rounded-full bg-white/5 text-white hover:bg-white/10 flex items-center justify-center transition-colors"><Minus size={14}/></button>
                    <button onClick={() => updateRamadanStat('fastsDone', 1)} className="w-8 h-8 rounded-full bg-teal-500 text-black hover:bg-teal-400 flex items-center justify-center transition-colors shadow-[0_0_10px_rgba(20,184,166,0.5)]"><Plus size={14}/></button>
                 </div>
            </div>
            <div className="flex flex-col items-center gap-2">
                 <LanternProgress value={stats.taraweehPrayed} max={30} label="Taraweeh" color="teal" />
                 <div className="flex gap-2 mt-2 bg-black/20 p-1 rounded-full backdrop-blur-md">
                    <button onClick={() => updateRamadanStat('taraweehPrayed', -1)} className="w-8 h-8 rounded-full bg-white/5 text-white hover:bg-white/10 flex items-center justify-center transition-colors"><Minus size={14}/></button>
                    <button onClick={() => updateRamadanStat('taraweehPrayed', 1)} className="w-8 h-8 rounded-full bg-teal-500 text-black hover:bg-teal-400 flex items-center justify-center transition-colors shadow-[0_0_10px_rgba(20,184,166,0.5)]"><Plus size={14}/></button>
                 </div>
            </div>
            <div className="flex flex-col items-center gap-4 mt-4">
                 <CircularProgress value={stats.quranKhatams} max={5} color="teal" size={24} icon={<BookOpen size={16} />} />
                 <div className="flex gap-2 mt-1 bg-black/20 p-1 rounded-full backdrop-blur-md">
                    <button onClick={() => updateRamadanStat('quranKhatams', -1)} className="w-8 h-8 rounded-full bg-white/5 text-white hover:bg-white/10 flex items-center justify-center transition-colors"><Minus size={14}/></button>
                    <button onClick={() => updateRamadanStat('quranKhatams', 1)} className="w-8 h-8 rounded-full bg-teal-500 text-black hover:bg-teal-400 flex items-center justify-center transition-colors shadow-[0_0_10px_rgba(20,184,166,0.5)]"><Plus size={14}/></button>
                 </div>
                 <div className="text-[10px] font-bold uppercase text-secondary tracking-wider">Khatams</div>
            </div>
        </div>
        
        <div className="glass-panel p-6 rounded-[2.5rem] border-teal-500/20 mt-6 bg-gradient-to-br from-teal-500/5 to-transparent">
            <h3 className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-300 mb-4 flex items-center gap-2"><Lightbulb size={14} /> Professional Recommendations</h3>
            <div className="space-y-3 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                {RAMADAN_TIPS.map((tip, i) => (
                    <div key={i} className="p-4 bg-white/40 dark:bg-black/20 rounded-2xl border border-black/5 dark:border-white/5 hover:border-teal-500/30 transition-all hover:bg-white/60 dark:hover:bg-black/40">
                        <h4 className="font-bold text-teal-800 dark:text-teal-100 text-sm mb-1">{tip.title}</h4>
                        <p className="text-xs text-secondary leading-relaxed">{tip.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );

  return (
    <TabWrapper themeColor="teal" subView={subView} setSubView={setSubView} visualType="RAMADAN">
        {subView === 'DAILY' && renderDaily()}
        {subView === 'STATS' && <StatsCalendar history={state.global.history} current={state.daily} color="teal" checkDay={(d) => d.ramadan.suhoor && d.ramadan.iftar} label="Fasted" />}
        {subView === 'AWARDS' && <AwardsView categories={['RAMADAN']} unlocked={state.global.unlockedAchievements} />}
    </TabWrapper>
  );
};

export const TabHygiene: React.FC<{ state: AppState; updateHygiene: (k: any) => void; updateHabit: (h: string) => void }> = ({ state, updateHygiene, updateHabit }) => {
   const [subView, setSubView] = useState<SubView>('DAILY');

   const renderDaily = () => (
     <div className="space-y-6 pb-10 animate-slide-up">
        <RankCard stage={getGrowthStage('HYGIENE', state.global.streaks.hygiene)} streak={state.global.streaks.hygiene} maxStreak={state.global.streaks.maxHygiene} color="cyan" />
        
        <div className="grid grid-cols-2 gap-4 items-center">
             <div className="glass-panel p-6 rounded-[2.5rem] border-cyan-500/20 flex flex-col items-center text-center gap-4">
                 <h3 className="text-[10px] font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-300">Hydration</h3>
                 <LiquidGauge value={state.daily.hygiene.waterGlasses} max={8} color="cyan" />
                 <div className="flex gap-1 justify-center flex-wrap max-w-[120px]">
                     {[...Array(8)].map((_, i) => (
                         <div key={i} onClick={() => updateHygiene('water')} className={`w-2.5 h-2.5 rounded-full cursor-pointer transition-all duration-300 ${i < state.daily.hygiene.waterGlasses ? 'bg-cyan-400 shadow-[0_0_5px_rgba(34,211,238,0.8)] scale-110' : 'bg-white/10'}`} />
                     ))}
                 </div>
                 <button onClick={() => updateHygiene('reset_water')} className="text-[9px] text-secondary hover:text-cyan-400 transition-colors uppercase font-bold tracking-wider">Reset</button>
             </div>

             <div className="space-y-3">
                <div className="glass-panel p-5 rounded-[2rem] border-cyan-500/20 relative overflow-hidden">
                    <div className="flex justify-between items-center mb-3"><h4 className="text-[10px] font-bold uppercase text-cyan-400">Smoking</h4><span className="text-xs font-mono opacity-60">{state.daily.habits.smokingCount}/2</span></div>
                    <ProgressBar progress={state.daily.habits.smokingCount / 2} color={state.daily.habits.smokingCount > 2 ? 'rose' : 'cyan'} />
                    <button onClick={() => updateHabit('smoking')} className="mt-3 w-full py-2 bg-cyan-500/10 rounded-xl text-[9px] font-bold uppercase hover:bg-cyan-500/20 transition-colors text-cyan-500 tracking-widest">+ Count</button>
                </div>
                <div className="glass-panel p-5 rounded-[2rem] border-cyan-500/20 relative overflow-hidden">
                    <div className="flex justify-between items-center mb-3"><h4 className="text-[10px] font-bold uppercase text-cyan-400">Nicotine</h4><span className="text-xs font-mono opacity-60">{state.daily.habits.nicotineCount}/3</span></div>
                    <ProgressBar progress={state.daily.habits.nicotineCount / 3} color={state.daily.habits.nicotineCount > 3 ? 'rose' : 'cyan'} />
                    <button onClick={() => updateHabit('nicotine')} className="mt-3 w-full py-2 bg-cyan-500/10 rounded-xl text-[9px] font-bold uppercase hover:bg-cyan-500/20 transition-colors text-cyan-500 tracking-widest">+ Count</button>
                </div>
             </div>
        </div>

        <div className="glass-panel p-6 rounded-[2.5rem] border-cyan-500/20">
            <h3 className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-300 mb-4">Hygiene Protocol</h3>
            <div className="space-y-3">
                <div onClick={() => updateHygiene('shower')} className={`p-4 rounded-2xl border flex justify-between items-center cursor-pointer transition-all hover:scale-[1.01] ${state.daily.hygiene.shower ? 'bg-cyan-500/20 border-cyan-500/50 shadow-lg shadow-cyan-500/10' : 'bg-black/5 dark:bg-black/20 border-black/5 dark:border-white/5'}`}>
                    <span className="text-sm font-bold text-primary">Cold Shower</span>
                    {state.daily.hygiene.shower && <CheckCircle2 size={16} className="text-cyan-500" />}
                </div>
                <div onClick={() => updateHygiene('brush')} className={`p-4 rounded-2xl border flex justify-between items-center cursor-pointer transition-all hover:scale-[1.01] ${state.daily.hygiene.brush ? 'bg-cyan-500/20 border-cyan-500/50 shadow-lg shadow-cyan-500/10' : 'bg-black/5 dark:bg-black/20 border-black/5 dark:border-white/5'}`}>
                    <span className="text-sm font-bold text-primary">Dental Care</span>
                    {state.daily.hygiene.brush && <CheckCircle2 size={16} className="text-cyan-500" />}
                </div>
            </div>
        </div>
     </div>
   );

   return (
     <TabWrapper themeColor="cyan" subView={subView} setSubView={setSubView} visualType="HYGIENE">
        {subView === 'DAILY' && renderDaily()}
        {subView === 'STATS' && <StatsCalendar history={state.global.history} current={state.daily} color="cyan" checkDay={(d) => d.hygiene.waterGlasses >= 5} label="Hydrated Days" />}
        {subView === 'AWARDS' && <AwardsView categories={['HYGIENE', 'HABITS']} unlocked={state.global.unlockedAchievements} />}
     </TabWrapper>
   );
};

export const TabFitness: React.FC<{ state: AppState; updateType: (t: string) => void }> = ({ state, updateType }) => {
  const [subView, setSubView] = useState<SubView>('DAILY');
  const dayIndex = new Date().getDay();
  const todayWorkout = FITNESS_SCHEDULE[dayIndex];
  
  const weekHistory = state.global.history?.slice(-7).map(d => d.fitness.type !== 'Rest') || [];
  const totalWorkouts = weekHistory.filter(Boolean).length;

  const renderDaily = () => (
    <div className="space-y-6 animate-slide-up">
        <RankCard stage={getGrowthStage('FITNESS', state.global.streaks.fitness)} streak={state.global.streaks.fitness} maxStreak={state.global.streaks.maxFitness} color="orange" />
        
        <div className="glass-panel p-8 rounded-[2.5rem] border-orange-500/20 text-center shadow-xl bg-gradient-to-br from-orange-500/10 to-transparent">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-orange-600 dark:text-orange-400 mb-2">Today's Protocol</h3>
            <h2 className="text-4xl font-bold text-primary mb-8">{todayWorkout}</h2>
            <div className="grid grid-cols-2 gap-4">
               <button onClick={() => updateType('Active')} className={`py-4 rounded-2xl border font-bold text-xs uppercase transition-all shadow-lg ${state.daily.fitness.type !== 'Rest' ? 'bg-orange-600 border-orange-500 text-white scale-105' : 'bg-white/5 dark:bg-white/5 border-black/10 dark:border-white/10 text-secondary hover:bg-white/10 hover:border-orange-500/30'}`}>Workout Done</button>
               <button onClick={() => updateType('Rest')} className={`py-4 rounded-2xl border font-bold text-xs uppercase transition-all ${state.daily.fitness.type === 'Rest' ? 'bg-white/20 dark:bg-white/10 border-white/20 text-primary shadow-inner' : 'bg-white/5 dark:bg-white/5 border-black/10 dark:border-white/10 text-secondary hover:bg-white/10'}`}>Rest Day</button>
            </div>
        </div>

        <div className="glass-panel p-6 rounded-[2rem] border-orange-500/10">
             <h4 className="text-xs font-bold uppercase text-secondary mb-4 tracking-widest">Consistency Tracker</h4>
             <ProgressBar progress={(totalWorkouts + (state.daily.fitness.type !== 'Rest' ? 1 : 0)) / 7} color="orange" segments={7} />
             <div className="flex justify-between text-[10px] text-secondary uppercase tracking-widest mt-3 font-bold">
                 <span>7 Days</span>
                 <span>{totalWorkouts + (state.daily.fitness.type !== 'Rest' ? 1 : 0)} Sessions</span>
             </div>
        </div>
    </div>
  );

  return (
    <TabWrapper themeColor="orange" subView={subView} setSubView={setSubView} visualType="FITNESS">
      {subView === 'DAILY' && renderDaily()}
      {subView === 'STATS' && <StatsCalendar history={state.global.history} current={state.daily} color="orange" checkDay={(d) => d.fitness.type !== 'Rest'} label="Active Days" />}
      {subView === 'AWARDS' && <AwardsView categories={['FITNESS']} unlocked={state.global.unlockedAchievements} />}
    </TabWrapper>
  );
};

export const TabSocial: React.FC<{ state: AppState }> = ({ state }) => {
  const sortedFriends = [...state.global.friends].sort((a, b) => b.streak - a.streak);
  
  return (
    <TabWrapper themeColor="blue" visualType="SOCIAL">
       <div className="space-y-6 mt-4 animate-slide-up">
           <div className="glass-panel p-6 rounded-[2.5rem] border-blue-500/20 flex justify-between items-center bg-gradient-to-r from-blue-500/10 to-transparent">
               <div>
                  <h2 className="text-2xl font-light text-primary">Social Circle</h2>
                  <p className="text-xs text-blue-600 dark:text-blue-300 uppercase tracking-wider mt-1">Connected Believers</p>
               </div>
               <button className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/30 hover:scale-105 transition-transform"><UserPlus size={20}/></button>
           </div>

           <div className="space-y-3">
              {sortedFriends.map((f, i) => (
                 <div key={f.id} className="glass-panel p-5 rounded-3xl border-white/10 flex items-center gap-4 relative overflow-hidden hover:border-blue-500/30 transition-all hover:translate-x-1 transform-gpu">
                     <div className={`absolute left-0 top-0 bottom-0 w-1 ${f.status === 'online' ? 'bg-emerald-500' : 'bg-gray-500'}`}></div>
                     <div className={`w-12 h-12 rounded-full ${f.avatarColor} flex items-center justify-center font-bold text-white text-lg shadow-inner relative`}>
                        {f.name.charAt(0)}
                        {f.status === 'online' && <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-white dark:border-black"></div>}
                     </div>
                     <div className="flex-1">
                        <div className="flex justify-between">
                           <h3 className="font-bold text-primary">{f.name}</h3>
                           <span className="text-xs font-bold text-amber-500 flex items-center gap-1"><Flame size={10} fill="currentColor"/> {f.streak}</span>
                        </div>
                        <div className="flex justify-between mt-1">
                           <span className="text-[10px] text-secondary uppercase tracking-wider">{f.lastActive}</span>
                           {f.fajrDone && <span className="text-[10px] text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">Fajr Done</span>}
                        </div>
                     </div>
                 </div>
              ))}
           </div>
       </div>
    </TabWrapper>
  );
};

export const TabSettings: React.FC<{ state: AppState; setTheme: (t: any) => void; toggleRamadan: () => void; exportData: () => void; importData: () => void; enterWidgetMode: () => void; onBack: () => void; buyFreeze: () => void; resetApp: () => void; requestNotify: () => void }> = ({ state, setTheme, toggleRamadan, exportData, importData, enterWidgetMode, onBack, buyFreeze, resetApp, requestNotify }) => {
  const [showGuide, setShowGuide] = useState(false);

  return (
     <TabWrapper themeColor="gray" visualType="SETTINGS">
        {showGuide && (
            <div className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-md p-6 overflow-y-auto animate-fade-in">
                <div className="max-w-md mx-auto bg-slate-900 border border-slate-700 rounded-3xl p-6 relative shadow-2xl">
                    <button onClick={() => setShowGuide(false)} className="absolute top-4 right-4 text-slate-400 hover:text-white"><X size={24}/></button>
                    <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-2"><Terminal size={24} className="text-emerald-500"/> Developer Guide</h2>
                    
                    <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
                        <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                            <h3 className="text-emerald-400 font-bold mb-2 uppercase tracking-widest text-xs">1. Adding Achievements</h3>
                            <p>Open <code>constants.ts</code>. Scroll to the <code>MASTER_ACHIEVEMENTS</code> array.</p>
                            <p className="mt-2 text-xs font-mono bg-black/50 p-2 rounded border border-slate-700">
                                defineAchievement('unique_id', 'Title', 'Desc', 'GOLD', 'SALAH', '🏆', 'COUNT', 10)
                            </p>
                        </div>

                        <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                            <h3 className="text-blue-400 font-bold mb-2 uppercase tracking-widest text-xs">2. Customizing Tiles</h3>
                            <p>To change names or icons, edit the specific Tab Component in <code>components/SimpleTabs.tsx</code>.</p>
                            <p className="mt-2">For example, search for <code>TabSalah</code> to rename prayers or change icons.</p>
                        </div>

                        <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                            <h3 className="text-rose-400 font-bold mb-2 uppercase tracking-widest text-xs">3. Notifications</h3>
                            <p><strong>Important:</strong> As a PWA (Web App), notifications work differently than WhatsApp.</p>
                            <ul className="list-disc pl-4 mt-2 space-y-1 opacity-80">
                                <li>On <strong>Android</strong>, they work well in the background if installed.</li>
                                <li>On <strong>iOS</strong>, the app often needs to be open in the background for the timer to trigger the alert.</li>
                                <li>We use a "Local Loop" strategy to check times every minute while the app is active.</li>
                            </ul>
                        </div>
                    </div>
                    <button onClick={() => setShowGuide(false)} className="w-full mt-6 py-3 bg-emerald-600 rounded-xl text-white font-bold hover:bg-emerald-500">Got it</button>
                </div>
            </div>
        )}

        <div className="space-y-6 mt-4 animate-slide-up pb-10">
             <div className="glass-panel p-6 rounded-[2.5rem] border-white/10 flex items-center gap-6 shadow-lg relative overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent"></div>
                 <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-700 to-black border border-white/10 flex items-center justify-center text-3xl font-bold shadow-xl text-white relative z-10">
                    {state.global.name.charAt(0)}
                 </div>
                 <div className="relative z-10">
                    <h2 className="text-2xl font-bold text-primary">{state.global.name}</h2>
                    <div className="flex gap-2 mt-2">
                       <span className="text-[10px] bg-black/5 dark:bg-white/10 px-3 py-1 rounded-full uppercase tracking-wider border border-black/5 dark:border-white/5 text-secondary font-bold">Lvl {state.global.level}</span>
                       <span className="text-[10px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-500/20 font-bold">{state.global.xp} XP</span>
                    </div>
                 </div>
             </div>

             <div className="grid grid-cols-2 gap-3">
                 <div onClick={toggleRamadan} className={`p-6 rounded-[2rem] border cursor-pointer transition-all duration-300 ${state.global.ramadanMode ? 'bg-teal-500/20 border-teal-500 text-teal-800 dark:text-teal-100 shadow-lg shadow-teal-500/10' : 'glass-panel hover:bg-white/10 dark:hover:bg-white/5 text-secondary hover:scale-[1.02]'}`}>
                     <Tent size={24} className="mb-3" />
                     <div className="text-xs font-bold uppercase">Ramadan Mode</div>
                     <div className="text-[10px] opacity-60 mt-1">{state.global.ramadanMode ? 'Active' : 'Inactive'}</div>
                 </div>
                 <div onClick={() => setTheme(state.global.theme === 'DAY' ? 'NIGHT' : 'DAY')} className="p-6 rounded-[2rem] border glass-panel text-secondary cursor-pointer hover:bg-white/10 dark:hover:bg-white/5 transition-all hover:scale-[1.02]">
                     {state.global.theme === 'DAY' ? <Sun size={24} className="mb-3 text-amber-500" /> : <Moon size={24} className="mb-3 text-blue-400" />}
                     <div className="text-xs font-bold uppercase">Theme</div>
                     <div className="text-[10px] opacity-60 mt-1">{state.global.theme}</div>
                 </div>
                 <div onClick={enterWidgetMode} className="p-6 rounded-[2rem] border glass-panel text-secondary cursor-pointer hover:bg-white/10 dark:hover:bg-white/5 transition-all hover:scale-[1.02]">
                     <Maximize2 size={24} className="mb-3" />
                     <div className="text-xs font-bold uppercase">Widget Mode</div>
                 </div>
                 <div onClick={requestNotify} className="p-6 rounded-[2rem] border glass-panel text-secondary cursor-pointer hover:bg-white/10 dark:hover:bg-white/5 transition-all hover:scale-[1.02]">
                     <Bell size={24} className="mb-3 text-blue-400" />
                     <div className="text-xs font-bold uppercase">Notifications</div>
                 </div>
                 <div onClick={buyFreeze} className="col-span-2 p-6 rounded-[2rem] border bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-200 cursor-pointer hover:bg-blue-500/20 transition-all relative overflow-hidden hover:scale-[1.01]">
                     <div className="flex items-center gap-4">
                        <Snowflake size={24} />
                        <div>
                             <div className="text-xs font-bold uppercase">Buy Streak Freeze</div>
                             <div className="text-[10px] opacity-60">Cost: 500 XP</div>
                        </div>
                     </div>
                 </div>
             </div>

             <div className="glass-panel p-6 rounded-[2rem] border-white/10 space-y-4">
                 <h3 className="text-xs font-bold uppercase text-secondary tracking-widest">Data Management</h3>
                 <button onClick={() => setShowGuide(true)} className="w-full py-4 bg-slate-800/50 border border-slate-600/50 rounded-xl flex items-center justify-center gap-2 text-xs font-bold uppercase hover:bg-slate-700 text-emerald-400 transition-colors shadow-lg"><Code size={14}/> Developer Guide</button>
                 <button onClick={exportData} className="w-full py-4 bg-white/50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-xl flex items-center justify-center gap-2 text-xs font-bold uppercase hover:bg-white/80 dark:hover:bg-white/10 text-primary transition-colors"><Download size={14}/> Backup Data</button>
                 <button onClick={importData} className="w-full py-4 bg-white/50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-xl flex items-center justify-center gap-2 text-xs font-bold uppercase hover:bg-white/80 dark:hover:bg-white/10 text-primary transition-colors"><Upload size={14}/> Restore Data</button>
                 <div className="pt-4 border-t border-white/5">
                     <button onClick={resetApp} className="w-full py-4 bg-rose-500 text-white rounded-2xl flex items-center justify-center gap-2 text-xs font-bold uppercase hover:bg-rose-600 hover:shadow-rose-500/30 active:scale-95 transition-all shadow-lg"><Trash2 size={16}/> Hard Reset App</button>
                 </div>
             </div>
        </div>
     </TabWrapper>
  );
};
