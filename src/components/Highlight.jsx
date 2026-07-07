import AbstractArt from "./AbstractArt";

const points = [
  "Understand what's hormonal versus what's habitual",
  "Rebuild energy without extreme diets or willpower alone",
  "Navigate mood shifts without losing your relationships",
  "Feel like yourself again, on your own timeline",
];

export default function Highlight() {
  return (
    <section id="menopause" className="py-20 md:py-28 bg-sage-DEEP text-cream relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-14 md:gap-16 items-center">
        <div className="max-w-lg">
          <p className="text-xs tracking-widest2 uppercase text-blush-light mb-5">The Shift</p>
          <h2 className="font-display text-3xl md:text-[2.5rem] leading-tight">
            Menopause doesn&rsquo;t have to mean losing yourself.
          </h2>
          <p className="mt-6 text-cream/75 leading-relaxed">
            You&rsquo;re not lazy, and you&rsquo;re not imagining it. This season brings
            real, physical change and it deserves real support, not just
            &ldquo;push through it.&rdquo;
          </p>

          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex gap-3 text-sm md:text-base text-cream/85">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blush shrink-0" />
                {p}
              </li>
            ))}
          </ul>

          <a
            href="#book"
            className="mt-9 inline-block px-7 py-3.5 bg-cream text-ink text-sm tracking-wide hover:bg-blush transition-colors"
          >
            See the 12-Week Plan
          </a>
        </div>

        <img
            src="/public/images/images.jpg"
            alt="Lisa Stefano, Life & Wellness Consultant"
            className="aspect-[4/5] md:aspect-[3/4] w-full rounded-[2rem] object-cover"
          />
      </div>
    </section>
  );
}
