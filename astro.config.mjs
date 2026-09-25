// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import mdx from '@astrojs/mdx';
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
        '@portfolio': '/src/assets/portfolio',
        '@blog': '/src/assets/blog',
        '@certification': '/src/assets/certification',
        '@components': '/src/components',
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
  integrations: [mdx()],
  devToolbar: {
    enabled: false
  }
});
