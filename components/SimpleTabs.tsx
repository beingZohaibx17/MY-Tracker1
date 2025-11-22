
import React, { useState, useEffect } from 'react';
import { AppState, SubView, DailyStats, Friend, ThemeMode } from '../types';
import { FITNESS_SCHEDULE, MEMORIZE_CONTENT, PARAH_NAMES, MASTER_ACHIEVEMENTS, getGrowthStage, getStreakTitle, STREAK_MILESTONES, RAMADAN_TIPS } from '../constants';
import { Check, Droplets, RotateCcw, Cigarette, ShieldAlert, CheckCircle2, ChevronLeft, BarChart2, Trophy, Dumbbell, Brain, Activity, Users, UserPlus, Radio, Cloud, Download, Upload, Smartphone, Moon, Sun, Monitor, LogOut, HeartHandshake, ShieldCheck, BookOpen, Tent, Calendar, Flame, Plus, Minus, Zap, Maximize2, X, ShoppingBag, Snowflake, AlertTriangle, Star, Scan, Trash2, Award, Volume2, Eye, MicOff, Heart, Lightbulb, Timer, MapPin, Sparkles } from 'lucide-react';

const THEME_STYLES: Record<string, any> = {
  amber: { color: 'text-amber-600 dark:text-amber-500', border: 'border-amber-500/30', bg: 'bg-amber-500', bgSoft: 'bg-amber-500/10', gradient: 'from-amber-600/20', fill: 'fill-amber-500', stroke: 'stroke-amber-500' },
  cyan: { color: 'text-cyan-600 dark:text-cyan-500', border: 'border-cyan-500/30', bg: 'bg-cyan-500', bgSoft: 'bg-cyan-500/10', gradient: 'from-cyan-600/20', fill: 'fill-cyan-500', stroke: 'stroke-cyan-500' },
  purple: { color: 'text-purple-600 dark:text-purple-500', border: 'border-purple-500/30', bg: 'bg-purple-500', bgSoft: 'bg-purple-500/10', gradient: 'from-purple-600/20', fill: 'fill-purple-500', stroke: 'stroke-purple-500' },
  rose: { color: 'text-rose-600 dark:text-rose-500', border: 'border-rose-500/30', bg: 'bg-rose-500', bgSoft: 'bg-rose-500/10', gradient: 'from-rose-600/20', fill: 'fill-rose-500', stroke: 'stroke-rose-500' },
  orange: { color: 'text-orange-600 dark:text-orange-500', border: 'border-orange-500/30', bg: 'bg-orange-500', bgSoft: 'bg-orange-500/10', gradient: 'from-orange-600/20', fill: 'fill-orange-500', stroke: 'stroke-orange-500' },
  pink: { color: 'text-pink-600 dark:text-pink-500', border: 'border-pink-500/30', bg: 'bg-pink-500', bgSoft: 'bg-pink-500/10', gradient: 'from-pink-600/20', fill: 'fill-pink-500', stroke: 'stroke-pink-500' },
  emerald: { color: 'text-emerald-600 dark:text-emerald-500', border: 'border-emerald-500/30', bg: 'bg-emerald-500', bgSoft: 'bg-emerald-500/10', gradient: 'from-emerald-600/20', fill: 'fill-emerald-500', stroke: 'stroke-emerald-500' },
  blue: { color: 'text-blue-600 dark:text-blue-500', border: 'border-blue-500/30', bg: 'bg-blue-500', bgSoft: 'bg-blue-500/10', gradient: 'from-blue-600/20', fill: 'fill-blue-500', stroke: 'stroke-blue-500' },
  gray: { color: 'text-gray-600 dark:text-gray-500', border: 'border-gray-500/30', bg: 'bg-gray-500', bgSoft: 'bg-gray-500/10', gradient: 'from-gray-600/20', fill: 'fill-gray-500', stroke: 'stroke-gray-500' },
  teal: { color: 'text-teal-600 dark:text-teal-500', border: 'border-teal-500/30', bg: 'bg-teal-500', bgSoft: 'bg-teal-500/10', gradient: 'from-teal-600/20', fill: 'fill-teal-500', stroke: 'stroke-teal-500' },
};

