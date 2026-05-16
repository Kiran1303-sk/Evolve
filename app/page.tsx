'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  BadgeIndianRupee,
  CalendarCheck,
  ChartNoAxesCombined,
  Check,
  ChevronRight,
  Droplets,
  Gem,
  Leaf,
  MapPinned,
  Moon,
  Palmtree,
  Phone,
  Play,
  ShieldCheck,
  Sprout,
  Sun,
  Trees,
  Volume2,
  VolumeX,
  Wheat,
} from 'lucide-react';
import Navbar from '@/components/Navbar';

const features = [
  {
    icon: Leaf,
    title: 'Ready Farm Plots',
    text: 'Clear, curated land parcels planned for immediate planting, private access, and future farmhouse development.',
  },
  {
    icon: Gem,
    title: 'Luxury Farmhouses',
    text: 'Architecture-ready concepts with verandas, courtyards, pools, outdoor kitchens, and nature-first materials.',
  },
  {
    icon: Trees,
    title: 'Premium Plantations',
    text: 'Mango, teak, sandalwood, coconut, guava, and medicinal plantation pathways for long-horizon value.',
  },
  {
    icon: Droplets,
    title: 'Water Infrastructure',
    text: 'Irrigation planning, water bodies, bore support, and practical farm maintenance systems.',
  },
  {
    icon: ShieldCheck,
    title: 'Gated Security',
    text: 'Controlled entries, estate roads, boundary clarity, and managed ownership support.',
  },
  {
    icon: Wheat,
    title: 'Organic Farming',
    text: 'Seasonal cultivation guidance for families who want real produce and a slower weekend rhythm.',
  },
  {
    icon: CalendarCheck,
    title: 'Weekend Retreats',
    text: 'Designed for family stays, private gatherings, bonfire evenings, and calm countryside recovery.',
  },
  {
    icon: ChartNoAxesCombined,
    title: 'Long-Term Growth',
    text: 'Land appreciation, plantation yield potential, and future-development adjacency in one estate story.',
  },
];

const landSlides = [
  { src: '/images/hero-farm.webp', label: 'Drone Estate View', zone: 'Farmhouse Zones' },
  { src: '/optimized/new-farm.webp', label: 'Green Parcel Grid', zone: 'Investment Plots' },
  { src: '/optimized/new-farm2.webp', label: 'Living Landscape', zone: 'Plantation Belt' },
  { src: '/images/section3.webp', label: 'Water & Pathways', zone: 'Nature Corridors' },
  { src: '/Mango-farm.webp', label: 'Fruit Plantation', zone: 'Yield Gardens' },
];

const plantationOptions = [
  { icon: Palmtree, name: 'Mango', metric: 'Heritage orchards with seasonal income stories' },
  { icon: Trees, name: 'Teak', metric: 'Long horizon timber value and estate character' },
  {
    icon: Palmtree,
    name: 'Coconut',
    metric: 'Resilient plantation planning with lifestyle appeal',
  },
  {
    icon: Sprout,
    name: 'Sandalwood',
    metric: 'Premium aromatic asset class for patient investors',
  },
  {
    icon: Wheat,
    name: 'Organic Vegetables',
    metric: 'Family harvests and managed cultivation support',
  },
  {
    icon: Leaf,
    name: 'Medicinal Plants',
    metric: 'Specialty crops for sustainable green portfolios',
  },
];

const timeline = [
  {
    year: '01',
    title: 'Acquire',
    text: 'Choose a legally clear farm plot aligned with your lifestyle and investment horizon.',
  },
  {
    year: '02',
    title: 'Plant',
    text: 'Activate a curated plantation mix with water, soil, and maintenance planning.',
  },
  {
    year: '03',
    title: 'Build',
    text: 'Create a private farmhouse retreat as the estate matures around you.',
  },
  {
    year: '04',
    title: 'Grow',
    text: 'Benefit from land appreciation, plantation potential, and premium countryside demand.',
  },
];

const testimonials = [
  {
    name: 'Arjun Reddy',
    role: 'NRI Investor',
    quote:
      'The estate gave me the rare combination of emotional peace and disciplined asset growth.',
  },
  {
    name: 'Priya Menon',
    role: 'Farmhouse Buyer',
    quote:
      'Our weekends now feel private, green, and genuinely restorative. The planning feels very premium.',
  },
  {
    name: 'Vikram S.',
    role: 'Plantation Investor',
    quote:
      'The plantation roadmap, site access, and advisory support made the decision feel confident.',
  },
  {
    name: 'Neha Kapoor',
    role: 'Weekend Home Buyer',
    quote: 'It feels like owning a piece of quiet luxury, not just a plot on paper.',
  },
];

