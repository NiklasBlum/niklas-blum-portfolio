export const PROJECT_IMAGES = [
  "/projects/Landing.webp",
  "/projects/Home.webp",
  "/projects/Trending.webp",
  "/projects/Detail.webp",
  "/projects/Watched.webp",
];

export const SFU_IMAGES = [
  "/projects/SFU/Home.png",
  "/projects/SFU/Abteilungen.png",
  "/projects/SFU/Veranstaltungen.png",
];

interface Project {
  id: number;
  label?: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl: string;
  detailsUrl?: string;
  codeUrl?: string;
  images: string[];
  imageFit?: "cover" | "contain";
  imageCount?: number;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    label: "Kooperation",
    title: "Swabian Sports Club – Community-Website",
    description:
      "In Kooperation mit Swabian Sports Club entwickelte ich eine Website für eine Multisport-Community aus Schwaben. Sie präsentiert das Community-Angebot, die Memberships und das Partnernetzwerk.",
    techStack: [],
    liveUrl: "https://swabiansportsclub.com/",
    detailsUrl: "/referenzen/swabian-sports-club",
    images: ["/projects/swabian-sports-club.webp"],
    imageFit: "cover" as const,
  },
  {
    id: 2,
    title: "Sportfreunde Urlau – Vereinswebsite",
    description:
      "Öffentliche Website für den Sportverein Sportfreunde Urlau e.V. mit Abteilungsübersicht, CMS-gesteuerten Veranstaltungen und einer modernen, responsiven Oberfläche. Inhalte werden über Sanity verwaltet und per GROQ abgefragt.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Sanity CMS",
      "Vercel",
    ],
    liveUrl: "https://sportfreunde-urlau.de",
    detailsUrl: "/referenzen/sportfreunde-urlau",
    codeUrl: "https://github.com/NiklasBlum/sportfreunde-urlau-frontend",
    images: SFU_IMAGES,
    imageFit: "contain" as const,
  },
  {
    id: 3,
    title: "Movie & TV Show Tracker",
    description:
      "Eine moderne Webanwendung zum Verwalten und Tracken von gesehenen Filmen und Serien. Mit umfangreichen Such- und Filterfunktionen, personalisierten Watchlists, detaillierten Statistiken und Übersicht über kommende Veröffentlichungen. Inklusive Login (Google & Email), Datenbank Integration, API Integration",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "REST API",
      "Supabase",
    ],
    liveUrl: "https://trackmymedia.vercel.app",
    codeUrl: "https://github.com/NiklasBlum/trackmymedia-next-supabase",
    images: PROJECT_IMAGES,
    imageCount: PROJECT_IMAGES.length,
  },
];
