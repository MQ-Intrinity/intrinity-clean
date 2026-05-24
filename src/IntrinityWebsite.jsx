import EntranceIntro from "./EntranceIntro.jsx";
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight, BarChart3, Users, CheckCircle2, Menu, Megaphone, Camera,
  Handshake, Star, Zap, ShieldCheck, Target, CalendarDays,
  BadgePoundSterling, ClipboardCheck, MapPin, Activity, Radio,
} from "lucide-react";
import { Card, CardContent } from "./components/ui/card.jsx";
import { Button } from "./components/ui/button.jsx";

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };

const image = {
  matchday: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1200&q=80",
  academy: "https://images.unsplash.com/photo-1556056504-5c7696c4c28d?auto=format&fit=crop&w=900&q=80",
  grassroots: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=900&q=80",
};

const services = [
  { icon: Megaphone, title: "Social Growth", text: "Build a weekly content rhythm fans actually want to follow." },
  { icon: Camera, title: "Matchday Content", text: "Turn fixtures into clips, stories, moments and sponsor visibility." },
  { icon: Handshake, title: "Sponsor Activation", text: "Make partner posts feel valuable, visible and commercially useful." },
  { icon: BarChart3, title: "Performance Reports", text: "Show growth, best content, sponsor proof and next actions clearly." },
];
const outcomes = [
  { icon: Users, title: "Grow fans", text: "Build a stronger club community." },
  { icon: CalendarDays, title: "Boost matchdays", text: "Create attention around fixtures." },
  { icon: BadgePoundSterling, title: "Win sponsors", text: "Prove partner visibility." },
  { icon: ClipboardCheck, title: "Report clearly", text: "Show progress monthly." },
];
const process = [
  ["01", "Audit", "Review your socials, sponsors and digital identity."],
  ["02", "Game Plan", "Build a focused growth plan for your club."],
  ["03", "Activate", "Launch content, campaigns and sponsor moments."],
  ["04", "Report", "Show what improved and what to do next."],
];
const platformFeatures = ["Fair club benchmarking", "Social growth tracking", "Sponsor-ready reporting", "Content performance insights"];
const pricing = [
  { name: "Kick Off", price: "£189", description: "Clear monthly direction for smaller clubs.", items: ["Monthly report", "Social recommendations", "Benchmark snapshot", "Email support"] },
  { name: "Matchday Growth", price: "£499", description: "Active growth support for ambitious clubs.", items: ["Content strategy", "Sponsor reporting", "Competitor analysis", "Monthly growth call"], popular: true },
  { name: "Club Partner", price: "Custom", description: "Deeper support for clubs, academies and agencies.", items: ["Campaign planning", "Custom reports", "Platform access", "Strategic support"] },
];
const heatmapCells = [0.25,0.45,0.3,0.7,0.4,0.35,0.85,0.95,0.8,0.45,0.2,0.65,1,0.7,0.3,0.4,0.75,0.9,0.55,0.25,0.2,0.35,0.5,0.3,0.2];
const navLinks = [["Services", "#services"], ["Proof", "#proof"], ["Platform", "#platform"], ["Pricing", "#pricing"]];

