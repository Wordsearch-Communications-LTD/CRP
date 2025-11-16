"use client";

import { useEffect, useRef } from "react";

const observerOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -10% 0px",
};

export default function ScrollReveal({
  as: Component = "div",
  direction = "left",
  className = "",
  children,
  once = true,
  delay = 0,
  style,
  ...props
}) {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("scroll-reveal--visible");
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          entry.target.classList.remove("scroll-reveal--visible");
        }
      });
    }, observerOptions);

    observer.observe(node);

    return () => observer.disconnect();
  }, [once]);

  const directionClass =
    direction === "right" ? "scroll-reveal--from-right" : "scroll-reveal--from-left";

  return (
    <Component
      ref={ref}
      className={`scroll-reveal ${directionClass} ${className}`.trim()}
      style={{ transitionDelay: `${delay}ms`, ...style }}
      {...props}
    >
      {children}
    </Component>
  );
}
