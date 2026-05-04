import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Upload, X } from "lucide-react";
import { careers, careerDepartments } from "../mock";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { toast } from "sonner";

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
    <section
      id="careers"
      className="relative border-t border-white/8 bg-[#050505]"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="grid grid-cols-12 gap-8 mb-12 md:mb-16">
          <div className="col-span-12 md:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-10 bg-[#D32F2F]" />
              <span className="eyebrow">Careers</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl leading-[0.92] text-white max-w-[16ch]">
              WE COLLABORATE WITH{" "}
              <span className="text-[#D32F2F]">VISIONARIES.</span>
            </h2>
          </div>
          <p className="col-span-12 md:col-span-5 self-end font-body text-white/70 leading-relaxed max-w-md">
            We hire for taste. Bring craft, curiosity, and the patience to
            polish a frame for the tenth time. The studio is small, the
            ambitions are not.
          </p>
        </div>

        {/* Filter chips */}
        <div className="flex flex-wrap gap-2 mb-8">
          {careerDepartments.map((d) => (
            <button
              key={d}
              onClick={() => setFilter(d)}
              className={`px-4 py-2 font-type text-[10px] uppercase tracking-[0.28em] border transition-colors ${
                filter === d
                  ? "bg-[#FFD700] text-black border-[#FFD700]"
                  : "text-white/65 border-white/15 hover:border-[#FFD700]/60 hover:text-[#FFD700]"
              }`}
            >
              {d}
            </button>
          ))}
        </div>

        {/* Roles list */}
        <div className="border-t border-white/8">
          <AnimatePresence mode="popLayout">
            {filtered.map((c) => (
              <motion.button
                key={c.id}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
                onClick={() => setActive(c)}
                className="w-full text-left group border-b border-white/8 py-6 md:py-8 px-2 md:px-4 hover:bg-[#0a0a0a] transition-colors"
              >
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-12 md:col-span-5">
                    <div className="font-display text-2xl md:text-4xl text-white group-hover:text-[#FFD700] transition-colors">
                      {c.role}
                    </div>
                    <div className="font-type text-[10px] uppercase tracking-[0.28em] text-white/45 mt-2">
                      {c.department}
                    </div>
                  </div>
                  <div className="col-span-6 md:col-span-2 font-type text-[10px] uppercase tracking-[0.24em] text-white/65">
                    {c.type}
                  </div>
                  <div className="col-span-6 md:col-span-3 font-type text-[10px] uppercase tracking-[0.24em] text-white/65">
                    {c.location}
                  </div>
                  <div className="col-span-12 md:col-span-2 flex md:justify-end">
                    <span className="inline-flex items-center gap-2 font-type text-[10px] uppercase tracking-[0.28em] text-white/65 group-hover:text-[#D32F2F]">
                      Apply <ArrowRight size={14} />
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
          <SheetHeader className="px-6 pt-6 pb-3 border-b border-white/8">
            <SheetTitle className="font-display text-3xl text-white tracking-[0.02em]">
              {active?.role}
            </SheetTitle>
            <div className="font-type text-[10px] uppercase tracking-[0.28em] text-[#FFD700]">
              {active?.department} \u00b7 {active?.type}
            </div>
            <p className="font-body text-sm text-white/65 mt-2 leading-relaxed">
              {active?.blurb}
            </p>
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
  });
  const [submitting, setSubmitting] = useState(false);

  const update = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const onFile = (e) => {
    const f = e.target.files?.[0];
    if (f) update("resumeName", f.name);
  };

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email) {
      toast.error("Please add your name and email.");
      return;
    }
    setSubmitting(true);
    // mock save
    const stored = JSON.parse(localStorage.getItem("kahani_applications") || "[]");
    stored.push({
      role: role.role,
      department: role.department,
      ...form,
      submittedAt: new Date().toISOString(),
    });
    localStorage.setItem("kahani_applications", JSON.stringify(stored));
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Application received. We'll be in touch.");
      onDone?.();
    }, 600);
  };

  return (
    <form onSubmit={submit} className="px-6 py-6 space-y-5">
      <Field label="Full Name">
        <input
          value={form.name}
          onChange={(e) => update("name", e.target.value)}
          className="input-cinema"
          placeholder="Your name"
          required
        />
      </Field>
      <Field label="Email">
        <input
          type="email"
          value={form.email}
          onChange={(e) => update("email", e.target.value)}
          className="input-cinema"
          placeholder="you@email.com"
          required
        />
      </Field>
      <Field label="Portfolio / Showreel URL">
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
          placeholder="Why this role, why Kahani."
        />
      </Field>
      <Field label="Resume (PDF)">
        <label className="flex items-center gap-3 px-3 py-3 border border-white/15 hover:border-[#FFD700]/60 cursor-pointer text-sm text-white/70">
          <Upload size={14} className="text-[#FFD700]" />
          <span className="truncate">
            {form.resumeName || "Choose file"}
          </span>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={onFile}
            className="hidden"
          />
        </label>
      </Field>

      <button
        type="submit"
        disabled={submitting}
        className="w-full mt-3 inline-flex items-center justify-center gap-2 bg-[#D32F2F] hover:bg-[#a8211f] text-white font-type text-[11px] uppercase tracking-[0.28em] py-3.5 transition-colors disabled:opacity-60"
      >
        {submitting ? "Submitting\u2026" : "Submit Application"}
      </button>

      <p className="text-[10px] text-white/40 font-type uppercase tracking-[0.24em]">
        We respect your work. Replies within 7\u201310 days.
      </p>

      <style>{`
        .input-cinema {
          width: 100%;
          background: #050505;
          border: 1px solid rgba(255,255,255,0.12);
          color: #e7e5e0;
          padding: 12px 14px;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          outline: none;
          transition: border-color 0.2s ease;
        }
        .input-cinema::placeholder { color: rgba(255,255,255,0.35); }
        .input-cinema:focus { border-color: #FFD700; }
      `}</style>
    </form>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block font-type text-[10px] uppercase tracking-[0.28em] text-white/55 mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}
