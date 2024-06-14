import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import glsl from "vite-plugin-glsl";
import mdx from '@astrojs/mdx';
//toplevel is probably not requried
// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), mdx()],
  vite: { plugins: [glsl(),] }
});