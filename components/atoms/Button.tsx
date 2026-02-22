import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  fullWidth = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed";
  const cursorClass = props.disabled ? "" : "cursor-pointer";

  const variants = {
    primary: "bg-linear-to-r from-blue-600 to-purple-600 text-white",
    secondary: "bg-orange-600 hover:bg-orange-700 text-white",
    tertiary: "bg-amber-700 hover:bg-amber-600 text-black",
  };

  const sizes = {
    sm: "px-3 py-2 text-sm",
    md: "px-6 py-2 text-base",
    lg: "px-8 py-3 text-lg",
  };

  const widthClass = fullWidth ? "w-full" : "";

  return (
    <button
      className={`${baseStyles} ${cursorClass} ${variants[variant]} ${sizes[size]} ${widthClass} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
