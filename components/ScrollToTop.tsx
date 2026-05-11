"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const getScrollTop = () =>
      window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

    const handleScroll = () => {
      const hero = document.getElementById("hero-section");
      const heroBottom = hero?.getBoundingClientRect().bottom ?? 0;
      const hasPassedHero = heroBottom <= 0;
      setIsVisible(getScrollTop() > 120 && hasPassedHero);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const behavior: ScrollBehavior = prefersReducedMotion ? "auto" : "smooth";

    window.scrollTo({ top: 0, behavior });
    document.documentElement.scrollTo({ top: 0, behavior });
    document.body.scrollTo({ top: 0, behavior });

    // Fallback for browsers/environments where smooth options are ignored.
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };

  return (
    <button
      aria-label="Scroll to top"
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 z-[999] rounded-full border border-sand/35 bg-black/70 p-3 text-sand shadow-[0_12px_28px_rgba(0,0,0,0.45)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-bronze/60 hover:text-bronze focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bronze/60 md:bottom-8 md:right-8 ${
        isVisible ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
      type="button"
    >
      <ChevronUp size={20} strokeWidth={2.5} />
    </button>
  );
}
