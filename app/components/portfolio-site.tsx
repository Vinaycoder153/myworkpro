"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { Project } from "@/app/lib/site-data";
import {
  awards,
  certificates,
  clientTypes,
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

const ctaButtons = ["Hire Me", "Get Free Consultation", "Start Your Project", "View Portfolio"];
const projectFilters = ["All", "AI", "Web", "Automation", "Design"];

export function PortfolioSite({ projects, githubRepos }: { projects: Project[]; githubRepos: GitHubRepo[] }) {
  const [filter, setFilter] = useState("All");
  const [isLight, setIsLight] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("theme-light", isLight);
  }, [isLight]);

  useEffect(() => {
    const updatePointer = (event: MouseEvent) => setPointer({ x: event.clientX, y: event.clientY });
    window.addEventListener("mousemove", updatePointer);
    return () => window.removeEventListener("mousemove", updatePointer);
  }, []);

  const filteredProjects = useMemo(
    () => projects.filter((project) => filter === "All" || project.category === filter),
    [filter, projects],
  );

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black text-white">
          <p className="text-sm tracking-[0.3em] text-white/75">VINAY M Y · LOADING EXPERIENCE</p>
        </div>
      ) : null}
      <div
        className="pointer-events-none fixed z-40 hidden h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl md:block"
        style={{ transform: `translate(${pointer.x - 80}px, ${pointer.y - 80}px)` }}
      />
      <div className="animated-bg fixed inset-0 -z-10" aria-hidden="true" />

      <header className="sticky top-0 z-30 border-b border-white/10 bg-black/60 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 text-sm sm:px-6">
          <p className="font-semibold tracking-[0.3em]">VINAY M Y</p>
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-2 text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" /> Live Available
            </span>
            <button
              className="rounded-full border border-white/20 px-3 py-1"
              onClick={() => setIsLight((current) => !current)}
            >
              {isLight ? "Dark Mode" : "Light Mode"}
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-4 py-10 sm:px-6 sm:py-16">
        <section className="glass rounded-3xl p-8 sm:p-12">
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-cyan-300">Premium Freelance Partner</p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">
            AI Full Stack Developer | AI Automation Expert | Web Designer | Freelance Developer
          </h1>
          <p className="mt-5 max-w-3xl text-base text-white/80 sm:text-lg">
            I build beautiful websites, AI-powered applications, business automation systems, and modern digital
            experiences that help businesses grow.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            {ctaButtons.map((button) => (
              <a
                key={button}
                href="#contact"
                className="rounded-full border border-cyan-300/30 bg-cyan-400/10 px-5 py-2 text-sm font-medium transition hover:bg-cyan-300/20"
              >
                {button}
              </a>
            ))}
          </div>
          <div className="mt-8 grid grid-cols-2 gap-3 text-xs text-white/70 sm:grid-cols-4">
            <p>100+ Projects Delivered</p>
            <p>48h Typical Kickoff</p>
            <p>SEO + Speed Focused</p>
            <p>Long-Term Support</p>
          </div>
        </section>

        <section>
          <h2 className="section-title">Target Clients</h2>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {clientTypes.map((client) => (
              <div key={client} className="glass rounded-2xl px-4 py-3 text-sm">
                {client}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="section-title">Services</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article key={service.title} className="glass group rounded-2xl p-5">
                <p className="text-xs uppercase tracking-widest text-cyan-200">{service.category}</p>
                <h3 className="mt-2 text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-white/75">{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="portfolio">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="section-title">Portfolio</h2>
            <div className="flex flex-wrap gap-2">
              {projectFilters.map((item) => (
                <button
                  key={item}
                  onClick={() => setFilter(item)}
                  className={`rounded-full border px-4 py-1 text-sm transition ${
                    filter === item ? "border-cyan-300 bg-cyan-400/20" : "border-white/20"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-4 grid gap-4 lg:grid-cols-2">
            {filteredProjects.map((project) => (
              <article key={project.name} className="glass rounded-2xl p-5">
                <h3 className="text-xl font-semibold">{project.name}</h3>
                <p className="mt-3 text-sm text-white/80"><strong>Problem:</strong> {project.problem}</p>
                <p className="mt-2 text-sm text-white/80"><strong>Solution:</strong> {project.solution}</p>
                <p className="mt-2 text-sm text-white/80"><strong>Results:</strong> {project.results}</p>
                <p className="mt-3 text-xs text-cyan-200">{project.technologies.join(" • ")}</p>
                <p className="mt-2 text-xs text-white/70">Gallery: {project.gallery.join(" · ")}</p>
                <div className="mt-4 flex gap-3 text-sm">
                  <a href={project.github} target="_blank" rel="noreferrer" className="underline">
                    GitHub
                  </a>
                  <a href={project.demo} className="underline">
                    Live Demo
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section>
          <h2 className="section-title">Why Hire Me</h2>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {whyHireMe.map((item) => (
              <div key={item} className="glass rounded-xl px-4 py-3 text-sm">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="section-title">Pricing</h2>
          <div className="mt-4 grid gap-4 lg:grid-cols-4">
            {pricingTiers.map((tier) => (
              <article key={tier.name} className="glass rounded-2xl p-5">
                <h3 className="text-xl font-semibold">{tier.name}</h3>
                <p className="mt-1 text-sm text-cyan-200">{tier.idealFor}</p>
                <p className="mt-3 text-2xl font-semibold">{tier.price}</p>
                <ul className="mt-3 space-y-1 text-sm text-white/80">
                  {tier.includes.map((line) => (
                    <li key={line}>• {line}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <div className="glass mt-4 overflow-x-auto rounded-2xl p-4">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="text-cyan-200">
                  <th className="pb-3">Feature</th>
                  <th>Basic</th>
                  <th>Standard</th>
                  <th>Premium</th>
                  <th>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((row) => (
                  <tr key={row[0]} className="border-t border-white/10">
                    {row.map((cell) => (
                      <td key={`${row[0]}-${cell}`} className="py-2 pr-2">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="section-title">Testimonials</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.name} className="glass rounded-2xl p-5 text-sm text-white/80">
                “{testimonial.quote}”
                <footer className="mt-4 text-cyan-200">
                  {testimonial.name} · {testimonial.role}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section>
          <h2 className="section-title">Trust & Authority</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="glass rounded-2xl p-5">
              <h3 className="text-lg font-semibold">Trust Badges</h3>
              <ul className="mt-3 space-y-1 text-sm text-white/80">{trustBadges.map((item) => <li key={item}>• {item}</li>)}</ul>
            </div>
            <div className="glass rounded-2xl p-5">
              <h3 className="text-lg font-semibold">Awards</h3>
              <ul className="mt-3 space-y-1 text-sm text-white/80">{awards.map((item) => <li key={item}>• {item}</li>)}</ul>
            </div>
            <div className="glass rounded-2xl p-5">
              <h3 className="text-lg font-semibold">Certificates & Resume</h3>
              <ul className="mt-3 space-y-1 text-sm text-white/80">{certificates.map((item) => <li key={item}>• {item}</li>)}</ul>
              <a className="mt-3 inline-block underline" href="#">Download Resume</a>
            </div>
          </div>
        </section>

        <section>
          <h2 className="section-title">GitHub API Highlights</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {githubRepos.length > 0 ? (
              githubRepos.map((repo) => (
                <article key={repo.id} className="glass rounded-2xl p-5">
                  <h3 className="text-lg font-semibold">{repo.name}</h3>
                  <p className="mt-2 text-sm text-white/75">⭐ {repo.stargazers_count} stars</p>
                  <a className="mt-3 inline-block underline" href={repo.html_url} target="_blank" rel="noreferrer">
                    View on GitHub
                  </a>
                </article>
              ))
            ) : (
              <p className="text-white/70">Live repository highlights unavailable at the moment.</p>
            )}
          </div>
        </section>

        <section id="blog" className="glass rounded-3xl p-6">
          <h2 className="section-title">Blog · Success Stories · Newsletter</h2>
          <p className="mt-3 text-sm text-white/80">
            Weekly practical insights on web growth, AI automation, and premium product execution.
          </p>
          <form className="mt-4 flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full rounded-xl border border-white/20 bg-transparent px-4 py-2 outline-none"
            />
            <button className="rounded-xl bg-cyan-400/20 px-5 py-2">Join Newsletter</button>
          </form>
        </section>

        <section>
          <h2 className="section-title">FAQ</h2>
          <div className="mt-4 space-y-3">
            {faq.map((item) => (
              <details key={item.q} className="glass rounded-xl p-4">
                <summary className="cursor-pointer font-medium">{item.q}</summary>
                <p className="mt-2 text-sm text-white/75">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section id="contact" className="glass rounded-3xl p-6 sm:p-8">
          <h2 className="section-title">Start Your Project</h2>
          <p className="mt-3 text-sm text-white/80">Book a call, send your project details, and get a conversion-focused execution plan.</p>
          <div className="mt-5 flex flex-wrap gap-3 text-sm">
            <Link href="https://calendly.com" target="_blank" className="rounded-full border border-white/30 px-4 py-2">
              Calendly Booking
            </Link>
            <button className="rounded-full border border-white/30 px-4 py-2">AI Chatbot Demo</button>
          </div>
          <form className="mt-6 grid gap-3 sm:grid-cols-2">
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
                className="rounded-xl border border-white/20 bg-transparent px-4 py-2 outline-none"
              />
            ))}
            <textarea
              required
              placeholder="Message"
              className="min-h-28 rounded-xl border border-white/20 bg-transparent px-4 py-2 outline-none sm:col-span-2"
            />
            <button className="rounded-xl bg-cyan-400/20 px-5 py-2 sm:col-span-2">Send Project Details</button>
          </form>
        </section>
      </main>

      <a
        href="https://wa.me/0000000000"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-black shadow-lg"
      >
        WhatsApp
      </a>
    </>
  );
}
