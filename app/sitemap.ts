import type { MetadataRoute } from "next";
export default function sitemap():MetadataRoute.Sitemap{return ["","/services","/services/courier","/services/freight","/services/logistics","/service-areas","/about","/contact","/industries","/resources","/forms","/privacy"].map(route=>({url:`https://kwclogistics.ca${route}`,changeFrequency:"monthly",priority:route===""?1:.7}));}
