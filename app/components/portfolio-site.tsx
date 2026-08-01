"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type MouseEvent as ReactMouseEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Project } from "@/app/lib/site-data";
import {
  awards,
  certificates,
  comparisonFeatures,
  faq,
  pricingTiers,
  services,
  testimonials,
  trustBadges,
  whyHireMe,
} from "@/app/lib/site-data";

type GitHubRepo = {
  id: number;
  name: string;
  html_url: string;
  stargazers_count: number;
};

type NavItem = { id: string; label: string };

const navItems: NavItem[] = [
  { id: "hero", label: "Home" },
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "pricing", label: "Pricing" },
  { id: "proof", label: "Proof" },
  { id: "contact", label: "Contact" },
];

const projectFilters = ["All", "AI", "Web", "Automation", "Design"];

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <header className="space-y-3">
      <p className="text-xs font-medium uppercase tracking-[0.35em] text-cyan-200/80">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">{title}</h2>
      {description ? <p className="max-w-2xl text-sm text-slate-300 sm:text-base">{description}</p> : null}
    </header>
  );
}

function MagneticButton({ href, children }: { href: string; children: string }) {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const handleMove = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    const button = ref.current;
    if (!button) return;
    const rect = button.getBoundingClientRect();
    const x = event.clientX - (rect.left + rect.width / 2);
    const y = event.clientY - (rect.top + rect.height / 2);
    button.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
  };

  return (
    <a
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={() => {
        if (ref.current) ref.current.style.transform = "translate(0, 0)";
      }}
      className="group relative inline-flex overflow-hidden rounded-full border border-cyan-200/40 bg-cyan-300/10 px-6 py-3 text-sm font-medium text-cyan-50 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
    >
      <span className="absolute inset-0 bg-gradient-to-r from-cyan-300/20 to-violet-300/20 opacity-0 transition group-hover:opacity-100" />
      <span className="relative">{children}</span>
    </a>
  );
}

