import { useEffect, useState } from "react";

const links = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Menopause", href: "#menopause" },
  { label: "Reviews", href: "#reviews" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-cream/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(28,27,23,0.08)]" : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 md:px-10 py-4 md:py-5">
        <a href="#top" className="font-display text-lg md:text-xl tracking-wide text-ink">
          Lisa Stefano
          <span className="hidden md:inline text-[0.6rem] tracking-widest2 uppercase text-sage-DEEP ml-3 align-middle">
            Life &amp; Wellness Consulting
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-ink/80 hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#book"
            className="px-5 py-2.5 bg-ink text-cream text-sm tracking-wide hover:bg-sage-DEEP transition-colors"
          >
            Book a Call
          </a>
        </div>

        <button
          className="md:hidden p-2 -mr-2 text-ink"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="block w-6 h-px bg-ink mb-1.5" />
          <span className="block w-6 h-px bg-ink mb-1.5" />
          <span className="block w-4 h-px bg-ink" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-cream border-t border-ink/10 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-base text-ink/80"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#book"
            onClick={() => setOpen(false)}
            className="px-5 py-3 bg-ink text-cream text-sm text-center tracking-wide"
          >
            Book a Call
          </a>
        </div>
      )}
    </header>
  );
}
