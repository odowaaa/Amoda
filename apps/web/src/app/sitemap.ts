import type { MetadataRoute } from "next";
import { searchProperties } from "@/lib/api/properties";

const STATIC_ROUTES = [
  "",
  "/about",
  "/agents",
  "/blog",
  "/careers",
  "/compare",
  "/contact",
  "/cookies",
  "/mortgage-calculator",
  "/pricing",
  "/privacy",
  "/properties",
  "/terms",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1 : 0.7,
  }));

  let propertyEntries: MetadataRoute.Sitemap = [];
  try {
    const { data } = await searchProperties({ limit: 100, sortBy: "newest" });
    propertyEntries = data.map((property) => ({
      url: `${siteUrl}/properties/${property.slug}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    }));
  } catch {
    // API unreachable at build/request time — ship the static routes only
    // rather than failing the whole sitemap.
  }

  return [...staticEntries, ...propertyEntries];
}
