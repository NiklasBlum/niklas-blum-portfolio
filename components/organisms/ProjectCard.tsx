import React from "react";
import Image from "next/image";
import Link from "next/link";
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
  title: string;
  imageFit?: "cover" | "contain";
}

function ProjectSlider({
  images,
  currentIndex,
  onNext,
  onPrev,
  onSelectImage,
  title,
  imageFit = "cover",
}: ProjectSliderProps) {
  return (
    <div className="relative aspect-video bg-gray-100 dark:bg-slate-950 overflow-hidden rounded-t-xl border-b border-gray-200 dark:border-gray-700">
      <Image
        src={images[currentIndex]}
        alt={`Screenshot ${currentIndex + 1} von ${images.length} - ${title}`}
        fill
        className={imageFit === "contain" ? "object-contain" : "object-cover"}
        unoptimized={images[currentIndex].startsWith("https://")}
        priority
      />

      {images.length > 1 && (
        <>
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
        </>
      )}
    </div>
  );
}

interface ProjectCardProps {
  title: string;
  label?: string;
  description: string;
  techStack: string[];
  images: string[];
  currentImageIndex: number;
  onNextImage: () => void;
  onPrevImage: () => void;
  onSelectImage: (index: number) => void;
  liveUrl: string;
  detailsUrl?: string;
  codeUrl?: string;
  imageFit?: "cover" | "contain";
}

export default function ProjectCard({
  title,
  label,
  description,
  techStack,
  images,
  currentImageIndex,
  onNextImage,
  onPrevImage,
  onSelectImage,
  liveUrl,
  detailsUrl,
  codeUrl,
  imageFit,
}: ProjectCardProps) {
  return (
    <article className="w-full min-w-0 max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
      <ProjectSlider
        images={images}
        currentIndex={currentImageIndex}
        onNext={onNextImage}
        onPrev={onPrevImage}
        onSelectImage={onSelectImage}
        title={title}
        imageFit={imageFit}
      />

      {/* Project Info */}
      <div className="p-4 sm:p-6 md:p-8">
        {label && (
          <p className="text-sm font-semibold uppercase tracking-wide text-orange-600 dark:text-orange-400 mb-2">
            {label}
          </p>
        )}
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
        {techStack.length > 0 && (
          <div className="mb-6 sm:mb-8">
            <TechStack technologies={techStack} variant="orange" />
          </div>
        )}

        {/* Links */}
        <div className="flex flex-wrap gap-3">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 transition-all duration-200"
          >
            Zur Anwendung
          </a>
          {detailsUrl && (
            <Link
              href={detailsUrl}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 transition-all duration-200"
            >
              Projekt ansehen
            </Link>
          )}
          {codeUrl && (
            <a
              href={codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow-md hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 transition-all duration-200"
            >
              Zum Github Repo
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
