import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Upload, X } from "lucide-react";
import { careers, careerDepartments } from "../mock";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";

export default function Careers() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);

  const filtered = useMemo(
    () =>
      filter === "All"
        ? careers
        : careers.filter((c) => c.department === filter),
    [filter]
  );

  return (
    <section id="careers" className="relative border-t border-white/5 bg-[#050505]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-12 gap-8 mb-12 md:mb-16">
          <div className="col-span-12 md:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-[#D32F2F]" />
              <span className="text-[11px] tracking-[0.4em] text-[#D32F2F] uppercase">Careers</span>
            </div>
            <h2 className="font-serif-display text-5xl md:text-7xl leading-[0.92] text-white max-w-[16ch]">
              WE COLLABORATE WITH <span className="text-[#D32F2F]">VISIONARIES.</span>
            </h2>
          </div>
          <p className="col-span-12 md:col-span-5 self-end text-white/70 leading-relaxed max-w-md italic">
            We hire for taste. Bring craft, curiosity, and the patience to
            polish a frame for the tenth time.
          </p>
        </div>

        {/* Filter chips */}
        <div className="flex flex-wrap gap-2 mb-8">
          {careerDepartments.map((d) => (
            <button
              key={d}
              onClick={() => setFilter(d)}
              className={`px-4 py-2 text-[10px] uppercase tracking-[0.28em] border transition-all ${filter === d
                  ? "bg-[#FFD700] text-black border-[#FFD700]"
                  : "text-white/65 border-white/10 hover:border-[#FFD700]/60 hover:text-[#FFD700]"
                }`}
            >
              {d}
            </button>
          ))}
        </div>

        {/* Roles list */}
        {/* Roles list */}
        <div className="border-t border-white/10">
          <AnimatePresence mode="popLayout">
            {filtered.map((c, index) => (
              <motion.button
                key={c.id}
                layout
                // Staggered entrance animation
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: index * 0.05 }
                }}
                exit={{ opacity: 0, scale: 0.95 }}
                whileHover={{ scale: 1.005, x: 10 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => setActive(c)}
                className="w-full text-left group relative border-b border-white/5 py-10 px-4 hover:bg-white/[0.03] transition-all duration-300 ease-out"
              >
                {/* Animated accent border on the left */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#FFD700] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center" />

                <div className="grid grid-cols-12 gap-6 items-center">
                  {/* Main Role Info */}
                  <div className="col-span-12 md:col-span-5">
                    <div className="font-serif-display text-3xl md:text-5xl text-white group-hover:text-[#FFD700] transition-colors duration-300 leading-none">
                      {c.role}
                    </div>
                    <div className="text-[11px] uppercase tracking-[0.3em] text-white/40 mt-3 group-hover:text-white/70 transition-colors">
                      {c.department}
                    </div>
                  </div>

                  {/* Metadata - hidden/stacked on tiny screens, organized on md+ */}
                  <div className="col-span-6 md:col-span-2 text-[10px] md:text-[11px] uppercase tracking-[0.24em] text-white/50 group-hover:text-white/80 transition-colors">
                    <span className="block text-white/20 mb-1 md:hidden">Type</span>
                    {c.type}
                  </div>

                  <div className="col-span-6 md:col-span-3 text-[10px] md:text-[11px] uppercase tracking-[0.24em] text-white/50 group-hover:text-white/80 transition-colors">
                    <span className="block text-white/20 mb-1 md:hidden">Location</span>
                    {c.location}
                  </div>

                  {/* Action Call */}
                  <div className="col-span-12 md:col-span-2 flex md:justify-end mt-4 md:mt-0">
                    <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-[#FFD700] transition-all duration-300">
                      Apply
                      <motion.span
                        variants={{
                          initial: { x: 0 },
                          hover: { x: 5 }
                        }}
                        initial="initial"
                        whileHover="hover"
                        className="transition-transform group-hover:translate-x-2"
                      >
                        <ArrowRight size={18} strokeWidth={1.5} />
                      </motion.span>
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <Sheet open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <SheetContent
          side="right"
          className="bg-[#0a0a0a] border-l border-white/10 text-white w-full sm:max-w-md p-0 overflow-y-auto"
        >
          <SheetHeader className="px-6 pt-10 pb-6 border-b border-white/5">
            <SheetTitle className="font-serif-display text-4xl text-white">
              {active?.role}
            </SheetTitle>
            <div className="text-[10px] uppercase tracking-[0.28em] text-[#FFD700] mt-1">
              {active?.department} • {active?.type}
            </div>
          </SheetHeader>
          {active && <ApplicationForm role={active} onDone={() => setActive(null)} />}
        </SheetContent>
      </Sheet>
    </section>
  );
}

function ApplicationForm({ role, onDone }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    portfolio: "",
    message: "",
    resumeName: "",
    resumeData: "", // For base64 string
  });
  const [submitting, setSubmitting] = useState(false);

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const onFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // EmailJS Free limit is roughly 50KB for base64 strings
    if (file.size > 100000) {
      toast.error("File too large. Please use a URL instead.");
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      update("resumeName", file.name);
      update("resumeData", reader.result);
    };
    reader.readAsDataURL(file);
  };

  const submit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    const templateParams = {
      name: form.name,
      email: form.email,
      role: role.role,
      department: role.department,
      portfolio: form.portfolio,
      message: form.message,
      resume: form.resumeData || "No file attached",
      title: `${role.role} - ${form.name}`
    };

    try {
      await emailjs.send(
        "service_dc5d6sa",
        "template_ay3caat",
        templateParams,
        "nrcKo0UqyL_z483jQ"
      );
      toast.success("Application sent successfully.");
      onDone();
    } catch (err) {
      console.error(err);
      toast.error("Failed to submit application.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={submit} className="px-6 py-8 space-y-6">
      <Field label="Full Name">
        <input
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          className="input-cinema"
          placeholder="Your name"
          required
        />
      </Field>
      <Field label="Email Address">
        <input
          type="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          className="input-cinema"
          placeholder="you@email.com"
          required
        />
      </Field>
      <Field label="Portfolio / Work Link">
        <input
          value={form.portfolio}
          onChange={(e) => update("portfolio", e.target.value)}
          className="input-cinema"
          placeholder="https://"
        />
      </Field>
      <Field label="Message">
        <textarea
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          rows={4}
          className="input-cinema resize-none"
          placeholder="Tell us about your craft."
        />
      </Field>
      <Field label="Resume (PDF < 100KB)">
        <label className="flex items-center gap-3 px-4 py-3 border border-white/10 hover:border-[#FFD700]/50 cursor-pointer text-sm text-white/50 transition-all">
          <Upload size={14} className="text-[#FFD700]" />
          <span className="truncate">{form.resumeName || "Upload File"}</span>
          <input type="file" accept=".pdf" onChange={onFile} className="hidden" />
        </label>
      </Field>

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-[#D32F2F] hover:bg-[#b02626] text-white text-[11px] uppercase tracking-[0.3em] py-4 transition-all disabled:opacity-40"
      >
        {submitting ? "Sending..." : "Submit Application"}
      </button>

      <style>{`
        .input-cinema {
          width: 100%;
          background: transparent;
          border: 1px solid rgba(255,255,255,0.08);
          color: white;
          padding: 12px;
          font-size: 14px;
          outline: none;
          transition: border-color 0.3s ease;
        }
        .input-cinema:focus { border-color: #FFD700; }
        .input-cinema::placeholder { color: rgba(255,255,255,0.2); }
      `}</style>
    </form>
  );
}

function Field({ label, children }) {
  return (
    <div className="space-y-2">
      <span className="block text-[10px] uppercase tracking-[0.3em] text-white/40">
        {label}
      </span>
      {children}
    </div>
  );
}