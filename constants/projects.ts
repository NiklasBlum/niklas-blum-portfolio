export const PROJECT_IMAGES = [
  "/projects/Landing.webp",
  "/projects/Home.webp",
  "/projects/Trending.webp",
  "/projects/Detail.webp",
  "/projects/Watched.webp",
];

export const PROJECTS = [
  {
    id: 1,
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
    imageCount: PROJECT_IMAGES.length,
  },
];
