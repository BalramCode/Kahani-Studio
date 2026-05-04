import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FILMS, ASSETS } from "../mock";
import { Play, Film, Clapperboard, X } from "lucide-react";

export default function Work() {
  const [active, setActive] = useState(null);

  const open = (url) => setActive(url);
  const close = () => setActive(null);

  const getEmbed = (url) => {
    try {
      const id = url.split("/").pop().split("?")[0];
      return `https://www.youtube.com/embed/${id}?autoplay=1&rel=0`;
    } catch {
      return url;
    }
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="work" className="relative bg-[#050505] py-28 md:py-48 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-5"
        >
          <div className="h-px w-10 bg-[#F5B800]" />
          <span className="text-[11px] tracking-[0.5em] text-[#F5B800] uppercase font-bold">
            Filmography
          </span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="font-serif-display text-5xl md:text-8xl leading-[0.9] text-white max-w-4xl tracking-tighter"
        >
          Stories that <span className="italic text-[#C9161E]">refuse</span> to be scrolled past.
        </motion.h2>

        <div className="mt-32 space-y-40">
          {FILMS.map((f, idx) => {
            const poster = ASSETS.posters[f.poster];
            const reverse = idx % 2 === 1;

            return (
              <motion.article
                key={f.id}
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center"
              >
                {/* Visual Side (Poster) */}
                <motion.div
                  variants={itemVariants}
                  className={`lg:col-span-6 relative ${reverse ? "lg:order-2" : ""}`}
                >
                  <div className="relative group overflow-hidden bg-zinc-900 aspect-[4/5] grain shadow-2xl">
                    <img
                      src={poster}
                      alt={f.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ease-out group-hover:scale-110"
                    />
                    
                    {/* Cinematic Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-700" />
                    
                    <div className="absolute top-6 left-6 flex items-center gap-3 z-10">
                      <span className="px-4 py-1 text-[9px] tracking-[0.3em] uppercase bg-black/60 backdrop-blur-md border border-white/10 text-white">
                        {f.status}
                      </span>
                      <span className="px-4 py-1 text-[9px] tracking-[0.3em] uppercase bg-[#F5B800] text-black font-bold">
                        {f.year}
                      </span>
                    </div>

                    {/* Interactive Play Trigger */}
                    <button
                      onClick={() => open(f.links[0].url)}
                      className="absolute inset-0 flex items-center justify-center z-20 group"
                      aria-label={`Play ${f.title}`}
                    >
                      <div className="relative">
                        {/* Pulse Effect */}
                        <div className="absolute inset-0 rounded-full bg-white/20 scale-100 group-hover:scale-150 group-hover:opacity-0 transition-all duration-700" />
                        <div className="h-24 w-24 rounded-full border border-white/40 group-hover:border-[#F5B800] group-hover:scale-105 transition-all duration-500 bg-black/40 backdrop-blur-xl flex items-center justify-center">
                          <Play
                            size={32}
                            className="fill-white text-white group-hover:fill-[#F5B800] group-hover:text-[#F5B800] transition-colors translate-x-1"
                          />
                        </div>
                      </div>
                    </button>
                  </div>
                </motion.div>

                {/* Content Side */}
                <div className={`lg:col-span-6 ${reverse ? "lg:order-1" : ""}`}>
                  <motion.div variants={itemVariants} className="flex items-center gap-4 mb-6">
                    <span className="h-[1px] w-8 bg-current opacity-30" style={{ color: f.accent }} />
                    <div className="text-[11px] tracking-[0.5em] uppercase font-bold" style={{ color: f.accent }}>
                      {f.runtime} · Feature Short
                    </div>
                  </motion.div>

                  <motion.h3 
                    variants={itemVariants}
                    className="font-serif-display text-[12vw] md:text-[7vw] lg:text-[6vw] leading-[0.85] text-white tracking-tighter"
                  >
                    {f.title}
                  </motion.h3>

                  <motion.p 
                    variants={itemVariants}
                    className="mt-6 text-xl md:text-2xl font-serif-display text-white/60 italic font-light"
                  >
                    {f.subtitle}
                  </motion.p>

                  <motion.p 
                    variants={itemVariants}
                    className="mt-8 text-white/50 text-base md:text-lg leading-relaxed max-w-xl font-light"
                  >
                    {f.description}
                  </motion.p>

                  <motion.blockquote 
                    variants={itemVariants}
                    className="mt-8 pl-6 border-l-[3px] text-white/90 italic text-lg leading-relaxed max-w-xl py-2" 
                    style={{ borderColor: f.accent }}
                  >
                    “{f.tagline}”
                  </motion.blockquote>

                  <motion.div variants={itemVariants} className="mt-12 flex flex-wrap gap-4">
                    {f.links.map((lk) => (
                      <button
                        key={lk.label}
                        onClick={() => open(lk.url)}
                        className="relative overflow-hidden group px-8 py-4 border border-white/10 text-white text-[10px] tracking-[0.3em] uppercase transition-all duration-500 hover:border-[#F5B800]"
                      >
                        {/* Hover Fill Animation */}
                        <div className="absolute inset-0 bg-[#F5B800] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                        
                        <div className="relative z-10 flex items-center gap-3 group-hover:text-black transition-colors duration-500 font-bold">
                          {lk.type === "film" ? <Film size={14} /> : <Clapperboard size={14} />}
                          {lk.label}
                        </div>
                      </button>
                    ))}
                  </motion.div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Cinematic Modal Overlay */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-2xl flex items-center justify-center p-4"
          >
            <button
              onClick={close}
              className="absolute top-8 right-8 text-white/50 hover:text-[#F5B800] transition-colors z-[110]"
            >
              <X size={40} strokeWidth={1} />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-6xl aspect-video bg-black shadow-[0_0_100px_rgba(0,0,0,1)] relative"
            >
              <iframe
                src={getEmbed(active)}
                title="Cinematic Player"
                className="w-full h-full"
                frameBorder="0"
                allow="autoplay; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}