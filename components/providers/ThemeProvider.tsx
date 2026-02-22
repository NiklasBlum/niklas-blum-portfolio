"use client";

import React, { createContext, useState, useEffect } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  // Initialize theme on mount
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const initialTheme: Theme =
      saved === "dark"
        ? "dark"
        : saved === "light"
          ? "light"
          : prefersDark
            ? "dark"
            : "light";

    // Apply initial theme
    setTheme(initialTheme);
    const html = document.documentElement;
    // Use classList.toggle for idempotence and set a data attribute for debugging
    html.classList.toggle("dark", initialTheme === "dark");
    html.setAttribute("data-theme", initialTheme);
    // Also toggle on body to be safe for any selectors targeting body
    document.body.classList.toggle("dark", initialTheme === "dark");
  }, []);

  // Update DOM whenever theme changes
  useEffect(() => {
    const html = document.documentElement;
    html.classList.toggle("dark", theme === "dark");
    html.setAttribute("data-theme", theme);
    document.body.classList.toggle("dark", theme === "dark");
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {
      // ignore storage errors
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}
