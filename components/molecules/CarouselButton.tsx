import React from "react";
import Button from "../atoms/Button";
import SvgIcon from "../atoms/SvgIcon";

interface CarouselButtonProps {
  direction: "prev" | "next";
  onClick: () => void;
  ariaLabel: string;
}

export default function CarouselButton({
  direction,
  onClick,
  ariaLabel,
}: CarouselButtonProps) {
  return (
    <button
      onClick={onClick}
      className="absolute top-1/2 cursor-pointer -translate-y-1/2 bg-orange-600/90 hover:bg-orange-500/90 text-white p-1 sm:p-2 rounded-full shadow-lg transition-all duration-200 hover:scale-110"
      style={{
        [direction === "prev" ? "left" : "right"]: "0.5rem",
      }}
      aria-label={ariaLabel}
    >
      <SvgIcon
        type={direction === "prev" ? "chevronLeft" : "chevronRight"}
        size="md"
      />
    </button>
  );
}
