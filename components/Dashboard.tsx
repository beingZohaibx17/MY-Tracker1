
import * as React from 'react';
import { useState, useEffect } from 'react';
import { 
  Moon, Activity, Trophy, Dumbbell, Scroll, BedDouble, Quote, LayoutGrid, Heart, BookOpen, ChevronRight, Sparkles, ShieldAlert, ShieldCheck, Droplets, Brain, Tent, ChevronDown, ChevronUp, MapPin, Calendar, Check
} from 'lucide-react';
import { AppState, ViewState, SpiritualMood } from '../types';
import { DAILY_QUOTES, DUAS } from '../constants';
import { RANK_IMAGES, JUMUAH_IMAGE } from './SimpleTabs';
import { ActivityHeatmap } from './Charts';

interface Props {
  state: AppState;
  changeView: (view: ViewState) => void;
  updateMood?: (mood: SpiritualMood) => void;
}

const CircularProgress: React.FC<{ value: number; size: number; strokeWidth: number; color: string }> = ({ value, size, strokeWidth, color }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (value / 100) * circumference;

    return (
        <svg width={size} height={size} className="transform -rotate-90">
            <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth={strokeWidth}
                fill="none"
            />
            <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke={color}
                strokeWidth={strokeWidth}
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-out shadow-[0_0_10px_currentColor]"
            />
        </svg>
    );
};

