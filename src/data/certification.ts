import type { ImageMetadata } from 'astro';

import salesforceTableauDesktopFoundation from '@assets/certification/salesforce-tableau-desktop-foundation.png';

export interface Certification {
  title: string;
  since: string;
  image: ImageMetadata;
}

export const certifications: Certification[] = [
  {
    title: 'Salesforce Certified Tableau Desktop Foundations',
    since: 'Since 2025',
    image: salesforceTableauDesktopFoundation,
  },
];

export default certifications;