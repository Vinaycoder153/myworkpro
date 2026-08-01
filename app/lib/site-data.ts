export type Service = {
  title: string;
  category: string;
  description: string;
  deliverables: string[];
  timeline: string;
  technologies: string[];
  benefits: string;
};
export type Project = {
  name: string;
  category: string;
  problem: string;
  research: string;
  solution: string;
  technologies: string[];
  architecture: string;
  performanceMetrics: string;
  results: string;
  gallery: string[];
  github: string;
  demo: string;
};

export const services: Service[] = [
  {
    title: "AI SaaS Applications",
    category: "AI",
    description: "Premium SaaS products blending product design, AI intelligence, and scalable architecture.",
    deliverables: ["Product strategy sprint", "UX system", "Dashboard + billing", "Launch analytics"],
    timeline: "4-8 weeks",
    technologies: ["Next.js", "TypeScript", "Supabase", "OpenAI"],
    benefits: "Launch faster with enterprise-ready foundations.",
  },
  {
    title: "Modern Business Websites",
    category: "Web",
    description: "High-conversion brand sites designed to build trust and drive qualified inquiries.",
    deliverables: ["Brand direction", "Conversion copy blocks", "Motion system", "SEO setup"],
    timeline: "2-4 weeks",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    benefits: "Increase lead quality through premium positioning.",
  },
  {
    title: "Enterprise Dashboards",
    category: "Product",
    description: "Internal tools and data-rich dashboards with robust workflows and role-based UX.",
    deliverables: ["Data model", "Interactive charts", "Access controls", "Admin workflows"],
    timeline: "3-6 weeks",
    technologies: ["React", "Node.js", "PostgreSQL", "Firebase"],
    benefits: "Reduce operational friction with actionable visibility.",
  },
  {
    title: "AI Agents & Chatbots",
    category: "Automation",
    description: "Context-aware AI copilots for customer support, operations, and sales automation.",
    deliverables: ["Knowledge design", "Prompt architecture", "Integrations", "Analytics loop"],
    timeline: "2-5 weeks",
    technologies: ["OpenAI", "n8n", "WhatsApp API", "Supabase"],
    benefits: "Automate repetitive workflows while preserving quality.",
  },
  {
    title: "Workflow Automation",
    category: "Automation",
    description: "Cross-platform automation systems to eliminate manual processes and speed delivery.",
    deliverables: ["Process mapping", "Workflow automations", "Monitoring alerts", "Documentation"],
    timeline: "1-3 weeks",
    technologies: ["n8n", "Make", "Node.js", "Webhook APIs"],
    benefits: "Save team hours and improve execution consistency.",
  },
  {
    title: "Landing Pages & MVPs",
    category: "Growth",
    description: "Rapid validation builds for offers, products, and campaign experiments.",
    deliverables: ["Offer framework", "A/B-ready sections", "Fast analytics", "Iteration roadmap"],
    timeline: "1-3 weeks",
    technologies: ["Next.js", "Vercel Analytics", "EmailJS"],
    benefits: "Validate ideas quickly with data-backed conversion loops.",
  },
];

