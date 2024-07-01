import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import vercelServerless from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      applyBaseStyles: false
    }), 
    mdx(), 
    icon()
  ],
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'tap'
  },
  output: "server",
  adapter: vercelServerless()
});