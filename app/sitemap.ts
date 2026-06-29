import type { MetadataRoute } from "next";
import { serviceAreas, services, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/services", "/warehousing", "/fleet", "/service-areas", "/safety", "/request-a-quote", "/contact"];
  const serviceRoutes = services.map((item) => `/services/${item.slug}`);
  const areaRoutes = serviceAreas.map((item) => `/service-areas/${item.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...areaRoutes].map((route) => ({
    url: `https://${site.domain}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.includes("/services/") || route.includes("/service-areas/") ? 0.75 : 0.7
  }));
}