export const projects: Project[] = [
  {
    name: "MindFlow AI",
    category: "AI",
    problem: "Founders needed instant AI-assisted execution planning.",
    research: "Interviewed 14 founders and analyzed 120 planning sessions to identify friction in weekly execution.",
    solution: "Built an AI productivity system with custom prompts and workflow memory.",
    architecture: "Next.js frontend, Supabase data layer, and modular OpenAI orchestration service.",
    performanceMetrics: "95 Lighthouse, 1.2s interactive on core dashboard flow.",
    technologies: ["Next.js", "TypeScript", "OpenAI", "Supabase"],
    results: "Reduced planning time by 62% and increased weekly execution consistency.",
    gallery: ["Dashboard", "AI Planner", "Automation Panel"],
    github: "https://github.com/Vinaycoder153",
    demo: "#",
  },
  {
    name: "TrustWithVs",
    category: "Web",
    problem: "Consulting brand lacked trust signals and premium positioning.",
    research: "Reviewed heatmaps and user recordings to identify credibility gaps above the fold.",
    solution: "Designed a high-authority visual identity with conversion-driven sections.",
    architecture: "Content-driven Next.js build with modular section components and CMS-friendly data model.",
    performanceMetrics: "97 mobile Lighthouse and 0.03 CLS after launch optimization.",
    technologies: ["Next.js", "Tailwind CSS", "Framer-like motion"],
    results: "Improved lead quality and doubled consultation bookings.",
    gallery: ["Hero", "Case Studies", "Booking"],
    github: "https://github.com/Vinaycoder153",
    demo: "#",
  },
  {
    name: "AI Personal Assistant",
    category: "AI",
    problem: "Business owners needed 24/7 instant support for operations.",
    research: "Mapped 40+ recurring support questions and grouped intents by urgency and business impact.",
    solution: "Implemented chatbot + automations for reminders, scheduling, and Q&A.",
    architecture: "Node.js orchestration API with OpenAI, n8n workflows, and WhatsApp delivery.",
    performanceMetrics: "Median response time under 1.8s and 99.9% webhook reliability.",
    technologies: ["Node.js", "OpenAI", "n8n", "WhatsApp"],
    results: "Saved 20+ hours/month in repetitive support tasks.",
    gallery: ["Chat UI", "Workflow", "Integrations"],
    github: "https://github.com/Vinaycoder153",
    demo: "#",
  },
  {
    name: "AI Attendance System",
    category: "AI",
    problem: "Manual attendance was inconsistent and time-consuming.",
    research: "Audited attendance flows across teams to identify reconciliation bottlenecks and edge cases.",
    solution: "Created AI-powered attendance capture and admin analytics.",
    architecture: "React client, Firebase auth/storage, and Node.js analytics API.",
    performanceMetrics: "Report generation improved from 15m to 40s.",
    technologies: ["React", "Firebase", "Node.js"],
    results: "Reduced manual errors by 80% and reporting time by 70%.",
    gallery: ["Scanner", "Reports", "Admin"],
    github: "https://github.com/Vinaycoder153",
    demo: "#",
  },
  {
    name: "Smart Agriculture AI",
    category: "AI",
    problem: "Farm operators lacked prediction visibility for crop risks.",
    research: "Aggregated climate and field records to model seasonal failure patterns.",
    solution: "Built predictive insights dashboard with recommendation workflows.",
    architecture: "Next.js dashboard consuming Python ML APIs with Supabase event storage.",
    performanceMetrics: "Data ingestion latency reduced by 58% with queued processing.",
    technologies: ["Next.js", "Python APIs", "Supabase"],
    results: "Enabled faster interventions and improved decision confidence.",
    gallery: ["Insights", "Alerts", "Forecast"],
    github: "https://github.com/Vinaycoder153",
    demo: "#",
  },
  {
    name: "OpenEnv AI Agent",
    category: "Automation",
    problem: "Teams needed autonomous monitoring for environment workflows.",
    research: "Incident postmortems revealed alert fatigue and unclear remediation paths.",
    solution: "Developed agent-based monitoring with trigger-based remediation.",
    architecture: "Event-driven TypeScript service with policy engine and OpenAI summarization layer.",
    performanceMetrics: "Cut noisy alerts by 41% through classification tuning.",
    technologies: ["TypeScript", "Node.js", "OpenAI"],
    results: "Lowered incident response time by 45%.",
    gallery: ["Agent Console", "Triggers", "Logs"],
    github: "https://github.com/Vinaycoder153",
    demo: "#",
  },
  {
    name: "Business Landing Pages",
    category: "Web",
    problem: "Brands needed high-speed campaign pages.",
    research: "A/B reviewed campaign funnels to identify drop-off points in message hierarchy.",
    solution: "Delivered reusable conversion-focused landing page framework.",
    architecture: "Composable Next.js sections with reusable CTA and proof modules.",
    performanceMetrics: "Average load time below 1.0s on 4G profile.",
    technologies: ["Next.js", "Tailwind CSS"],
    results: "Higher ad conversion and lower bounce rates.",
    gallery: ["Offer", "CTA", "Proof"],
    github: "https://github.com/Vinaycoder153",
    demo: "#",
  },
  {
    name: "Restaurant Website",
    category: "Web",
    problem: "Restaurant lacked online ordering and modern brand presentation.",
    research: "Benchmarked local competitors and booking behavior to prioritize conversion elements.",
    solution: "Designed premium responsive website with booking and menu flows.",
    architecture: "React storefront with Node.js reservation APIs and Stripe checkout.",
    performanceMetrics: "Booking funnel completion improved by 2.1x.",
    technologies: ["React", "Node.js", "Stripe"],
    results: "Increased direct bookings and improved online trust.",
    gallery: ["Menu", "Booking", "Gallery"],
    github: "https://github.com/Vinaycoder153",
    demo: "#",
  },
  {
    name: "Healthcare Website",
    category: "Web",
    problem: "Clinic needed compliant, accessible, trust-building digital presence.",
    research: "Reviewed appointment data and accessibility audits to improve discoverability and trust.",
    solution: "Implemented performant healthcare site with appointment workflows.",
    architecture: "Next.js static + server rendering mix with SEO-first structured content modules.",
    performanceMetrics: "Core Web Vitals passed on 98% of sessions.",
    technologies: ["Next.js", "TypeScript", "SEO"],
    results: "Boosted local search visibility and consultation requests.",
    gallery: ["Doctors", "Appointments", "Reviews"],
    github: "https://github.com/Vinaycoder153",
    demo: "#",
  },
  {
    name: "Portfolio Website",
    category: "Design",
    problem: "Freelancers needed premium authority-first personal branding.",
    research: "Analyzed winning freelancer portfolios and client decision signals.",
    solution: "Created modular portfolio framework focused on conversion and trust.",
    architecture: "Design-token-driven Next.js architecture with reusable glass components.",
    performanceMetrics: "Engagement time increased by 44% over prior version.",
    technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
    results: "Generated high-intent inbound client opportunities.",
    gallery: ["Hero", "Cases", "Contact"],
    github: "https://github.com/Vinaycoder153",
    demo: "#",
  },
];

