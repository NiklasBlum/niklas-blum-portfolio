import { useState, useCallback } from "react";

interface UseCarouselReturn {
  currentIndex: number;
  nextSlide: () => void;
  prevSlide: () => void;
  goToSlide: (index: number) => void;
}

export function useCarousel(itemCount: number): UseCarouselReturn {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % itemCount);
  }, [itemCount]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + itemCount) % itemCount);
  }, [itemCount]);

  const goToSlide = useCallback(
    (index: number) => {
      setCurrentIndex(Math.max(0, Math.min(index, itemCount - 1)));
    },
    [itemCount],
  );

  return { currentIndex, nextSlide, prevSlide, goToSlide };
}
