import React from "react";

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
}

export default function Heading({
  level,
  children,
  className = "",
}: HeadingProps) {
  const sizes = {
    1: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
    2: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
    3: "text-xl sm:text-2xl md:text-3xl lg:text-4xl",
    4: "text-lg sm:text-xl md:text-2xl",
    5: "text-base sm:text-lg md:text-xl",
    6: "text-sm sm:text-base md:text-lg",
  };

  const Tag = `h${level}` as const;

  return (
    <Tag className={`font-bold ${sizes[level]} ${className}`}>{children}</Tag>
  );
}
