import type { ImageMetadata } from 'astro';

import businessDashboard from '@assets/portfolio/business_dashboard.png';
import patientDashboard from '@assets/portfolio/patient_dashboard.png';
import containersFlags from '@assets/portfolio/containers_flags.png';
import pakistanFlag from '@assets/portfolio/pakistan_flag.png';
import sydneyForest from '@assets/portfolio/sydney_forest.png';
import ufoSightings from '@assets/portfolio/ufo_sightings.png';
import launchExplorer from '@assets/portfolio/launch_explorer.png';
import deadliestAnimals from '@assets/portfolio/deadliest_animals.png';
import analogClock from '@assets/portfolio/analog_clock.png';
import antibioticDashboard from '@assets/portfolio/antibiotic_dashboard.png';
import birthdayMonth from '@assets/portfolio/birthday_month.png';
import bmiCalculator from '@assets/portfolio/bmi_calculator.png';
import euFlag from '@assets/portfolio/eu_flag.png';
import globalSmokers from '@assets/portfolio/global_smokers.png';
import naturalGas from '@assets/portfolio/natural_gas.png';
import periodicTable from '@assets/portfolio/periodic_table.png';
import turkiyeFlag from '@assets/portfolio/turkiye_flag.png';
import waffleChart from '@assets/portfolio/waffle_chart.png';
import yearlyEvents from '@assets/portfolio/yearly_events.png';
import bloomYear from '@assets/portfolio/bloom_year.png';

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
    id: 'bloom-through-the-seasons',
    publishedDate: '2026-09-24',
    title: "Bloom Through the Seasons",
    tableauUrl: 'https://public.tableau.com/app/profile/yusra.imran/viz/BloomThroughtheSeasons/Dashboard1',
    thumbnail: bloomYear
  },
  {
    id: 'the-worlds-deadliest-animals',
    publishedDate: '2026-09-18',
    title: "The World's Deadliest Animals",
    tableauUrl:
      'https://public.tableau.com/app/profile/yusra.imran/viz/TheWorldsDeadliestAnimals/Dashboard',
    thumbnail: deadliestAnimals
  },
  {
    id: 'laboratory-management-system',
    publishedDate: '2026-09-14',
    title: 'Laboratory Management System',
    tableauUrl:
      'https://public.tableau.com/app/profile/yusra.imran/viz/LaboratoryManagementSystem/Overview',
    thumbnail: patientDashboard
  },
  {
    id: 'global-launch-explorer',
    publishedDate: '2026-07-07',
    title: 'Global Launch Explorer',
    tableauUrl:
      'https://public.tableau.com/app/profile/yusra.imran/viz/GlobalLaunchExplorer/Dashboard1',
    thumbnail: launchExplorer
  },
  {
    id: 'ufo-sighting-patterns',
    publishedDate: '2026-06-24',
    title: 'UFO Sighting Patterns',
    tableauUrl:
      'https://public.tableau.com/app/profile/yusra.imran/viz/UFOSightingPatterns/Dashboard',
    thumbnail: ufoSightings,
    isVotd: true
  },
  {
    id: 'the-living-forest-of-sydney',
    publishedDate: '2026-06-15',
    title: 'The Living Forest of Sydney',
    tableauUrl:
      'https://public.tableau.com/app/profile/yusra.imran/viz/TheLivingForestofSydney/Dashboard',
    thumbnail: sydneyForest
  },
  {
    id: 'bmi-calculator',
    publishedDate: '2026-05-18',
    title: 'BMI Calculator',
    tableauUrl:
      'https://public.tableau.com/app/profile/yusra.imran/viz/BMICalculator_17791069428940/FirstScreen',
    thumbnail: bmiCalculator
  },
  {
    id: 'superstore-executive-performance-dashboard',
    publishedDate: '2026-05-04',
    title: 'Superstore Executive Performance Dashboard',
    tableauUrl:
      'https://public.tableau.com/app/profile/yusra.imran/viz/SuperstoreExecutivePerformanceDashboard_17779194205120/Dashboard1',
    thumbnail: businessDashboard
  },
  {
    id: 'global-events-and-awareness-calendar',
    publishedDate: '2026-04-19',
    title: 'Global Events And Awareness Calendar',
    tableauUrl:
      'https://public.tableau.com/app/profile/yusra.imran/viz/GlobalEventsAndAwarenessCalendar/EventsDashboard',
    thumbnail: yearlyEvents
  },
  {
    id: 'natural-gas-reserves',
    publishedDate: '2026-01-27',
    title: 'Natural Gas Reserves',
    tableauUrl:
      'https://public.tableau.com/app/profile/yusra.imran/viz/NaturalGasReserves/Dashboard1',
    thumbnail: naturalGas
  },
  {
    id: 'global-antibiotic-resistance',
    publishedDate: '2026-01-01',
    title: 'Global Antibiotic Resistance',
    tableauUrl:
      'https://public.tableau.com/app/profile/yusra.imran/viz/GlobalAntibioticResistance/Dashboard1',
    thumbnail: antibioticDashboard
  },
  {
    id: 'live-analog-clock',
    publishedDate: '2025-11-06',
    title: 'Live Analog Clock',
    tableauUrl:
      'https://public.tableau.com/app/profile/yusra.imran/viz/LiveAnalogClock/AnalogClock',
    thumbnail: analogClock
  },
  {
    id: 'smoking-patterns-by-gender',
    publishedDate: '2025-10-25',
    title: 'Smoking Patterns by Gender',
    tableauUrl:
      'https://public.tableau.com/app/profile/yusra.imran/viz/SmokingPatternsbyGender/GlobleSmokers',
    thumbnail: globalSmokers
  },
  {
    id: 'waffle-chart-of-global-smoking-rates',
    publishedDate: '2025-10-19',
    title: 'Waffle Chart of Global Smoking Rates',
    tableauUrl:
      'https://public.tableau.com/app/profile/yusra.imran/viz/WaffleChartofGlobalSmokingRates/Dashboard1',
    thumbnail: waffleChart
  },
  {
    id: 'flag-of-european-union',
    publishedDate: '2025-10-03',
    title: 'Flag Of European Union',
    tableauUrl:
      'https://public.tableau.com/app/profile/yusra.imran/viz/FlagOfEuropeanUnion/EUFlag',
    thumbnail: euFlag
  },
  {
    id: 'flag-of-turkiye',
    publishedDate: '2025-08-18',
    title: 'Flag Of Türkiye',
    tableauUrl:
      'https://public.tableau.com/app/profile/yusra.imran/viz/TurkeyFlag/Flag',
    thumbnail: turkiyeFlag
  },
  {
    id: 'celebrating-78-years-of-independence',
    publishedDate: '2025-08-15',
    title: 'Celebrating 78 Years Of Independence',
    tableauUrl:
      'https://public.tableau.com/app/profile/yusra.imran/viz/Celebrating78YearsOfIndependence/Flag',
    thumbnail: pakistanFlag
  },
  {
    id: 'august-my-birthday-month',
    publishedDate: '2025-08-03',
    title: 'August - My Birthday Month',
    tableauUrl:
      'https://public.tableau.com/app/profile/yusra.imran/viz/August-MyBirthdayMonth/Canvas',
    thumbnail: birthdayMonth
  },
  {
    id: 'periodic-table',
    publishedDate: '2025-07-22',
    title: "Periodic Table",
    tableauUrl:
      'https://public.tableau.com/app/profile/yusra.imran/viz/PeriodicTable_17531961381580/Dashboard1',
    thumbnail: periodicTable
  },
  {
    id: 'flags-by-containers',
    publishedDate: '2025-07-14',
    title: 'Flags By Containers',
    tableauUrl:
      'https://public.tableau.com/app/profile/yusra.imran/viz/FlagsByContainers/Dashboard1',
    thumbnail: containersFlags
  },
];

export default tableauVisualizations;