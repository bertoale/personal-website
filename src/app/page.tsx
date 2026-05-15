"use client";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero";
import EducationCard from "@/components/about";
import SkillsSection from "@/components/skill";
import ProjectsSection from "@/components/project";
import CareerJourney from "@/components/journey";
import Footer from "@/components/footer";

export default function Page() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Navbar />
      <section id="hero">
        <HeroSection />
      </section>

      <section id="about">
        <EducationCard />
      </section>

      <section id="journey">
        <CareerJourney />
      </section>

      <section id="skill">
        <SkillsSection />
      </section>

      <section id="project">
        {/* <ProjectsSection /> */}
        <Footer />
      </section>
    </main>
  );
}