export const testimonials = [
  {
    name: "Arjun Malhotra",
    role: "Founder, D2C Brand",
    company: "Lumo Naturals",
    rating: "5.0",
    projectType: "Conversion Website + CRO",
    impact: "2.4x more qualified leads",
    quote:
      "Vinay transformed our outdated website into a premium lead machine. We saw better conversion quality in the first week.",
  },
  {
    name: "Sara Fernandes",
    role: "Agency Partner",
    company: "Northline Studio",
    rating: "5.0",
    projectType: "White-label SaaS Dashboard",
    impact: "31% faster client delivery",
    quote:
      "He ships fast, communicates clearly, and the UI quality is world-class. Our clients constantly compliment the work.",
  },
  {
    name: "Dr. Meera Kapoor",
    role: "Clinic Owner",
    company: "Carelane Clinic",
    rating: "4.9",
    projectType: "Healthcare Website",
    impact: "68% more appointment requests",
    quote:
      "Our healthcare website now feels modern, trustworthy, and easy to use. Appointment requests increased significantly.",
  },
];

export const pricingTiers = [
  {
    name: "Starter",
    idealFor: "Solo founders",
    price: "$499+",
    includes: ["1 page", "Mobile-first UI", "Basic SEO", "Delivery in 5-7 days"],
  },
  {
    name: "Professional",
    idealFor: "Growing businesses",
    price: "$1,499+",
    includes: ["5 pages", "Custom animations", "Lead-focused copy blocks", "Priority support"],
  },
  {
    name: "Business",
    idealFor: "High-growth teams",
    price: "$3,499+",
    includes: ["10+ pages", "Advanced SEO", "AI integrations", "Analytics dashboard"],
  },
  {
    name: "Enterprise",
    idealFor: "Agencies and scale-ups",
    price: "Custom",
    includes: ["Full product scope", "Automation stack", "SLA support", "Long-term roadmap"],
  },
  {
    name: "Custom Quote",
    idealFor: "Complex multi-product needs",
    price: "Let's scope it",
    includes: ["Discovery workshop", "Technical blueprint", "Phased roadmap", "Dedicated support"],
  },
];

