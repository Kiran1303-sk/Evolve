'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
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
  '/papamango-farm.webp',
  '/images/section2.webp',
  '/images/section3.webp',
  '/images/section4.webp',
  '/images/section5.webp',
  '/images/section6.webp',
];

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

  const rootClass = useMemo(() => `lux-root ${night ? 'night-mode' : ''}`, [night]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.16, rootMargin: '0px 0px -8% 0px' }
    );

    const animateCounter = (counter: HTMLElement) => {
      const end = Number(counter.dataset.counter || 0);
      const suffix = counter.dataset.suffix || '';
      const startTime = performance.now();
      const duration = prefersReducedMotion ? 1 : 1600;

      const tick = (time: number) => {
        const progress = Math.min((time - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        counter.innerText = `${Math.floor(end * eased)}${suffix}`;

        if (progress < 1) {
          requestAnimationFrame(tick);
        }
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

    document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((el) => revealObserver.observe(el));
    document.querySelectorAll<HTMLElement>('[data-counter]').forEach((el) => counterObserver.observe(el));

    let frame = 0;
    const handleScrollFrame = () => {
      frame = 0;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      progressRef.current?.style.setProperty('transform', `scaleX(${progress})`);

      const hero = heroRef.current;
      const heroImage = hero?.querySelector<HTMLElement>('.hero-image');
      if (hero && heroImage) {
        const heroProgress = Math.min(Math.max(window.scrollY / hero.offsetHeight, 0), 1);
        heroImage.style.transform = `scale(${1.05 + heroProgress * 0.11})`;
      }

      document.querySelectorAll<HTMLElement>('.parallax-media').forEach((media) => {
        const rect = media.getBoundingClientRect();
        const localProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        const clamped = Math.min(Math.max(localProgress, 0), 1);
        media.style.transform = `translate3d(0, ${clamped * -10}%, 0)`;
      });
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(handleScrollFrame);
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

    document.addEventListener('click', handleAnchorClick);
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    handleScrollFrame();

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      revealObserver.disconnect();
      counterObserver.disconnect();
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
      >
        <div className="three-bg" aria-hidden="true" />

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
            <p className="hero-reveal kicker text-[#C8A96B]">
              PREMIUM FARMLAND / FARMHOUSES / PLANTATION INVESTMENT
            </p>
            <h1 className="hero-reveal hero-title">
              Own Nature. Build Legacy.
            </h1>
            <p className="hero-reveal hero-subtitle">
              A luxury countryside estate for premium farm plots, bespoke farmhouse living, managed
              plantations, and long-term land wealth.
            </p>
            <div className="hero-reveal hero-actions">
              <a href="#land-experience" className="field-cta-primary">
                Explore Lands <ChevronRight size={15} />
              </a>
              <a href="#contact" className="field-cta-secondary">
                Book Site Visit <CalendarCheck size={15} />
              </a>
            </div>
            <div className="hero-reveal hero-stats" aria-label="Estate highlights">
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
            </div>
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
            <div data-reveal>
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
            </div>
            <div data-reveal className="vision-stack">
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
            </div>
          </div>
        </section>

        <section id="features" className="lux-section features">
          <div className="section-wrap">
            <p className="kicker text-[#C8A96B]">PREMIUM FEATURES</p>
            <h2 className="section-title">The estate system behind effortless ownership.</h2>
            <div className="feature-grid">
              {features.map(({ icon: Icon, title, text }) => (
                <article
                  key={title}
                  data-reveal
                  className="feature-card"
                >
                  <span className="icon-shell">
                    <Icon size={21} />
                  </span>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
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
            <div data-reveal>
              <p className="kicker text-[#C8A96B]">PLANTATION & FARMING</p>
              <h2 className="section-title text-[#FAFAF8]">
                A portfolio that grows from the soil up.
              </h2>
              <p className="section-copy text-[#dfe5d6]">
                Every crop is chosen for a balance of beauty, resilience, lifestyle value, and
                long-term income potential.
              </p>
            </div>
            <div className="plantation-grid">
              {plantationOptions.map(({ icon: Icon, name, metric }) => (
                <article
                  key={name}
                  data-reveal
                  className="plant-card"
                >
                  <Icon size={20} />
                  <h3>{name}</h3>
                  <p>{metric}</p>
                </article>
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
                { src: '/feature.jpeg', label: 'Family garden and outdoor life' },
                { src: '/wide-green.jpeg', label: 'Wide green retreat views' },
              ].map((item, index) => (
                <figure
                  key={item.src}
                  data-reveal
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
                </figure>
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
                <figure
                  key={`${src}-${index}`}
                  data-reveal
                  className="masonry-item"
                >
                  <Image
                    src={src}
                    alt="Luxury farmland gallery view"
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    quality={68}
                    className="object-cover"
                  />
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="lux-section contact">
          <div className="section-wrap split-layout">
            <div data-reveal>
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
            </div>
            <form
              data-reveal
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
            </form>
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
