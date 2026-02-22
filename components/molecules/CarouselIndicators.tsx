import React from "react";

interface CarouselIndicatorsProps {
  totalItems: number;
  currentIndex: number;
  onSelect: (index: number) => void;
}

export default function CarouselIndicators({
  totalItems,
  currentIndex,
  onSelect,
}: CarouselIndicatorsProps) {
  return (
    <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-2">
      {Array.from({ length: totalItems }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSelect(index)}
          className={`h-1 sm:h-2 cursor-pointer rounded-full transition-all duration-300 ${
            index === currentIndex
              ? "w-6 sm:w-8 bg-orange-500"
              : "w-1 sm:w-2 bg-orange-300/50 hover:bg-orange-400/70"
          }`}
          aria-label={`Go to image ${index + 1}`}
        />
      ))}
    </div>
  );
}
