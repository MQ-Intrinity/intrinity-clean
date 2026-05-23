import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Users,
  CheckCircle2,
  Menu,
  Megaphone,
  Camera,
  Handshake,
  Star,
  Zap,
  ShieldCheck,
  Target,
  CalendarDays,
  BadgePoundSterling,
  ClipboardCheck,
  MapPin,
  Activity,
  Radio,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const image = {
  matchday: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?auto=format&fit=crop&w=1200&q=80",
  academy: "https://images.unsplash.com/photo-1556056504-5c7696c4c28d?auto=format&fit=crop&w=900&q=80",
  grassroots: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=900&q=80",
};

const services = [
  {
    icon: Megaphone,
    title: "Social Growth",
    text: "Build a weekly content rhythm fans actually want to follow.",
  },
  {
    icon: Camera,
    title: "Matchday Content",
    text: "Turn fixtures into clips, stories, moments and sponsor visibility.",
  },
  {
    icon: Handshake,
    title: "Sponsor Activation",
    text: "Make partner posts feel valuable, visible and commercially useful.",
  },
  {
    icon: BarChart3,
    title: "Performance Reports",
    text: "Show growth, best content, sponsor proof and next actions clearly.",
  },
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
