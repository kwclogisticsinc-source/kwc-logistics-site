import { commercialServices } from "@/lib/commercial-services";
import { freightPages } from "@/lib/freight-pages";
import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/services",
    "/services/courier",
    "/services/freight",
    "/services/logistics",
    ...commercialServices.map(([slug]) => `/services/${slug}`),
    "/service-areas",
    ...freightPages.map(({ slug }) => `/service-areas/${slug}`),
    "/about",
    "/contact",
    "/book-now",
    "/regular-deliveries",
    "/industries",
    "/resources",
    "/forms",
    "/privacy",
  ].map((route) => ({
    url: `https://kwclogistics.ca${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
