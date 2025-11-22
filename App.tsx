

import * as React from 'react';
import { useState, useEffect } from 'react';
import { Atmosphere } from './components/Atmosphere';
import { Dashboard } from './components/Dashboard';
import { BottomNav } from './components/BottomNav';
import { TabSalah } from './components/TabSalah';
import { TabDhikr, TabHygiene, TabMDF, TabFitness, TabMemorize, TabQuran, TabRamadan, TabSocial, TabSettings } from './components/SimpleTabs';
import { AppState, INITIAL_DAILY_STATE, INITIAL_GLOBAL_STATE, ViewState, DailyStats, ThemeMode } from './types';
import { STREAK_MILESTONES, MASTER_ACHIEVEMENTS } from './constants'; 
import { X, AlertTriangle, CheckCircle2, Snowflake, Trophy } from 'lucide-react';

const useSound = () => {
  const play = (type: 'click' | 'success' | 'error' | 'pop') => {
    try {
      if (navigator.vibrate) {
         if (type === 'click') navigator.vibrate(10);
         if (type === 'success') navigator.vibrate([50, 30, 50]);
         if (type === 'error') navigator.vibrate([50, 100, 50]);
         if (type === 'pop') navigator.vibrate(15);
      }
    } catch (e) { }
  };
  return play;
};

interface Toast {
  id: string;
  msg: string;
  type: 'success' | 'error' | 'info';
}

const ToastContainer = ({ toasts }: { toasts: Toast[] }) => (
  <div className="fixed top-6 left-0 right-0 z-[9999] flex flex-col items-center gap-3 pointer-events-none px-4">
    {toasts.map(t => (
      <div key={t.id} className={`px-6 py-4 rounded-2xl shadow-2xl backdrop-blur-xl border animate-slide-up flex items-center gap-3 pointer-events-auto min-w-[200px] justify-center ${
        t.type === 'success' ? 'bg-emerald-500/90 border-emerald-400/50 text-white shadow-emerald-900/50' : 
        t.type === 'error' ? 'bg-rose-600/90 border-rose-400/50 text-white shadow-rose-900/50' :
        'bg-blue-600/90 border-blue-400/50 text-white shadow-blue-900/50'
      }`}>
        {t.type === 'success' && <Trophy size={20} className="text-emerald-100" />}
        {t.type === 'error' && <AlertTriangle size={20} className="text-rose-100" />}
        {t.type === 'info' && <Snowflake size={20} className="text-blue-100" />}
        <span className="text-sm font-bold uppercase tracking-wide">{t.msg}</span>
      </div>
    ))}
  </div>
);

const LoadingScreen = () => (
  <div className="min-h-screen w-full flex flex-col items-center justify-center space-y-6 bg-black">
    <div className="w-20 h-20 rounded-full animate-spin border-4 border-emerald-500 border-t-transparent"></div>
    <div className="text-emerald-500 font-bold tracking-widest uppercase text-xs animate-pulse">Initializing System</div>
  </div>
);

