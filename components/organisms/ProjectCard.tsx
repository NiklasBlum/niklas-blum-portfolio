import React from "react";
import Image from "next/image";
import { Heading, Text } from "../atoms";
import TechStack from "../molecules/TechStack";
import CarouselButton from "../molecules/CarouselButton";
import CarouselIndicators from "../molecules/CarouselIndicators";

interface ProjectSliderProps {
  images: string[];
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
  onSelectImage: (index: number) => void;
}

function ProjectSlider({
  images,
  currentIndex,
  onNext,
  onPrev,
  onSelectImage,
}: ProjectSliderProps) {
  return (
    <div className="relative aspect-video bg-gray-100 dark:bg-gray-950 overflow-hidden rounded-t-xl border-b border-gray-200 dark:border-gray-700">
      <Image
        src={images[currentIndex]}
        alt={`Project screenshot ${currentIndex + 1}`}
        fill
        className="object-cover"
        priority
      />

      <CarouselButton
        direction="prev"
        onClick={onPrev}
        ariaLabel="Previous image"
      />
      <CarouselButton
        direction="next"
        onClick={onNext}
        ariaLabel="Next image"
      />

      <CarouselIndicators
        totalItems={images.length}
        currentIndex={currentIndex}
        onSelect={onSelectImage}
      />
    </div>
  );
}

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  images: string[];
  currentImageIndex: number;
  onNextImage: () => void;
  onPrevImage: () => void;
  onSelectImage: (index: number) => void;
  liveUrl: string;
  codeUrl: string;
}

export default function ProjectCard({
  title,
  description,
  techStack,
  images,
  currentImageIndex,
  onNextImage,
  onPrevImage,
  onSelectImage,
  liveUrl,
  codeUrl,
}: ProjectCardProps) {
  return (
    <article className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden max-w-4xl mx-auto">
      <ProjectSlider
        images={images}
        currentIndex={currentImageIndex}
        onNext={onNextImage}
        onPrev={onPrevImage}
        onSelectImage={onSelectImage}
      />

      {/* Project Info */}
      <div className="p-4 sm:p-6 md:p-8">
        <Heading
          level={3}
          className="text-gray-900 dark:text-white mb-3 sm:mb-4"
        >
          {title}
        </Heading>
        <Text className="text-gray-700 dark:text-gray-300 mb-4 sm:mb-6">
          {description}
        </Text>

        {/* Tech Stack */}
        <div className="mb-6 sm:mb-8">
          <TechStack technologies={techStack} variant="orange" />
        </div>

        {/* Links */}
        <div className="flex space-x-4">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 transition-all duration-200"
          >
            Zur Anwendung
          </a>
          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 transition-all duration-200"
          >
            Zum Github Repo
          </a>
        </div>
      </div>
    </article>
  );
}
