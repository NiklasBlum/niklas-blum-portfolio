import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "orange" | "green";
}

export default function Badge({ children, variant = "blue" }: BadgeProps) {
  const variantStyles = {
    blue: "bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-200",
    orange:
      "bg-orange-100 dark:bg-orange-900 text-orange-900 dark:text-orange-200",
    green: "bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-200",
  };

  return (
    <span
      className={`px-3 py-1 ${variantStyles[variant]} rounded-full text-sm font-medium`}
    >
      {children}
    </span>
  );
}
