import React, { useState } from 'react';
import { X, Search, Star } from 'lucide-react';
import { GAMES_DATA } from '../data/games';
import { BLOGS_DATA } from '../data/blogs';
import { GameProduct } from '../types';
import { soundEffects } from '../utils/soundEffects';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectGame: (game: GameProduct) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onSelectGame }) => {
  if (!isOpen) return null;

  const [query, setQuery] = useState('');

  const filteredGames = GAMES_DATA.filter((g) =>
    g.title.toLowerCase().includes(query.toLowerCase()) ||
    g.genre.toLowerCase().includes(query.toLowerCase()) ||
    g.tags.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  const filteredBlogs = BLOGS_DATA.filter((b) =>
    b.title.toLowerCase().includes(query.toLowerCase()) ||
    b.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/90 backdrop-blur-2xl">
      <div className="w-full max-w-3xl rounded-3xl bg-slate-950 border border-slate-800 p-6 space-y-6 shadow-2xl shadow-black text-white">
        
        {/* Search Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3 flex-1">
            <Search className="w-5 h-5 text-white" />
            <input 
              type="text" 
              autoFocus
              placeholder="Search games, genres, news, or tags (e.g. Battle Royale)..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent text-white font-mono text-sm focus:outline-none placeholder:text-slate-500"
            />
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-black border border-slate-700 text-white hover:bg-slate-900"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Stream */}
        <div className="space-y-6 max-h-[60vh] overflow-y-auto custom-scrollbar pr-1">
          
          {/* Game Results */}
          <div className="space-y-3">
            <div className="text-xs font-mono text-slate-400 uppercase font-bold flex items-center justify-between">
              <span>GAMES ({filteredGames.length})</span>
              <span className="text-white text-[10px]">Click game to preview</span>
            </div>

            {filteredGames.length === 0 ? (
              <p className="text-xs text-slate-500 font-mono italic">No games found matching "{query}"</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filteredGames.map((g) => (
                  <div
                    key={g.id}
                    onClick={() => {
                      soundEffects.playLaunch();
                      onSelectGame(g);
                      onClose();
                    }}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-600 cursor-pointer transition-all shadow-md shadow-black"
                  >
                    <img src={g.posterImage} alt={g.title} className="w-12 h-12 rounded-xl object-cover" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-xs text-white font-mono truncate">{g.title}</h4>
                      <div className="flex items-center gap-2 text-[10px] font-mono text-slate-400">
                        <span className="text-slate-300 font-semibold">{g.genre}</span>
                        <span>•</span>
                        <span className="flex items-center gap-0.5 text-amber-400">
                          <Star className="w-3 h-3 fill-amber-400" /> {g.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* News Results */}
          <div className="space-y-3 pt-4 border-t border-slate-800">
            <div className="text-xs font-mono text-slate-400 uppercase font-bold">
              ARTICLES & GUIDES ({filteredBlogs.length})
            </div>

            {filteredBlogs.map((b) => (
              <div
                key={b.id}
                className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1"
              >
                <div className="flex items-center gap-2 text-[10px] font-mono text-white font-semibold">
                  <span>{b.category}</span>
                  <span>•</span>
                  <span className="text-slate-500">{b.date}</span>
                </div>
                <h5 className="font-bold text-xs font-mono text-white">{b.title}</h5>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};
