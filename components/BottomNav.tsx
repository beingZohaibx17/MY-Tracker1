
import * as React from 'react';
import { Moon, Orbit, BookOpen, ShieldAlert, Dumbbell, Brain, Settings, Tent, LayoutGrid, Droplets, ShieldCheck, Scroll, BedDouble, Sparkles } from 'lucide-react';
import { ViewState } from '../types';

interface Props {
  currentView: ViewState;
  changeView: (view: ViewState) => void;
  ramadanMode: boolean;
}

export const BottomNav: React.FC<Props> = ({ currentView, changeView, ramadanMode }) => {
  const navItems = [
    { id: ViewState.DASHBOARD, icon: <LayoutGrid size={22} />, label: 'Home' },
    { id: ViewState.SALAH, icon: <Moon size={22} />, label: 'Salah' },
    { id: ViewState.DHIKR, icon: <Orbit size={22} />, label: 'Dhikr' },
    { id: ViewState.AI_CHAT, icon: <Sparkles size={22} />, label: 'Guide' }, // AI Chat
    { id: ViewState.QURAN, icon: <BookOpen size={22} />, label: 'Quran' },
    { id: ViewState.HADEES, icon: <Scroll size={22} />, label: 'Hadees' },
    { id: ViewState.NIGHT, icon: <BedDouble size={22} />, label: 'Night' },
    { id: ViewState.FITNESS, icon: <Dumbbell size={22} />, label: 'Fit' },
    { id: ViewState.HYGIENE, icon: <Droplets size={22} />, label: 'Clean' },
    { id: ViewState.HABITS, icon: <ShieldCheck size={22} />, label: 'Detox' },
    { id: ViewState.MDF, icon: <ShieldAlert size={22} />, label: 'MDF' },
    { id: ViewState.MEMORIZE, icon: <Brain size={22} />, label: 'Learn' },
  ];
  
  if (ramadanMode) {
      navItems.splice(1, 0, { id: ViewState.RAMADAN, icon: <Tent size={22} />, label: 'Ramadan' });
  }

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-md z-[100] animate-slide-up">
      {/* Floating Dock Container with iOS-style Frosted Glass */}
      <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] shadow-2xl shadow-black/50 overflow-hidden pb-1 ring-1 ring-white/10">
        <div className="flex items-center overflow-x-auto no-scrollbar snap-x snap-mandatory py-2 px-2 scroll-smooth">
          
          {navItems.map((item) => {
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => changeView(item.id)}
                className={`relative flex-shrink-0 snap-center flex flex-col items-center justify-center w-16 h-16 rounded-2xl transition-all duration-300 group ${isActive ? 'bg-white/10 shadow-inner' : ''}`}
              >
                 <div className={`transition-all duration-300 ${isActive ? 'text-emerald-400 scale-110 drop-shadow-[0_0_15px_rgba(52,211,153,0.6)]' : 'text-slate-400 group-hover:text-white group-hover:scale-105'}`}>
                    {item.icon}
                 </div>
                 <span className={`text-[9px] font-bold mt-1 transition-all duration-300 tracking-wide ${isActive ? 'text-white opacity-100 translate-y-0' : 'text-secondary opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0'}`}>
                    {item.label}
                 </span>
                 
                 {/* Active Indicator Dot */}
                 {isActive && (
                    <div className="absolute bottom-1 w-1 h-1 rounded-full bg-emerald-400 shadow-[0_0_8px_currentColor]"></div>
                 )}
              </button>
            );
          })}
          
          <div className="w-px h-8 bg-white/10 mx-1 flex-shrink-0 rounded-full"></div>
          
          <button
            onClick={() => changeView(ViewState.SETTINGS)}
            className={`relative flex-shrink-0 snap-center flex flex-col items-center justify-center w-16 h-16 rounded-2xl transition-all duration-300 ${currentView === ViewState.SETTINGS ? 'bg-white/10 shadow-inner' : ''}`}
          >
              <div className={`transition-all duration-300 ${currentView === ViewState.SETTINGS ? 'text-white scale-110 drop-shadow-md' : 'text-slate-400 group-hover:text-white'}`}>
                 <Settings size={22} />
              </div>
              <span className={`text-[9px] font-bold mt-1 transition-all duration-300 tracking-wide ${currentView === ViewState.SETTINGS ? 'text-white opacity-100' : 'opacity-0'}`}>
                Settings
              </span>
          </button>
        </div>
      </div>
    </div>
  );
};
