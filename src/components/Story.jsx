export default function Story() {
  return (
    <section id="about" className="py-20 md:py-28 bg-cream">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-14 md:gap-16 items-center">
        <div className="max-w-lg">
          <p className="text-xs tracking-widest2 uppercase text-sage-DEEP mb-5">The Pattern</p>
          <h2 className="font-display text-3xl md:text-[2.5rem] leading-tight text-ink">
            It&rsquo;s time to change how you attach.
          </h2>
          <p className="mt-6 text-ink/70 leading-relaxed">
            Dismissive isn&rsquo;t secure. Anxious and fearful attachment aren&rsquo;t the
            same thing, even when they look alike from the outside. Every pattern
            you keep repeating in love started as a way to stay safe &mdash; and every
            one of them can be understood, and gently rewired.
          </p>
          <p className="mt-4 text-ink/70 leading-relaxed">
            Together, we&rsquo;ll trace where your patterns began, how they show up
            today, and what a secure, steady version of you actually looks like
            in relationships.
          </p>
          <a
            href="#services"
            className="mt-8 inline-block text-sm text-ink border-b border-ink/40 pb-1 hover:border-ink transition-colors"
          >
            Explore the coaching paths
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img
            src={`${import.meta.env.BASE_URL}images/pic1.png`}
            alt="Lifestyle photography"
            className="col-span-2 aspect-[16/10] rounded-sm object-cover w-full"
          />
          <img
            src={`${import.meta.env.BASE_URL}images/pic1.png`}
            alt="Lifestyle photography"
            className="aspect-square rounded-sm object-cover w-full"
          />
          <img
            src={`${import.meta.env.BASE_URL}images/pic1.png`}
            alt="Lifestyle photography"
            className="aspect-square rounded-sm object-cover w-full"
          />
        </div>
      </div>
    </section>
  );
}
