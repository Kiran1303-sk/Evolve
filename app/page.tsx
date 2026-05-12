import Image from 'next/image';
import { Compass, Leaf, ShieldCheck, Sparkles, Waves } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';

const infrastructure = [
  {
    title: 'Harvest Grid',
    icon: Waves,
    desc: 'Water routing, drip-ready channels, and long-season support for low-stress farming.',
    stat: 'Irrigation Ready'
  },
  {
    title: 'Secure Zone',
    icon: ShieldCheck,
    desc: 'Structured entry zones and maintenance planning for predictable ownership.',
    stat: 'Guarded Access'
  },
  {
    title: 'Green Build',
    icon: Leaf,
    desc: 'Plantation-first plotting that keeps open airflow and calm visual density.',
    stat: 'Low Density'
  },
  {
    title: 'Road Logic',
    icon: Compass,
    desc: 'Planned internal roads make every pocket easier to navigate and maintain.',
    stat: 'Clean Layout'
  }
];

const gallery = [
  {
    src: '/images/new-image.png',
    title: 'Fresh Plantation View',
    desc: 'Newly added high-detail field visual converted from JPEG to PNG.'
  },
  {
    src: '/images/new-img2.png',
    title: 'Lifestyle Farming Frame',
    desc: 'New on-site imagery integrated into the experience with premium card treatment.'
  }
];

const sectionShowcase = [
  {
    src: '/images/section2.png',
    title: 'Designed for Natural Living',
    blurb: 'EVOLVE is equipped to support both lifestyle and land value through practical on-ground infrastructure and nature-first planning.',
    points: ['Drip irrigation', 'Water and electricity support', 'Security and maintenance options']
  },
  {
    src: '/images/section3.png',
    title: 'A Space That Grows With You',
    blurb: 'Build something personal, grow something green, or keep it untouched. The layout is intentionally flexible for different ownership goals.',
    points: ['Low-density layout', 'Clear land structuring', 'Farm-ready infrastructure']
  },
  {
    src: '/images/section4.png',
    title: "Part of Hyderabad's Future City Vision",
    blurb: 'Located within the FCDA influence zone, this location is aligned with future-focused urban development potential.',
    points: ['AI / Sports / Health zones', 'University hub proximity', 'High-growth destination potential']
  },
  {
    src: '/images/section5.png',
    title: 'Phase 1 Master Plan Overview',
    blurb: 'A 12-acre, limited-plots, low-density master plan with clearly organized facing options and planned internal roads.',
    points: ['Limited plots', 'East / West / North facing options', 'Structured phase layout']
  },
  {
    src: '/images/section6.png',
    title: 'Strong Connectivity',
    blurb: 'Strategically connected to key road and growth corridors for faster access to major urban and transport points.',
    points: ['10 mins to radial road', '20 mins to proposed rail terminal', '15 mins to Future City']
  },
  {
    src: '/images/section7.png',
    title: 'Let’s Connect',
    blurb: 'Dedicated visit support with direct call access and QR-based location sharing for quick and simple site planning.',
    points: ['Site visit assistance', 'Direct phone contact', 'Scan-to-location convenience']
  }
];