export const Dashboard: React.FC<Props> = ({ state, changeView, updateMood }) => {
  const [time, setTime] = useState(new Date());
  const [isExpanded, setIsExpanded] = useState(true); // Default expanded to show all widgets
  const seed = new Date().getDate();
  const dailyQuote = DAILY_QUOTES[seed % DAILY_QUOTES.length];
  const dailyDua = DUAS[seed % DUAS.length];

  const currentXP = state.global.xp;
  const currentLevel = Math.floor(Math.sqrt(currentXP / 100)) + 1;
  const nextLevelXP = Math.pow(currentLevel, 2) * 100;
  const xpProgress = (currentXP / nextLevelXP) * 100;
  
  const dailySalahCount = state.daily.prayers.filter(p => p.completed).length;
  
  const isFriday = new Date().getDay() === 5;

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hour = time.getHours();
    let greeting = 'Good Evening';
    if (hour < 5) greeting = 'Tahajjud Time';
    else if (hour < 7) greeting = 'Fajr Time';
    else if (hour < 12) greeting = 'Good Morning';
    else if (hour < 17) greeting = 'Good Afternoon';
    else if (hour < 20) greeting = 'Maghrib Time';
    
    return `${greeting}, Zohaib`;
  };

  return (
    <div className="pb-40 px-5 pt-14 animate-fade-in space-y-4 max-w-lg mx-auto">
      
      {/* Professional Header & Level */}
      <div className="flex justify-between items-start animate-slide-up relative z-20 mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
             <div className="px-2 py-0.5 rounded-md bg-white/10 border border-white/10 text-[9px] font-bold text-emerald-400 uppercase tracking-widest backdrop-blur-md">
                {time.toLocaleDateString('en-US', { weekday: 'long' })}
             </div>
             <div className="h-px w-8 bg-white/10"></div>
             <span className="text-[10px] text-secondary font-mono">{time.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
          </div>
          <h1 className="text-3xl font-serif font-bold text-white tracking-tight drop-shadow-md leading-none">
            {getGreeting()}
          </h1>
        </div>
        
        <div className="flex flex-col items-end gap-1.5">
             <div className="flex items-center gap-2 text-[10px] font-black uppercase text-secondary tracking-widest">
                <Trophy size={10} className="text-yellow-500" />
                <span>Lvl {currentLevel}</span>
             </div>
             <div className="w-28 h-2 bg-slate-800/50 rounded-full overflow-hidden border border-white/5">
                  <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.6)]" style={{ width: `${Math.min(100, xpProgress)}%` }}></div>
             </div>
             <div className="text-[9px] text-emerald-500/60 font-mono">{Math.floor(currentXP)} XP</div>
        </div>
      </div>

      {/* Hero Stats Section */}
      <div className="grid grid-cols-6 gap-3 animate-slide-up" style={{ animationDelay: '0.1s' }}>
          
          {/* Main Iman Score Card */}
          <div className="col-span-4 bg-gradient-to-br from-emerald-950 via-slate-900 to-black rounded-[2rem] p-6 border border-emerald-500/20 relative overflow-hidden backdrop-blur-xl group transition-all duration-300 shadow-2xl">
               <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-500/20 transition-all duration-700"></div>
               <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-emerald-900/10 to-transparent"></div>
               
               <div className="flex justify-between items-start mb-2 relative z-10">
                   <div>
                       <h3 className="text-sm font-bold text-white">Iman Score</h3>
                       <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider opacity-80">Daily Aggregate</p>
                   </div>
                   <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                       <Heart size={14} className="text-emerald-500 fill-emerald-500/20" />
                   </div>
               </div>
               
               <div className="flex items-baseline gap-2 mt-4 relative z-10">
                   <div className="text-6xl font-mono font-bold text-white tracking-tighter drop-shadow-lg">{Math.round(state.daily.imanScore)}</div>
                   <div className="text-xl text-white/40 font-light">%</div>
               </div>
               
               <div className="w-full bg-white/5 h-1.5 rounded-full mt-6 overflow-hidden relative z-10">
                    <div className="h-full bg-emerald-500 transition-all duration-1000 ease-out shadow-[0_0_10px_#10b981]" style={{ width: `${state.daily.imanScore}%` }}></div>
               </div>
          </div>

          {/* Quick Stats Column */}
          <div className="col-span-2 flex flex-col gap-3">
             <div className="flex-1 bg-white/5 border border-white/10 rounded-[2rem] p-3 flex flex-col items-center justify-center backdrop-blur-md relative overflow-hidden group">
                  <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <CircularProgress value={(dailySalahCount/6)*100} size={50} strokeWidth={4} color="#10b981" />
                  <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">{dailySalahCount}/6</div>
                  <div className="text-[9px] uppercase tracking-wider text-secondary font-bold mt-2">Salah</div>
             </div>
             
             <div className="flex-1 bg-white/5 border border-white/10 rounded-[2rem] p-3 flex flex-col items-center justify-center backdrop-blur-md relative overflow-hidden group">
                  <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <CircularProgress value={state.daily.hygiene.waterGlasses >= 8 ? 100 : (state.daily.hygiene.waterGlasses/8)*100} size={50} strokeWidth={4} color="#06b6d4" />
                  <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">{state.daily.hygiene.waterGlasses}</div>
                  <div className="text-[9px] uppercase tracking-wider text-secondary font-bold mt-2">Water</div>
             </div>
          </div>
      </div>

      {/* Friday Context Widget */}
      {isFriday && (
        <div className="bg-gradient-to-r from-emerald-900 to-teal-900 rounded-[2rem] p-6 border border-emerald-500/30 relative overflow-hidden shadow-2xl animate-scale-in group cursor-pointer" onClick={() => changeView(ViewState.QURAN)}>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse-slow"></div>
            <div className="flex justify-between items-center relative z-10">
                <div>
                     <div className="flex items-center gap-2 mb-2">
                        <span className="text-[9px] font-black uppercase tracking-widest text-emerald-200 bg-white/10 px-2 py-1 rounded-md backdrop-blur-sm">Blessed Friday</span>
                        <Sparkles size={12} className="text-yellow-400 animate-spin-slow" />
                     </div>
                     <h2 className="text-2xl font-serif font-bold text-white mb-2 text-glow">Jumuah & Kahf</h2>
                     <p className="text-xs text-emerald-100/80 max-w-[200px] leading-relaxed">
                         Don't forget to recite Surah Al-Kahf and send Durood upon the Prophet (ﷺ) today.
                     </p>
                </div>
                <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform duration-500 rotate-3 group-hover:rotate-0">
                    🕌
                </div>
            </div>
        </div>
      )}

      {/* Apps Grid */}
      <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
           <div className="flex justify-between items-center mb-2 px-1">
               <h3 className="text-[10px] font-black uppercase tracking-widest text-secondary">Applications</h3>
               <button onClick={() => setIsExpanded(!isExpanded)} className="text-[10px] font-bold uppercase tracking-wider text-emerald-500/80 hover:text-emerald-400 flex items-center gap-1">
                   {isExpanded ? 'Collapse' : 'Expand'} <ChevronDown size={12} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
               </button>
           </div>

           <div className={`grid grid-cols-4 gap-3 transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[1600px] opacity-100' : 'max-h-[300px] opacity-100'}`}>
                {/* Row 1 */}
                <BentoCard 
                    colSpan={2} title="Salah" subtitle="Prayer" 
                    icon={<Moon size={18}/>} color="emerald" 
                    onClick={() => changeView(ViewState.SALAH)} image={isFriday ? JUMUAH_IMAGE : RANK_IMAGES.SALAH} 
                    streak={state.global.streaks.salah}
                    daily={`${state.daily.prayers.filter(p=>p.completed).length}/6`}
                />
                <BentoCard 
                    colSpan={2} title="Quran" subtitle="Recite" 
                    icon={<BookOpen size={18}/>} color="purple" 
                    onClick={() => changeView(ViewState.QURAN)} image={RANK_IMAGES.QURAN} 
                    streak={state.global.currentParah} streakLabel="Parah"
                    daily={`${Object.values(state.daily.quranParts).filter(Boolean).length}/4`}
                />
                
                {/* Row 2 */}
                <BentoCard 
                    colSpan={1} title="Dhikr" color="amber" icon={<Activity size={16}/>} small
                    onClick={() => changeView(ViewState.DHIKR)} image={RANK_IMAGES.DHIKR} 
                    streak={state.global.streaks.dhikr}
                    daily={state.daily.dhikrAstaghfirullah + state.daily.dhikrRabbiInni + state.daily.customDhikr.reduce((a,b)=>a+b.count,0)}
                />
                <BentoCard 
                    colSpan={1} title="Hadees" color="yellow" icon={<Scroll size={16}/>} small
                    onClick={() => changeView(ViewState.HADEES)} image={RANK_IMAGES.HADEES} 
                    streak={state.global.streaks.hadees}
                    daily={state.daily.hadeesRead ? "✓" : "-"}
                />
                <BentoCard 
                    colSpan={1} title="Night" color="indigo" icon={<BedDouble size={16}/>} small
                    onClick={() => changeView(ViewState.NIGHT)} image={RANK_IMAGES.NIGHT} 
                    streak={state.global.streaks.night}
                    daily={`${Object.values(state.daily.night).filter(Boolean).length}/5`}
                />
                <BentoCard 
                    colSpan={1} title="Fit" color="orange" icon={<Dumbbell size={16}/>} small
                    onClick={() => changeView(ViewState.FITNESS)} image={RANK_IMAGES.FITNESS} 
                    streak={state.global.streaks.fitness}
                    daily={state.daily.fitness.pushups}
                />

                {/* Row 3 */}
                <BentoCard 
                    colSpan={2} title="MDF" subtitle="Purity Guard" 
                    icon={<ShieldAlert size={18}/>} color="rose" 
                    onClick={() => changeView(ViewState.MDF)} image={RANK_IMAGES.MDF} 
                    streak={state.global.streaks.mdf} streakLabel="Streak"
                    daily={state.daily.habits.failedToday ? "Relapse" : "Clean"}
                />
                <BentoCard 
                    colSpan={2} title="Detox" subtitle="Habits" 
                    icon={<ShieldCheck size={18}/>} color="slate" 
                    onClick={() => changeView(ViewState.HABITS)} image={RANK_IMAGES.HABITS} 
                    streak={state.global.streaks.habits}
                    daily={state.daily.habits.failedToday ? "Fail" : "Pass"}
                />
                
                {/* Row 4 */}
                <BentoCard 
                    colSpan={2} title="AI Guide" subtitle="Assistant" 
                    icon={<Sparkles size={18}/>} color="blue" 
                    onClick={() => changeView(ViewState.AI_CHAT)} image={RANK_IMAGES.AI_CHAT} 
                    streak={null} daily="Online"
                />
                <div className="col-span-2 grid grid-cols-2 gap-3">
                    <BentoCard 
                        colSpan={1} title="Clean" color="cyan" icon={<Droplets size={16}/>} small
                        onClick={() => changeView(ViewState.HYGIENE)} image={RANK_IMAGES.HYGIENE} 
                        streak={state.global.streaks.hygiene}
                        daily={`${state.daily.hygiene.waterGlasses}/8`}
                    />
                    <BentoCard 
                        colSpan={1} title="Learn" color="pink" icon={<Brain size={16}/>} small
                        onClick={() => changeView(ViewState.MEMORIZE)} image={RANK_IMAGES.MEMORIZE} 
                        streak={state.global.memorizeProgress}
                        daily={state.global.memorizeWeek}
                    />
                </div>

                {state.global.ramadanMode && (
                    <BentoCard 
                        colSpan={4} title="Ramadan" subtitle="Holy Month" 
                        icon={<Tent size={18}/>} color="purple" 
                        onClick={() => changeView(ViewState.RAMADAN)} image={RANK_IMAGES.RAMADAN} 
                        streak={state.global.ramadanStats.fastsDone} streakLabel="Fasts"
                        daily={state.daily.ramadan.iftar ? "Iftar Done" : "Fasting"}
                    />
                )}
           </div>
      </div>

      {/* Activity Heatmap */}
      <div className="glass-panel p-6 rounded-[2rem] border border-white/5 bg-white/[0.02] shadow-xl animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-[10px] font-black text-white uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                <Activity size={14} className="text-emerald-500" />
                Momentum
            </h3>
            <ActivityHeatmap history={state.global.history} current={state.daily} />
      </div>

    </div>
  );
};

