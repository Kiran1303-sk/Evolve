import Image from 'next/image';
import { ArrowUpRight, Compass, Leaf, ShieldCheck, Sparkles, Waves } from 'lucide-react';
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
  },
  {
    src: '/images/section4.png',
    title: 'Master Planning Snapshot',
    desc: 'Existing project planning visual retained to connect growth and layout intent.'
  }
];

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="orbit-theme">
        <section id="home" className="neo-hero">
          <div className="neo-hero-bg">
            <Image src="/images/bg.png" alt="Farm landscape" fill priority sizes="100vw" className="object-cover object-center" />
          </div>
          <div className="neo-overlay" />
          <div className="section-wrap relative z-10 flex min-h-screen items-center py-28">
            <div className="max-w-3xl text-[#f8ffe8]">
              <p className="kicker">DSQUARE EVOLVE EXPERIENCE</p>
              <h1 className="mt-4 font-display text-5xl leading-tight md:text-7xl">A New Farm-Living Interface, Reimagined.</h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#ecffd3] md:text-lg">
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
              <p className="kicker text-[#89c26b]">PROJECT STORY</p>
              <h2 className="mt-3 font-display text-4xl leading-tight text-[#eaf8db] md:text-6xl">From Static Brochure to Dynamic Journey</h2>
              <p className="mt-5 text-base leading-relaxed text-[#cbe8bc] md:text-lg">
                This redesign introduces a cinematic layout system, smoother reveals, deeper contrast, and card-based interaction to make the experience feel alive on
                both desktop and mobile.
              </p>
            </div>
            <div className="neo-stats">
              <div>
                <span>3</span>
                <p>curated visual highlights</p>
              </div>
              <div>
                <span>2</span>
                <p>new PNG images added</p>
              </div>
              <div>
                <span>100%</span>
                <p>rounded visual card system</p>
              </div>
            </div>
          </div>
        </section>

        <section id="showcase" className="neo-showcase py-20 md:py-24">
          <div className="section-wrap">
            <p className="kicker text-[#89c26b]">NEW VISUAL GALLERY</p>
            <h2 className="mt-3 font-display text-4xl text-[#eaf8db] md:text-6xl">Interactive Media Blocks</h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {gallery.map((item) => (
                <ScrollReveal key={item.src}>
                  <article className="media-card">
                    <div className="media-card-image">
                      <Image src={item.src} alt={item.title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover object-center" />
                    </div>
                    <div className="p-5">
                      <p className="media-pill"><Sparkles size={14} /> Enhanced View</p>
                      <h3 className="mt-3 font-display text-3xl text-[#f3ffe9]">{item.title}</h3>
                      <p className="mt-2 text-sm text-[#cbe8bc]">{item.desc}</p>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section id="features" className="neo-band py-20 md:py-24">
          <div className="section-wrap">
            <p className="kicker text-[#89c26b]">INFRASTRUCTURE</p>
            <h2 className="mt-3 font-display text-4xl text-[#eaf8db] md:text-6xl">Core Capability Deck</h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {infrastructure.map(({ title, icon: Icon, desc, stat }) => (
                <article key={title} className="infra-card">
                  <div className="feature-row-title">
                    <Icon size={19} />
                    <h3>{title}</h3>
                  </div>
                  <p className="mt-3 text-[#cbe8bc]">{desc}</p>
                  <span className="mt-4 inline-flex rounded-full border border-[#89c26b]/35 px-3 py-1 text-xs font-bold uppercase tracking-[0.13em] text-[#89c26b]">
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
              <p className="kicker text-[#89c26b]">ACTION</p>
              <h2 className="mt-3 font-display text-4xl text-[#f3ffe9] md:text-6xl">Plan Your EVOLVE Site Visit</h2>
              <p className="mt-4 text-[#cbe8bc]">
                The site experience now uses a unified interactive style, elevated cards, and updated media assets to help visitors navigate faster and connect easier.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="tel:+919999999999" className="field-cta-primary">Call Now</a>
                <a href="#home" className="field-cta-secondary inline-flex items-center gap-2">Back to Top <ArrowUpRight size={16} /></a>
              </div>
            </div>
            <div className="neo-image-wrap">
              <Image src="/images/new-image.png" alt="Fresh field view" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover object-center" />
            </div>
          </div>
        </section>
        <section id="contact" className="pb-20" />
      </main>
    </>
  );
}
