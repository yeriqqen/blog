// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwindcss from '@tailwindcss/vite';

import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  site: 'https://yeriqqen.github.io',
  base: '/',
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [mdx(), vue()],
  trailingSlash: 'ignore'
});