function GlassPanel({ children, className = "" }) {
  return <div className={`rounded-[2rem] border border-white/10 bg-white/[0.06] shadow-2xl backdrop-blur-xl ${className}`}>{children}</div>;
}
function SectionHeader({ eyebrow, title, text }) {
  return <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.6 }} className="mx-auto mb-12 max-w-3xl text-center">
    <p className="mb-4 text-xs font-black uppercase tracking-[0.35em] text-[#5ee7ff]">{eyebrow}</p>
    <h2 className="text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">{title}</h2>
    {text && <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/70">{text}</p>}
  </motion.div>;
}
function AnimatedBackground() {
  return <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#07111f]">
    <motion.div animate={{ x: [0,80,0], y: [0,-40,0] }} transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }} className="absolute left-[-8%] top-[10%] h-96 w-96 rounded-full bg-[#65ff8f]/20 blur-[120px]" />
    <motion.div animate={{ x: [0,-70,0], y: [0,60,0] }} transition={{ repeat: Infinity, duration: 18, ease: "easeInOut" }} className="absolute right-[-10%] top-[20%] h-[32rem] w-[32rem] rounded-full bg-[#5ee7ff]/15 blur-[140px]" />
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px]" />
  </div>;
}
function Logo() {
  return <div className="flex items-center gap-3"><div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-[#65ff8f] to-[#5ee7ff] font-black text-[#07111f] shadow-md">I</div><div><span className="block text-xl font-black tracking-tight text-white">Intrinity</span><span className="block text-[10px] font-bold uppercase tracking-[0.25em] text-[#65ff8f]">Sports Marketing</span></div></div>;
}
function HeatmapWidget() {
  return <GlassPanel className="p-5"><div className="mb-4 flex items-center justify-between"><div><p className="text-xs font-black uppercase tracking-[0.25em] text-[#5ee7ff]">Live Heatmap</p><p className="mt-1 text-sm text-white/60">Fan attention zones</p></div><Activity className="h-6 w-6 text-[#65ff8f]" aria-hidden="true" /></div><div className="grid grid-cols-5 gap-1.5" aria-label="Animated fan attention heatmap">{heatmapCells.map((opacity, index) => <motion.div key={index} animate={{ opacity: [opacity*0.65, opacity, opacity*0.65] }} transition={{ repeat: Infinity, duration: 3.4 + index*0.03 }} className={`h-7 rounded-md ${opacity > 0.75 ? "bg-red-400" : opacity > 0.45 ? "bg-yellow-300" : "bg-[#65ff8f]"}`} />)}</div></GlassPanel>;
}
function ClubCard() {
  const stats = [["82", "Club rating"], ["+18%", "Fan growth"], ["4★", "Sponsor value"], ["Top 18%", "Benchmark"]];
  return <motion.div animate={{ y: [0,-10,0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} className="relative mx-auto max-w-sm"><div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[#65ff8f] via-[#5ee7ff] to-[#123524] opacity-45 blur-2xl" /><div className="relative overflow-hidden rounded-[2.25rem] border border-white/20 bg-gradient-to-br from-[#0f1729] via-[#123524] to-[#07111f] p-5 text-white shadow-2xl"><div className="absolute right-[-50px] top-[-50px] h-40 w-40 rounded-full bg-white/10" /><div className="flex items-start justify-between"><div><div className="text-6xl font-black leading-none text-white">82</div><div className="text-sm font-black uppercase tracking-widest text-[#5ee7ff]">INT</div></div><div className="rounded-full bg-white/10 px-3 py-1 text-xs font-black text-[#dffcff]">INTRINITY</div></div><div className="my-8 grid place-items-center"><div className="grid h-32 w-32 place-items-center rounded-full border-4 border-white/30 bg-gradient-to-br from-[#65ff8f] to-[#123524] text-5xl font-black text-[#07111f] shadow-xl">FC</div></div><div className="rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur"><h3 className="text-center text-2xl font-black uppercase tracking-wide text-white">Growth Card</h3><div className="mt-4 grid grid-cols-2 gap-3">{stats.map(([value,label]) => <div key={label} className="rounded-2xl bg-[#07111f]/70 p-3 text-center"><div className="text-xl font-black text-white">{value}</div><div className="text-[10px] font-bold uppercase tracking-wide text-white/55">{label}</div></div>)}</div></div></div></motion.div>;
}
function InteractivePitch() {
  const zones = [
    { title: "Fan Growth", text: "Build attention around the club.", className: "left-1/2 top-[8%] -translate-x-1/2", color: "bg-[#65ff8f]" },
    { title: "Content", text: "Matchday, reels and player stories.", className: "left-[6%] top-[44%] md:left-[16%]", color: "bg-[#5ee7ff]" },
    { title: "Sponsors", text: "Make partners visible and valuable.", className: "right-[6%] top-[44%] md:right-[16%]", color: "bg-[#65ff8f]" },
    { title: "Reports", text: "Clear proof every month.", className: "bottom-[8%] left-1/2 -translate-x-1/2", color: "bg-[#5ee7ff]" },
  ];
  return <div className="relative mx-auto h-[520px] max-w-6xl overflow-hidden rounded-[2rem] border border-white/10 bg-[repeating-linear-gradient(90deg,#123524_0_9%,#0f2d20_9%_18%)] shadow-[0_0_120px_rgba(94,231,255,0.12)] md:h-[620px] md:rounded-[3rem]"><div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(101,255,143,0.16),_transparent_42%)]" /><div className="absolute inset-5 rounded-[1.5rem] border-2 border-white/20 md:inset-8 md:rounded-[2.5rem]" /><div className="absolute bottom-5 top-5 left-1/2 w-[2px] -translate-x-1/2 bg-white/20 md:bottom-8 md:top-8" /><div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/20 md:h-40 md:w-40" /><div className="absolute left-5 top-1/2 h-44 w-20 -translate-y-1/2 rounded-r-3xl border-2 border-white/20 md:left-10 md:h-52 md:w-24" /><div className="absolute right-5 top-1/2 h-44 w-20 -translate-y-1/2 rounded-l-3xl border-2 border-white/20 md:right-10 md:h-52 md:w-24" /><motion.div animate={{ scaleX: [0.35,1,0.35], opacity: [0.25,0.85,0.25] }} transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }} className="absolute left-[28%] top-[30%] h-[2px] w-[44%] origin-left rotate-12 bg-[#5ee7ff]/60 shadow-[0_0_25px_rgba(94,231,255,0.6)]" /><motion.div animate={{ opacity: [0.25,0.8,0.25], scale: [0.9,1.12,0.9] }} transition={{ repeat: Infinity, duration: 3.2 }} className="absolute left-[35%] top-[34%] h-52 w-52 rounded-full bg-red-400/20 blur-2xl md:left-[38%] md:h-56 md:w-56" />{zones.map(zone => <motion.button type="button" key={zone.title} whileHover={{ scale: 1.06, y: -6 }} whileTap={{ scale: 0.97 }} className={`group absolute ${zone.className} cursor-pointer text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5ee7ff]`} aria-label={`${zone.title}: ${zone.text}`}><span className={`relative block rounded-full ${zone.color} px-4 py-3 text-sm font-black text-[#07111f] shadow-[0_0_40px_rgba(101,255,143,0.4)] md:px-6 md:py-4 md:text-base`}>{zone.title}<span className="pointer-events-none absolute left-1/2 top-full z-20 mt-4 hidden w-64 -translate-x-1/2 rounded-3xl border border-white/10 bg-[#07111f]/95 p-5 opacity-0 shadow-2xl backdrop-blur transition-all group-hover:block group-hover:opacity-100 md:block md:opacity-0 md:group-hover:opacity-100"><span className="block text-lg font-black text-white">{zone.title}</span><span className="mt-2 block text-sm leading-6 text-white/70">{zone.text}</span></span></span></motion.button>)}</div>;
}
function StatStrip(){return <section className="relative border-y border-white/10 bg-[#0f1729]/70 px-6 py-8 backdrop-blur"><div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">{outcomes.map(item => <GlassPanel key={item.title} className="p-5"><item.icon className="mb-3 h-6 w-6 text-[#65ff8f]" aria-hidden="true" /><div className="font-black text-white">{item.title}</div><div className="mt-1 text-sm leading-6 text-white/65">{item.text}</div></GlassPanel>)}</div></section>}
function PhotoTile({ src, label, className = "" }){return <div className={`relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-xl ${className}`}><img src={src} alt={label} className="h-full w-full object-cover opacity-80" /><div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-[#07111f]/20 to-transparent" /><div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-[#07111f]/80 px-4 py-2 text-sm font-black text-white shadow-md backdrop-blur">{label}</div></div>}
function Hero(){return <header className="relative min-h-screen overflow-hidden"><video autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover opacity-25" aria-hidden="true"><source src="https://cdn.coverr.co/videos/coverr-football-stadium-lights-1579/1080p.mp4" type="video/mp4" /></video><div className="absolute inset-0 bg-gradient-to-b from-[#07111f]/55 via-[#07111f]/88 to-[#07111f]" /><div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(94,231,255,0.2),_transparent_36%)]" /><div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-28 md:grid-cols-2"><motion.div variants={stagger} initial="hidden" animate="visible"><motion.div variants={fadeUp} className="mb-6 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white/85 shadow-sm backdrop-blur">Football-first marketing for ambitious clubs</motion.div><motion.h1 variants={fadeUp} className="max-w-3xl text-5xl font-black leading-[0.92] tracking-tight text-white sm:text-6xl md:text-8xl">Modern football marketing for matchday attention.</motion.h1><motion.p variants={fadeUp} className="mt-6 max-w-lg text-lg leading-8 text-white/80 sm:text-xl">Grow fans, elevate sponsors and make your club look elite online.</motion.p><motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:flex-row"><Button className="rounded-full border border-[#65ff8f]/40 bg-[#65ff8f]/20 px-7 py-6 text-base font-black text-[#dffcff] shadow-[0_0_35px_rgba(101,255,143,0.18)] backdrop-blur-xl hover:bg-[#65ff8f]/30 hover:text-white">Book a free club review <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" /></Button><Button variant="outline" className="rounded-full border-white/20 bg-white/10 px-7 py-6 text-base font-bold text-white hover:bg-white/15">Explore the system</Button></motion.div><motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-4">{["Fan Growth","Sponsor Value","Matchday Buzz"].map(item => <motion.div whileHover={{ y: -6, scale: 1.03 }} key={item} className="rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-black uppercase tracking-[0.2em] text-white shadow-[0_0_25px_rgba(94,231,255,0.15)] backdrop-blur">{item}</motion.div>)}</motion.div></motion.div><div className="relative hidden md:block"><ClubCard /><motion.div animate={{ y: [0,-12,0] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} className="absolute -right-4 top-8 w-64"><HeatmapWidget /></motion.div><motion.div animate={{ y: [0,6,0] }} transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }} className="absolute -left-10 -bottom-14 w-56"><GlassPanel className="rounded-[1.5rem] border-white/15 bg-white/[0.075] p-4 shadow-[0_0_35px_rgba(94,231,255,0.14)]"><div className="flex items-center gap-3"><Radio className="h-6 w-6 text-[#5ee7ff]" aria-hidden="true" /><div><p className="text-sm font-black text-white">Matchday Reach</p><p className="text-2xl font-black text-[#65ff8f]">+42%</p></div></div></GlassPanel></motion.div></div></div></header>}
function LeadForm(){const fields=["Name","Club","Email","League","Social media link"];return <GlassPanel className="p-6"><form className="space-y-4">{fields.map(field => <label key={field} className="block"><span className="sr-only">{field}</span><input type={field === "Email" ? "email" : "text"} placeholder={field} className="w-full rounded-2xl border border-white/10 bg-[#07111f]/70 px-4 py-4 text-white placeholder:text-white/45 outline-none transition focus:border-[#5ee7ff] focus:ring-2 focus:ring-[#5ee7ff]/30" /></label>)}<Button type="submit" className="w-full rounded-full border border-[#65ff8f]/40 bg-[#65ff8f]/20 py-6 font-black text-[#dffcff] shadow-[0_0_35px_rgba(101,255,143,0.18)] backdrop-blur-xl hover:bg-[#65ff8f]/30 hover:text-white">Request Club Review</Button></form></GlassPanel>}

export default function IntrinityWebsite() {
  return (
    <div className="min-h-screen bg-[#07111f] text-white">

      <EntranceIntro />

      <AnimatedBackground />

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Logo />

          <div className="hidden items-center gap-8 text-sm font-bold text-white/70 md:flex">
            {navLinks.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="transition hover:text-[#66ff91]"
              >
                {label}
              </a>
            ))}
          </div>

          <GlassButton className="hidden md:flex">
            Book Club Review
          </GlassButton>

          <button
            type="button"
            className="rounded-xl p-2 text-white md:hidden"
            aria-label="Open navigation menu"
          >
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
            <a href="#" className="hover:text-white">
              Privacy
            </a>

            <a href="#" className="hover:text-white">
              Terms
            </a>

            <a href="#" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
