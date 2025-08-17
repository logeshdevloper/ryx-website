import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PortfolioHero } from "@/components/sections/portfolio-hero";
import { ProjectsGrid } from "@/components/sections/projects-grid";
import { CaseStudySpotlight } from "@/components/sections/case-study-spotlight";
import { ClientTestimonials } from "@/components/sections/client-testimonials";

export const metadata: Metadata = {
  title: "Portfolio - RYX Project Case Studies & Success Stories",
  description: "Explore RYX's portfolio of successful micro SaaS products, database optimizations, and AI integrations. Real projects, real results, real impact.",
};

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <PortfolioHero />
        <CaseStudySpotlight />
        <ClientTestimonials />
      </main>
      <Footer />
    </>
  );
}
