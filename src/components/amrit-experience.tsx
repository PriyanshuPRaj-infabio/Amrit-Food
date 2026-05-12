"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, Factory, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { MotionProvider } from "@/components/motion-provider";
import { MagneticButton } from "@/components/magnetic-button";
import { Reveal } from "@/components/reveal";
import { impact, innovations, navItems, process, products, stats } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

const heroImage = "https://images.unsplash.com/photo-1628088062854-d1870b4553da?auto=format&fit=crop&w=1800&q=82";

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
          <h1 className="text-balance font-display text-6xl leading-[0.93] tracking-normal md:text-8xl lg:text-[8.7rem]">
            <span className="block bg-gradient-to-r from-gold via-ivory to-gold bg-clip-text text-transparent">From India&apos;s Dairy Legacy</span>
            <span className="block">to Tomorrow&apos;s Food Innovation.</span>
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
  return (
    <section id="philosophy" className="relative bg-ivory-warm px-5 py-28 md:px-8 md:py-36">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-copper">Brand philosophy</p>
          <h2 className="mt-6 font-display text-5xl leading-[1.02] md:text-7xl">
            <span className="block bg-gradient-to-r from-navy via-copper to-navy bg-clip-text text-transparent">A silent force</span>
            <span className="block text-navy">in the rhythm of modern India.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="text-2xl leading-10 text-ink/78 md:text-3xl">Amrit Food exists where memory meets infrastructure: morning milk, cafe service, restaurant prep, dessert counters, institutional kitchens, and the food brands shaping tomorrow&apos;s appetite.</p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {["Trust", "Scale", "Purity"].map((word) => (
              <div key={word} className="border-t border-ink/15 pt-5">
                <p className="font-display text-4xl text-navy">{word}</p>
                <p className="mt-2 text-sm leading-6 text-ink/60">Built through consistency, felt in everyday moments.</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const legacyScenes = [
  {
    eyebrow: "Foundations of Trust",
    title: "Since 1991, Trust built slowly, then carried forward quietly.",
    copy: "Long before food systems became visible brands, Amrit Food began with a simple discipline: nourish consistently, deliver honestly, and let reliability become memory.",
    image: "/legacy-01.jpg",
    mood: "warm",
    layout: "split"
  },
  {
    eyebrow: "Everyday Life",
    title: "Trust was never built through advertising. It was built through consistency people could rely on.",
    copy: "Morning tea, breakfast tables, cafe counters, restaurant kitchens, desserts after dinner - the brand became part of ordinary rituals that quietly mattered.",
    image: "https://images.unsplash.com/photo-1517244683847-7456b63c5969?auto=format&fit=crop&w=1600&q=82",
    mood: "human",
    layout: "full"
  },
  {
    eyebrow: "Scale & Expansion",
    title: "Scaling food solutions for a rapidly evolving India.",
    copy: "As India changed, Amrit Food evolved from familiar dairy trust into a wider manufacturing backbone for institutions, food brands, cafes, and high-volume kitchens.",
    image: "/brand/amrit-food-infrastructure.jpg",
    mood: "industrial",
    layout: "splitReverse"
  },
  {
    eyebrow: "Quiet Impact",
    title: "For decades, Amrit Food has quietly become part of moments people cherish every day.",
    copy: "Behind the meal served on time, the dessert finished with care, the cup made smoother, and the kitchen that keeps moving, there is a promise repeated without spectacle.",
    image: "/scale-02.jpg",
    mood: "emotional",
    layout: "full"
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
        <h2 className="max-w-6xl overflow-hidden font-display text-6xl leading-[0.96] text-navy md:text-8xl lg:text-[8.6rem]">
          {["Part of everyday Indian life,", "without needing to", "announce itself."].map((line) => (
            <span key={line} className="block overflow-hidden pb-2">
              <span className="legacy-title-line block">{line}</span>
            </span>
          ))}
        </h2>
      </div>

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
                  <h3 className={`mt-6 text-balance font-display leading-[1.02] ${isFull ? "text-5xl md:text-7xl" : "text-5xl md:text-6xl"}`}>{scene.title}</h3>
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
  const track = useRef<HTMLDivElement>(null);
  const section = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!track.current || !section.current) return;
    const ctx = gsap.context(() => {
      const buildTween = () => {
        const containerWidth = section.current!.clientWidth;
        const trackWidth = track.current!.scrollWidth;
        const distance = trackWidth - containerWidth;
        return gsap.to(track.current, {
          x: -distance,
          ease: "none",
          scrollTrigger: { trigger: section.current, start: "top top", end: `+=${distance * 1.8}`, scrub: 0.8, pin: true, invalidateOnRefresh: true }
        });
      };
      const tween = buildTween();
      return () => tween.kill();
    }, section);
    return () => ctx.revert();
  }, []);

  return (
    <section id="products" ref={section} className="relative bg-ivory py-24">
      <div className="px-5 md:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-copper">Product ecosystem</p>
            <h2 className="mt-6 font-display text-5xl leading-[1.02] md:text-7xl">
              <span className="block bg-gradient-to-r from-navy via-copper to-gold bg-clip-text text-transparent">Real Amrit products,</span>
              <span className="block">elevated into a food infrastructure story.</span>
            </h2>
          </Reveal>
        </div>
      </div>
      <div ref={track} className="mt-14 flex w-max gap-6 px-5 pb-8 pr-96 md:px-8 md:pr-[32rem]">
        {products.map((product, index) => (
          <motion.article
            key={product.title}
            whileHover={{ y: -18, rotateX: 6, rotateY: index % 2 ? -6 : 6, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200, damping: 16 }}
            className="group relative h-[540px] w-[82vw] max-w-[450px] overflow-hidden rounded-[1.75rem] border border-ink/10 bg-cream p-6 shadow-cinematic transition-all duration-300 hover:border-gold/40 hover:shadow-[0_28px_90px_rgba(200,168,90,0.25)] md:w-[450px]"
          >
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full blur-3xl transition-all duration-300 group-hover:scale-125" style={{ backgroundColor: `${product.accent}3D` }} />
            <div className="absolute inset-x-6 top-6 h-64 rounded-[1.35rem] border border-ink/5 bg-ivory shadow-[inset_0_0_40px_rgba(15,23,42,0.035)] transition-all duration-300 group-hover:shadow-[inset_0_0_60px_rgba(15,23,42,0.08)]" />
            <motion.div
              className="relative z-10 mx-auto mt-2 flex h-72 items-center justify-center"
              whileHover={{ scale: 1.065 }}
              transition={{ type: "spring", stiffness: 200, damping: 14 }}
            >
              <Image src={product.image} alt={product.title} width={390} height={310} className="max-h-[250px] w-auto object-contain drop-shadow-[0_24px_34px_rgba(15,23,42,0.18)] transition-all duration-300 group-hover:drop-shadow-[0_32px_48px_rgba(15,23,42,0.28)]" />
            </motion.div>
            <div className="relative z-10 mt-5">
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-sage transition-colors duration-300 group-hover:text-gold">{product.size}</p>
                <motion.span 
                  whileHover={{ scale: 1.1 }}
                  className="rounded-full px-3 py-1 text-xs font-bold text-navy transition-all duration-300" 
                  style={{ backgroundColor: `${product.accent}33` }}
                >
                  {product.price}
                </motion.span>
              </div>
              <h3 className="mt-4 max-w-xs font-display text-4xl leading-[0.98] text-navy transition-colors duration-300 group-hover:text-gold md:text-5xl">{product.title}</h3>
              <p className="mt-5 max-w-sm text-base leading-7 text-ink/70 transition-colors duration-300 group-hover:text-ink/90">{product.context}</p>
              <p className="absolute bottom-[-4.75rem] left-0 max-w-[21rem] text-xs font-bold uppercase tracking-[0.17em] text-copper transition-colors duration-300 group-hover:text-gold md:bottom-[-4.25rem]">{product.tone}</p>
            </div>
            <div className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-gold/0 via-gold to-gold/0 transition-transform duration-500 group-hover:scale-x-100" />
          </motion.article>
        ))}
      </div>
    </section>
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

      gsap.from(".impact-node", {
        opacity: 0,
        y: 70,
        rotate: -2,
        stagger: 0.12,
        duration: 1.1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".impact-field", start: "top 70%" }
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
          <h2 className="impact-heading mt-7 max-w-4xl font-display text-6xl leading-[0.98] md:text-8xl">
            <span className="block bg-gradient-to-r from-gold via-ivory to-gold bg-clip-text text-transparent">One ecosystem.</span>
            <span className="block text-ivory">Millions of human outcomes.</span>
          </h2>
        </div>
        <p className="impact-copy max-w-2xl text-xl leading-9 text-ivory/68">Every pouch, cream, mix, and dairy solution becomes part of a larger chain of trust: families fed, kitchens prepared, cafes moving, partners growing, and an industry becoming more capable.</p>
      </div>

      <div className="impact-field relative mx-auto mt-20 grid max-w-7xl gap-5 md:grid-cols-6 md:grid-rows-2">
        {impact.map((item, index) => {
          const Icon = item.icon;
          const placement = ["md:col-span-2", "md:col-span-2", "md:col-span-2", "md:col-span-3", "md:col-span-3"][index];
          return (
            <motion.article
              key={item.title}
              whileHover={{ y: -16, scale: 1.025 }}
              transition={{ type: "spring", stiffness: 200, damping: 16 }}
              className={`impact-node group relative min-h-80 overflow-hidden rounded-[1.75rem] border border-ivory/14 bg-ivory/[0.075] p-7 backdrop-blur-xl transition-all duration-300 hover:border-gold/50 hover:bg-ivory/[0.12] hover:shadow-[0_28px_90px_rgba(200,168,90,0.2)] ${placement}`}
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/10 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:bg-gold/30" />
              <motion.div 
                whileHover={{ rotate: 12 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Icon className="h-9 w-9 text-gold transition-transform duration-300 group-hover:scale-125" />
              </motion.div>
              <h3 className="mt-20 font-display text-4xl leading-none transition-colors duration-300 group-hover:text-gold">{item.title}</h3>
              <p className="mt-5 max-w-sm leading-7 text-ivory/66 transition-colors duration-300 group-hover:text-ivory/85">{item.copy}</p>
              <div className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-gold/0 via-gold to-gold/0 transition-transform duration-500 group-hover:scale-x-100" />
            </motion.article>
          );
        })}
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

      gsap.from(".infra-stat", {
        opacity: 0,
        y: 42,
        stagger: 0.12,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: ".infra-stats", start: "top 72%" }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="infrastructure" ref={section} className="relative min-h-screen overflow-hidden bg-[#08111f] px-5 py-32 text-ivory md:px-8 md:py-44">
      <Image src="/brand/amrit-food-infrastructure.jpg" alt="Amrit Food manufacturing infrastructure" fill sizes="100vw" className="infra-bg object-cover opacity-48" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,17,31,0.98),rgba(8,17,31,0.7)_46%,rgba(8,17,31,0.92)),radial-gradient(circle_at_75%_26%,rgba(200,168,90,0.28),transparent_32%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:84px_84px] opacity-60" />

      <div className="relative mx-auto grid min-h-[74vh] max-w-7xl gap-14 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.32em] text-gold">Manufacturing infrastructure</p>
          <h2 className="mt-7 max-w-4xl font-display text-6xl leading-[0.96] md:text-8xl">
            <span className="block bg-gradient-to-r from-gold via-ivory to-gold bg-clip-text text-transparent">Built for scale.</span>
            <span className="block text-ivory">Calibrated for precision.</span>
          </h2>
          <div className="infra-line mt-10 h-px w-full bg-gradient-to-r from-gold via-ivory/25 to-transparent" />
          <p className="mt-8 max-w-2xl text-xl leading-9 text-ivory/68">Behind every trusted batch is a disciplined industrial rhythm: sourcing, processing, formulation, packaging, and delivery aligned around food safety and repeatable quality.</p>
        </Reveal>

        <div className="infra-stats relative">
          <div className="absolute -inset-8 rounded-[2.5rem] bg-ivory/[0.045] blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-ivory/14 bg-navy/38 p-6 shadow-glow backdrop-blur-xl">
            <div className="flex items-center gap-3 border-b border-ivory/10 pb-5">
              <Factory className="h-8 w-8 text-gold" />
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-ivory/58">Operational flow</p>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {stats.map(([value, label]) => (
                <div key={value} className="infra-stat rounded-2xl border border-ivory/10 bg-ivory/[0.06] p-6">
                  <p className="font-display text-4xl text-gold md:text-5xl">{value}</p>
                  <p className="mt-3 text-sm uppercase tracking-[0.18em] text-ivory/58">{label}</p>
                </div>
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
      gsap.from(".quality-step", {
        opacity: 0,
        y: 64,
        stagger: 0.16,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".quality-rail", start: "top 72%" }
      });

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
          <h2 className="mt-6 font-display text-6xl leading-[0.98] md:text-8xl">
            <span className="block bg-gradient-to-r from-gold via-ivory to-gold bg-clip-text text-transparent">Trust is not claimed.</span>
            <span className="block text-ivory">It moves through every checkpoint.</span>
          </h2>
        </Reveal>

        <div className="quality-rail relative mt-20">
          <div className="quality-thread absolute left-0 top-9 hidden h-px w-full bg-gradient-to-r from-gold via-ivory/45 to-gold/0 lg:block" />
          <div className="grid gap-5 lg:grid-cols-4">
            {process.map((item, index) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
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
                  <p className="relative mt-5 leading-7 text-ivory/64">{item.copy}</p>
                  <div className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-gold via-ivory/50 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                </article>
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
      gsap.from(".future-card", {
        opacity: 0,
        y: 70,
        stagger: 0.14,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: ".future-grid", start: "top 72%" }
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="future" ref={section} className="relative overflow-hidden bg-ivory px-5 py-32 md:px-8 md:py-44">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(30,58,138,0.2),transparent_28%),radial-gradient(circle_at_80%_26%,rgba(110,128,104,0.2),transparent_26%),linear-gradient(135deg,#FFFDF7,#F5F1E8)]" />
      <div className="future-orbit absolute right-[-14rem] top-12 h-[42rem] w-[42rem] rounded-full border border-royal/10 bg-[conic-gradient(from_120deg,rgba(30,58,138,0.18),rgba(200,168,90,0.18),rgba(255,253,247,0),rgba(30,58,138,0.18))] blur-[1px]" />
      <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.32em] text-royal">Future innovation</p>
          <h2 className="mt-7 font-display text-6xl leading-[0.98] text-navy md:text-8xl">
            <span className="block bg-gradient-to-r from-royal via-copper to-royal bg-clip-text text-transparent">The next era of Indian</span>
            <span className="block text-navy">food needs capable partners.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="text-xl leading-9 text-ink/66">Future readiness is not only technology. It is the ability to translate insight into consistent food systems at scale, with quality that earns confidence before a product ever reaches the table.</p>
        </Reveal>
      </div>
      <div className="future-grid relative mx-auto mt-20 grid max-w-7xl gap-5 lg:grid-cols-3">
        {innovations.map((item) => {
          const Icon = item.icon;
          return (
            <motion.article 
              key={item.title} 
              whileHover={{ y: -16, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 16 }}
              className="future-card group relative min-h-96 overflow-hidden rounded-[1.75rem] border border-ink/10 bg-ivory/72 p-8 shadow-cinematic backdrop-blur transition-all duration-300 hover:border-royal/40 hover:bg-ivory/90 hover:shadow-[0_28px_90px_rgba(30,58,138,0.2)]"
            >
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-royal/12 blur-3xl transition-all duration-500 group-hover:scale-150 group-hover:bg-royal/25" />
              <motion.div 
                whileHover={{ rotate: -12 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Icon className="h-10 w-10 text-royal transition-transform duration-300 group-hover:scale-125" />
              </motion.div>
              <h3 className="mt-20 font-display text-4xl leading-none text-navy transition-colors duration-300 group-hover:text-royal">{item.title}</h3>
              <p className="mt-5 text-lg leading-8 text-ink/68 transition-colors duration-300 group-hover:text-ink/85">{item.copy}</p>
              <div className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-royal/0 via-royal to-royal/0 transition-transform duration-500 group-hover:scale-x-100" />
            </motion.article>
          );
        })}
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
          <h2 className="mt-7 font-display text-6xl leading-[0.98] text-navy md:text-8xl">
            <span className="block bg-gradient-to-r from-copper via-gold to-copper bg-clip-text text-transparent">A dependable backbone</span>
            <span className="block text-navy">for institutions & food brands.</span>
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
          <h2 className="mt-8 max-w-6xl font-display text-6xl leading-[0.98] md:text-8xl">
            <span className="block bg-gradient-to-r from-gold via-ivory to-gold bg-clip-text text-transparent">Behind Every Trusted Food Experience</span>
            <span className="block text-ivory">Is a Promise Kept Every Day.</span>
          </h2>
        </Reveal>
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
            <p className="font-display text-5xl bg-gradient-to-r from-gold to-ivory bg-clip-text text-transparent">Amrit Food</p>
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
      </div>
    </footer>
  );
}
