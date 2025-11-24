
import * as React from 'react';
import { useEffect, useState } from 'react';
import { ThemeMode, ViewState } from '../types';

interface Props {
  mode: ThemeMode;
  view: ViewState;
}

// Background Element SVGs & Particles with Slower, More Premium Motion

const ArabicLetters = () => (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Alif */}
        <div className="absolute top-[20%] left-[10%] opacity-10 animate-float-slow text-8xl text-white font-arabic blur-sm">ا</div>
        {/* Lam */}
        <div className="absolute top-[50%] right-[15%] opacity-10 animate-float-slow text-8xl text-white font-arabic blur-sm" style={{ animationDelay: '2s' }}>ل</div>
        {/* Meem */}
        <div className="absolute bottom-[30%] left-[20%] opacity-10 animate-float-slow text-8xl text-white font-arabic blur-sm" style={{ animationDelay: '4s' }}>م</div>
        
        {/* Floating dust */}
        <div className="absolute top-[30%] left-[40%] w-1 h-1 bg-white rounded-full opacity-30 animate-pulse-slow"></div>
        <div className="absolute top-[60%] right-[20%] w-1.5 h-1.5 bg-white rounded-full opacity-20 animate-pulse-slow" style={{ animationDelay: '1s'}}></div>
    </div>
);

const FloatingBeads = () => (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
             <div 
                key={i} 
                className="absolute rounded-full bg-amber-400/30 blur-sm animate-float-slow"
                style={{
                    width: Math.random() * 30 + 10 + 'px',
                    height: Math.random() * 30 + 10 + 'px',
                    top: Math.random() * 100 + '%',
                    left: Math.random() * 100 + '%',
                    animationDuration: Math.random() * 10 + 10 + 's',
                    animationDelay: Math.random() * 5 + 's'
                }}
             />
        ))}
    </div>
);

const WaterBubbles = () => (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
         {[...Array(10)].map((_, i) => (
             <div 
                key={i} 
                className="absolute rounded-full border border-cyan-400/40 opacity-40 animate-slide-up"
                style={{
                    width: Math.random() * 20 + 5 + 'px',
                    height: Math.random() * 20 + 5 + 'px',
                    bottom: '-30px',
                    left: Math.random() * 100 + '%',
                    animationDuration: Math.random() * 8 + 5 + 's',
                    animationDelay: Math.random() * 5 + 's'
                }}
             />
        ))}
    </div>
);

const FireSparks = () => (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
         {[...Array(15)].map((_, i) => (
             <div 
                key={i} 
                className="absolute w-1 h-1 bg-orange-500 rounded-full opacity-60 animate-slide-up blur-[1px]"
                style={{
                    bottom: '0',
                    left: Math.random() * 100 + '%',
                    animationDuration: Math.random() * 4 + 2 + 's',
                    animationDelay: Math.random() * 2 + 's'
                }}
             />
        ))}
    </div>
);

const SynapseNodes = () => (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-30">
        <svg className="w-full h-full">
            {/* Neural connections */}
            <line x1="10%" y1="20%" x2="40%" y2="50%" stroke="url(#lineGrad)" strokeWidth="0.5" className="animate-pulse-slow" />
            <line x1="40%" y1="50%" x2="80%" y2="30%" stroke="url(#lineGrad)" strokeWidth="0.5" className="animate-pulse-slow" style={{ animationDelay: '1s'}} />
            <line x1="40%" y1="50%" x2="20%" y2="80%" stroke="url(#lineGrad)" strokeWidth="0.5" className="animate-pulse-slow" style={{ animationDelay: '2s'}} />
            <line x1="80%" y1="30%" x2="70%" y2="70%" stroke="url(#lineGrad)" strokeWidth="0.5" className="animate-pulse-slow" style={{ animationDelay: '1.5s'}} />
            
            <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(56, 189, 248, 0)" />
                    <stop offset="50%" stopColor="rgba(56, 189, 248, 0.5)" />
                    <stop offset="100%" stopColor="rgba(56, 189, 248, 0)" />
                </linearGradient>
            </defs>

            {/* Nodes */}
            <circle cx="10%" cy="20%" r="2" fill="#38bdf8" className="animate-pulse">
                <animate attributeName="r" values="2;4;2" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="40%" cy="50%" r="3" fill="#818cf8" className="animate-pulse" style={{ animationDelay: '0.5s'}}>
                 <animate attributeName="opacity" values="0.5;1;0.5" dur="4s" repeatCount="indefinite" />
            </circle>
            <circle cx="80%" cy="30%" r="2" fill="#38bdf8" className="animate-pulse" style={{ animationDelay: '1s'}} />
            <circle cx="20%" cy="80%" r="2" fill="#c084fc" className="animate-pulse" style={{ animationDelay: '1.5s'}} />
            <circle cx="70%" cy="70%" r="2" fill="#818cf8" className="animate-pulse" style={{ animationDelay: '2s'}} />
        </svg>
    </div>
);

const MosqueSilhouette = () => (
    <div className="absolute bottom-0 left-0 right-0 h-[40vh] opacity-20 pointer-events-none z-0 animate-slide-up">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full text-white fill-current">
            <path d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fillOpacity="1" />
        </svg>
    </div>
);

