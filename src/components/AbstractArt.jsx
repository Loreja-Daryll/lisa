// Stand-in for lifestyle photography until real photos are supplied.
// Swap the <div className="relative ..."> below for an <img src="..." /> when photos are ready.
// Palette + blob positions are deliberately varied per `variant` so repeated placeholders
// don't look identical across the page.

const variants = {
  sunset: {
    bg: "linear-gradient(160deg, #E4E6DD 0%, #C7CBBB 45%, #96A085 100%)",
    blobs: [
      { color: "#D2A898", top: "-10%", left: "55%", size: "70%" },
      { color: "#454B3C", top: "60%", left: "-15%", size: "60%" },
    ],
  },
  sage: {
    bg: "linear-gradient(180deg, #96A085 0%, #7C8371 60%, #454B3C 100%)",
    blobs: [
      { color: "#E4E6DD", top: "10%", left: "-10%", size: "55%" },
      { color: "#D2A898", top: "65%", left: "60%", size: "50%" },
    ],
  },
  blush: {
    bg: "linear-gradient(150deg, #FAF8F3 0%, #E8CCC0 55%, #D2A898 100%)",
    blobs: [
      { color: "#7C8371", top: "-5%", left: "60%", size: "60%" },
      { color: "#C7CBBB", top: "55%", left: "-10%", size: "55%" },
    ],
  },
  deep: {
    bg: "linear-gradient(170deg, #454B3C 0%, #1C1B17 100%)",
    blobs: [
      { color: "#7C8371", top: "-15%", left: "50%", size: "75%" },
      { color: "#D2A898", top: "60%", left: "-10%", size: "45%" },
    ],
  },
};

export default function AbstractArt({ variant = "sunset", className = "", label }) {
  const v = variants[variant] ?? variants.sunset;
  return (
    <div
      className={`relative overflow-hidden isolate ${className}`}
      style={{ background: v.bg }}
      role="img"
      aria-label={label ?? "Decorative artwork"}
    >
      {v.blobs.map((b, i) => (
        <div
          key={i}
          className="absolute rounded-full blur-3xl opacity-70"
          style={{
            background: b.color,
            top: b.top,
            left: b.left,
            width: b.size,
            height: b.size,
          }}
        />
      ))}
      <div className="grain absolute inset-0" />
    </div>
  );
}