export default function HomePage() {
  const masterPlan = sectionShowcase[3];
  const connectivity = sectionShowcase[4];
  const contact = sectionShowcase[5];
  return (
    <>
      <Navbar />
      <main className="orbit-theme">
        <section id="home" className="neo-hero">
          <div className="neo-hero-bg">
            <Image src="/Mango-farm.jpg" alt="Mango farm landscape" fill priority sizes="100vw" className="object-cover object-center" />
          </div>
          <div className="neo-overlay" />
          <div className="section-wrap relative z-10 flex min-h-screen items-center py-28">
            <div className="hero-copy max-w-3xl">
              <p className="kicker">DSQUARE EVOLVE EXPERIENCE</p>
              <h1 className="mt-4 font-display text-5xl leading-tight md:text-7xl">A New Farm-Living Interface, Reimagined.</h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed md:text-lg">
                Step into an immersive land showcase built for modern buyers. Distinct visuals, layered depth, and clear pathways to explore, evaluate, and plan your visit.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#showcase" className="field-cta-primary">See New Gallery</a>
                <a href="#contact" className="field-cta-secondary">Book Site Visit</a>
              </div>
            </div>
          </div>
        </section>

        <section id="story" className="neo-band py-20 md:py-24">
          <div className="section-wrap grid gap-8 md:grid-cols-[1fr_1fr]">
            <div className="neo-panel">
              <p className="kicker text-[#C8A96B]">PROJECT STORY</p>
              <h2 className="mt-3 font-display text-4xl leading-tight text-[#1F4D3A] md:text-6xl">Farm-Style Plots Crafted for Living</h2>
              <p className="mt-5 text-base leading-relaxed text-[#222222] md:text-lg">
                EVOLVE is designed for buyers who want usable farmland, future growth potential, and practical infrastructure in one place. From plantation support to
                internal road planning, each section is built around real site utility.
              </p>
            </div>
            <div className="neo-stats">
              <div>
                <span>12 Acres</span>
                <p>Phase 1 planned footprint</p>
              </div>
              <div>
                <span>Low Density</span>
                <p>Limited plots with clear structuring</p>
              </div>
              <div>
                <span>FCDA Zone</span>
                <p>Aligned with future city development influence</p>
              </div>
            </div>
          </div>
        </section>

        <section id="showcase" className="neo-showcase py-20 md:py-24">
          <div className="section-wrap">
            <p className="kicker text-[#C8A96B]">NEW VISUAL GALLERY</p>
            <h2 className="mt-3 font-display text-4xl text-[#1F4D3A] md:text-6xl">Interactive Media Blocks</h2>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {gallery.map((item) => (
                <ScrollReveal key={item.src} className="h-full">
                  <article className="media-card">
                    <div className="media-card-image">
                      <Image src={item.src} alt={item.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-center" />
                    </div>
                    <div className="p-5">
                      <p className="media-pill"><Sparkles size={14} /> Enhanced View</p>
                      <h3 className="mt-3 font-display text-3xl text-[#1F4D3A]">{item.title}</h3>
                      <p className="mt-2 text-sm text-[#222222]">{item.desc}</p>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section id="highlights" className="neo-showcase py-20 md:py-24">
          <div className="section-wrap">
            <p className="kicker text-[#C8A96B]">PROJECT JOURNEY</p>
            <h2 className="mt-3 font-display text-4xl text-[#1F4D3A] md:text-6xl">Plans, Maps, and Future Vision</h2>
            <div className="mt-10 space-y-14">
              {sectionShowcase.slice(0, 3).map((item, idx) => (
                <ScrollReveal key={item.src}>
                  <article className="journey-strip grid gap-6 md:grid-cols-2 md:gap-10">
                    <div className={`journey-image ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                      <Image src={item.src} alt={item.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain object-center" />
                    </div>
                    <div className="self-center">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7A9B76]">Stage {idx + 1}</p>
                      <h3 className="mt-2 font-display text-3xl leading-tight text-[#1F4D3A] md:text-5xl">{item.title}</h3>
                      <p className="mt-4 text-[#222222]">{item.blurb}</p>
                      <ul className="mt-5 space-y-2 text-[#222222]">
                        {item.points.map((point) => (
                          <li key={point} className="field-list-item">{point}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="neo-band py-20 md:py-24">
          <div className="section-wrap">
            <p className="kicker text-[#C8A96B]">INFRASTRUCTURE</p>
            <h2 className="mt-3 font-display text-4xl text-[#1F4D3A] md:text-6xl">Core Capability Deck</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {infrastructure.map(({ title, icon: Icon, desc, stat }) => (
                <article key={title} className="infra-card">
                  <div className="feature-row-title">
                    <Icon size={19} />
                    <h3>{title}</h3>
                  </div>
                  <p className="mt-3 text-[#222222]">{desc}</p>
                  <span className="mt-4 inline-flex rounded-full border border-[#C8A96B]/35 px-3 py-1 text-xs font-bold uppercase tracking-[0.13em] text-[#C8A96B]">
                    {stat}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="master-plan" className="neo-contact py-20 md:py-24">
          <div className="section-wrap grid gap-8 md:grid-cols-[1fr_1fr] md:items-center">
            <div>
              <p className="kicker text-[#C8A96B]">MASTER PLAN</p>
              <h2 className="mt-3 font-display text-4xl text-[#1F4D3A] md:text-6xl">{masterPlan.title}</h2>
              <p className="mt-4 text-[#222222]">{masterPlan.blurb}</p>
              <ul className="mt-5 space-y-2 text-[#222222]">
                {masterPlan.points.map((point) => (
                  <li key={point} className="field-list-item">{point}</li>
                ))}
              </ul>
            </div>
            <div className="neo-image-wrap">
              <Image src={masterPlan.src} alt={masterPlan.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-center" />
            </div>
          </div>
        </section>

        <section id="connectivity" className="neo-band py-20 md:py-24">
          <div className="section-wrap grid gap-8 md:grid-cols-[1fr_1fr] md:items-center">
            <div>
              <p className="kicker text-[#C8A96B]">CONNECTIVITY MAP</p>
              <h2 className="mt-3 font-display text-4xl text-[#1F4D3A] md:text-6xl">{connectivity.title}</h2>
              <p className="mt-4 text-[#222222]">{connectivity.blurb}</p>
              <ul className="mt-5 space-y-2 text-[#222222]">
                {connectivity.points.map((point) => (
                  <li key={point} className="field-list-item">{point}</li>
                ))}
              </ul>
            </div>
            <div className="neo-image-wrap">
              <Image src={connectivity.src} alt={connectivity.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-center" />
            </div>
          </div>
        </section>

        <section id="contact" className="neo-contact py-20 md:py-24">
          <div className="section-wrap grid gap-8 md:grid-cols-[1fr_1fr] md:items-center">
            <div>
              <p className="kicker text-[#C8A96B]">CONTACT & QR</p>
              <h2 className="mt-3 font-display text-4xl text-[#1F4D3A] md:text-6xl">Plan Your EVOLVE Visit</h2>
              <p className="mt-4 text-[#222222]">{contact.blurb}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {contact.points.map((point) => (
                  <span key={point} className="field-tag">{point}</span>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="tel:+919999999999" className="field-cta-primary">Call Now</a>
              </div>
            </div>
            <div className="neo-image-wrap">
              <Image src={contact.src} alt={contact.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-center" />
            </div>
          </div>
        </section>
        <footer className="border-t border-[#C8A96B]/25 py-6 text-center text-sm font-medium text-[#1F4D3A]">
          © 2026 All Rights Reserved.
        </footer>
      </main>
    </>
  );
}

