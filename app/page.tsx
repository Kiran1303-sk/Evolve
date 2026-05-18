import Image from 'next/image';
import type { ReactNode } from 'react';
import ClientEnhancements from '@/components/ClientEnhancements';
import HeroControls from '@/components/HeroControls';
import Navbar from '@/components/Navbar';

type IconName =
  | 'arrow'
  | 'badge'
  | 'calendar'
  | 'chart'
  | 'check'
  | 'chevron'
  | 'droplets'
  | 'gem'
  | 'leaf'
  | 'map'
  | 'palm'
  | 'phone'
  | 'play'
  | 'shield'
  | 'sprout'
  | 'trees'
  | 'wheat';

function SimpleIcon({ name, size = 20, fill = false }: { name: IconName; size?: number; fill?: boolean }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: fill ? 'currentColor' : 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  };

  const paths: Record<IconName, ReactNode> = {
    arrow: <path d="M7 17 17 7M9 7h8v8" />,
    badge: <path d="M12 3v18M8 7h5a3 3 0 0 1 0 6H8h6a3 3 0 0 1 0 6H8" />,
    calendar: <path d="M8 2v4M16 2v4M4 9h16M6 4h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm3 10 2 2 4-5" />,
    chart: <path d="M4 19V5M4 19h16M8 16v-5M12 16V8M16 16v-3M20 16V6" />,
    check: <path d="m5 12 4 4L19 6" />,
    chevron: <path d="m9 18 6-6-6-6" />,
    droplets: <path d="M7 16a4 4 0 0 0 8 0c0-2.5-4-7-4-7s-4 4.5-4 7Zm8-7a3 3 0 0 0 6 0c0-1.9-3-5-3-5s-3 3.1-3 5Z" />,
    gem: <path d="M6 3h12l4 6-10 12L2 9l4-6Zm-4 6h20M8 3l4 18 4-18" />,
    leaf: <path d="M5 21c8-2 14-8 16-18C11 4 4 9 3 17c0 2 1 3 2 4Zm0 0c2-5 5-8 10-10" />,
    map: <path d="M12 21s7-5.3 7-12A7 7 0 0 0 5 9c0 6.7 7 12 7 12Zm0-9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />,
    palm: <path d="M12 22V10M5 8c3-4 7-4 10 0M19 8c-4-3-8-2-11 2M12 10c1-5 4-7 8-6M12 10C10 5 7 3 3 4" />,
    phone: <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />,
    play: <path d="m8 5 11 7-11 7V5Z" />,
    shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Zm-3-10 2 2 4-5" />,
    sprout: <path d="M12 22V12M12 12c0-5 4-8 9-8 0 5-3 8-9 8ZM12 14C7 14 4 11 4 6c5 0 8 3 8 8Z" />,
    trees: <path d="M10 21v-6H6l4-5H7l5-7 5 7h-3l4 5h-4v6M4 21h16" />,
    wheat: <path d="M12 22V2M8 6l4 4 4-4M8 11l4 4 4-4M8 16l4 4 4-4" />,
  };

  return <svg {...common}>{paths[name]}</svg>;
}

const features = [
  {
    icon: 'leaf',
    title: 'Ready Farm Plots',
    text: 'Clear, curated land parcels planned for immediate planting, private access, and future farmhouse development.',
  },
  {
    icon: 'gem',
    title: 'Luxury Farmhouses',
    text: 'Architecture-ready concepts with verandas, courtyards, pools, outdoor kitchens, and nature-first materials.',
  },
  {
    icon: 'trees',
    title: 'Premium Plantations',
    text: 'Mango, teak, sandalwood, coconut, guava, and medicinal plantation pathways for long-horizon value.',
  },
  {
    icon: 'droplets',
    title: 'Water Infrastructure',
    text: 'Irrigation planning, water bodies, bore support, and practical farm maintenance systems.',
  },
  {
    icon: 'shield',
    title: 'Gated Security',
    text: 'Controlled entries, estate roads, boundary clarity, and managed ownership support.',
  },
  {
    icon: 'wheat',
    title: 'Organic Farming',
    text: 'Seasonal cultivation guidance for families who want real produce and a slower weekend rhythm.',
  },
  {
    icon: 'calendar',
    title: 'Weekend Retreats',
    text: 'Designed for family stays, private gatherings, bonfire evenings, and calm countryside recovery.',
  },
  {
    icon: 'chart',
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
  { icon: 'palm', name: 'Mango', metric: 'Heritage orchards with seasonal income stories' },
  { icon: 'trees', name: 'Teak', metric: 'Long horizon timber value and estate character' },
  {
    icon: 'palm',
    name: 'Coconut',
    metric: 'Resilient plantation planning with lifestyle appeal',
  },
  {
    icon: 'sprout',
    name: 'Sandalwood',
    metric: 'Premium aromatic asset class for patient investors',
  },
  {
    icon: 'wheat',
    name: 'Organic Vegetables',
    metric: 'Family harvests and managed cultivation support',
  },
  {
    icon: 'leaf',
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
  return (
    <>
      <Navbar />
      <div className="scroll-progress-track" aria-hidden="true">
        <div className="scroll-progress-bar" />
      </div>
      <main className="lux-root">
        <ClientEnhancements />
        <div className="three-bg" aria-hidden="true" />

        <section id="home" className="lux-section hero">
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
                Explore Lands <SimpleIcon name="chevron" size={15} />
              </a>
              <a href="#contact" className="field-cta-secondary">
                Book Site Visit <SimpleIcon name="calendar" size={15} />
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
          <HeroControls />
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
                    <SimpleIcon name="check" size={14} />
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
              {features.map(({ icon, title, text }) => (
                <article
                  key={title}
                  data-reveal
                  className="feature-card"
                >
                  <span className="icon-shell">
                    <SimpleIcon name={icon as IconName} size={21} />
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
              {plantationOptions.map(({ icon, name, metric }) => (
                <article
                  key={name}
                  data-reveal
                  className="plant-card"
                >
                  <SimpleIcon name={icon as IconName} size={20} />
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
                <SimpleIcon name="badge" size={22} />
                <Counter end={24} suffix="%" />
                <p>Projected 5-year appreciation trend</p>
              </article>
              <article>
                <SimpleIcon name="chart" size={22} />
                <Counter end={3} />
                <p>Income channels: plantation, lease, stays</p>
              </article>
              <article>
                <SimpleIcon name="shield" size={22} />
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
                  <SimpleIcon name="play" size={13} fill />
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
                  WhatsApp Now <SimpleIcon name="phone" size={15} />
                </a>
                <a href="tel:+919999999999" className="field-cta-secondary dark">
                  Call Advisor <SimpleIcon name="arrow" size={15} />
                </a>
              </div>
              <div className="map-card">
                <SimpleIcon name="map" size={20} />
                <span>Future City Growth Corridor, Hyderabad Region</span>
              </div>
            </div>
            <form
              data-reveal
              className="contact-form"
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
                Request Consultation <SimpleIcon name="arrow" size={15} />
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
