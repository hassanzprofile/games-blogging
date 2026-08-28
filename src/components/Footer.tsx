import React, { useState } from 'react';
import { Gamepad2, Sparkles, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { NavSection } from '../types';
import { soundEffects } from '../utils/soundEffects';

interface FooterProps {
  onNavigate: (section: NavSection) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    soundEffects.playLaunch();
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <footer className="relative bg-slate-950 border-t border-slate-800 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-left z-10 shadow-2xl shadow-black">
      <div className="max-w-7xl mx-auto space-y-12">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-black border border-slate-700 p-0.5 shadow-md shadow-black flex items-center justify-center">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Gamepad2 className="w-5 h-5 text-white" />
                </div>
              </div>
              <span className="text-xl font-black font-mono tracking-wider text-white uppercase">
                FREETOGAME HUB
              </span>
            </div>

            <p className="text-xs text-slate-400 font-sans leading-relaxed max-w-sm">
              Next-gen gaming portal featuring scroll-synchronized background animations, vertical product showcases, 5-picture preview pages, verified reviews, and official Google Play Store redirects.
            </p>

            <div className="flex items-center gap-2 text-[11px] font-mono text-white font-bold bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 w-fit">
              <ShieldCheck className="w-4 h-4 text-white" />
              <span>100% PlayStore Verified Links</span>
            </div>
          </div>

          {/* Nav Links */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-slate-400">
              {(['home', 'products', 'blog', 'about', 'reviews', 'contact'] as NavSection[]).map((sec) => (
                <li key={sec}>
                  <button
                    onClick={() => {
                      soundEffects.playClick();
                      onNavigate(sec);
                    }}
                    className="hover:text-white capitalize transition-colors"
                  >
                    {sec === 'contact' ? 'Contact Us' : sec}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs">
            <h4 className="font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-white" /> DISPATCH NEWSLETTER
            </h4>
            <p className="text-slate-400 font-sans text-xs">
              Subscribe to get notified when new free games, patch notes, and updates drop.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="flex gap-2">
                <input 
                  type="email" 
                  required
                  placeholder="enter.your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white focus:border-white focus:outline-none flex-1"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-xl bg-black border border-slate-700 hover:bg-slate-900 text-white font-bold uppercase transition-all shadow-md shadow-black"
                >
                  <Send className="w-4 h-4 text-white" />
                </button>
              </div>

              {subscribed && (
                <div className="text-[11px] text-emerald-400 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Subscribed to Dispatch!
                </div>
              )}
            </form>
          </div>

        </div>

        {/* Bottom Rights */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-slate-500 gap-4">
          <div>
            © 2026 FreeToGame Hub. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Scroll Sync Active</span>
            <span>•</span>
            <span className="text-white font-semibold">Black & Blue Theme</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
