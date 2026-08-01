import { PortfolioSite } from "@/app/components/portfolio-site";
import { projects } from "@/app/lib/site-data";

type GitHubRepo = {
  id: number;
  name: string;
  html_url: string;
  stargazers_count: number;
};

async function getGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const response = await fetch("https://api.github.com/users/Vinaycoder153/repos?sort=updated&per_page=4", {
      next: { revalidate: 3600 },
      headers: { Accept: "application/vnd.github+json" },
    });

    if (!response.ok) {
      return [];
    }

    const data = (await response.json()) as GitHubRepo[];
    return data.map(({ id, name, html_url, stargazers_count }) => ({ id, name, html_url, stargazers_count }));
  } catch {
    return [];
  }
}

export default async function Home() {
  const githubRepos = await getGitHubRepos();
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "VINAY M Y",
    jobTitle: "AI Full Stack Developer",
    description:
      "AI Full Stack Developer | AI Automation Expert | Web Designer | Freelance Developer building premium growth-focused digital products.",
    url: "https://vinaymy.vercel.app",
    sameAs: ["https://github.com/Vinaycoder153"],
    knowsAbout: ["Next.js", "React", "TypeScript", "AI Automation", "Supabase", "SEO"],
    offers: {
      "@type": "OfferCatalog",
      name: "Freelance Services",
      itemListElement: projects.slice(0, 5).map((project) => ({ "@type": "Offer", name: project.name })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <PortfolioSite projects={projects} githubRepos={githubRepos} />
    </>
  );
}
