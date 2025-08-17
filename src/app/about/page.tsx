import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AboutHero } from "@/components/sections/about-hero";
import { OurStory } from "@/components/sections/our-story";
import { TeamSection } from "@/components/sections/team-section";
import { ValuesSection } from "@/components/sections/values-section";
import { StatsSection } from "@/components/sections/stats-section";

export const metadata: Metadata = {
  title: "About RYX - Founders, Vision & Mission",
  description: "Learn about RYX's founding story, our mission to democratize micro SaaS development, and the team behind the technology that powers modern applications.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <AboutHero />
        <OurStory />
        <ValuesSection />
        <StatsSection />
        <TeamSection />
      </main>
      <Footer />
    </>
  );
}
