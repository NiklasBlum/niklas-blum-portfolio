import React from "react";
import { useCarousel } from "@/hooks";
import { PROJECTS } from "@/constants";
import SectionHeader from "../molecules/SectionHeader";
import Section from "./Section";
import ProjectCard from "./ProjectCard";

interface ProjectCardWrapperProps {
  project: (typeof PROJECTS)[number];
}

function ProjectCardWrapper({ project }: ProjectCardWrapperProps) {
  const { currentIndex, nextSlide, prevSlide, goToSlide } = useCarousel(
    project.images.length,
  );

  return (
    <ProjectCard
      title={project.title}
      description={project.description}
      techStack={project.techStack}
      images={project.images}
      currentImageIndex={currentIndex}
      onNextImage={nextSlide}
      onPrevImage={prevSlide}
      onSelectImage={goToSlide}
      liveUrl={project.liveUrl}
      codeUrl={project.codeUrl}
      imageFit={project.imageFit}
    />
  );
}

export default function ProjectsSection() {
  return (
    <Section
      name="projects"
      className="min-h-screen bg-white dark:bg-slate-950 border-b border-gray-200 dark:border-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <SectionHeader
            title="Meine Projekte"
            accentColor="orange"
            subtitle="Hier ist eines meiner Projekte, das meine Fähigkeiten und Herangehensweise zeigt."
          />
        </div>

        <div className="flex flex-col gap-12">
          {PROJECTS.map((project) => (
            <ProjectCardWrapper key={project.id} project={project} />
          ))}
        </div>
      </div>
    </Section>
  );
}
