const socials = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-cream/70 py-14">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
          <div>
            <p className="font-display text-xl text-cream">Lisa Stefano</p>
            <p className="text-xs tracking-widest2 uppercase text-cream/50 mt-1">
              Life &amp; Wellness Consulting
            </p>
            <p className="text-sm text-cream/60 mt-5 max-w-xs leading-relaxed">
              Breaking toxic relationship patterns and navigating menopause,
              one honest conversation at a time.
            </p>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="text-xs tracking-widest2 uppercase text-cream/40 mb-4">Explore</p>
              <ul className="space-y-2 text-sm">
                <li><a href="#services" className="hover:text-cream transition-colors">Services</a></li>
                <li><a href="#about" className="hover:text-cream transition-colors">About</a></li>
                <li><a href="#menopause" className="hover:text-cream transition-colors">Menopause</a></li>
                <li><a href="#reviews" className="hover:text-cream transition-colors">Reviews</a></li>
              </ul>
            </div>
            <div>
              <p className="text-xs tracking-widest2 uppercase text-cream/40 mb-4">Connect</p>
              <ul className="space-y-2 text-sm">
                {/* TODO(Daryll): swap in real social + support email links */}
                {socials.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} className="hover:text-cream transition-colors">{s.label}</a>
                  </li>
                ))}
                <li><a href="mailto:hello@example.com" className="hover:text-cream transition-colors">Email</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-cream/10 flex flex-col md:flex-row justify-between gap-3 text-xs text-cream/40">
          <p>&copy; {new Date().getFullYear()} Lisa Stefano Life &amp; Wellness Consulting. All rights reserved.</p>
          <p>Site by The VA Library</p>
        </div>
      </div>
    </footer>
  );
}
