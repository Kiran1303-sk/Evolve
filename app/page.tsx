import Image from 'next/image';
import { Droplets, ShieldCheck, Sprout, Trees, Route, WavesLadder } from 'lucide-react';
import Navbar from '@/components/Navbar';
import ScrollReveal from '@/components/ScrollReveal';

const features = [
  {
    title: 'Rainwater Harvesting',
    icon: Droplets,
    desc: 'Smart water capture design to support long-term sustainability.',
    tag: 'Eco Utility'
  },
  {
    title: 'Internal Roads',
    icon: Route,
    desc: 'Planned internal access for smooth movement within the project.',
    tag: 'Mobility'
  },
  {
    title: 'Plantation Support',
    icon: Sprout,
    desc: 'Plantation-ready setup for nature-first lifestyle development.',
    tag: 'Green Living'
  },
  {
    title: 'Security Infrastructure',
    icon: ShieldCheck,
    desc: 'Structured safety layer that adds confidence to ownership.',
    tag: 'Safety'
  },
  {
    title: 'Irrigation Systems',
    icon: WavesLadder,
    desc: 'Integrated irrigation planning for efficient land maintenance.',
    tag: 'Water Management'
  },
  {
    title: 'Walking Trails',
    icon: Trees,
    desc: 'Leisure paths designed for wellness, calm, and daily activity.',
    tag: 'Lifestyle'
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
    title: 'Lets Connect',
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
      <main>
        <section id="home" className="farm-hero relative flex min-h-screen items-end overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/bg.png" alt="Luxury farm landscape" fill priority sizes="100vw" className="object-cover object-center" />
          </div>
          <div className="farm-hero-overlay absolute inset-0" />

          <div className="section-wrap relative z-10 pb-14 pt-32 md:pb-16">
            <div className="max-w-3xl">
              <span className="farm-eyebrow">FCDA Influence Zone</span>
              <h1 className="mt-4 font-display text-5xl leading-tight text-white md:text-7xl">A Modern Farm Template for Purposeful Land Ownership</h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-sand/90 md:text-lg">
                EVOLVE is built on a simple idea: land should not just be owned, it should be lived. We combine open nature, practical infrastructure,
                and future-ready planning for a farm-first lifestyle.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#features" className="farm-btn-primary">Explore Features</a>
                <a href="#contact" className="farm-btn-secondary">Book Site Visit</a>
              </div>
            </div>
          </div>
        </section>

        <section id="story" className="section-wrap py-20 md:py-24">
          <div className="farm-story-grid grid gap-6 md:grid-cols-3">
            <article className="farm-story-card md:col-span-2">
              <h2 className="font-display text-4xl leading-tight text-white md:text-5xl">Farm-Style Plots Crafted for Living</h2>
              <p className="mt-4 text-sand/85">
                In a time where spaces are shrinking, EVOLVE brings back openness, nature, and a more mindful way of thinking. Plant, grow, build, or
                simply hold land that evolves with time.
              </p>
            </article>
            <article className="farm-story-card">
              <p className="text-xs uppercase tracking-[0.18em] text-bronze">Project Lens</p>
              <p className="mt-3 text-sand/85">12-acre phase, limited plots, low-density planning, and farm-ready utility support focused on long-term value.</p>
            </article>
          </div>
        </section>

        <section id="highlights" className="section-wrap pb-20 md:pb-24">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-4xl leading-tight text-white md:text-5xl">Project Highlights</h2>
              <p className="mt-3 max-w-2xl text-sand/75">Your current project data, remapped into a modern farm-template layout.</p>
            </div>
          </div>

          <div className="space-y-8">
            {sectionShowcase.slice(0, 3).map((item, idx) => (
              <ScrollReveal key={item.src} className="farm-highlight-shell overflow-hidden rounded-[28px] border border-sand/20">
                <div className="grid md:grid-cols-2">
                  <div className={`relative min-h-[280px] ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                    <Image src={item.src} alt={item.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                  </div>
                  <div className="p-6 md:p-10">
                    <span className="farm-eyebrow">Highlight {idx + 1}</span>
                    <h3 className="mt-3 font-display text-3xl leading-tight text-white md:text-4xl">{item.title}</h3>
                    <p className="mt-4 text-sand/80">{item.blurb}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.points.map((point) => (
                        <span key={point} className="farm-chip">{point}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <section id="features" className="section-wrap pb-20 md:pb-24">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-4xl leading-tight text-white md:text-5xl">Infrastructure Features</h2>
              <p className="mt-3 max-w-2xl text-sand/75">Built for lifestyle comfort and long-term value with practical, farm-oriented infrastructure.</p>
            </div>
            <div className="rounded-full border border-bronze/40 bg-bronze/10 px-4 py-2 text-xs tracking-[0.14em] text-bronze md:text-sm">PREMIUM INFRA READY</div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ title, icon: Icon, desc, tag }) => (
              <article key={title} className="farm-feature-card group rounded-2xl border border-sand/20 p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="feature-icon-wrap">
                    <Icon className="text-bronze transition duration-300 group-hover:scale-110" size={22} />
                  </div>
                  <span className="rounded-full border border-sand/20 bg-black/20 px-3 py-1 text-[11px] uppercase tracking-wider text-sand/85">{tag}</span>
                </div>
                <h3 className="mt-4 font-display text-2xl leading-tight text-white">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-sand/75">{desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="master-plan" className="section-wrap pb-20 md:pb-24">
          <div className="farm-split grid items-center gap-8 overflow-hidden rounded-[28px] border border-sand/20 p-5 md:grid-cols-2 md:p-8">
            <div className="relative min-h-[280px] overflow-hidden rounded-2xl">
              <Image src={masterPlan.src} alt={masterPlan.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
            <div>
              <span className="farm-eyebrow">Master Plan</span>
              <h2 className="mt-3 font-display text-4xl leading-tight text-white md:text-5xl">{masterPlan.title}</h2>
              <p className="mt-4 text-sand/80">{masterPlan.blurb}</p>
              <ul className="mt-5 space-y-2 text-sand/85">
                {masterPlan.points.map((point) => (
                  <li key={point} className="farm-list-item">{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="connectivity" className="section-wrap pb-20 md:pb-24">
          <div className="farm-split grid items-center gap-8 overflow-hidden rounded-[28px] border border-sand/20 p-5 md:grid-cols-2 md:p-8">
            <div>
              <span className="farm-eyebrow">Connectivity</span>
              <h2 className="mt-3 font-display text-4xl leading-tight text-white md:text-5xl">{connectivity.title}</h2>
              <p className="mt-4 text-sand/80">{connectivity.blurb}</p>
              <ul className="mt-5 space-y-2 text-sand/85">
                {connectivity.points.map((point) => (
                  <li key={point} className="farm-list-item">{point}</li>
                ))}
              </ul>
            </div>
            <div className="relative min-h-[280px] overflow-hidden rounded-2xl">
              <Image src={connectivity.src} alt={connectivity.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
        </section>

        <section id="contact" className="section-wrap pb-24">
          <div className="farm-contact relative overflow-hidden rounded-[28px] border border-sand/20 p-6 md:p-10">
            <div className="absolute inset-0 opacity-25">
              <Image src={contact.src} alt={contact.title} fill sizes="100vw" className="object-cover" />
            </div>
            <div className="relative z-10 max-w-2xl">
              <span className="farm-eyebrow">Lets Connect</span>
              <h2 className="mt-3 font-display text-4xl leading-tight text-white md:text-5xl">Plan Your EVOLVE Visit</h2>
              <p className="mt-4 text-sand/85">{contact.blurb}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {contact.points.map((point) => (
                  <span key={point} className="farm-chip">{point}</span>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="tel:+919999999999" className="farm-btn-primary">Call Now</a>
                <a href="#home" className="farm-btn-secondary">Back to Top</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
