"use client";

import {
  HeroSection,
  AboutSection,
  ProjectsSection,
  ContactSection,
} from "@/components/organisms";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
