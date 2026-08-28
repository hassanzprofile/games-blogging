import React from 'react';
import { Star, ShieldCheck, MessageSquare, Award } from 'lucide-react';
import { GLOBAL_REVIEWS_DATA } from '../data/reviews';
import { GAMES_DATA } from '../data/games';
import { soundEffects } from '../utils/soundEffects';

interface ReviewsSectionProps {
  onOpenGamePreview: (gameId: string) => void;
}

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ onOpenGamePreview }) => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 text-left">
      
      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black border border-slate-700 text-xs font-mono font-bold text-white shadow-md shadow-black">
          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
          COMMUNITY FEEDBACK & LEADERBOARDS
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-mono text-white uppercase tracking-tight">
          GLOBAL REVIEWS & RATINGS
        </h2>
        <p className="text-slate-300 text-base max-w-2xl font-sans">
          Read verified player reviews across our entire library of free-to-play titles.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Top Rated Leaderboard */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl bg-slate-950/90 border border-slate-800 space-y-4 backdrop-blur-xl shadow-2xl shadow-black">
            <h3 className="text-lg font-bold font-mono text-white uppercase flex items-center gap-2">
              <Award className="w-5 h-5 text-amber-400" /> Top Rated Games Leaderboard
            </h3>
            <div className="space-y-3">
              {GAMES_DATA.map((g, idx) => (
                <div 
                  key={g.id}
                  onClick={() => {
                    soundEffects.playClick();
                    onOpenGamePreview(g.id);
                  }}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-600 cursor-pointer transition-all shadow-md shadow-black"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono font-black text-white text-sm">
                      #{idx + 1}
                    </span>
                    <img src={g.posterImage} alt={g.title} className="w-10 h-10 rounded-lg object-cover" />
                    <div>
                      <div className="font-bold text-sm text-white font-mono">{g.title}</div>
                      <div className="text-[10px] text-slate-400 font-mono">{g.downloadsCount} Downloads</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 bg-black px-2.5 py-1 rounded border border-amber-500/40 text-amber-300 font-mono text-xs font-bold shadow-sm shadow-black">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <span>{g.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Global Reviews Stream */}
        <div className="lg:col-span-7 space-y-4">
          <h3 className="text-lg font-bold font-mono text-white uppercase flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-white" /> Latest Verified Reviews
          </h3>

          <div className="space-y-4">
            {GLOBAL_REVIEWS_DATA.map((rev) => (
              <div 
                key={rev.id}
                className="p-6 rounded-2xl bg-slate-950/90 border border-slate-800 hover:border-slate-600 transition-all space-y-3 backdrop-blur-xl shadow-xl shadow-black"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={rev.userAvatar} alt={rev.userName} className="w-10 h-10 rounded-full object-cover border border-slate-700" />
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-white font-mono">{rev.userName}</span>
                        <span className="text-xs text-slate-300 font-mono">[{rev.gamerTag}]</span>
                      </div>
                      <span className="text-[10px] text-slate-500 font-mono">Reviewed {rev.gameTitle}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 bg-black px-2.5 py-1 rounded text-amber-400 text-xs font-mono font-bold border border-slate-700">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{rev.rating}.0</span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  "{rev.comment}"
                </p>

                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 pt-2 border-t border-slate-800">
                  <span className="flex items-center gap-1 text-white font-bold">
                    <ShieldCheck className="w-3.5 h-3.5 text-white" /> Verified PlayStore User
                  </span>
                  <span>{rev.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

    </section>
  );
};
