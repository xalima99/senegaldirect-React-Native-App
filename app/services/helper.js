export const Allcategories = [
  {
    id: 5,
    name: 'vidéos',
  },
  {
    id: 7,
    name: 'People-Buzz',
  },
  {
    id: 15,
    name: 'A la une',
  },
  {
    id: 4,
    name: 'Foot',
  },
  {
    id: 24,
    name: 'Beauté',
  },
  {
    id: 2,
    name: 'Politique',
  },
  {
    id: 18,
    name: 'Faits-Divers',
  },
  {
    id: 13,
    name: 'Insolite',
  },
  {
    id: 20,
    name: 'Justice',
  },
  {
    id: 21,
    name: 'Lutte',
  },
  {
    id: 23,
    name: 'Revue',
  },
  {
    id: 6,
    name: 'Société',
  },
];

export const Menucategories = [
  {
    id: 5,
    name: 'vidéos',
  },
  {
    id: 7,
    name: 'People-Buzz',
  },
  {
    id: 15,
    name: 'A la une',
  },
  {
    id: 4,
    name: 'Foot',
  },
  {
    id: 24,
    name: 'Beauté',
  },
  {
    id: 2,
    name: 'Politique',
  },
  {
    id: 18,
    name: 'Faits-Divers',
  }
];

const categories = {
  15: 'A la une',
  2329: 'Actualités',
  24: 'Beauté',
  17: 'Economie',
  18: 'Faits-Divers',
  4: 'Foot',
  13: 'Insolite',
  20: 'Justice',
  21: 'Lutte',
  7: 'People-Buzz',
  2: 'Politique',
  23: 'Revue',
  6: 'Société',
  5:'vidéos'
}


export const getCategory = (id) => {
  if(categories[id]) return categories[id]
  return ('Général')
}
