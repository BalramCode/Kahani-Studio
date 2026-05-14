import React, { useEffect, useState } from "react";
import { IoCloseOutline, IoMailOutline } from "react-icons/io5";
import { FaYoutube, FaInstagram, FaBars } from "react-icons/fa";
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
  const [activeSection, setActiveSection] = useState("");

  // Handle background transition on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Handle Active Section Detection (Intersection Observer)
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px", // Triggers when section is in view
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    NAV.forEach((item) => {
      const sectionId = item.href.replace("#", "");
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-[background,backdrop-filter,border-color] duration-300 ${scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent border-b border-transparent"
        }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        {/* LOGO */}
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

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden lg:flex items-center gap-10">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`text-[12px] tracking-[0.28em] uppercase transition-all duration-300 relative py-1 ${activeSection === n.href
                  ? "text-[#F5B800]"
                  : "text-white/75 hover:text-[#F5B800]"
                }`}
            >
              {n.label}
              {/* This span creates an animated line under the active link */}
              <span
                className={`absolute -bottom-1 left-0 h-[2px] bg-[#F5B800] transition-all duration-300 origin-center ${activeSection === n.href
                    ? "w-full scale-x-100 opacity-100"
                    : "w-full scale-x-0 opacity-0"
                  }`}
              />
            </a>
          ))}
        </nav>

        {/* RIGHT SIDE: SOCIALS + BUTTON */}
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
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 border border-[#F5B800] text-[#F5B800] text-[11px] tracking-[0.28em] uppercase hover:bg-[#F5B800] hover:text-black transition-all duration-200"
          >
            Sponsor Deck
          </a>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 text-white"
            aria-label="Menu"
          >
            {open ? <IoCloseOutline size={24} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DRAWER */}
      {open && (
        <div className="lg:hidden bg-black/95 border-t border-white/10">
          <div className="px-6 py-6 flex flex-col gap-4">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className={`text-sm tracking-[0.28em] uppercase transition-colors ${activeSection === n.href ? "text-[#F5B800]" : "text-white/80 hover:text-[#F5B800]"
                  }`}
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