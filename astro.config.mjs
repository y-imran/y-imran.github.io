// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://y-imran.github.io',
  trailingSlash: 'always',
  vite: {
    resolve: {
      alias: {
        '@portfolio': '/src/assets/portfolio',
        '@blog': '/src/assets/blog',
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
