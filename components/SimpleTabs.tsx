
import React, { useState } from 'react';
import { AppState, SubView, Exercise } from '../types';
import { MEMORIZE_CONTENT, PARAH_NAMES_ARABIC, MASTER_ACHIEVEMENTS, getGrowthStage, PREDEFINED_DHIKR, PREDEFINED_WORKOUTS, HADEES_COLLECTION, QURAN_PART_LABELS } from '../constants';
import { BarChart } from './Charts';
import { 
  Check, Droplets, RotateCcw, ShieldAlert, CheckCircle2, BarChart2, Trophy, Dumbbell, Brain, Activity, Plus, Moon, BookOpen, Tent, Flame, ShieldCheck, Scroll, BedDouble, LampDesk, Brush, ShowerHead, AlertTriangle, Sparkles, ChevronLeft, Play, ChevronRight, Star, Bell, Download, Upload, Trash2, Smartphone, Sunrise, Sunset, Heart, Cloud, Maximize2, Minimize2, X, Save, FileUp
} from 'lucide-react';

// Curated High-Quality Unsplash Images based on user request
export const RANK_IMAGES: Record<string, string> = {
    SALAH: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dmuslim%2Bprayer&psig=AOvVaw2VULdvOuKYEPmoPXDWOV76&ust=1764007642699000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCKDSl9vuiJEDFQAAAAAdAAAAABAEq=80&w=1974&auto=format&fit=crop", // Prayer/Mosque
    DHIKR: "https://www.google.com/url?sa=i&url=http%3A%2F%2Fwww.ramadhanguide.com%2Fsome-of-the-virtues-and-benefits-of-remembering-god-dhikr-of-allah-almighty%2F&psig=AOvVaw0xyOgBFBki637e5reYSrKK&ust=1764007738500000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCNivzYfviJEDFQAAAAAdAAAAABAE?q=80&w=2070&auto=format&fit=crop", // Tasbeeh/Beads
    HYGIENE: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1932&auto=format&fit=crop", // Water/Clean
    FITNESS: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop", // Gym/Weights
    HABITS: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=2070&auto=format&fit=crop", // Nature/Clean
    MDF: "https://images.unsplash.com/photo-1514539079130-25950c84af65?q=80&w=2069&auto=format&fit=crop", // Shield/Abstract
    NIGHT: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop", // Islamic Night/Stars
    HADEES: "https://images.unsplash.com/photo-1585918760799-234208d132cb?q=80&w=1935&auto=format&fit=crop", // Islamic Books/Wisdom
    MEMORIZE: "https://images.unsplash.com/photo-1606236922967-b52479f6e696?q=80&w=1974&auto=format&fit=crop", // Hands Praying/Dua
    RAMADAN: "https://images.unsplash.com/photo-1589133496350-0a88b81324cb?q=80&w=1974&auto=format&fit=crop", // Lanterns
    QURAN: "https://images.unsplash.com/photo-1609599006353-e629aaabfeae?q=80&w=2070&auto=format&fit=crop", // Quran Book
    AI_CHAT: "https://images.unsplash.com/photo-1616763355603-9755a640a287?q=80&w=2070&auto=format&fit=crop" // Abstract/Modern
};

// Jumuah Specific Image
export const JUMUAH_IMAGE = "https://images.unsplash.com/photo-1584553195825-4161945a886f?q=80&w=2070&auto=format&fit=crop"; 

