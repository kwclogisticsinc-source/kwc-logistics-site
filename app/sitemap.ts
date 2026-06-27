import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes = ["", "/services", "/service-areas", "/about", "/request-a-quote", "/contact"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://${site.domain}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.8
  }));
}
