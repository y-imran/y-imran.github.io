import pakistanFlag from '@assets/portfolio/pakistan_flag.png';
import deadliestAnimals from '@assets/portfolio/deadliest_animals.png'
import businessDashboard from '@assets/portfolio/business_dashboard.png'
import patientDashboard from '@assets/portfolio/patient_dashboard.png'
import ufoSightings from '@assets/portfolio/ufo_sightings.png'
import sydneyForest from '@assets/portfolio/sydney_forest.png'
import containersFlags from '@assets/portfolio/containers_flags.png'
import launchExplorer from '@assets/portfolio/launch_explorer.png'
import parkinsonsDisease from '@assets/portfolio/parkinsons_disease.png'
import bloomYear from '@assets/portfolio/bloom_year.png';

export enum PortfolioCategory {
  TABLEAU = 'Tableau',
  PYTHON = 'Python',
}

export interface Portfolio {
  image: ImageMetadata;
  title: string;
  category: PortfolioCategory;
  url: string;
}

const portfolios: Portfolio[] = [
  {
    image: ufoSightings,
    title: "Makeover Monday W25 2026: UFO sightings #VOTD",
    category: PortfolioCategory.TABLEAU,
    url: 'https://public.tableau.com/app/profile/yusra.imran/viz/UFOSightingPatterns/Dashboard'
  },
  {
    image: launchExplorer,
    title: "Makeover Monday W26 2026: Global space launches explorer",
    category: PortfolioCategory.TABLEAU,
    url: 'https://public.tableau.com/app/profile/yusra.imran/viz/GlobalLaunchExplorer/Dashboard1'
  },
  {
    image: deadliestAnimals,
    title: "Makeover Monday W37 2026: World's deadlist animals",
    category: PortfolioCategory.TABLEAU,
    url: 'https://public.tableau.com/app/profile/yusra.imran/viz/TheWorldsDeadliestAnimals/Dashboard'
  },
  {
    image: sydneyForest,
    title: "Real trees data: The living forest of Sydney, Australia",
    category: PortfolioCategory.TABLEAU,
    url: 'https://public.tableau.com/app/profile/yusra.imran/viz/TheLivingForestofSydney/Dashboard'
  },
  {
    image: businessDashboard,
    title: "Business dashboard: Superstore executive performance",
    category: PortfolioCategory.TABLEAU,
    url: 'https://public.tableau.com/app/profile/yusra.imran/viz/SuperstoreExecutivePerformanceDashboard_17779194205120/Dashboard1'
  }, 
  {
    image: patientDashboard,
    title: "Healthcare fake data: Laboratory management system",
    category: PortfolioCategory.TABLEAU,
    url: 'https://public.tableau.com/app/profile/yusra.imran/viz/LaboratoryManagementSystem/Overview'
  },
  {
    image: bloomYear,
    title: "Back 2 Viz Basics W18 2026: U.S. Seasonal Flower Blooms",
    category: PortfolioCategory.TABLEAU,
    url: 'https://public.tableau.com/app/profile/yusra.imran/viz/BloomThroughtheSeasons/Dashboard1'
  },
  {
    image: containersFlags,
    title: "Mathematical art: Country flags by containers",
    category: PortfolioCategory.TABLEAU,
    url: 'https://public.tableau.com/app/profile/yusra.imran/viz/FlagsByContainers/Dashboard1'
  },
  {
    image: pakistanFlag,
    title: "Mathematical art: Parametric construction of the Pakistan flag",
    category: PortfolioCategory.TABLEAU,
    url: 'https://public.tableau.com/app/profile/yusra.imran/viz/Celebrating78YearsOfIndependence/Flag'
  },
  {
    image: parkinsonsDisease,
    title: "Parkinson's disease: Features comparative analysis",
    category: PortfolioCategory.PYTHON,
    url: 'https://github.com/y-imran/Parkinson-Disease-Analysis'
  },
];

export default portfolios;