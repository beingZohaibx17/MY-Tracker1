
import * as React from 'react';
import { Home, Moon, Orbit, BookOpen, ShieldAlert, Waves, Dumbbell, Brain, Settings, Tent, Users, LayoutGrid, HeartHandshake } from 'lucide-react';
import { ViewState } from '../types';

interface Props {
  currentView: ViewState;
  changeView: (view: ViewState) => void;
  ramadanMode: boolean;
}

export const BottomNav: React.FC<Props> = ({ currentView, changeView, ramadanMode }) => {
  const navItems = [
    { id: ViewState.DASHBOARD, icon: <LayoutGrid size={20} />, activeClass: 'bg-white text-black dark:bg-white dark:text-black', glow: 'shadow-white/50' },
    { id: ViewState.SALAH, icon: <Moon size={20} />, activeClass: 'bg-emerald-500 text-white', glow: 'shadow-emerald-500/50' },
    { id: ViewState.DHIKR, icon: <Orbit size={20} />, activeClass: 'bg-amber-500 text-white', glow: 'shadow-amber-500/50' },
    { id: ViewState.QURAN, icon: <BookOpen size={20} />, activeClass: 'bg-purple-500 text-white', glow: 'shadow-purple-500/50' },
    { id: ViewState.MDF, icon: <ShieldAlert size={20} />, activeClass: 'bg-rose-500 text-white', glow: 'shadow-rose-500/50' },
    { id: ViewState.SOCIAL, icon: <HeartHandshake size={20} />, activeClass: 'bg-blue-500 text-white', glow: 'shadow-blue-500/50' },
    { id: ViewState.HYGIENE, icon: <Waves size={20} />, activeClass: 'bg-cyan-500 text-white', glow: 'shadow-cyan-500/50' },
    { id: ViewState.FITNESS, icon: <Dumbbell size={20} />, activeClass: 'bg-orange-500 text-white', glow: 'shadow-orange-500/50' },
    { id: ViewState.MEMORIZE, icon: <Brain size={20} />, activeClass: 'bg-pink-500 text-white', glow: 'shadow-pink-500/50' },
    ...(ramadanMode ? [{ id: ViewState.RAMADAN, icon: <Tent size={20} />, activeClass: 'bg-teal-500 text-white', glow: 'shadow-teal-500/50' }] : []),
    { id: ViewState.SETTINGS, icon: <Settings size={20} />, activeClass: 'bg-gray-600 text-white', glow: 'shadow-gray-500/50' },
  ];

  // Calculate dynamic container glow based on active item
  const activeItem = navItems.find(item => item.id === currentView) || navItems[0];

  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className={`glass-nav px-3 py-3 rounded-[2.5rem] w-full max-w-[95%] md:max-w-md shadow-2xl pointer-events-auto border border-white/10 bg-white/80 dark:bg-[#121212]/80 backdrop-blur-xl transition-all duration-700 ${activeItem.glow.replace('shadow-', 'shadow-[0_20px_40px_-10px_')}`}>
        <div className="flex overflow-x-auto gap-2 no-scrollbar scroll-smooth items-center px-1 pb-1 pt-1">
          {navItems.map((item) => {
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => changeView(item.id)}
                className={`flex-shrink-0 relative group transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isActive ? 'flex-grow max-w-[4.5rem]' : 'w-12'}`}
              >
                <div className={`
                  flex flex-col items-center justify-center w-12 h-12 rounded-full transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] relative overflow-hidden
                  ${isActive 
                    ? `${item.activeClass} shadow-lg scale-110 -translate-y-2 border-2 border-white/20` 
                    : 'text-gray-400 dark:text-gray-500 hover:bg-black/5 dark:hover:bg-white/10'
                  }
                `}>
                  {isActive && <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-50"></div>}
                  <div className="relative z-10 transform transition-transform duration-300">{item.icon}</div>
                </div>
                
                {isActive && (
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-current opacity-50 transition-all duration-500 animate-pulse" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
