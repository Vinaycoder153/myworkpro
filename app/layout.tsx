import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://vinaymy.vercel.app"),
  title: "VINAY M Y | AI Full Stack Developer",
  description:
    "Premium freelance portfolio for AI full stack development, automation systems, and high-conversion web design.",
  keywords: [
    "AI Full Stack Developer",
    "Freelance Developer",
    "Web Designer",
    "Automation Expert",
    "Next.js Developer",
    "Portfolio",
  ],
  openGraph: {
    title: "VINAY M Y | AI Full Stack Developer",
    description:
      "I build beautiful websites, AI-powered applications, business automation systems, and modern digital experiences.",
    type: "website",
    url: "https://vinaymy.vercel.app",
    siteName: "VINAY M Y",
  },
  twitter: {
    card: "summary_large_image",
    title: "VINAY M Y | AI Full Stack Developer",
    description:
      "Premium freelance development for SaaS-style websites, AI products, and automation systems.",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-black text-white">{children}</body>
    </html>
  );
}
