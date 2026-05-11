import Image from 'next/image';
import { Droplets, ShieldCheck, Sprout, Trees, Route, WavesLadder } from 'lucide-react';
import Navbar from '@/components/Navbar';

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
  return (
    <>
      <Navbar />
      <main>
        <section id="hero-section" className="relative flex min-h-screen items-start overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/bg.png"
              alt="Luxury farm landscape"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center lg:object-[62%_46%] scale-[1.06]"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_26%,rgba(210,164,110,0.18),transparent_42%)]" />
          <div className="section-wrap relative z-10 pb-14 pt-24 md:pt-28">
            <div className="max-w-2xl p-2 md:p-4">
              <h1 className="h1-luxury max-w-4xl text-left">
                Farm-Style Plots
                <br />
                Crafted for Living
              </h1>
              <p className="mt-4 text-justify text-lg text-sand/90">
                EVOLVE is built on a simple idea
                <br />
                Land should not just be owned, it should be lived.
              </p>
              <p className="mt-4 text-justify text-lg text-sand/85">
                In a time where spaces are shrinking, we bring back openness, nature, and a more mindful way of thinking.
              </p>
              <p className="mt-4 text-justify text-lg text-sand/85">
                A place where you can plant, grow, and build while your investment evolves with time.
              </p>
              <p className="mt-4 text-justify text-lg text-sand/90">
                This is not just real estate. <span className="font-semibold text-sand">A more meaningful way to own land.</span>
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a href="#features" className="rounded-full border border-sand/50 bg-black/25 px-7 py-3 text-sm font-semibold">
                  Explore Features
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-wrap py-20">
          <div className="space-y-8">
            {sectionShowcase.map((item, idx) => (
              <article key={item.src} className="group glass overflow-hidden rounded-3xl transition-all duration-300 hover:-translate-y-1">
                <div className="grid gap-0 md:grid-cols-2">
                  <div className={`relative aspect-[16/10] w-full overflow-hidden md:h-[340px] md:aspect-auto ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                    <Image
                      src={item.src}
                      alt="Project section visual"
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent md:from-black/55" />
                  </div>
                  <div className="flex items-center p-6 md:p-10">
                    <div>
                      <h3 className="font-display text-3xl leading-tight md:text-4xl">{item.title}</h3>
                      <p className="mt-4 text-lg text-sand/80">{item.blurb}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.points.map((point) => (
                          <span key={point} className="rounded-full border border-sand/20 bg-white/5 px-3 py-1 text-xs text-sand/85 md:text-sm">
                            {point}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="features" className="section-wrap py-10">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="h2-luxury">Project Features</h2>
              <p className="mt-3 max-w-2xl text-sand/75">Built for lifestyle comfort and long-term land value with practical infrastructure.</p>
            </div>
            <div className="rounded-full border border-bronze/40 bg-bronze/10 px-4 py-2 text-xs tracking-[0.14em] text-bronze md:text-sm">
              PREMIUM INFRA READY
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ title, icon: Icon, desc, tag }) => (
              <article key={title} className="group glass relative overflow-hidden rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1">
                <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-bronze/20 blur-2xl" />
                </div>
                <div className="relative z-10 flex items-start justify-between gap-3">
                  <Icon className="text-bronze transition duration-300 group-hover:scale-110" size={22} />
                  <span className="rounded-full border border-sand/20 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-wider text-sand/80">{tag}</span>
                </div>
                <h3 className="relative z-10 mt-4 font-semibold">{title}</h3>
                <p className="relative z-10 mt-3 text-sm text-sand/75">{desc}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
