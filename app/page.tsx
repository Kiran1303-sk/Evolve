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
        <section id="home" className="hero-field relative min-h-screen overflow-hidden">
          <div className="absolute inset-0">
            <Image src="/images/bg.png" alt="Farm landscape" fill priority sizes="100vw" className="object-cover object-center" />
          </div>
          <div className="hero-field-overlay absolute inset-0" />
          <div className="section-wrap relative z-10 flex min-h-screen items-end pb-16 pt-28 md:pb-20">
            <div className="max-w-3xl text-[#f5f1e7]">
              <p className="kicker">FCDA Influence Zone</p>
              <h1 className="mt-4 font-display text-5xl leading-tight md:text-7xl">Living Farmland, Modern Planning, Future Value.</h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#f5f1e7]/95 md:text-lg">
                EVOLVE is land designed to be lived, not just held. Grow, build, or preserve in a low-density farm environment backed by practical infrastructure.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#features" className="field-cta-primary">Explore Features</a>
                <a href="#contact" className="field-cta-secondary">Book Site Visit</a>
              </div>
            </div>
          </div>
        </section>

        <section id="story" className="story-band py-20 md:py-24">
          <div className="section-wrap grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="kicker text-[#26462d]">Story</p>
              <h2 className="mt-3 font-display text-4xl leading-tight text-[#1e341f] md:text-6xl">Farm-Style Plots Crafted for Living</h2>
              <p className="mt-5 text-base leading-relaxed text-[#2e4b34] md:text-lg">
                In a time where spaces are shrinking, EVOLVE brings back openness, nature, and a more mindful way of thinking. This is a place where you can plant,
                grow, build, and let your investment evolve naturally over time.
              </p>
            </div>
            <div className="story-stats">
              <div>
                <span>12 Acres</span>
                <p>Phase 1 planned footprint</p>
              </div>
              <div>
                <span>Low Density</span>
                <p>Limited plots with clear structuring</p>
              </div>
              <div>
                <span>Future-Aligned</span>
                <p>Located in FCDA influence zone</p>
              </div>
            </div>
          </div>
        </section>

        <section id="highlights" className="highlights-band py-20 md:py-24">
          <div className="section-wrap">
            <p className="kicker text-[#26462d]">Highlights</p>
            <h2 className="mt-3 font-display text-4xl text-[#1e341f] md:text-6xl">Project Journey</h2>

            <div className="mt-10 space-y-16">
              {sectionShowcase.slice(0, 3).map((item, idx) => (
                <ScrollReveal key={item.src}>
                  <article className="highlight-strip grid gap-6 md:grid-cols-2 md:gap-10">
                    <div className={`relative min-h-[260px] overflow-hidden ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                      <Image src={item.src} alt={item.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                    </div>
                    <div className="self-center">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#6d7d46]">Stage {idx + 1}</p>
                      <h3 className="mt-2 font-display text-3xl leading-tight text-[#1f3823] md:text-5xl">{item.title}</h3>
                      <p className="mt-4 text-[#315237]">{item.blurb}</p>
                      <ul className="mt-5 space-y-2 text-[#315237]">
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

        <section id="features" className="features-band py-20 md:py-24">
          <div className="section-wrap">
            <p className="kicker text-[#26462d]">Features</p>
            <h2 className="mt-3 font-display text-4xl text-[#1e341f] md:text-6xl">Infrastructure Matrix</h2>
            <p className="mt-4 max-w-3xl text-[#315237]">A practical feature sheet presented as rows for faster scanning and better decision clarity.</p>

            <div className="mt-10 border-y border-[#26462d]/25">
              {features.map(({ title, icon: Icon, desc, tag }) => (
                <article key={title} className="feature-row">
                  <div className="feature-row-title">
                    <Icon size={20} />
                    <h3>{title}</h3>
                  </div>
                  <p>{desc}</p>
                  <span>{tag}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="master-plan" className="plan-band py-20 md:py-24">
          <div className="section-wrap grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div className="relative min-h-[300px] overflow-hidden md:min-h-[440px]">
              <Image src={masterPlan.src} alt={masterPlan.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
            <div>
              <p className="kicker text-[#26462d]">Master Plan</p>
              <h2 className="mt-3 font-display text-4xl text-[#1e341f] md:text-6xl">{masterPlan.title}</h2>
              <p className="mt-4 text-[#315237]">{masterPlan.blurb}</p>
              <ul className="mt-5 space-y-2 text-[#315237]">
                {masterPlan.points.map((point) => (
                  <li key={point} className="field-list-item">{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="connectivity" className="connect-band py-20 md:py-24">
          <div className="section-wrap grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <p className="kicker text-[#26462d]">Connectivity</p>
              <h2 className="mt-3 font-display text-4xl text-[#1e341f] md:text-6xl">{connectivity.title}</h2>
              <p className="mt-4 text-[#315237]">{connectivity.blurb}</p>
              <ul className="mt-5 space-y-2 text-[#315237]">
                {connectivity.points.map((point) => (
                  <li key={point} className="field-list-item">{point}</li>
                ))}
              </ul>
            </div>
            <div className="relative min-h-[300px] overflow-hidden md:min-h-[440px]">
              <Image src={connectivity.src} alt={connectivity.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
        </section>

        <section id="contact" className="contact-band py-20 md:py-24">
          <div className="section-wrap">
            <div className="contact-strip grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
              <div>
                <p className="kicker text-[#26462d]">Contact</p>
                <h2 className="mt-3 font-display text-4xl text-[#1e341f] md:text-6xl">Plan Your EVOLVE Visit</h2>
                <p className="mt-4 text-[#315237]">{contact.blurb}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {contact.points.map((point) => (
                    <span key={point} className="field-tag">{point}</span>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="tel:+919999999999" className="field-cta-primary">Call Now</a>
                  <a href="#home" className="field-cta-secondary">Back to Top</a>
                </div>
              </div>
              <div className="relative min-h-[280px] overflow-hidden md:min-h-[360px]">
                <Image src={contact.src} alt={contact.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
