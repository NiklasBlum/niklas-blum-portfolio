"use client";
import { useEffect, useState } from "react";

export default function DarkModePage() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const t = stored || (prefersDark ? "dark" : "light");
    setTheme(t);
    document.documentElement.classList.toggle("dark", t === "dark");
  }, []);

  const toggleTheme = () => {
    const t = theme === "light" ? "dark" : "light";
    setTheme(t);
    localStorage.setItem("theme", t);
    document.documentElement.classList.toggle("dark", t === "dark");
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen flex items-center justify-center">
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
      >
        Toggle Theme
      </button>
    </div>
  );
}
