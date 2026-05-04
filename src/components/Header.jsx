import React, { useEffect, useState } from "react";
// import { Menu, X, Youtube, Instagram, Mail } from "lucide-react";
// import { FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa";
import { IoMenuOutline, IoCloseOutline, IoMailOutline } from "react-icons/io5";
import { FaYoutube, FaInstagram, FaFacebookF, FaMapPin, FaBars } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

import { ASSETS, SOCIALS } from "../mock";

const NAV = [
  { label: "Work", href: "#work" },
  { label: "Gallery", href: "#gallery" },
  { label: "Analytics", href: "#analytics" },
  { label: "Careers", href: "#careers" },
  { label: "Sponsor", href: "#sponsor" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background,backdrop-filter,border-color] duration-300 ${scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent border-b border-transparent"
        }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <img
            src={ASSETS.logo}
            alt="Kahani Studio"
            className="h-11 w-11 object-contain"
          />
          <div className="hidden sm:flex flex-col leading-none">
            <span className="text-[11px] tracking-[0.3em] text-[#F5B800] font-medium">
              KAHANI
            </span>
            <span className="text-[11px] tracking-[0.3em] text-white/70">
              STUDIO
            </span>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-10">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-[12px] tracking-[0.28em] uppercase text-white/75 hover:text-[#F5B800] transition-colors duration-200"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center gap-1">
            <a href={SOCIALS.youtube} target="_blank" rel="noreferrer" className="p-2 text-white/70 hover:text-[#C9161E] transition-colors">
              <FaYoutube size={18} />
            </a>
            <a href={SOCIALS.instagram} target="_blank" rel="noreferrer" className="p-2 text-white/70 hover:text-[#F5B800] transition-colors">
              <FaInstagram size={18} />
            </a>
            <a href={`mailto:${SOCIALS.email}`} className="p-2 text-white/70 hover:text-white transition-colors">
              <IoMailOutline size={18} />
            </a>
          </div>

          <a
            href="#sponsor"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 border border-[#F5B800] text-[#F5B800] text-[11px] tracking-[0.28em] uppercase hover:bg-[#F5B800] hover:text-black btn-press"
          >
            Sponsor Deck
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 text-white"
            aria-label="Menu"
          >
            {open ? <IoCloseOutline size={24} /> : <FaBars size={22} />}

          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-black/95 border-t border-white/10">
          <div className="px-6 py-6 flex flex-col gap-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-sm tracking-[0.28em] uppercase text-white/80 hover:text-[#F5B800]"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#sponsor"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-fit px-5 py-2.5 border border-[#F5B800] text-[#F5B800] text-[11px] tracking-[0.28em] uppercase"
            >
              Sponsor Deck
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
