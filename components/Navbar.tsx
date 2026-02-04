"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
      className="hover:text-gray-300 transition-colors duration-200"
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white py-4 px-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <NavButton sectionId="intro">NB</NavButton>
        </div>

        <div className="flex items-center space-x-4">
          <ul className="flex space-x-4">
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
        </div>
      </div>
    </nav>
  );
}
