import React, { useEffect, useRef, useState } from "react";
import { ANALYTICS } from "../mock";
import { TrendingUp, Timer, Eye } from "lucide-react";

const ICONS = { retention: TrendingUp, duration: Timer, organic: Eye };

function useInView(ref) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      ([e]) => e.isIntersecting && setInView(true),
      { threshold: 0.3 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [ref]);
  return inView;
}

export default function Analytics() {
  const ref = useRef(null);
  const inView = useInView(ref);

  return (
    <section id="analytics" ref={ref} className="relative bg-[#070707] py-28 md:py-36 border-y border-white/5">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-10 bg-[#C9161E]" />
              <span className="text-[11px] tracking-[0.4em] text-[#C9161E] uppercase">
                The Numbers
              </span>
            </div>
            <h2 className="font-serif-display text-5xl md:text-7xl leading-[0.95] text-white">
              Retention is the new <span className="text-[#F5B800]">reach.</span>
            </h2>
          </div>
          <p className="max-w-md text-white/60 text-sm md:text-base leading-relaxed">
            Scale without attention is noise. Our audiences don’t scroll — they
            stay. That’s what turns a watch into a memory, and a memory into a
            brand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-white/10">
          {ANALYTICS.map((a, i) => {
            const Icon = ICONS[a.id] || TrendingUp;
            return (
              <div
                key={a.id}
                className="group relative bg-[#0a0a0a] p-10 md:p-12 overflow-hidden transition-colors duration-300 hover:bg-[#0f0f0f]"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="h-11 w-11 border border-white/15 flex items-center justify-center text-[#F5B800] group-hover:border-[#F5B800] transition-colors">
                    <Icon size={18} />
                  </div>
                  <span className="text-[10px] tracking-[0.4em] text-white/30 uppercase">
                    0{i + 1}
                  </span>
                </div>
                <div
                  className={`font-serif-display text-[64px] md:text-[96px] leading-none text-white transition-all duration-700 ${
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  {a.value}
                </div>
                <div className="mt-4 text-[11px] tracking-[0.32em] uppercase text-[#C9161E]">
                  {a.label}
                </div>
                <p className="mt-6 text-white/60 text-sm leading-relaxed max-w-sm">
                  {a.detail}
                </p>
                <div className="absolute left-0 bottom-0 h-[2px] bg-[#F5B800] transition-all duration-500" style={{ width: inView ? "100%" : "0%", transitionDelay: `${i * 150 + 300}ms` }} />
              </div>
            );
          })}
        </div>

        <div className="hairline mt-20" />
      </div>
    </section>
  );
}
