import React, { useState } from 'react';
import { 
  Gamepad2, 
  Search, 
  Volume2, 
  VolumeX, 
  Menu, 
  X, 
  Sparkles, 
  Flame, 
  Layers, 
  BookOpen, 
  Info, 
  Star, 
  Mail 
} from 'lucide-react';
import { NavSection } from '../types';
import { soundEffects } from '../utils/soundEffects';

interface NavbarProps {
  activeSection: NavSection;
  onNavigate: (section: NavSection) => void;
  onOpenSearch: () => void;
  currentFrame: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
  onOpenSearch
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(soundEffects.isMuted());

  const navItems: { id: NavSection; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Home', icon: <Flame className="w-4 h-4 text-white" /> },
    { id: 'products', label: 'Products', icon: <Layers className="w-4 h-4 text-white" /> },
    { id: 'blog', label: 'Blog', icon: <BookOpen className="w-4 h-4 text-white" /> },
    { id: 'about', label: 'About', icon: <Info className="w-4 h-4 text-white" /> },
    { id: 'reviews', label: 'Reviews', icon: <Star className="w-4 h-4 text-white" /> },
    { id: 'contact', label: 'Contact Us', icon: <Mail className="w-4 h-4 text-white" /> }
  ];

  const handleNavClick = (section: NavSection) => {
    soundEffects.playClick();
    onNavigate(section);
    setMobileMenuOpen(false);
  };

  const toggleMute = () => {
    const nextState = !isMuted;
    setIsMuted(nextState);
    soundEffects.setMuted(nextState);
    if (!nextState) {
      soundEffects.playClick();
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950/95 backdrop-blur-xl border-b border-slate-800 shadow-xl shadow-black transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('home')}
            onMouseEnter={() => soundEffects.playHover()}
            className="flex items-center gap-3 group text-left focus:outline-none"
          >
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-black border border-slate-700 p-0.5 shadow-lg shadow-black group-hover:border-white transition-all duration-300">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                <Gamepad2 className="w-6 h-6 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black tracking-wider text-white font-mono uppercase">
                  FREETOGAME
                </span>
                <span className="px-1.5 py-0.5 text-[10px] font-bold uppercase rounded bg-black text-white border border-slate-700">
                  HUB
                </span>
              </div>
              <p className="text-[10px] text-slate-300 font-mono tracking-widest flex items-center gap-1">
                <Sparkles className="w-2.5 h-2.5 text-white" /> FREE GAME PORTAL
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 p-1.5 rounded-full bg-black/90 border border-slate-800 shadow-inner shadow-black">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  onMouseEnter={() => soundEffects.playHover()}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-black border border-white text-white shadow-lg shadow-black scale-105'
                      : 'text-slate-300 hover:text-white hover:bg-slate-900'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons */}
          <div className="hidden md:flex items-center gap-3">
            
            {/* Search Trigger */}
            <button
              onClick={() => {
                soundEffects.playClick();
                onOpenSearch();
              }}
              onMouseEnter={() => soundEffects.playHover()}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-black hover:bg-slate-900 border border-slate-700 text-white text-xs font-mono transition-all shadow-md shadow-black"
              title="Search Games & News"
            >
              <Search className="w-4 h-4 text-white" />
              <span>Search...</span>
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] rounded bg-slate-900 text-slate-300 border border-slate-700">
                ⌘K
              </kbd>
            </button>

            {/* Audio Toggle */}
            <button
              onClick={toggleMute}
              className={`p-2.5 rounded-xl border transition-all ${
                isMuted
                  ? 'bg-black text-slate-500 border-slate-800 hover:border-slate-700'
                  : 'bg-black text-white border-slate-600 shadow-md shadow-black hover:border-white'
              }`}
              title={isMuted ? 'Unmute Sound FX' : 'Mute Sound FX'}
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleMute}
              className="p-2 rounded-lg bg-black text-white border border-slate-800"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>

            <button
              onClick={() => {
                soundEffects.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="p-2.5 rounded-xl bg-black text-white border border-slate-700 shadow-md shadow-black"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <div className="grid grid-cols-2 gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2.5 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-black text-white border border-white font-bold shadow-md shadow-black'
                      : 'bg-slate-900 text-slate-300 border border-slate-800 hover:border-slate-600'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenSearch();
            }}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-black border border-slate-700 text-white font-mono text-sm shadow-md shadow-black"
          >
            <Search className="w-4 h-4 text-white" />
            Search Games & Articles
          </button>
        </div>
      )}
    </header>
  );
};
