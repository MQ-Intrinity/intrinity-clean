import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./components/ui/button.jsx";

export default function EntranceIntro() {
  const [started, setStarted] = useState(false);

  return (
    <AnimatePresence>
      {!started && (
        <motion.section
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.08 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-[9999] overflow-hidden bg-[#02070d] text-white"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_85%,rgba(101,255,143,0.28),transparent_35%),radial-gradient(circle_at_50%_15%,rgba(94,231,255,0.18),transparent_28%)]" />

          <motion.div
            animate={{ opacity: [0.15, 0.65, 0.25] }}
            transition={{ repeat: Infinity, duration: 4 }}
            className="absolute left-1/2 top-0 h-full w-40 -translate-x-1/2 bg-white/10 blur-3xl"
          />

          <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#123524] via-[#07111f] to-transparent" />

          <motion.div
            initial={{ y: 220, rotateX: 72, scale: 0.8 }}
            animate={{ y: 80, rotateX: 58, scale: 1 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="absolute bottom-0 left-1/2 h-[420px] w-[920px] -translate-x-1/2 origin-bottom border border-white/20 bg-[#123524] shadow-[0_0_100px_rgba(101,255,143,0.18)]"
          >
            <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,#0d3b23_0_8%,#0a2f1d_8%_16%)]" />
            <div className="absolute inset-8 border-2 border-white/25" />
            <div className="absolute bottom-8 top-8 left-1/2 w-[2px] -translate-x-1/2 bg-white/25" />
            <div className="absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/25" />

            <motion.div
              animate={{ opacity: [0.2, 0.8, 0.2], scale: [0.9, 1.2, 0.9] }}
              transition={{ repeat: Infinity, duration: 3.8 }}
              className="absolute left-[38%] top-[30%] h-56 w-56 rounded-full bg-red-400/25 blur-3xl"
            />

            <motion.div
              animate={{ x: ["-20%", "120%"] }}
              transition={{ repeat: Infinity, duration: 2.4, ease: "linear" }}
              className="absolute left-0 top-1/2 h-[3px] w-1/2 bg-[#5ee7ff] shadow-[0_0_30px_rgba(94,231,255,0.9)]"
            />
          </motion.div>

          <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6">
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-5 text-xs font-black uppercase tracking-[0.45em] text-[#5ee7ff]"
            >
              Intrinity Presents
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="max-w-5xl text-6xl font-black leading-[0.88] tracking-tight md:text-8xl"
            >
              Football marketing that feels like matchday.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="mt-7 max-w-2xl text-xl leading-8 text-white/75"
            >
              Grow fans. Elevate sponsors. Build a club identity supporters remember.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05 }}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Button
                onClick={() => setStarted(true)}
                className="rounded-xl border border-[#65ff8f]/40 bg-[#65ff8f]/20 px-8 py-6 text-base font-black text-white shadow-[0_0_40px_rgba(101,255,143,0.25)] backdrop-blur-xl hover:bg-[#65ff8f]/30"
              >
                Press Start <ArrowRight className="ml-2 h-5 w-5" />
              </Button>

              <Button
                onClick={() => setStarted(true)}
                variant="outline"
                className="rounded-xl border-white/20 bg-white/10 px-8 py-6 text-base font-bold text-white hover:bg-white/15"
              >
                Skip intro
              </Button>
            </motion.div>
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
}
