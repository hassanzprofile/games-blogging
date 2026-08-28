import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Calendar, Clock, ArrowRight, X } from 'lucide-react';
import { BLOGS_DATA } from '../data/blogs';
import { BlogPost } from '../types';
import { soundEffects } from '../utils/soundEffects';

export const BlogSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  const categories = ['All', 'Tier Lists', 'Game Updates', 'Esports', 'Guides'];

  const filteredBlogs = selectedCategory === 'All'
    ? BLOGS_DATA
    : BLOGS_DATA.filter((b) => b.category === selectedCategory);

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12 text-left">
      
      {/* Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black border border-slate-700 text-xs font-mono font-bold text-white shadow-md shadow-black">
          <BookOpen className="w-4 h-4 text-white" />
          FREETOGAME CHRONICLES
        </div>
        <h2 className="text-3xl sm:text-5xl font-black font-mono text-white uppercase tracking-tight">
          GAMING BLOG & GUIDES
        </h2>
        <p className="text-slate-300 text-base max-w-2xl font-sans">
          Stay informed with patch note breakdowns, esports tournament rankings, tier lists, and tactical guides written by verified gamers.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              soundEffects.playClick();
              setSelectedCategory(cat);
            }}
            onMouseEnter={() => soundEffects.playHover()}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase transition-all shadow-md shadow-black ${
              selectedCategory === cat
                ? 'bg-black border-2 border-white text-white font-bold scale-105'
                : 'bg-black/80 text-slate-300 border border-slate-800 hover:border-slate-600 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredBlogs.map((blog) => (
          <motion.div
            key={blog.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-slate-950/90 border border-slate-800 hover:border-slate-600 overflow-hidden space-y-4 p-5 backdrop-blur-xl shadow-xl shadow-black group transition-all"
          >
            <div className="relative h-48 rounded-xl overflow-hidden bg-slate-900">
              <img 
                src={blog.image} 
                alt={blog.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-black/90 border border-slate-700 text-[10px] font-mono text-white font-bold uppercase shadow-sm shadow-black">
                {blog.category}
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-3 text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-white" /> {blog.date}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-white" /> {blog.readTime}
                </span>
              </div>

              <h3 className="text-lg font-bold font-mono text-white group-hover:text-slate-200 transition-colors line-clamp-2">
                {blog.title}
              </h3>

              <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                {blog.excerpt}
              </p>
            </div>

            <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img src={blog.authorAvatar} alt={blog.author} className="w-6 h-6 rounded-full object-cover border border-slate-700" />
                <span className="text-xs font-mono text-slate-400">{blog.author}</span>
              </div>

              <button
                onClick={() => {
                  soundEffects.playClick();
                  setActiveArticle(blog);
                }}
                className="flex items-center gap-1 text-xs font-mono font-bold text-white hover:text-slate-300"
              >
                Read Article <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <AnimatePresence>
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-2xl overflow-y-auto">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-3xl bg-slate-950 border border-slate-800 p-8 space-y-6 text-white my-auto custom-scrollbar shadow-2xl shadow-black"
            >
              <div className="flex justify-between items-start border-b border-slate-800 pb-4">
                <span className="px-3 py-1 rounded-full bg-black text-white border border-slate-700 font-mono text-xs font-bold uppercase">
                  {activeArticle.category}
                </span>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="p-2 rounded-xl bg-black border border-slate-700 text-white hover:bg-slate-900"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black font-mono text-white">{activeArticle.title}</h2>

              <div className="flex items-center gap-4 text-xs font-mono text-slate-400 border-b border-slate-800 pb-4">
                <span>By {activeArticle.author}</span>
                <span>•</span>
                <span>{activeArticle.date}</span>
                <span>•</span>
                <span>{activeArticle.readTime}</span>
              </div>

              <img src={activeArticle.image} alt={activeArticle.title} className="w-full h-64 object-cover rounded-2xl border border-slate-800" />

              <div className="text-slate-300 text-sm leading-relaxed space-y-4 whitespace-pre-line font-sans">
                {activeArticle.content}
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800">
                {activeArticle.tags.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded bg-black border border-slate-800 text-slate-300 text-xs font-mono">
                    #{t}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </AnimatePresence>
      )}

    </section>
  );
};
