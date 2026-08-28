import React from 'react';
import { Info, ShieldCheck, Layers, Award, Users, Cpu } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 text-left">
      
      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black border border-slate-700 text-xs font-mono font-bold text-white shadow-md shadow-black">
          <Info className="w-4 h-4 text-white" />
          FREETOGAME PLATFORM MANIFESTO
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-mono text-white uppercase tracking-tight">
          ABOUT FREETOGAME HUB
        </h2>
        <p className="text-slate-300 text-base max-w-3xl font-sans leading-relaxed">
          FreeToGame Hub is a high-tech gaming platform engineered to deliver scroll-synchronized background animation, vertical product showcases, and direct Google Play Store preview redirects.
        </p>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        <div className="p-6 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-3 backdrop-blur-xl shadow-xl shadow-black">
          <div className="p-3 w-fit rounded-xl bg-black border border-slate-700 text-white shadow-md shadow-black">
            <ShieldCheck className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-bold font-mono text-white">100% PlayStore Verified</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Every game featured links out directly to verified Google Play Store listings with zero malware or suspicious download APK mirrors.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-3 backdrop-blur-xl shadow-xl shadow-black">
          <div className="p-3 w-fit rounded-xl bg-black border border-slate-700 text-white shadow-md shadow-black">
            <Layers className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-bold font-mono text-white">Interactive Scroll Flow</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Dynamic HTML5 Canvas & Framer Motion scrubbers calculate fluid background animation frames linked directly to your scroll position.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-3 backdrop-blur-xl shadow-xl shadow-black">
          <div className="p-3 w-fit rounded-xl bg-black border border-slate-700 text-white shadow-md shadow-black">
            <Award className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-bold font-mono text-white">5-Pic Game Previews</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Detailed preview pages featuring 5 high-res gameplay screenshots, system requirements, and verified gamer reviews.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-3 backdrop-blur-xl shadow-xl shadow-black">
          <div className="p-3 w-fit rounded-xl bg-black border border-slate-700 text-white shadow-md shadow-black">
            <Users className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-lg font-bold font-mono text-white">Community Driven</h3>
          <p className="text-xs text-slate-400 leading-relaxed">
            Real user star ratings, verified gamer tags, and upvote counts power our top-rated game listings.
          </p>
        </div>

      </div>

      {/* Tech Spec Banner */}
      <div className="p-8 rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl shadow-black space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <h3 className="text-xl font-bold font-mono text-white uppercase flex items-center gap-2">
            <Cpu className="w-5 h-5 text-white" /> Platform Architecture & Specs
          </h3>
          <span className="px-3 py-1 rounded bg-black text-white font-mono text-xs border border-slate-700 font-bold shadow-md shadow-black">
            60 FPS SCROLL SYNC
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 font-mono text-xs">
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
            <div className="text-slate-400">ANIMATION ENGINE</div>
            <div className="text-lg font-bold text-white">Canvas 2D Sync</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
            <div className="text-slate-400">THEME COLOUR PALETTE</div>
            <div className="text-lg font-bold text-white">Black & White & Blue</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
            <div className="text-slate-400">AUDIO SYNTH ENGINE</div>
            <div className="text-lg font-bold text-white">Web Audio API</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
            <div className="text-slate-400">STORE DESTINATION</div>
            <div className="text-lg font-bold text-white">Google Play Store</div>
          </div>
        </div>
      </div>

    </section>
  );
};
