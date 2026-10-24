import type { ImageMetadata } from 'astro';

import salesforceTableauDesktopFoundation from '@assets/certification/salesforce-tableau-desktop-foundation.png';
import salesforceTableauDataAnalyst from '@assets/certification/salesforce-tableau-data-analyst.png'

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
  {
    title: 'Salesforce Certified Tableau Data Analyst',
    since: 'Since 2026',
    image: salesforceTableauDataAnalyst,
  }
];

export default certifications;