export function PortfolioSite({ projects, githubRepos }: { projects: Project[]; githubRepos: GitHubRepo[] }) {
  const [activeSection, setActiveSection] = useState("hero");
  const [filter, setFilter] = useState("All");
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const shouldReduceMotion = useReducedMotion();

  const filteredProjects = useMemo(
    () => projects.filter((project) => filter === "All" || project.category === filter),
    [filter, projects],
  );
  const contactFields = [
    { id: "projectType", label: "Project Type" },
    { id: "budget", label: "Budget" },
    { id: "timeline", label: "Timeline" },
    { id: "businessName", label: "Business Name" },
    { id: "email", label: "Email" },
    { id: "whatsapp", label: "WhatsApp" },
  ];

  useEffect(() => {
    if (shouldReduceMotion) return;

    gsap.registerPlugin(ScrollTrigger);
    const elements = gsap.utils.toArray<HTMLElement>("[data-reveal]");

    elements.forEach((element) => {
      gsap.fromTo(
        element,
        { y: 28, opacity: 0, filter: "blur(12px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.9,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
          },
        },
      );
    });

    const lenis = new Lenis({ duration: 1.1, smoothWheel: true, lerp: 0.08 });
    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [shouldReduceMotion]);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.45 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (shouldReduceMotion) return;
    const onMove = (event: MouseEvent) => setPointer({ x: event.clientX, y: event.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [shouldReduceMotion]);

  return (
    <>
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-slate-900 focus:px-3 focus:py-2"
      >
        Skip to content
      </a>

      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-70"
        aria-hidden
        style={{
          background: `radial-gradient(320px circle at ${pointer.x}px ${pointer.y}px, rgba(0, 245, 255, 0.16), transparent 42%)`,
        }}
      />
      <div className="noise fixed inset-0 z-0 opacity-25" aria-hidden />
      <div className="mesh-bg fixed inset-0 z-0" aria-hidden />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#050816]/70 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-8">
          <p className="text-sm font-semibold tracking-[0.35em] text-white/90">VINAY M Y</p>
          <nav aria-label="Primary" className="hidden gap-2 md:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`rounded-full px-4 py-2 text-xs tracking-wide transition ${
                  activeSection === item.id
                    ? "bg-white/15 text-white"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"
                } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <span className="hidden items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-200 sm:inline-flex">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" /> Available now
          </span>
        </div>
        <div className="h-0.5 w-full bg-white/5">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-300 via-violet-400 to-emerald-300"
            style={{ transformOrigin: "0% 50%" }}
            animate={{ scaleX: activeSection === "hero" ? 0.16 : activeSection === "services" ? 0.34 : activeSection === "work" ? 0.55 : activeSection === "pricing" ? 0.73 : activeSection === "proof" ? 0.88 : 1 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          />
        </div>
      </header>

      <main className="relative z-10 mx-auto grid w-full max-w-7xl gap-24 px-4 pb-24 pt-10 sm:px-8 sm:pt-16">
        <section id="hero" className="glass-panel grid gap-10 rounded-[2rem] p-8 md:grid-cols-12 md:p-12" data-reveal>
          <div className="space-y-6 md:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-cyan-200/30 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-cyan-100">
              Premium AI Full-Stack Developer
            </p>
            <motion.h1
              className="text-balance text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Building cinematic digital products that convert trust into revenue.
            </motion.h1>
            <p className="max-w-xl text-base text-slate-200 sm:text-lg">
              I craft premium web experiences, AI systems, and business automation platforms with world-class interaction
              quality and enterprise-grade architecture.
            </p>
            <div className="flex flex-wrap gap-3">
              <MagneticButton href="#contact">Start Your Project</MagneticButton>
              <MagneticButton href="#work">View Case Studies</MagneticButton>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs text-slate-300 sm:grid-cols-4">
              <p className="glass-chip">100+ launches</p>
              <p className="glass-chip">95+ Lighthouse</p>
              <p className="glass-chip">WCAG AA+</p>
              <p className="glass-chip">48h kickoff</p>
            </div>
          </div>
          <aside className="glass-panel relative rounded-3xl p-6 md:col-span-5">
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-violet-400/30 blur-2xl" aria-hidden />
            <h2 className="text-xl font-semibold text-white">Project Velocity Card</h2>
            <p className="mt-2 text-sm text-slate-300">Fast turnarounds with premium execution quality.</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-200">
              <li className="glass-chip">Design System + Motion Language</li>
              <li className="glass-chip">SEO + Performance-first delivery</li>
              <li className="glass-chip">Continuous iteration + reporting</li>
            </ul>
          </aside>
        </section>

        <section id="services" className="space-y-8" data-reveal>
          <SectionHeading
            eyebrow="Capabilities"
            title="Premium services for ambitious teams"
            description="From conversion-led websites to AI workflows, every engagement is designed for business outcomes."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.slice(0, 9).map((service, index) => (
              <motion.article
                key={service.title}
                whileHover={shouldReduceMotion ? undefined : { y: -6, rotateX: 1.5 }}
                transition={{ duration: 0.25 }}
                className="glass-panel rounded-3xl p-6"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-200/80">0{index + 1} · {service.category}</p>
                <h3 className="mt-3 text-xl font-medium text-white">{service.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{service.description}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="work" className="space-y-8" data-reveal>
          <SectionHeading
            eyebrow="Case Studies"
            title="Interactive work showcase"
            description="Selected projects with measurable business impact and production-ready engineering quality."
          />
          <div className="flex flex-wrap gap-2">
            {projectFilters.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                className={`rounded-full border px-4 py-2 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${
                  filter === item ? "border-cyan-200/60 bg-cyan-300/20 text-white" : "border-white/20 text-slate-300 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {filteredProjects.slice(0, 6).map((project) => (
              <article key={project.name} className="glass-panel rounded-3xl p-6">
                <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
                <p className="mt-3 text-sm text-slate-300">{project.problem}</p>
                <p className="mt-2 text-sm text-slate-200">{project.solution}</p>
                <p className="mt-3 rounded-xl bg-white/5 px-3 py-2 text-sm text-emerald-200">{project.results}</p>
                <p className="mt-3 text-xs text-cyan-200">{project.technologies.join(" • ")}</p>
                <div className="mt-5 flex items-center gap-4 text-sm">
                  <a className="text-cyan-100 underline decoration-cyan-300/70 underline-offset-4" href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                  <a className="text-cyan-100 underline decoration-cyan-300/70 underline-offset-4" href={project.demo}>Preview</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="pricing" className="space-y-8" data-reveal>
          <SectionHeading
            eyebrow="Investment"
            title="Transparent premium pricing"
            description="Flexible engagement models tailored for founders, teams, and enterprise operators."
          />
          <div className="grid gap-4 xl:grid-cols-4">
            {pricingTiers.map((tier, index) => (
              <article key={tier.name} className="glass-panel relative rounded-3xl p-6">
                {index === 2 ? (
                  <span className="absolute right-5 top-5 rounded-full bg-violet-300/25 px-3 py-1 text-xs text-violet-100">Popular</span>
                ) : null}
                <h3 className="text-2xl font-semibold text-white">{tier.name}</h3>
                <p className="mt-2 text-sm text-cyan-200">{tier.idealFor}</p>
                <p className="mt-3 text-3xl font-semibold text-white">{tier.price}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {tier.includes.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="glass-panel overflow-x-auto rounded-3xl p-5">
            <table className="w-full min-w-[540px] text-left text-sm">
              <thead>
                <tr className="text-cyan-100">
                  <th className="pb-3">Feature</th>
                  <th>Basic</th>
                  <th>Standard</th>
                  <th>Premium</th>
                  <th>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row) => (
                  <tr key={row[0]} className="border-t border-white/10 text-slate-200">
                    {row.map((cell) => (
                      <td key={`${row[0]}-${cell}`} className="py-3 pr-2">{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="proof" className="grid gap-8 xl:grid-cols-12" data-reveal>
          <div className="space-y-8 xl:col-span-8">
            <SectionHeading eyebrow="Trust" title="Social proof that closes high-value clients" />
            <div className="grid gap-4 md:grid-cols-2">
              {testimonials.map((testimonial) => (
                <blockquote key={testimonial.name} className="glass-panel rounded-3xl p-6 text-sm text-slate-200">
                  “{testimonial.quote}”
                  <footer className="mt-4 text-cyan-200">{testimonial.name} · {testimonial.role}</footer>
                </blockquote>
              ))}
            </div>
          </div>
          <div className="space-y-4 xl:col-span-4">
            {[{ title: "Trust Badges", values: trustBadges }, { title: "Awards", values: awards }, { title: "Certificates", values: certificates }].map((group) => (
              <article key={group.title} className="glass-panel rounded-3xl p-5">
                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                <ul className="mt-3 space-y-1 text-sm text-slate-300">
                  {group.values.map((value) => (
                    <li key={value}>• {value}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="space-y-8" data-reveal>
          <SectionHeading eyebrow="Open Source" title="Live GitHub highlights" />
          <div className="grid gap-4 md:grid-cols-2">
            {githubRepos.length > 0 ? (
              githubRepos.map((repo) => (
                <article key={repo.id} className="glass-panel rounded-3xl p-6">
                  <h3 className="text-xl font-medium text-white">{repo.name}</h3>
                  <p className="mt-2 text-sm text-slate-300">⭐ {repo.stargazers_count} stars</p>
                  <a className="mt-4 inline-block text-cyan-100 underline underline-offset-4" href={repo.html_url} target="_blank" rel="noreferrer">View repository</a>
                </article>
              ))
            ) : (
              <p className="text-slate-300">GitHub highlights are temporarily unavailable.</p>
            )}
          </div>
        </section>

        <section className="space-y-4" data-reveal>
          <SectionHeading eyebrow="FAQ" title="Answers before kickoff" />
          {faq.map((entry) => (
            <details key={entry.q} className="glass-panel rounded-2xl p-4 text-sm text-slate-200">
              <summary className="cursor-pointer font-medium text-white">{entry.q}</summary>
              <p className="mt-2 text-slate-300">{entry.a}</p>
            </details>
          ))}
          <p className="text-xs text-slate-400">Why hire me: {whyHireMe.slice(0, 6).join(" · ")}</p>
        </section>

        <section id="contact" className="glass-panel rounded-[2rem] p-8 sm:p-10" data-reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Ready to build something exceptional?"
            description="Tell me your goals and I will send a strategy-first execution plan with timeline, stack, and deliverables."
          />
          <form className="mt-6 grid gap-3 sm:grid-cols-2" aria-label="Project inquiry form">
            {contactFields.map((field) => (
              <label key={field.id} className="sr-only" htmlFor={field.id}>
                {field.label}
              </label>
            ))}
            {contactFields.map((field) => (
              <input
                key={field.id}
                id={field.id}
                required
                placeholder={field.label}
                className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              />
            ))}
            <textarea
              required
              placeholder="Message"
              className="min-h-28 rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 sm:col-span-2"
            />
            <div className="flex flex-wrap gap-3 sm:col-span-2">
              <button className="rounded-full border border-cyan-200/40 bg-cyan-300/15 px-5 py-2 text-sm text-white">Send Project Details</button>
              <Link
                href="https://calendly.com"
                target="_blank"
                className="rounded-full border border-white/30 px-5 py-2 text-sm text-slate-100"
              >
                Book on Calendly
              </Link>
            </div>
          </form>
        </section>
      </main>

      <a
        href="https://wa.me/0000000000"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-40 rounded-full border border-emerald-200/40 bg-emerald-300/85 px-4 py-2 text-sm font-semibold text-slate-950 shadow-2xl transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200"
      >
        WhatsApp
      </a>
    </>
  );
}
