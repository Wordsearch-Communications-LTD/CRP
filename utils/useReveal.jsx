import { useEffect, useRef, useState } from "react";

export function useReveal(options = { threshold: 0.15 }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShown(true); io.disconnect(); }   // play once
    }, options);
    io.observe(el);
    return () => io.disconnect();
  }, [options]);

  return { ref, shown };
}
