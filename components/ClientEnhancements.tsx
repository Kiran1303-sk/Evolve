'use client';

import { useEffect, useRef } from 'react';

export default function ClientEnhancements() {
  const frameRef = useRef(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const progressBar = document.querySelector<HTMLElement>('.scroll-progress-bar');
    const main = document.querySelector<HTMLElement>('.lux-root');

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    const animateCounter = (counter: HTMLElement) => {
      const end = Number(counter.dataset.counter || 0);
      const suffix = counter.dataset.suffix || '';

      if (prefersReducedMotion || isMobile) {
        counter.innerText = `${end}${suffix}`;
        return;
      }

      const startTime = performance.now();
      const duration = 1200;

      const tick = (time: number) => {
        const progress = Math.min((time - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        counter.innerText = `${Math.floor(end * eased)}${suffix}`;

        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
    };

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          animateCounter(entry.target as HTMLElement);
          counterObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => {
      if (isMobile || prefersReducedMotion) {
        el.classList.add('is-visible');
      } else {
        revealObserver.observe(el);
      }
    });
    document.querySelectorAll<HTMLElement>('[data-counter]').forEach((el) => counterObserver.observe(el));

    const handleScrollFrame = () => {
      frameRef.current = 0;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      progressBar?.style.setProperty('transform', `scaleX(${progress})`);

      if (isMobile || prefersReducedMotion) return;

      const hero = document.querySelector<HTMLElement>('.hero');
      const heroImage = hero?.querySelector<HTMLElement>('.hero-image');
      if (hero && heroImage) {
        const heroProgress = Math.min(Math.max(window.scrollY / hero.offsetHeight, 0), 1);
        heroImage.style.transform = `scale(${1.05 + heroProgress * 0.08})`;
      }

      document.querySelectorAll<HTMLElement>('.parallax-media').forEach((media) => {
        const rect = media.getBoundingClientRect();
        const localProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        const clamped = Math.min(Math.max(localProgress, 0), 1);
        media.style.transform = `translate3d(0, ${clamped * -8}%, 0)`;
      });
    };

    const onScroll = () => {
      if (!frameRef.current) frameRef.current = requestAnimationFrame(handleScrollFrame);
    };

    const handleAnchorClick = (event: MouseEvent) => {
      const link = (event.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
      if (!link) return;

      const hash = link.getAttribute('href');
      if (!hash || hash === '#') return;

      const target = document.querySelector<HTMLElement>(hash);
      if (!target) return;

      event.preventDefault();
      const headerHeight = document.querySelector('header nav')?.getBoundingClientRect().height ?? 0;
      const scrollTarget =
        hash === '#home'
          ? target
          : (target.querySelector<HTMLElement>(':scope > .section-wrap') ?? target);
      const top =
        scrollTarget.getBoundingClientRect().top +
        window.scrollY +
        (hash === '#home' ? 0 : -headerHeight - 18);

      window.scrollTo({ top, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      window.history.pushState(null, '', hash);
    };

    const onMove = (event: PointerEvent) => {
      if (!main || isMobile || prefersReducedMotion) return;
      main.style.setProperty('--cursor-x', `${(event.clientX / window.innerWidth) * 100}%`);
      main.style.setProperty('--cursor-y', `${(event.clientY / window.innerHeight) * 100}%`);
    };

    document.addEventListener('click', handleAnchorClick);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    window.addEventListener('pointermove', onMove, { passive: true });
    handleScrollFrame();

    return () => {
      cancelAnimationFrame(frameRef.current);
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.removeEventListener('pointermove', onMove);
      revealObserver.disconnect();
      counterObserver.disconnect();
    };
  }, []);

  return null;
}
