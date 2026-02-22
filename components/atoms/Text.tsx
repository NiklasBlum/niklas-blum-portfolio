import React from "react";

interface TextProps {
  variant?: "body" | "caption" | "subtitle";
  children: React.ReactNode;
  className?: string;
}

export default function Text({
  variant = "body",
  children,
  className = "",
}: TextProps) {
  const variantStyles = {
    body: "text-base sm:text-lg text-gray-700 dark:text-gray-300",
    caption: "text-sm sm:text-base text-gray-700 dark:text-gray-400",
    subtitle: "text-lg sm:text-xl text-gray-700 dark:text-gray-300 italic",
  };

  return (
    <p className={`${variantStyles[variant]} leading-relaxed ${className}`}>
      {children}
    </p>
  );
}
