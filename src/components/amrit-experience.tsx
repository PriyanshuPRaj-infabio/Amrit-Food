"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, Factory, Mail, MapPin, Phone, ShieldCheck, Award, Heart, Scale, Compass, Check, ArrowRight, Activity, Percent } from "lucide-react";
import { MotionProvider } from "@/components/motion-provider";
import { MagneticButton } from "@/components/magnetic-button";
import { Reveal } from "@/components/reveal";
import { impact, innovations, navItems, process, coolMProducts, justProducts, uhtProducts, coreValues, justPillars, institutionalClients, businessGlance, stats, legacyMilestones } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

const heroImage = "https://images.unsplash.com/photo-1637382752225-d7f97e1ddd03?q=80&w=1533&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export function AmritExperience() {
  return (
    <MotionProvider>
      <main className="overflow-hidden bg-ivory text-ink">
        <LoadingScreen />
        <Navigation />
        <Hero />
        <BrandPhilosophy />
        <LegacyStory />
        <ProductEcosystem />
        <ValueImpact />
        <Infrastructure />
        <QualityTrust />
        <FutureInnovation />
        <BusinessAtAGlance />
        <Partnerships />
        <EmotionalEnding />
        <PremiumFooter />
      </main>
    </MotionProvider>
  );
}

function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1350);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: visible ? 1 : 0, pointerEvents: visible ? "auto" : "none" }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] grid place-items-center bg-navy-radial text-ivory"
      aria-hidden={!visible}
    >
      <motion.div initial={{ scale: 0.96, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.7 }} className="text-center">
        <div className="mx-auto mb-5 h-px w-40 overflow-hidden bg-ivory/20">
          <motion.div initial={{ x: "-100%" }} animate={{ x: "100%" }} transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }} className="h-full bg-gold" />
        </div>
        <p className="font-display text-4xl tracking-normal md:text-6xl">Amrit Food</p>
        <p className="mt-3 text-xs uppercase tracking-[0.34em] text-ivory/60">Trust in motion</p>
      </motion.div>
    </motion.div>
  );
}

function Navigation() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
      <nav aria-label="Primary navigation" className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-ivory/18 bg-navy/45 px-4 py-3 text-ivory shadow-cinematic backdrop-blur-xl md:px-6">
        <a href="#home" className="flex items-center gap-3" aria-label="Amrit Food home"><span className="relative h-9 w-32 overflow-hidden rounded-full bg-ivory px-3 py-1.5 shadow-glow"><Image src="/brand/amrit-food-logo.jpg" alt="Amrit Food" fill sizes="128px" className="object-contain p-1" /></span></a>
        <div className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-[0.18em] text-ivory/72 lg:flex">
          {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-gold">{item}</a>)}
        </div>
        <a href="#partner" className="rounded-full bg-ivory px-4 py-2 text-sm font-bold text-navy transition hover:bg-gold">Partner</a>
      </nav>
    </header>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.08, 1.22]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section id="home" ref={ref} className="relative min-h-screen overflow-hidden bg-navy pt-28 text-ivory">
      <motion.div style={{ scale: imageScale }} className="absolute inset-0">
        <Image src={heroImage} alt="Milk being poured in a luminous dairy environment" fill priority sizes="100vw" className="object-cover opacity-60" />
      </motion.div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_52%_30%,rgba(255,253,247,0.24),transparent_24%),linear-gradient(90deg,rgba(15,23,42,0.92),rgba(15,23,42,0.48)_48%,rgba(15,23,42,0.78))]" />
      <AmbientParticles />
      <motion.div style={{ y: textY }} className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl flex-col justify-center px-5 pb-14 md:px-8">
        <Reveal className="max-w-5xl">
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.34em] text-gold">Quietly powering India&apos;s food experiences</p>
          <h1 className="text-balance font-display text-6xl leading-[1.12] tracking-normal md:text-8xl lg:text-[8.7rem]">
            <span className="block bg-gradient-to-r from-gold via-ivory to-gold bg-clip-text text-transparent pb-3">From India&apos;s Dairy Legacy</span>
            <span className="block pb-2">to Tomorrow&apos;s Food Innovation.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.16} className="mt-8 max-w-2xl text-lg leading-8 text-ivory/78 md:text-xl">
          For decades, Amrit Food has delivered high-quality dairy and food solutions that power homes, cafes, restaurants, and global food businesses across India.
        </Reveal>
        <Reveal delay={0.28} className="mt-10 flex flex-wrap gap-3">
          <MagneticButton href="#products" variant="gold">Explore Our Products</MagneticButton>
          <MagneticButton href="#legacy" variant="light">Discover Our Story</MagneticButton>
          <MagneticButton href="#partner" variant="light">Partner With Us</MagneticButton>
        </Reveal>
      </motion.div>
      <div className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-ivory/70 md:flex">
        <span className="text-xs uppercase tracking-[0.28em]">Scroll</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </div>
    </section>
  );
}

function AmbientParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 z-[1] overflow-hidden">
      {Array.from({ length: 16 }).map((_, index) => (
        <motion.span key={index} className="absolute h-1.5 w-1.5 rounded-full bg-ivory/35 blur-[1px]" style={{ left: `${(index * 19) % 100}%`, top: `${(index * 29) % 100}%` }} animate={{ y: [-18, 28, -18], opacity: [0.18, 0.65, 0.18] }} transition={{ duration: 5 + (index % 5), repeat: Infinity, ease: "easeInOut" }} />
      ))}
    </div>
  );
}