const gallery = [
  '/images/hero-farm.webp',
  '/optimized/new-farm.webp',
  '/optimized/new-farm2.webp',
  '/new-farm3.webp',
  '/new-forming4.webp',
  '/optimized/papamango-farm.webp',
  '/images/section4.webp',
  '/images/section5.webp',
  '/images/section6.webp',
  '/Mango-farm.webp',
  '/guava_farm.webp',
  '/house.webp',
];

const fadeUp = {
  hidden: { opacity: 0, y: 38, filter: 'blur(10px)' },
  show: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.85 } },
};

function ThreeBackdrop({ night }: { night: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    let cancelled = false;
    let cleanup = () => {};

    const setupBackdrop = async () => {
      if (window.matchMedia('(max-width: 768px), (prefers-reduced-motion: reduce)').matches) return;

      const THREE = await import('three');
      if (cancelled || !canvasRef.current) return;

      const canvas = canvasRef.current;
      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.25));

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        42,
        window.innerWidth / window.innerHeight,
        0.1,
        100
      );
      camera.position.z = 7;

      const geometry = new THREE.BufferGeometry();
      const count = 420;
      const positions = new Float32Array(count * 3);

      for (let i = 0; i < count; i += 1) {
        positions[i * 3] = (Math.random() - 0.5) * 15;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 9;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const material = new THREE.PointsMaterial({
        color: night ? '#f1d99a' : '#c8a96b',
        size: 0.035,
        transparent: true,
        opacity: night ? 0.62 : 0.42,
      });
      const points = new THREE.Points(geometry, material);
      scene.add(points);

      const onResize = () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
      };

      onResize();
      window.addEventListener('resize', onResize);

      let frame = 0;
      const animate = () => {
        frame = requestAnimationFrame(animate);
        points.rotation.y += 0.0008;
        points.rotation.x += 0.00026;
        renderer.render(scene, camera);
      };
      animate();

      cleanup = () => {
        cancelAnimationFrame(frame);
        window.removeEventListener('resize', onResize);
        geometry.dispose();
        material.dispose();
        renderer.dispose();
      };
    };

    setupBackdrop();

    return () => {
      cancelled = true;
      cleanup();
    };
  }, [night]);

  return <canvas ref={canvasRef} className="three-bg" aria-hidden="true" />;
}

function Counter({ end, suffix = '' }: { end: number; suffix?: string }) {
  return (
    <span data-counter={end} data-suffix={suffix}>
      {end}
      {suffix}
    </span>
  );
}

