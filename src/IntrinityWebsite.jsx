import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Users,
  Menu,
  Megaphone,
  Handshake,
  Trophy,
  ShieldCheck,
  Activity,
  Sparkles,
  Target,
} from "lucide-react";
import { Button } from "./components/ui/button.jsx";

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const navLinks = [
  ["Experience", "#experience"],
  ["Routes", "#routes"],
  ["Proof", "#proof"],
  ["Review", "#review"],
];

function Logo() {
  return (
    <a href="#" className="flex items-center gap-3" aria-label="Intrinity home">
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[#66ff91] to-[#5ee7ff] font-black text-[#06111f] shadow-[0_0_30px_rgba(101,255,143,0.28)]">
        I
      </div>
      <div>
        <span className="block text-xl font-black tracking-tight text-white">Intrinity</span>
        <span className="block text-[10px] font-bold uppercase tracking-[0.25em] text-[#66ff91]">
          Sports Marketing
        </span>
      </div>
    </a>
  );
}

function Panel({ children, className = "" }) {
  return (
    <div className={`border border-white/10 bg-[#071521]/80 shadow-[0_24px_80px_rgba(0,0,0,0.42)] backdrop-blur-xl ${className}`}>
      {children}
    </div>
  );
}

function PremiumPitch({ compact = false }) {
  const points = [
    { x: 50, y: 18, label: "Fans", tone: "green" },
    { x: 28, y: 48, label: "Content", tone: "cyan" },
    { x: 72, y: 48, label: "Sponsors", tone: "green" },
    { x: 50, y: 79, label: "Reports", tone: "cyan" },
  ];

  return (
    <div className={`relative isolate w-full overflow-hidden border border-white/15 bg-[#07130d] ${compact ? "h-[430px]" : "h-[620px]"} shadow-[0_0_120px_rgba(101,255,143,0.14)]`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(223,252,255,0.18),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(101,255,143,0.22),transparent_35%)]" />

      <div className="absolute inset-0 opacity-90">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,#0d3b23_0_8%,#0a2f1d_8%_16%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent_20%,transparent_78%,rgba(0,0,0,0.45))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0_45%,rgba(0,0,0,0.35)_85%)]" />
      </div>

      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        <defs>
          <filter id="pitchGlow">
            <feGaussianBlur stdDeviation="0.55" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <radialGradient id="heatZoneA" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff4d4d" stopOpacity="0.48" />
            <stop offset="55%" stopColor="#ffcc4d" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#65ff8f" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="tacticalLine" x1="0%" x2="100%">
            <stop offset="0%" stopColor="#5ee7ff" stopOpacity="0" />
            <stop offset="45%" stopColor="#5ee7ff" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#66ff91" stopOpacity="0.2" />
          </linearGradient>
        </defs>

        <rect x="5" y="6" width="90" height="88" fill="none" stroke="rgba(255,255,255,0.78)" strokeWidth="0.55" filter="url(#pitchGlow)" />
        <line x1="50" y1="6" x2="50" y2="94" stroke="rgba(255,255,255,0.58)" strokeWidth="0.35" />
        <ellipse cx="50" cy="50" rx="11" ry="15" fill="none" stroke="rgba(255,255,255,0.58)" strokeWidth="0.35" />
        <circle cx="50" cy="50" r="0.8" fill="rgba(255,255,255,0.9)" />

        <rect x="32" y="6" width="36" height="14" fill="none" stroke="rgba(255,255,255,0.56)" strokeWidth="0.35" />
        <rect x="40" y="6" width="20" height="6" fill="none" stroke="rgba(255,255,255,0.48)" strokeWidth="0.3" />
        <path d="M38 20 C42 27, 58 27, 62 20" fill="none" stroke="rgba(255,255,255,0.48)" strokeWidth="0.32" />

        <rect x="32" y="80" width="36" height="14" fill="none" stroke="rgba(255,255,255,0.56)" strokeWidth="0.35" />
        <rect x="40" y="88" width="20" height="6" fill="none" stroke="rgba(255,255,255,0.48)" strokeWidth="0.3" />
        <path d="M38 80 C42 73, 58 73, 62 80" fill="none" stroke="rgba(255,255,255,0.48)" strokeWidth="0.32" />

        <motion.ellipse
          cx="48"
          cy="39"
          rx="18"
          ry="11"
          fill="url(#heatZoneA)"
          animate={{ opacity: [0.22, 0.85, 0.22], rx: [13, 21, 13] }}
          transition={{ repeat: Infinity, duration: 4.4 }}
        />
        <motion.ellipse
          cx="64"
          cy="58"
          rx="15"
          ry="10"
          fill="url(#heatZoneA)"
          animate={{ opacity: [0.14, 0.62, 0.14], rx: [10, 18, 10] }}
          transition={{ repeat: Infinity, duration: 5.2 }}
        />

        {[
          "M28 48 C37 35, 47 33, 50 18",
          "M50 18 C59 28, 68 37, 72 48",
          "M72 48 C62 63, 55 69, 50 79",
          "M28 48 C37 61, 44 69, 50 79",
        ].map((d, index) => (
          <motion.path
            key={d}
            d={d}
            fill="none"
            stroke="url(#tacticalLine)"
            strokeWidth="0.85"
            strokeLinecap="round"
            strokeDasharray="4 4"
            animate={{ strokeDashoffset: [index * 5, -16, -32] }}
            transition={{ repeat: Infinity, duration: 2.6 + index * 0.35, ease: "linear" }}
            filter="url(#pitchGlow)"
          />
        ))}
      </svg>

      {points.map((point, index) => (
        <motion.div
          key={point.label}
          animate={{ y: [0, -7, 0] }}
          transition={{ repeat: Infinity, duration: 4 + index * 0.35 }}
          className="absolute z-20 -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${point.x}%`, top: `${point.y}%` }}
        >
          <div className="relative border border-white/20 bg-[#06111f]/90 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white shadow-[0_0_36px_rgba(94,231,255,0.22)] backdrop-blur">
            <span className={`absolute -left-1 -top-1 h-3 w-3 ${point.tone === "green" ? "bg-[#66ff91]" : "bg-[#5ee7ff]"}`} />
            {point.label}
          </div>
        </motion.div>
      ))}

      <div className="absolute left-5 top-5 z-20 border border-white/10 bg-[#06111f]/85 p-4 backdrop-blur">
        <p className="text-[10px] font-black uppercase tracking-[0.28em] text-[#5ee7ff]">Tactical View</p>
        <p className="mt-2 text-2xl font-black text-white">Club Growth Map</p>
      </div>

      <div className="absolute bottom-5 right-5 z-20 border border-[#66ff91]/25 bg-[#66ff91]/10 p-4 backdrop-blur">
        <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#66ff91]">Live Signal</p>
        <p className="mt-2 text-3xl font-black text-white">+42%</p>
      </div>
    </div>
  );
}

