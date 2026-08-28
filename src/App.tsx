import React, { useState, useRef, useEffect } from 'react';
import { NavSection, GameProduct } from './types';
import { GAMES_DATA } from './data/games';
import { FrameBackground180 } from './components/FrameBackground180';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProductCardVertical } from './components/ProductCardVertical';
import { GamePreviewPage } from './components/GamePreviewPage';
import { BlogSection } from './components/BlogSection';
import { AboutSection } from './components/AboutSection';
import { ReviewsSection } from './components/ReviewsSection';
import { ContactSection } from './components/ContactSection';
import { SearchModal } from './components/SearchModal';
import { Footer } from './components/Footer';
import { soundEffects } from './utils/soundEffects';

export default function App() {
  const [activeSection, setActiveSection] = useState<NavSection>('home');
  const [selectedGenre, setSelectedGenre] = useState<string>('All');
  const [previewGame, setPreviewGame] = useState<GameProduct | null>(null);
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [currentFrame, setCurrentFrame] = useState<number>(0);

  // Section Refs for Smooth Jumping
  const homeRef = useRef<HTMLDivElement | null>(null);
  const productsRef = useRef<HTMLDivElement | null>(null);
  const blogRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const reviewsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  const handleNavigate = (section: NavSection) => {
    setActiveSection(section);
    let targetRef: React.RefObject<HTMLDivElement | null> | null = null;

    if (section === 'home') targetRef = homeRef;
    if (section === 'products') targetRef = productsRef;
    if (section === 'blog') targetRef = blogRef;
    if (section === 'about') targetRef = aboutRef;
    if (section === 'reviews') targetRef = reviewsRef;
    if (section === 'contact') targetRef = contactRef;

    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenPreviewByGameId = (gameId: string) => {
    const found = GAMES_DATA.find((g) => g.id === gameId);
    if (found) {
      soundEffects.playLaunch();
      setPreviewGame(found);
    }
  };

  // Keyboard shortcut ⌘K or Ctrl+K for search modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const filteredGames = selectedGenre === 'All'
    ? GAMES_DATA
    : GAMES_DATA.filter((g) => g.genre === selectedGenre);

  return (
    <div className="relative min-h-screen bg-[#03050a] text-slate-100 font-sans selection:bg-white selection:text-black overflow-x-hidden">
      
      {/* Background Canvas Animation */}
      <FrameBackground180 onFrameChange={(frame) => setCurrentFrame(frame)} />

      {/* Main Sticky Navbar */}
      <Navbar 
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenSearch={() => setSearchOpen(true)}
        currentFrame={currentFrame}
      />

      {/* Main Content Sections Flow */}
      <main className="relative z-10 space-y-16">
        
        {/* HOME SECTION */}
        <div ref={homeRef} id="home" className="scroll-mt-24">
          <HeroSection 
            onExploreClick={() => handleNavigate('products')}
            selectedGenre={selectedGenre}
            onSelectGenre={(genre) => setSelectedGenre(genre)}
            currentFrame={currentFrame}
          />
        </div>

        {/* PRODUCTS SECTION - Vertical Flow One By One */}
        <div ref={productsRef} id="products" className="scroll-mt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black border border-slate-700 text-xs font-mono font-bold text-white shadow-md shadow-black">
              <span className="w-2 h-2 rounded-full bg-white animate-ping" />
              VERTICAL ANIMATION FLOW
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-mono text-white uppercase tracking-tight">
              FEATURED GAME PRODUCTS
            </h2>
            <p className="text-slate-300 text-sm sm:text-base font-sans">
              Games appear vertically one by one as you scroll. Each game features 5 gameplay screenshot previews, detailed specs, verified gamer reviews, and direct Google Play Store redirection.
            </p>
          </div>

          {/* Vertical Games List */}
          <div className="space-y-12">
            {filteredGames.map((game, idx) => (
              <ProductCardVertical 
                key={game.id}
                game={game}
                index={idx}
                onOpenPreview={(selectedGame) => {
                  soundEffects.playLaunch();
                  setPreviewGame(selectedGame);
                }}
              />
            ))}
          </div>
        </div>

        {/* BLOG SECTION */}
        <div ref={blogRef} id="blog" className="scroll-mt-24">
          <BlogSection />
        </div>

        {/* ABOUT SECTION */}
        <div ref={aboutRef} id="about" className="scroll-mt-24">
          <AboutSection />
        </div>

        {/* REVIEWS SECTION */}
        <div ref={reviewsRef} id="reviews" className="scroll-mt-24">
          <ReviewsSection onOpenGamePreview={handleOpenPreviewByGameId} />
        </div>

        {/* CONTACT SECTION */}
        <div ref={contactRef} id="contact" className="scroll-mt-24">
          <ContactSection />
        </div>

      </main>

      {/* FOOTER */}
      <Footer onNavigate={handleNavigate} />

      {/* GAME PREVIEW MODAL PAGE (5 SCREENSHOTS, PLAYSTORE LINK, REVIEWS, RATINGS, DOWNLOADS) */}
      <GamePreviewPage 
        game={previewGame}
        onClose={() => setPreviewGame(null)}
      />

      {/* QUICK SEARCH MODAL */}
      <SearchModal 
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectGame={(g) => {
          soundEffects.playLaunch();
          setPreviewGame(g);
        }}
      />

    </div>
  );
}
