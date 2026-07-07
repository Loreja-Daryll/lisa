import AbstractArt from "./AbstractArt";

export default function FinalCTA() {
  return (
    <section id="book" className="py-20 md:py-28 bg-sage-100">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-14 md:gap-16 items-center">

        <img
            src="/public/images/review.jpg"
            alt="Lisa Stefano, Life & Wellness Consultant"
            className="aspect-[4/5] md:aspect-[3/4] w-full rounded-[2rem] object-cover"
          />

        <div className="max-w-lg order-1 md:order-2">
          <p className="text-xs tracking-widest2 uppercase text-sage-DEEP mb-5">The Invitation</p>
          <h2 className="font-display text-3xl md:text-[2.5rem] leading-tight text-ink">
            Let&rsquo;s rewrite your story.
          </h2>
          <p className="mt-6 text-ink/70 leading-relaxed">
            A free 30-minute consult is the first step, no pressure, no
            script. Just a conversation about where you are, and whether we&rsquo;re
            the right fit to work through it together.
          </p>

          {/* TODO(Daryll): replace href with the real Calendly link, e.g.
              https://calendly.com/{lisa-stefano-slug}/30min */}
          <a
            href="#"
            className="mt-8 inline-block px-8 py-4 bg-ink text-cream text-sm tracking-wide hover:bg-sage-DEEP transition-colors"
          >
            Book Your Free Consult
          </a>

          <p className="mt-5 text-xs text-ink/50">
            Prefer email? Reach out directly and we&rsquo;ll find a time that works.
          </p>
        </div>
      </div>
    </section>
  );
}