// Reusable Components
const TaskCard = ({ title, subtitle, isCompleted, onClick, icon, actionIcon }: any) => (
    <div onClick={onClick} className={`relative flex items-center justify-between p-5 rounded-[1.5rem] border transition-all duration-300 cursor-pointer animate-slide-up group overflow-hidden shadow-lg transform ${
        isCompleted 
          ? 'bg-emerald-500/10 border-emerald-500/30 scale-[0.98]' 
          : 'glass-panel border-transparent hover:border-accent/30 hover:bg-white/5 hover:scale-[1.01]'
    } active:scale-95`}>
        {/* Subtle glow on completion */}
        {isCompleted && (
            <div className="absolute inset-0 bg-emerald-500/5 blur-xl animate-pulse-slow">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent"></div>
            </div>
        )}
        
        <div className="relative z-10 flex items-center gap-5">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 relative ${
                isCompleted ? 'bg-emerald-500 text-white shadow-[0_0_20px_rgba(16,185,129,0.5)] scale-110' : 'border border-secondary/20 text-secondary bg-secondary/5 group-hover:bg-white/10 group-hover:border-white/20'
            }`}>
                {isCompleted ? <CheckCircle2 size={24} strokeWidth={3} className="animate-scale-in" /> : icon || <div className="w-3 h-3 rounded-full bg-secondary/30" />}
                {isCompleted && <div className="absolute inset-0 bg-white/20 rounded-full animate-ping opacity-20"></div>}
            </div>
            <div>
                <h3 className={`text-lg font-bold transition-colors ${isCompleted ? 'text-emerald-400' : 'text-primary'}`}>{title}</h3>
                {subtitle && <p className="text-[10px] font-bold uppercase tracking-widest text-secondary/60 group-hover:text-secondary/80 transition-colors">{subtitle}</p>}
            </div>
        </div>
        {actionIcon && <div className={`text-secondary/50 transition-colors ${isCompleted ? 'text-emerald-500' : ''}`}>{actionIcon}</div>}
    </div>
);

export const HeroCard: React.FC<any> = ({ title, subtitle, stat, statLabel, bgImage, icon }) => (
    <div className="relative rounded-[2.5rem] p-8 shadow-2xl overflow-hidden min-h-[260px] flex flex-col justify-between border border-white/10 group mb-6 animate-scale-in transform transition-all hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)]">
        {/* Background Image with Zoom Effect */}
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] ease-in-out group-hover:scale-110" style={{ backgroundImage: `url(${bgImage})` }}></div>
        
        {/* Cinematic Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent opacity-80"></div>

        {/* Content */}
        <div className="relative z-10 flex justify-between items-start">
            <div className="space-y-2">
                {icon && (
                    <div className="inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white/90 border border-white/10 shadow-lg animate-fade-in">
                       {icon} <span>{subtitle}</span>
                    </div>
                )}
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-white drop-shadow-xl leading-[1.1] max-w-[80%] animate-slide-up">{title}</h1>
            </div>
        </div>

        {/* Stats Footer */}
        {stat !== undefined && (
            <div className="relative z-10 mt-auto pt-6 border-t border-white/10 flex items-end justify-between animate-slide-up" style={{ animationDelay: '0.1s' }}>
                 <div>
                     <div className="text-5xl font-mono font-bold text-white drop-shadow-lg tracking-tighter">{stat}</div>
                     <div className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-bold mt-1">{statLabel}</div>
                 </div>
                 <div className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-xl group-hover:scale-110 transition-transform duration-300">
                    <Trophy size={20} className="text-yellow-400 drop-shadow-md" />
                 </div>
            </div>
        )}
    </div>
);

// --- TAB WRAPPER ---
const THEME_STYLES: Record<string, any> = {
  emerald: { bg: 'bg-emerald-500', color: 'text-emerald-500', border: 'border-emerald-500' },
  amber: { bg: 'bg-amber-500', color: 'text-amber-500', border: 'border-amber-500' },
  rose: { bg: 'bg-rose-500', color: 'text-rose-500', border: 'border-rose-500' },
  cyan: { bg: 'bg-cyan-500', color: 'text-cyan-500', border: 'border-cyan-500' },
  purple: { bg: 'bg-purple-500', color: 'text-purple-500', border: 'border-purple-500' },
  orange: { bg: 'bg-orange-500', color: 'text-orange-500', border: 'border-orange-500' },
  pink: { bg: 'bg-pink-500', color: 'text-pink-500', border: 'border-pink-500' },
  indigo: { bg: 'bg-indigo-500', color: 'text-indigo-500', border: 'border-indigo-500' },
  gold: { bg: 'bg-yellow-500', color: 'text-yellow-500', border: 'border-yellow-500' },
  slate: { bg: 'bg-slate-500', color: 'text-slate-500', border: 'border-slate-500' },
  blue: { bg: 'bg-blue-500', color: 'text-blue-500', border: 'border-blue-500' },
};

export const TabWrapper: React.FC<{ 
  children: React.ReactNode; 
  themeColor: string; 
  subView: SubView; 
  setSubView: (v: SubView) => void; 
  visualType?: string;
  onBack?: () => void;
}> = ({ children, themeColor, subView, setSubView, onBack }) => {
  const styles = THEME_STYLES[themeColor] || THEME_STYLES['emerald'];
  return (
    <div className="flex flex-col h-full relative">
      <div className="flex items-center justify-between px-6 py-6 animate-fade-in z-50 sticky top-0 bg-gradient-to-b from-[#0F172A] via-[#0F172A]/90 to-transparent pointer-events-none">
          <button 
            onClick={onBack} 
            className={`w-10 h-10 rounded-full glass-panel border border-white/10 flex items-center justify-center text-primary active:scale-90 transition-transform hover:bg-white/10 pointer-events-auto`}
          >
            <ChevronLeft size={20} />
          </button>
          
          <div className="glass-panel rounded-full p-1.5 flex gap-1 shadow-2xl border border-white/10 pointer-events-auto backdrop-blur-xl">
            {(['DAILY', 'STATS', 'AWARDS'] as SubView[]).map((v) => (
              <button key={v} onClick={() => setSubView(v)} className={`px-5 py-2.5 rounded-full text-[9px] font-black uppercase tracking-wider transition-all duration-300 ${subView === v ? `${styles.bg} text-white shadow-lg scale-105` : 'text-secondary hover:bg-white/5'}`}>{v}</button>
            ))}
          </div>
          
          <div className="w-10" /> 
      </div>
      <div className="px-5 pb-32 flex-1 overflow-y-auto no-scrollbar">{children}</div>
    </div>
  );
};

export const RankCard: React.FC<any> = ({ stage, streak, maxStreak, color, bgImage }) => {
    const styles = THEME_STYLES[color] || THEME_STYLES['emerald'];
    const nextThreshold = stage.next ? stage.next.threshold : streak * 1.5;
    const prevThreshold = stage.current.threshold || 0;
    const percentage = Math.min(100, Math.max(0, ((streak - prevThreshold) / (nextThreshold - prevThreshold)) * 100));
    
    return (
        <div className={`glass-panel p-6 rounded-[2.5rem] border-primary/5 relative overflow-hidden mb-6 group animate-slide-up hover:scale-[1.02] transition-transform duration-500 shadow-xl`}>
            {/* Background Image Fade */}
            {bgImage && (
                <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-1000 mix-blend-overlay">
                    <img src={bgImage} className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-1000" />
                </div>
            )}
            
            {/* Subtle background glow */}
            <div className={`absolute top-[-50%] right-[-10%] w-64 h-64 ${styles.bg} opacity-20 blur-[80px] rounded-full pointer-events-none`}></div>

            <div className="flex justify-between items-center relative z-10">
                 <div className="flex flex-col items-center gap-2">
                     <div className={`w-16 h-16 rounded-full ${styles.bg} flex items-center justify-center text-3xl shadow-[0_8px_32px_rgba(0,0,0,0.3)] border-2 border-white/20 text-white animate-float`}>
                        {stage.current.icon}
                     </div>
                     <span className={`text-[9px] font-black uppercase ${styles.color} drop-shadow-sm tracking-[0.2em]`}>{stage.current.label}</span>
                 </div>
                 
                 <div className="flex-1 px-6 flex flex-col items-center">
                     <div className="flex justify-between w-full mb-2">
                         <span className="text-[9px] text-secondary font-bold uppercase tracking-widest">Streak</span>
                         <span className={`text-[12px] font-bold ${styles.color} font-mono`}>{streak} Days</span>
                     </div>
                     <div className="h-3 w-full bg-black/40 rounded-full overflow-hidden border border-white/5 backdrop-blur-sm shadow-inner">
                        <div className={`h-full ${styles.bg} transition-all duration-1000 relative shadow-[0_0_15px_currentColor]`} style={{ width: `${percentage}%` }}>
                            <div className="absolute inset-0 bg-white/20 animate-shimmer" style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.5), transparent)' }}></div>
                        </div>
                     </div>
                     <div className="flex justify-between w-full mt-2">
                         <span className="text-[8px] text-secondary/40 font-mono">Lvl {stage.current.threshold}</span>
                         <span className="text-[8px] text-secondary/40 font-mono">Lvl {nextThreshold}</span>
                     </div>
                 </div>

                 <div className="flex flex-col items-center gap-2 opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all">
                     <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-lg border border-white/5 shadow-inner">
                        {stage.next ? stage.next.icon : '👑'}
                     </div>
                     <span className="text-[8px] font-bold uppercase text-secondary tracking-widest">{stage.next ? 'Next' : 'Max'}</span>
                 </div>
            </div>
        </div>
    );
};

export const StatsCalendar: React.FC<any> = ({ history, current, color, checkDay, label }) => {
    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const styles = THEME_STYLES[color];
    return (
        <div className="glass-panel p-6 rounded-[2rem] hover:scale-[1.02] transition-transform duration-300 animate-slide-up shadow-lg border-white/5">
            <h4 className="text-[10px] font-bold uppercase tracking-wider text-secondary mb-6 flex justify-between items-center">
                <span>Last 7 Days</span>
                <span className={`px-2 py-1 rounded-md bg-white/5 ${styles.color}`}>{label}</span>
            </h4>
            <div className="flex justify-between items-center px-1">
                {days.map((d, i) => (
                    <div key={i} className="flex flex-col items-center gap-3">
                        <span className="text-[9px] font-bold text-secondary opacity-60">{d}</span>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold border transition-all ${
                            i === 6 
                            ? (checkDay(current) ? `${styles.bg} text-white border-transparent shadow-lg scale-110 animate-pulse-slow` : 'bg-secondary/5 text-secondary border-secondary/10')
                            : 'bg-secondary/5 text-secondary border-secondary/10 opacity-40'
                        }`}>
                           {i === 6 && checkDay(current) && <Check size={12} strokeWidth={3} />}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const AwardsView: React.FC<{ categories: string[]; unlocked: string[] }> = ({ categories, unlocked }) => (
  <div className="space-y-4 animate-slide-up pb-10">
    <div className="glass-panel p-6 rounded-[2rem] text-center mb-6 relative overflow-hidden group border-yellow-500/10">
       <div className="absolute inset-0 bg-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
       <Trophy size={40} className="mx-auto text-yellow-400 mb-3 drop-shadow-lg animate-float" />
       <h3 className="text-lg font-bold text-white tracking-tight">Achievements</h3>
       <p className="text-xs text-secondary mt-1 uppercase tracking-widest font-bold">Unlocked: {unlocked.length}</p>
    </div>
    <div className="grid grid-cols-1 gap-3">
        {MASTER_ACHIEVEMENTS.filter(a => categories.includes(a.category)).map((ach, i) => {
        const isUnlocked = unlocked.includes(ach.id);
        return (
            <div key={ach.id} className={`p-5 rounded-[1.5rem] border transition-all duration-300 relative overflow-hidden flex gap-5 items-center group animate-slide-up ${isUnlocked ? 'glass-panel border-yellow-500/20 bg-yellow-500/5 hover:bg-yellow-500/10' : 'bg-white/[0.02] border-white/5 opacity-60 grayscale hover:grayscale-0 hover:opacity-100'}`} style={{ animationDelay: `${i*0.05}s` }}>
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-inner transition-transform group-hover:scale-110 ${isUnlocked ? 'bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 text-yellow-400 border border-yellow-500/20' : 'bg-white/5 text-secondary'}`}>
                {ach.icon}
            </div>
            <div className="flex-1">
                <h4 className={`font-bold text-sm ${isUnlocked ? 'text-white' : 'text-secondary'}`}>{ach.title}</h4>
                <p className="text-[10px] text-secondary mt-1 leading-relaxed">{ach.description}</p>
            </div>
            {isUnlocked && <div className="p-2 rounded-full bg-emerald-500/20 text-emerald-400 animate-scale-in shadow-lg shadow-emerald-500/20"><CheckCircle2 size={16} strokeWidth={3} /></div>}
            </div>
        );
        })}
    </div>
  </div>
);

const GenericStatsView: React.FC<any> = ({ state, category, color, checkDay, getValue, maxVal, label, labelTotal, totalValue }) => {
    const streak = state.global.streaks[category.toLowerCase()] || state.global.streaks[category === 'QURAN' ? 'quranSurah' : category.toLowerCase()];
    const maxStreak = state.global.streaks[`max${category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()}`] || state.global.streaks[`max${category === 'QURAN' ? 'Quran' : category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()}`];
    const stage = getGrowthStage(category, streak);
    const calculatedTotal = totalValue || ((state.global.history?.reduce((acc: number, d: any) => acc + (getValue(d) || 0), 0) || 0) + (getValue(state.daily) || 0));
    const history = state.global.history ? state.global.history.slice(-7) : [];
    const combined = [...history, state.daily];
    const data = combined.slice(-7).map((day: any) => getValue(day));
    const finalData = [...Array(Math.max(0, 7 - data.length)).fill(0), ...data];
    const labels = ["D-6", "D-5", "D-4", "D-3", "D-2", "Yest", "Today"];
    const bgImage = RANK_IMAGES[category];

    return (
        <div className="animate-slide-up pb-10 space-y-4">
            <RankCard stage={stage} streak={streak} maxStreak={maxStreak || streak} color={color} bgImage={bgImage} />

            <div className="grid grid-cols-2 gap-3 mb-2">
                 <div className={`glass-panel p-6 rounded-[2rem] text-center border-white/5 hover:scale-[1.05] transition-transform duration-300 shadow-lg`}>
                    <div className="text-[9px] uppercase tracking-widest text-secondary mb-2 font-bold">Current Streak</div>
                    <div className={`text-4xl font-mono font-bold text-${color}-500 drop-shadow-sm`}>{streak}</div>
                 </div>
                 <div className={`glass-panel p-6 rounded-[2rem] text-center border-white/5 hover:scale-[1.05] transition-transform duration-300 shadow-lg`}>
                    <div className="text-[9px] uppercase tracking-widest text-secondary mb-2 font-bold">Lifetime {labelTotal}</div>
                    <div className="text-4xl font-mono font-bold text-white drop-shadow-sm">{calculatedTotal}</div>
                 </div>
            </div>
            
            <StatsCalendar history={state.global.history} current={state.daily} color={color} checkDay={checkDay} label="Goals Hit" />
            <div className="glass-panel p-6 rounded-[2rem] hover:scale-[1.02] transition-transform duration-300 shadow-lg border-white/5">
                <h3 className="text-sm font-bold mb-4 flex items-center gap-2 text-primary"><BarChart2 size={16} className={`text-${color}-500`}/> Trends</h3>
                <BarChart data={finalData} labels={labels} color={color} maxVal={maxVal} />
            </div>
        </div>
    );
}

// --- TAB IMPLEMENTATIONS ---

export const TabDhikr: React.FC<any> = ({ state, updateDhikr, addCustomDhikr, onBack }) => {
    const [subView, setSubView] = useState<SubView>('DAILY');
    const [showAddModal, setShowAddModal] = useState(false);
    const [focusMode, setFocusMode] = useState<{id: string, label: string, target: number, current: number} | null>(null);
    const currentCount = state.daily.dhikrAstaghfirullah + state.daily.dhikrRabbiInni + state.daily.customDhikr.reduce((acc:number, curr:any) => acc + curr.count, 0);

    const handleFocusTap = () => {
        if (!focusMode) return;
        updateDhikr(focusMode.id, 1);
        setFocusMode(prev => prev ? ({ ...prev, current: prev.current + 1 }) : null);
        try {
            if(navigator.vibrate) navigator.vibrate(10);
        } catch(e) {}
    };

    if (focusMode) {
        return (
            <div className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center animate-fade-in" onClick={handleFocusTap}>
                 {/* Fullscreen Touch Area */}
                 <div className="absolute inset-0 bg-cover bg-center opacity-30 pointer-events-none transition-transform duration-[20s] scale-125" style={{ backgroundImage: `url(${RANK_IMAGES.DHIKR})` }}></div>
                 <div className="absolute inset-0 bg-gradient-to-t from-amber-950/90 to-black/80 pointer-events-none"></div>

                 <button onClick={(e) => { e.stopPropagation(); setFocusMode(null); }} className="absolute top-8 left-6 p-4 rounded-full bg-white/10 border border-white/10 text-white z-50 hover:bg-white/20 transition-all"><X size={24} /></button>
                 
                 <div className="relative z-10 flex flex-col items-center justify-center w-full h-full space-y-12 pointer-events-none">
                      <div className="text-center space-y-3">
                           <h2 className="text-4xl md:text-5xl font-serif font-bold text-amber-500 drop-shadow-lg">{focusMode.label}</h2>
                           <p className="text-xs uppercase tracking-[0.3em] text-white/50 font-bold">Tap anywhere to count</p>
                      </div>

                      <div className="relative w-72 h-72 flex items-center justify-center">
                           {/* Simple Circular Progress using CSS borders */}
                           <div className="absolute inset-0 rounded-full border-8 border-white/5"></div>
                           <div className="absolute inset-0 rounded-full border-8 border-amber-500/30 border-t-amber-500 transition-all duration-200 shadow-[0_0_30px_rgba(245,158,11,0.3)]" style={{ transform: `rotate(${(focusMode.current / focusMode.target) * 360}deg)` }}></div>
                           
                           {/* Ripple Effect Container */}
                           <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-full h-full rounded-full bg-amber-500/5 animate-pulse"></div>
                           </div>

                           <div className="text-center z-20">
                                <div className="text-8xl font-mono font-bold text-white tracking-tighter drop-shadow-2xl">{focusMode.current}</div>
                                <div className="text-sm font-bold text-amber-400 mt-2 uppercase tracking-widest">Target: {focusMode.target}</div>
                           </div>
                      </div>
                      
                      <div className="text-[10px] text-white/30 uppercase tracking-[0.5em] animate-pulse">Focus Mode Active</div>
                 </div>
            </div>
        );
    }

    const renderDaily = () => (
        <div className="space-y-4 animate-slide-up pb-10">
            <HeroCard 
                title="Dhikr" 
                subtitle="Remembrance" 
                stat={currentCount} 
                statLabel="Total Recitations" 
                icon={<Activity size={14} />} 
                bgImage={RANK_IMAGES.DHIKR}
            />
            
            <div className="space-y-3">
                <DhikrCard 
                    label="Astaghfirullah" 
                    count={state.daily.dhikrAstaghfirullah} 
                    target={2100} 
                    onTap={(n:any) => updateDhikr('astaghfirullah', n)} 
                    onFocus={() => setFocusMode({ id: 'astaghfirullah', label: 'Astaghfirullah', target: 2100, current: state.daily.dhikrAstaghfirullah })}
                    color="amber" 
                />
                <DhikrCard 
                    label="Rabbi Inni" 
                    count={state.daily.dhikrRabbiInni} 
                    target={2100} 
                    onTap={(n:any) => updateDhikr('rabbiInni', n)} 
                    onFocus={() => setFocusMode({ id: 'rabbiInni', label: 'Rabbi Inni', target: 2100, current: state.daily.dhikrRabbiInni })}
                    color="amber" 
                />
                {state.daily.customDhikr.map((d: any) => (
                    <DhikrCard 
                        key={d.id} 
                        label={d.text} 
                        count={d.count} 
                        target={d.target} 
                        onTap={(n:any) => updateDhikr(d.id, n)} 
                        onFocus={() => setFocusMode({ id: d.id, label: d.text, target: d.target, current: d.count })}
                        color="amber" 
                    />
                ))}
            </div>
            <button onClick={() => setShowAddModal(true)} className="w-full py-5 rounded-[1.5rem] border border-dashed border-secondary/30 text-secondary hover:text-primary hover:border-primary/50 flex items-center justify-center gap-2 text-xs uppercase tracking-widest mt-4 hover:bg-white/5 transition-all active:scale-95"><Plus size={16} /> Add Custom Dhikr</button>
        </div>
    );

    return (
        <TabWrapper themeColor="amber" subView={subView} setSubView={setSubView} onBack={onBack}>
            {subView === 'DAILY' && renderDaily()}
            {subView === 'STATS' && <GenericStatsView state={state} category="DHIKR" color="amber" checkDay={(d: any) => (d.dhikrAstaghfirullah + d.dhikrRabbiInni) >= 4200} getValue={(d: any) => d.dhikrAstaghfirullah + d.dhikrRabbiInni} maxVal={5000} label="Count" labelTotal="Lifetime" />}
            {subView === 'AWARDS' && <AwardsView categories={['DHIKR']} unlocked={state.global.unlockedAchievements} />}
            {showAddModal && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fade-in">
                    <div className="glass-panel border border-amber-500/30 rounded-[2rem] p-6 w-full max-w-sm shadow-2xl animate-scale-in">
                        <h3 className="text-sm font-bold text-amber-500 mb-6 uppercase tracking-widest text-center">Select Dhikr</h3>
                        <div className="space-y-2 max-h-[60vh] overflow-y-auto no-scrollbar">
                            {PREDEFINED_DHIKR.map((d, i) => (
                                <button key={i} onClick={() => { addCustomDhikr(d.arabic, 100); setShowAddModal(false); }} className="w-full p-4 rounded-xl bg-white/5 hover:bg-amber-500/20 border border-white/5 text-left transition-colors flex items-center justify-between group">
                                    <div className="text-[10px] text-secondary group-hover:text-white uppercase tracking-wider">{d.label}</div>
                                    <div className="font-serif text-lg text-primary">{d.arabic}</div>
                                </button>
                            ))}
                        </div>
                        <button onClick={() => setShowAddModal(false)} className="w-full py-4 mt-4 text-xs text-white bg-white/10 rounded-xl font-bold hover:bg-white/20 uppercase tracking-wider">Cancel</button>
                    </div>
                </div>
            )}
        </TabWrapper>
    );
};

const DhikrCard: React.FC<any> = ({ label, count, target, onTap, onFocus, color }) => (
    <div className={`relative flex items-center justify-between p-6 rounded-[2rem] border transition-all duration-300 group overflow-hidden animate-slide-up shadow-lg ${count >= target ? 'bg-amber-500/20 border-amber-500/40' : 'glass-panel border-transparent hover:border-amber-500/20'} active:scale-95`}>
        <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/5">
            <div className="h-full bg-amber-500 transition-all duration-500 shadow-[0_0_10px_rgba(245,158,11,0.5)]" style={{ width: `${Math.min(100, (count/target)*100)}%` }}></div>
        </div>
        
        {/* Click Area for Quick Add */}
        <div className="flex-1 cursor-pointer" onClick={() => onTap(100)}>
            <div className="relative z-10">
                <h3 className={`text-xl font-bold font-serif mb-1 ${count >= target ? 'text-amber-400' : 'text-primary'}`}>{label}</h3>
                <p className="text-[9px] uppercase tracking-widest text-secondary font-bold group-hover:text-white/60 transition-colors">Target: {target}</p>
            </div>
            <div className="text-4xl font-mono font-bold text-white relative z-10 drop-shadow-sm mt-3 tracking-tight">{count}</div>
        </div>

        {/* Focus Mode Button */}
        <button 
            onClick={(e) => { e.stopPropagation(); onFocus(); }}
            className="p-3.5 rounded-2xl bg-white/5 hover:bg-amber-500 hover:text-white text-secondary transition-all active:scale-95 z-20 border border-white/5 shadow-md"
        >
            <Maximize2 size={20} />
        </button>

        <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
    </div>
);

export const TabHygiene: React.FC<any> = ({ state, updateHygiene, onBack }) => {
    const [subView, setSubView] = useState<SubView>('DAILY');
    const waterProgress = state.daily.hygiene.waterGlasses;

    const renderDaily = () => (
      <div className="space-y-4 animate-slide-up pb-10">
          <HeroCard 
            title="Hygiene" 
            subtitle="Cleanliness" 
            stat={`${waterProgress}/8`} 
            statLabel="Water Intake" 
            icon={<Droplets size={14} />} 
            bgImage={RANK_IMAGES.HYGIENE}
          />
          
          <div className="glass-panel p-6 rounded-[2rem] border-cyan-500/20 flex flex-col gap-4 mb-2 shadow-lg">
              <div className="flex justify-between items-center">
                  <h3 className="text-sm font-bold text-primary flex items-center gap-2"><Droplets size={16} className="text-cyan-400"/> Hydration</h3>
                  <span className="text-xs font-mono text-cyan-400 font-bold">{Math.round((waterProgress/8)*100)}%</span>
              </div>
              <div className="flex gap-2 h-12">
                  {[...Array(8)].map((_, i) => (
                      <div key={i} className={`flex-1 rounded-full transition-all duration-500 ${i < waterProgress ? 'bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]' : 'bg-white/5'}`}></div>
                  ))}
              </div>
              <div className="flex gap-3 mt-2">
                   <button onClick={() => updateHygiene('water')} className="flex-1 py-4 rounded-xl bg-cyan-500 text-white flex items-center justify-center active:scale-95 shadow-lg shadow-cyan-900/50 hover:bg-cyan-400 transition-all font-bold text-xs uppercase tracking-wider gap-2"><Plus size={16} /> Add Water</button>
                   <button onClick={() => updateHygiene('reset_water')} className="px-5 rounded-xl bg-white/5 text-secondary flex items-center justify-center active:scale-90 hover:bg-white/10 transition-all border border-white/5"><RotateCcw size={20} /></button>
              </div>
          </div>
          
          <div className="space-y-3">
               {[{k:'shower', l:'Shower', i:<ShowerHead size={20}/>}, {k:'brush', l:'Brush', i:<Brush size={20}/>}, {k:'cleanDesk', l:'Clean Desk', i:<LampDesk size={20}/>}].map((t:any) => (
                   <TaskCard 
                      key={t.k} 
                      title={t.l} 
                      subtitle="Daily Task" 
                      icon={t.i} 
                      isCompleted={state.daily.hygiene[t.k]} 
                      onClick={() => updateHygiene(t.k)} 
                   />
               ))}
          </div>
      </div>
    );

    return (
       <TabWrapper themeColor="cyan" subView={subView} setSubView={setSubView} onBack={onBack}>
           {subView === 'DAILY' && renderDaily()}
           {subView === 'STATS' && <GenericStatsView state={state} category="HYGIENE" color="cyan" checkDay={(d:any) => d.hygiene.waterGlasses >= 8} getValue={(d:any) => d.hygiene.waterGlasses} maxVal={10} label="Water" labelTotal="Total" />}
           {subView === 'AWARDS' && <AwardsView categories={['HYGIENE']} unlocked={state.global.unlockedAchievements} />}
       </TabWrapper>
    );
};

export const TabFitness: React.FC<any> = ({ state, updatePushups, addCustomExercise, updateCustomExercise, onBack }) => {
    const [subView, setSubView] = useState<SubView>('DAILY');
    const [newExName, setNewExName] = useState("");
    const [newExReps, setNewExReps] = useState(20);

    const renderDaily = () => (
        <div className="space-y-4 animate-slide-up pb-10">
            <HeroCard 
                title="Fitness" 
                subtitle="Physical Health" 
                stat={state.daily.fitness.pushups} 
                statLabel="Pushups Today" 
                icon={<Dumbbell size={14} />} 
                bgImage={RANK_IMAGES.FITNESS} 
            />
            
            {/* Pushup Card */}
            <div className={`relative p-6 rounded-[2rem] border overflow-hidden transition-all duration-300 animate-slide-up group shadow-lg ${state.daily.fitness.pushups >= state.daily.fitness.pushupsTarget ? 'bg-orange-500/10 border-orange-500/30' : 'glass-panel border-transparent'}`}>
                {state.daily.fitness.pushups >= state.daily.fitness.pushupsTarget && <div className="absolute inset-0 bg-orange-500/5 animate-pulse"></div>}
                <div className="flex justify-between items-start relative z-10 mb-6">
                    <div>
                        <h3 className="text-xl font-bold text-primary flex items-center gap-2"><Dumbbell size={20} className="text-orange-500" /> Pushups</h3>
                        <p className="text-[10px] font-bold text-secondary uppercase tracking-widest mt-1">Target: {state.daily.fitness.pushupsTarget}</p>
                    </div>
                    {state.daily.fitness.pushups >= state.daily.fitness.pushupsTarget && <CheckCircle2 size={28} className="text-orange-500 drop-shadow-lg animate-scale-in" strokeWidth={3} />}
                </div>
                <div className="flex gap-3 relative z-10">
                     {[10, 20].map(amt => (
                         <button key={amt} onClick={() => updatePushups(amt)} className="flex-1 py-4 bg-orange-600 hover:bg-orange-500 text-white font-bold rounded-xl shadow-lg shadow-orange-900/30 active:scale-95 text-xs transition-all uppercase tracking-wider border border-white/10">+{amt} Reps</button>
                     ))}
                </div>
            </div>

             {/* Quick Add Presets Carousel */}
             <div className="overflow-x-auto no-scrollbar flex gap-2 py-2">
                 {PREDEFINED_WORKOUTS.map((w, i) => (
                     <button 
                        key={i} 
                        onClick={() => addCustomExercise(w.name, w.target)}
                        className="flex-shrink-0 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider hover:bg-orange-500 hover:text-white transition-all active:scale-95"
                     >
                        + {w.name}
                     </button>
                 ))}
             </div>

            {/* Custom Exercises */}
            {state.daily.fitness.customWorkouts.map((ex: Exercise) => (
                 <div key={ex.id} className={`relative p-6 rounded-[2rem] border overflow-hidden transition-all duration-300 animate-slide-up group shadow-lg ${ex.count >= ex.target ? 'bg-orange-500/10 border-orange-500/30' : 'glass-panel border-transparent'}`}>
                    {ex.count >= ex.target && <div className="absolute inset-0 bg-orange-500/5 animate-pulse"></div>}
                    <div className="flex justify-between items-start relative z-10 mb-4">
                        <div>
                            <h3 className="text-lg font-bold text-primary">{ex.name}</h3>
                            <div className="text-[10px] font-bold text-secondary uppercase tracking-widest mt-1">Target: {ex.target}</div>
                        </div>
                        {ex.count >= ex.target && <CheckCircle2 size={24} className="text-orange-500 drop-shadow-lg" strokeWidth={3} />}
                    </div>
                    <div className="flex items-center gap-4 relative z-10">
                        <div className="text-3xl font-mono font-bold text-white drop-shadow-sm">{ex.count}</div>
                        <button onClick={() => updateCustomExercise(ex.id, 10)} className="flex-1 py-3 bg-orange-600/80 hover:bg-orange-500 text-white font-bold rounded-xl shadow-lg active:scale-95 text-xs transition-all uppercase tracking-wider border border-white/10 flex items-center justify-center gap-2">
                            <Plus size={16} /> Add 10
                        </button>
                    </div>
                 </div>
            ))}
            
            <div className="glass-panel p-4 rounded-[1.5rem] flex gap-3 items-center mt-4 animate-slide-up border border-white/5 shadow-lg">
                <input type="text" placeholder="Custom..." className="bg-transparent text-sm text-primary p-2 flex-1 outline-none font-bold placeholder:text-secondary/40 placeholder:uppercase placeholder:text-xs" value={newExName} onChange={(e) => setNewExName(e.target.value)} />
                <input type="number" placeholder="#" className="bg-transparent text-sm text-primary p-2 w-16 outline-none font-bold border-l border-white/10" value={newExReps} onChange={(e) => setNewExReps(parseInt(e.target.value)||0)} />
                <button onClick={() => { if(newExName) { addCustomExercise(newExName, newExReps); setNewExName(""); } }} className="p-3 bg-white/5 rounded-xl text-primary hover:bg-white/10"><Plus size={18}/></button>
            </div>
        </div>
    );
    return (
        <TabWrapper themeColor="orange" subView={subView} setSubView={setSubView} onBack={onBack}>
            {subView === 'DAILY' && renderDaily()}
            {subView === 'STATS' && <GenericStatsView state={state} category="FITNESS" color="orange" checkDay={(d:any) => d.fitness.pushups >= d.fitness.pushupsTarget} getValue={(d:any) => d.fitness.pushups} maxVal={100} label="Pushups" labelTotal="Lifetime" />}
            {subView === 'AWARDS' && <AwardsView categories={['FITNESS']} unlocked={state.global.unlockedAchievements} />}
        </TabWrapper>
    );
};

export const TabHabits: React.FC<any> = ({ state, updateHabit, onBack }) => {
    const [subView, setSubView] = useState<SubView>('DAILY');
    const failed = state.daily.habits.failedToday;

    const renderDaily = () => (
        <div className="space-y-4 animate-slide-up pb-10">
            <HeroCard 
                title="Detox" 
                subtitle="Control Habits" 
                stat={failed ? "Failed" : "Clean"} 
                statLabel="Today's Status" 
                icon={<ShieldCheck size={14} />} 
                bgImage={RANK_IMAGES.HABITS}
            />
            
            {failed && <div className="p-5 rounded-[1.5rem] bg-red-500/10 border border-red-500/20 flex items-center gap-4 text-sm text-red-400 font-bold mb-4 animate-pulse shadow-lg"><AlertTriangle size={24} /> Daily Limit Exceeded</div>}
            
            <div className="grid grid-cols-2 gap-3">
                {[{k:'smoking', l:'Smoking', max:2}, {k:'nicotine', l:'Nicotine', max:3}].map((h:any) => (
                    <div key={h.k} onClick={() => updateHabit(h.k)} className={`glass-panel p-6 rounded-[2rem] border relative overflow-hidden group cursor-pointer active:scale-95 transition-all duration-300 animate-slide-up shadow-lg ${state.daily.habits[h.k+'Count'] > h.max ? 'border-red-500/50 bg-red-500/10' : 'border-transparent hover:border-slate-500/30'}`}>
                        <div className="flex flex-col items-center relative z-10 text-center">
                            <h3 className="text-secondary font-bold uppercase tracking-widest text-[10px] mb-4">{h.l}</h3>
                            <div className={`text-6xl font-mono font-bold mb-4 drop-shadow-lg ${state.daily.habits[h.k+'Count'] > h.max ? 'text-red-500' : 'text-primary'}`}>{state.daily.habits[h.k+'Count']}</div>
                            <div className="text-[9px] text-secondary/70 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 font-bold">Max Limit: {h.max}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
    return (
        <TabWrapper themeColor="slate" subView={subView} setSubView={setSubView} onBack={onBack}>
            {subView === 'DAILY' && renderDaily()}
            {subView === 'STATS' && <GenericStatsView state={state} category="HABITS" color="slate" checkDay={(d:any) => !d.habits.failedToday} getValue={(d:any) => d.habits.smokingCount + d.habits.nicotineCount} maxVal={5} label="Intake" labelTotal="Clean Days" totalValue={state.global.streaks.habits} />}
            {subView === 'AWARDS' && <AwardsView categories={['HABITS']} unlocked={state.global.unlockedAchievements} />}
        </TabWrapper>
    );
};

export const TabMDF: React.FC<any> = ({ state, resetRelapse, onBack }) => {
   const [subView, setSubView] = useState<SubView>('DAILY');
   const streak = state.global.streaks.mdf;
   
   const renderDaily = () => (
       <div className="space-y-4 animate-slide-up pb-10">
           <HeroCard 
                title="MDF" 
                subtitle="Purity Guard" 
                stat={streak} 
                statLabel="Clean Streak" 
                icon={<ShieldAlert size={14} />} 
                bgImage={RANK_IMAGES.MDF} 
           />
           
           <div className="glass-panel p-10 rounded-[2.5rem] border-rose-500/10 text-center flex flex-col items-center gap-8 mt-4 bg-gradient-to-b from-rose-900/10 to-transparent animate-slide-up shadow-2xl relative overflow-hidden">
               {/* Background effect */}
               <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-5"></div>
               
               <div className="w-28 h-28 rounded-full bg-rose-500/10 flex items-center justify-center border border-rose-500/20 shadow-[0_0_40px_rgba(244,63,94,0.15)] animate-pulse-slow">
                    <ShieldAlert size={48} className="text-rose-400 drop-shadow-md" />
               </div>
               <div className="relative z-10">
                   <h2 className="text-3xl font-bold text-primary mb-3">Stay Strong</h2>
                   <p className="text-sm text-secondary leading-relaxed max-w-[220px] mx-auto font-medium">Consistency is the key to purity. Do not give up.</p>
               </div>
               <button onClick={resetRelapse} className="w-full py-5 bg-rose-600 hover:bg-rose-700 text-white font-bold rounded-2xl shadow-lg shadow-rose-900/30 active:scale-95 text-xs uppercase tracking-widest flex items-center justify-center gap-3 transition-all border border-white/5 relative z-10"><AlertTriangle size={18} /> I Relapsed</button>
           </div>
       </div>
   );
   return (
       <TabWrapper themeColor="rose" subView={subView} setSubView={setSubView} onBack={onBack}>
           {subView === 'DAILY' && renderDaily()}
           {subView === 'STATS' && <GenericStatsView state={state} category="MDF" color="rose" checkDay={() => true} getValue={() => streak} maxVal={365} label="Streak" labelTotal="Max" totalValue={state.global.streaks.maxMdf} />}
           {subView === 'AWARDS' && <AwardsView categories={['MDF']} unlocked={state.global.unlockedAchievements} />}
       </TabWrapper>
   );
};

export const TabQuran: React.FC<any> = ({ state, updatePart, onBack }) => {
  const [subView, setSubView] = useState<SubView>('DAILY');

  const renderDaily = () => {
    const currentParahArabic = PARAH_NAMES_ARABIC[state.global.currentParah - 1];

    return (
        <div className="space-y-4 animate-slide-up pb-20">
            <HeroCard 
                title={currentParahArabic} 
                subtitle={`Parah ${state.global.currentParah}`} 
                stat="Reading" 
                statLabel="Status" 
                icon={<BookOpen size={14} />} 
                bgImage={RANK_IMAGES.QURAN} 
            />

            <div className="space-y-3">
                {Object.entries(QURAN_PART_LABELS).map(([key, label], idx) => {
                     const isCompleted = state.daily.quranParts[key as keyof typeof QURAN_PART_LABELS];
                     const arabicLabel = ["ربع", "نصف", "ثلاثة", "كامل"][idx]; 
                     return (
                         <TaskCard 
                            key={key}
                            title={arabicLabel}
                            subtitle={label}
                            icon={<div className="font-bold text-lg font-mono">{idx+1}</div>}
                            isCompleted={isCompleted}
                            onClick={() => updatePart(key)}
                         />
                     );
                })}
            </div>
        </div>
    );
  };

  return (
      <TabWrapper themeColor="purple" subView={subView} setSubView={setSubView} onBack={onBack}>
          {subView === 'DAILY' && renderDaily()}
          {subView === 'STATS' && <GenericStatsView state={state} category="QURAN" color="purple" checkDay={(d:any) => Object.values(d.quranParts).some(Boolean)} getValue={(d:any) => Object.values(d.quranParts).filter(Boolean).length} maxVal={4} label="Parts" labelTotal="Read" />}
          {subView === 'AWARDS' && <AwardsView categories={['QURAN']} unlocked={state.global.unlockedAchievements} />}
      </TabWrapper>
  );
};

export const TabNight: React.FC<any> = ({ state, updateNight, onBack }) => {
    const [subView, setSubView] = useState<SubView>('DAILY');
    const streak = state.global.streaks.night;

    return (
        <TabWrapper themeColor="indigo" subView={subView} setSubView={setSubView} onBack={onBack}>
            {subView === 'DAILY' && (
                <div className="space-y-4 animate-slide-up pb-10">
                    <HeroCard 
                        title="Night Routine" 
                        subtitle="Sunnah before sleep" 
                        stat={streak} 
                        statLabel="Streak" 
                        icon={<BedDouble size={14} />} 
                        bgImage={RANK_IMAGES.NIGHT}
                    />
                    
                    <div className="space-y-3">
                        <TaskCard 
                            title="Surah Al-Mulk" 
                            subtitle="Protection from Grave" 
                            icon={<Moon size={20} />} 
                            isCompleted={state.daily.night.surahMulk} 
                            onClick={() => updateNight('surahMulk')} 
                        />
                        <TaskCard 
                            title="Surah Baqarah" 
                            subtitle="Last 2 Verses" 
                            icon={<BookOpen size={20} />} 
                            isCompleted={state.daily.night.surahBaqarah} 
                            onClick={() => updateNight('surahBaqarah')} 
                        />
                    </div>
                </div>
            )}
            {subView === 'STATS' && <GenericStatsView state={state} category="NIGHT" color="indigo" checkDay={(d:any) => d.night.surahMulk} getValue={(d:any) => (d.night.surahMulk?1:0)} maxVal={2} label="Tasks" labelTotal="Total" />}
            {subView === 'AWARDS' && <AwardsView categories={['NIGHT']} unlocked={state.global.unlockedAchievements} />}
        </TabWrapper>
    );
};

export const TabHadees: React.FC<any> = ({ state, markRead, onBack }) => {
    const [subView, setSubView] = useState<SubView>('DAILY');
    const hadees = HADEES_COLLECTION[new Date().getDate() % HADEES_COLLECTION.length];

    const renderDaily = () => (
        <div className="space-y-4 animate-slide-up pb-10">
            <HeroCard 
                title="Hadees" 
                subtitle="Daily Wisdom" 
                stat={state.daily.hadeesRead ? "Read" : "Pending"} 
                statLabel="Status" 
                icon={<Scroll size={14} />} 
                bgImage={RANK_IMAGES.HADEES}
            />
            
            <div className="glass-panel p-8 rounded-[2.5rem] border-yellow-500/10 text-center flex flex-col items-center gap-8 relative overflow-hidden animate-slide-up shadow-2xl">
                 <div className="absolute top-0 right-0 p-10 bg-yellow-500/10 blur-[60px] rounded-full"></div>
                 <div className="opacity-80 text-yellow-500 animate-pulse-slow"><Sparkles size={32} /></div>
                 <h3 className="font-serif text-2xl leading-relaxed text-primary/90 drop-shadow-md" dir="auto">"{hadees}"</h3>
                 <button onClick={markRead} disabled={state.daily.hadeesRead} className={`w-full py-4 rounded-xl font-bold transition-all text-xs uppercase tracking-wider flex items-center justify-center gap-2 ${state.daily.hadeesRead ? 'bg-emerald-500/10 text-emerald-500 cursor-default border border-emerald-500/20' : 'bg-yellow-500 hover:bg-yellow-600 text-white shadow-xl shadow-yellow-900/30 active:scale-95'}`}>{state.daily.hadeesRead ? <><CheckCircle2 size={16}/> Completed</> : "Mark as Read"}</button>
            </div>
        </div>
    );
    return (
        <TabWrapper themeColor="gold" subView={subView} setSubView={setSubView} onBack={onBack}>
            {subView === 'DAILY' && renderDaily()}
            {subView === 'STATS' && <GenericStatsView state={state} category="HADEES" color="gold" checkDay={(d:any) => d.hadeesRead} getValue={(d:any) => d.hadeesRead?1:0} maxVal={1} label="Read" labelTotal="Total" />}
            {subView === 'AWARDS' && <AwardsView categories={['HADEES']} unlocked={state.global.unlockedAchievements} />}
        </TabWrapper>
    );
};

export const TabMemorize: React.FC<any> = ({ state, markLearned, onBack }) => {
    const [subView, setSubView] = useState<SubView>('DAILY');
    const streak = state.global.memorizeWeek;
    const currentDua = MEMORIZE_CONTENT[state.global.memorizeWeek % MEMORIZE_CONTENT.length];

    const renderDaily = () => (
        <div className="space-y-4 animate-slide-up pb-10">
            <HeroCard 
                title="Memorize" 
                subtitle="Weekly Goal" 
                stat={streak} 
                statLabel="Duas Learned" 
                icon={<Brain size={14} />} 
                bgImage={RANK_IMAGES.MEMORIZE} 
            />
            
            <div className="glass-panel p-10 rounded-[2.5rem] border-pink-500/20 text-center flex flex-col gap-8 relative overflow-hidden animate-slide-up shadow-2xl">
                <div className="absolute top-[-20px] left-[-20px] w-40 h-40 bg-pink-500/10 rounded-full blur-[50px]"></div>
                <div className="relative z-10">
                    <p className="text-3xl font-serif leading-loose text-primary/90 drop-shadow-sm" dir="rtl">{currentDua.arabic}</p>
                    <div className="w-16 h-1 bg-pink-500/30 rounded-full mx-auto my-6"></div>
                    <p className="text-sm text-secondary italic leading-relaxed font-medium">"{currentDua.english}"</p>
                </div>
                <button onClick={markLearned} className="w-full py-4 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-bold shadow-lg shadow-pink-900/30 active:scale-95 transition-all flex items-center justify-center gap-2 uppercase tracking-wider text-xs border border-white/5"><CheckCircle2 size={16} /> I've Memorized This</button>
            </div>
        </div>
    );
    return (
        <TabWrapper themeColor="pink" subView={subView} setSubView={setSubView} onBack={onBack}>
            {subView === 'DAILY' && renderDaily()}
            {subView === 'STATS' && <GenericStatsView state={state} category="MEMORIZE" color="pink" checkDay={() => false} getValue={() => 1} maxVal={1} label="Duas" labelTotal="Total" />}
            {subView === 'AWARDS' && <AwardsView categories={['MEMORIZE', 'QURAN']} unlocked={state.global.unlockedAchievements} />}
        </TabWrapper>
    );
};

export const TabRamadan: React.FC<any> = ({ state, toggleRamadanDaily, updateRamadanStat, onBack }) => {
    const [subView, setSubView] = useState<SubView>('DAILY');
    const streak = state.global.streaks.ramadan;
    const day = Math.min(30, state.global.ramadanStats.fastsDone + 1);

    const tasks = [
        { key: 'suhoor', label: 'Suhoor', urdu: 'سحور', icon: <Sunrise size={20} /> },
        { key: 'iftar', label: 'Iftar', urdu: 'افطار', icon: <Sunset size={20} /> },
        { key: 'taraweeh', label: 'Taraweeh', urdu: 'تراويح', icon: <Moon size={20} /> },
        { key: 'charity', label: 'Sadaqah', urdu: 'صدقة', icon: <Heart size={20} /> }
    ];

    const renderDaily = () => (
        <div className="space-y-4 animate-slide-up pb-10">
            <HeroCard 
                title="Ramadan" 
                subtitle={`Day ${day}`} 
                stat={day} 
                statLabel="Fasting Day" 
                icon={<Moon size={14} />} 
                bgImage={RANK_IMAGES.RAMADAN} 
            />
            
            <div className="space-y-3">
                {tasks.map((t) => (
                    <TaskCard 
                        key={t.key} 
                        title={t.urdu} 
                        subtitle={t.label} 
                        icon={t.icon} 
                        isCompleted={state.daily.ramadan[t.key]} 
                        onClick={() => toggleRamadanDaily(t.key)}
                    />
                ))}
            </div>
            
             <div onClick={() => updateRamadanStat('quranKhatams', 1)} className="glass-panel p-5 rounded-[2rem] border-transparent hover:border-purple-500/20 flex items-center justify-between mt-4 cursor-pointer active:scale-95 transition-transform bg-purple-500/5 animate-slide-up shadow-md">
                   <div className="flex items-center gap-4">
                       <div className="p-3 bg-purple-500/20 rounded-2xl text-purple-400"><BookOpen size={20} /></div>
                       <div>
                           <div className="text-sm font-bold text-primary">Quran Khatams</div>
                           <div className="text-[10px] text-secondary font-bold uppercase tracking-wider">Tap to increment</div>
                       </div>
                   </div>
                   <div className="text-4xl font-mono font-bold text-purple-500 drop-shadow-sm">{state.global.ramadanStats.quranKhatams}</div>
             </div>
        </div>
    );
    
    return (
        <TabWrapper themeColor="purple" subView={subView} setSubView={setSubView} onBack={onBack}>
            {subView === 'DAILY' && renderDaily()}
            {subView === 'STATS' && <GenericStatsView state={state} category="RAMADAN" color="purple" checkDay={(d:any) => d.ramadan.suhoor} getValue={(d:any) => d.ramadan.suhoor?1:0} maxVal={1} label="Fasts" labelTotal="Total" />}
            {subView === 'AWARDS' && <AwardsView categories={['RAMADAN']} unlocked={state.global.unlockedAchievements} />}
        </TabWrapper>
    );
};

export const TabSettings: React.FC<any> = ({ state, setTheme, toggleRamadan, exportData, importData, enterWidgetMode, buyFreeze, resetApp, requestNotify, onBack }) => {
    return (
        <TabWrapper themeColor="slate" subView="DAILY" setSubView={() => {}} onBack={onBack}>
        <div className="px-4 py-8 pb-32 space-y-8 animate-fade-in">
            <h2 className="text-3xl font-bold text-primary mb-6">Settings</h2>
            
            <section className="space-y-4">
                <h3 className="text-[10px] font-bold uppercase text-secondary tracking-widest border-b border-primary/5 pb-2">Appearance</h3>
                <div className="grid grid-cols-3 gap-3">
                    {['AUTO', 'DAY', 'NIGHT'].map((m) => (
                        <button key={m} onClick={() => setTheme(m)} className={`py-4 rounded-2xl border text-[10px] font-bold transition-all ${state.global.theme === m ? 'bg-primary text-white border-transparent shadow-lg' : 'glass-panel text-secondary border-transparent hover:bg-primary/5'}`}>{m}</button>
                    ))}
                </div>
            </section>

            <section className="space-y-4">
                <h3 className="text-[10px] font-bold uppercase text-secondary tracking-widest border-b border-primary/5 pb-2">Data</h3>
                <div className="grid grid-cols-2 gap-3">
                    <button onClick={exportData} className="py-6 rounded-[1.5rem] glass-panel border border-white/5 hover:bg-white/5 flex flex-col items-center justify-center gap-2 group transition-all active:scale-95 shadow-lg">
                        <Download size={24} className="text-emerald-400 group-hover:scale-110 transition-transform" />
                        <span className="text-xs font-bold text-primary">Backup Data</span>
                    </button>
                    <button onClick={importData} className="py-6 rounded-[1.5rem] glass-panel border border-white/5 hover:bg-white/5 flex flex-col items-center justify-center gap-2 group transition-all active:scale-95 shadow-lg">
                        <Upload size={24} className="text-blue-400 group-hover:scale-110 transition-transform" />
                        <span className="text-xs font-bold text-primary">Restore Data</span>
                    </button>
                </div>
            </section>

            <section className="space-y-4">
                <h3 className="text-[10px] font-bold uppercase text-secondary tracking-widest border-b border-primary/5 pb-2">Features</h3>
                <div onClick={toggleRamadan} className="glass-panel p-4 rounded-2xl flex items-center justify-between cursor-pointer border border-transparent hover:border-purple-500/20 transition-all shadow-md active:scale-95">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-purple-500/20 rounded-xl text-purple-400"><Tent size={18} /></div>
                        <div>
                            <div className="text-sm font-bold text-primary">Ramadan Mode</div>
                            <div className="text-[10px] text-secondary">Enable special tracking</div>
                        </div>
                    </div>
                    <div className={`w-12 h-7 rounded-full p-1 transition-colors ${state.global.ramadanMode ? 'bg-purple-500' : 'bg-secondary/20'}`}><div className={`w-5 h-5 bg-white rounded-full transition-transform shadow ${state.global.ramadanMode ? 'translate-x-5' : ''}`} /></div>
                </div>

                <div onClick={requestNotify} className="glass-panel p-4 rounded-2xl flex items-center justify-between cursor-pointer border border-transparent hover:border-blue-500/20 transition-all shadow-md active:scale-95">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400"><Bell size={18} /></div>
                        <div>
                            <div className="text-sm font-bold text-primary">Notifications</div>
                            <div className="text-[10px] text-secondary">Enable daily reminders</div>
                        </div>
                    </div>
                    <div className="w-12 h-7 rounded-full bg-secondary/20 p-1"><div className="w-5 h-5 bg-white/50 rounded-full" /></div>
                </div>
            </section>
            
            <section className="pt-6">
                <button onClick={resetApp} className="w-full py-4 border border-red-500/30 bg-red-500/5 text-red-500 rounded-2xl hover:bg-red-500/10 text-[10px] font-bold uppercase tracking-widest flex items-center justify-center gap-2 active:scale-95 transition-all"><Trash2 size={16} /> Reset All Progress</button>
                <p className="text-center text-[9px] text-secondary mt-4 opacity-50">Zohaib Tracker v3.2 • Built with ❤️</p>
            </section>
        </div>
        </TabWrapper>
    );
};
