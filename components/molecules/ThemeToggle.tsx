"use client";

import { useTheme } from "@/hooks/useTheme";
import SvgIcon from "../atoms/SvgIcon";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      className="p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
    >
      {theme === "dark" ? (
        <SvgIcon type="sun" size="md" />
      ) : (
        <SvgIcon type="moon" size="md" />
      )}
    </button>
  );
}
