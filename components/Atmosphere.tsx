
import * as React from 'react';
import { useEffect, useState } from 'react';
import { ThemeMode, ViewState } from '../types';

interface Props {
  mode: ThemeMode;
  view: ViewState;
}

// Background Element SVGs & Particles

const ArabicLetters = () => (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Alif */}
        <div className="absolute top-[20%] left-[10%] opacity-10 animate-float text-6xl text-white font-arabic">ا</div>
        {/* Lam */}
        <div className="absolute top-[50%] right-[15%] opacity-10 animate-float-delayed text-6xl text-white font-arabic">ل</div>
        {/* Meem */}
        <div className="absolute bottom-[30%] left-[20%] opacity-10 animate-pulse-slow text-6xl text-white font-arabic">م</div>
        {/* Decorative Circles */}
        <div className="absolute top-[10%] right-[30%] w-2 h-2 rounded-full bg-white opacity-20 animate-ping"></div>
        <div className="absolute bottom-[20%] left-[40%] w-3 h-3 rounded-full bg-emerald-400 opacity-10 animate-pulse"></div>
    </div>
);

const FloatingBeads = () => (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
             <div 
                key={i} 
                className="absolute rounded-full bg-amber-400 opacity-20 animate-float"
                style={{
                    width: Math.random() * 20 + 10 + 'px',
                    height: Math.random() * 20 + 10 + 'px',
                    top: Math.random() * 100 + '%',
                    left: Math.random() * 100 + '%',
                    animationDuration: Math.random() * 5 + 5 + 's',
                    animationDelay: Math.random() * 5 + 's'
                }}
             />
        ))}
        <div className="absolute bottom-0 left-0 right-0 h-[40vh] bg-gradient-to-t from-amber-900/10 to-transparent"></div>
    </div>
);

const WaterBubbles = () => (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
         {[...Array(12)].map((_, i) => (
             <div 
                key={i} 
                className="absolute rounded-full border border-cyan-300 opacity-20 animate-slide-up"
                style={{
                    width: Math.random() * 15 + 5 + 'px',
                    height: Math.random() * 15 + 5 + 'px',
                    bottom: '-20px',
                    left: Math.random() * 100 + '%',
                    animationDuration: Math.random() * 4 + 3 + 's',
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
                className="absolute w-1 h-1 bg-orange-500 rounded-full opacity-60 animate-slide-up"
                style={{
                    bottom: '0',
                    left: Math.random() * 100 + '%',
                    animationDuration: Math.random() * 2 + 1 + 's',
                    animationDelay: Math.random() * 2 + 's'
                }}
             />
        ))}
        <div className="absolute bottom-0 w-full h-[20%] bg-gradient-to-t from-orange-900/20 to-transparent"></div>
    </div>
);

const SynapseNodes = () => (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden opacity-20">
        <svg className="w-full h-full">
            <line x1="10%" y1="20%" x2="40%" y2="50%" stroke="white" strokeWidth="1" className="animate-pulse" />
            <line x1="40%" y1="50%" x2="80%" y2="30%" stroke="white" strokeWidth="1" className="animate-pulse" style={{ animationDelay: '1s'}} />
            <circle cx="10%" cy="20%" r="3" fill="white" />
            <circle cx="40%" cy="50%" r="4" fill="pink" />
            <circle cx="80%" cy="30%" r="3" fill="white" />
        </svg>
    </div>
);

const CrescentMoons = () => (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[10%] right-[10%] text-6xl text-yellow-100 opacity-20 animate-swing">☾</div>
        {[...Array(5)].map((_, i) => (
            <div key={i} className="absolute text-2xl text-white opacity-10 animate-float-delayed" style={{ top: Math.random()*80+'%', left: Math.random()*80+'%', animationDelay: i + 's' }}>★</div>
        ))}
    </div>
);

const MosqueSilhouette = () => (
    <div className="absolute bottom-0 left-0 right-0 h-[30vh] opacity-20 pointer-events-none z-0 animate-slide-up">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="w-full h-full text-white fill-current">
            <path d="M96,160L192,192C288,224,480,288,672,288C864,288,1056,224,1248,192L1344,160L1344,320L1248,320C1056,320,864,320,672,320C480,320,288,320,192,320L96,320Z" fillOpacity="0.5" />
            <path d="M200 320 V 200 C 200 150 300 150 300 200 V 320 Z M 250 150 V 100 C 240 100 240 80 250 80 C 260 80 260 100 250 100 Z" transform="translate(100, 0) scale(1.5)" />
            <path d="M600 320 V 180 C 600 100 800 100 800 180 V 320 Z M 700 100 V 50 C 690 50 690 30 700 30 C 710 30 710 50 700 50 Z" />
            <path d="M1000 320 V 200 C 1000 150 1100 150 1100 200 V 320 Z" />
        </svg>
    </div>
);

const ShieldParticles = () => (
     <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
             <div 
                key={i} 
                className="absolute w-8 h-8 opacity-10 animate-pulse-slow text-rose-300"
                style={{
                    top: Math.random() * 80 + '%',
                    left: Math.random() * 90 + '%',
                    animationDelay: Math.random() * 3 + 's'
                }}
             >
                 <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1Z" /></svg>
             </div>
        ))}
     </div>
);

