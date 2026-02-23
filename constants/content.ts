export const SKILLS = {
  coreStack: [
    "Next.js (Pages Router & App Router)",
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
  ],
  frontendEngineering: [
    "Tailwind CSS",
    "Responsive Design",
    "Barrierefreiheit (a11y)",
    "SEO-Optimierung",
    "State Management (Zustand, Context API)",
  ],
  architectureQuality: [
    "Clean Code Prinzipien",
    "REST APIs",
    "CI/CD",
    "Git & GitHub",
  ],
  aiAutomation: ["AI-gestützte Workflows", "Github Copilot", "Claude Code"],
  additionalExperience: ["C#"],
};

export const SERVICES = [
  {
    title: "Entwicklung moderner Webanwendungen",
    description: "Maßgeschneiderte Lösungen mit aktuellen Web-Technologien",
  },
  {
    title: "Performance-Optimierung",
    description: "Schnelle Ladezeiten und saubere technische Umsetzung",
  },
  {
    title: "Responsives Design",
    description: "Optimale Darstellung auf Desktop, Tablet und Smartphone",
  },
  {
    title: "API-Entwicklung & Backend-Anbindung",
    description: "Stabile Schnittstellen für Daten, Services und Integrationen",
  },
  {
    title: "Technische Beratung",
    description:
      "Professionelle Beratung zu Technologie-Entscheidungen und Architektur-Konzepten",
  },
];

export const BENEFITS = [
  {
    title: "Direkter Ansprechpartner",
    description:
      "Keine Umwege über Projektmanager – Sie sprechen direkt mit dem Entwickler.",
  },
  {
    title: "Strukturiertes & transparentes Vorgehen",
    description:
      "Klare Absprachen, realistische Einschätzungen und nachvollziehbare Umsetzung.",
  },
  {
    title: "Qualität & Nachhaltigkeit",
    description:
      "Sauberer, wartbarer Code statt schneller Lösungen, die später Probleme machen.",
  },
  {
    title: "Fokus auf Ihr Ziel",
    description:
      "Technik dient dem Zweck – Performance, Nutzerfreundlichkeit und Skalierbarkeit stehen im Mittelpunkt.",
  },
];

export const ABOUT_TEXT = {
  whoAmI: `Schon früh hat mich begeistert, wie aus einer Idee durch sauberen Code ein funktionierendes Produkt entsteht. Heute unterstütze ich Kunden dabei, moderne und performante Webanwendungen zu entwickeln, die nicht nur technisch überzeugen, sondern echten Mehrwert schaffen. Als Frontend-Webentwickler mit mehreren Jahren Berufserfahrung setze ich digitale Projekte strukturiert, zuverlässig und zukunftssicher um – von der ersten Idee bis zum Live-Gang. Dabei denke ich ganzheitlich: Architektur, Performance, Benutzerfreundlichkeit, Barrierefreiheit (a11y) und Suchmaschinenoptimierung (SEO) gehören für mich selbstverständlich dazu. Sauberer, wartbarer Code und bewährte Best Practices sind für mich kein Extra, sondern Grundlage jeder nachhaltigen Lösung.`,
  heroDescription: `Sie haben eine Idee oder ein bestehendes Web-Projekt, das professionell umgesetzt werden soll? Ich unterstütze Sie als Frontend-Webentwickler bei der Entwicklung moderner, skalierbarer Webanwendungen.`,
};

export const HERO = {
  name: "Niklas Blum",
  title: "Frontend-Webentwickler",
  imageSrc: "/Headshot.webp",
};

export const SKILL_CATEGORIES = [
  {
    title: "Core Stack (mein Fokus)",
    skills: SKILLS.coreStack,
    variant: "blue" as const,
  },
  {
    title: "Frontend Engineering",
    skills: SKILLS.frontendEngineering,
    variant: "blue" as const,
  },
  {
    title: "Architektur & Qualität",
    skills: SKILLS.architectureQuality,
    variant: "blue" as const,
  },
  {
    title: "AI & Automatisierung",
    skills: SKILLS.aiAutomation,
    variant: "blue" as const,
  },
  {
    title: "Weitere Erfahrung",
    skills: SKILLS.additionalExperience,
    variant: "blue" as const,
  },
];
