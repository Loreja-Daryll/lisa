/* Small scattered dot cluster, echoes the reference layout's playful accents
   but restrained to two brand colors instead of four. */
function DotCluster({ className = "" }) {
  return (
    <svg
      viewBox="0 0 120 60"
      className={className}
      width="120"
      height="60"
      aria-hidden="true"
    >
      <circle cx="8" cy="10" r="4" fill="none" stroke="#96A085" strokeWidth="1.5" />
      <circle cx="30" cy="8" r="4" fill="#D2A898" />
      <circle cx="52" cy="14" r="4" fill="none" stroke="#D2A898" strokeWidth="1.5" />
      <circle cx="16" cy="34" r="4" fill="none" stroke="#D2A898" strokeWidth="1.5" />
      <circle cx="38" cy="40" r="4" fill="#96A085" />
      <circle cx="60" cy="34" r="4" fill="none" stroke="#96A085" strokeWidth="1.5" />
    </svg>
  );
}

/* Thin curved line, a quiet echo of the reference's arc decorations */
function ArcLine({ className = "" }) {
  return (
    <svg viewBox="0 0 200 100" className={className} aria-hidden="true">
      <path
        d="M2 90 C 60 10, 140 10, 198 70"
        fill="none"
        stroke="#96A085"
        strokeWidth="1.5"
      />
    </svg>
  );
}

/* Two soft interlocking rings, standing in for the reference's "key" motif
   with something that reads as connection / attachment instead. */
function LinkedRingsIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <circle cx="24" cy="32" r="14" fill="none" stroke="#454B3C" strokeWidth="3" />
      <circle cx="42" cy="32" r="14" fill="none" stroke="#D2A898" strokeWidth="3" />
    </svg>
  );
}

/* Large organic blob that sits behind the portrait, in place of the
   reference's big flat circle, kept soft and low-contrast so it doesn't
   compete with the photo. */
function BlobBackdrop({ className = "" }) {
  return (
    <svg viewBox="0 0 400 460" className={className} aria-hidden="true">
      <path
        d="M84 40C150 -6 280 -6 340 60C400 126 396 250 356 330C316 410 220 460 130 434C40 408 -6 320 4 236C14 152 18 86 84 40Z"
        fill="#E4E6DD"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 md:pt-40 pb-20 md:pb-8 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 md:gap-8 items-center">
        {/* LEFT: copy */}
        <div className="max-w-xl relative">
          <div className="w-14 h-[3px] bg-sage-DEEP mb-6" />

          <p className="text-xs tracking-widest2 uppercase text-sage-DEEP mb-5">
            1:1 Coaching &middot; Group Coaching &middot; Workshops
          </p>

          <h1 className="relative font-display font-bold text-[2.75rem] leading-[1.05] md:text-[3.4rem] md:leading-[1.05] text-ink">
            The clarity you need
            <br />
            starts deep in your{" "}
            <em className="italic font-semibold text-sage-DEEP">patterns.</em>
            <DotCluster className="hidden md:block absolute -top-6 right-0 md:-right-6" />
          </h1>

          <p className="mt-6 text-base md:text-lg text-ink/70 leading-relaxed max-w-md">
            I help women recognize the attachment patterns quietly running their
            relationships, and move through menopause with clarity instead of
            chaos. No fixing yourself required &mdash; just a clearer way of seeing.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a
              href="#book"
              className="px-7 py-3.5 rounded-full bg-sage-DEEP text-cream text-sm font-medium tracking-wide hover:bg-ink transition-colors"
            >
              Book Your Free Consult
            </a>
            <a href="#services" className="flex items-center gap-3 group">
              <span className="w-10 h-10 rounded-full border border-sage-DEEP/40 flex items-center justify-center text-sage-DEEP group-hover:bg-sage-DEEP group-hover:text-cream transition-colors">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="text-sm text-ink/70 group-hover:text-ink transition-colors">See how it works</span>
            </a>
          </div>

          <div className="mt-10 w-full max-w-md h-px bg-blush/60" />

          {/* Repurposed "search bar" motif -> quick email capture teaser */}
          <form
            className="mt-8 flex items-stretch bg-cream border border-ink/10 rounded-full overflow-hidden max-w-md"
            onSubmit={(e) => {
              e.preventDefault();
              window.location.hash = "#book";
            }}
          >
            <span className="hidden sm:flex items-center px-6 text-sm font-medium text-ink whitespace-nowrap border-r border-ink/10 bg-sage-100/60">
              Free Consult
            </span>
            <input
              type="email"
              placeholder="Your email address..."
              className="flex-1 px-5 py-3.5 text-sm text-ink placeholder:text-ink/40 bg-transparent focus:outline-none min-w-0"
            />
            <button
              type="submit"
              aria-label="Go to booking"
              className="m-1.5 w-10 shrink-0 rounded-full bg-sage-DEEP text-cream flex items-center justify-center hover:bg-ink transition-colors"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
              </svg>
            </button>
          </form>

          <DotCluster className="mt-8 md:hidden" />
        </div>

        {/* RIGHT: portrait with decorative layer */}
        <div className="relative">
          <BlobBackdrop className="absolute -inset-6 md:-inset-10 w-[calc(100%+3rem)] h-[calc(100%+3rem)] -z-10" />

          <ArcLine className="hidden md:block absolute -top-10 left-6 w-40 h-20 text-sage-400" />

          <img
            src={`${import.meta.env.BASE_URL}images/lisa.jpg`}
            alt="Lisa Stefano, Life & Wellness Consultant"
            className="aspect-[4/5] md:aspect-[3/4] w-full rounded-[2rem] object-cover"
          />

          <span className="absolute -top-3 -right-3 w-4 h-4 rounded-full bg-blush" />
          <span className="absolute top-10 -right-6 w-3 h-3 rounded-full border-2 border-sage-400" />
          <span className="absolute -bottom-4 right-10 w-3 h-3 rounded-full bg-sage-400" />

          <LinkedRingsIcon className="absolute -bottom-8 -left-6 w-16 h-16 md:w-20 md:h-20" />

          <div className="absolute -bottom-5 left-16 md:left-20 bg-cream px-5 py-4 border border-ink/10 max-w-[220px] shadow-sm">
            <p className="font-display italic text-sm text-ink/80 leading-snug">
              &ldquo;Love doesn&rsquo;t disappear. Understanding it does.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
