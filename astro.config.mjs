import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

export default defineConfig({
  output: 'static',
  adapter: vercel(),
  integrations: [sitemap()],
  site: 'https://nasya-driving.vercel.app',
  vite: {
    plugins: [tailwindcss()],
  },
});
