import { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/`,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/portfolio`,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: `${baseUrl}/contact`,
      changeFrequency: "yearly",
      priority: 1,
    },
  ];
}
