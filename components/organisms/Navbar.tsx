"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "../molecules/ThemeToggle";

interface NavButtonProps {
  sectionId: string;
  children: React.ReactNode;
}

function NavButton({ sectionId, children }: NavButtonProps) {
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    // If not on home, let Link handle navigation to /#sectionId
  };

  return (
    <Link
      href={`/#${sectionId}`}
      onClick={handleClick}
      className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 py-3 sm:py-4 px-4 sm:px-6 md:px-8 shadow-sm dark:shadow-lg sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
          <NavButton sectionId="intro">NB</NavButton>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4 md:space-x-6">
          <ul className="flex space-x-2 sm:space-x-4 md:space-x-6 text-sm sm:text-base text-gray-900 dark:text-white">
            <li>
              <NavButton sectionId="about">Über mich</NavButton>
            </li>
            <li>
              <NavButton sectionId="projects">Projekte</NavButton>
            </li>
            <li>
              <NavButton sectionId="contact">Kontakt</NavButton>
            </li>
          </ul>
          <div className="pl-2 sm:pl-4 md:pl-6 border-l border-gray-200 dark:border-gray-700">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
