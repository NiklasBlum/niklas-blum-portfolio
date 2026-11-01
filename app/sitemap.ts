import type { MetadataRoute } from "next";
import { REFERENCES } from "@/constants/references";
import { SERVICE_PAGES } from "@/constants/service-pages";
import { absoluteUrl } from "@/constants/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "/",
    "/leistungen",
    "/referenzen",
    ...SERVICE_PAGES.map(({ slug }) => `/leistungen/${slug}`),
    ...REFERENCES.map(({ slug }) => `/referenzen/${slug}`),
  ];

  return pages.map((path) => ({
    url: absoluteUrl(path),
  }));
}
