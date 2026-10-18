import type { MetadataRoute } from "next";
import { previewOnly } from "@/lib/release";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      ...(previewOnly ? { disallow: "/" } : { allow: "/" }),
    },
    sitemap: "https://kwclogistics.ca/sitemap.xml",
  };
}
