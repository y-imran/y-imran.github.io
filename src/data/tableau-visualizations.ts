import type { ImageMetadata } from 'astro';

import businessDashboard from '@portfolio/business_dashboard.png';
import patientDashboard from '@portfolio/patient_dashboard.png';
import containersFlags from '@portfolio/containers_flags.png';
import pakistanFlag from '@portfolio/pakistan_flag.png';
import sydneyForest from '@portfolio/sydney_forest.png';
import ufoSightings from '@portfolio/ufo_sightings.png';
import launchExplorer from '@portfolio/launch_explorer.png';
import deadliestAnimals from '@portfolio/deadliest_animals.png';

export interface TableauVisualization {
  id: string;
  publishedDate: string;
  title: string;
  tableauUrl: string;
  thumbnail?: ImageMetadata;
  isVotd?: boolean;
}

export const tableauVisualizations: TableauVisualization[] = [
  {
    id: 'renewable-energy-transition',
    publishedDate: '2025-01-20',
    title: 'Makeover Monday W3 2025: Global renewable energy transition',
    tableauUrl:
      'https://public.tableau.com/app/profile/yusra.imran/viz/RenewableEnergyTransition/Dashboard',
  },
  {
    id: 'olympic-medals-by-nation',
    publishedDate: '2025-02-10',
    title: 'Makeover Monday W6 2025: Olympic medals by nation',
    tableauUrl:
      'https://public.tableau.com/app/profile/yusra.imran/viz/OlympicMedalsByNation/Dashboard',
  },
  {
    id: 'coffee-production-worldwide',
    publishedDate: '2025-03-03',
    title: 'Makeover Monday W10 2025: Coffee production worldwide',
    tableauUrl:
      'https://public.tableau.com/app/profile/yusra.imran/viz/CoffeeProductionWorldwide/Dashboard',
  },
  {
    id: 'plastic-waste-in-oceans',
    publishedDate: '2025-03-24',
    title: 'Makeover Monday W12 2025: Plastic waste in oceans',
    tableauUrl:
      'https://public.tableau.com/app/profile/yusra.imran/viz/PlasticWasteInOceans/Dashboard',
  },
  {
    id: 'air-quality-index-trends',
    publishedDate: '2025-04-14',
    title: 'Makeover Monday W15 2025: Air quality index trends',
    tableauUrl:
      'https://public.tableau.com/app/profile/yusra.imran/viz/AirQualityIndexTrends/Dashboard',
  },
  {
    id: 'superstore-executive-performance',
    publishedDate: '2025-05-10',
    title: 'Superstore executive performance dashboard',
    tableauUrl:
      'https://public.tableau.com/app/profile/yusra.imran/viz/SuperstoreExecutivePerformanceDashboard_17779194205120/Dashboard1',
    thumbnail: businessDashboard,
  },
  {
    id: 'global-shipping-routes',
    publishedDate: '2025-05-26',
    title: 'Makeover Monday W21 2025: Global shipping routes',
    tableauUrl:
      'https://public.tableau.com/app/profile/yusra.imran/viz/GlobalShippingRoutes/Dashboard',
  },
  {
    id: 'laboratory-management-system',
    publishedDate: '2025-06-21',
    title: 'Healthcare fake data: Laboratory management system',
    tableauUrl:
      'https://public.tableau.com/app/profile/yusra.imran/viz/LaboratoryManagementSystem/Overview',
    thumbnail: patientDashboard,
  },
  {
    id: 'world-population-density',
    publishedDate: '2025-07-14',
    title: 'Makeover Monday W28 2025: World population density',
    tableauUrl:
      'https://public.tableau.com/app/profile/yusra.imran/viz/WorldPopulationDensity/Dashboard',
  },
  {
    id: 'pakistan-flag-parametric',
    publishedDate: '2025-08-14',
    title: 'Mathematical art: Parametric construction of the Pakistan flag',
    tableauUrl:
      'https://public.tableau.com/app/profile/yusra.imran/viz/Celebrating78YearsOfIndependence/Flag',
    thumbnail: pakistanFlag,
  },
  {
    id: 'flags-by-containers',
    publishedDate: '2025-08-20',
    title: 'Mathematical art: Country flags by containers',
    tableauUrl:
      'https://public.tableau.com/app/profile/yusra.imran/viz/FlagsByContainers/Dashboard1',
    thumbnail: containersFlags,
  },
  {
    id: 'living-forest-of-sydney',
    publishedDate: '2025-09-15',
    title: 'Real trees data: The living forest of Sydney, Australia',
    tableauUrl:
      'https://public.tableau.com/app/profile/yusra.imran/viz/TheLivingForestofSydney/Dashboard',
    thumbnail: sydneyForest,
  },
  {
    id: 'nobel-laureates-by-country',
    publishedDate: '2025-10-13',
    title: 'Makeover Monday W41 2025: Nobel laureates by country',
    tableauUrl:
      'https://public.tableau.com/app/profile/yusra.imran/viz/NobelLaureatesByCountry/Dashboard',
  },
  {
    id: 'internet-adoption-rates',
    publishedDate: '2025-11-17',
    title: 'Makeover Monday W46 2025: Internet adoption rates',
    tableauUrl:
      'https://public.tableau.com/app/profile/yusra.imran/viz/InternetAdoptionRates/Dashboard',
  },
  {
    id: 'global-temperature-anomalies',
    publishedDate: '2025-12-15',
    title: 'Makeover Monday W50 2025: Global temperature anomalies',
    tableauUrl:
      'https://public.tableau.com/app/profile/yusra.imran/viz/GlobalTemperatureAnomalies/Dashboard',
  },
  {
    id: 'wildlife-population-decline',
    publishedDate: '2026-01-19',
    title: 'Makeover Monday W3 2026: Wildlife population decline',
    tableauUrl:
      'https://public.tableau.com/app/profile/yusra.imran/viz/WildlifePopulationDecline/Dashboard',
  },
  {
    id: 'ufo-sighting-patterns',
    publishedDate: '2026-06-15',
    title: 'Makeover Monday W25 2026: UFO sighting patterns',
    tableauUrl:
      'https://public.tableau.com/app/profile/yusra.imran/viz/UFOSightingPatterns/Dashboard',
    thumbnail: ufoSightings,
    isVotd: true,
  },
  {
    id: 'global-launch-explorer',
    publishedDate: '2026-06-22',
    title: 'Makeover Monday W26 2026: Global space launches explorer',
    tableauUrl:
      'https://public.tableau.com/app/profile/yusra.imran/viz/GlobalLaunchExplorer/Dashboard1',
    thumbnail: launchExplorer,
  },
  {
    id: 'worlds-deadliest-animals',
    publishedDate: '2026-09-07',
    title: "Makeover Monday W37 2026: World's deadliest animals",
    tableauUrl:
      'https://public.tableau.com/app/profile/yusra.imran/viz/TheWorldsDeadliestAnimals/Dashboard',
    thumbnail: deadliestAnimals,
  },
];

export default tableauVisualizations;