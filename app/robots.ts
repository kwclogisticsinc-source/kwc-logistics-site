import type { MetadataRoute } from "next";
import { previewOnly } from "@/lib/release";

export default function robots(): MetadataRoute.Robots {
  return {
    // Preview crawlers must be able to read the layout’s noindex directive.
    rules: { userAgent: "*", allow: "/" },
    ...(previewOnly ? {} : { sitemap: "https://kwclogistics.ca/sitemap.xml" }),
  };
}