function BrandPhilosophy() {
  const valueIcons = [ShieldCheck, Award, Heart, Scale];

  return (
    <section id="philosophy" className="relative bg-ivory-warm px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Intro */}
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-copper">Brand philosophy</p>
            <h2 className="mt-6 font-display text-5xl leading-[1.12] md:text-7xl">
              <span className="block bg-gradient-to-r from-navy via-copper to-navy bg-clip-text text-transparent pb-2">A silent force</span>
              <span className="block text-navy pb-1">in the rhythm of modern India.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-2xl leading-10 text-ink/78 md:text-3xl">Amrit Food exists where memory meets infrastructure: morning milk, cafe service, restaurant prep, dessert counters, institutional kitchens, and the food brands shaping tomorrow&apos;s appetite.</p>
          </Reveal>
        </div>

        {/* Purpose & Vision Dashboard */}
        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {/* Purpose */}
          <Reveal className="flex flex-col justify-between rounded-[2rem] border border-ink/10 bg-cream p-8 shadow-cinematic transition hover:border-gold/30">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-copper/10 text-copper"><Compass className="h-6 w-6" /></div>
              <h3 className="mt-6 font-display text-3xl text-navy">Purpose — Why We Exist</h3>
              <p className="mt-6 font-display text-2xl leading-relaxed text-copper italic">
                &ldquo;To provide convenient, delicious dairy and allied products that make customers go WOW!&rdquo;
              </p>
            </div>
            <div className="mt-8 border-t border-ink/10 pt-6">
              <p className="text-sm text-ink/50 uppercase tracking-wider">Our driving mission every single day</p>
            </div>
          </Reveal>

          {/* Vision */}
          <Reveal delay={0.15} className="rounded-[2rem] border border-ink/10 bg-navy p-8 text-ivory shadow-cinematic transition hover:border-gold/30">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold/20 text-gold"><Activity className="h-6 w-6" /></div>
              <h3 className="mt-6 font-display text-3xl bg-gradient-to-r from-gold via-ivory to-gold bg-clip-text text-transparent pb-1.5">Vision — Scaling New Heights</h3>
              <p className="mt-4 text-base text-ivory/80 leading-7">
                Our goal is to multiply revenues <span className="text-gold font-bold">4x by 2030</span>, reaching <span className="text-gold font-bold">INR 500 Crore</span> with a <span className="text-gold font-bold">10% PAT</span>. By then, we aim to shift our sales mix significantly toward branded products:
              </p>
            </div>
            <div className="mt-8 space-y-4">
              {[
                { label: "Branded Products", pct: 30, color: "bg-gold" },
                { label: "Branded B2B Channels", pct: 50, color: "bg-copper" },
                { label: "Branded B2C Channels", pct: 20, color: "bg-sage" }
              ].map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between text-sm">
                    <span className="text-ivory/70">{item.label}</span>
                    <span className="font-bold text-gold">{item.pct}%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-ivory/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.pct}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      viewport={{ once: true }}
                      className={`h-full ${item.color}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Core Values */}
        <div className="mt-24">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-copper text-center">Core Pillars</p>
            <h3 className="mt-4 font-display text-4xl text-navy text-center md:text-5xl">Our Core Values</h3>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((item, idx) => {
              const Icon = valueIcons[idx];
              return (
                <Reveal key={item.value} delay={idx * 0.1} className="group relative rounded-2xl border border-ink/10 bg-cream/50 p-6 transition-all duration-300 hover:border-gold/40 hover:bg-cream hover:shadow-cinematic">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-copper/20 bg-copper/5 text-copper transition duration-300 group-hover:scale-110 group-hover:bg-copper group-hover:text-ivory">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="mt-6 font-display text-2xl text-navy transition duration-300 group-hover:text-gold">{item.value}</h4>
                  <p className="mt-3 text-sm leading-6 text-ink/64">{item.description}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function VerticalLegacyTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    let animationFrameId: number;
    const checkCenter = () => {
      if (containerRef.current) {
        const viewportCenter = window.innerHeight / 2;
        const items = containerRef.current.querySelectorAll('.timeline-row');
        let closestIndex = -1;
        let minDistance = Infinity;

        items.forEach((item, idx) => {
          const rect = item.getBoundingClientRect();
          // Target point is roughly 150px down from the top of the row to match the card's visual center
          const itemTarget = rect.top + 150; 
          const distance = Math.abs(viewportCenter - itemTarget);
          
          if (distance < minDistance && distance < window.innerHeight * 0.45) {
            minDistance = distance;
            closestIndex = idx;
          }
        });

        if (activeIndex !== closestIndex) {
          setActiveIndex(closestIndex);
        }
      }
      animationFrameId = requestAnimationFrame(checkCenter);
    };
    
    checkCenter();
    return () => cancelAnimationFrame(animationFrameId);
  }, [activeIndex]);

  return (
    <div className="bg-[#08111f] text-ivory py-32 px-5 md:px-8 relative w-full" ref={containerRef}>
      <div className="max-w-[1100px] mx-auto mb-24">
        <p className="text-sm font-bold uppercase tracking-[0.32em] text-gold mb-6">Since 1940</p>
        <h2 className="font-display text-5xl md:text-7xl mb-8">Our Legacy</h2>
        <div className="h-[2px] w-32 bg-gold mb-8"></div>
        <p className="max-w-3xl text-[17px] leading-relaxed text-ivory/70">
          Eight decades of building India&apos;s most trusted food brands — from the kitchens of North India to the tables of the world.
        </p>
      </div>

      <div className="max-w-[1100px] mx-auto relative flex flex-col gap-16 md:gap-0">
        {/* Spine */}
        <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-[2px] bg-ivory/10 translate-x-[-1px]" />
        <motion.div 
          style={{ scaleY, transformOrigin: "top" }}
          className="hidden md:block absolute left-[50%] top-0 bottom-0 w-[2px] bg-gold translate-x-[-1px] z-10" 
        />

        {legacyMilestones.map((milestone, idx) => {
          const isEven = idx % 2 === 0;
          const isActive = activeIndex === idx;
          
          return (
            <div key={idx} className="timeline-row relative flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-0 md:min-h-[40vh]">
              
              {/* Center Dot */}
              <motion.div 
                initial={{ scale: 0.4, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
                className={`hidden md:flex absolute left-[50%] top-[4.5rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full z-20 transition-all duration-700 ease-out ${milestone.dotSize === 'major' ? 'w-[22px] h-[22px]' : 'w-[16px] h-[16px]'} ${isActive ? 'bg-gold scale-[1.3] shadow-[0_0_20px_rgba(200,168,90,0.6)]' : 'bg-gold/30'}`}
              >
                {milestone.dotSize === 'major' && <div className="absolute inset-0 rounded-full bg-gold opacity-30 scale-[1.6]" />}
              </motion.div>

              {/* Year Column */}
              <div className={`relative z-20 md:px-20 ${isEven ? 'md:text-right' : 'md:text-left md:order-2'}`}>
                <div className={`md:sticky md:top-[40vh] flex flex-col pt-2 md:pt-14 transition-all duration-700 ease-out ${isEven ? 'md:items-end' : 'md:items-start'} ${isActive ? 'scale-110 opacity-100' : 'scale-95 opacity-40'}`}>
                  <span className={`text-4xl md:text-5xl font-display mb-2 transition-colors duration-700 ${isActive ? 'text-gold drop-shadow-[0_0_15px_rgba(200,168,90,0.4)]' : 'text-gold/50'}`}>{milestone.year}</span>
                  <span className={`text-xs uppercase tracking-[0.2em] font-bold transition-colors duration-700 ${isActive ? 'text-ivory' : 'text-ivory/50'}`}>{milestone.era}</span>
                </div>
              </div>

              {/* Card Column */}
              <div className={`relative z-20 md:px-16 md:pb-32 ${isEven ? '' : 'md:order-1'}`}>
                <motion.article 
                  initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-20%" }}
                  transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
                  className={`group relative rounded-2xl p-8 transition-all duration-700 hover:border-gold/40 hover:bg-ivory/[0.05] ${isActive ? 'scale-105 border-gold/40 bg-ivory/[0.08] shadow-2xl opacity-100 z-30' : 'scale-95 border-ivory/10 bg-ivory/[0.03] opacity-60 grayscale-[0.4] z-10'}`}
                >
                  <div className={`absolute top-0 bottom-0 w-1 bg-gold transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} ${isEven ? 'left-0 rounded-l-2xl' : 'right-0 rounded-r-2xl'}`} />
                  
                  <div className={`flex ${isEven ? 'justify-start' : 'md:justify-end justify-start'} mb-6`}>
                    <div className="inline-block px-3 py-1 rounded-full bg-gold/15 text-gold text-[11px] font-bold uppercase tracking-wider">
                      {milestone.era}
                    </div>
                  </div>
                  
                  <h3 className={`text-[20px] font-display mb-4 text-ivory font-medium ${isEven ? 'text-left' : 'md:text-right text-left'}`}>{milestone.title}</h3>
                  
                  {milestone.image && (
                    <div className={`relative w-full aspect-[16/7] md:aspect-[21/9] mb-6 overflow-hidden rounded-xl border border-ivory/10 transition-all duration-700 shadow-xl ${isActive ? 'border-gold/30' : ''}`}>
                      <Image src={milestone.image} alt={milestone.title} fill className={`object-cover transition-all duration-700 ease-out ${isActive ? 'grayscale-0 scale-100' : 'grayscale scale-105 group-hover:grayscale-0 group-hover:scale-100'}`} sizes="(max-width: 768px) 100vw, 50vw" />
                      <div className={`absolute inset-0 bg-navy/40 mix-blend-multiply transition-opacity duration-700 ${isActive ? 'opacity-0' : 'opacity-100 group-hover:opacity-0'}`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#08111f]/60 to-transparent opacity-80" />
                    </div>
                  )}
                  
                  <p className={`text-[15px] leading-[1.7] text-ivory/60 mb-8 ${isEven ? 'text-left' : 'md:text-right text-left'}`}>
                    {milestone.description}
                  </p>
                  
                  <div className={`flex ${isEven ? 'justify-start' : 'md:justify-end justify-start'}`}>
                    <div className="inline-block px-3 py-1.5 border border-ivory/20 rounded-md text-xs text-gold font-medium">
                      {milestone.keyFact}
                    </div>
                  </div>
                </motion.article>
              </div>
            </div>
          );
        })}
      </div>

      <div className="max-w-[1100px] mx-auto mt-32 border-t border-ivory/15 pt-16 text-center">
        <h3 className="font-display text-4xl mb-12">85+ years <span className="text-gold mx-2">·</span> 12 milestones <span className="text-gold mx-2">·</span> 3 iconic brands built</h3>
        
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <div className="px-6 py-3 rounded-full bg-ivory/[0.04] border border-ivory/10 text-sm font-medium">Founded 1940</div>
          <div className="px-6 py-3 rounded-full bg-ivory/[0.04] border border-ivory/10 text-sm font-medium">Uncle Chipps — sold $16.6M</div>
          <div className="px-6 py-3 rounded-full bg-ivory/[0.04] border border-ivory/10 text-sm font-medium">₹148 Cr revenue FY25</div>
        </div>

        <MagneticButton href="#products" variant="gold" className="mx-auto">
          Explore Amrit Food Today
        </MagneticButton>
      </div>
    </div>
  );
}

const legacyScenes = [
  {
    eyebrow: "Foundations of Trust",
    title: "Established in 1991, built on an 81-year legacy of trusted food brands.",
    copy: "Amrit Food is a division of Amrit Corp. Limited, a publicly listed company with an 81-year legacy of building iconic food brands including Uncle Chipps and Gagan Ghee. Established in 1991, we continue to carry that trust forward.",
    image: "/legacy-01.jpg",
    mood: "warm",
    layout: "split"
  },
  {
    eyebrow: "Everyday Life",
    title: "Trust was never built through advertising. It was built through consistency people could rely on.",
    copy: "Morning tea, breakfast tables, cafe counters, restaurant kitchens, desserts after dinner - the brand became part of ordinary rituals that quietly mattered.",
    image: "https://images.unsplash.com/photo-1593068654099-10ad31300e45?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    mood: "human",
    layout: "splitReverse"
  },
  {
    eyebrow: "Scale & Expansion",
    title: "Scaling food solutions for a rapidly evolving India.",
    copy: "As India changed, Amrit Food evolved from familiar dairy trust into a wider manufacturing backbone for institutions, food brands, cafes, and high-volume kitchens.",
    image: "/brand/amrit-food-infrastructure.png",
    mood: "industrial",
    layout: "split"
  },
  {
    eyebrow: "Quiet Impact",
    title: "For decades, Amrit Food has quietly become part of moments people cherish every day.",
    copy: "Behind the meal served on time, the dessert finished with care, the cup made smoother, and the kitchen that keeps moving, there is a promise repeated without spectacle.",
    image: "/scale-02.jpg",
    mood: "emotional",
    layout: "splitReverse"
  },
  {
    eyebrow: "Future",
    title: "Rooted in legacy. Building the future of food.",
    copy: "The next chapter is not a departure from legacy. It is legacy made more precise, more scalable, more innovative, and ready for the food businesses shaping tomorrow.",
    image: "/futureoffood.jpg",
    mood: "future",
    layout: "split"
  }
];

function LegacyStory() {
  const section = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(".legacy-title-line", {
        yPercent: 110,
        opacity: 0,
        stagger: 0.14,
        duration: 1.2,
        ease: "power4.out",
        scrollTrigger: { trigger: ".legacy-opening", start: "top 65%" }
      });

      gsap.utils.toArray<HTMLElement>(".legacy-scene").forEach((scene) => {
        gsap.fromTo(
          scene.querySelector(".legacy-scene-image"),
          { scale: 1.14, y: 80, filter: "blur(10px)" },
          {
            scale: 1,
            y: -50,
            filter: "blur(0px)",
            ease: "none",
            scrollTrigger: { trigger: scene, start: "top bottom", end: "bottom top", scrub: 0.9 }
          }
        );

        gsap.from(scene.querySelectorAll(".legacy-copy > *"), {
          opacity: 0,
          y: 44,
          stagger: 0.12,
          duration: 0.95,
          ease: "power3.out",
          scrollTrigger: { trigger: scene, start: "top 58%" }
        });
      });

      gsap.from(".legacy-final-line", {
        opacity: 0,
        y: 70,
        stagger: 0.18,
        duration: 1.15,
        ease: "power3.out",
        scrollTrigger: { trigger: ".legacy-finale", start: "top 62%" }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="legacy" ref={section} className="relative overflow-hidden bg-ivory text-ink">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(200,168,90,0.18),transparent_28%),radial-gradient(circle_at_88%_24%,rgba(110,128,104,0.16),transparent_25%),linear-gradient(135deg,#FFFDF7,#F5F1E8)]" />
      <motion.div aria-hidden="true" animate={{ y: [-26, 26, -26], x: [0, 18, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} className="absolute left-[-8rem] top-40 h-96 w-96 rounded-full bg-dairy/35 blur-3xl" />
      <motion.div aria-hidden="true" animate={{ y: [22, -22, 22], x: [0, -20, 0] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} className="absolute right-[-10rem] top-[34rem] h-[30rem] w-[30rem] rounded-full bg-royal/10 blur-3xl" />

      <div className="legacy-opening relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 py-28 md:px-8">
        <p className="mb-8 text-sm font-bold uppercase tracking-[0.32em] text-sage">Legacy story</p>
        <h2 className="max-w-6xl overflow-hidden font-display text-6xl leading-[1.1] text-navy md:text-8xl lg:text-[8.6rem]">
          {["Part of everyday Indian life,", "without needing to", "announce itself."].map((line) => (
            <span key={line} className="block overflow-hidden pb-3">
              <span className="legacy-title-line block">{line}</span>
            </span>
          ))}
        </h2>
      </div>

      <VerticalLegacyTimeline />

      <div className="relative">
        {legacyScenes.map((scene, index) => {
          const isFull = scene.layout === "full";
          const reverse = scene.layout === "splitReverse";
          const dark = scene.mood === "industrial" || scene.mood === "future";

          return (
            <article key={scene.eyebrow} className={`legacy-scene relative min-h-screen overflow-hidden ${dark ? "bg-[#08111f] text-ivory" : "text-ink"}`}>
              <div className="absolute inset-0">
                <Image src={scene.image} alt="" fill sizes="100vw" className={`legacy-scene-image object-cover ${isFull ? "opacity-76" : "opacity-42"}`} />
                <div className={`${dark ? "absolute inset-0 bg-[linear-gradient(90deg,rgba(8,17,31,0.94),rgba(8,17,31,0.52),rgba(8,17,31,0.88))]" : "absolute inset-0 bg-[linear-gradient(90deg,rgba(255,253,247,0.96),rgba(255,253,247,0.58),rgba(245,241,232,0.92))]"}`} />
                {scene.mood === "industrial" && <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:76px_76px]" />}
                {scene.mood === "future" && <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_32%,rgba(30,58,138,0.44),transparent_30%)]" />}
              </div>

              <div className={`relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 py-28 md:px-8 ${isFull ? "lg:grid-cols-[0.86fr_1.14fr]" : "lg:grid-cols-2"}`}>
                <div className={`legacy-copy ${reverse ? "lg:order-2" : ""} ${isFull ? "max-w-4xl" : ""}`}>
                  <p className={`text-xs font-bold uppercase tracking-[0.34em] ${dark ? "text-gold" : "text-copper"}`}>{scene.eyebrow}</p>
                  <h3 className={`mt-6 text-balance font-display leading-[1.12] pb-1.5 ${isFull ? "text-5xl md:text-7xl" : "text-5xl md:text-6xl"}`}>{scene.title}</h3>
                  <p className={`mt-8 max-w-2xl text-lg leading-8 ${dark ? "text-ivory/68" : "text-ink/68"}`}>{scene.copy}</p>
                </div>

                {!isFull && (
                  <div className={`${reverse ? "lg:order-1" : ""}`}>
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-ivory/20 shadow-cinematic">
                      <Image src={scene.image} alt="" fill sizes="(min-width: 1024px) 44vw, 100vw" className="object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/54 via-transparent to-ivory/12" />
                    </div>
                  </div>
                )}

                {isFull && <div aria-hidden="true" className="hidden lg:block" />}
              </div>
            </article>
          );
        })}
      </div>

      <div className="legacy-finale relative flex min-h-screen items-center justify-center overflow-hidden bg-navy px-5 py-28 text-center text-ivory md:px-8">
        <Image src="/brand/amritfood-footer.jpg" alt="" fill sizes="100vw" className="object-cover opacity-34" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_34%,rgba(200,168,90,0.22),transparent_28%),linear-gradient(180deg,rgba(15,23,42,0.72),rgba(15,23,42,0.96))]" />
        <h3 className="relative max-w-6xl font-display text-6xl leading-[1] md:text-8xl">
          <span className="legacy-final-line block">For generations,</span>
          <span className="legacy-final-line block text-gold">trust has been</span>
          <span className="legacy-final-line block">our most important ingredient.</span>
        </h3>
      </div>
    </section>
  );
}

function ProductEcosystem() {
  const [activeTab, setActiveTab] = useState<"b2b" | "b2c" | "uht">("b2b");

  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 450); // wait for AnimatePresence tab height transition
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <section id="products" className="relative bg-ivory py-24 md:py-32">
      <div className="px-5 md:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-copper">Product ecosystem</p>
            <h2 className="mt-6 font-display text-5xl leading-[1.12] md:text-7xl">
              <span className="block bg-gradient-to-r from-navy via-copper to-gold bg-clip-text text-transparent pb-2">Real Amrit products,</span>
              <span className="block pb-1.5">elevated into a food infrastructure story.</span>
            </h2>
          </Reveal>

          {/* Tab Switcher */}
          <div className="mt-12 flex justify-start border-b border-ink/10 pb-px">
            {[
              { id: "b2b", label: "B2B Brand — Cool M" },
              { id: "b2c", label: "B2C Brand — JUST" },
              { id: "uht", label: "UHT Milk & Standardized Essentials" }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`relative pb-4 pr-6 text-sm font-bold uppercase tracking-wider transition-colors duration-300 md:pr-10 ${
                  activeTab === tab.id ? "text-gold" : "text-ink/40 hover:text-ink/80"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 h-0.5 w-[calc(100%-1.5rem)] md:w-[calc(100%-2.5rem)] bg-gold"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-14">
            <AnimatePresence mode="wait">
              {activeTab === "b2b" && (
                <motion.div
                  key="b2b"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* B2B Cool M Product Grid */}
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {coolMProducts.map((product, index) => (
                      <motion.article
                        key={product.title}
                        whileHover={{ y: -10, scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 200, damping: 16 }}
                        className="group relative overflow-hidden rounded-[1.75rem] border border-ink/10 bg-cream p-6 shadow-cinematic transition-all duration-300 hover:border-gold/40 hover:shadow-[0_28px_90px_rgba(200,168,90,0.2)]"
                      >
                        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full blur-3xl transition-all duration-300 group-hover:scale-125" style={{ backgroundColor: `${product.accent}3D` }} />
                        <div className="absolute inset-x-6 top-6 h-64 rounded-[1.35rem] border border-ink/5 bg-ivory shadow-[inset_0_0_40px_rgba(15,23,42,0.035)]" />
                        <div className="relative z-10 mx-auto mt-2 flex h-72 items-center justify-center">
                          <Image src={product.image} alt={product.title} width={260} height={220} className="max-h-[210px] w-auto object-contain drop-shadow-[0_16px_24px_rgba(15,23,42,0.12)] transition-all duration-300 group-hover:scale-105" />
                        </div>
                        <div className="relative z-10 mt-5">
                          <div className="flex items-center justify-between gap-4">
                            <p className="text-xs font-bold uppercase tracking-[0.24em] text-sage">{product.size}</p>
                            <span className="rounded-full px-3 py-1 text-xs font-bold text-navy" style={{ backgroundColor: `${product.accent}22` }}>
                              {product.shelfLife}
                            </span>
                          </div>
                          <h3 className="mt-4 font-display text-3xl leading-[1.15] text-navy transition-colors duration-300 group-hover:text-gold pb-1">{product.title}</h3>
                          <p className="mt-4 text-sm leading-6 text-ink/70">{product.context}</p>
                        </div>
                        <div className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-gold/0 via-gold to-gold/0 transition-transform duration-500 group-hover:scale-x-100" />
                      </motion.article>
                    ))}
                  </div>

                  {/* B2B Clients Ticker */}
                  <LogoMarquee />
                </motion.div>
              )}

              {activeTab === "b2c" && (
                <motion.div
                  key="b2c"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid gap-8">
                    {/* Brand Promises */}
                    <div className="col-span-full rounded-[2rem] border border-ink/10 bg-cream p-8 shadow-cinematic lg:p-12">
                      <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                        <div>
                          <span className="rounded-full bg-gold/20 px-3 py-1 text-xs font-bold text-navy uppercase tracking-wider">Flavoured Milk & Premium RTD</span>
                          <h3 className="mt-4 font-display text-4xl text-navy">The JUST Brand Story</h3>
                          <p className="mt-6 text-base leading-8 text-ink/70">
                            Amrit Food has been in the flavoured milk business for over 10 years, originally marketing under &lsquo;Just Milk&rsquo; now rebranded to JUST. The brand is expanding its range to include high-value ready-to-consume products including cold coffee, protein shakes, and custard, with a focus on clean-label, premium quality products.
                          </p>
                          <div className="mt-8 p-6 rounded-2xl bg-gold/10 border border-gold/20 text-navy">
                            <p className="text-xs uppercase tracking-[0.2em] font-bold text-copper">D2C Delivery & Availability</p>
                            <p className="mt-2 text-sm leading-6">
                              Currently available in <span className="font-bold">Delhi/NCR</span>. Order online at <a href="https://drinkjust.in" target="_blank" rel="noopener noreferrer" className="font-bold text-royal underline transition hover:text-gold">drinkjust.in</a>. Free shipping on all orders | Hassle-free returns | Direct-to-consumer delivery.
                            </p>
                          </div>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                          {justPillars.map((pillar) => (
                            <div key={pillar.title} className="rounded-xl border border-ink/5 bg-ivory p-5 shadow-sm transition hover:shadow-md">
                              <h4 className="font-display text-lg font-bold text-navy flex items-center gap-2"><Check className="h-4 w-4 text-gold shrink-0" /> {pillar.title}</h4>
                              <p className="mt-2 text-xs leading-5 text-ink/60">{pillar.copy}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* B2C Product Grid */}
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {justProducts.map((product) => (
                        <motion.article
                          key={product.title}
                          whileHover={{ y: -10, scale: 1.01 }}
                          transition={{ type: "spring", stiffness: 200, damping: 16 }}
                          className="group relative overflow-hidden rounded-[1.75rem] border border-ink/10 bg-cream p-6 shadow-cinematic transition-all duration-300 hover:border-gold/40 hover:shadow-[0_28px_90px_rgba(200,168,90,0.2)]"
                        >
                          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full blur-3xl transition-all duration-300 group-hover:scale-125" style={{ backgroundColor: `${product.accent}3D` }} />
                          <div className="absolute inset-x-6 top-6 h-64 rounded-[1.35rem] border border-ink/5 bg-ivory shadow-[inset_0_0_40px_rgba(15,23,42,0.035)]" />
                          <div className="relative z-10 mx-auto mt-2 flex h-72 items-center justify-center">
                            <Image src={product.image} alt={product.title} width={260} height={220} className="max-h-[210px] w-auto object-contain drop-shadow-[0_16px_24px_rgba(15,23,42,0.12)] transition-all duration-300 group-hover:scale-105" />
                          </div>
                          <div className="relative z-10 mt-5">
                            <div className="flex items-center justify-between gap-4">
                              <p className="text-xs font-bold uppercase tracking-[0.24em] text-sage">Pack/Price</p>
                              <span className="rounded-full px-3 py-1 text-xs font-bold text-navy" style={{ backgroundColor: `${product.accent}22` }}>
                                {product.price}
                              </span>
                            </div>
                            <h3 className="mt-4 font-display text-3xl leading-[1.15] text-navy transition-colors duration-300 group-hover:text-gold pb-1">{product.title}</h3>
                            <p className="mt-4 text-sm leading-6 text-ink/70">{product.note}</p>
                          </div>
                          <div className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-gold/0 via-gold to-gold/0 transition-transform duration-500 group-hover:scale-x-100" />
                        </motion.article>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "uht" && (
                <motion.div
                  key="uht"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                  className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                  {uhtProducts.map((product) => {
                    const isFeatured = product.badge !== undefined;
                    return (
                      <motion.article
                        key={product.title}
                        whileHover={{ y: -10, scale: 1.01 }}
                        transition={{ type: "spring", stiffness: 200, damping: 16 }}
                        className={`group relative overflow-hidden rounded-[1.75rem] border p-6 shadow-cinematic transition-all duration-300 ${
                          isFeatured
                            ? "border-gold/50 bg-[#08111f] text-ivory hover:border-gold hover:shadow-[0_28px_90px_rgba(200,168,90,0.3)]"
                            : "border-ink/10 bg-cream hover:border-gold/40 hover:shadow-[0_28px_90px_rgba(200,168,90,0.2)]"
                        }`}
                      >
                        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full blur-3xl transition-all duration-300 group-hover:scale-125" style={{ backgroundColor: `${product.accent}3D` }} />
                        <div className={`absolute inset-x-6 top-6 h-64 rounded-[1.35rem] border shadow-[inset_0_0_40px_rgba(15,23,42,0.035)] ${isFeatured ? "border-white/5 bg-navy/60" : "border-ink/5 bg-ivory"}`} />
                        <div className="relative z-10 mx-auto mt-2 flex h-72 items-center justify-center">
                          <Image src={product.image} alt={product.title} width={260} height={220} className="max-h-[210px] w-auto object-contain drop-shadow-[0_16px_24px_rgba(15,23,42,0.12)] transition-all duration-300 group-hover:scale-105" />
                        </div>
                        <div className="relative z-10 mt-5">
                          <div className="flex items-center justify-between gap-4">
                            <p className={`text-xs font-bold uppercase tracking-[0.24em] ${isFeatured ? "text-gold" : "text-sage"}`}>UHT Range</p>
                            <span className={`rounded-full px-3 py-1 text-xs font-bold ${isFeatured ? "bg-gold text-navy" : "text-navy"}`} style={isFeatured ? {} : { backgroundColor: `${product.accent}22` }}>
                              {isFeatured ? product.badge : `Shelf life: ${product.shelfLife}`}
                            </span>
                          </div>
                          <h3 className={`mt-4 font-display text-3xl leading-[1.15] transition-colors duration-300 pb-1 ${isFeatured ? "text-ivory group-hover:text-gold" : "text-navy group-hover:text-gold"}`}>{product.title}</h3>
                          <p className={`mt-4 text-sm leading-6 ${isFeatured ? "text-ivory/70" : "text-ink/70"}`}>{product.details}</p>
                        </div>
                        <div className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-gold/0 via-gold to-gold/0 transition-transform duration-500 group-hover:scale-x-100" />
                      </motion.article>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    let animationFrameId: number;
    const checkCenter = () => {
      if (containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const containerCenter = containerRect.left + containerRect.width / 2;
        
        const items = containerRef.current.querySelectorAll('.client-logo-item');
        let closestIndex = -1;
        let minDistance = Infinity;

        items.forEach((item, idx) => {
          const rect = item.getBoundingClientRect();
          const itemCenter = rect.left + rect.width / 2;
          const distance = Math.abs(containerCenter - itemCenter);
          // Distance threshold to trigger the "pop out" effect
          if (distance < minDistance && distance < 260) {
            minDistance = distance;
            closestIndex = idx;
          }
        });

        if (activeIndex !== closestIndex) {
          setActiveIndex(closestIndex);
        }
      }
      animationFrameId = requestAnimationFrame(checkCenter);
    };
    
    checkCenter();
    return () => cancelAnimationFrame(animationFrameId);
  }, [activeIndex]);

  return (
    <div className="mt-24 border-t border-ink/10 pt-20">
      <p className="text-center text-sm font-bold uppercase tracking-[0.28em] text-copper mb-12">Trusted by Key B2B Institutional Clients</p>
      <div className="relative w-full overflow-hidden bg-cream/50 py-12 border-y border-ink/5 shadow-[inset_0_0_80px_rgba(200,168,90,0.03)]" ref={containerRef}>
        <div className="flex animate-marquee gap-24 items-center">
          {institutionalClients.map((client, idx) => (
            <div 
              key={idx} 
              className={`client-logo-item flex shrink-0 items-center justify-center gap-5 transition-all duration-500 ease-out hover:grayscale-0 hover:opacity-100 hover:scale-[1.35] ${activeIndex === idx ? "scale-[1.35] grayscale-0 opacity-100 drop-shadow-xl" : "grayscale opacity-40 scale-95"}`}
            >
              <img src={client.logo} alt={client.name} className="h-14 md:h-16 w-auto object-contain max-w-[180px]" />
            </div>
          ))}
          {/* Duplicate for infinite loop */}
          {institutionalClients.map((client, idx) => {
            const globalIdx = idx + institutionalClients.length;
            return (
              <div 
                key={`dup-${idx}`} 
                className={`client-logo-item flex shrink-0 items-center justify-center gap-5 transition-all duration-500 ease-out hover:grayscale-0 hover:opacity-100 hover:scale-[1.35] ${activeIndex === globalIdx ? "scale-[1.35] grayscale-0 opacity-100 drop-shadow-xl" : "grayscale opacity-40 scale-95"}`}
              >
                <img src={client.logo} alt={client.name} className="h-14 md:h-16 w-auto object-contain max-w-[180px]" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function ValueImpact() {
  const section = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(".impact-kicker, .impact-heading, .impact-copy", {
        opacity: 0,
        y: 54,
        stagger: 0.12,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: section.current, start: "top 62%" }
      });

      gsap.to(".impact-halo", {
        y: -80,
        scale: 1.08,
        ease: "none",
        scrollTrigger: { trigger: section.current, start: "top bottom", end: "bottom top", scrub: 0.8 }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={section} className="relative overflow-hidden bg-navy-radial px-5 py-32 text-ivory md:px-8 md:py-44">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:88px_88px] opacity-45" />
      <div className="impact-halo absolute right-[-12rem] top-20 h-[42rem] w-[42rem] rounded-full bg-gold/18 blur-3xl" />
      <div className="absolute bottom-[-16rem] left-[-10rem] h-[38rem] w-[38rem] rounded-full bg-sage/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <p className="impact-kicker text-sm font-bold uppercase tracking-[0.32em] text-gold">Creating value beyond products</p>
          <h2 className="impact-heading mt-7 max-w-4xl font-display text-6xl leading-[1.12] md:text-8xl">
            <span className="block bg-gradient-to-r from-gold via-ivory to-gold bg-clip-text text-transparent pb-2">One ecosystem.</span>
            <span className="block text-ivory pb-1.5">Millions of human outcomes.</span>
          </h2>
        </div>
        <p className="impact-copy max-w-2xl text-xl leading-9 text-ivory/68">Every pouch, cream, mix, and dairy solution becomes part of a larger chain of trust: families fed, kitchens prepared, cafes moving, partners growing, and an industry becoming more capable.</p>
      </div>
    </section>
  );
}

function Infrastructure() {
  const section = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.to(".infra-bg", {
        scale: 1.13,
        y: -90,
        ease: "none",
        scrollTrigger: { trigger: section.current, start: "top bottom", end: "bottom top", scrub: 0.9 }
      });

      gsap.from(".infra-line", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.4,
        ease: "power3.out",
        scrollTrigger: { trigger: section.current, start: "top 55%" }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="infrastructure" ref={section} className="relative min-h-screen overflow-hidden bg-[#08111f] px-5 py-32 text-ivory md:px-8 md:py-44">
      <Image src="/brand/amrit-food-infrastructure.jpg" alt="Amrit Food manufacturing infrastructure" fill sizes="100vw" className="infra-bg object-cover opacity-48" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,17,31,0.98),rgba(8,17,31,0.7)_46%,rgba(8,17,31,0.92)),radial-gradient(circle_at_75%_26%,rgba(200,168,90,0.28),transparent_32%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:84px_84px] opacity-60" />

      <div className="relative mx-auto grid min-h-[74vh] max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.32em] text-gold">Manufacturing infrastructure</p>
          <h2 className="mt-7 max-w-4xl font-display text-6xl leading-[1.12] md:text-8xl">
            <span className="block bg-gradient-to-r from-gold via-ivory to-gold bg-clip-text text-transparent pb-2">Built for scale.</span>
            <span className="block text-ivory pb-1.5">Calibrated for precision.</span>
          </h2>
          <div className="infra-line mt-10 h-px w-full bg-gradient-to-r from-gold via-ivory/25 to-transparent" />
          <p className="mt-8 max-w-2xl text-lg leading-8 text-ivory/78">
            Behind every trusted batch is a disciplined industrial rhythm. Our state-of-the-art Ultra Heat Treatment plant is from **APV Denmark** using direct steam infusion technology for zero-bacteria products with unmatched quality and flavour. The Aseptic Packaging line is from **Prepac, France**, ensuring sterile packaging at minimal cost. Our bottling section uses an automatic filling line and a hot water spray sterilizer, ensuring long shelf life, great taste, and 100% bacteria-free products.
          </p>
          <div className="mt-8">
            <div className="rounded-2xl border border-gold/30 bg-gold/10 p-6 backdrop-blur shadow-glow-gold">
              <p className="text-xs uppercase tracking-[0.24em] font-bold text-gold">Our Unique Selling Proposition (USP)</p>
              <p className="mt-2 text-sm leading-6 text-ivory/90">
                <span className="font-bold text-ivory">Long shelf life, ready-to-use milk and milk products</span> that are 100% safe to consume directly from the pack.
              </p>
            </div>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-ivory/10 bg-navy/30 p-4">
              <p className="text-xs font-bold text-gold uppercase tracking-wider">APV Denmark UHT</p>
              <p className="mt-1 text-xs text-ivory/60">Direct steam infusion for zero-bacteria purity.</p>
            </div>
            <div className="rounded-xl border border-ivory/10 bg-navy/30 p-4">
              <p className="text-xs font-bold text-gold uppercase tracking-wider">Prepac France Aseptic</p>
              <p className="mt-1 text-xs text-ivory/60">Sterile packaging at minimal operating cost.</p>
            </div>
            <div className="rounded-xl border border-ivory/10 bg-navy/30 p-4">
              <p className="text-xs font-bold text-gold uppercase tracking-wider">Retort Bottling</p>
              <p className="mt-1 text-xs text-ivory/60">Automatic filling and hot water spray sterilization.</p>
            </div>
          </div>
        </Reveal>

        <div className="infra-stats relative">
          <div className="absolute -inset-8 rounded-[2.5rem] bg-ivory/[0.045] blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-ivory/14 bg-navy/38 p-6 shadow-glow backdrop-blur-xl">
            <div className="flex items-center gap-3 border-b border-ivory/10 pb-5">
              <Factory className="h-8 w-8 text-gold" />
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-ivory/58">Operational flow</p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {stats.map(([value, label], idx) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: idx * 0.1, ease: "easeOut" }}
                  className="infra-stat rounded-2xl border border-ivory/10 bg-ivory/[0.06] p-6"
                >
                  <p className="font-display text-4xl text-gold md:text-5xl">{value}</p>
                  <p className="mt-3 text-sm uppercase tracking-[0.18em] text-ivory/58">{label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function QualityTrust() {
  const section = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(".quality-thread", {
        scaleX: 0,
        transformOrigin: "left center",
        ease: "none",
        scrollTrigger: { trigger: ".quality-rail", start: "top 75%", end: "bottom 55%", scrub: 0.8 }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="quality" ref={section} className="relative overflow-hidden bg-[#101827] px-5 py-32 text-ivory md:px-8 md:py-44">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_18%,rgba(200,168,90,0.18),transparent_28%),radial-gradient(circle_at_80%_70%,rgba(30,58,138,0.24),transparent_30%)]" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal className="max-w-5xl">
          <ShieldCheck className="h-12 w-12 text-gold" />
          <p className="mt-6 text-sm font-bold uppercase tracking-[0.32em] text-gold">Quality & trust</p>
          <h2 className="mt-6 font-display text-6xl leading-[1.12] md:text-8xl">
            <span className="block bg-gradient-to-r from-gold via-ivory to-gold bg-clip-text text-transparent pb-2">Trust is not claimed.</span>
            <span className="block text-ivory pb-1.5">It moves through every checkpoint.</span>
          </h2>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-ivory/70">
            Quality is a way of life at Amrit. Our fully equipped in-house laboratory is staffed by highly qualified microbiologists, chemists, and dairy technologists. We consistently monitor raw inputs, verify formulations in-process, and perform comprehensive microbiological analysis of finished products.
          </p>
        </Reveal>

        <div className="quality-rail relative mt-20">
          <div className="quality-thread absolute left-0 top-9 hidden h-px w-full bg-gradient-to-r from-gold via-ivory/45 to-gold/0 lg:block" />
          <div className="grid gap-5 lg:grid-cols-4">
            {process.map((item, index) => {
              const Icon = item.icon;
              const expandedCopy = index === 1 
                ? "Tests on all incoming raw materials, in-process/finished product testing, and microbiological analysis of finished batches." 
                : item.copy;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, delay: index * 0.12, ease: "easeOut" }}
                  onMouseMove={(event) => {
                    const card = event.currentTarget;
                    const rect = card.getBoundingClientRect();
                    const x = event.clientX - rect.left;
                    const y = event.clientY - rect.top;
                    const rotateY = ((x / rect.width) - 0.5) * 10;
                    const rotateX = ((0.5 - y / rect.height) * 10);
                    card.style.setProperty("--mx", `${x}px`);
                    card.style.setProperty("--my", `${y}px`);
                    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
                  }}
                  onMouseLeave={(event) => {
                    const card = event.currentTarget;
                    card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px)";
                  }}
                  className="quality-step group relative min-h-96 overflow-hidden rounded-[1.75rem] border border-ivory/12 bg-ivory/[0.055] p-7 backdrop-blur transition-[transform,border-color,background-color,box-shadow] duration-300 ease-out hover:border-gold/45 hover:bg-ivory/[0.085] hover:shadow-[0_28px_90px_rgba(200,168,90,0.16)]"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "radial-gradient(260px circle at var(--mx, 50%) var(--my, 50%), rgba(200,168,90,0.22), transparent 58%)" }} />
                  <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gold/10 blur-3xl transition duration-500 group-hover:scale-125 group-hover:bg-gold/20" />
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-gold/15 text-gold transition duration-300 group-hover:scale-110 group-hover:bg-gold/25"><Icon className="h-7 w-7" /></div>
                  <p className="relative mt-20 text-xs font-bold uppercase tracking-[0.28em] text-ivory/42">Step {index + 1}</p>
                  <h3 className="relative mt-3 font-display text-4xl transition-colors duration-300 group-hover:text-gold">{item.title}</h3>
                  <p className="relative mt-5 leading-7 text-ivory/64">{expandedCopy}</p>
                  <div className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-gold via-ivory/50 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function FutureInnovation() {
  const section = useRef<HTMLElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.to(".future-orbit", {
        rotate: 12,
        scale: 1.08,
        ease: "none",
        scrollTrigger: { trigger: section.current, start: "top bottom", end: "bottom top", scrub: 1 }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="future" ref={section} className="relative overflow-hidden bg-ivory px-5 py-32 md:px-8 md:py-44">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(30,58,138,0.2),transparent_28%),radial-gradient(circle_at_80%_26%,rgba(110,128,104,0.2),transparent_26%),linear-gradient(135deg,#FFFDF7,#F5F1E8)]" />
      <div className="future-orbit absolute right-[-14rem] top-12 h-[42rem] w-[42rem] rounded-full border border-royal/10 bg-[conic-gradient(from_120deg,rgba(30,58,138,0.18),rgba(200,168,90,0.18),rgba(255,253,247,0),rgba(30,58,138,0.18))] blur-[1px]" />
      
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.32em] text-royal">Future innovation</p>
            <h2 className="mt-7 font-display text-6xl leading-[1.12] text-navy md:text-8xl">
              <span className="block bg-gradient-to-r from-royal via-copper to-royal bg-clip-text text-transparent pb-2">The next era of Indian</span>
              <span className="block text-navy pb-1.5">food needs capable partners.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="text-xl leading-9 text-ink/66">Future readiness is not only technology. It is the ability to translate insight into consistent food systems at scale, with quality that earns confidence before a product ever reaches the table.</p>
          </Reveal>
        </div>

        {/* Future Grid displaying innovations */}
        <div className="future-grid relative mt-20 grid gap-6 sm:grid-cols-3">
          {innovations.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: idx * 0.12, ease: "easeOut" }}
                className="future-card group rounded-2xl border border-ink/10 bg-cream/30 p-8 shadow-cinematic transition-all duration-300 hover:border-royal/30 hover:bg-cream hover:shadow-glow-royal"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-royal/10 text-royal transition duration-300 group-hover:scale-110"><Icon className="h-6 w-6" /></div>
                <h3 className="mt-6 font-display text-2xl text-navy transition duration-300 group-hover:text-gold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/60">{item.copy}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Partnerships() {
  return (
    <section id="partner" className="relative overflow-hidden bg-cream px-5 py-32 md:px-8 md:py-44">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(200,168,90,0.18),transparent_28%),linear-gradient(135deg,#F5F1E8,#FFFDF7)]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.32em] text-copper">Partnerships & credibility</p>
          <h2 className="mt-7 font-display text-6xl leading-[1.12] text-navy md:text-8xl">
            <span className="block bg-gradient-to-r from-copper via-gold to-copper bg-clip-text text-transparent pb-2">A dependable backbone</span>
            <span className="block text-navy pb-1.5">for institutions & food brands.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-navy to-[#1a2847] p-8 text-ivory shadow-cinematic transition-all duration-300 hover:shadow-[0_28px_90px_rgba(15,23,42,0.4)] md:p-10">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-gold/20 blur-3xl transition-all duration-500 hover:scale-125" />
            <p className="relative text-2xl leading-10 text-ivory/78">Amrit Food supports partners with category understanding, production discipline, and the kind of consistency that lets teams focus on service, taste, and growth.</p>
            <MagneticButton href="mailto:partnerships@amritfood.in" variant="gold" className="relative mt-8">Start a Business Inquiry</MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function EmotionalEnding() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1.2]);
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-navy px-5 py-28 text-ivory md:px-8 md:py-36">
      <motion.div style={{ scale, y }} className="absolute inset-0">
        <Image src="/brand/amritfood-footer.jpg" alt="Amrit Food trusted food experience" fill sizes="100vw" className="object-cover opacity-46" />
      </motion.div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_44%_34%,rgba(200,168,90,0.18),transparent_26%),linear-gradient(180deg,rgba(15,23,42,0.42),rgba(15,23,42,0.94))]" />
      <div className="relative mx-auto flex min-h-[72vh] max-w-7xl flex-col justify-end">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.32em] text-gold">A promise kept every day</p>
          <h2 className="mt-8 max-w-6xl font-display text-6xl leading-[1.12] md:text-8xl">
            <span className="block bg-gradient-to-r from-gold via-ivory to-gold bg-clip-text text-transparent pb-2">Behind Every Trusted Food Experience</span>
            <span className="block text-ivory pb-1.5">Is a Promise Kept Every Day.</span>
          </h2>
        </Reveal>
      </div>
    </section>
  );
}

function BusinessAtAGlance() {
  return (
    <section className="relative overflow-hidden bg-[#0a1424] px-5 py-24 text-ivory md:px-8 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(200,168,90,0.14),transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.32em] text-gold">Summary</p>
          <h2 className="mt-4 font-display text-5xl leading-[1.12] md:text-7xl">
            <span className="block bg-gradient-to-r from-gold via-ivory to-gold bg-clip-text text-transparent pb-2">Business at a Glance</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {businessGlance.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: idx * 0.08, ease: "easeOut" }}
              className="glance-card group relative rounded-2xl border border-ivory/10 bg-navy/60 p-6 backdrop-blur transition-all duration-300 hover:border-gold/30 hover:bg-navy/80 hover:shadow-cinematic"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gold/5 blur-xl transition duration-500 group-hover:scale-125" />
              <p className="text-xs uppercase tracking-wider text-ivory/40">{item.dimension}</p>
              <p className="mt-4 font-display text-2xl text-ivory group-hover:text-gold transition-colors duration-300">{item.detail}</p>
              <div className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-gold to-transparent transition-transform duration-500 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PremiumFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#070d18] px-5 py-16 text-ivory md:px-8">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-royal/8 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-ivory/10 pb-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <motion.div whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 200 }}>
            <p className="font-display text-5xl bg-gradient-to-r from-gold to-ivory bg-clip-text text-transparent pb-1.5">Amrit Food</p>
            <p className="mt-6 max-w-xl text-lg leading-8 text-ivory/64">Amrit Food continues to shape India&apos;s food journey through trust, innovation, and a commitment to quality that generations have relied upon.</p>
          </motion.div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-gold">Navigate</p>
            <div className="mt-6 grid gap-3 text-ivory/68">
              {navItems.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  whileHover={{ x: 4, color: '#C8A85A' }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="transition-colors duration-300"
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-gold">Contact</p>
            <div className="mt-6 space-y-4 text-ivory/68">
              <motion.p whileHover={{ x: 4 }} className="flex items-start gap-3"><MapPin className="mt-1 h-4 w-4 shrink-0 text-gold" /> Grand Trunk Rd, Amrit Nagar, Bulandshahr Road Industrial Area, Ghaziabad, Uttar Pradesh 201009</motion.p>
              <motion.p whileHover={{ x: 4 }} className="flex items-center gap-3"><Mail className="h-4 w-4 text-gold" /> partnerships@amritfood.in</motion.p>
              <motion.p whileHover={{ x: 4 }} className="flex items-center gap-3"><Phone className="h-4 w-4 text-gold" /> 0120 286 6891</motion.p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-5 pt-8 text-sm text-ivory/45 md:flex-row">
          <p>Copyright 2026 Amrit Food. All rights reserved.</p>
          <div className="flex gap-5">
            <motion.a href="#" whileHover={{ x: 4, color: '#C8A85A' }} className="transition-colors duration-300">LinkedIn</motion.a>
            <motion.a href="#" whileHover={{ x: 4, color: '#C8A85A' }} className="transition-colors duration-300">Instagram</motion.a>
            <motion.a href="#" whileHover={{ x: 4, color: '#C8A85A' }} className="transition-colors duration-300">Business</motion.a>
          </div>
        </div>

        {/* POWERED BY */}
        <div className="mt-5 flex justify-end">
          <div className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-3 py-2 transition-all duration-300 hover:bg-white/10">
            <a
              href="https://fabulousmedia.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-90 hover:opacity-100 transition-opacity"
              aria-label="FabulousMedia"
            >
              <img
                src="/fabulous-logo.png"
                alt="FabulousMedia"
                className="h-3 w-auto"
              />
            </a>
            <span className="h-3 w-px bg-white/30" />
            <a
              href="https://gocommercially.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-200 hover:opacity-200 transition-opacity"
              aria-label="GoCommercially"
            >
              <img
                src="/go_tm logo white.png"
                alt="GoCommercially"
                className="h-3 w-auto"
              />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