export const comparisonFeatures = [
  ["Custom design", "✓", "✓", "✓", "✓"],
  ["AI automation", "—", "—", "✓", "✓"],
  ["Performance optimization", "✓", "✓", "✓", "✓"],
  ["Conversion strategy", "—", "✓", "✓", "✓"],
  ["Daily updates", "—", "✓", "✓", "✓"],
  ["Long-term support", "—", "—", "✓", "✓"],
];

export const faq = [
  {
    q: "How quickly can you start?",
    a: "Most projects start within 24-72 hours after discovery and scope approval.",
  },
  {
    q: "Do you provide daily updates?",
    a: "Yes. You get consistent updates, transparent timelines, and proactive communication.",
  },
  {
    q: "Can you handle both design and development?",
    a: "Yes. I provide end-to-end execution from branding and UX to deployment and automation.",
  },
];

export const clientTypes = [
  "Small Businesses",
  "Startups",
  "Founders",
  "Agencies",
  "Creators",
  "E-commerce Stores",
  "Restaurants",
  "Doctors",
  "Law Firms",
  "Schools",
  "Real Estate",
  "Freelancers",
];

export const whyHireMe = [
  "Fast Delivery",
  "Modern UI",
  "SEO Optimized",
  "AI Integration",
  "Responsive",
  "Clean Code",
  "Scalable",
  "Affordable",
  "Long-term Support",
  "Daily Updates",
  "Excellent Communication",
];

export const trustBadges = ["Verified Freelancer", "Top-Rated Delivery", "99% Client Satisfaction", "Secure Development"];

export const awards = ["Top UI/UX Freelancer 2026", "Automation Excellence Award", "Best SaaS Landing Experience"];

export const certificates = ["Advanced React Specialist", "AI Product Integration", "Technical SEO Professional"];

export const processSteps = ["Discover", "Research", "Design", "Develop", "Test", "Deploy", "Support"];

export const aboutHighlights = [
  "I combine product strategy, UI craftsmanship, and full-stack engineering to build high-performing digital products.",
  "Every engagement is grounded in measurable business outcomes: trust, conversion, retention, and speed-to-value.",
];

export const experienceTimeline = [
  "2026 · Premium AI product consultant for founders and teams",
  "2025 · Built automation and dashboard systems across healthcare, D2C, and agency workflows",
  "2024 · Shipped high-conversion websites and MVPs with performance-first engineering",
];

export const coreValues = ["Clarity over noise", "Craft with purpose", "Business-first decisions", "Accessible by default"];

export const skillCoverage = [
  { label: "Product & UX", value: 95 },
  { label: "Frontend Architecture", value: 96 },
  { label: "AI Integrations", value: 92 },
  { label: "Automation Systems", value: 90 },
];

export const blogPosts = [
  {
    title: "How premium UX increases close rates for freelance developers",
    category: "Conversion",
    readTime: "6 min read",
  },
  {
    title: "Designing AI products that users trust in the first 30 seconds",
    category: "AI Product",
    readTime: "8 min read",
  },
  {
    title: "From lead to launch: my 7-step workflow for high-value projects",
    category: "Process",
    readTime: "5 min read",
  },
];

export const techStackGroups = [
  { title: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"] },
  { title: "Backend & Data", items: ["Node.js", "Supabase", "Firebase", "PostgreSQL", "REST APIs"] },
  { title: "AI & Automation", items: ["OpenAI API", "Prompt Engineering", "AI Agents", "n8n", "Workflow Design"] },
  { title: "Ops & Growth", items: ["Vercel", "Lighthouse", "Technical SEO", "Analytics", "A/B Testing"] },
];
