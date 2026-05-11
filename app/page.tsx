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
              <ScrollReveal
                key={item.src}
                className="showcase-shell group relative overflow-hidden rounded-[30px] border border-sand/20 bg-[linear-gradient(150deg,rgba(255,255,255,0.13),rgba(255,255,255,0.03))] shadow-[0_28px_80px_rgba(3,5,4,0.48)] transition-all duration-500 hover:-translate-y-1.5 hover:border-bronze/50 hover:shadow-[0_36px_90px_rgba(6,8,6,0.55)]"
              >
                <div className="showcase-shell-glow pointer-events-none absolute inset-0" />
                <div className="grid gap-0 md:grid-cols-2">
                  <div
                    className={`showcase-media relative aspect-[16/10] w-full overflow-hidden md:h-[340px] md:aspect-auto ${
                      idx % 2 === 1 ? 'showcase-media-right md:order-2' : 'showcase-media-left'
                    }`}
                  >
                    <Image
                      src={item.src}
                      alt="Project section visual"
                      fill
                      loading="eager"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="showcase-image object-cover object-center"
                    />
                    <div className="absolute left-4 top-4 z-10 rounded-full border border-sand/30 bg-black/35 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-sand/85 backdrop-blur-sm md:text-xs">
                      EVOLVE SERIES {idx + 1}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent md:from-black/55" />
                  </div>
                  <div className={`showcase-content flex items-center p-6 md:p-10 ${idx % 2 === 1 ? 'showcase-content-left' : 'showcase-content-right'}`}>
                    <div>
                      <div className="mb-4 inline-flex rounded-full border border-bronze/35 bg-bronze/10 px-3 py-1 text-[10px] uppercase tracking-[0.17em] text-bronze md:text-xs">
                        Signature Infrastructure
                      </div>
                      <h3 className="font-display text-3xl leading-tight text-white md:text-4xl">{item.title}</h3>
                      <p className="mt-4 text-base leading-relaxed text-sand/80 md:text-lg">{item.blurb}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.points.map((point) => (
                          <span
                            key={point}
                            className="rounded-full border border-sand/25 bg-white/[0.06] px-3 py-1 text-xs tracking-wide text-sand/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] md:text-sm"
                          >
                            {point}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
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
              <article
                key={title}
                className="feature-card group relative overflow-hidden rounded-2xl border border-sand/20 p-5 shadow-[0_26px_56px_rgba(4,6,5,0.42)] transition-all duration-300 hover:-translate-y-1.5 hover:border-bronze/45 hover:shadow-[0_34px_72px_rgba(4,6,5,0.55)]"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-bronze/25 blur-3xl" />
                  <div className="absolute -left-16 bottom-0 h-32 w-32 rounded-full bg-green-200/10 blur-3xl" />
                </div>
                <div className="relative z-10 flex items-start justify-between gap-3">
                  <div className="feature-icon-wrap">
                    <Icon className="text-bronze transition duration-300 group-hover:scale-110" size={22} />
                  </div>
                  <span className="rounded-full border border-sand/20 bg-black/20 px-3 py-1 text-[11px] uppercase tracking-wider text-sand/85">{tag}</span>
                </div>
                <h3 className="relative z-10 mt-4 font-display text-2xl leading-tight text-white">{title}</h3>
                <p className="relative z-10 mt-3 text-sm leading-relaxed text-sand/75">{desc}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
