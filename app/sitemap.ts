import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://jaavin.ca",
      lastModified: new Date(),
    },
  ];
}
