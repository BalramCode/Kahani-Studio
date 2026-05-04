import React, { useState } from "react";
import { SOCIALS, STUDIO, ASSETS } from "../mock";
import { IoMailOutline, IoCloseOutline, IoCallOutline } from "react-icons/io5";
import { FiArrowUpRight, FiSend } from "react-icons/fi";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

export default function Sponsorship() {
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Request Received", {
      description: "Our partnership lead will contact you shortly.",
    });
    setIsOpen(false);
  };

  return (
    <>
      <section id="sponsor" className="relative bg-[#050505] overflow-hidden">
        {/* Poster parallax background */}
        <div className="absolute inset-0 opacity-25">
          <img
            src={ASSETS.posters.redEye}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/80 to-black/60" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 py-28 md:py-40 grain">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-7">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="h-px w-10 bg-[#F5B800]" />
                <span className="text-[11px] tracking-[0.4em] text-[#F5B800] uppercase">
                  The Revenue Engine
                </span>
              </motion.div>
              
              <h2 className="font-serif-display text-[52px] md:text-[96px] leading-[0.9] text-white">
                Invest in <span className="italic text-[#C9161E]">cinematic</span>
                <br />
                <span className="text-[#F5B800]">influence.</span>
              </h2>
              
              <p className="mt-10 text-white/70 text-base md:text-lg max-w-2xl leading-relaxed">
                We offer brands more than a logo placement; we offer a seat at the
                table of culture-defining storytelling. Leverage our high-retention
                audience (<span className="text-[#F5B800]">8–9 mins average</span>)
                for native brand integration that feels like art — not an ad.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button
                  onClick={() => setIsOpen(true)}
                  className="group inline-flex items-center gap-3 px-8 py-5 bg-[#F5B800] text-black text-[11px] tracking-[0.32em] uppercase font-semibold btn-press hover:bg-white transition-all duration-500"
                >
                  <IoMailOutline size={16} />
                  Request Sponsorship Deck
                  <FiArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
                <a
                  href={`tel:+918260647549`}
                  className="inline-flex items-center gap-3 px-8 py-5 border border-white/30 text-white text-[11px] tracking-[0.32em] uppercase btn-press hover:border-[#C9161E] hover:text-[#C9161E] transition-all"
                >
                  <IoCallOutline size={16} />
                  Call Studio
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border border-white/15 bg-black/60 backdrop-blur-sm p-8 md:p-10 relative grain"
              >
                <div className="text-[10px] tracking-[0.4em] uppercase text-[#C9161E] mb-6">
                  Integration Tiers
                </div>
                {[
                  { t: "Native Story", d: "Brand woven into narrative beats, props, and location design.", a: "Tier I" },
                  { t: "Title Sponsor", d: "Opening & closing brand stingers + exclusive category lock.", a: "Tier II" },
                  { t: "Production Partner", d: "Co-presented credit, behind-the-scenes access, regional premiere.", a: "Tier III" },
                ].map((row, i) => (
                  <div key={i} className="py-5 border-t border-white/10 first:border-t-0 flex items-start justify-between gap-6 hover:bg-white/[0.02] transition-colors px-2 -mx-2">
                    <div>
                      <div className="text-white font-semibold tracking-wide">{row.t}</div>
                      <div className="text-white/55 text-sm mt-1 max-w-xs leading-relaxed">{row.d}</div>
                    </div>
                    <div className="text-[10px] tracking-[0.4em] text-[#F5B800] uppercase pt-1">{row.a}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* --- RIGHT SIDE SLIDE-OVER FORM --- */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm"
            />

            {/* Side Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 z-[101] h-screen w-full max-w-lg bg-[#0A0A0A] border-l border-white/10 p-8 md:p-12 shadow-2xl overflow-y-auto"
            >
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-8 right-8 text-white/40 hover:text-[#C9161E] hover:rotate-90 transition-all duration-300"
              >
                <IoCloseOutline size={32} />
              </button>

              <div className="mt-12 mb-10">
                <span className="text-[10px] tracking-[0.5em] text-[#F5B800] uppercase">Strategic Partnership</span>
                <h3 className="text-4xl font-serif-display text-white mt-4 italic">Let's tell a story.</h3>
                <p className="text-white/40 text-sm mt-4 uppercase tracking-widest">Direct Line: <a href="tel:8260647549" className="text-white hover:text-[#F5B800]">+91 82606 47549</a></p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-6">
                  {/* Brand & Industry */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 group-focus-within:text-[#F5B800] transition-colors">Brand Name</label>
                      <input required type="text" className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-[#F5B800] transition-all" />
                    </div>
                    <div className="group space-y-2">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 group-focus-within:text-[#F5B800] transition-colors">Industry</label>
                      <input required type="text" className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-[#F5B800] transition-all" placeholder="Tech, Fashion, etc." />
                    </div>
                  </div>

                  {/* Objective */}
                  <div className="group space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 group-focus-within:text-[#F5B800] transition-colors">Partnership Objective</label>
                    <select className="w-full bg-transparent border-b border-white/20 py-2 text-white focus:outline-none focus:border-[#F5B800] transition-all appearance-none cursor-pointer">
                      <option className="bg-black">Product Integration</option>
                      <option className="bg-black">Brand Film Co-production</option>
                      <option className="bg-black">Social Media Campaign</option>
                      <option className="bg-black">Event Sponsorship</option>
                    </select>
                  </div>

                  {/* Budget Tier */}
                  <div className="group space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 group-focus-within:text-[#F5B800] transition-colors">Estimated Budget</label>
                    <div className="flex gap-4 pt-2">
                      {["Mid", "High", "Elite"].map((tier) => (
                        <label key={tier} className="flex-1">
                          <input type="radio" name="budget" className="hidden peer" />
                          <div className="text-center py-2 border border-white/10 text-[10px] uppercase tracking-tighter text-white/40 peer-checked:border-[#F5B800] peer-checked:text-[#F5B800] peer-checked:bg-[#F5B800]/5 cursor-pointer transition-all hover:border-white/40">
                            {tier}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="group space-y-2">
                    <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 group-focus-within:text-[#F5B800] transition-colors">Vision for Collaboration</label>
                    <textarea rows={4} className="w-full bg-white/[0.03] border border-white/10 p-4 text-white focus:outline-none focus:border-[#F5B800] transition-all resize-none" placeholder="Share your creative thoughts..." />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-5 bg-white text-black text-[11px] tracking-[0.4em] uppercase font-bold hover:bg-[#C9161E] hover:text-white transition-all duration-500 flex items-center justify-center gap-3 group"
                >
                  Send Proposal
                  <FiSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>

              {/* Call Support Footer */}
              <div className="mt-12 pt-8 border-t border-white/5 text-center">
                <p className="text-[10px] tracking-widest text-white/30 uppercase">Immediate Inquiry?</p>
                <a href="tel:8260647549" className="inline-flex items-center gap-2 mt-2 text-white hover:text-[#F5B800] transition-colors group">
                  <IoCallOutline className="group-hover:animate-bounce" />
                  <span className="text-lg font-light tracking-tighter">+91 82606 47549</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}