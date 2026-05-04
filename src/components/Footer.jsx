import React from "react";
import { motion } from "framer-motion";
import { SOCIALS, STUDIO, ASSETS } from "../mock";
// import { Youtube, Instagram, Facebook, Mail, MapPin, ArrowUp, Globe } from "lucide-react";
import { FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa";
import { IoMailOutline, IoMapOutline, IoGlobeOutline,IoLocationOutline } from "react-icons/io5";
import { HiOutlineArrowUp } from "react-icons/hi2";

export default function Footer() {
  const year = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <footer id="contact" className="relative bg-[#050505] border-t border-white/5 pt-32 pb-12 overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#D32F2F]/[0.02] blur-[120px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        
        {/* Dynamic Big Wordmark */}
        <div className="relative mb-24">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 0.04, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="font-jagged text-[24vw] leading-none text-white select-none text-center"
          >
            KAHANI
          </motion.div>
          
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col items-center text-center"
            >
              <img src={ASSETS.logo} alt="Kahani Studio" className="h-20 w-20 object-contain mb-6 grayscale hover:grayscale-0 transition-all duration-700" />
              <div className="text-[#FFD700] font-type text-sm tracking-[0.6em] uppercase">Kahani Studio</div>
              <div className="text-white/30 font-type text-[10px] tracking-[0.4em] uppercase mt-2 italic">
                Cinematic Excellence Since {STUDIO.est}
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-10"
        >
          {/* Brand Vision */}
          <div className="md:col-span-5 space-y-8">
            <motion.h3 variants={itemVariants} className="font-display text-4xl md:text-6xl text-white leading-tight italic">
              LET THE STORY <br />
              <span className="text-[#D32F2F]">DO THE TALKING.</span>
            </motion.h3>
            
            <motion.div variants={itemVariants}>
              <a
                href={`mailto:${SOCIALS.email}`}
                className="group relative inline-block text-2xl md:text-3xl text-white font-type tracking-tight overflow-hidden"
              >
                <span className="relative z-10 group-hover:text-[#FFD700] transition-colors duration-500">{SOCIALS.email}</span>
                <div className="absolute bottom-0 left-0 w-full h-px bg-white/20 group-hover:bg-[#FFD700] transition-colors duration-500" />
              </a>
              
              <div className="mt-8 flex items-center gap-3 text-white/40 font-type text-[11px] tracking-widest uppercase">
                <IoLocationOutline size={14} className="text-[#D32F2F]" />
                {STUDIO.base}
              </div>
            </motion.div>
          </div>

          {/* Navigation links with hover animation */}
          <motion.div variants={itemVariants} className="md:col-span-3">
            <div className="font-type text-[10px] tracking-[0.5em] text-white/20 uppercase mb-8">
              Navigation
            </div>
            <ul className="space-y-4">
              {[
                { l: "Selected Work", h: "#work" },
                { l: "Studio Gallery", h: "#gallery" },
                { l: "Performance Metrics", h: "#analytics" },
                { l: "Partnership Deck", h: "#sponsor" },
              ].map((i) => (
                <li key={i.h}>
                  <a href={i.h} className="group flex items-center gap-3 text-white/60 hover:text-[#FFD700] transition-all duration-300">
                    <div className="h-px w-0 bg-[#FFD700] group-hover:w-4 transition-all" />
                    <span className="font-type text-xs uppercase tracking-widest">{i.l}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social connections */}
          <motion.div variants={itemVariants} className="md:col-span-4">
            <div className="font-type text-[10px] tracking-[0.5em] text-white/20 uppercase mb-8">
              Social Archives
            </div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "YouTube", icon: <FaYoutube size={14} />, link: SOCIALS.youtube, color: "#D32F2F" },
                { label: "Instagram", icon: <FaInstagram size={14} />, link: SOCIALS.instagram, color: "#FFD700" },
                { label: "Facebook", icon: <FaFacebookF size={14} />, link: SOCIALS.facebook, color: "#4267B2" },
                { label: "Email", icon: <IoMailOutline size={14} />, link: `mailto:${SOCIALS.email}`, color: "#ffffff" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-4 border border-white/5 bg-white/[0.02] text-white/50 hover:text-white hover:border-white/20 hover:bg-white/[0.05] transition-all duration-500"
                >
                  <span style={{ color: social.color }}>{social.icon}</span>
                  <span className="text-[9px] font-type tracking-[0.3em] uppercase">{social.label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Footer Bottom Bar */}
        <div className="mt-24 pt-10 border-t border-white/5 flex items-center justify-between flex-wrap gap-8">
          <div className="text-[9px] font-type tracking-[0.4em] uppercase text-white/20">
            © {year} KAHANI STUDIO <span className="mx-2">/</span> ALL RIGHTS RESERVED
          </div>
          
          <div className="flex items-center gap-10">
            <div className="hidden lg:flex items-center gap-4 text-[9px] font-type tracking-[0.4em] uppercase text-white/20">
              <IoGlobeOutline size={12} />
              <span>PROVOCATIVE · RETAINED · GLOBAL</span>
            </div>
            
            <a
              href="#top"
              className="group flex items-center gap-3 text-[9px] font-type tracking-[0.4em] uppercase text-white/40 hover:text-[#FFD700] transition-colors"
            >
              UP TO TOP
              <div className="p-2 border border-white/10 group-hover:border-[#FFD700] transition-colors">
                <HiOutlineArrowUp size={12} className="group-hover:-translate-y-1 transition-transform duration-300" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}