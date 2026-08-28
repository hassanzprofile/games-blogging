import React from 'react';
import { motion } from 'motion/react';
import { Play, ShieldCheck, Flame, Sparkles } from 'lucide-react';
import { soundEffects } from '../utils/soundEffects';

interface HeroSectionProps {
  onExploreClick: () => void;
  selectedGenre: string;
  onSelectGenre: (genre: string) => void;
  currentFrame: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreClick,
  selectedGenre,
  onSelectGenre
}) => {
  const genres = ['All', 'Battle Royale', 'FPS / Shooter', 'RPG / MMORPG', 'Action', 'MOBA'];

  return (
    <section className="relative min-h-[75vh] flex flex-col justify-center pt-8 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Hero Ambient Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-slate-900/40 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto w-full relative z-10 text-center space-y-8">
        
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/90 border border-slate-700 shadow-lg shadow-black">
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
          </span>
          <span className="text-xs font-mono font-semibold text-white uppercase tracking-widest flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            FREEMIUM GAMING PORTAL ACTIVE
          </span>
        </div>

        {/* Main Headline */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white font-mono leading-tight">
            NEXT-GEN <br />
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent drop-shadow-lg">
              FREE GAMES
            </span> <br />
            ANIMATED PORTAL
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto font-sans leading-relaxed">
            Discover top-rated free-to-play mobile and cross-platform titles. As you scroll, games appear vertically with gameplay screenshots, reviews, and direct Google Play Store redirection.
          </p>
        </div>

        {/* CTAs & Play Store Guarantee */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={() => {
              soundEffects.playLaunch();
              onExploreClick();
            }}
            onMouseEnter={() => soundEffects.playHover()}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-black border border-slate-700 text-white font-black text-base font-mono tracking-wide uppercase shadow-2xl shadow-black hover:bg-slate-900 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
          >
            <Play className="w-5 h-5 fill-white text-white group-hover:translate-x-1 transition-transform" />
            <span>Explore Game Catalog</span>
          </button>

          <div className="flex items-center gap-3 px-5 py-3.5 rounded-xl bg-black/90 border border-slate-800 text-slate-200 text-xs font-mono shadow-lg shadow-black">
            <ShieldCheck className="w-5 h-5 text-white shrink-0" />
            <div className="text-left">
              <div className="font-bold text-white flex items-center gap-1">
                PLAY STORE VERIFIED
              </div>
              <div className="text-slate-400">Direct Official Redirects</div>
            </div>
          </div>
        </div>

        {/* Genre Filter Quick Switcher */}
        <div className="space-y-3 pt-6 border-t border-slate-800/80 max-w-3xl mx-auto">
          <div className="flex items-center justify-between text-xs font-mono text-slate-300 uppercase tracking-wider">
            <span className="flex items-center gap-1.5 text-white font-semibold">
              <Flame className="w-4 h-4 text-white" /> Filter Games by Genre:
            </span>
            <span className="text-slate-400">{genres.length - 1} Categories</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {genres.map((g) => (
              <button
                key={g}
                onClick={() => {
                  soundEffects.playClick();
                  onSelectGenre(g);
                }}
                onMouseEnter={() => soundEffects.playHover()}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all shadow-md shadow-black ${
                  selectedGenre === g
                    ? 'bg-black border-2 border-white text-white font-bold scale-105'
                    : 'bg-black/80 text-slate-300 border border-slate-800 hover:border-slate-600 hover:text-white'
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
