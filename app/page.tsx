import Image from 'next/image';
import { Compass, Facebook, Instagram, Leaf, Linkedin, ShieldCheck, Sparkles, Waves, Youtube } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';
import HeroSlideshow from '@/components/HeroSlideshow';

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
    title: 'Plantation Entrance View',
    desc: 'Tree-lined arrival stretch with clear internal access and natural shade pockets.'
  },
  {
    src: '/images/new-img2.png',
    title: 'Lifestyle Farming Zone',
    desc: 'Prepared land pockets designed for weekend farming, plantation, and long-term value.'
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
    title: "Let's Connect",
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
          <HeroSlideshow />
        </section>

        <section id="story" className="neo-band py-8 md:py-10">
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

        <section id="showcase" className="neo-showcase py-8 md:py-10">
          <div className="section-wrap">
            <p className="kicker text-[#C8A96B]">NEW VISUAL GALLERY</p>
            <h2 className="mt-3 font-display text-4xl text-[#1F4D3A] md:text-6xl">Live Site Visuals</h2>
            <div className="split-scroll-grid mt-8">
              <div className="split-scroll-text">
                {gallery.map((item) => (
                  <article key={item.title} className="split-scroll-card">
                    <p className="media-pill"><Sparkles size={14} /> Enhanced View</p>
                    <h3 className="mt-3 font-display text-3xl text-[#1F4D3A] md:text-4xl">{item.title}</h3>
                    <p className="mt-3 text-base leading-relaxed text-[#222222]">{item.desc}</p>
                  </article>
                ))}
              </div>
              <div className="split-scroll-media">
                <div className="split-scroll-sticky">
                  <Image
                    src={gallery[0].src}
                    alt={gallery[0].title}
                    fill
                    sizes="(max-width: 768px) 100vw, 45vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="highlights" className="neo-showcase neo-cover-section py-8 md:py-10">
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

        <section id="features" className="neo-band py-8 md:py-10">
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

        <section id="master-plan" className="neo-contact py-8 md:py-10">
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

        <section id="connectivity" className="neo-band py-8 md:py-10">
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

        <section id="contact" className="neo-contact py-8 md:py-10">
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
        <footer className="border-t border-[#C8A96B]/25 py-6">
          <div className="section-wrap flex flex-col items-center gap-4 text-center text-sm font-medium text-[#1F4D3A]">
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="transition-opacity hover:opacity-70"><Instagram size={18} /></a>
              <a href="#" aria-label="Facebook" className="transition-opacity hover:opacity-70"><Facebook size={18} /></a>
              <a href="#" aria-label="YouTube" className="transition-opacity hover:opacity-70"><Youtube size={18} /></a>
              <a href="#" aria-label="LinkedIn" className="transition-opacity hover:opacity-70"><Linkedin size={18} /></a>
            </div>
            <p>© 2026 All Rights Reserved.</p>
          </div>
        </footer>
      </main>
    </>
  );
}