const Lanterns = () => (
    <div className="absolute top-0 w-full h-40 pointer-events-none z-0 flex justify-around px-4">
        <div className="w-12 h-32 bg-contain bg-no-repeat bg-top opacity-20 animate-swing" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M12 2L10 20H14L12 2Z'/%3E%3Cpath d='M8 10L6 20H18L16 10H8Z' fill-opacity='0.5'/%3E%3C/svg%3E")` }}></div>
        <div className="w-16 h-48 bg-contain bg-no-repeat bg-top opacity-30 animate-swing" style={{ animationDelay: '1s', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M12 2L10 20H14L12 2Z'/%3E%3Cpath d='M8 10L6 20H18L16 10H8Z' fill-opacity='0.5'/%3E%3C/svg%3E")` }}></div>
        <div className="w-10 h-24 bg-contain bg-no-repeat bg-top opacity-20 animate-swing" style={{ animationDelay: '0.5s', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M12 2L10 20H14L12 2Z'/%3E%3Cpath d='M8 10L6 20H18L16 10H8Z' fill-opacity='0.5'/%3E%3C/svg%3E")` }}></div>
    </div>
);

export const Atmosphere: React.FC<Props> = ({ mode, view }) => {
  const [gradients, setGradients] = useState({
    bg: 'bg-[#2E1065]', // Default purple
    orb1: 'bg-purple-800/30',
    orb2: 'bg-indigo-900/20',
  });

  const isDay = mode === 'DAY' || (mode === 'AUTO' && new Date().getHours() >= 6 && new Date().getHours() < 18);

  useEffect(() => {
    // Determine Base Background
    const baseBg = isDay ? 'bg-[#2E1065]' : 'bg-[#0F172A]'; 
    
    // Determine Accent Orbs based on View and Time
    if (isDay) {
       switch (view) {
         case ViewState.SALAH:
           setGradients({ bg: baseBg, orb1: 'bg-purple-600/30', orb2: 'bg-amber-500/20' });
           break;
         case ViewState.RAMADAN:
            setGradients({ bg: baseBg, orb1: 'bg-purple-700/40', orb2: 'bg-amber-400/20' });
            break;
         case ViewState.FITNESS:
            setGradients({ bg: baseBg, orb1: 'bg-orange-600/30', orb2: 'bg-purple-900/40' });
            break;
         case ViewState.HYGIENE:
            setGradients({ bg: baseBg, orb1: 'bg-cyan-600/30', orb2: 'bg-blue-900/40' });
            break;
         case ViewState.MEMORIZE:
            setGradients({ bg: baseBg, orb1: 'bg-pink-600/30', orb2: 'bg-indigo-900/40' });
            break;
         default:
            setGradients({ bg: baseBg, orb1: 'bg-purple-500/20', orb2: 'bg-amber-300/10' });
       }
    } else {
       switch (view) {
         case ViewState.SALAH:
           setGradients({ bg: baseBg, orb1: 'bg-indigo-900/40', orb2: 'bg-orange-900/20' });
           break;
         case ViewState.RAMADAN:
           setGradients({ bg: '#0b0f19', orb1: 'bg-purple-900/20', orb2: 'bg-amber-900/10' });
           break;
         case ViewState.MDF:
           setGradients({ bg: baseBg, orb1: 'bg-rose-900/30', orb2: 'bg-slate-900/40' });
           break;
         default:
           setGradients({ bg: baseBg, orb1: 'bg-slate-800/50', orb2: 'bg-blue-900/20' });
       }
    }
  }, [mode, view, isDay]);

  const renderBackgroundElements = () => {
      switch (view) {
          case ViewState.SALAH:
              return <><MosqueSilhouette /><Lanterns /></>;
          case ViewState.DHIKR:
              return <><MosqueSilhouette /><FloatingBeads /></>;
          case ViewState.QURAN:
          case ViewState.HADEES:
              return <><MosqueSilhouette /><ArabicLetters /></>;
          case ViewState.MEMORIZE:
              return <SynapseNodes />;
          case ViewState.RAMADAN:
              return <><CrescentMoons /><MosqueSilhouette /></>;
          case ViewState.FITNESS:
              return <FireSparks />;
          case ViewState.HYGIENE:
              return <WaterBubbles />;
          case ViewState.HABITS:
          case ViewState.MDF:
              return <ShieldParticles />;
          case ViewState.NIGHT:
              return <><MosqueSilhouette /><div className="absolute top-[10%] right-[20%] w-24 h-24 rounded-full bg-yellow-100 opacity-20 blur-xl animate-pulse-slow"></div></>;
          default:
              return null;
      }
  };

  return (
    <div className={`fixed inset-0 -z-50 transition-colors duration-[1500ms] ease-in-out overflow-hidden ${gradients.bg}`}>
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} 
      />

      {/* Moving Clouds/Drift */}
      <div className="absolute top-0 left-0 w-[200%] h-full opacity-10 pointer-events-none animate-drift-slow" 
           style={{ background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1), transparent 60%)' }}>
      </div>

      {/* Orbs */}
      <div className={`absolute top-[-20%] left-[-10%] w-[80vh] h-[80vh] rounded-full blur-[100px] animate-float ${gradients.orb1} transition-all duration-[2000ms]`} />
      <div className={`absolute bottom-[-10%] right-[-20%] w-[70vh] h-[70vh] rounded-full blur-[100px] animate-pulse-slow ${gradients.orb2} transition-all duration-[2000ms]`} />
      
      {/* Contextual Elements */}
      {renderBackgroundElements()}
      
      {/* Stars for Night */}
      {!isDay && (
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="absolute bg-white rounded-full animate-pulse" 
                   style={{ width: Math.random()*2+'px', height: Math.random()*2+'px', top: Math.random()*100+'%', left: Math.random()*100+'%', animationDelay: Math.random()*5+'s' }} />
            ))}
          </div>
      )}
    </div>
  );
};
