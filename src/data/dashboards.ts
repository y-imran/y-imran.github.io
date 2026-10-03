import type { ImageMetadata } from 'astro';

import globalPopulationAnalytics from '@assets/dashboard/global-population-analytics.png';

export interface Dashboard {
  title: string;
  description: string;
  competition: string;
  url: string;
  thumbnail: ImageMetadata;
}

const dashboards: Dashboard[] = [
  {
    title: 'Global Population Analytics',
    description: "How many times over has each country's population grown since 1960?",
    competition: 'Makeover Monday',
    url: '/dashboard/makeover-monday/2026/w39/global-population-analytics/',
    thumbnail: globalPopulationAnalytics,
  },
];

export default dashboards;
