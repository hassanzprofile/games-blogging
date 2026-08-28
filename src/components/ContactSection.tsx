import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, HelpCircle, ChevronDown } from 'lucide-react';
import { soundEffects } from '../utils/soundEffects';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gamerTag: '',
    category: 'Game Submission',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How does the background scroll animation work?',
      a: 'As you scroll down the web page, our HTML5 Canvas and Framer Motion integration calculates your exact scroll percentage and scrubs through background render frames in real-time.'
    },
    {
      q: 'Are all games on FreeToGame 100% free to play?',
      a: 'Yes! Every featured game is 100% free to play without pay-to-win locks. We link directly to official Google Play Store pages.'
    },
    {
      q: 'How do I access the 5 screenshot preview for a game?',
      a: 'Simply click or tap on any game poster or press the "GET GAME PREVIEW" button. This launches the game preview modal featuring 5 screenshots, verified reviews, and the PLAY NOW button.'
    },
    {
      q: 'Can developers submit their free game to be listed?',
      a: 'Yes! Select "Game Submission" in the contact form below and provide your Play Store package URL for review.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundEffects.playLaunch();
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      gamerTag: '',
      category: 'Game Submission',
      subject: '',
      message: ''
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16 text-left">
      
      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black border border-slate-700 text-xs font-mono font-bold text-white shadow-md shadow-black">
          <Mail className="w-4 h-4 text-white" />
          COMMUNICATION HUB
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-mono text-white uppercase tracking-tight">
          CONTACT US & SUPPORT
        </h2>
        <p className="text-slate-300 text-base max-w-2xl font-sans">
          Have a game submission, feedback, or technical query? Send us a message and our team will get back to you within 24 hours.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Contact Form */}
        <div className="lg:col-span-7 p-8 rounded-3xl bg-slate-950/90 border border-slate-800 space-y-6 shadow-2xl shadow-black backdrop-blur-2xl">
          <h3 className="text-xl font-bold font-mono text-white uppercase flex items-center gap-2">
            <Send className="w-5 h-5 text-white" /> Send Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-slate-400">YOUR NAME *</label>
                <input 
                  type="text"
                  required
                  placeholder="e.g. Alex Vance"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white focus:border-white focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-slate-400">EMAIL ADDRESS *</label>
                <input 
                  type="email"
                  required
                  placeholder="gamer@freetogame.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white focus:border-white focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-slate-400">GAMER TAG (OPTIONAL)</label>
                <input 
                  type="text"
                  placeholder="e.g. VAPOR_X9"
                  value={formData.gamerTag}
                  onChange={(e) => setFormData({ ...formData, gamerTag: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white focus:border-white focus:outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-slate-400">CATEGORY</label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white font-bold focus:border-white focus:outline-none"
                >
                  <option value="Game Submission">Game Submission</option>
                  <option value="Bug Report">Bug Report</option>
                  <option value="Partnership">Partnership Inquiry</option>
                  <option value="Feedback">General Feedback</option>
                </select>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-slate-400">SUBJECT *</label>
              <input 
                type="text"
                required
                placeholder="e.g. Submitting my new Android Cyberpunk game"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white focus:border-white focus:outline-none"
              />
            </div>

            <div className="space-y-1">
              <label className="text-slate-400">MESSAGE *</label>
              <textarea 
                rows={4}
                required
                placeholder="Provide detailed information regarding your inquiry..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white focus:border-white focus:outline-none"
              />
            </div>

            {submitted && (
              <div className="p-4 rounded-xl bg-slate-900 border border-emerald-500/60 text-emerald-300 font-bold flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" /> Message dispatched successfully! Our team will respond shortly.
              </div>
            )}

            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-black border border-slate-700 hover:bg-slate-900 text-white font-black text-sm uppercase tracking-wider shadow-lg shadow-black hover:shadow-2xl hover:shadow-black transition-all cursor-pointer"
            >
              Dispatch Contact Request
            </button>
          </form>
        </div>

        {/* FAQs */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-3xl bg-slate-950/90 border border-slate-800 space-y-4 backdrop-blur-2xl shadow-2xl shadow-black">
            <h3 className="text-xl font-bold font-mono text-white uppercase flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-white" /> Frequently Asked Questions
            </h3>

            <div className="space-y-3">
              {faqs.map((faq, i) => {
                const isOpen = openFaqIndex === i;
                return (
                  <div 
                    key={i}
                    className="rounded-xl bg-slate-900 border border-slate-800 overflow-hidden"
                  >
                    <button
                      onClick={() => {
                        soundEffects.playClick();
                        setOpenFaqIndex(isOpen ? null : i);
                      }}
                      className="w-full p-4 text-left font-mono text-xs font-bold text-white flex justify-between items-center gap-2 hover:text-slate-300"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 text-white transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="p-4 pt-0 text-xs text-slate-300 font-sans leading-relaxed border-t border-slate-800/80">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
