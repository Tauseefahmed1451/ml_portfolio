import type { MetadataRoute } from "next";

const baseUrl = "https://tauseefml.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    { url: `${baseUrl}/`, lastModified },
    { url: `${baseUrl}/case-studies`, lastModified },
    { url: `${baseUrl}/case-studies/moderation-factcheck-at-scale`, lastModified },
    { url: `${baseUrl}/case-studies/custom-sd-game-characters`, lastModified },
    { url: `${baseUrl}/projects`, lastModified },
    { url: `${baseUrl}/projects/rag-knowledge-assistant`, lastModified },
    { url: `${baseUrl}/projects/document-completeness-checker`, lastModified },
    { url: `${baseUrl}/projects/fact-check-moderation-pipeline`, lastModified },
    { url: `${baseUrl}/projects/custom-sd-characters`, lastModified },
    { url: `${baseUrl}/projects/liveness-detection-cnic`, lastModified },
    { url: `${baseUrl}/public-work`, lastModified },
    { url: `${baseUrl}/resume`, lastModified },
  ];
}
