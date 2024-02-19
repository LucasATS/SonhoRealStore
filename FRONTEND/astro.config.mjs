import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: 'server',
  adapter: vercel({}),
  // ,
  // output: "server",
  // adapter: node({
  //   mode: "standalone"
  // })
});