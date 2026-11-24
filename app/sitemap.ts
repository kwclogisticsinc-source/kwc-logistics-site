import { industryPages } from "@/lib/industry-pages";
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
    "/services/freight-brokerage",
    ...commercialServices.map(([slug]) => `/services/${slug}`),
    "/service-areas",
    ...freightPages.map(({ slug }) => `/service-areas/${slug}`),
    "/about",
    "/equipment",
    "/safety",
    "/technology",
    "/contact",
    "/book-now",
    "/shipment-updates",
    "/drive-with-kwc",
    "/customer-registration",
    "/regular-deliveries",
    "/industries",
    ...industryPages.map(([slug]) => `/industries/${slug}`),
    "/resources",
    "/forms",
    "/privacy",
  ].map((route) => ({
    url: `https://kwclogistics.ca${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
