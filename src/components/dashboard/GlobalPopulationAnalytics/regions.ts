// Continent regions as alpha-3 codes, covering the world-atlas 110m features.
// ATF (Fr. S. Antarctic Lands) and the code-devoid Kosovo / Somaliland /
// N. Cyprus fall outside every region; Antarctica (010) is excluded globally.
// Conventions follow the UN geoscheme: Russia → Europe, Turkey → Asia,
// Greenland → North America, Indonesia → Asia, Falklands → South America.
export const REGIONS: Record<string, string[]> = {
  africa:
    'TZA ESH COD SOM KEN SDN TCD ZAF LSO ZWE BWA NAM SEN MLI MRT BEN NER NGA CMR TGO GHA CIV GIN GNB LBR SLE BFA CAF COG GAB GNQ ZMB MWI MOZ SWZ AGO BDI MDG GMB TUN DZA EGY LBY ETH DJI UGA RWA ERI SSD MAR'.split(
      ' ',
    ),
  asia:
    'KAZ UZB ISR LBN PSE JOR ARE QAT KWT IRQ OMN IDN KHM THA LAO MMR VNM PRK KOR MNG IND BGD BTN NPL PAK AFG TJK KGZ TKM IRN SYR ARM CHN TWN PHL MYS BRN LKA JPN AZE GEO YEM SAU CYP TLS TUR'.split(
      ' ',
    ),
  europe:
    'NOR FRA RUS SWE BLR UKR POL AUT HUN MDA ROU LTU LVA EST DEU BGR GRC ALB BIH HRV CHE LUX BEL NLD PRT ESP IRL ITA DNK GBR ISL SVN FIN SVK CZE MKD SRB MNE'.split(
      ' ',
    ),
  oceania: 'PNG VUT NCL SLB NZL AUS FJI'.split(' '),
  'south-america':
    'ARG CHL URY BRA BOL PER COL ECU PRY VEN GUY SUR FLK'.split(' '),
  'north-america':
    'CAN USA GRL MEX PAN CRI NIC HND SLV GTM BLZ PRI JAM CUB DOM HTI BHS TTO'.split(' '),
};

// Flat map windows for the filter-card minimaps: the projection is fitted to
// this rectangle and everything outside is clipped. Lons may exceed ±180
// (spherical coords are fine; the seam stays away from the region's mass).
// Europe uses Mercator so the far north keeps the flag-art proportions.
export type RegionMapConfig = {
  center: number;
  viewport: number[][];
  mercator?: boolean;
};
export const REGION_MAPS: Record<string, RegionMapConfig> = {
  global: { center: 0, viewport: [[-180, -90], [180, 90]] },
  africa: { center: 16, viewport: [[-20, -36], [52, 38]] },
  asia: { center: 87, viewport: [[26, -11], [148, 56]] },
  europe: { center: 75, viewport: [[-30, 33], [180, 83]], mercator: true },
  oceania: { center: 155, viewport: [[110, -50], [200.6, 8]] },
  'south-america': { center: -58, viewport: [[-82, -56], [-34, 13]] },
  'north-america': { center: -115, viewport: [[-178, 7], [-52, 84]] },
};