export const Atmosphere: React.FC<Props> = ({ mode, view }) => {
  const [gradients, setGradients] = useState({
    bg: 'bg-[#020617]', 
    orb1: 'bg-purple-900/20',
    orb2: 'bg-indigo-900/10',
    overlay: 'opacity-0'
  });

  const isDay = mode === 'DAY' || (mode === 'AUTO' && new Date().getHours() >= 6 && new Date().getHours() < 18);

  useEffect(() => {
    // Smoother, darker, more professional gradients
    
    if (isDay) {
       // Day Mode: Bright, Airy, Blue/Cyan/White
       const baseBg = 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 via-sky-200 to-white'; 
       
       switch (view) {
         case ViewState.FITNESS:
            setGradients({ bg: baseBg, orb1: 'bg-orange-500/30', orb2: 'bg-yellow-500/30', overlay: 'opacity-0' });
            break;
         case ViewState.HYGIENE:
            setGradients({ bg: baseBg, orb1: 'bg-cyan-500/30', orb2: 'bg-blue-500/30', overlay: 'opacity-0' });
            break;
         case ViewState.RAMADAN:
            setGradients({ bg: 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-200 via-fuchsia-100 to-white', orb1: 'bg-amber-400/40', orb2: 'bg-purple-400/30', overlay: 'opacity-10' });
            break;
         case ViewState.AI_CHAT:
             setGradients({ bg: 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100 via-white to-sky-100', orb1: 'bg-blue-400/20', orb2: 'bg-purple-400/10', overlay: 'opacity-0' });
             break;
         default:
            setGradients({ bg: baseBg, orb1: 'bg-blue-400/30', orb2: 'bg-sky-300/30', overlay: 'opacity-0' });
       }
    } else {
       // Night Mode: Deep Midnight/Emerald/Obsidian
       const baseBg = 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#020617] via-[#0f172a] to-black';

       switch (view) {
         case ViewState.MDF:
           setGradients({ bg: baseBg, orb1: 'bg-rose-900/30', orb2: 'bg-slate-900/40', overlay: 'opacity-20' });
           break;
         case ViewState.FITNESS:
            setGradients({ bg: baseBg, orb1: 'bg-orange-900/20', orb2: 'bg-red-900/20', overlay: 'opacity-20' });
            break;
         case ViewState.NIGHT:
            setGradients({ bg: 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1e1b4b] via-[#020617] to-black', orb1: 'bg-indigo-900/40', orb2: 'bg-slate-800/20', overlay: 'opacity-30' });
            break;
         case ViewState.AI_CHAT:
            setGradients({ bg: 'bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950 via-slate-950 to-black', orb1: 'bg-blue-600/20', orb2: 'bg-purple-600/20', overlay: 'opacity-10' });
            break;
         default:
            setGradients({ bg: baseBg, orb1: 'bg-emerald-900/30', orb2: 'bg-teal-900/20', overlay: 'opacity-20' });
       }
    }
  }, [mode, view, isDay]);

  const renderBackgroundElements = () => {
      switch (view) {
          case ViewState.SALAH:
              return <MosqueSilhouette />;
          case ViewState.DHIKR:
              return <><MosqueSilhouette /><FloatingBeads /></>;
          case ViewState.QURAN:
          case ViewState.HADEES:
              return <><MosqueSilhouette /><ArabicLetters /></>;
          case ViewState.MEMORIZE:
              return <SynapseNodes />;
          case ViewState.AI_CHAT:
              return <SynapseNodes />;
          case ViewState.RAMADAN:
              return <MosqueSilhouette />;
          case ViewState.FITNESS:
              return <FireSparks />;
          case ViewState.HYGIENE:
              return <WaterBubbles />;
          case ViewState.NIGHT:
              return <MosqueSilhouette />;
          default:
              return null;
      }
  };

  return (
    <div className={`fixed inset-0 -z-50 transition-all duration-[2000ms] ease-in-out overflow-hidden ${gradients.bg}`}>
      
      {/* Texture Overlay */}
      <div className={`absolute inset-0 bg-noise ${gradients.overlay} pointer-events-none transition-opacity duration-[2000ms]`}></div>

      {/* Moving Fog */}
      <div className="absolute top-0 left-0 w-[200%] h-full opacity-[0.05] pointer-events-none animate-drift-slow" 
           style={{ background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.8), transparent 70%)' }}>
      </div>

      {/* Primary Light Source (Orb 1) */}
      <div className={`absolute top-[-10%] left-[10%] w-[60vw] h-[60vw] rounded-full blur-[120px] animate-breathe ${gradients.orb1} transition-all duration-[3000ms] mix-blend-screen`} />
      
      {/* Secondary Light Source (Orb 2) */}
      <div className={`absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full blur-[100px] animate-pulse-slow ${gradients.orb2} transition-all duration-[3000ms] mix-blend-screen`} />
      
      {/* Contextual Elements */}
      {renderBackgroundElements()}
      
      {/* Subtle Starfield (Only Visible in Dark Modes usually, managed by blend mode) */}
      <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-plus-lighter">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="absolute bg-white rounded-full animate-pulse-slow" 
               style={{ width: Math.random()*2.5+'px', height: Math.random()*2.5+'px', top: Math.random()*100+'%', left: Math.random()*100+'%', animationDelay: Math.random()*5+'s' }} />
        ))}
      </div>
    </div>
  );
};