export default function HomePage() {
  const progressRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);
  const mainRef = useRef<HTMLElement | null>(null);
  const audioRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);
  const [night, setNight] = useState(false);
  const [soundOn, setSoundOn] = useState(false);
  const [cursor, setCursor] = useState({ x: 50, y: 50 });

  const rootClass = useMemo(() => `lux-root ${night ? 'night-mode' : ''}`, [night]);

  useEffect(() => {
    let cleanup = () => {};
    let cancelled = false;

    const setupScrollEffects = async () => {
      const [{ default: gsap }, { ScrollTrigger }, { default: Lenis }] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
        import('lenis'),
      ]);

      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);
      const lenis = new Lenis({ duration: 0.78, smoothWheel: true, touchMultiplier: 1.08 });
      let raf = 0;
      const loop = (time: number) => {
        lenis.raf(time);
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);

      ScrollTrigger.scrollerProxy(document.body, {
        scrollTop(value) {
          if (arguments.length && typeof value === 'number') {
            lenis.scrollTo(value, { immediate: true });
          }
          return window.scrollY;
        },
        getBoundingClientRect() {
          return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
      });

      lenis.on('scroll', ScrollTrigger.update);

      gsap.utils.toArray<HTMLElement>('[data-counter]').forEach((counter) => {
        const end = Number(counter.dataset.counter || 0);
        const suffix = counter.dataset.suffix || '';
        gsap.fromTo(
          counter,
          { innerText: 0 },
          {
            innerText: end,
            duration: 2.2,
            snap: { innerText: 1 },
            ease: 'power3.out',
            scrollTrigger: { trigger: counter, start: 'top 86%' },
            onUpdate() {
              counter.innerText = `${Math.floor(Number(counter.innerText))}${suffix}`;
            },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 42, filter: 'blur(12px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 82%' },
          }
        );
      });

      gsap.to('.hero-image', {
        scale: 1.16,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

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
        const offset = hash === '#home' ? 0 : -headerHeight - 18;

        lenis.scrollTo(scrollTarget, { offset, duration: 1.05 });
        window.history.pushState(null, '', hash);
      };

      document.addEventListener('click', handleAnchorClick);

      gsap.utils.toArray<HTMLElement>('.parallax-media').forEach((media) => {
        gsap.to(media, {
          yPercent: -10,
          ease: 'none',
          scrollTrigger: { trigger: media, start: 'top bottom', end: 'bottom top', scrub: true },
        });
      });

      if (progressRef.current) {
        gsap.to(progressRef.current, {
          scaleX: 1,
          transformOrigin: 'left center',
          ease: 'none',
          scrollTrigger: { trigger: 'main', start: 'top top', end: 'bottom bottom', scrub: true },
        });
      }

      cleanup = () => {
        cancelAnimationFrame(raf);
        document.removeEventListener('click', handleAnchorClick);
        lenis.destroy();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        ScrollTrigger.scrollerProxy(document.body, {});
      };
    };

    setupScrollEffects();

    return () => {
      cancelled = true;
      cleanup();
    };
  }, []);

  useEffect(() => {
    const main = mainRef.current;
    if (!main || window.matchMedia('(max-width: 768px), (prefers-reduced-motion: reduce)').matches)
      return;

    let frame = 0;
    const onMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        main.style.setProperty('--cursor-x', `${(event.clientX / window.innerWidth) * 100}%`);
        main.style.setProperty('--cursor-y', `${(event.clientY / window.innerHeight) * 100}%`);
      });
    };
    window.addEventListener('pointermove', onMove);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('pointermove', onMove);
    };
  }, []);

  useEffect(() => {
    if (!soundOn) {
      gainRef.current?.gain.exponentialRampToValueAtTime(
        0.0001,
        (audioRef.current?.currentTime || 0) + 0.25
      );
      oscillatorRef.current?.stop((audioRef.current?.currentTime || 0) + 0.3);
      oscillatorRef.current = null;
      return;
    }

    const context = audioRef.current || new AudioContext();
    audioRef.current = context;
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = 'sine';
    oscillator.frequency.value = 96;
    gain.gain.value = 0.0001;
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start();
    gain.gain.exponentialRampToValueAtTime(0.018, context.currentTime + 0.5);
    oscillatorRef.current = oscillator;
    gainRef.current = gain;
  }, [soundOn]);

  return (
    <>
      <Navbar />
      <div className="scroll-progress-track" aria-hidden="true">
        <div ref={progressRef} className="scroll-progress-bar" />
      </div>
      <main
        ref={mainRef}
        className={rootClass}
        style={
          { '--cursor-x': `${cursor.x}%`, '--cursor-y': `${cursor.y}%` } as React.CSSProperties
        }
      >
        <ThreeBackdrop night={night} />

        <section id="home" ref={heroRef} className="lux-section hero">
          <Image
            src="/images/hero-farm.webp"
            alt="Premium green farmland estate from above"
            fill
            priority
            className="hero-image"
            sizes="100vw"
            quality={72}
          />
          <div className="hero-vignette" />
          <div className="cursor-light" aria-hidden="true" />
          <div className="section-wrap hero-content">
            <motion.p
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="kicker text-[#C8A96B]"
            >
              PREMIUM FARMLAND / FARMHOUSES / PLANTATION INVESTMENT
            </motion.p>
            <motion.h1 initial="hidden" animate="show" variants={fadeUp} className="hero-title">
              Own Nature. Build Legacy.
            </motion.h1>
            <motion.p initial="hidden" animate="show" variants={fadeUp} className="hero-subtitle">
              A luxury countryside estate for premium farm plots, bespoke farmhouse living, managed
              plantations, and long-term land wealth.
            </motion.p>
            <motion.div initial="hidden" animate="show" variants={fadeUp} className="hero-actions">
              <a href="#land-experience" className="field-cta-primary">
                Explore Lands <ChevronRight size={15} />
              </a>
              <a href="#contact" className="field-cta-secondary">
                Book Site Visit <CalendarCheck size={15} />
              </a>
            </motion.div>
            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="hero-stats"
              aria-label="Estate highlights"
            >
              <article className="glass-card">
                <Counter end={120} suffix="+" />
                <p>Curated acres pipeline</p>
              </article>
              <article className="glass-card">
                <Counter end={18} suffix="%" />
                <p>ROI potential outlook</p>
              </article>
              <article className="glass-card">
                <Counter end={6} />
                <p>Plantation categories</p>
              </article>
              <article className="glass-card">
                <Counter end={4} />
                <p>Farmhouse formats</p>
              </article>
            </motion.div>
          </div>
          <div className="hero-controls" aria-label="Experience controls">
            <button
              type="button"
              onClick={() => setSoundOn((value) => !value)}
              aria-label="Toggle ambient sound"
            >
              {soundOn ? <Volume2 size={17} /> : <VolumeX size={17} />}
            </button>
            <button
              type="button"
              onClick={() => setNight((value) => !value)}
              aria-label="Toggle day night view"
            >
              {night ? <Sun size={17} /> : <Moon size={17} />}
            </button>
          </div>
        </section>

        <section id="vision" className="lux-section vision">
          <div className="section-wrap split-layout">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
            >
              <p className="kicker text-[#C8A96B]">ABOUT / VISION</p>
              <h2 className="section-title">Where wealth slows down and life gets deeper.</h2>
              <p className="section-copy">
                Evolve is designed as a living asset: a place where families reconnect with open
                skies, investors hold scarce green land, and every acre matures through farming,
                architecture, and patient stewardship.
              </p>
              <div className="vision-points">
                {[
                  'Farmhouse living',
                  'Organic farming',
                  'Investment growth',
                  'Peaceful lifestyle',
                ].map((item) => (
                  <span key={item}>
                    <Check size={14} />
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="vision-stack"
            >
              <figure className="image-frame parallax-media">
                <Image
                  src="/optimized/new-farm2.webp"
                  alt="Open farmland with premium countryside texture"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  quality={70}
                  className="object-cover"
                />
              </figure>
              <div className="floating-proof glass-card">
                <Counter end={42} suffix="%" />
                <p>Green cover planned across lifestyle and plantation zones</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="features" className="lux-section features">
          <div className="section-wrap">
            <p className="kicker text-[#C8A96B]">PREMIUM FEATURES</p>
            <h2 className="section-title">The estate system behind effortless ownership.</h2>
            <div className="feature-grid">
              {features.map(({ icon: Icon, title, text }) => (
                <motion.article
                  key={title}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.16 }}
                  variants={fadeUp}
                  className="feature-card"
                >
                  <span className="icon-shell">
                    <Icon size={21} />
                  </span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="land-experience" className="lux-section land-exp">
          <div className="section-wrap land-intro">
            <p className="kicker text-[#C8A96B]">INTERACTIVE LAND EXPERIENCE</p>
            <h2 className="section-title">A private estate preview in motion.</h2>
            <p className="section-copy">
              Scroll through drone-style land views, plotted zones, plantation corridors, and calm
              water-led landscapes.
            </p>
          </div>
          <div className="horizontal-viewport" aria-label="Land preview carousel">
            <div className="horizontal-track">
              {[...landSlides, ...landSlides].map((slide, index) => (
                <figure key={`${slide.src}-${index}`} className="land-slide">
                  <span className="land-slide-index">0{(index % landSlides.length) + 1}</span>
                  <Image
                    src={slide.src}
                    alt={slide.label}
                    fill
                    sizes="(max-width: 768px) 82vw, 42vw"
                    quality={68}
                    className="object-cover"
                  />
                  <figcaption>
                    <strong>{slide.label}</strong>
                    <em>{slide.zone}</em>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="farming" className="lux-section farming-dark">
          <div className="section-wrap split-layout">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <p className="kicker text-[#C8A96B]">PLANTATION & FARMING</p>
              <h2 className="section-title text-[#FAFAF8]">
                A portfolio that grows from the soil up.
              </h2>
              <p className="section-copy text-[#dfe5d6]">
                Every crop is chosen for a balance of beauty, resilience, lifestyle value, and
                long-term income potential.
              </p>
            </motion.div>
            <div className="plantation-grid">
              {plantationOptions.map(({ icon: Icon, name, metric }) => (
                <motion.article
                  key={name}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="plant-card"
                >
                  <Icon size={20} />
                  <h3>{name}</h3>
                  <p>{metric}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="lifestyle" className="lux-section lifestyle">
          <div className="section-wrap">
            <p className="kicker text-[#C8A96B]">FARMHOUSE LIFESTYLE</p>
            <h2 className="section-title">
              Weekend living, without leaving sophistication behind.
            </h2>
            <div className="lifestyle-grid">
              {[
                { src: '/house.webp', label: 'Private farmhouse inspiration' },
                { src: '/images/section2.webp', label: 'Family garden and outdoor life' },
                { src: '/images/section4.webp', label: 'Wide green retreat views' },
              ].map((item, index) => (
                <motion.figure
                  key={item.src}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className={`image-frame lifestyle-card ${index === 0 ? 'large' : ''}`}
                >
                  <Image
                    src={item.src}
                    alt={item.label}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    quality={70}
                    className="object-cover"
                  />
                  <figcaption>{item.label}</figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </section>

        <section id="investment" className="lux-section invest">
          <div className="section-wrap">
            <p className="kicker text-[#C8A96B]">INVESTMENT INSIGHT</p>
            <h2 className="section-title">Land appreciation with a living income story.</h2>
            <div className="invest-grid">
              <article>
                <BadgeIndianRupee size={22} />
                <Counter end={24} suffix="%" />
                <p>Projected 5-year appreciation trend</p>
              </article>
              <article>
                <ChartNoAxesCombined size={22} />
                <Counter end={3} />
                <p>Income channels: plantation, lease, stays</p>
              </article>
              <article>
                <ShieldCheck size={22} />
                <Counter end={100} suffix="%" />
                <p>Ownership transparency focus</p>
              </article>
            </div>
            <div className="timeline">
              {timeline.map((item) => (
                <article key={item.title} data-reveal>
                  <span>{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="lux-section testimonials">
          <div className="section-wrap">
            <p className="kicker text-[#C8A96B]">CLIENT STORIES</p>
            <h2 className="section-title">Quiet confidence from people who chose green wealth.</h2>
          </div>
          <div className="testimonial-marquee">
            {[...testimonials, ...testimonials].map((item, index) => (
              <article key={`${item.name}-${index}`} className="testimonial-card">
                <div className="video-dot">
                  <Play size={13} fill="currentColor" />
                </div>
                <p>“{item.quote}”</p>
                <h3>{item.name}</h3>
                <span>{item.role}</span>
              </article>
            ))}
          </div>
        </section>

        <section id="gallery" className="lux-section gallery">
          <div className="section-wrap">
            <p className="kicker text-[#C8A96B]">CINEMATIC GALLERY</p>
            <h2 className="section-title">Land, lifestyle, and legacy in frames.</h2>
            <div className="masonry-grid">
              {gallery.map((src, index) => (
                <motion.figure
                  key={`${src}-${index}`}
                  initial={{ opacity: 0, y: 28, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className={`masonry-item ${index % 5 === 0 ? 'wide' : ''} ${index % 4 === 0 ? 'tall' : ''}`}
                >
                  <Image
                    src={src}
                    alt="Luxury farmland gallery view"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={68}
                    className="object-cover"
                  />
                </motion.figure>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="lux-section contact">
          <div className="section-wrap split-layout">
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <p className="kicker text-[#C8A96B]">CONTACT / BOOKING</p>
              <h2 className="section-title">Book a private site visit.</h2>
              <p className="section-copy">
                Speak with the advisory team for plot availability, plantation plans, farmhouse
                concepts, and guided estate previews.
              </p>
              <div className="contact-points">
                <a href="https://wa.me/919999999999" className="field-cta-primary">
                  WhatsApp Now <Phone size={15} />
                </a>
                <a href="tel:+919999999999" className="field-cta-secondary dark">
                  Call Advisor <ArrowUpRight size={15} />
                </a>
              </div>
              <div className="map-card">
                <MapPinned size={20} />
                <span>Future City Growth Corridor, Hyderabad Region</span>
              </div>
            </motion.div>
            <motion.form
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              className="contact-form"
              onSubmit={(event) => event.preventDefault()}
            >
              <input type="text" placeholder="Full Name" aria-label="Full Name" />
              <input type="tel" placeholder="Phone Number" aria-label="Phone Number" />
              <input type="email" placeholder="Email Address" aria-label="Email Address" />
              <select defaultValue="" aria-label="Interest Type">
                <option value="" disabled>
                  Interest Type
                </option>
                <option>Farm Plot Purchase</option>
                <option>Farmhouse Construction</option>
                <option>Plantation Investment</option>
                <option>Private Site Visit</option>
              </select>
              <textarea rows={4} placeholder="Message" aria-label="Message" />
              <button type="submit" className="field-cta-primary">
                Request Consultation <ArrowUpRight size={15} />
              </button>
            </motion.form>
          </div>
        </section>

        <footer className="lux-footer">
          <div className="section-wrap footer-inner">
            <p>© 2026 EVOLVE by DSQUARE. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
