import type { MetadataRoute } from "next";
import { services, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/services", "/resources", "/contact"];
  const serviceRoutes = services.map((item) => `/services/${item.slug}`);

  return [...staticRoutes, ...serviceRoutes].map((route) => ({
    url: `https://${site.domain}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.includes("/services/") ? 0.75 : 0.7
  }));
}