interface BentoCardProps {
    title: string;
    subtitle?: string;
    icon?: React.ReactNode;
    color: string;
    onClick: () => void;
    image: string;
    colSpan?: number;
    small?: boolean;
    streak?: number | null;
    streakLabel?: string;
    daily?: string | number;
}

const BentoCard: React.FC<BentoCardProps> = ({ title, subtitle, icon, color, onClick, image, colSpan = 2, small, streak, streakLabel, daily }) => (
    <button onClick={onClick} className={`relative ${small ? 'h-28' : 'h-36'} col-span-${colSpan} rounded-[1.8rem] overflow-hidden group border border-white/5 shadow-lg active:scale-95 transition-all duration-300 hover:border-white/20 hover:shadow-2xl`}>
        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-60 group-hover:opacity-40 grayscale group-hover:grayscale-0" style={{ backgroundImage: `url(${image})` }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent"></div>
        
        {/* Streak/Overall Badge */}
        {streak !== undefined && streak !== null && (
             <div className="absolute top-3 right-3 flex flex-col items-end z-20">
                 <div className="flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2 py-1 rounded-lg border border-white/10 shadow-sm">
                     <span className={`text-[10px] font-bold text-${color}-400`}>{streakLabel || 'Streak'}</span>
                     <span className="text-sm font-black text-white leading-none">{streak}</span>
                 </div>
             </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-4 z-10 flex items-end justify-between">
            <div className="text-left">
                {!small && icon && (
                    <div className={`w-7 h-7 rounded-full bg-${color}-500 flex items-center justify-center text-white mb-2 shadow-lg shadow-black/50 text-sm`}>
                        {icon}
                    </div>
                )}
                <h3 className={`${small ? 'text-sm' : 'text-lg'} font-bold text-white leading-none mb-0.5`}>{title}</h3>
                {subtitle && <p className="text-[8px] font-bold uppercase tracking-widest text-white/50">{subtitle}</p>}
            </div>

            {/* Daily Progress */}
            {daily !== undefined && (
                <div className="text-right flex flex-col items-end">
                     <div className={`text-sm font-mono font-bold text-${color}-400 drop-shadow-md`}>{daily}</div>
                     {small && <div className="text-[7px] text-white/30 font-bold uppercase tracking-wider">Today</div>}
                </div>
            )}
        </div>
        
        {/* Hover Arrow */}
        <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white/20 backdrop-blur-md p-1.5 rounded-full text-white">
                <ChevronRight size={12} />
            </div>
        </div>
    </button>
);