export const TabVisuals: React.FC<{ type: string }> = ({ type }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
       {/* Base Gradient for Depth */}
       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/50 dark:to-black/60 transition-colors duration-700" />
       
       {type === 'SALAH' && (
         <div className="absolute inset-0 opacity-10 dark:opacity-20 text-emerald-900 dark:text-emerald-400">
            {/* Majestic Mosque Archway */}
            <svg className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[80%]" viewBox="0 0 400 300" preserveAspectRatio="none">
               <path d="M0 300 V150 Q100 50 200 50 Q300 50 400 150 V300" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="8 8" className="animate-pulse-slow" />
               <path d="M20 300 V160 Q100 70 200 70 Q300 70 380 160 V300" fill="none" stroke="currentColor" strokeWidth="1" />
               <path d="M200 70 V0" stroke="currentColor" strokeWidth="1" />
               <circle cx="200" cy="0" r="5" fill="currentColor" />
            </svg>
            {/* Floating Noor Particles */}
            {[...Array(5)].map((_, i) => (
               <div key={i} className="absolute bg-emerald-400 rounded-full blur-[3px] animate-float" 
                    style={{
                       width: Math.random() * 4 + 2 + 'px',
                       height: Math.random() * 4 + 2 + 'px',
                       left: Math.random() * 100 + '%',
                       top: Math.random() * 60 + 20 + '%',
                       animationDelay: Math.random() * 5 + 's',
                       animationDuration: Math.random() * 5 + 5 + 's',
                       opacity: Math.random() * 0.5 + 0.2
                    }} />
            ))}
         </div>
       )}

       {type === 'DHIKR' && (
         <div className="absolute inset-0 opacity-10 dark:opacity-20 text-amber-900 dark:text-amber-400">
            {/* Flowing Tasbeeh Path */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
               <path id="dhikrPath" d="M-10,80 Q25,20 50,50 T110,20" fill="none" stroke="currentColor" strokeWidth="0.2" strokeDasharray="2 2" />
               <g>
                  {[...Array(12)].map((_, i) => (
                     <circle key={i} r="1.5" fill="currentColor" className="animate-pulse">
                        <animateMotion dur={`${8 + i}s`} repeatCount="indefinite" path="M-10,80 Q25,20 50,50 T110,20" keyPoints="0;1" keyTimes="0;1" calcMode="linear" begin={`-${i * 0.8}s`} />
                     </circle>
                  ))}
               </g>
            </svg>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-amber-500/20 to-transparent rounded-full blur-3xl"></div>
         </div>
       )}
       
       {type === 'QURAN' && (
         <div className="absolute inset-0 flex items-center justify-center opacity-5 dark:opacity-10 text-purple-900 dark:text-purple-400 overflow-hidden">
             {/* Rotating Rub el Hizb Geometric Pattern */}
             <svg className="w-[150vw] h-[150vw] animate-[spin_180s_linear_infinite]" viewBox="0 0 200 200">
                 <defs>
                    <pattern id="starPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M20 0 L25 15 L40 20 L25 25 L20 40 L15 25 L0 20 L15 15 Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                 </defs>
                 <rect width="200" height="200" fill="url(#starPattern)" />
                 <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                 <rect x="50" y="50" width="100" height="100" fill="none" stroke="currentColor" strokeWidth="0.5" transform="rotate(45 100 100)" />
                 <rect x="50" y="50" width="100" height="100" fill="none" stroke="currentColor" strokeWidth="0.5" />
             </svg>
         </div>
       )}

       {type === 'RAMADAN' && (
         <div className="absolute inset-0 opacity-20 dark:opacity-30 pointer-events-none overflow-hidden">
             {/* Swinging Lanterns */}
             <div className="absolute -top-10 left-[15%] origin-top animate-[swing_6s_ease-in-out_infinite_alternate]">
                 <div className="w-[1px] h-32 bg-teal-600 dark:bg-teal-400 mx-auto opacity-50"></div>
                 <div className="relative">
                    <Tent size={40} className="text-teal-600 dark:text-teal-400 drop-shadow-[0_0_15px_rgba(45,212,191,0.6)]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-amber-400 rounded-full blur-[2px] animate-pulse"></div>
                 </div>
             </div>
             <div className="absolute -top-20 right-[20%] origin-top animate-[swing_8s_ease-in-out_infinite_alternate]" style={{ animationDelay: '1s' }}>
                 <div className="w-[1px] h-48 bg-teal-600 dark:bg-teal-400 mx-auto opacity-50"></div>
                 <div className="relative">
                    <Tent size={32} className="text-teal-600 dark:text-teal-400 drop-shadow-[0_0_15px_rgba(45,212,191,0.6)]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-amber-400 rounded-full blur-[2px] animate-pulse"></div>
                 </div>
             </div>
             {/* Moon */}
             <div className="absolute top-20 right-10 animate-float">
                <Moon size={80} className="text-amber-400/20 dark:text-amber-400/10 fill-amber-400/10" />
             </div>
         </div>
       )}

       {type === 'FITNESS' && (
          <div className="absolute inset-0 opacity-10 dark:opacity-20 text-orange-900 dark:text-orange-400">
             {/* EKG Line */}
             <svg className="absolute bottom-[20%] w-full h-40" viewBox="0 0 200 50" preserveAspectRatio="none">
                 <path d="M0 25 L20 25 L30 10 L40 40 L50 25 L200 25" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="200" strokeDashoffset="200">
                    <animate attributeName="stroke-dashoffset" from="200" to="-200" dur="3s" repeatCount="indefinite" />
                 </path>
             </svg>
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-orange-500/10 to-transparent"></div>
          </div>
       )}
       
       {type === 'HYGIENE' && (
          <div className="absolute inset-0 opacity-15 dark:opacity-25">
             {/* Rising Bubbles */}
             {[...Array(8)].map((_, i) => (
                 <div key={i} className="absolute rounded-full border border-cyan-500/40 bg-cyan-400/10 backdrop-blur-sm animate-float" 
                      style={{ 
                          width: Math.random() * 30 + 10 + 'px', 
                          height: Math.random() * 30 + 10 + 'px',
                          left: Math.random() * 90 + 5 + '%',
                          bottom: -50 + 'px',
                          animationDuration: Math.random() * 10 + 10 + 's',
                          animationDelay: Math.random() * 5 + 's',
                          animationTimingFunction: 'ease-in-out'
                      }} />
             ))}
          </div>
       )}

       {type === 'MDF' && (
          <div className="absolute inset-0 opacity-10 dark:opacity-20 text-rose-900 dark:text-rose-400 flex items-center justify-center">
              {/* Radar Pulse */}
              <div className="absolute w-[50vw] h-[50vw] border border-current rounded-full opacity-0 animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
              <div className="absolute w-[40vw] h-[40vw] border border-current rounded-full opacity-0 animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]" style={{ animationDelay: '1s' }}></div>
              <div className="absolute w-[30vw] h-[30vw] border border-current rounded-full opacity-0 animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite]" style={{ animationDelay: '2s' }}></div>
              {/* Shield Grid */}
              <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.2"/>
                  </pattern>
                  <rect width="100" height="100" fill="url(#grid)" />
              </svg>
          </div>
       )}
       
       {type === 'MEMORIZE' && (
           <div className="absolute inset-0 opacity-15 dark:opacity-20 text-pink-900 dark:text-pink-400">
               {/* Rays of Light (Nur) */}
               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full overflow-hidden">
                   {[...Array(5)].map((_, i) => (
                       <div key={i} className="absolute bottom-0 left-1/2 origin-bottom bg-gradient-to-t from-pink-500/30 to-transparent w-20 h-[120%]" 
                            style={{ 
                                transform: `translateX(-50%) rotate(${(i - 2) * 15}deg)`,
                                filter: 'blur(20px)',
                                opacity: 0.6,
                                animation: `pulse 4s ease-in-out infinite alternate ${i * 0.5}s`
                            }}></div>
                   ))}
               </div>
               {/* Hands/Book hint */}
               <svg className="absolute bottom-10 left-1/2 -translate-x-1/2 w-64 h-32 opacity-20" viewBox="0 0 200 100">
                   <path d="M10 100 Q50 50 100 90 Q150 50 190 100" fill="none" stroke="currentColor" strokeWidth="2" />
               </svg>
           </div>
       )}
       
       {type === 'SOCIAL' && (
           <div className="absolute inset-0 opacity-10 dark:opacity-20 text-blue-900 dark:text-blue-400">
               {/* Network Connections */}
               <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                   <circle cx="20" cy="20" r="2" fill="currentColor" className="animate-pulse"/>
                   <circle cx="80" cy="30" r="3" fill="currentColor" className="animate-pulse" style={{animationDelay: '1s'}}/>
                   <circle cx="50" cy="70" r="2" fill="currentColor" className="animate-pulse" style={{animationDelay: '2s'}}/>
                   <path d="M20 20 L80 30 L50 70 Z" fill="none" stroke="currentColor" strokeWidth="0.2" strokeDasharray="2 2" />
               </svg>
           </div>
       )}

       {type === 'SETTINGS' && (
           <div className="absolute inset-0 opacity-5 dark:opacity-10">
               {/* Abstract Gears */}
               <div className="absolute -right-20 -top-20 w-64 h-64 border-4 border-gray-500 rounded-full border-dashed animate-[spin_60s_linear_infinite]"></div>
               <div className="absolute -left-20 bottom-20 w-48 h-48 border-2 border-gray-500 rounded-full border-dotted animate-[spin_40s_linear_infinite_reverse]"></div>
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
       <div className={`absolute top-0 left-0 right-0 h-[45rem] pointer-events-none rounded-b-[4rem] bg-gradient-to-b ${theme.gradient} via-transparent to-transparent transition-all duration-1000 opacity-50 dark:opacity-40`} />
       
       {visualType && <TabVisuals type={visualType} />}
       
       {setSubView && (
        <div className="flex items-center justify-center pt-6 mb-6 relative z-10">
            <div className="flex bg-white/80 dark:bg-black/40 backdrop-blur-xl rounded-full p-1.5 border border-black/5 dark:border-white/10 shadow-xl">
                {['DAILY', 'STATS', 'AWARDS'].map(v => (
                   <button key={v} onClick={() => setSubView(v as SubView)} className={`px-6 py-2.5 rounded-full text-[9px] font-bold tracking-[0.2em] uppercase transition-all duration-300 ${subView === v ? 'bg-black text-white dark:bg-white dark:text-black shadow-lg transform scale-105' : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'}`}>{v}</button>
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
  const nextMilestone = STREAK_MILESTONES.find(m => m > streak) || streak + 100;
  const progress = Math.min(100, (streak / nextMilestone) * 100);
  
  const displayMax = Math.max(streak, maxStreak || streak || 0);

  return (
    <div className={`glass-panel p-8 rounded-[3rem] border flex flex-col items-center justify-center text-center relative overflow-hidden ${theme.border} shadow-2xl mb-8 group transition-all hover:border-opacity-60 bg-white/40 dark:bg-black/20`}>
      {/* Subtle Pulse Background */}
      <div className={`absolute inset-0 bg-gradient-to-b ${theme.gradient} to-transparent opacity-10 group-hover:opacity-20 transition-opacity duration-700`}></div>
      
      <div className="relative z-10 w-full flex flex-col items-center">
          <div className="text-7xl mb-6 animate-float drop-shadow-2xl filter contrast-125 transition-transform group-hover:scale-110 duration-700 cursor-default select-none">{stage.icon}</div>
          
          <div className="mb-6 flex flex-col items-center gap-2">
             <span className={`px-5 py-2 rounded-full ${theme.bgSoft} border ${theme.border} ${theme.color} text-[10px] font-bold uppercase tracking-[0.25em] backdrop-blur-md shadow-sm flex items-center gap-2`}>
                <Trophy size={10} /> {title}
             </span>
             <span className="text-[9px] text-secondary uppercase tracking-wider opacity-70 font-medium">{stage.label} Stage</span>
          </div>
          
          <div className="flex items-baseline justify-center gap-1 mb-2">
            <h3 className="text-7xl font-light tracking-tighter text-primary drop-shadow-lg tabular-nums">{streak}</h3>
            <span className="text-sm font-bold opacity-50 uppercase tracking-widest transform -translate-y-4 text-primary">Days</span>
          </div>

          <div className="w-full max-w-[240px] mt-4 p-4 rounded-2xl bg-white/40 dark:bg-black/30 border border-black/5 dark:border-white/5 backdrop-blur-md shadow-inner">
             <div className="flex justify-between text-[9px] text-secondary font-bold uppercase tracking-wider mb-2 opacity-90">
                <span>Target: {nextMilestone}</span>
                <span>{progress.toFixed(0)}%</span>
             </div>
             <div className="w-full h-1.5 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden backdrop-blur-sm mb-3">
                <div className={`h-full rounded-full ${theme.bg} transition-all duration-1000 ease-out shadow-[0_0_10px_currentColor]`} style={{ width: `${progress}%` }}></div>
             </div>
             <div className="flex justify-between items-center text-[9px] font-mono">
                <span className="text-secondary opacity-70">Live Streak</span>
                <span className={`${theme.color} font-bold flex items-center gap-1`}><Award size={10}/> Max: {displayMax}</span>
             </div>
          </div>
      </div>
    </div>
  );
};

export const AwardsView: React.FC<{ categories: string[]; unlocked: string[] }> = ({ categories, unlocked }) => {
  const list = MASTER_ACHIEVEMENTS.filter(a => categories.includes(a.category));
  const unlockedCount = list.filter(a => unlocked.includes(a.id)).length;
  return (
    <div className="space-y-4 pt-2 animate-slide-up">
      <div className="glass-panel p-6 rounded-[2rem] flex justify-between items-center bg-white/40 dark:bg-white/5 border-white/20 dark:border-white/5 mb-4">
          <div><div className="text-xs font-bold uppercase text-secondary tracking-widest mb-1">Collection</div><div className="text-primary text-sm">Mastery Progress</div></div>
          <span className="text-3xl font-mono font-bold text-primary">{unlockedCount} <span className="text-secondary text-sm font-sans opacity-50">/ {list.length}</span></span>
      </div>
      {list.map((ach, i) => {
        const isUnlocked = unlocked.includes(ach.id);
        return (
          <div key={ach.id} className={`p-5 rounded-[2rem] border flex items-center gap-5 transition-all duration-500 ${isUnlocked ? 'glass-panel border-emerald-500/20 bg-emerald-500/5 shadow-lg' : 'glass-panel opacity-50 grayscale'}`} style={{ animationDelay: `${i * 50}ms` }}>
             <div className={`text-3xl w-14 h-14 rounded-full flex items-center justify-center bg-white/10 dark:bg-black/20 border border-black/5 dark:border-white/5 ${isUnlocked ? 'animate-bounce' : ''}`}>{ach.icon}</div>
             <div className="flex-1">
                <div className="flex justify-between items-start"><h4 className={`font-bold text-sm ${isUnlocked ? 'text-primary' : 'text-gray-500'}`}>{ach.title}</h4>{isUnlocked && <div className="bg-emerald-500/20 p-1 rounded-full"><CheckCircle2 size={12} className="text-emerald-500" /></div>}</div>
                <p className="text-[10px] text-secondary mt-1 leading-relaxed">{ach.description}</p>
             </div>
          </div>
        );
      })}
    </div>
  );
};

export const TabDhikr: React.FC<{ state: AppState; updateDhikr: (t: string, a: number) => void; addCustomDhikr: (t: string, n: number) => void }> = ({ state, updateDhikr, addCustomDhikr }) => {
  const [subView, setSubView] = useState<SubView>('DAILY');
  const [showAdd, setShowAdd] = useState(false);
  const [newDhikrName, setNewDhikrName] = useState('');
  const [newDhikrTarget, setNewDhikrTarget] = useState(100);
  
  const renderDaily = () => (
    <div className="space-y-4 animate-slide-up">
      <RankCard stage={getGrowthStage('DHIKR', state.global.streaks.dhikr)} streak={state.global.streaks.dhikr} maxStreak={state.global.streaks.maxDhikr} color="amber" />
      
      <div onClick={() => updateDhikr('astaghfirullah', 1)} className="glass-panel p-6 rounded-[2.5rem] border-amber-500/20 relative overflow-hidden active:scale-[0.98] transition-all cursor-pointer group hover:shadow-amber-500/20 hover:shadow-lg">
         <div className="absolute inset-0 bg-amber-500/5 group-hover:bg-amber-500/10 transition-colors"></div>
         <div className="relative z-10 flex justify-between items-center">
            <div>
                <h3 className="text-2xl font-serif text-amber-700 dark:text-amber-100">Astaghfirullah</h3>
                <p className="text-xs text-amber-600/60 dark:text-amber-500/60 font-medium">Forgiveness</p>
            </div>
            <div className="text-4xl font-mono font-bold text-amber-600 dark:text-amber-500">{state.daily.dhikrAstaghfirullah}</div>
         </div>
      </div>
      <div onClick={() => updateDhikr('rabbiInni', 1)} className="glass-panel p-6 rounded-[2.5rem] border-amber-500/20 relative overflow-hidden active:scale-[0.98] transition-all cursor-pointer group hover:shadow-amber-500/20 hover:shadow-lg">
         <div className="absolute inset-0 bg-amber-500/5 group-hover:bg-amber-500/10 transition-colors"></div>
         <div className="relative z-10 flex justify-between items-center">
            <div>
                <h3 className="text-2xl font-serif text-amber-700 dark:text-amber-100">Rabbi Inni</h3>
                <p className="text-xs text-amber-600/60 dark:text-amber-500/60 font-medium">Guidance</p>
            </div>
            <div className="text-4xl font-mono font-bold text-amber-600 dark:text-amber-500">{state.daily.dhikrRabbiInni}</div>
         </div>
      </div>

      <div className="mt-8">
        <div className="flex justify-between items-center px-2 mb-4">
             <h3 className="text-xs font-bold uppercase tracking-widest text-secondary">Custom Dhikr</h3>
             <button onClick={() => setShowAdd(!showAdd)} className="text-amber-600 dark:text-amber-500 hover:text-amber-400 text-xs font-bold flex items-center gap-1 transition-colors">+ Add New</button>
        </div>
        
        {showAdd && (
            <div className="glass-panel p-6 rounded-[2rem] mb-4 animate-slide-up">
                <input type="text" placeholder="Dhikr Name" className="w-full bg-white/50 dark:bg-black/30 border border-black/10 dark:border-white/10 rounded-xl p-3 text-sm mb-3 text-primary focus:border-amber-500 outline-none" value={newDhikrName} onChange={e => setNewDhikrName(e.target.value)} />
                <input type="number" placeholder="Target" className="w-full bg-white/50 dark:bg-black/30 border border-black/10 dark:border-white/10 rounded-xl p-3 text-sm mb-3 text-primary focus:border-amber-500 outline-none" value={newDhikrTarget} onChange={e => setNewDhikrTarget(parseInt(e.target.value))} />
                <button onClick={() => { if(newDhikrName) { addCustomDhikr(newDhikrName, newDhikrTarget); setShowAdd(false); setNewDhikrName(''); } }} className="w-full py-3 bg-amber-500 hover:bg-amber-600 rounded-xl text-white font-bold text-xs uppercase transition-colors shadow-lg">Create</button>
            </div>
        )}

        <div className="space-y-3">
            {state.daily.customDhikr.map(d => (
                <div key={d.id} onClick={() => updateDhikr(d.id, 1)} className="glass-panel p-6 rounded-[2.5rem] border-amber-500/10 relative overflow-hidden active:scale-[0.98] transition-all cursor-pointer group hover:border-amber-500/30">
                     <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent group-hover:from-amber-500/10 transition-colors"></div>
                     <div className="relative z-10 flex justify-between items-center">
                        <div>
                            <h3 className="text-xl font-serif text-amber-900 dark:text-amber-100">{d.text}</h3>
                            <p className="text-[10px] text-amber-600/60 dark:text-amber-500/60 font-medium">Target: {d.target}</p>
                        </div>
                        <div className="flex flex-col items-end">
                             <div className="text-4xl font-mono font-bold text-amber-600 dark:text-amber-500">{d.count}</div>
                             <div className="w-20 h-1 bg-black/10 dark:bg-white/10 rounded-full mt-2 overflow-hidden"><div className="h-full bg-amber-500 transition-all" style={{ width: `${Math.min(100, (d.count / d.target) * 100)}%` }}></div></div>
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
      {subView === 'STATS' && <div className="text-center text-secondary py-20">Charts Available in Dashboard</div>}
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

       {/* Main Reactor Core Visual */}
       <div className="relative w-72 h-72 mx-auto flex items-center justify-center mb-8">
           <div className="absolute inset-0 border-4 border-rose-500/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
           <div className="absolute inset-4 border-2 border-rose-500/30 rounded-full border-dashed animate-[spin_15s_linear_infinite_reverse]"></div>
           <div className="absolute inset-0 rounded-full bg-rose-500/5 blur-3xl animate-pulse-slow"></div>
           
           <div className="relative z-10 text-center flex flex-col items-center bg-white/10 dark:bg-black/40 backdrop-blur-md p-8 rounded-full border border-white/5 shadow-2xl">
               <ShieldCheck size={32} className="text-rose-500 mb-2 animate-pulse-slow" />
               <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-rose-400 mb-2">Time Pure</div>
               <div className="text-5xl font-bold text-primary tracking-tighter font-mono">
                  {String(timeLeft.h).padStart(2,'0')}:{String(timeLeft.m).padStart(2,'0')}
               </div>
               <div className="text-sm text-rose-400/60 mt-1 font-mono">:{String(timeLeft.s).padStart(2,'0')}</div>
               <div className="mt-3 text-xs font-bold bg-rose-500/10 px-4 py-1 rounded-full border border-rose-500/20 text-rose-500">{timeLeft.d} Days Streak</div>
           </div>
       </div>

       <div className="flex justify-center">
            <button onClick={() => { if(confirm("Reset your streak? This cannot be undone.")) resetRelapse(); }} className="group relative px-8 py-4 bg-white/5 dark:bg-black/40 border border-rose-500/30 rounded-2xl overflow-hidden active:scale-95 transition-all w-full shadow-lg hover:shadow-rose-500/20">
                <div className="absolute inset-0 bg-rose-500/10 translate-y-full group-hover:translate-y-0 transition-transform"></div>
                <span className="relative text-rose-500 font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2"><AlertTriangle size={14} /> Emergency Relapse</span>
            </button>
       </div>
    </div>
  );

  return (
    <TabWrapper themeColor="rose" subView={subView} setSubView={setSubView} visualType="MDF">
       {subView === 'DAILY' && renderDaily()}
       {subView === 'STATS' && <div className="text-center text-secondary py-20">Analysis Available in Dashboard</div>}
       {subView === 'AWARDS' && <AwardsView categories={['MDF']} unlocked={state.global.unlockedAchievements} />}
    </TabWrapper>
  );
};

export const TabQuran: React.FC<{ state: AppState; updatePart: (p: string) => void; updateSurah: (s: string) => void }> = ({ state, updatePart, updateSurah }) => {
  const [subView, setSubView] = useState<SubView>('DAILY');
  
  const renderDaily = () => (
    <div className="space-y-6 animate-slide-up">
        <RankCard stage={getGrowthStage('QURAN', state.global.streaks.quranSurah)} streak={state.global.streaks.quranSurah} maxStreak={state.global.streaks.maxQuran} color="purple" />

        {/* Holographic Data Ring */}
        <div className="relative h-80 w-full flex items-center justify-center my-4">
             <div className="absolute w-64 h-64 rounded-full border-2 border-purple-500/20 border-dashed animate-[spin_60s_linear_infinite]"></div>
             <div className="absolute w-56 h-56 rounded-full border border-purple-400/10 animate-[spin_40s_linear_infinite_reverse]"></div>
             
             <div className="text-center z-10 bg-white/80 dark:bg-black/60 backdrop-blur-md p-10 rounded-full border border-purple-500/30 shadow-2xl shadow-purple-500/10">
                 <div className="text-[10px] uppercase tracking-widest text-purple-400 mb-1">Current Juz</div>
                 <div className="text-6xl font-bold text-primary mb-2">{state.global.currentParah}</div>
                 <div className="text-xs font-serif text-purple-600 dark:text-purple-300 opacity-80">{PARAH_NAMES[state.global.currentParah - 1]}</div>
             </div>
             
             <div className="absolute w-72 h-72 animate-[spin_20s_linear_infinite]">
                 <div className={`w-4 h-4 rounded-full bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)] absolute top-0 left-1/2 -translate-x-1/2 transition-opacity duration-500 ${state.daily.quranParts.rub ? 'opacity-100' : 'opacity-20'}`}></div>
             </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
            {['rub', 'nisf', 'thalatha', 'kamil'].map((part, i) => (
                <button key={part} onClick={() => updatePart(part)} className={`p-4 rounded-2xl border transition-all shadow-sm ${state.daily.quranParts[part as keyof typeof state.daily.quranParts] ? 'bg-purple-500 border-purple-400 text-white shadow-lg shadow-purple-500/30' : 'glass-panel hover:bg-white/10 dark:hover:bg-white/5'}`}>
                    <div className="text-xs font-bold uppercase tracking-widest mb-1">Quarter {i+1}</div>
                    <div className="text-xs opacity-80">{state.daily.quranParts[part as keyof typeof state.daily.quranParts] ? 'Completed' : 'Pending'}</div>
                </button>
            ))}
        </div>
        
        <div className="glass-panel p-6 rounded-[2rem] border-purple-500/20 mt-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-purple-400 mb-4">Daily Protection</h3>
            <div className="space-y-3">
                <div onClick={() => updateSurah('mulk')} className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${state.daily.surahMulk ? 'bg-purple-500/20 border-purple-500/50' : 'bg-black/5 dark:bg-black/20 border-black/5 dark:border-white/5'}`}>
                    <span className="font-bold text-sm text-primary">Surah Al-Mulk</span>
                    {state.daily.surahMulk && <CheckCircle2 size={16} className="text-purple-500" />}
                </div>
                <div onClick={() => updateSurah('baqarah')} className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-all ${state.daily.surahBaqarah ? 'bg-purple-500/20 border-purple-500/50' : 'bg-black/5 dark:bg-black/20 border-black/5 dark:border-white/5'}`}>
                    <span className="font-bold text-sm text-primary">Last 2 Ayats Baqarah</span>
                    {state.daily.surahBaqarah && <CheckCircle2 size={16} className="text-purple-500" />}
                </div>
            </div>
        </div>
    </div>
  );

  return (
    <TabWrapper themeColor="purple" subView={subView} setSubView={setSubView} visualType="QURAN">
       {subView === 'DAILY' && renderDaily()}
       {subView === 'STATS' && <div className="text-center text-secondary py-20">History Available in Dashboard</div>}
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
        <div className="relative glass-panel p-8 rounded-[3rem] border-pink-500/20 text-center overflow-hidden group shadow-xl">
            <div className="absolute inset-0 bg-pink-500/5 group-hover:bg-pink-500/10 transition-colors"></div>
            <div className="relative z-10">
                <div className="inline-block px-4 py-1 rounded-full bg-pink-500/10 text-pink-500 text-[10px] font-bold uppercase tracking-widest mb-6 border border-pink-500/20">
                    Week {currentDua.week} Challenge
                </div>
                <h2 className="text-3xl font-serif leading-relaxed text-primary mb-6" dir="rtl">{currentDua.arabic}</h2>
                <p className="text-sm text-pink-600/70 dark:text-pink-200/70 italic leading-relaxed">{currentDua.english}</p>
            </div>
        </div>
        
        <button onClick={markLearned} className="w-full py-4 bg-pink-500 hover:bg-pink-600 rounded-2xl font-bold text-white shadow-lg shadow-pink-500/30 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2">
            <Brain size={18} /> Mark as Learned
        </button>
        
        <div className="text-center">
             <p className="text-[10px] text-secondary uppercase tracking-widest mb-2">Progress: {currentIdx} / {allContent.length}</p>
             <div className="w-full h-1.5 bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
                 <div className="h-full bg-pink-500 transition-all duration-500" style={{ width: `${(currentIdx / allContent.length) * 100}%` }}></div>
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
  
  // Visual component for Circular Progress
  const Ring = ({ val, max, color, label, icon }: any) => {
    const r = 36;
    const c = 2 * Math.PI * r;
    const p = c - ((val / max) * c);
    return (
      <div className="relative flex flex-col items-center">
          <div className="relative w-24 h-24 flex items-center justify-center mb-3 drop-shadow-lg">
               <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r={r} stroke="currentColor" strokeWidth="8" fill="transparent" className="text-black/5 dark:text-white/5" />
                  <circle cx="50" cy="50" r={r} stroke="currentColor" strokeWidth="8" fill="transparent" strokeDasharray={c} strokeDashoffset={p} strokeLinecap="round" className={`${color} transition-all duration-1000 ease-out`} />
               </svg>
               <div className="absolute inset-0 flex items-center justify-center text-primary font-bold text-xl">{val}<span className="text-[10px] opacity-50">/{max}</span></div>
          </div>
          <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-secondary mb-2">
              {icon} {label}
          </div>
          <div className="flex gap-2">
              <button onClick={() => updateRamadanStat(label === 'Fasts' ? 'fastsDone' : label === 'Taraweeh' ? 'taraweehPrayed' : 'quranKhatams', -1)} className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 dark:bg-white/5 dark:hover:bg-white/10 border border-black/5 dark:border-white/10 flex items-center justify-center text-primary"><Minus size={14} /></button>
              <button onClick={() => updateRamadanStat(label === 'Fasts' ? 'fastsDone' : label === 'Taraweeh' ? 'taraweehPrayed' : 'quranKhatams', 1)} className="w-8 h-8 rounded-full bg-teal-500 hover:bg-teal-600 border border-teal-400/50 flex items-center justify-center text-white shadow-lg"><Plus size={14} /></button>
          </div>
      </div>
    );
  };

  const renderDaily = () => (
    <div className="space-y-8 pb-10 animate-slide-up">
        <RankCard stage={getGrowthStage('RAMADAN', state.global.streaks.ramadan)} streak={state.global.streaks.ramadan} maxStreak={state.global.streaks.maxRamadan} color="teal" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center py-4">
            <Ring val={stats.fastsDone} max={30} color="text-teal-500" label="Fasts" icon={<Moon size={14}/>} />
            <Ring val={stats.taraweehPrayed} max={30} color="text-indigo-500" label="Taraweeh" icon={<Star size={14}/>} />
            <Ring val={stats.quranKhatams} max={5} color="text-amber-500" label="Khatams" icon={<BookOpen size={14}/>} />
        </div>
        
        <div className="glass-panel p-6 rounded-[2.5rem] border-teal-500/20 mt-6 bg-gradient-to-br from-teal-500/5 to-transparent">
            <h3 className="text-xs font-bold uppercase tracking-widest text-teal-600 dark:text-teal-300 mb-4 flex items-center gap-2"><Lightbulb size={14} /> Professional Recommendations</h3>
            <div className="space-y-3 max-h-60 overflow-y-auto pr-2 custom-scrollbar">
                {RAMADAN_TIPS.map((tip, i) => (
                    <div key={i} className="p-4 bg-white/40 dark:bg-black/20 rounded-2xl border border-black/5 dark:border-white/5 hover:border-teal-500/30 transition-all">
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
        {subView === 'STATS' && <div className="text-center text-secondary py-20">Month View Coming Soon</div>}
        {subView === 'AWARDS' && <AwardsView categories={['RAMADAN']} unlocked={state.global.unlockedAchievements} />}
    </TabWrapper>
  );
};

export const TabHygiene: React.FC<{ state: AppState; updateHygiene: (k: any) => void; updateHabit: (h: string) => void }> = ({ state, updateHygiene, updateHabit }) => {
   const [subView, setSubView] = useState<SubView>('DAILY');

   const renderDaily = () => (
     <div className="space-y-6 pb-10 animate-slide-up">
        <RankCard stage={getGrowthStage('HYGIENE', state.global.streaks.hygiene)} streak={state.global.streaks.hygiene} maxStreak={state.global.streaks.maxHygiene} color="cyan" />
        
        <div className="grid grid-cols-2 gap-3">
            <div className="glass-panel p-5 rounded-[2rem] border-slate-500/20 relative overflow-hidden hover:border-slate-500/40 transition-all">
                <div className="absolute -right-2 -top-2 text-slate-500/10"><Cigarette size={60} /></div>
                <h4 className="text-xs font-bold uppercase text-slate-400 mb-2">Smoking</h4>
                <div className="text-3xl font-bold text-primary mb-4">{state.daily.habits.smokingCount}/2</div>
                <button onClick={() => updateHabit('smoking')} className="w-full py-2 bg-slate-200 dark:bg-slate-800 rounded-xl text-[10px] font-bold uppercase hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors text-slate-600 dark:text-slate-300">+ Count</button>
            </div>
            <div className="glass-panel p-5 rounded-[2rem] border-slate-500/20 relative overflow-hidden hover:border-slate-500/40 transition-all">
                <div className="absolute -right-2 -top-2 text-slate-500/10"><Zap size={60} /></div>
                <h4 className="text-xs font-bold uppercase text-slate-400 mb-2">Nicotine</h4>
                <div className="text-3xl font-bold text-primary mb-4">{state.daily.habits.nicotineCount}/3</div>
                <button onClick={() => updateHabit('nicotine')} className="w-full py-2 bg-slate-200 dark:bg-slate-800 rounded-xl text-[10px] font-bold uppercase hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors text-slate-600 dark:text-slate-300">+ Count</button>
            </div>
        </div>

        <div className="glass-panel p-6 rounded-[2.5rem] border-cyan-500/20">
            <h3 className="text-xs font-bold uppercase tracking-widest text-cyan-600 dark:text-cyan-300 mb-4">Hygiene Protocol</h3>
            <div className="space-y-3">
                <div onClick={() => updateHygiene('shower')} className={`p-4 rounded-2xl border flex justify-between items-center cursor-pointer transition-all ${state.daily.hygiene.shower ? 'bg-cyan-500/20 border-cyan-500/50' : 'bg-black/5 dark:bg-black/20 border-black/5 dark:border-white/5'}`}>
                    <span className="text-sm font-bold text-primary">Cold Shower</span>
                    {state.daily.hygiene.shower && <CheckCircle2 size={16} className="text-cyan-500" />}
                </div>
                <div onClick={() => updateHygiene('brush')} className={`p-4 rounded-2xl border flex justify-between items-center cursor-pointer transition-all ${state.daily.hygiene.brush ? 'bg-cyan-500/20 border-cyan-500/50' : 'bg-black/5 dark:bg-black/20 border-black/5 dark:border-white/5'}`}>
                    <span className="text-sm font-bold text-primary">Dental Care</span>
                    {state.daily.hygiene.brush && <CheckCircle2 size={16} className="text-cyan-500" />}
                </div>
            </div>
            
            <div className="mt-6">
                <div className="flex justify-between text-xs text-cyan-700 dark:text-cyan-200 mb-2">
                    <span>Hydration</span>
                    <span>{state.daily.hygiene.waterGlasses}/8</span>
                </div>
                <div className="flex gap-1">
                    {[...Array(8)].map((_, i) => (
                        <div key={i} onClick={() => updateHygiene('water')} className={`h-8 flex-1 rounded-md cursor-pointer transition-all ${i < state.daily.hygiene.waterGlasses ? 'bg-cyan-500 shadow-md' : 'bg-black/5 dark:bg-white/10'}`} />
                    ))}
                </div>
                <button onClick={() => updateHygiene('reset_water')} className="text-[10px] text-secondary mt-2 underline hover:text-primary">Reset Water</button>
            </div>
        </div>
     </div>
   );

   return (
     <TabWrapper themeColor="cyan" subView={subView} setSubView={setSubView} visualType="HYGIENE">
        {subView === 'DAILY' && renderDaily()}
        {subView === 'STATS' && <div className="text-center text-secondary py-20">Chart Available in Dashboard</div>}
        {subView === 'AWARDS' && <AwardsView categories={['HYGIENE', 'HABITS']} unlocked={state.global.unlockedAchievements} />}
     </TabWrapper>
   );
};

export const TabFitness: React.FC<{ state: AppState; updateType: (t: string) => void }> = ({ state, updateType }) => {
  const [subView, setSubView] = useState<SubView>('DAILY');
  const dayIndex = new Date().getDay();
  const todayWorkout = FITNESS_SCHEDULE[dayIndex];

  const renderDaily = () => (
    <div className="space-y-6 animate-slide-up">
        <RankCard stage={getGrowthStage('FITNESS', state.global.streaks.fitness)} streak={state.global.streaks.fitness} maxStreak={state.global.streaks.maxFitness} color="orange" />
        
        <div className="glass-panel p-8 rounded-[2.5rem] border-orange-500/20 text-center shadow-lg">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-orange-600 dark:text-orange-400 mb-2">Today's Protocol</h3>
            <h2 className="text-3xl font-bold text-primary mb-6">{todayWorkout}</h2>
            <div className="grid grid-cols-2 gap-3">
               <button onClick={() => updateType('Active')} className={`py-4 rounded-xl border font-bold text-xs uppercase transition-all ${state.daily.fitness.type !== 'Rest' ? 'bg-orange-600 border-orange-500 text-white shadow-lg' : 'bg-white/5 dark:bg-white/5 border-black/10 dark:border-white/10 text-secondary hover:bg-white/10'}`}>Workout Done</button>
               <button onClick={() => updateType('Rest')} className={`py-4 rounded-xl border font-bold text-xs uppercase transition-all ${state.daily.fitness.type === 'Rest' ? 'bg-white/20 dark:bg-white/10 border-white/20 text-primary' : 'bg-white/5 dark:bg-white/5 border-black/10 dark:border-white/10 text-secondary hover:bg-white/10'}`}>Rest Day</button>
            </div>
        </div>

        <div className="glass-panel p-6 rounded-[2rem] border-orange-500/10">
             <h4 className="text-xs font-bold uppercase text-secondary mb-4">Quick Stats</h4>
             <div className="flex justify-between items-center p-4 bg-black/5 dark:bg-black/20 rounded-2xl border border-black/5 dark:border-white/5">
                 <span className="text-sm text-orange-700 dark:text-orange-200">Current Weight</span>
                 <span className="font-mono font-bold text-xl text-primary">{state.daily.fitness.weight || '--'} <span className="text-xs opacity-50">KG</span></span>
             </div>
        </div>
    </div>
  );

  return (
    <TabWrapper themeColor="orange" subView={subView} setSubView={setSubView} visualType="FITNESS">
      {subView === 'DAILY' && renderDaily()}
      {subView === 'STATS' && <div className="text-center text-secondary py-20">Performance Available in Dashboard</div>}
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
                 <div key={f.id} className="glass-panel p-5 rounded-3xl border-white/10 flex items-center gap-4 relative overflow-hidden hover:border-blue-500/30 transition-all">
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

export const TabSettings: React.FC<{ state: AppState; setTheme: (t: any) => void; toggleRamadan: () => void; exportData: () => void; importData: () => void; enterWidgetMode: () => void; onBack: () => void; buyFreeze: () => void; resetApp: () => void }> = ({ state, setTheme, toggleRamadan, exportData, importData, enterWidgetMode, onBack, buyFreeze, resetApp }) => {
  return (
     <TabWrapper themeColor="gray" visualType="SETTINGS">
        <div className="space-y-6 mt-4 animate-slide-up">
             <div className="glass-panel p-6 rounded-[2.5rem] border-white/10 flex items-center gap-6 shadow-lg">
                 <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-700 to-black border border-white/10 flex items-center justify-center text-3xl font-bold shadow-xl text-white">
                    {state.global.name.charAt(0)}
                 </div>
                 <div>
                    <h2 className="text-2xl font-bold text-primary">{state.global.name}</h2>
                    <div className="flex gap-2 mt-2">
                       <span className="text-[10px] bg-black/5 dark:bg-white/10 px-3 py-1 rounded-full uppercase tracking-wider border border-black/5 dark:border-white/5 text-secondary">Lvl {state.global.level}</span>
                       <span className="text-[10px] bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-500/20">{state.global.xp} XP</span>
                    </div>
                 </div>
             </div>

             <div className="grid grid-cols-2 gap-3">
                 <div onClick={toggleRamadan} className={`p-5 rounded-3xl border cursor-pointer transition-all ${state.global.ramadanMode ? 'bg-teal-500/20 border-teal-500 text-teal-800 dark:text-teal-100' : 'glass-panel hover:bg-white/10 dark:hover:bg-white/5 text-secondary'}`}>
                     <Tent size={24} className="mb-3" />
                     <div className="text-xs font-bold uppercase">Ramadan Mode</div>
                     <div className="text-[10px] opacity-60 mt-1">{state.global.ramadanMode ? 'Active' : 'Inactive'}</div>
                 </div>
                 <div onClick={() => setTheme(state.global.theme === 'DAY' ? 'NIGHT' : 'DAY')} className="p-5 rounded-3xl border glass-panel text-secondary cursor-pointer hover:bg-white/10 dark:hover:bg-white/5 transition-all">
                     {state.global.theme === 'DAY' ? <Sun size={24} className="mb-3 text-amber-500" /> : <Moon size={24} className="mb-3 text-blue-400" />}
                     <div className="text-xs font-bold uppercase">Theme</div>
                     <div className="text-[10px] opacity-60 mt-1">{state.global.theme}</div>
                 </div>
                 <div onClick={enterWidgetMode} className="p-5 rounded-3xl border glass-panel text-secondary cursor-pointer hover:bg-white/10 dark:hover:bg-white/5 transition-all">
                     <Maximize2 size={24} className="mb-3" />
                     <div className="text-xs font-bold uppercase">Widget Mode</div>
                 </div>
                 <div onClick={buyFreeze} className="p-5 rounded-3xl border bg-blue-500/10 border-blue-500/20 text-blue-600 dark:text-blue-200 cursor-pointer hover:bg-blue-500/20 transition-all relative overflow-hidden">
                     <Snowflake size={24} className="mb-3" />
                     <div className="text-xs font-bold uppercase">Buy Freeze</div>
                     <div className="text-[10px] opacity-60 mt-1">500 XP</div>
                 </div>
             </div>

             <div className="glass-panel p-6 rounded-[2rem] border-white/10 space-y-4">
                 <h3 className="text-xs font-bold uppercase text-secondary tracking-widest">Data Management</h3>
                 <button onClick={exportData} className="w-full py-3 bg-white/50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-xl flex items-center justify-center gap-2 text-xs font-bold uppercase hover:bg-white/80 dark:hover:bg-white/10 text-primary"><Download size={14}/> Backup Data</button>
                 <button onClick={importData} className="w-full py-3 bg-white/50 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-xl flex items-center justify-center gap-2 text-xs font-bold uppercase hover:bg-white/80 dark:hover:bg-white/10 text-primary"><Upload size={14}/> Restore Data</button>
                 <button onClick={resetApp} className="w-full py-3 bg-rose-500/10 border border-rose-500/20 text-rose-500 rounded-xl flex items-center justify-center gap-2 text-xs font-bold uppercase hover:bg-rose-500/20"><Trash2 size={14}/> Reset App</button>
             </div>
        </div>
     </TabWrapper>
  );
};
