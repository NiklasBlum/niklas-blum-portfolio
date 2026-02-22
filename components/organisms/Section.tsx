import React from "react";

interface SectionProps {
  name: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  name,
  children,
  className = "",
}: SectionProps) {
  const defaultStyles =
    "py-12 min-h-[50px] sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 transition-colors duration-300";
  return (
    <section id={name} className={`${defaultStyles} ${className}`}>
      {children}
    </section>
  );
}
