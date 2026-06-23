import type { MetadataRoute } from "next";
import { site } from "@/lib/data";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name} — ${site.role}`,
    short_name: "Sonu Kumar",
    description:
      "Portfolio of Sonu Kumar, Data Analyst & AI Automation Engineer.",
    start_url: "/",
    display: "standalone",
    background_color: "#08080f",
    theme_color: "#08080f",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
    ],
  };
}
