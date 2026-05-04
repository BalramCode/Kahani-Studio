import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { GALLERY, ASSETS } from "../mock";

export default function Gallery() {
  const containerRef = useRef(null);

  // Framer Motion scroll tracking (more performant than window listeners)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parent variants for staggered entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <section
      id="gallery"
      ref={containerRef}
      className="relative bg-[#070707] py-28 md:py-36 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-end justify-between flex-wrap gap-6 mb-14"
        >
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-[#C9161E]" />
              <span className="text-[11px] tracking-[0.4em] text-[#C9161E] uppercase">
                Poster Archive
              </span>
            </div>
            <h2 className="font-serif-display text-5xl md:text-7xl leading-[0.95] text-white">
              The <span className="italic text-[#F5B800]">visual</span> language.
            </h2>
          </div>
          <p className="max-w-md text-white/60 text-sm leading-relaxed">
            Every frame is authored. Every poster is a promise — of tone, tension,
            and texture the full film is built to keep.
          </p>
        </motion.div>

        {/* Masonry grid with staggered reveal */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="columns-1 sm:columns-2 lg:columns-3 gap-5 space-y-5"
        >
          {GALLERY.map((g, i) => (
            <GalleryItem
              key={g.id}
              g={g}
              i={i}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function GalleryItem({ g, i, scrollYProgress }) {
  const src = ASSETS.posters[g.img];

  // Dynamic Parallax logic with Spring physics for smoothness
  const rawY = useTransform(
    scrollYProgress,
    [0, 1],
    i % 2 === 0 ? [40, -40] : [-30, 30]
  );
  const smoothY = useSpring(rawY, { stiffness: 100, damping: 20 });

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  return (
    <motion.figure
      variants={itemVariants}
      style={{ y: smoothY }}
      whileHover="hover"
      className="group relative break-inside-avoid overflow-hidden bg-black cursor-pointer grain rounded-sm"
    >
      {/* Image with sophisticated zoom */}
      <motion.img
        src={src}
        alt={g.title}
        loading="lazy"
        variants={{
          hover: { scale: 1.05, filter: "brightness(0.7)" },
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full h-auto block"
      />

      {/* Modern Gradient & Glass Overlay */}
      <motion.div 
        variants={{
          hover: { opacity: 1 }
        }}
        initial={{ opacity: 0 }}
        className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent pointer-events-none" 
        style={{ backdropFilter: "blur(0px)" }}
      />

      {/* Hover typography: Glitch & Slide up */}
      <figcaption className="absolute inset-0 flex flex-col items-center justify-center px-6 pointer-events-none">
        <motion.span
          variants={{
            hover: { opacity: 1, y: 0 },
          }}
          initial={{ opacity: 0, y: 10 }}
          transition={{ delay: 0.1 }}
          className="text-[10px] tracking-[0.5em] text-[#F5B800] uppercase mb-3"
        >
          {g.film}
        </motion.span>
        
        <motion.span
          variants={{
            hover: { opacity: 1, scale: 1 },
          }}
          initial={{ opacity: 0, scale: 0.9 }}
          className="font-glitch text-3xl md:text-5xl text-white text-center"
          style={{ textShadow: "0 0 15px rgba(201, 22, 30, 0.6)" }}
        >
          {g.title}
        </motion.span>
      </figcaption>

      {/* Corner UI Marker */}
      <div className="absolute top-3 left-3 overflow-hidden">
        <motion.span 
          initial={{ x: -20, opacity: 0 }}
          whileInView={{ x: 0, opacity: 0.5 }}
          className="block text-[10px] tracking-[0.35em] text-white uppercase"
        >
          — {String(i + 1).padStart(2, "0")}
        </motion.span>
      </div>

      {/* Interactive Border */}
      <motion.div 
        variants={{
          hover: { opacity: 1 }
        }}
        initial={{ opacity: 0 }}
        className="absolute inset-0 border border-white/10"
      />
    </motion.figure>
  );
}