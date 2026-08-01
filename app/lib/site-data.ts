export type Service = { title: string; category: string; description: string };
export type Project = {
  name: string;
  category: string;
  problem: string;
  solution: string;
  technologies: string[];
  results: string;
  gallery: string[];
  github: string;
  demo: string;
};

export const services: Service[] = [
  { title: "Website Design", category: "Design", description: "Premium conversion-focused brand websites." },
  { title: "Landing Pages", category: "Design", description: "High-performance pages built for paid traffic." },
  { title: "Business Websites", category: "Web", description: "Scalable business sites with strong UX architecture." },
  { title: "Portfolio Websites", category: "Web", description: "Authority-building personal and company portfolios." },
  { title: "E-commerce", category: "Web", description: "Storefronts designed to increase average order value." },
  { title: "Dashboard", category: "Product", description: "Modern SaaS dashboards with clean analytics interfaces." },
  { title: "React Development", category: "Development", description: "Reusable component systems and fast UI delivery." },
  { title: "Next.js Development", category: "Development", description: "SEO-friendly, lightning-fast modern web apps." },
  { title: "Node.js APIs", category: "Backend", description: "Reliable APIs with secure, extensible architecture." },
  { title: "Firebase", category: "Backend", description: "Realtime features, auth, and deployment workflows." },
  { title: "Supabase", category: "Backend", description: "Postgres-powered apps with modern DX and auth." },
  { title: "OpenAI Integration", category: "AI", description: "Context-aware AI experiences and assistant flows." },
  { title: "Gemini Integration", category: "AI", description: "Multimodal intelligence features for real products." },
  { title: "ChatGPT Chatbots", category: "AI", description: "Lead-generation and support chatbots with memory." },
  { title: "AI Agents", category: "AI", description: "Autonomous workflows for repetitive business tasks." },
  { title: "Workflow Automation", category: "Automation", description: "Cross-tool automation to reduce manual work." },
  { title: "n8n Automation", category: "Automation", description: "Custom no-code/low-code flows for operations." },
  { title: "Custom Admin Panels", category: "Product", description: "Tailored operational dashboards for your team." },
  { title: "Performance Optimization", category: "Growth", description: "Core Web Vitals and speed optimization strategy." },
  { title: "SEO", category: "Growth", description: "Technical and on-page optimization for ranking growth." },
  { title: "Website Redesign", category: "Growth", description: "Modern redesigns that improve trust and conversion." },
  { title: "Bug Fixes", category: "Support", description: "Fast debugging for frontend, backend, and APIs." },
  { title: "Maintenance", category: "Support", description: "Long-term support with proactive improvements." },
];

export const projects: Project[] = [
  {
    name: "MindFlow AI",
    category: "AI",
    problem: "Founders needed instant AI-assisted execution planning.",
    solution: "Built an AI productivity system with custom prompts and workflow memory.",
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
    solution: "Designed a high-authority visual identity with conversion-driven sections.",
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
    solution: "Implemented chatbot + automations for reminders, scheduling, and Q&A.",
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
    solution: "Created AI-powered attendance capture and admin analytics.",
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
    solution: "Built predictive insights dashboard with recommendation workflows.",
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
    solution: "Developed agent-based monitoring with trigger-based remediation.",
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
    solution: "Delivered reusable conversion-focused landing page framework.",
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
    solution: "Designed premium responsive website with booking and menu flows.",
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
    solution: "Implemented performant healthcare site with appointment workflows.",
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
    solution: "Created modular portfolio framework focused on conversion and trust.",
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
    quote:
      "Vinay transformed our outdated website into a premium lead machine. We saw better conversion quality in the first week.",
  },
  {
    name: "Sara Fernandes",
    role: "Agency Partner",
    quote:
      "He ships fast, communicates clearly, and the UI quality is world-class. Our clients constantly compliment the work.",
  },
  {
    name: "Dr. Meera Kapoor",
    role: "Clinic Owner",
    quote:
      "Our healthcare website now feels modern, trustworthy, and easy to use. Appointment requests increased significantly.",
  },
];

export const pricingTiers = [
  {
    name: "Basic",
    idealFor: "Solo founders",
    price: "$499+",
    includes: ["1 page", "Mobile-first UI", "Basic SEO", "Delivery in 5-7 days"],
  },
  {
    name: "Standard",
    idealFor: "Growing businesses",
    price: "$1,499+",
    includes: ["5 pages", "Custom animations", "Lead-focused copy blocks", "Priority support"],
  },
  {
    name: "Premium",
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
