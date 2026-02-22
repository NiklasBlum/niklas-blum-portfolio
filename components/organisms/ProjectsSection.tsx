import React from "react";
import { useCarousel } from "@/hooks";
import { PROJECT_IMAGES, PROJECTS } from "@/constants";
import SectionHeader from "../molecules/SectionHeader";
import Section from "./Section";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const { currentIndex, nextSlide, prevSlide, goToSlide } = useCarousel(
    PROJECT_IMAGES.length,
  );

  return (
    <Section
      name="projects"
      className="min-h-screen bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <SectionHeader
            title="Meine Projekte"
            accentColor="orange"
            subtitle="Hier ist eines meiner Projekte, das meine Fähigkeiten und Herangehensweise zeigt."
          />
        </div>

        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            images={PROJECT_IMAGES}
            currentImageIndex={currentIndex}
            onNextImage={nextSlide}
            onPrevImage={prevSlide}
            onSelectImage={goToSlide}
            liveUrl={project.liveUrl}
            codeUrl={project.codeUrl}
          />
        ))}
      </div>
    </Section>
  );
}
