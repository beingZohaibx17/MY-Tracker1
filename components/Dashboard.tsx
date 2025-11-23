
import * as React from 'react';
import { useState, useEffect } from 'react';
import { 
  Moon, Activity, Droplets, Flame, Lock, Calendar, Sparkles, Tent, ShieldCheck, Snowflake, Maximize2, ArrowRight, Trophy, Star, TrendingUp, CheckCircle2, BookOpen, ChevronRight, Zap, Clock, Lightbulb, HeartPulse, Sunrise, Sun, Sunset, Brain, Dumbbell, Cigarette, Scroll, BedDouble, Quote, Target, Waves, ShieldAlert, LayoutGrid, Heart
} from 'lucide-react';
import { AppState, ViewState, SpiritualMood } from '../types';
import { DAILY_QUOTES, DUAS } from '../constants';
import { RANK_IMAGES } from './SimpleTabs';
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
                stroke="rgba(255, 255, 255, 0.1)"
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
                className="transition-all duration-1000 ease-out"
            />
        </svg>
    );
};

export const Dashboard: React.FC<Props> = ({ state, changeView, updateMood }) => {
  const [time, setTime] = useState(new Date());
  const seed = new Date().getDate();
  const dailyQuote = DAILY_QUOTES[seed % DAILY_QUOTES.length];
  const dailyDua = DUAS[seed % DUAS.length];

  const currentXP = state.global.xp;
  const currentLevel = Math.floor(Math.sqrt(currentXP / 100)) + 1;
  const nextLevelXP = Math.pow(currentLevel, 2) * 100;
  const xpProgress = (currentXP / nextLevelXP) * 100;
  
  // Calculate Daily Stats for Widgets
  const dailySalahCount = state.daily.prayers.filter(p => p.completed).length;
  const dailyDhikrCount = state.daily.dhikrAstaghfirullah + state.daily.dhikrRabbiInni + state.daily.customDhikr.reduce((a,b)=>a+b.count, 0);
  const dailyHygieneCount = (state.daily.hygiene.waterGlasses >= 8 ? 1 : 0) + (state.daily.hygiene.shower?1:0) + (state.daily.hygiene.brush?1:0) + (state.daily.hygiene.cleanDesk?1:0);
  const memorizeTotal = state.global.memorizeProgress;
  
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

  const formattedTime = time.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
  const streaks = state.global.streaks;

  return (
    <div className="pb-40 px-5 pt-14 animate-fade-in space-y-8 max-w-lg mx-auto">
      
      {/* Header Section */}
      <div className="flex justify-between items-start animate-slide-up relative z-20">
        <div>
          <h2 className="text-[10px] font-bold text-emerald-500 uppercase tracking-[0.2em] mb-1">{time.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric', month: 'short' })}</h2>
          <h1 className="text-2xl font-bold text-white tracking-tight drop-shadow-md mb-4">
            {getGreeting()}
          </h1>
          
           {/* Level / XP Pill */}
           <div className="bg-white/5 border border-white/10 rounded-full p-1.5 pr-4 flex items-center gap-3 backdrop-blur-md shadow-lg w-fit">
                <div className="bg-emerald-500 text-black text-[10px] font-bold px-3 py-1.5 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.4)]">LVL {currentLevel}</div>
                <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(52,211,153,0.5)]" style={{ width: `${Math.min(100, xpProgress)}%` }}></div>
                </div>
           </div>
        </div>

        {/* Daily Iman Score Indicator */}
        <div className="flex flex-col items-center justify-center relative">
            <div className="relative">
                <CircularProgress value={state.daily.imanScore} size={70} strokeWidth={6} color={state.daily.imanScore > 80 ? '#34d399' : state.daily.imanScore > 50 ? '#fbbf24' : '#ef4444'} />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-lg font-bold text-white font-mono leading-none">{Math.round(state.daily.imanScore)}</span>
                    <Heart size={10} className={`mt-1 ${state.daily.imanScore > 80 ? 'text-emerald-400' : 'text-rose-400'} animate-pulse`} fill="currentColor" />
                </div>
            </div>
            <span className="text-[8px] font-bold uppercase tracking-widest text-secondary mt-2">Iman Score</span>
        </div>
      </div>

      {/* Daily Inspiration Grid (Quote + Dua) */}
      <div className="grid grid-cols-1 gap-5 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {/* Quote Banner */}
          <div className="relative rounded-[2rem] overflow-hidden group min-h-[160px] shadow-2xl border border-white/5 hover:border-white/20 transition-all">
              <img src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop" alt="Quote Background" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110 opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
              <div className="relative z-10 p-6 flex flex-col justify-center h-full">
                  <div className="bg-white/10 w-fit p-2 rounded-xl mb-3 backdrop-blur-sm"><Quote size={20} className="text-white/80" /></div>
                  <p className="font-serif text-lg text-white/95 italic leading-relaxed drop-shadow-md">"{dailyQuote}"</p>
              </div>
          </div>

          {/* Daily Dua Banner */}
          <div className="relative rounded-[2rem] overflow-hidden group min-h-[160px] shadow-2xl border border-white/5 hover:border-white/20 transition-all">
              <img src="https://images.unsplash.com/photo-1564121211835-e88c852648ab?q=80&w=1974&auto=format&fit=crop" alt="Dua Background" className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] group-hover:scale-110 opacity-60" />
              <div className="absolute inset-0 bg-gradient-to-l from-emerald-950/90 via-black/60 to-black/30"></div>
              <div className="relative z-10 p-6 flex flex-col justify-center h-full text-right items-end">
                  <p className="font-arabic text-2xl text-emerald-100 leading-loose drop-shadow-md" dir="rtl">{dailyDua.arabic}</p>
                  <p className="text-xs text-white/80 font-medium max-w-[90%] mt-2 italic">{dailyDua.english}</p>
              </div>
          </div>
      </div>

      {/* Main Grid */}
      <div className="animate-slide-up" style={{ animationDelay: '0.3s' }}>
        <div className="flex items-center gap-2 mb-4 opacity-70">
            <LayoutGrid size={14} className="text-emerald-400" />
            <h3 className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Activity Hub</h3>
        </div>
        
        <div className="grid grid-cols-2 gap-3 mb-6">
            {/* Salah */}
            <StatCard 
                title={isFriday ? "Jumuah" : "Salah"} 
                icon={<Moon size={18} />} 
                value={`${dailySalahCount}/5`}
                label="Daily"
                subValue={streaks.maxSalah || streaks.salah}
                subLabel="Best Streak"
                color="emerald" 
                bgImage={isFriday ? "https://images.unsplash.com/photo-1584553195825-4161945a886f?q=80&w=2070&auto=format&fit=crop" : RANK_IMAGES.SALAH}
                onClick={() => changeView(ViewState.SALAH)} 
            />
            
            {/* Quran */}
            <StatCard 
                title="Quran" 
                icon={<BookOpen size={18} />} 
                value={`Parah ${state.global.currentParah}`}
                label="Current"
                subValue={state.global.quransRecited}
                subLabel="Khatams"
                color="purple" 
                bgImage={RANK_IMAGES.QURAN}
                onClick={() => changeView(ViewState.QURAN)} 
            />

            {/* Dhikr */}
            <StatCard 
                title="Dhikr" 
                icon={<Activity size={18} />} 
                value={dailyDhikrCount}
                label="Count Today"
                subValue={streaks.maxDhikr || streaks.dhikr}
                subLabel="Max Streak"
                color="amber" 
                bgImage={RANK_IMAGES.DHIKR}
                onClick={() => changeView(ViewState.DHIKR)} 
            />

            {/* Memorize */}
            <StatCard 
                title="Memorize" 
                icon={<Brain size={18} />} 
                value={`Week ${state.global.memorizeWeek}`}
                label="Progress"
                subValue={memorizeTotal}
                subLabel="Learned"
                color="pink" 
                bgImage={RANK_IMAGES.MEMORIZE}
                onClick={() => changeView(ViewState.MEMORIZE)} 
            />

            {/* MDF / Purity */}
            <StatCard 
                title="Purity" 
                icon={<ShieldAlert size={18} />} 
                value={`${streaks.mdf}d`}
                label="Current Streak"
                subValue={streaks.maxMdf || streaks.mdf}
                subLabel="Max Streak"
                color="rose" 
                bgImage={RANK_IMAGES.MDF}
                onClick={() => changeView(ViewState.MDF)} 
            />

            {/* Hadees */}
            <StatCard 
                title="Hadees" 
                icon={<Scroll size={18} />} 
                value={state.daily.hadeesRead ? "Read" : "Pending"}
                label="Daily"
                subValue={streaks.maxHadees || streaks.hadees}
                subLabel="Max Streak"
                color="yellow" 
                bgImage={RANK_IMAGES.HADEES}
                onClick={() => changeView(ViewState.HADEES)} 
            />

             {/* Night Routine */}
             <StatCard 
                title="Night" 
                icon={<BedDouble size={18} />} 
                value={state.daily.night.surahMulk ? "Done" : "Pending"}
                label="Routine"
                subValue={streaks.maxNight || streaks.night}
                subLabel="Max Streak"
                color="indigo" 
                bgImage={RANK_IMAGES.NIGHT}
                onClick={() => changeView(ViewState.NIGHT)} 
            />

            {/* Fitness */}
            <StatCard 
                title="Fitness" 
                icon={<Dumbbell size={18} />} 
                value={state.daily.fitness.pushups}
                label="Pushups"
                subValue={streaks.maxFitness || streaks.fitness}
                subLabel="Max Streak"
                color="orange" 
                bgImage={RANK_IMAGES.FITNESS}
                onClick={() => changeView(ViewState.FITNESS)} 
            />

            {/* Hygiene */}
            <StatCard 
                title="Hygiene" 
                icon={<Droplets size={18} />} 
                value={`${dailyHygieneCount}/4`}
                label="Tasks"
                subValue={streaks.maxHygiene || streaks.hygiene}
                subLabel="Max Streak"
                color="cyan" 
                bgImage={RANK_IMAGES.HYGIENE}
                onClick={() => changeView(ViewState.HYGIENE)} 
            />
            
            {/* Habits/Detox */}
            <StatCard 
                title="Detox" 
                icon={<ShieldCheck size={18} />} 
                value={state.daily.habits.failedToday ? "Relapsed" : "Clean"}
                label="Today"
                subValue={streaks.maxHabits || streaks.habits}
                subLabel="Max Streak"
                color="slate" 
                bgImage={RANK_IMAGES.HABITS}
                onClick={() => changeView(ViewState.HABITS)} 
            />

            {/* Ramadan (Conditional) */}
            {state.global.ramadanMode && (
                 <StatCard 
                    title="Ramadan" 
                    icon={<Tent size={18} />} 
                    value={state.daily.ramadan.suhoor ? "Active" : "Pending"}
                    label="Status"
                    subValue={streaks.maxRamadan || streaks.ramadan}
                    subLabel="Max Streak"
                    color="teal" 
                    bgImage={RANK_IMAGES.RAMADAN}
                    onClick={() => changeView(ViewState.RAMADAN)} 
                />
            )}
        </div>

        {/* Consistency Map */}
        <div className="glass-panel p-6 rounded-[2rem] border border-white/5 bg-white/[0.02] shadow-xl">
            <h3 className="text-[10px] font-black text-white uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                <Activity size={14} className="text-emerald-500" />
                Momentum
            </h3>
            <ActivityHeatmap history={state.global.history} current={state.daily} />
        </div>
      </div>
    </div>
  );
};

