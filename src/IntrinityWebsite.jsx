import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Users,
  Menu,
  Megaphone,
  Camera,
  Handshake,
  Trophy,
  Activity,
  ShieldCheck,
  MapPin,
} from "lucide-react";
import { Card, CardContent } from "./components/ui/card.jsx";
import { Button } from "./components/ui/button.jsx";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const navLinks = [
  ["Services", "#services-teaser"],
  ["Platform", "#platform-teaser"],
  ["Sponsorship", "#sponsor-teaser"],
  ["About", "#about-teaser"],
];

const heatmapCells = [
  0.25, 0.45, 0.3, 0.7, 0.4,
  0.35, 0.85, 0.95, 0.8, 0.45,
  0.2, 0.65, 1, 0.7, 0.3,
  0.4, 0.75, 0.9, 0.55, 0.25,
  0.2, 0.35, 0.5, 0.3, 0.2,
];

function GlassPanel({ children, className = "" }) {
  return (
    <div className={`border border-white/10 bg-white/[0.06] shadow-2xl backdrop-blur-xl ${className}`}>
      {children}
    </div>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[#65ff8f] to-[#5ee7ff] font-black text-[#07111f] shadow-md">
        I
      </div>
      <div>
        <span className="block text-xl font-black tracking-tight text-white">Intrinity</span>
        <span className="block text-[10px] font-bold uppercase tracking-[0.25em] text-[#65ff8f]">
          Sports Marketing
        </span>
      </div>
    </div>
  );
}

function TunnelIntro() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#03080f]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_95%,rgba(101,255,143,0.25),transparent_35%),radial-gradient(circle_at_50%_10%,rgba(94,231,255,0.18),transparent_32%)]" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.1, 0.55, 0.28] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-0 h-full w-[10rem] -translate-x-1/2 bg-white/10 blur-3xl"
      />

      <div className="absolute inset-x-0 bottom-0 h-[48%] bg-gradient-to-t from-[#123524] via-[#07111f] to-transparent" />

      <div className="absolute bottom-0 left-1/2 h-[34rem] w-[72rem] -translate-x-1/2 perspective-[900px]">
        <motion.div
          initial={{ rotateX: 72, y: 180, scale: 0.82 }}
          animate={{ rotateX: 62, y: 80, scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="relative h-full w-full origin-bottom overflow-hidden border border-white/15 bg-[#123524]"
        >
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:56px_56px]" />
          <div className="absolute inset-10 border-2 border-white/25" />
          <div className="absolute left-1/2 top-10 bottom-10 w-[2px] -translate-x-1/2 bg-white/25" />
          <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/25" />
          <motion.div
            animate={{ opacity: [0.15, 0.6, 0.15], scale: [0.9, 1.2, 0.9] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute left-[37%] top-[34%] h-56 w-56 rounded-full bg-red-400/25 blur-3xl"
          />
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-24">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-5xl">
          <motion.p variants={fadeUp} className="mb-5 text-xs font-black uppercase tracking-[0.45em] text-[#5ee7ff]">
            Tunnel Walkout
          </motion.p>

          <motion.h1 variants={fadeUp} className="max-w-5xl text-6xl font-black leading-[0.88] tracking-tight text-white md:text-8xl">
            Step into the future of football marketing.
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-xl leading-8 text-white/75">
            A club-first experience built to grow fans, elevate sponsors, and make your football brand impossible to ignore.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button className="rounded-xl bg-[#65ff8f] px-7 py-6 text-base font-black text-[#07111f] hover:bg-[#7dff9f]">
              Start the club review <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="rounded-xl border-white/20 bg-white/10 px-7 py-6 text-base font-bold text-white hover:bg-white/15">
              Enter the pitch
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: [0, 1, 1], y: [20, 0, 0] }}
        transition={{ delay: 1.4, duration: 1.1 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 text-center text-xs font-bold uppercase tracking-[0.35em] text-white/50"
      >
        Scroll to walk out
      </motion.div>
    </section>
  );
}

function HeatmapWidget() {
  return (
    <GlassPanel className="rounded-2xl p-5">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.25em] text-[#5ee7ff]">Fan Heatmap</p>
          <p className="mt-1 text-sm text-white/60">Attention zones</p>
        </div>
        <Activity className="h-6 w-6 text-[#65ff8f]" />
      </div>
      <div className="grid grid-cols-5 gap-1.5">
        {heatmapCells.map((opacity, index) => (
          <motion.div
            key={index}
            animate={{ opacity: [opacity * 0.55, opacity, opacity * 0.55] }}
            transition={{ repeat: Infinity, duration: 2.2 + index * 0.03 }}
            className={`h-7 rounded-sm ${opacity > 0.75 ? "bg-red-400" : opacity > 0.45 ? "bg-yellow-300" : "bg-[#65ff8f]"}`}
          />
        ))}
      </div>
    </GlassPanel>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#07111f] px-6 py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(94,231,255,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(101,255,143,0.12),transparent_35%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1fr_0.85fr]">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.p variants={fadeUp} className="mb-4 text-xs font-black uppercase tracking-[0.35em] text-[#65ff8f]">
            Football-first growth
          </motion.p>
          <motion.h2 variants={fadeUp} className="max-w-4xl text-5xl font-black leading-[0.95] text-white md:text-7xl">
            Your club has a story. We turn it into attention.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Intrinity helps football clubs look sharper, grow their fanbase, and prove sponsor value — without turning your homepage into a boring brochure.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 grid max-w-2xl gap-4 sm:grid-cols-3">
            {["Fans", "Sponsors", "Matchday"].map((item) => (
              <div key={item} className="border border-white/10 bg-white/[0.06] p-5">
                <p className="text-2xl font-black text-white">{item}</p>
                <p className="mt-1 text-sm text-white/55">Built into the system</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <div className="relative">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="border border-white/10 bg-gradient-to-b from-[#123524] to-[#07111f] p-5 shadow-[0_0_80px_rgba(101,255,143,0.12)]"
          >
            <div className="relative h-[420px] overflow-hidden border border-white/15 bg-[#123524]">
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px]" />
              <div className="absolute inset-8 border-2 border-white/20" />
              <div className="absolute left-1/2 top-8 bottom-8 w-[2px] -translate-x-1/2 bg-white/20" />
              <motion.div
                animate={{ opacity: [0.2, 0.75, 0.2], scale: [0.85, 1.2, 0.85] }}
                transition={{ repeat: Infinity, duration: 3.8 }}
                className="absolute left-[35%] top-[30%] h-56 w-56 rounded-full bg-red-400/25 blur-3xl"
              />
              <div className="absolute bottom-6 left-6 right-6">
                <HeatmapWidget />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function MysteryTeasers() {
  const teasers = [
    {
      id: "services-teaser",
      icon: Megaphone,
      label: "Services",
      title: "The growth system",
      text: "Social, content, sponsors and reports — revealed properly on the services page.",
    },
    {
      id: "platform-teaser",
      icon: BarChart3,
      label: "Platform",
      title: "The analytics engine",
      text: "Benchmark your club against similar clubs and show progress clearly.",
    },
    {
      id: "sponsor-teaser",
      icon: Handshake,
      label: "Sponsorship",
      title: "The sponsor story",
      text: "Turn partner visibility into proof, campaigns and renewal confidence.",
    },
    {
      id: "about-teaser",
      icon: Trophy,
      label: "About",
      title: "The club-first mission",
      text: "Built for UK football clubs first, with room to scale across sport.",
    },
  ];

  return (
    <section className="relative bg-[#0f1729] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.35em] text-[#5ee7ff]">Choose your route</p>
          <h2 className="text-5xl font-black leading-[0.95] text-white md:text-7xl">
            The homepage should tease, not tell everything.
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/70">
            Give clubs enough to feel the vision, then let them choose the path they care about most.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {teasers.map((item) => (
            <motion.a
              id={item.id}
              key={item.title}
              href="#"
              whileHover={{ y: -8, scale: 1.01 }}
              className="group border border-white/10 bg-white/[0.055] p-7 transition hover:bg-white/[0.09]"
            >
              <item.icon className="mb-8 h-9 w-9 text-[#65ff8f]" />
              <p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-[#5ee7ff]">{item.label}</p>
              <h3 className="text-3xl font-black text-white">{item.title}</h3>
              <p className="mt-4 max-w-xl leading-7 text-white/65">{item.text}</p>
              <div className="mt-7 inline-flex items-center text-sm font-black uppercase tracking-[0.2em] text-[#65ff8f]">
                Explore <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProofStrip() {
  return (
    <section className="relative border-y border-white/10 bg-[#07111f] px-6 py-10">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
        {[
          ["+42%", "Matchday attention"],
          ["82", "Fan pulse score"],
          ["4★", "Sponsor visibility"],
        ].map(([value, label]) => (
          <div key={label} className="border border-white/10 bg-white/[0.055] p-6">
            <p className="text-5xl font-black text-[#65ff8f]">{value}</p>
            <p className="mt-2 text-sm font-bold uppercase tracking-[0.25em] text-white/55">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function LeadForm() {
  const fields = ["Name", "Club", "Email", "League", "Social media link"];

  return (
    <GlassPanel className="p-6">
      <form className="space-y-4">
        {fields.map((field) => (
          <label key={field} className="block">
            <span className="sr-only">{field}</span>
            <input
              type={field === "Email" ? "email" : "text"}
              placeholder={field}
              className="w-full border border-white/10 bg-[#07111f]/80 px-4 py-4 text-white placeholder:text-white/45 outline-none transition focus:border-[#5ee7ff] focus:ring-2 focus:ring-[#5ee7ff]/30"
            />
          </label>
        ))}
        <Button type="submit" className="w-full rounded-xl bg-[#65ff8f] py-6 font-black text-[#07111f] hover:bg-[#7dff9f]">
          Request Club Review
        </Button>
      </form>
    </GlassPanel>
  );
}

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#07111f] px-6 py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(101,255,143,0.16),transparent_35%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 text-xs font-black uppercase tracking-[0.35em] text-[#5ee7ff]">Free Club Review</p>
          <h2 className="text-5xl font-black leading-[0.95] text-white md:text-7xl">
            Ready to make your club look elite online?
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
            Keep the mystery on the homepage. Use the review to start the real conversation.
          </p>
        </div>
        <LeadForm />
      </div>
    </section>
  );
}

export default function IntrinityWebsite() {
  return (
    <div className="min-h-screen bg-[#07111f] text-white">
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Logo />
          <div className="hidden items-center gap-8 text-sm font-bold text-white/70 md:flex">
            {navLinks.map(([label, href]) => (
              <a key={href} href={href} className="transition hover:text-[#65ff8f]">
                {label}
              </a>
            ))}
          </div>
          <Button className="hidden rounded-xl bg-white text-[#07111f] hover:bg-white/90 md:flex">
            Book Club Review
          </Button>
          <button type="button" className="rounded-xl p-2 text-white md:hidden" aria-label="Open navigation menu">
            <Menu aria-hidden="true" />
          </button>
        </div>
      </nav>

      <TunnelIntro />
      <Hero />
      <ProofStrip />
      <MysteryTeasers />
      <FinalCTA />

      <footer className="relative border-t border-white/10 bg-[#07111f] px-6 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <Logo />
          <div className="flex gap-6 text-sm font-bold text-white/60">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
