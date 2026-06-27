import type { MetadataRoute } from "next";
import { industries, serviceAreas, services, site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/fleet", "/service-areas", "/industries", "/about", "/brand", "/request-a-quote", "/contact"];
  const serviceRoutes = services.map((item) => `/services/${item.slug}`);
  const industryRoutes = industries.map((item) => `/industries/${item.slug}`);
  const areaRoutes = serviceAreas.map((item) => `/service-areas/${item.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...industryRoutes, ...areaRoutes].map((route) => ({
    url: `https://${site.domain}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.includes("/services/") || route.includes("/service-areas/") ? 0.75 : 0.7
  }));
}
