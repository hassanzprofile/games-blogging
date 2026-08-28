import React from 'react';
import { motion } from 'motion/react';
import { 
  Star, 
  Download, 
  Play, 
  ExternalLink, 
  Eye
} from 'lucide-react';
import { GameProduct } from '../types';
import { soundEffects } from '../utils/soundEffects';

interface ProductCardVerticalProps {
  game: GameProduct;
  index: number;
  onOpenPreview: (game: GameProduct) => void;
}

export const ProductCardVertical: React.FC<ProductCardVerticalProps> = ({
  game,
  index,
  onOpenPreview
}) => {
  const handlePosterClick = () => {
    soundEffects.playLaunch();
    onOpenPreview(game);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="relative w-full max-w-6xl mx-auto my-12 rounded-3xl bg-slate-950/95 border border-slate-800 p-6 sm:p-10 shadow-2xl shadow-black backdrop-blur-2xl overflow-hidden group"
    >
      {/* Product Sequence Number Badge */}
      <div className="absolute top-6 left-6 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black border border-slate-700 text-xs font-mono font-bold text-white shadow-md shadow-black">
        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
        <span>PRODUCT #{String(index + 1).padStart(2, '0')}</span>
        <span className="text-slate-600">|</span>
        <span className="text-slate-300 uppercase">{game.genre}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
        
        {/* Left Side: Game Poster & Interactive Click Area */}
        <div className="lg:col-span-5 relative space-y-4">
          <div 
            onClick={handlePosterClick}
            onMouseEnter={() => soundEffects.playHover()}
            className="relative h-[400px] rounded-2xl overflow-hidden border border-slate-800 cursor-pointer group/poster shadow-2xl shadow-black"
          >
            <img 
              src={game.posterImage} 
              alt={game.title}
              className="w-full h-full object-cover group-hover/poster:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover/poster:opacity-60 transition-opacity" />

            {/* Hover Poster Overlay CTA */}
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm opacity-0 group-hover/poster:opacity-100 transition-all duration-300 gap-3 p-6 text-center">
              <div className="w-16 h-16 rounded-2xl bg-black text-white border border-slate-600 flex items-center justify-center shadow-2xl shadow-black transform group-hover/poster:scale-110 transition-transform">
                <Play className="w-8 h-8 fill-white ml-1" />
              </div>
              <div className="space-y-1">
                <div className="text-lg font-black text-white font-mono uppercase tracking-wider">
                  GET GAME PREVIEW
                </div>
                <p className="text-xs text-slate-300 font-mono">
                  View 5 Screenshots • Reviews • Download
                </p>
              </div>
              <span className="px-4 py-2 rounded-lg bg-black text-white border border-slate-600 font-bold text-xs font-mono uppercase tracking-widest shadow-lg shadow-black">
                Click Poster to Open
              </span>
            </div>

            {/* Rating & Downloads Badge over Poster */}
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center z-10 pointer-events-none">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/90 border border-slate-700 text-amber-300 font-mono text-xs font-bold shadow-md shadow-black">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span>{game.rating} / 5.0</span>
                <span className="text-slate-400 font-normal">({(game.totalRatingsCount / 1000).toFixed(0)}k)</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/90 border border-slate-700 text-white font-mono text-xs font-bold shadow-md shadow-black">
                <Download className="w-4 h-4 text-white" />
                <span>{game.downloadsCount}</span>
              </div>
            </div>
          </div>

          {/* Quick Click Hint under Poster */}
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 px-1">
            <span className="flex items-center gap-1 text-white font-semibold">
              <Eye className="w-3.5 h-3.5 text-white" /> Interactive Poster
            </span>
            <span className="text-slate-400">Tap to inspect 5 Screenshots</span>
          </div>
        </div>

        {/* Right Side: Game Info */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Title & Tagline */}
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-2xl sm:text-4xl font-black text-white font-mono uppercase tracking-tight">
                {game.title}
              </h2>
              <span className="px-2.5 py-0.5 rounded bg-black border border-slate-700 text-[11px] font-mono text-slate-300 font-bold">
                {game.releaseYear}
              </span>
            </div>
            <p className="text-white font-mono text-sm font-bold tracking-wide">
              {game.tagline}
            </p>
            <p className="text-slate-300 text-sm leading-relaxed font-sans">
              {game.description}
            </p>
          </div>

          {/* Key Features List */}
          <div className="p-4 rounded-2xl bg-black/80 border border-slate-800 space-y-2">
            <div className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-2">
              HIGHLIGHTS
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 font-sans">
              {game.features.slice(0, 4).map((f, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {game.tags.map((tag) => (
              <span 
                key={tag}
                className="px-2.5 py-1 rounded-md bg-black border border-slate-800 text-slate-300 text-xs font-mono"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* CTA Buttons: GET GAME & PlayStore Icon Button */}
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={handlePosterClick}
              onMouseEnter={() => soundEffects.playHover()}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-black hover:bg-slate-900 border border-slate-700 text-white font-black text-sm font-mono uppercase tracking-wider shadow-lg shadow-black hover:shadow-2xl hover:shadow-black active:scale-95 transition-all cursor-pointer"
            >
              <Download className="w-5 h-5 text-white" />
              <span>GET GAME PREVIEW</span>
            </button>

            {/* PlayStore Button - ONLY ICON as requested */}
            <button
              onClick={() => {
                soundEffects.playClick();
                window.open(game.playStoreUrl, '_blank');
              }}
              onMouseEnter={() => soundEffects.playHover()}
              className="flex items-center justify-center p-4 rounded-xl bg-black hover:bg-slate-900 border border-slate-700 text-white shadow-lg shadow-black hover:shadow-2xl hover:shadow-black active:scale-95 transition-all"
              title="Open directly on Google Play Store"
            >
              <ExternalLink className="w-5 h-5 text-white" />
            </button>
          </div>

        </div>

      </div>
    </motion.div>
  );
};
