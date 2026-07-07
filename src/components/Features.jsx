const services = [
  {
    name: "1:1 Coaching",
    desc: "Private sessions built around your patterns, your pace, and your goals.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <circle cx="12" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.2" />
        <path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    name: "Group Coaching",
    desc: "Work through your patterns alongside other women doing the same.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <circle cx="8" cy="8" r="2.6" stroke="currentColor" strokeWidth="1.2" />
        <circle cx="16" cy="8" r="2.6" stroke="currentColor" strokeWidth="1.2" />
        <path d="M3 19c0-2.8 2.2-4.6 5-4.6s5 1.8 5 4.6M11 19c0-2.8 2.2-4.6 5-4.6s5 1.8 5 4.6" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    name: "Workshops",
    desc: "Focused live sessions on a single topic, from boundaries to burnout.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <rect x="4" y="5" width="16" height="11" rx="0.5" stroke="currentColor" strokeWidth="1.2" />
        <path d="M9 20h6M12 16v4" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    name: "12-Week Plan",
    desc: "A personalised coaching arc for lasting change, not a quick fix.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
        <path d="M4 12h16M4 6h10M4 18h13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="services" className="py-20 md:py-24 bg-sage-100">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-xs tracking-widest2 uppercase text-sage-DEEP mb-4">How We Work Together</p>
          <h2 className="font-display text-3xl md:text-4xl text-ink">Choose the path that fits your season.</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          {services.map((s) => (
            <div key={s.name} className="text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-full border border-sage-DEEP/30 flex items-center justify-center text-sage-DEEP mb-5">
                {s.icon}
              </div>
              <h3 className="font-display text-lg text-ink mb-2">{s.name}</h3>
              <p className="text-sm text-ink/65 leading-relaxed max-w-[220px]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
