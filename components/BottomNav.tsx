
import * as React from 'react';
import { Home, Moon, Activity, BookOpen, ShieldAlert, Droplets, Dumbbell, Brain, Settings, Tent, Users } from 'lucide-react';
import { ViewState } from '../types';

interface Props {
  currentView: ViewState;
  changeView: (view: ViewState) => void;
  ramadanMode: boolean;
}

export const BottomNav: React.FC<Props> = ({ currentView, changeView, ramadanMode }) => {
  const navItems = [
    { id: ViewState.DASHBOARD, icon: <Home size={20} />, activeClass: 'bg-white text-black dark:bg-white dark:text-black', glow: 'shadow-[0_0_20px_rgba(255,255,255,0.4)]' },
    { id: ViewState.SALAH, icon: <Moon size={20} />, activeClass: 'bg-emerald-500 text-white', glow: 'shadow-[0_0_20px_rgba(16,185,129,0.5)]' },
    { id: ViewState.DHIKR, icon: <Activity size={20} />, activeClass: 'bg-amber-500 text-white', glow: 'shadow-[0_0_20px_rgba(245,158,11,0.5)]' },
    { id: ViewState.QURAN, icon: <BookOpen size={20} />, activeClass: 'bg-purple-500 text-white', glow: 'shadow-[0_0_20px_rgba(168,85,247,0.5)]' },
    { id: ViewState.MDF, icon: <ShieldAlert size={20} />, activeClass: 'bg-rose-500 text-white', glow: 'shadow-[0_0_20px_rgba(244,63,94,0.5)]' },
    { id: ViewState.SOCIAL, icon: <Users size={20} />, activeClass: 'bg-blue-500 text-white', glow: 'shadow-[0_0_20px_rgba(59,130,246,0.5)]' },
    { id: ViewState.HYGIENE, icon: <Droplets size={20} />, activeClass: 'bg-cyan-500 text-white', glow: 'shadow-[0_0_20px_rgba(6,182,212,0.5)]' },
    { id: ViewState.FITNESS, icon: <Dumbbell size={20} />, activeClass: 'bg-orange-500 text-white', glow: 'shadow-[0_0_20px_rgba(249,115,22,0.5)]' },
    { id: ViewState.MEMORIZE, icon: <Brain size={20} />, activeClass: 'bg-pink-500 text-white', glow: 'shadow-[0_0_20px_rgba(236,72,153,0.5)]' },
    ...(ramadanMode ? [{ id: ViewState.RAMADAN, icon: <Tent size={20} />, activeClass: 'bg-teal-500 text-white', glow: 'shadow-[0_0_20px_rgba(20,184,166,0.5)]' }] : []),
    { id: ViewState.SETTINGS, icon: <Settings size={20} />, activeClass: 'bg-gray-600 text-white', glow: 'shadow-[0_0_20px_rgba(75,85,99,0.5)]' },
  ];

  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="glass-nav px-3 py-3 rounded-[2rem] w-full max-w-[95%] md:max-w-md shadow-2xl pointer-events-auto border border-white/20 dark:border-white/10 bg-white/80 dark:bg-black/80 backdrop-blur-xl">
        <div className="flex overflow-x-auto gap-2 no-scrollbar scroll-smooth items-center px-1 pb-1 pt-1">
          {navItems.map((item) => {
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => changeView(item.id)}
                className={`flex-shrink-0 relative group transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${isActive ? 'flex-grow max-w-[4rem]' : 'w-12'}`}
              >
                <div className={`
                  flex flex-col items-center justify-center w-12 h-12 rounded-full transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] relative overflow-hidden
                  ${isActive 
                    ? `${item.activeClass} ${item.glow} scale-110 -translate-y-2 border border-white/20` 
                    : 'text-gray-500 dark:text-gray-400 hover:bg-black/5 dark:hover:bg-white/10'
                  }
                `}>
                  {/* Shine effect on active */}
                  {isActive && <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-50"></div>}
                  <div className="relative z-10">{item.icon}</div>
                </div>
                
                {isActive && (
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-current opacity-50 transition-opacity duration-500" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
