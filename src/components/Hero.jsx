import React from "react";
import { HERO, STUDIO, ASSETS } from "../mock";
import { Play, ArrowDownRight,ArrowRight } from "lucide-react";

export default function Hero() {
  // const videoSrc = `https://www.youtube.com/embed/${HERO.videoId}?autoplay=1&mute=1&loop=1&playlist=${HERO.videoId}&controls=0&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3&playsinline=1`;

  return (
    <section id="top" className="relative min-h-[100vh] w-full overflow-hidden grain vignette">
      {/* Background video */}
      <div className="absolute inset-0 -z-0">
        <div className="absolute inset-0 w-full h-full">
          <video
  autoPlay
  muted 
  loop
  playsInline
  // 'so_0' generates a high-quality poster from the first frame automatically
  poster="https://res.cloudinary.com/ddptxvwrj/video/upload/so_0/v1777883965/KS_Clips_krfhrk.jpg"
  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
             w-[177.77vh] h-[56.25vw] min-w-full min-h-full object-cover"
>
  {/* WebM is much lighter - Cloudinary converts this on the fly with 'f_webm' */}
  <source 
    src="https://res.cloudinary.com/ddptxvwrj/video/upload/f_webm,q_auto,vc_vp9/v1777883965/KS_Clips_krfhrk.webm" 
    type="video/webm" 
  />
  {/* MP4 Fallback with auto-compression */}
  <source 
    src="https://res.cloudinary.com/ddptxvwrj/video/upload/q_auto,vc_h264/v1777883965/KS_Clips_krfhrk.mp4" 
    type="video/mp4" 
  />
  Your browser does not support the video tag.
</video>
        </div>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 pt-36 md:pt-44 pb-20 min-h-[100vh] flex flex-col justify-center">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-px w-10 bg-[#F5B800]" />
          <span className="text-[11px] tracking-[0.4em] text-[#F5B800] uppercase">
            {STUDIO.est} · {STUDIO.base}
          </span>
        </div>

        <h1 className="font-serif-display text-[13vw] md:text-[8.5vw] leading-[0.88] text-white max-w-[14ch]">
          <span className="block text-[#F5B800] halo-yellow">Kahani</span>
          <span className="block italic ">Studio.</span>
        </h1>

        <div className="mt-10 max-w-3xl">
          <p className="text-white text-xl md:text-3xl font-light tracking-wide leading-snug">
            {HERO.headline.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="text-[#F5B800] font-serif-display">
              {HERO.headline.split(" ").slice(-1)}
            </span>
          </p>
          <p className="mt-5 text-white/65 text-sm md:text-base tracking-[0.18em] uppercase">
            {HERO.sub}
          </p>
        </div>

        {/* Locating the button div in your Hero.jsx */}
        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href="#work"
            className="group inline-flex items-center gap-3 px-7 py-4 bg-[#F5B800] text-black text-[11px] tracking-[0.32em] uppercase font-semibold btn-press hover:bg-white"
          >
            <Play size={16} className="fill-black" />
            Watch The Work
          </a>

          {/* ADD THIS BUTTON */}
          <a
            href="#careers"
            className="inline-flex items-center gap-3 px-7 py-4 border border-white/40 text-white text-[11px] tracking-[0.32em] uppercase btn-press hover:border-[#F5B800] hover:text-[#F5B800]"
          >
            Join the Team
            <ArrowRight size={16} /> {/* Make sure to import ArrowRight from lucide-react */}
          </a>

          <a
            href="#sponsor"
            className="inline-flex items-center gap-3 px-7 py-4 border border-white/40 text-white text-[11px] tracking-[0.32em] uppercase btn-press hover:border-[#C9161E] hover:text-[#C9161E]"
          >
            Invest in Cinema
            <ArrowDownRight size={16} />
          </a>
        </div>

        {/* bottom marquee */}
        <div className="absolute left-0 right-0 bottom-0 overflow-hidden border-t border-white/10 bg-black/50 backdrop-blur-sm">
          <div className="flex whitespace-nowrap marquee-track py-3">
            {Array(2).fill(0).map((_, k) => (
              <div key={k} className="flex items-center gap-10 px-10 text-[11px] tracking-[0.4em] uppercase text-white/55">
                <span>Retention 60%+</span>
                <span className="text-[#C9161E]">•</span>
                <span>Avg. View 8–9 min</span>
                <span className="text-[#F5B800]">•</span>
                <span>20K+ Organic</span>
                <span className="text-[#C9161E]">•</span>
                <span>MAA · The Unsolved Mystery</span>
                <span className="text-[#F5B800]">•</span>
                <span>Roop — In Production 2026</span>
                <span className="text-[#C9161E]">•</span>
                <span>Bhawanipatna · Odisha</span>
                <span className="text-[#F5B800]">•</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* logo watermark */}
      <img
        src={ASSETS.logo}
        alt=""
        className="pointer-events-none hidden md:block absolute top-28 right-10 h-24 opacity-25 z-10"
      />
    </section>
  );
}
