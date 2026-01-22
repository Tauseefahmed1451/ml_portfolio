import type { MetadataRoute } from "next";
import { projects } from "./projects/projects-data";

const baseUrl = "https://tauseefml.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const projectEntries = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified,
  }));

  return [
    { url: `${baseUrl}/`, lastModified },
    { url: `${baseUrl}/case-studies`, lastModified },
    { url: `${baseUrl}/case-studies/moderation-factcheck-at-scale`, lastModified },
    { url: `${baseUrl}/case-studies/custom-sd-game-characters`, lastModified },
    { url: `${baseUrl}/projects`, lastModified },
    ...projectEntries,
    { url: `${baseUrl}/public-work`, lastModified },
    { url: `${baseUrl}/publications`, lastModified },
    { url: `${baseUrl}/resume`, lastModified },
  ];
}
