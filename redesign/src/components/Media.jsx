import { useEffect, useRef, useState } from "react";

// Shows a poster image; if a video exists, it plays only while visible on screen.
export default function Media({ image, video, alt, className = "" }) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!video) return;
    const el = ref.current;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.35 });
    io.observe(el);
    return () => io.disconnect();
  }, [video]);

  useEffect(() => {
    const v = ref.current?.querySelector("video");
    if (!v) return;
    if (inView) v.play().catch(() => {});
    else v.pause();
  }, [inView]);

  const reduce =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <div ref={ref} className={`media ${className}`}>
      {video && !reduce ? (
        <video src={video} poster={image} muted loop playsInline preload="none" aria-label={alt} />
      ) : (
        <img src={image} alt={alt} loading="lazy" decoding="async" />
      )}
    </div>
  );
}
