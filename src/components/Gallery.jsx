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
  
  // Use a simple state to check if we are on mobile (less than 768px)
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const rawY = useTransform(
    scrollYProgress,
    [0, 1],
    i % 2 === 0 ? [30, -30] : [-20, 20]
  );
  const smoothY = useSpring(rawY, { stiffness: 100, damping: 25 });

  return (
    <motion.figure
      style={{ y: smoothY }}
      initial="initial"
      // CONDITION: If mobile, trigger on scroll (InView). If desktop, trigger on Hover.
      whileInView={isMobile ? "active" : "initial"}
      whileHover={!isMobile ? "active" : undefined}
      viewport={{ once: false, amount: 0.6 }} 
      className="group relative break-inside-avoid overflow-hidden bg-[#0a0a0a] rounded-sm mb-5 cursor-pointer"
    >
      {/* 1. The Image */}
      <motion.img
        src={src}
        alt={g.title}
        variants={{
          initial: { scale: 1, filter: "brightness(1)", opacity: 1 },
          active: { scale: 1.05, filter: "brightness(0.8)", opacity: 1 }
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full h-auto block"
      />

      {/* 2. Cinematic Gradient Overlay */}
      <motion.div 
        variants={{
          initial: { opacity: 0 },
          active: { opacity: 0.7 }
        }}
        className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent pointer-events-none" 
      />

      {/* 3. Typography */}
      <figcaption className="absolute inset-0 flex flex-col items-center justify-center px-6 pointer-events-none">
        <motion.span
          variants={{
            initial: { opacity: 0, y: 15 },
            active: { opacity: 1, y: 0 }
          }}
          className="text-[10px] tracking-[0.5em] text-[#F5B800] uppercase mb-3"
        >
          {g.film}
        </motion.span>
        
        <motion.span
          variants={{
            initial: { opacity: 0, scale: 0.9 },
            active: { opacity: 1, scale: 1 }
          }}
          className="font-glitch text-3xl md:text-5xl text-white text-center uppercase"
          style={{ textShadow: "0 0 20px rgba(201, 22, 30, 0.6)" }}
        >
          {g.title}
        </motion.span>
      </figcaption>

      {/* 4. Index Marker */}
      <div className="absolute top-4 left-4 overflow-hidden">
        <span className="block text-[9px] tracking-[0.35em] text-white/40 uppercase">
          — {String(i + 1).padStart(2, "0")}
        </span>
      </div>
    </motion.figure>
  );
}