// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://y-imran.github.io',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@src': '/src',
        '@components': '/src/components',
        '@assets': '/src/assets',
        '@data': '/src/data',
      },
    },
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Poppins',
      cssVariable: '--font-poppins',
      // [font-light, font-normal, font-medium, font-bold, font-black]
      weights: [300, 400, 500, 700, 900],
      styles: ['normal'],
      subsets: ['latin'],
    },
  ],
  integrations: [
    mdx(),
    sitemap(),
  ],
  devToolbar: {
    enabled: false
  }
});