const WidgetView = ({ state, onClose }: { state: AppState; onClose: () => void }) => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const nextPrayer = state.daily.prayers.find(p => !p.completed);

  return (
    <div className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center text-white p-8 animate-fade-in cursor-pointer" onClick={onClose}>
        <button onClick={onClose} className="absolute top-8 right-8 opacity-50 hover:opacity-100"><X size={32} /></button>
        <div className="text-[10rem] font-bold leading-none tracking-tighter tabular-nums select-none">
           {time.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' })}
        </div>
        <div className="text-2xl opacity-50 font-light uppercase tracking-[0.5em] mt-4 select-none">
           {time.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
        </div>
        <div className="grid grid-cols-3 gap-12 mt-20 w-full max-w-4xl">
             <div className="text-center">
                <div className="text-6xl font-bold text-emerald-500">{Math.round(state.daily.imanScore)}</div>
                <div className="text-sm uppercase tracking-widest opacity-50 mt-2">Iman Score</div>
             </div>
             <div className="text-center border-x border-white/10">
                <div className="text-4xl font-bold">{nextPrayer ? nextPrayer.name : 'Done'}</div>
                <div className="text-sm uppercase tracking-widest opacity-50 mt-4">Next Prayer</div>
             </div>
             <div className="text-center">
                <div className="text-4xl font-bold text-rose-500">{Math.floor((Date.now() - (state.global.lastRelapseDate || 0)) / (1000 * 60 * 60 * 24))}d</div>
                <div className="text-sm uppercase tracking-widest opacity-50 mt-4">Clean Streak</div>
             </div>
        </div>
        <p className="absolute bottom-8 opacity-20 text-sm uppercase tracking-widest">Tap to exit</p>
    </div>
  );
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [view, setView] = useState<ViewState>(ViewState.DASHBOARD);
  const [state, setState] = useState<AppState>({ daily: INITIAL_DAILY_STATE, global: INITIAL_GLOBAL_STATE });
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [showWarning, setShowWarning] = useState(false);
  const playSound = useSound();

  const addToast = (msg: string, type: Toast['type']) => {
    const id = Date.now().toString() + Math.random();
    setToasts(prev => [...prev, { id, msg, type }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 4000);
  };

  const triggerConfetti = () => {
     playSound('success');
  };

  const requestNotificationPermission = () => {
      if (!('Notification' in window)) {
          addToast("Notifications not supported on this device", "error");
          return;
      }
      Notification.requestPermission().then(permission => {
          if (permission === 'granted') {
              addToast("Reminders Enabled", "success");
              new Notification("Zohaib Tracker", { body: "Notifications are set up successfully!", icon: "/icon.png" });
          } else {
              addToast("Permission Denied", "error");
          }
      });
  };

  // Simple Notification Loop for PWA (Best Effort)
  useEffect(() => {
      const interval = setInterval(() => {
          const now = new Date();
          if (Notification.permission === 'granted') {
             if (now.getMinutes() === 0) {
                 new Notification("Tracker Reminder", { body: "Have you logged your progress?", icon: "/icon.png" });
             }
          }
      }, 60000);
      return () => clearInterval(interval);
  }, []);

  const exportData = () => {
    try {
        const dataStr = JSON.stringify(state, null, 2);
        const blob = new Blob([dataStr], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `zohaib_tracker_backup_${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        addToast("Backup downloaded to device", "success");
    } catch (e) {
        addToast("Export failed", "error");
    }
  };

  const importData = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    input.onchange = (e: any) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const json = JSON.parse(event.target?.result as string);
          if (json.daily && json.global) {
            setState(json);
            addToast("Data Restored Successfully", "success");
            setTimeout(() => window.location.reload(), 1500);
          } else {
            addToast("Invalid Backup File", "error");
          }
        } catch (err) {
            addToast("Error Parsing File", "error");
        }
      };
      reader.readAsText(file);
    };
    input.click();
  };

  // Helper to update max streaks
  const syncMaxStreaks = (streaks: typeof INITIAL_GLOBAL_STATE.streaks) => {
     const s = { ...streaks };
     s.maxSalah = Math.max(s.maxSalah || 0, s.salah);
     s.maxDhikr = Math.max(s.maxDhikr || 0, s.dhikr);
     s.maxMdf = Math.max(s.maxMdf || 0, s.mdf);
     s.maxFitness = Math.max(s.maxFitness || 0, s.fitness);
     s.maxHygiene = Math.max(s.maxHygiene || 0, s.hygiene);
     s.maxHabits = Math.max(s.maxHabits || 0, s.habits);
     s.maxQuran = Math.max(s.maxQuran || 0, s.quranSurah);
     s.maxRamadan = Math.max(s.maxRamadan || 0, s.ramadan);
     return s;
  };

  // --- ACHIEVEMENT SYSTEM ---
  const checkAchievements = (currentState: AppState) => {
      const { streaks, xp, currentParah, ramadanStats, unlockedAchievements, history } = currentState.global;
      const unlocked = new Set(unlockedAchievements);
      const newUnlocks: string[] = [];

      // Helper to get current metric value based on category
      const getStreak = (cat: string) => {
          if (cat === 'SALAH') return streaks.salah;
          if (cat === 'DHIKR') return streaks.dhikr;
          if (cat === 'MDF') return streaks.mdf;
          if (cat === 'QURAN') return streaks.quranSurah;
          if (cat === 'RAMADAN') return streaks.ramadan;
          if (cat === 'FITNESS') return streaks.fitness;
          if (cat === 'HYGIENE') return streaks.hygiene;
          return 0;
      };

      const getCount = (id: string) => {
         if (id.includes('r_fasts')) return ramadanStats.fastsDone;
         if (id.includes('r_taraweeh')) return ramadanStats.taraweehPrayed;
         if (id.includes('r_khatam')) return ramadanStats.quranKhatams;
         return 0;
      };

      const getValue = (id: string) => {
         if (id.includes('q_parah')) return currentParah;
         return 0;
      };

      // SPECIAL CHECKER FOR HISTORY-BASED TITAN ACHIEVEMENTS
      const checkSpecial = (id: string, val: number) => {
          // Helper to count consecutive days fulfilling a condition
          const countConsecutive = (fn: (d: DailyStats) => boolean) => {
             let count = 0;
             if (fn(currentState.daily)) count++;
             // Iterate backwards through history
             for (let i = history.length - 1; i >= 0; i--) {
                 if (fn(history[i])) count++;
                 else break;
             }
             return count;
          };

          if (id === 's_titan_fajr') {
              // 40 Days Fajr in Jamaah
              const consecutive = countConsecutive(d => {
                 const fajr = d.prayers.find(p => p.id === 'fajr');
                 return !!(fajr && fajr.completed && fajr.isJamaah);
              });
              return consecutive >= val;
          }
          if (id === 's_titan_tahajjud') {
              // 40 Days Tahajjud
              const consecutive = countConsecutive(d => {
                 const tahajjud = d.prayers.find(p => p.id === 'tahajjud');
                 return !!(tahajjud && tahajjud.completed);
              });
              return consecutive >= val;
          }
          if (id === 's_titan_jamaah') {
              // 30 Days All 5 Jamaah
              const consecutive = countConsecutive(d => {
                 const mandatory = d.prayers.filter(p => p.id !== 'tahajjud');
                 return mandatory.every(p => p.completed && p.isJamaah);
              });
              return consecutive >= val;
          }
          return false;
      };

      MASTER_ACHIEVEMENTS.forEach(ach => {
          if (unlocked.has(ach.id)) return;

          let passed = false;

          if (ach.metric === 'STREAK') {
              const streak = getStreak(ach.category);
              if (streak >= (ach.value || 0)) passed = true;
          } else if (ach.metric === 'COUNT') {
              const count = getCount(ach.id);
              if (count >= (ach.value || 0)) passed = true;
          } else if (ach.metric === 'VALUE') {
              const val = getValue(ach.id);
              if (val >= (ach.value || 0)) passed = true;
          } else if (ach.metric === 'XP') {
              if (xp >= (ach.value || 0)) passed = true;
          } else if (ach.metric === 'SPECIAL') {
              if (checkSpecial(ach.id, ach.value || 0)) passed = true;
          }

          if (passed) {
              newUnlocks.push(ach.id);
              addToast(`Unlocked: ${ach.title}`, 'success');
              playSound('success');
          }
      });

      if (newUnlocks.length > 0) {
          setState(prev => ({
              ...prev,
              global: { ...prev.global, unlockedAchievements: [...prev.global.unlockedAchievements, ...newUnlocks] }
          }));
      }
  };

  const calculateImanScore = (daily: DailyStats) => {
    let score = 0;
    const completedPrayers = daily.prayers.filter(p => p.completed).length;
    score += (completedPrayers * 10); 
    if (daily.quranParts.rub || daily.surahMulk) score += 15;
    if (daily.surahKahf) score += 20; 
    if ((daily.dhikrAstaghfirullah + daily.dhikrRabbiInni) >= 4200) score += 15;
    if (!daily.habits.failedToday) score += 10;
    return Math.min(100, score);
  };

  const updateState = (updater: (prev: AppState) => AppState) => {
    setState(prev => {
       const next = updater(prev);
       next.daily.imanScore = calculateImanScore(next.daily);
       return next;
    });
  };

  // Effect to check achievements on state change
  useEffect(() => {
     if (!isLoading) {
         checkAchievements(state);
     }
  }, [
      state.daily.prayers, 
      state.daily.dhikrAstaghfirullah, 
      state.daily.dhikrRabbiInni, 
      state.global.streaks, 
      state.global.xp, 
      state.global.ramadanStats,
      state.global.currentParah
  ]);

  const getDaysDiff = (d1: string, d2: string) => {
     const date1 = new Date(d1);
     const date2 = new Date(d2);
     const diff = Math.abs(date2.getTime() - date1.getTime());
     return Math.ceil(diff / (1000 * 60 * 60 * 24)); 
  };

  useEffect(() => {
    const saved = localStorage.getItem('zohaib_tracker_v3');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const today = new Date().toISOString().split('T')[0];
        
        let safeGlobal = { 
            ...INITIAL_GLOBAL_STATE, 
            ...parsed.global, 
            streaks: { ...INITIAL_GLOBAL_STATE.streaks, ...parsed.global.streaks } 
        };
        let safeDaily = { ...INITIAL_DAILY_STATE, ...parsed.daily };

        if(typeof safeDaily.surahKahf === 'undefined') safeDaily.surahKahf = false;

        if (parsed.daily.date !== today) {
           const daysPassed = getDaysDiff(parsed.daily.date, today);
           
           if (daysPassed > 1) {
               safeGlobal.streaks.salah = 0;
               safeGlobal.streaks.dhikr = 0;
               safeGlobal.streaks.fitness = 0;
               safeGlobal.streaks.hygiene = 0;
               safeGlobal.streaks.quranSurah = 0;
               safeGlobal.streaks.habits = 0; 
               safeGlobal.streaks.ramadan = 0;
           }
           
           const newHistory = [...(safeGlobal.history || []), safeDaily];
           safeGlobal = {
               ...safeGlobal,
               history: newHistory,
               streaks: syncMaxStreaks(safeGlobal.streaks)
           };

           safeDaily = {
               ...INITIAL_DAILY_STATE,
               date: today,
               habits: { smokingCount: 0, nicotineCount: 0, failedToday: false },
               customDhikr: (safeDaily.customDhikr || []).map((d: any) => ({ ...d, count: 0 }))
           };
        }

        setState({ daily: safeDaily, global: safeGlobal });

        const now = Date.now();
        const lastRelapse = safeGlobal.lastRelapseDate || now;
        const mdfDays = Math.floor((now - lastRelapse) / (1000 * 60 * 60 * 24));
        
        if (mdfDays !== safeGlobal.streaks.mdf) {
             setState(prev => {
                 const updatedMdfStreak = mdfDays;
                 const updatedMaxMdf = Math.max(prev.global.streaks.maxMdf || 0, updatedMdfStreak);
                 return {
                     ...prev,
                     global: {
                         ...prev.global,
                         streaks: { ...prev.global.streaks, mdf: updatedMdfStreak, maxMdf: updatedMaxMdf }
                     }
                 };
             });
        }

      } catch (e) {
        console.error("Save file corrupted", e);
        setState({ daily: INITIAL_DAILY_STATE, global: INITIAL_GLOBAL_STATE });
      }
    }
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  useEffect(() => {
    if (!isLoading) {
        const globalWithMax = { ...state.global, streaks: syncMaxStreaks(state.global.streaks) };
        localStorage.setItem('zohaib_tracker_v3', JSON.stringify({ daily: state.daily, global: globalWithMax }));
    }
  }, [state, isLoading]);

  useEffect(() => {
    const applyTheme = () => {
       const root = document.body;
       root.classList.remove('theme-day', 'theme-night');
       if (state.global.theme === 'DAY') root.classList.add('theme-day');
       else if (state.global.theme === 'NIGHT') root.classList.add('theme-night');
       else {
         const hour = new Date().getHours();
         if (hour >= 7 && hour < 18) root.classList.add('theme-day');
         else root.classList.add('theme-night');
       }
    };
    applyTheme();
    const interval = setInterval(applyTheme, 60000);
    return () => clearInterval(interval);
  }, [state.global.theme]);

  const checkAndToggleStreak = (
      prev: AppState, 
      category: keyof typeof INITIAL_GLOBAL_STATE.streaks, 
      wasComplete: boolean, 
      isComplete: boolean
  ) => {
      let streaks = { ...prev.global.streaks };
      if (!wasComplete && isComplete) {
          streaks[category] = (streaks[category] as number) + 1;
          triggerConfetti();
      } 
      else if (wasComplete && !isComplete) {
          streaks[category] = Math.max(0, (streaks[category] as number) - 1);
      }
      
      if (category === 'salah') streaks.maxSalah = Math.max(streaks.maxSalah || 0, streaks.salah);
      if (category === 'dhikr') streaks.maxDhikr = Math.max(streaks.maxDhikr || 0, streaks.dhikr);
      if (category === 'fitness') streaks.maxFitness = Math.max(streaks.maxFitness || 0, streaks.fitness);
      if (category === 'hygiene') streaks.maxHygiene = Math.max(streaks.maxHygiene || 0, streaks.hygiene);
      if (category === 'quranSurah') streaks.maxQuran = Math.max(streaks.maxQuran || 0, streaks.quranSurah);
      
      return streaks;
  };

  const buyFreeze = () => {
    if (state.global.xp >= 500) {
        playSound('success');
        updateState(prev => ({ ...prev, global: { ...prev.global, xp: prev.global.xp - 500, streakFreezes: (prev.global.streakFreezes || 0) + 1 } }));
        addToast("Freeze Purchased!", "success");
    } else {
        addToast("Need 500 XP", "error");
    }
  };
  
  const hardReset = () => {
      if(confirm("Warning: This will permanently delete ALL your progress, streaks, and history. This action cannot be undone. Are you sure?")) {
          localStorage.removeItem('zohaib_tracker_v3');
          window.location.reload();
      }
  }

  const handleUpdatePrayer = (id: string, completed: boolean, isJamaah: boolean) => {
    playSound('click');
    updateState(prev => {
        const wasComplete = prev.daily.prayers.filter(p => p.completed).length >= 5;
        const newPrayers = prev.daily.prayers.map(p => p.id === id ? { 
            ...p, 
            completed, 
            isJamaah, 
            completedAt: completed ? new Date().toLocaleTimeString('en-US', {hour: 'numeric', minute: '2-digit'}) : null 
        } : p);
        const isComplete = newPrayers.filter(p => p.completed).length >= 5;
        const newStreaks = checkAndToggleStreak(prev, 'salah', wasComplete, isComplete);
        return { 
            ...prev, 
            global: { ...prev.global, streaks: newStreaks },
            daily: { ...prev.daily, prayers: newPrayers } 
        };
    });
  };

  const handleDhikr = (type: string, amt: number) => {
     if (amt >= 100) playSound('pop');
     updateState(prev => {
        const wasComplete = prev.daily.dhikrAstaghfirullah >= 2100 && prev.daily.dhikrRabbiInni >= 2100;
        let newState = { ...prev };
        if (type === 'astaghfirullah') newState.daily.dhikrAstaghfirullah += amt;
        else if (type === 'rabbiInni') newState.daily.dhikrRabbiInni += amt;
        else newState.daily.customDhikr = prev.daily.customDhikr.map(d => d.id === type ? { ...d, count: d.count + amt } : d);
        
        const isComplete = newState.daily.dhikrAstaghfirullah >= 2100 && newState.daily.dhikrRabbiInni >= 2100;
        newState.global.streaks = checkAndToggleStreak(prev, 'dhikr', wasComplete, isComplete);
        return newState;
     });
  };

  const handleAddCustomDhikr = (text: string, target: number) => {
      updateState(prev => ({ ...prev, daily: { ...prev.daily, customDhikr: [...prev.daily.customDhikr, { id: Date.now().toString(), text, target, count: 0 }] } }));
      addToast("Dhikr Added", "success");
  };
  
  const handleHygiene = (key: any) => {
      playSound('click');
      updateState(prev => {
          const wasComplete = prev.daily.hygiene.waterGlasses >= 5;
          const updatedHygiene = { ...prev.daily.hygiene };
          if (key === 'reset_water') updatedHygiene.waterGlasses = 0;
          else if (key === 'water') updatedHygiene.waterGlasses = (updatedHygiene.waterGlasses || 0) + 1;
          else if (key === 'shower') updatedHygiene.shower = !updatedHygiene.shower;
          else if (key === 'brush') updatedHygiene.brush = !updatedHygiene.brush;
          const isComplete = updatedHygiene.waterGlasses >= 5;
          const newStreaks = checkAndToggleStreak(prev, 'hygiene', wasComplete, isComplete);
          return { ...prev, global: { ...prev.global, streaks: newStreaks }, daily: { ...prev.daily, hygiene: updatedHygiene } };
      });
  };

  const handleHabitUpdate = (habit: string) => {
    const key = habit === 'smoking' ? 'smokingCount' : 'nicotineCount';
    const limit = habit === 'smoking' ? 2 : 3;
    if (state.daily.habits[key as 'smokingCount' | 'nicotineCount'] + 1 > limit) {
        playSound('error');
        setShowWarning(true);
        updateState(prev => ({
            ...prev,
            global: { ...prev.global, streaks: { ...prev.global.streaks, habits: 0 } }, 
            daily: { ...prev.daily, habits: { ...prev.daily.habits, failedToday: true, [key]: prev.daily.habits[key as 'smokingCount' | 'nicotineCount'] + 1 } }
        }));
        setTimeout(() => setShowWarning(false), 5000);
    } else {
        updateState(prev => {
             const newDaily = { ...prev.daily, habits: { ...prev.daily.habits, [key]: prev.daily.habits[key as 'smokingCount' | 'nicotineCount'] + 1 } };
             return { ...prev, daily: newDaily };
        });
    }
  };

  const handleRamadanStatUpdate = (key: string, delta: number) => {
      playSound('pop');
      updateState(prev => ({
          ...prev,
          global: { ...prev.global, ramadanStats: { ...prev.global.ramadanStats, [key]: Math.max(0, (prev.global.ramadanStats ? prev.global.ramadanStats[key as keyof typeof prev.global.ramadanStats] : 0) + delta) } }
      }));
  };

  const handleQuranProgress = (part: string) => {
    if (!['rub', 'nisf', 'thalatha', 'kamil'].includes(part)) return;
    playSound('click');
    setState(prev => {
        const wasComplete = Object.values(prev.daily.quranParts).some(Boolean);
        const newParts = { ...prev.daily.quranParts, [part]: !prev.daily.quranParts[part as keyof typeof prev.daily.quranParts] };
        const isComplete = Object.values(newParts).some(Boolean);
        const newStreaks = checkAndToggleStreak(prev, 'quranSurah', wasComplete, isComplete);
        const allDone = newParts.rub && newParts.nisf && newParts.thalatha && newParts.kamil;
        if (allDone) {
            playSound('success');
            let newParah = prev.global.currentParah + 1;
            if (newParah > 30) newParah = 1;
            addToast("Parah Completed! +10 XP", "success");
            return {
                ...prev,
                global: { ...prev.global, currentParah: newParah, xp: prev.global.xp + 10, streaks: newStreaks },
                daily: { ...prev.daily, quranParts: { rub: false, nisf: false, thalatha: false, kamil: false } }
            };
        } else {
            return { ...prev, global: { ...prev.global, streaks: newStreaks }, daily: { ...prev.daily, quranParts: newParts } };
        }
    });
  };

  const handleSurahUpdate = (surah: string) => {
    playSound('click');
    const key = surah === 'mulk' ? 'surahMulk' : (surah === 'baqarah' ? 'surahBaqarah' : 'surahKahf');
    updateState(prev => {
        const wasComplete = prev.daily.surahMulk || prev.daily.surahBaqarah || prev.daily.surahKahf;
        const newDaily = { ...prev.daily, [key]: !prev.daily[key as 'surahMulk' | 'surahBaqarah' | 'surahKahf'] };
        const isComplete = newDaily.surahMulk || newDaily.surahBaqarah || newDaily.surahKahf;
        const newStreaks = checkAndToggleStreak(prev, 'quranSurah', wasComplete, isComplete);
        return { ...prev, global: {...prev.global, streaks: newStreaks}, daily: newDaily };
    });
  };
  
  const handleMemorizeNext = () => {
      playSound('success');
      addToast("Content Learned! +20 XP", "success");
      updateState(prev => ({ ...prev, global: { ...prev.global, memorizeProgress: (prev.global.memorizeProgress || 0) + 1, xp: prev.global.xp + 20 } }));
  };
  
  const handleFitnessType = (t: string) => {
      updateState(prev => {
          const wasComplete = prev.daily.fitness.type !== 'Rest';
          const isComplete = t !== 'Rest';
          const newStreaks = checkAndToggleStreak(prev, 'fitness', wasComplete, isComplete);
          return {
              ...prev,
              global: { ...prev.global, streaks: newStreaks },
              daily: { ...prev.daily, fitness: { ...prev.daily.fitness, type: t } }
          };
      });
  }

  if (isLoading) return <LoadingScreen />;

  return (
    <>
      <Atmosphere mode={state.global.theme} />
      <ToastContainer toasts={toasts} />
      
      {showWarning && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 animate-fade-in backdrop-blur-sm px-4">
            <div className="bg-gradient-to-b from-red-900 to-black border border-red-500 rounded-3xl p-8 max-w-sm text-center shadow-2xl shadow-red-500/50 animate-slide-up">
                <AlertTriangle size={60} className="text-red-500 mx-auto mb-4 animate-pulse" />
                <h2 className="text-3xl font-bold text-white mb-2">LIMIT EXCEEDED</h2>
                <p className="text-red-300 mb-6">Warning: Daily limit exceeded. Streak reset to 0. Please reflect.</p>
                <button onClick={() => setShowWarning(false)} className="w-full py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-500">I Understand</button>
            </div>
        </div>
      )}

      {view === ViewState.WIDGET && <WidgetView state={state} onClose={() => setView(ViewState.DASHBOARD)} />}

      {view !== ViewState.WIDGET && (
        <div className="min-h-screen relative z-10 max-w-md mx-auto">
          {view === ViewState.DASHBOARD && <Dashboard state={state} changeView={setView} />}
          {view === ViewState.SALAH && <TabSalah state={state} updatePrayer={handleUpdatePrayer} updateQada={(amt) => updateState(prev => ({ ...prev, global: { ...prev.global, qadaBank: Math.max(0, prev.global.qadaBank + amt) } }))} onBack={() => setView(ViewState.DASHBOARD)} />}
          {view === ViewState.DHIKR && <TabDhikr state={state} updateDhikr={handleDhikr} addCustomDhikr={handleAddCustomDhikr} />}
          {view === ViewState.QURAN && <TabQuran state={state} updatePart={handleQuranProgress} updateSurah={handleSurahUpdate} />}
          {view === ViewState.MDF && <TabMDF state={state} resetRelapse={() => updateState(prev => ({...prev, global: {...prev.global, lastRelapseDate: Date.now(), streaks: {...prev.global.streaks, mdf: 0}}, daily: {...prev.daily, habits: {...prev.daily.habits, failedToday: true}}}))} />}
          {view === ViewState.SOCIAL && <TabSocial state={state} />}
          {view === ViewState.HYGIENE && <TabHygiene state={state} updateHygiene={handleHygiene} updateHabit={handleHabitUpdate} />}
          {view === ViewState.FITNESS && <TabFitness state={state} updateType={handleFitnessType} />}
          {view === ViewState.MEMORIZE && <TabMemorize state={state} markLearned={handleMemorizeNext} />}
          {view === ViewState.RAMADAN && <TabRamadan state={state} updateRamadanStat={handleRamadanStatUpdate} />}
          {view === ViewState.SETTINGS && <TabSettings state={state} setTheme={(t) => updateState(prev => ({...prev, global: {...prev.global, theme: t}}))} toggleRamadan={() => updateState(prev => ({...prev, global: {...prev.global, ramadanMode: !prev.global.ramadanMode}}))} exportData={exportData} importData={importData} enterWidgetMode={() => setView(ViewState.WIDGET)} onBack={() => setView(ViewState.DASHBOARD)} buyFreeze={buyFreeze} resetApp={hardReset} requestNotify={requestNotificationPermission} />}
          <BottomNav currentView={view} changeView={setView} ramadanMode={state.global.ramadanMode} />
        </div>
      )}
    </>
  );
};

export default App;
