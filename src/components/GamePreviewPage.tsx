import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Star, 
  Download, 
  Play, 
  ShieldCheck, 
  Sparkles, 
  ThumbsUp, 
  Smartphone, 
  CheckCircle2, 
  MessageSquarePlus, 
  Send,
  Maximize2,
  ChevronLeft,
  ChevronRight,
  Cpu
} from 'lucide-react';
import { GameProduct, GameReview } from '../types';
import { soundEffects } from '../utils/soundEffects';

interface GamePreviewPageProps {
  game: GameProduct | null;
  onClose: () => void;
}

export const GamePreviewPage: React.FC<GamePreviewPageProps> = ({ game, onClose }) => {
  if (!game) return null;

  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const [reviewsList, setReviewsList] = useState<GameReview[]>(game.reviews);
  const [redirectToast, setRedirectToast] = useState<boolean>(false);

  // New review form states
  const [newRating, setNewRating] = useState<number>(5);
  const [newUserName, setNewUserName] = useState<string>('');
  const [newGamerTag, setNewGamerTag] = useState<string>('');
  const [newReviewTitle, setNewReviewTitle] = useState<string>('');
  const [newComment, setNewComment] = useState<string>('');
  const [submittedSuccess, setSubmittedSuccess] = useState<boolean>(false);

  const handlePlayNow = () => {
    soundEffects.playLaunch();
    setRedirectToast(true);
    setTimeout(() => {
      window.open(game.playStoreUrl, '_blank');
      setRedirectToast(false);
    }, 1000);
  };

  const handleHelpfulClick = (reviewId: string) => {
    soundEffects.playClick();
    setReviewsList((prev) =>
      prev.map((r) => (r.id === reviewId ? { ...r, helpfulCount: r.helpfulCount + 1 } : r))
    );
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUserName.trim() || !newComment.trim()) return;

    soundEffects.playClick();
    const createdReview: GameReview = {
      id: `custom-rev-${Date.now()}`,
      userName: newUserName.trim(),
      userAvatar: `https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80`,
      gamerTag: newGamerTag.trim() || 'VERIFIED_GAMER',
      rating: newRating,
      date: 'Just Now',
      title: newReviewTitle.trim() || 'Awesome Game!',
      comment: newComment.trim(),
      helpfulCount: 1,
      isVerifiedGamer: true,
      platformPlayed: 'Mobile'
    };

    setReviewsList([createdReview, ...reviewsList]);
    setSubmittedSuccess(true);
    setNewUserName('');
    setNewGamerTag('');
    setNewReviewTitle('');
    setNewComment('');

    setTimeout(() => setSubmittedSuccess(false), 4000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto bg-slate-950/90 backdrop-blur-2xl">
        
        {/* Main Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-3xl bg-slate-950 border border-slate-800 shadow-2xl shadow-black text-white p-6 sm:p-8 space-y-8 my-auto custom-scrollbar"
        >
          
          {/* Header Bar */}
          <div className="flex items-start justify-between border-b border-slate-800 pb-6 gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full bg-black text-white border border-slate-700 font-mono text-xs font-bold uppercase shadow-sm shadow-black">
                  {game.genre}
                </span>
                <span className="px-2.5 py-0.5 rounded bg-slate-900 text-slate-300 font-mono text-xs border border-slate-800">
                  Released: {game.releaseYear}
                </span>
                <span className="px-2.5 py-0.5 rounded bg-black text-white border border-slate-700 font-mono text-xs font-bold flex items-center gap-1 shadow-sm shadow-black">
                  <ShieldCheck className="w-3.5 h-3.5 text-white" /> PlayStore Verified
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black font-mono tracking-tight text-white uppercase">
                {game.title}
              </h1>
              <p className="text-slate-400 text-sm font-mono mt-1">
                Developer: <span className="text-white font-semibold">{game.developer}</span> | Publisher: <span className="text-white font-semibold">{game.publisher}</span>
              </p>
            </div>

            <button
              onClick={() => {
                soundEffects.playClick();
                onClose();
              }}
              className="p-3 rounded-2xl bg-black hover:bg-slate-900 border border-slate-700 text-white transition-all shadow-md shadow-black shrink-0"
              title="Close Preview Page"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* SECTION 1: 5 SCREENSHOTS GALLERY */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-white font-bold uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-white" />
                GAMEPLAY SCREENSHOT GALLERY (5 PICS)
              </span>
              <span className="text-slate-400">
                Pic {activeImageIndex + 1} of {game.screenshots.length}
              </span>
            </div>

            {/* Main Featured Screenshot Viewer */}
            <div className="relative h-64 sm:h-96 md:h-[450px] rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 group shadow-2xl shadow-black">
              <img 
                src={game.screenshots[activeImageIndex]} 
                alt={`${game.title} Screenshot ${activeImageIndex + 1}`}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* Prev / Next Controls over Main Image */}
              <button
                onClick={() => {
                  soundEffects.playClick();
                  setActiveImageIndex((prev) => (prev === 0 ? game.screenshots.length - 1 : prev - 1));
                }}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-xl bg-black/90 hover:bg-black border border-slate-700 text-white shadow-lg shadow-black"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={() => {
                  soundEffects.playClick();
                  setActiveImageIndex((prev) => (prev === game.screenshots.length - 1 ? 0 : prev + 1));
                }}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-xl bg-black/90 hover:bg-black border border-slate-700 text-white shadow-lg shadow-black"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Expand Fullscreen Button */}
              <button
                onClick={() => {
                  soundEffects.playClick();
                  setFullscreenImage(game.screenshots[activeImageIndex]);
                }}
                className="absolute top-4 right-4 p-2.5 rounded-xl bg-black/90 hover:bg-black border border-slate-700 text-white shadow-lg shadow-black"
                title="Expand Fullscreen Pic"
              >
                <Maximize2 className="w-5 h-5" />
              </button>
            </div>

            {/* 5 Thumbnail Selectors Row */}
            <div className="grid grid-cols-5 gap-3">
              {game.screenshots.map((pic, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    soundEffects.playClick();
                    setActiveImageIndex(idx);
                  }}
                  onMouseEnter={() => soundEffects.playHover()}
                  className={`relative h-16 sm:h-24 rounded-xl overflow-hidden border-2 transition-all ${
                    activeImageIndex === idx
                      ? 'border-white shadow-lg shadow-black scale-105 z-10'
                      : 'border-slate-800 opacity-60 hover:opacity-100 hover:border-slate-600'
                  }`}
                >
                  <img src={pic} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" />
                  <div className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black text-[10px] font-mono text-white font-bold border border-slate-700">
                    #{idx + 1}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* SECTION 2: PROMINENT PLAY NOW / DOWNLOAD CTA BOX */}
          <div className="relative p-6 sm:p-8 rounded-3xl bg-black border border-slate-800 shadow-2xl shadow-black flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-white font-mono text-xs font-bold uppercase">
                <Sparkles className="w-3.5 h-3.5" /> FREE TO PLAY • DIRECT OFFICIAL STORE
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white font-mono uppercase">
                READY TO PLAY {game.title}?
              </h2>
              <p className="text-slate-300 text-sm max-w-xl">
                Press the button below to launch directly to the official Google Play Store page and install on your mobile device!
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
              <button
                onClick={handlePlayNow}
                onMouseEnter={() => soundEffects.playHover()}
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-5 rounded-2xl bg-black hover:bg-slate-900 border border-slate-600 text-white font-black text-lg font-mono uppercase tracking-wider shadow-2xl shadow-black hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                <Play className="w-6 h-6 fill-white text-white" />
                <span>PLAY NOW</span>
              </button>
            </div>
          </div>

          {/* Redirect Confirmation Toast */}
          {redirectToast && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-xl bg-black border border-white text-white font-mono font-bold text-sm text-center shadow-2xl shadow-black"
            >
              🚀 Launching Google Play Store page in a new tab...
            </motion.div>
          )}

          {/* SECTION 3: RATINGS, DOWNLOADS & STATS SUMMARY */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Rating Box */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1 shadow-lg shadow-black">
              <div className="text-xs font-mono text-slate-400 uppercase flex items-center gap-1.5">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" /> Overall Rating
              </div>
              <div className="text-3xl font-black text-amber-400 font-mono">
                {game.rating} <span className="text-sm text-slate-400 font-normal">/ 5.0</span>
              </div>
              <div className="text-xs text-slate-400 font-mono">
                {game.totalRatingsCount.toLocaleString()} Verified Ratings
              </div>
            </div>

            {/* Downloads Box */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1 shadow-lg shadow-black">
              <div className="text-xs font-mono text-slate-400 uppercase flex items-center gap-1.5">
                <Download className="w-4 h-4 text-white" /> Total Downloads
              </div>
              <div className="text-3xl font-black text-white font-mono">
                {game.downloadsCount}
              </div>
              <div className="text-xs text-slate-400 font-mono">
                {game.downloadsExact.toLocaleString()}+ Total Installs
              </div>
            </div>

            {/* Active Players Box */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1 shadow-lg shadow-black">
              <div className="text-xs font-mono text-slate-400 uppercase flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Active Players
              </div>
              <div className="text-3xl font-black text-emerald-400 font-mono">
                245,900+
              </div>
              <div className="text-xs text-slate-400 font-mono">
                Concurrent Online Now
              </div>
            </div>

            {/* System Specs Box */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 space-y-1 shadow-lg shadow-black">
              <div className="text-xs font-mono text-slate-400 uppercase flex items-center gap-1.5">
                <Smartphone className="w-4 h-4 text-white" /> Target OS
              </div>
              <div className="text-base font-bold text-white font-mono">
                {game.systemRequirements.os}
              </div>
              <div className="text-xs text-slate-400 font-mono">
                Storage: {game.systemRequirements.storage}
              </div>
            </div>

          </div>

          {/* SECTION 4: GAME FEATURES & SYSTEM REQUIREMENTS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Features */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold font-mono text-white uppercase flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-white" /> Core Game Features
              </h3>
              <ul className="space-y-2.5">
                {game.features.map((ft, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <CheckCircle2 className="w-5 h-5 text-white shrink-0 mt-0.5" />
                    <span>{ft}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* System Specs */}
            <div className="p-6 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-4">
              <h3 className="text-lg font-bold font-mono text-white uppercase flex items-center gap-2">
                <Cpu className="w-5 h-5 text-white" /> System Requirements
              </h3>
              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">OS Version:</span>
                  <span className="text-white font-bold">{game.systemRequirements.os}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Minimum RAM:</span>
                  <span className="text-white font-bold">{game.systemRequirements.ram}</span>
                </div>
                <div className="flex justify-between border-b border-slate-800 pb-2">
                  <span className="text-slate-400">Free Storage:</span>
                  <span className="text-white font-bold">{game.systemRequirements.storage}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Graphics GPU:</span>
                  <span className="text-white font-bold">{game.systemRequirements.graphics}</span>
                </div>
              </div>
            </div>

          </div>

          {/* SECTION 5: REVIEWS AND RATINGS COMMUNITY HUB */}
          <div className="space-y-6 pt-4 border-t border-slate-800">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-black font-mono text-white uppercase">
                  GAMER REVIEWS & RATINGS
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  Verified player reviews and community ratings
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-3xl font-black text-amber-400 font-mono">{game.rating}</span>
                <div>
                  <div className="flex text-amber-400 text-sm">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-400 font-mono">{reviewsList.length} Community Reviews</span>
                </div>
              </div>
            </div>

            {/* Write a Review Form */}
            <div className="p-6 rounded-2xl bg-black/80 border border-slate-800 space-y-4 shadow-xl shadow-black">
              <div className="flex items-center gap-2 text-sm font-mono font-bold text-white uppercase">
                <MessageSquarePlus className="w-5 h-5 text-white" />
                WRITE A VERIFIED GAMER REVIEW
              </div>

              <form onSubmit={handleAddReview} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <input 
                    type="text" 
                    placeholder="Your Name (e.g. Alex Mercer)"
                    value={newUserName}
                    onChange={(e) => setNewUserName(e.target.value)}
                    required
                    className="px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-mono focus:border-white focus:outline-none"
                  />
                  <input 
                    type="text" 
                    placeholder="Gamer Tag (e.g. GAMER_X9)"
                    value={newGamerTag}
                    onChange={(e) => setNewGamerTag(e.target.value)}
                    className="px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-mono focus:border-white focus:outline-none"
                  />
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-950 border border-slate-800">
                    <span className="text-xs text-slate-400 font-mono">Rating:</span>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          onClick={() => setNewRating(star)}
                          className="focus:outline-none"
                        >
                          <Star 
                            className={`w-4 h-4 ${
                              star <= newRating ? 'fill-amber-400 text-amber-400' : 'text-slate-600'
                            }`} 
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <input 
                  type="text" 
                  placeholder="Review Headline (e.g. Smooth graphics, awesome controls!)"
                  value={newReviewTitle}
                  onChange={(e) => setNewReviewTitle(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-mono focus:border-white focus:outline-none"
                />

                <textarea 
                  rows={3}
                  placeholder="Write your detailed gameplay experience..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs font-mono focus:border-white focus:outline-none"
                />

                <div className="flex items-center justify-between">
                  {submittedSuccess ? (
                    <span className="text-xs font-mono text-emerald-400 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" /> Review submitted & published live!
                    </span>
                  ) : (
                    <span className="text-xs text-slate-500 font-mono">Your review will be posted publicly</span>
                  )}

                  <button
                    type="submit"
                    className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-black border border-slate-700 hover:bg-slate-900 text-white font-bold text-xs font-mono uppercase tracking-wider transition-all shadow-md shadow-black"
                  >
                    <Send className="w-4 h-4" />
                    Submit Review
                  </button>
                </div>
              </form>
            </div>

            {/* Reviews Stream */}
            <div className="space-y-4">
              {reviewsList.map((rev) => (
                <div 
                  key={rev.id}
                  className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img 
                        src={rev.userAvatar} 
                        alt={rev.userName} 
                        className="w-10 h-10 rounded-full object-cover border border-slate-700"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-sm text-white font-mono">{rev.userName}</span>
                          <span className="text-xs text-slate-300 font-mono">[{rev.gamerTag}]</span>
                          {rev.isVerifiedGamer && (
                            <span className="px-2 py-0.5 rounded bg-black text-white text-[10px] font-mono border border-slate-700 flex items-center gap-1">
                              <ShieldCheck className="w-3 h-3 text-white" /> Verified Gamer
                            </span>
                          )}
                        </div>
                        <span className="text-[11px] text-slate-500 font-mono">{rev.date}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-3.5 h-3.5 ${
                            i < rev.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-700'
                          }`} 
                        />
                      ))}
                    </div>
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-bold text-sm text-white font-mono">{rev.title}</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{rev.comment}</p>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-slate-500 pt-2 border-t border-slate-800/60">
                    <span>Played on {rev.platformPlayed}</span>
                    <button
                      onClick={() => handleHelpfulClick(rev.id)}
                      className="flex items-center gap-1.5 hover:text-white transition-colors text-slate-400"
                    >
                      <ThumbsUp className="w-3.5 h-3.5" />
                      <span>Helpful ({rev.helpfulCount})</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </motion.div>

        {/* Fullscreen Picture Lightbox */}
        {fullscreenImage && (
          <div 
            onClick={() => setFullscreenImage(null)}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 cursor-pointer"
          >
            <img src={fullscreenImage} alt="Fullscreen Pic" className="max-w-full max-h-full rounded-2xl object-contain" />
            <button className="absolute top-6 right-6 p-3 rounded-full bg-slate-900 text-white">
              <X className="w-8 h-8" />
            </button>
          </div>
        )}

      </div>
    </AnimatePresence>
  );
};
