"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type MouseEvent as ReactMouseEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Project } from "@/app/lib/site-data";
import {
  aboutHighlights,
  awards,
  blogPosts,
  certificates,
  comparisonFeatures,
  coreValues,
  experienceTimeline,
  faq,
  pricingTiers,
  processSteps,
  services,
  skillCoverage,
  techStackGroups,
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
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "work", label: "Work" },
  { id: "process", label: "Process" },
  { id: "pricing", label: "Pricing" },
  { id: "proof", label: "Proof" },
  { id: "lab", label: "AI Tools" },
  { id: "blog", label: "Blog" },
  { id: "contact", label: "Contact" },
];

const projectFilters = ["All", "AI", "Web", "Automation", "Design"];
const serviceTypes = ["AI SaaS", "Website", "Dashboard", "Automation", "MVP"];

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <header className="space-y-8">
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
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [selectedType, setSelectedType] = useState(serviceTypes[0]);
  const [budget, setBudget] = useState(2500);
  const [timeline, setTimeline] = useState(4);
  const [chatInput, setChatInput] = useState("I need a premium website with AI chatbot automation.");
  const shouldReduceMotion = useReducedMotion();

  const filteredProjects = useMemo(
    () => projects.filter((project) => filter === "All" || project.category === filter),
    [filter, projects],
  );

  const recommendation = useMemo(() => {
    if (selectedType === "Automation") return projects.find((project) => project.category === "Automation") ?? projects[0];
    if (selectedType === "AI SaaS") return projects.find((project) => project.name.includes("AI")) ?? projects[0];
    if (selectedType === "Dashboard") return projects.find((project) => project.name.includes("Attendance")) ?? projects[0];
    if (selectedType === "MVP") return projects.find((project) => project.name.includes("MindFlow")) ?? projects[0];
    return projects.find((project) => project.category === "Web") ?? projects[0];
  }, [projects, selectedType]);

  const estimate = useMemo(() => {
    const timelineMultiplier = timeline <= 2 ? 1.3 : timeline <= 4 ? 1.1 : 0.95;
    const typeBoost = selectedType === "AI SaaS" ? 1.35 : selectedType === "Automation" ? 1.2 : 1;
    return Math.round(budget * timelineMultiplier * typeBoost);
  }, [budget, selectedType, timeline]);

  const chatResponse = useMemo(
    () =>
      `Best fit: ${selectedType} engagement. Focus on trust-first hero, conversion proof, and an AI-assisted inquiry funnel. Suggested investment starts near $${estimate.toLocaleString()}.`,
    [estimate, selectedType],
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

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

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[color:var(--background)]/75 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-8">
          <p className="text-sm font-semibold tracking-[0.35em] text-[color:var(--foreground)]">VINAY M Y</p>
          <nav aria-label="Primary" className="hidden gap-2 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`rounded-full px-4 py-2 text-xs tracking-wide transition ${
                  activeSection === item.id
                    ? "bg-white/15 text-[color:var(--foreground)]"
                    : "text-slate-300 hover:bg-white/10 hover:text-[color:var(--foreground)]"
                } focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setTheme((value) => (value === "dark" ? "light" : "dark"))}
              className="rounded-full border border-white/25 bg-white/5 px-3 py-2 text-xs text-slate-100"
            >
              {theme === "dark" ? "Light" : "Dark"} mode
            </button>
            <span className="hidden items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-300/10 px-3 py-1 text-xs text-emerald-200 sm:inline-flex">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" /> Live availability
            </span>
          </div>
        </div>
        <div className="h-0.5 w-full bg-white/5">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-300 via-violet-400 to-emerald-300"
            style={{ transformOrigin: "0% 50%" }}
            animate={{
              scaleX:
                activeSection === "hero"
                  ? 0.1
                  : activeSection === "about"
                    ? 0.2
                    : activeSection === "services"
                      ? 0.32
                      : activeSection === "work"
                        ? 0.45
                        : activeSection === "process"
                          ? 0.55
                          : activeSection === "pricing"
                            ? 0.66
                            : activeSection === "proof"
                              ? 0.77
                              : activeSection === "lab"
                                ? 0.87
                                : activeSection === "blog"
                                  ? 0.94
                                  : 1,
            }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          />
        </div>
      </header>

      <main className="relative z-10 mx-auto grid w-full max-w-7xl gap-24 px-4 pb-36 pt-10 sm:px-8 sm:pt-16">
        <section id="hero" className="glass-panel grid gap-10 rounded-[2rem] p-8 md:grid-cols-12 md:p-12" data-reveal>
          <div className="space-y-6 md:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-full border border-cyan-200/30 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-cyan-100">
              Premium AI Full-Stack Developer
            </p>
            <motion.h1
              className="text-balance text-4xl font-semibold leading-tight tracking-tight text-[color:var(--foreground)] sm:text-6xl"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Digital experiences engineered to build trust, accelerate growth, and close high-value clients.
            </motion.h1>
            <p className="max-w-xl text-base text-slate-200 sm:text-lg">
              I design and build AI SaaS apps, modern business websites, enterprise dashboards, automation systems, and
              conversion-first product experiences.
            </p>
            <div className="flex flex-wrap gap-3">
              <MagneticButton href="#contact">Start Your Project</MagneticButton>
              <MagneticButton href="#work">View Case Studies</MagneticButton>
            </div>
            <div className="grid grid-cols-2 gap-3 text-xs text-slate-300 sm:grid-cols-4">
              <p className="glass-chip">100+ launches</p>
              <p className="glass-chip">95+ Lighthouse</p>
              <p className="glass-chip">WCAG AA</p>
              <p className="glass-chip">48h kickoff</p>
            </div>
            <div className="marquee text-xs uppercase tracking-[0.25em] text-cyan-100/80">
              <div className="marquee-track">Trusted by founders • agencies • healthcare • D2C • enterprise teams •</div>
            </div>
          </div>
          <aside className="glass-panel relative rounded-3xl p-6 md:col-span-5">
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-violet-400/30 blur-2xl" aria-hidden />
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-[color:var(--foreground)]">Client Confidence Card</h2>
              <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-slate-200">Available now</span>
            </div>
            <p className="text-sm text-slate-300">Technical execution with premium product thinking and CRO discipline.</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-200">
              <li className="glass-chip">Design system + motion language</li>
              <li className="glass-chip">AI integrations + automation stack</li>
              <li className="glass-chip">SEO + performance + analytics</li>
            </ul>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {["Clutch", "GitHub", "Awwwards-ready"].map((logo) => (
                <span key={logo} className="rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-center text-xs text-slate-200">
                  {logo}
                </span>
              ))}
            </div>
          </aside>
        </section>

        <section id="about" className="grid gap-6 xl:grid-cols-12" data-reveal>
          <div className="space-y-8 xl:col-span-7">
            <SectionHeading
              eyebrow="About"
              title="Premium execution rooted in business outcomes"
              description="I partner with teams that value clear strategy, polished experience, and measurable results."
            />
            <div className="glass-panel rounded-3xl p-6 space-y-4">
              {aboutHighlights.map((line) => (
                <p key={line} className="text-sm text-slate-200">
                  {line}
                </p>
              ))}
            </div>
            <div className="glass-panel rounded-3xl p-6">
              <h3 className="text-lg font-semibold text-[color:var(--foreground)]">Experience Timeline</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                {experienceTimeline.map((item) => (
                  <li key={item} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="space-y-4 xl:col-span-5">
            <article className="glass-panel rounded-3xl p-6">
              <h3 className="text-lg font-semibold text-[color:var(--foreground)]">Skills Visualization</h3>
              <div className="mt-4 space-y-4">
                {skillCoverage.map((skill) => (
                  <div key={skill.label}>
                    <div className="mb-2 flex justify-between text-xs text-slate-200">
                      <span>{skill.label}</span>
                      <span>{skill.value}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10">
                      <div className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-violet-400" style={{ width: `${skill.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </article>
            <article className="glass-panel rounded-3xl p-6">
              <h3 className="text-lg font-semibold text-[color:var(--foreground)]">Core Values</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {coreValues.map((value) => (
                  <li key={value}>• {value}</li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section id="services" className="space-y-8" data-reveal>
          <SectionHeading
            eyebrow="Capabilities"
            title="Premium services designed as business assets"
            description="Each engagement is scoped like a product investment: clear deliverables, timeline, stack, and impact."
          />
          <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <motion.article
                key={service.title}
                whileHover={shouldReduceMotion ? undefined : { y: -6, rotateX: 1.5 }}
                transition={{ duration: 0.25 }}
                className="glass-panel rounded-3xl p-6"
              >
                <p className="text-xs uppercase tracking-[0.25em] text-cyan-200/80">{service.category}</p>
                <h3 className="mt-3 text-xl font-medium text-[color:var(--foreground)]">{service.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{service.description}</p>
                <p className="mt-3 text-xs text-emerald-200">Timeline: {service.timeline}</p>
                <p className="mt-2 text-xs text-cyan-100">{service.technologies.join(" • ")}</p>
                <ul className="mt-4 space-y-1 text-sm text-slate-200">
                  {service.deliverables.map((deliverable) => (
                    <li key={deliverable}>• {deliverable}</li>
                  ))}
                </ul>
                <p className="mt-4 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs text-slate-200">{service.benefits}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="work" className="space-y-8" data-reveal>
          <SectionHeading
            eyebrow="Case Studies"
            title="Full-story project showcases"
            description="Every case study outlines problem, research, architecture, metrics, and business results."
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
          <div className="grid gap-4 xl:grid-cols-2">
            {filteredProjects.slice(0, 6).map((project) => (
              <article key={project.name} className="glass-panel rounded-3xl p-6">
                <h3 className="text-2xl font-semibold text-[color:var(--foreground)]">{project.name}</h3>
                <p className="mt-3 text-sm text-slate-300"><span className="text-cyan-100">Problem:</span> {project.problem}</p>
                <p className="mt-2 text-sm text-slate-300"><span className="text-cyan-100">Research:</span> {project.research}</p>
                <p className="mt-2 text-sm text-slate-200"><span className="text-cyan-100">Solution:</span> {project.solution}</p>
                <p className="mt-2 text-sm text-slate-300"><span className="text-cyan-100">Architecture:</span> {project.architecture}</p>
                <p className="mt-2 text-sm text-slate-300"><span className="text-cyan-100">Performance:</span> {project.performanceMetrics}</p>
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-slate-200">
                  {project.gallery.map((item) => (
                    <span key={item} className="rounded-full border border-white/15 bg-white/5 px-3 py-1">{item}</span>
                  ))}
                </div>
                <p className="mt-3 rounded-xl bg-white/5 px-3 py-2 text-sm text-emerald-200">{project.results}</p>
                <p className="mt-3 text-xs text-cyan-200">{project.technologies.join(" • ")}</p>
                <div className="mt-5 flex items-center gap-4 text-sm">
                  <a className="text-cyan-100 underline decoration-cyan-300/70 underline-offset-4" href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                  <a className="text-cyan-100 underline decoration-cyan-300/70 underline-offset-4" href={project.demo}>Live Demo</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="space-y-8" data-reveal>
          <SectionHeading eyebrow="Workflow" title="Discover → Research → Design → Develop → Test → Deploy → Support" />
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => (
              <motion.article
                key={step}
                whileHover={shouldReduceMotion ? undefined : { y: -4 }}
                className="glass-panel rounded-2xl p-5"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">Step {index + 1}</p>
                <h3 className="mt-2 text-lg font-medium text-[color:var(--foreground)]">{step}</h3>
                <p className="mt-2 text-sm text-slate-300">Clear milestones, transparent updates, and measurable deliverables.</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="pricing" className="space-y-8" data-reveal>
          <SectionHeading
            eyebrow="Investment"
            title="Transparent premium pricing"
            description="Starter, Professional, Business, Enterprise, and Custom Quote options for every growth stage."
          />
          <div className="grid gap-4 xl:grid-cols-5">
            {pricingTiers.map((tier, index) => (
              <article key={tier.name} className="glass-panel relative rounded-3xl p-6">
                {index === 2 ? (
                  <span className="absolute right-5 top-5 rounded-full bg-violet-300/25 px-3 py-1 text-xs text-violet-100">Popular</span>
                ) : null}
                <h3 className="text-2xl font-semibold text-[color:var(--foreground)]">{tier.name}</h3>
                <p className="mt-2 text-sm text-cyan-200">{tier.idealFor}</p>
                <p className="mt-3 text-3xl font-semibold text-[color:var(--foreground)]">{tier.price}</p>
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
                  <th>Starter</th>
                  <th>Professional</th>
                  <th>Business</th>
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
            <SectionHeading eyebrow="Trust" title="Proof assets that increase buying confidence" />
            <div className="grid gap-4 md:grid-cols-2">
              {testimonials.map((testimonial) => (
                <blockquote key={testimonial.name} className="glass-panel rounded-3xl p-6 text-sm text-slate-200">
                  <div className="mb-3 flex items-center justify-between text-xs text-cyan-200">
                    <span>{testimonial.company}</span>
                    <span>★ {testimonial.rating}</span>
                  </div>
                  <p>“{testimonial.quote}”</p>
                  <footer className="mt-4 text-cyan-200">
                    {testimonial.name} · {testimonial.projectType}
                  </footer>
                  <p className="mt-2 text-xs text-emerald-200">Result: {testimonial.impact}</p>
                </blockquote>
              ))}
            </div>
          </div>
          <div className="space-y-4 xl:col-span-4">
            {[{ title: "Trust Badges", values: trustBadges }, { title: "Awards", values: awards }, { title: "Certifications", values: certificates }].map((group) => (
              <article key={group.title} className="glass-panel rounded-3xl p-5">
                <h3 className="text-lg font-semibold text-[color:var(--foreground)]">{group.title}</h3>
                <ul className="mt-3 space-y-1 text-sm text-slate-300">
                  {group.values.map((value) => (
                    <li key={value}>• {value}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="lab" className="space-y-8" data-reveal>
          <SectionHeading
            eyebrow="AI Experience"
            title="Smart recommendation, estimator, and chatbot preview"
            description="Conversion-focused utilities that simulate portfolio AI features before integration with APIs."
          />
          <div className="grid gap-4 xl:grid-cols-3">
            <article className="glass-panel rounded-3xl p-6 space-y-4">
              <h3 className="text-lg font-semibold text-[color:var(--foreground)]">Smart Project Recommendation</h3>
              <label htmlFor="service-type" className="text-xs uppercase tracking-[0.2em] text-slate-300">Project Type</label>
              <select
                id="service-type"
                value={selectedType}
                onChange={(event) => setSelectedType(event.target.value)}
                className="w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-sm text-white"
              >
                {serviceTypes.map((type) => (
                  <option key={type} value={type} className="bg-slate-900">{type}</option>
                ))}
              </select>
              <p className="text-sm text-slate-200">Recommended case: {recommendation?.name}</p>
              <p className="text-xs text-cyan-100">{recommendation?.results}</p>
            </article>

            <article className="glass-panel rounded-3xl p-6 space-y-4">
              <h3 className="text-lg font-semibold text-[color:var(--foreground)]">AI Project Cost Estimator</h3>
              <label htmlFor="budget" className="text-xs uppercase tracking-[0.2em] text-slate-300">Base Budget (${budget})</label>
              <input id="budget" type="range" min={800} max={15000} step={100} value={budget} onChange={(event) => setBudget(Number(event.target.value))} />
              <label htmlFor="timeline" className="text-xs uppercase tracking-[0.2em] text-slate-300">Timeline ({timeline} weeks)</label>
              <input id="timeline" type="range" min={1} max={12} step={1} value={timeline} onChange={(event) => setTimeline(Number(event.target.value))} />
              <p className="rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-sm text-emerald-200">Estimated investment: ${estimate.toLocaleString()}</p>
            </article>

            <article className="glass-panel rounded-3xl p-6 space-y-4">
              <h3 className="text-lg font-semibold text-[color:var(--foreground)]">AI Chatbot Preview</h3>
              <label htmlFor="ai-chat" className="sr-only">Ask portfolio assistant</label>
              <textarea
                id="ai-chat"
                value={chatInput}
                onChange={(event) => setChatInput(event.target.value)}
                className="min-h-24 w-full rounded-xl border border-white/20 bg-white/5 px-3 py-2 text-sm text-white"
              />
              <p className="text-xs text-slate-300">Intent detected from your brief: {chatInput.slice(0, 80)}...</p>
              <p className="rounded-xl border border-cyan-200/20 bg-cyan-300/10 px-3 py-2 text-sm text-cyan-100">{chatResponse}</p>
            </article>
          </div>
        </section>

        <section className="space-y-8" data-reveal>
          <SectionHeading eyebrow="Open Source" title="GitHub activity and latest repositories" />
          <div className="grid gap-4 md:grid-cols-2">
            {githubRepos.length > 0 ? (
              githubRepos.map((repo) => (
                <article key={repo.id} className="glass-panel rounded-3xl p-6">
                  <h3 className="text-xl font-medium text-[color:var(--foreground)]">{repo.name}</h3>
                  <p className="mt-2 text-sm text-slate-300">⭐ {repo.stargazers_count} stars</p>
                  <a className="mt-4 inline-block text-cyan-100 underline underline-offset-4" href={repo.html_url} target="_blank" rel="noreferrer">View repository</a>
                </article>
              ))
            ) : (
              <p className="text-slate-300">GitHub highlights are temporarily unavailable.</p>
            )}
          </div>
        </section>

        <section id="blog" className="grid gap-6 xl:grid-cols-12" data-reveal>
          <div className="xl:col-span-7 space-y-6">
            <SectionHeading eyebrow="Blog" title="Insights on AI products, UX, and conversion strategy" />
            <div className="grid gap-4">
              {blogPosts.map((post) => (
                <article key={post.title} className="glass-panel rounded-3xl p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">{post.category}</p>
                  <h3 className="mt-2 text-lg font-medium text-[color:var(--foreground)]">{post.title}</h3>
                  <p className="mt-2 text-xs text-slate-300">{post.readTime}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="xl:col-span-5">
            <article className="glass-panel rounded-3xl p-6">
              <h3 className="text-lg font-semibold text-[color:var(--foreground)]">Tech Stack</h3>
              <div className="mt-4 space-y-3">
                {techStackGroups.map((group) => (
                  <div key={group.title}>
                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">{group.title}</p>
                    <p className="mt-1 text-sm text-slate-300">{group.items.join(" • ")}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="space-y-4" data-reveal>
          <SectionHeading eyebrow="FAQ" title="Answers before kickoff" />
          {faq.map((entry) => (
            <details key={entry.q} className="glass-panel rounded-2xl p-4 text-sm text-slate-200">
              <summary className="cursor-pointer font-medium text-[color:var(--foreground)]">{entry.q}</summary>
              <p className="mt-2 text-slate-300">{entry.a}</p>
            </details>
          ))}
          <p className="text-xs text-slate-400">Why hire me: {whyHireMe.slice(0, 6).join(" · ")}</p>
        </section>

        <section id="contact" className="glass-panel rounded-[2rem] p-8 sm:p-10" data-reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Ready to build something exceptional?"
            description="Share your goals and get a strategy-first proposal with timeline, architecture, and investment options."
          />
          <form className="mt-6 grid gap-3 sm:grid-cols-2" aria-label="Project inquiry form">
            {[
              "Project Type",
              "Budget",
              "Timeline",
              "Business Name",
              "Email",
              "WhatsApp",
            ].map((field) => (
              <input
                key={field}
                required
                placeholder={field}
                className="rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              />
            ))}
            <textarea
              required
              placeholder="Message"
              className="min-h-28 rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 sm:col-span-2"
            />
            <label className="rounded-xl border border-dashed border-white/25 bg-white/5 px-4 py-3 text-xs text-slate-300 sm:col-span-2">
              Upload project brief
              <input type="file" className="mt-2 block text-xs" />
            </label>
            <div className="flex flex-wrap gap-3 sm:col-span-2">
              <button className="rounded-full border border-cyan-200/40 bg-cyan-300/15 px-5 py-2 text-sm text-white">Send Project Details</button>
              <Link
                href="https://calendly.com"
                target="_blank"
                className="rounded-full border border-white/30 px-5 py-2 text-sm text-slate-100"
              >
                Book on Calendly
              </Link>
              <a
                href="/resume.pdf"
                className="rounded-full border border-white/30 px-5 py-2 text-sm text-slate-100"
                download
              >
                Download Resume
              </a>
            </div>
          </form>
        </section>
      </main>

      <nav className="fixed bottom-4 left-1/2 z-40 flex w-[min(95vw,560px)] -translate-x-1/2 justify-between rounded-full border border-white/15 bg-slate-950/85 p-2 backdrop-blur lg:hidden">
        {navItems.slice(0, 5).map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`rounded-full px-3 py-2 text-[11px] ${activeSection === item.id ? "bg-white/15 text-white" : "text-slate-300"}`}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <a
        href="https://wa.me/0000000000"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-24 right-5 z-40 rounded-full border border-emerald-200/40 bg-emerald-300/85 px-4 py-2 text-sm font-semibold text-slate-950 shadow-2xl transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-200 lg:bottom-5"
      >
        WhatsApp
      </a>
    </>
  );
}
