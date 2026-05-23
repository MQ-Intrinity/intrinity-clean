const process = [
  ["01", "Audit", "Review your socials, sponsors and digital identity."],
  ["02", "Game Plan", "Build a focused growth plan for your club."],
  ["03", "Activate", "Launch content, campaigns and sponsor moments."],
  ["04", "Report", "Show what improved and what to do next."],
];

function FootballScrollJourney() {
  const moments = [
    {
      label: "01 / Walkout",
      title: "The club steps into the spotlight.",
      text: "First impression: energy, ambition, stadium lights and a football-first atmosphere.",
      stat: "+42%",
      statLabel: "Matchday reach",
    },
    {
      label: "02 / Fan Pulse",
      title: "We find where the attention is.",
      text: "Heatmaps and fan signals show what supporters engage with most.",
      stat: "82",
      statLabel: "Fan pulse score",
    },
    {
      label: "03 / Sponsor Moment",
      title: "Sponsors become part of the story.",
      text: "Partners feel integrated into the club experience, not pasted onto content.",
      stat: "4★",
      statLabel: "Sponsor visibility",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#07111f] px-6 py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(94,231,255,0.18),transparent_35%),radial-gradient(circle_at_20%_70%,rgba(101,255,143,0.14),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-14 max-w-4xl">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.35em] text-[#5ee7ff]">
            The Matchday Experience
          </p>

          <h2 className="text-5xl font-black leading-[0.95] tracking-tight text-white md:text-7xl">
            Before we sell services, we create emotion.
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            The website now behaves like a football experience instead of a normal agency page.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative min-h-[560px] overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-b from-[#123524] via-[#0f1729] to-[#07111f] p-6 shadow-[0_0_120px_rgba(94,231,255,0.12)]">
            <div className="absolute inset-6 rounded-[2rem] border-2 border-white/15" />

            <div className="absolute left-1/2 top-6 bottom-6 w-[2px] -translate-x-1/2 bg-white/15" />

            <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white/15" />

            <motion.div
              animate={{ opacity: [0.15, 0.65, 0.15], scale: [0.9, 1.2, 0.9] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute left-[28%] top-[25%] h-64 w-64 rounded-full bg-red-400/25 blur-3xl"
            />

            <motion.div
              animate={{ opacity: [0.25, 0.85, 0.25], scaleX: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 3.8 }}
              className="absolute left-[18%] top-[47%] h-[3px] w-[64%] origin-left -rotate-12 rounded-full bg-[#5ee7ff] shadow-[0_0_35px_rgba(94,231,255,0.8)]"
            />
          </div>

          <div className="grid gap-5">
            {moments.map((moment, index) => (
              <motion.div
                key={moment.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl transition hover:bg-white/[0.09]"
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.3em] text-[#5ee7ff]">
                      {moment.label}
                    </p>

                    <h3 className="mt-3 text-3xl font-black leading-tight text-white">
                      {moment.title}
                    </h3>

                    <p className="mt-3 max-w-xl leading-7 text-white/65">
                      {moment.text}
                    </p>
                  </div>

                  <div className="shrink-0 rounded-[1.5rem] border border-[#65ff8f]/20 bg-[#65ff8f]/10 p-5 text-center">
                    <div className="text-4xl font-black text-[#65ff8f]">
                      {moment.stat}
                    </div>

                    <div className="mt-1 text-xs font-bold uppercase tracking-widest text-white/55">
                      {moment.statLabel}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
