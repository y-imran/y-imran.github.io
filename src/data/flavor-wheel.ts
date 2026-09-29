export interface FlavorNode {
  name: string;
  color?: string;
  children?: FlavorNode[];
}

export const flavorWheel: FlavorNode = {
  name: 'COFFEE',
  color: '#6f4e37',
  children: [
    {
      name: 'FLORAL',
      color: '#c2255c',
      children: [
        { name: 'BLACK TEA', color: '#37424f' },
        {
          name: 'FLORAL',
          color: '#d6336c',
          children: [
            { name: 'CHAMOMILE', color: '#f3c614' },
            { name: 'ROSE', color: '#f18dad' },
            { name: 'JASMINE', color: '#efeadb' },
          ],
        },
      ],
    },
    {
      name: 'FRUITY',
      color: '#e03131',
      children: [
        {
          name: 'BERRY',
          color: '#c2255c',
          children: [
            { name: 'BLACKBERRY', color: '#2f2438' },
            { name: 'RASPBERRY', color: '#a61e4d' },
            { name: 'BLUEBERRY', color: '#5f6db3' },
            { name: 'STRAWBERRY', color: '#e35050' },
          ],
        },
        {
          name: 'DRIED FRUIT',
          color: '#862e2e',
          children: [
            { name: 'RAISIN', color: '#5c3d3d' },
            { name: 'PRUNE', color: '#6a3a6e' },
          ],
        },
        {
          name: 'OTHER FRUIT',
          color: '#e8590c',
          children: [
            { name: 'COCONUT', color: '#c8b8a2' },
            { name: 'CHERRY', color: '#c92a42' },
            { name: 'POMEGRANATE', color: '#d6336c' },
            { name: 'PINEAPPLE', color: '#f2a93b' },
            { name: 'GRAPE', color: '#9775c9' },
            { name: 'APPLE', color: '#66a30f' },
            { name: 'PEACH', color: '#f0893a' },
            { name: 'PEAR', color: '#a3b32f' },
          ],
        },
        {
          name: 'CITRUS FRUIT',
          color: '#f08c00',
          children: [
            { name: 'GRAPEFRUIT', color: '#e2554a' },
            { name: 'ORANGE', color: '#e07b27' },
            { name: 'LEMON', color: '#f5e000' },
            { name: 'LIME', color: '#8fb92f' },
          ],
        },
      ],
    },
    {
      name: 'FERMENTED',
      color: '#b7a81f',
      children: [
        {
          name: 'SOUR',
          color: '#a9b82f',
          children: [
            { name: 'SOUR AROMATICS', color: '#a3ad2f' },
            { name: 'ACETIC ACID', color: '#9aa36b' },
            { name: 'BUTYRIC ACID', color: '#b99b3f' },
            { name: 'ISOVALERIC ACID', color: '#7d8f3a' },
            { name: 'CITRIC ACID', color: '#d3d11e' },
            { name: 'MALIC ACID', color: '#b04a86' },
          ],
        },
        {
          name: 'ALCOHOL',
          color: '#a08c20',
          children: [
            { name: 'WINEY', color: '#9c2f7f' },
            { name: 'WHISKEY', color: '#b0742c' },
            { name: 'FERMENTED', color: '#b8a94a' },
            { name: 'OVERRIPE', color: '#66662e' },
          ],
        },
      ],
    },
    {
      name: 'GREEN',
      color: '#3f9d4e',
      children: [
        { name: 'OLIVE OIL', color: '#8f942e' },
        {
          name: 'RAW',
          color: '#69b34c',
          children: [
            { name: 'UNDER-RIPE', color: '#a4c25a' },
            { name: 'PEAPOD', color: '#4ea35f' },
          ],
        },
        {
          name: 'VEGETATIVE',
          color: '#2f9e6e',
          children: [
            { name: 'FRESH', color: '#3aa88c' },
            { name: 'DARK GREEN', color: '#1e7040' },
            { name: 'VEGETATIVE', color: '#59a869' },
            { name: 'HAY-LIKE', color: '#b3ae4a' },
            { name: 'HERB-LIKE', color: '#7cc05f' },
          ],
        },
        { name: 'BEANY', color: '#c9bd8f' },
      ],
    },
    {
      name: 'OTHER',
      color: '#74a7b8',
      children: [
        {
          name: 'PAPERY',
          color: '#92a5b5',
          children: [
            { name: 'STALE', color: '#c2b287' },
            { name: 'CARDBOARD', color: '#cfb261' },
            { name: 'PAPERY', color: '#ddd3b0' },
            { name: 'WOODY', color: '#57432f' },
            { name: 'MOLDY/DAMP', color: '#8c9461' },
            { name: 'MUSTY/DUSTY', color: '#a89c63' },
            { name: 'MUSTY/EARTHY', color: '#6f5b40' },
            { name: 'ANIMALIC', color: '#96714c' },
            { name: 'MEATY BROTHY', color: '#bd8a63' },
            { name: 'PHENOLIC', color: '#d9a796' },
          ],
        },
        {
          name: 'CHEMICAL',
          color: '#5f8f9e',
          children: [
            { name: 'BITTER', color: '#89a7ad' },
            { name: 'SALTY', color: '#c4d6d4' },
            { name: 'MEDICINAL', color: '#67b3a4' },
            { name: 'PETROLEUM', color: '#2f8ba8' },
            { name: 'SKUNKY', color: '#5a9aa6' },
            { name: 'RUBBER', color: '#1e2b45' },
          ],
        },
      ],
    },
    {
      name: 'ROASTED',
      color: '#8a6742',
      children: [
        { name: 'PIPE TOBACCO', color: '#5e4530' },
        { name: 'TOBACCO', color: '#6d573a' },
        {
          name: 'BURNT',
          color: '#5c4a33',
          children: [
            { name: 'ACRID', color: '#71624e' },
            { name: 'ASHY', color: '#8f887a' },
            { name: 'SMOKY', color: '#42372c' },
            { name: 'BROWN, ROAST', color: '#a5784a' },
          ],
        },
        {
          name: 'CEREAL',
          color: '#c79c3f',
          children: [
            { name: 'GRAIN', color: '#bfa05a' },
            { name: 'MALT', color: '#d9a13a' },
          ],
        },
      ],
    },
    {
      name: 'SPICES',
      color: '#86335e',
      children: [
        { name: 'PEPPER', color: '#801c2b' },
        { name: 'PUNGENT', color: '#63275a' },
        {
          name: 'BROWN SPICE',
          color: '#a35a1e',
          children: [
            { name: 'ANISE', color: '#ddbd55' },
            { name: 'NUTMEG', color: '#84323a' },
            { name: 'CINNAMON', color: '#c97e2f' },
            { name: 'CLOVE', color: '#6e3a26' },
          ],
        },
      ],
    },
    {
      name: 'NUTTY',
      color: '#7a4a21',
      children: [
        {
          name: 'NUTTY',
          color: '#a8763e',
          children: [
            { name: 'PEANUTS', color: '#d3b568' },
            { name: 'HAZELNUT', color: '#cf9d79' },
            { name: 'ALMOND', color: '#d8b49a' },
          ],
        },
        {
          name: 'COCOA',
          color: '#4e2f1a',
          children: [
            { name: 'CHOCOLATE', color: '#6b4226' },
            { name: 'DARK CHOCOLATE', color: '#3a2415' },
          ],
        },
      ],
    },
    {
      name: 'SWEET',
      color: '#e0879f',
      children: [
        {
          name: 'BROWN SUGAR',
          color: '#b05c74',
          children: [
            { name: 'MOLASSES', color: '#3f2a17' },
            { name: 'MAPLE SYRUP', color: '#c2762e' },
            { name: 'CARAMELIZED', color: '#d98f2b' },
            { name: 'HONEY', color: '#e6a91d' },
          ],
        },
        { name: 'VANILLA', color: '#f1e3c2' },
        { name: 'VANILLIN', color: '#e0c49a' },
        { name: 'OVERALL SWEET', color: '#e98aa8' },
        { name: 'SWEET AROMATICS', color: '#dc6f98' },
      ],
    },
  ],
};
