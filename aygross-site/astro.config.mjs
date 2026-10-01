import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";

const envSiteUrl = process.env.SITE_URL ?? "https://aygross.com/";
const site = envSiteUrl.endsWith("/") ? envSiteUrl : `${envSiteUrl}/`;
const siteNoTrailingSlash = site.endsWith("/") ? site.slice(0, -1) : site;

// https://astro.build/config
export default defineConfig({
  site,
  integrations: [
    sitemap(),
    robotsTxt({
      sitemap: [`${siteNoTrailingSlash}/sitemap-index.xml`],
    }),
    UnoCSS({ injectReset: true }),
    icon(),
  ],
  output: "static",
  vite: {
    server: {
      allowedHosts: [".trycloudflare.com"],
    },
  },
});