function TunnelIntro() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#03070d]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_92%,rgba(101,255,143,0.28),transparent_35%),radial-gradient(circle_at_50%_8%,rgba(94,231,255,0.19),transparent_30%)]" />

      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-full w-[24%] bg-gradient-to-r from-black via-[#06111f] to-transparent" />
        <div className="absolute right-0 top-0 h-full w-[24%] bg-gradient-to-l from-black via-[#06111f] to-transparent" />
        <div className="absolute left-[12%] top-0 h-full w-[2px] bg-white/8" />
        <div className="absolute right-[12%] top-0 h-full w-[2px] bg-white/8" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.1, 0.55, 0.25] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-0 h-full w-[12rem] -translate-x-1/2 bg-white/10 blur-3xl"
      />

      <div className="absolute bottom-0 left-1/2 h-[30rem] w-[64rem] -translate-x-1/2 perspective-[900px] md:h-[36rem] md:w-[78rem]">
        <motion.div
          initial={{ rotateX: 74, y: 210, scale: 0.82 }}
          animate={{ rotateX: 61, y: 110, scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="relative h-full w-full origin-bottom"
        >
          <PremiumPitch compact />
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 pt-24">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="max-w-5xl">
          <motion.p variants={fadeUp} className="mb-5 text-xs font-black uppercase tracking-[0.45em] text-[#5ee7ff]">
            Stadium Walkout
          </motion.p>

          <motion.h1 variants={fadeUp} className="max-w-5xl text-6xl font-black leading-[0.88] tracking-tight text-white md:text-8xl">
            Football marketing that feels like matchday.
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-7 max-w-2xl text-xl leading-8 text-white/75">
            A sharper digital presence for clubs that want more fans, better sponsors, and a stronger football identity.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button className="rounded-xl bg-[#66ff91] px-7 py-6 text-base font-black text-[#06111f] hover:bg-[#7dffa6]">
              Start the club review <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="rounded-xl border-white/20 bg-white/10 px-7 py-6 text-base font-bold text-white hover:bg-white/15">
              Explore the pitch
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function Hero() {
  return (
    <section id="experience" className="relative overflow-hidden bg-[#07111f] px-6 py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(94,231,255,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(101,255,143,0.12),transparent_35%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[0.88fr_1.12fr]">
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <motion.p variants={fadeUp} className="mb-4 text-xs font-black uppercase tracking-[0.35em] text-[#66ff91]">
            Football-first growth
          </motion.p>
          <motion.h2 variants={fadeUp} className="max-w-4xl text-5xl font-black leading-[0.95] text-white md:text-7xl">
            Your club has a story. We turn it into attention.
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Intrinity helps football clubs look sharper, grow their fanbase, and prove sponsor value through football-first marketing systems.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 grid max-w-2xl gap-4 sm:grid-cols-3">
            {[
              ["Fans", "Grow your community"],
              ["Sponsors", "Prove partner value"],
              ["Matchday", "Create weekly energy"],
            ].map(([title, text]) => (
              <div key={title} className="border border-white/10 bg-white/[0.06] p-5">
                <p className="text-2xl font-black text-white">{title}</p>
                <p className="mt-1 text-sm text-white/55">{text}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <PremiumPitch />
      </div>
    </section>
  );
}

function ProofStrip() {
  return (
    <section id="proof" className="relative border-y border-white/10 bg-[#07111f] px-6 py-10">
      <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
        {[
          ["+42%", "Matchday attention"],
          ["82", "Fan pulse score"],
          ["4★", "Sponsor visibility"],
        ].map(([value, label]) => (
          <div key={label} className="border border-white/10 bg-white/[0.055] p-6">
            <p className="text-5xl font-black text-[#66ff91]">{value}</p>
            <p className="mt-2 text-sm font-bold uppercase tracking-[0.25em] text-white/55">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Routes() {
  const routes = [
    {
      id: "services-teaser",
      icon: Megaphone,
      label: "Services",
      title: "The growth system",
      text: "Social, content, sponsors and reporting — without overloading the homepage.",
    },
    {
      id: "platform-teaser",
      icon: BarChart3,
      label: "Platform",
      title: "The analytics engine",
      text: "Benchmark your club and turn performance into clear boardroom proof.",
    },
    {
      id: "sponsor-teaser",
      icon: Handshake,
      label: "Sponsorship",
      title: "The sponsor story",
      text: "Turn partner visibility into campaigns, proof, and renewal confidence.",
    },
    {
      id: "about-teaser",
      icon: Trophy,
      label: "About",
      title: "The club-first mission",
      text: "Built around football culture first, then supported by smart technology.",
    },
  ];

  return (
    <section id="routes" className="relative bg-[#0f1729] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.35em] text-[#5ee7ff]">Choose your route</p>
          <h2 className="text-5xl font-black leading-[0.95] text-white md:text-7xl">
            Enough to excite. Not enough to spoil the story.
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/70">
            The homepage should make clubs curious, then guide them to the pages that matter.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {routes.map((item) => (
            <motion.a
              id={item.id}
              key={item.title}
              href="#review"
              whileHover={{ y: -8, scale: 1.01 }}
              className="group border border-white/10 bg-white/[0.055] p-7 transition hover:bg-white/[0.09]"
            >
              <item.icon className="mb-8 h-9 w-9 text-[#66ff91]" />
              <p className="mb-3 text-xs font-black uppercase tracking-[0.3em] text-[#5ee7ff]">{item.label}</p>
              <h3 className="text-3xl font-black text-white">{item.title}</h3>
              <p className="mt-4 max-w-xl leading-7 text-white/65">{item.text}</p>
              <div className="mt-7 inline-flex items-center text-sm font-black uppercase tracking-[0.2em] text-[#66ff91]">
                Explore <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadForm() {
  const fields = ["Name", "Club", "Email", "League", "Social media link"];

  return (
    <Panel className="p-6">
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
        <Button type="submit" className="w-full rounded-xl bg-[#66ff91] py-6 font-black text-[#06111f] hover:bg-[#7dffa6]">
          Request Club Review
        </Button>
      </form>
    </Panel>
  );
}

function FinalCTA() {
  return (
    <section id="review" className="relative overflow-hidden bg-[#07111f] px-6 py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(101,255,143,0.16),transparent_35%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 text-xs font-black uppercase tracking-[0.35em] text-[#5ee7ff]">Free Club Review</p>
          <h2 className="text-5xl font-black leading-[0.95] text-white md:text-7xl">
            Ready to make your club look elite online?
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
            Start with a review, then decide which route your club needs first.
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
              <a key={href} href={href} className="transition hover:text-[#66ff91]">
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
      <Routes />
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
