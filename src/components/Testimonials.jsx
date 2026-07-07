const stories = [
  {
    name: "J.",
    role: "1:1 Coaching client",
    quote:
      "I spent years thinking I just picked the wrong people. Lisa helped me see the pattern underneath it \u2014 and actually change it.",
  },
  {
    name: "K.",
    role: "Group Coaching client",
    quote:
      "Hearing other women describe the exact same anxious spirals I have made me feel so much less broken. This work changed that.",
  },
  {
    name: "M.",
    role: "12-Week Plan client",
    quote:
      "The menopause support alone was worth it. I finally understood what was hormonal versus what was me \u2014 and stopped blaming myself.",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-xs tracking-widest2 uppercase text-sage-DEEP mb-4">The Proof</p>
          <h2 className="font-display text-3xl md:text-4xl text-ink">Success stories.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((s) => (
            <figure
              key={s.name}
              className="bg-sage-50 p-8 flex flex-col justify-between border border-sage-200/60"
            >
              <blockquote className="font-display italic text-lg leading-relaxed text-ink/85">
                &ldquo;{s.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 text-sm text-ink/60">
                <span className="text-ink font-medium">{s.name}</span> &middot; {s.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
