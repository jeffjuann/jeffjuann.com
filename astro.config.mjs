import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import vercelServerless from '@astrojs/vercel/serverless';
import vercelStatic from '@astrojs/vercel/static';

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
    defaultStrategy: 'load',
  },
  output: "static",
  adapter: vercelStatic()
});