// Reusable Professional Card Component
const StatCard: React.FC<{
    title: string;
    icon: React.ReactNode;
    value: string | number;
    label: string;
    subValue: string | number;
    subLabel: string;
    color: string;
    bgImage?: string;
    onClick: () => void;
}> = ({ title, icon, value, label, subValue, subLabel, color, bgImage, onClick }) => {
    
    const colorStyles: Record<string, any> = {
        emerald: { text: 'text-emerald-400', bg: 'bg-emerald-500' },
        amber: { text: 'text-amber-400', bg: 'bg-amber-500' },
        purple: { text: 'text-purple-400', bg: 'bg-purple-500' },
        rose: { text: 'text-rose-400', bg: 'bg-rose-500' },
        cyan: { text: 'text-cyan-400', bg: 'bg-cyan-500' },
        orange: { text: 'text-orange-400', bg: 'bg-orange-500' },
        indigo: { text: 'text-indigo-400', bg: 'bg-indigo-500' },
        yellow: { text: 'text-yellow-400', bg: 'bg-yellow-500' },
        teal: { text: 'text-teal-400', bg: 'bg-teal-500' },
        slate: { text: 'text-slate-400', bg: 'bg-slate-500' },
        pink: { text: 'text-pink-400', bg: 'bg-pink-500' },
    };

    const styles = colorStyles[color] || colorStyles.emerald;

    return (
        <button 
            onClick={onClick} 
            className={`group relative overflow-hidden rounded-[24px] h-36 text-left transition-all duration-500 border border-white/5 bg-white/[0.03] backdrop-blur-md active:scale-95 shadow-lg hover:shadow-2xl hover:border-white/10`}
        >
            {/* Background Image */}
            {bgImage && (
                <div className="absolute inset-0 transition-transform duration-[8s] group-hover:scale-110 z-0">
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${bgImage})`, filter: 'grayscale(30%)' }} />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/60 group-hover:to-black/70 transition-colors duration-500" />
                </div>
            )}

            <div className="relative z-10 flex flex-col h-full justify-between p-5">
                <div className="flex items-center justify-between">
                     <span className="text-[10px] font-black text-white uppercase tracking-[0.15em] drop-shadow-md">{title}</span>
                     <div className={`p-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/5 ${styles.text} shadow-sm group-hover:bg-white/20 transition-colors transform group-hover:rotate-12`}>
                        {icon}
                     </div>
                </div>

                <div className="flex items-end justify-between">
                    <div>
                        <div className="text-[8px] text-white/60 uppercase tracking-widest font-bold mb-0.5">{label}</div>
                        <div className="text-2xl font-mono font-bold text-white leading-none drop-shadow-lg tracking-tight group-hover:translate-x-1 transition-transform">{value}</div>
                    </div>
                    
                    <div className="text-right">
                        <div className="text-[7px] text-white/50 uppercase tracking-widest font-bold mb-0.5">{subLabel}</div>
                        <div className={`flex items-center justify-end gap-1 text-[9px] font-bold text-white/90 bg-black/40 px-2 py-1 rounded-lg backdrop-blur-md border border-white/10 group-hover:bg-black/60 transition-colors`}>
                            <Trophy size={10} className="text-yellow-400" />
                            <span>{subValue}</span>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Hover shine effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none"></div>
        </button>
    );
};
