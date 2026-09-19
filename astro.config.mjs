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
      name: 'Google Sans',
      cssVariable: '--font-google-sans',
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['latin'],
    },
  ],
  integrations: [mdx()],
  devToolbar: {
    enabled: false
  }
});
