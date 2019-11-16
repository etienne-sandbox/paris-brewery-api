interface Beer {
  name: string;
}

export interface Brewery {
  name: string;
  website: string;
  beers: Array<Beer>;
  // address: string;
  // description: string;
}

export const BREWERIES: Array<Brewery> = [
  {
    name: 'BAPBAP',
    website: 'https://www.bapbap.paris/',
    beers: [
      { name: 'ORIGINAL' },
      { name: 'BLANC BEC' },
      { name: 'VERTIGO' },
      { name: 'TOAST' },
      { name: 'POIDS PLUME' },
      { name: 'TRANSALPINE' },
      { name: 'МИРАБЕЛЬ' },
      { name: 'WEISSE CITY' },
      { name: 'TUTTI FRUTTI' },
      { name: 'SHIFUMI' }
    ]
  },
  {
    name: 'Société Parisienne de Bière',
    website: 'http://societeparisiennedebiere.fr/',
    beers: [{ name: 'Batignolle' }]
  },
  {
    name: 'Demory Paris',
    website: 'http://demoryparis.com/',
    beers: [
      { name: 'PARIS ALE' },
      { name: 'PARIS IPA' },
      { name: 'ROQUETTE BLANCHE' },
      { name: 'NOVA NOIRE' },
      { name: 'ALTITUDE' },
      { name: 'ASTROBLONDE' },
      { name: 'COSMOBLONDE' },
      { name: 'ATOMIQUE' },
      { name: 'SAINTE GENEVIÈVE' },
      { name: 'HÉROÏQUE DIPA' },
      { name: 'INTRÉPIDE IPA' },
      { name: 'PRODIGE IPA SANS ALCOOL' }
    ]
  },
  {
    name: `Brasserie de l'Être`,
    website: 'https://brasseriedeletre.paris/',
    beers: [
      { name: 'Sphinx' },
      { name: 'Salamandra' },
      { name: 'Oliphant' },
      { name: 'Cerberus' },
      { name: 'Feond' },
      { name: 'LoveCraft Beer' }
    ]
  },
  {
    name: 'Brasserie La Baleine',
    website: 'http://www.brasserie-la-baleine.com/',
    beers: [
      { name: 'La Lucite' },
      { name: 'La Gitane' },
      { name: 'La Picaro' },
      { name: `L'Arrache Coeur` },
      { name: `Fête l'Amour` },
      { name: 'La Phare' },
      { name: 'Volute' },
      { name: 'Cru 1910' },
      { name: 'Cru 1924' }
    ]
  },
  {
    name: 'Brasserie Parisis',
    website: 'http://brasserie-parisis.com/',
    beers: [
      { name: 'PARISIS BLONDE' },
      { name: 'PARISIS BLANCHE' },
      { name: 'PARISIS AMBRÉE' },
      { name: 'PSYCHOTIC PALE ALE' },
      { name: 'IPA SOUS SÉNART' },
      { name: 'IPARISIS' },
      { name: 'MORTAL KAWA' },
      { name: 'SMASH' },
      { name: 'HOP SAVE THE QUEEN' }
    ]
  },
  {
    name: 'Galia Paris',
    website: 'https://www.galliaparis.com/',
    beers: [
      { name: `Weissbier` },
      { name: `West IPA` },
      { name: `Corde Sensible BA` },
      { name: `Karea` },
      { name: `Le Champ Sauvage` },
      { name: `Lager` },
      { name: `Njut` },
      { name: `East IPA` },
      { name: `Carioca` },
      { name: `Red Star x Gallia` },
      { name: `Session IPA` },
      { name: `Brut IPA` }
    ]
  },
  {
    name: `Brasserie de la Goutte d'Or`,
    website: 'http://brasserielagouttedor.com/',
    beers: [
      { name: 'ALABAMA' },
      { name: 'LE ROI DES MOUCHES' },
      { name: 'MERINGUE' },
      { name: 'BLE D’INDE' },
      { name: 'CREAM' },
      { name: 'SUCCUBE' },
      { name: 'ERNESTINE' },
      { name: 'TRUAND' },
      { name: 'LA SOURCE' },
      { name: 'YASAMIN' },
      { name: 'SWEET GANESH' },
      { name: 'L’EDEN' },
      { name: 'CHÂTEAU ROUGE' },
      { name: 'LA CHAPELLE' },
      { name: 'L’ASSOMMOIR' },
      { name: 'HERBE BLEUE' },
      { name: 'PETITE PIGALLE' },
      { name: 'MYRHA' }
    ]
  },
  {
    name: 'La Montreuilloise',
    website: 'http://la-montreuilloise.com/',
    beers: [
      { name: 'Blonde Pale Ale' },
      { name: 'Rousse aux raisins fermentés' },
      { name: 'Brune Chocolate Stout' },
      { name: 'Blanche Witbier' },
      { name: 'Smoked Porter' },
      { name: 'IPA – Mandarina Bavaria' },
      { name: 'PEREGRINA London Ale' },
      { name: 'Fleur de Montreuil' },
      { name: 'La Grisette' },
      { name: 'Sociale#' },
      { name: 'Où les trouver' }
    ]
  },
  {
    name: 'La Parisienne',
    website: 'http://brasserielaparisienne.com/',
    beers: [
      { name: 'La Parisienne Blanche' },
      { name: 'La Parisienne Blonde' },
      { name: 'La Parisienne Rousse' },
      { name: 'La Parisienne Brune' },
      { name: 'La Parisienne Bio Blanche' },
      { name: 'La Parisienne Bio Blonde' },
      { name: 'La Parisienne Libérée' },
      { name: 'Le Titi Parisien' },
      { name: 'l’Apache 2.0' }
    ]
  },
  {
    name: 'Brasserie du Grand Paris',
    website: 'https://www.bgp.paris/18/accueil',
    beers: [
      { name: 'IPA CITRA GALACTIQUE' },
      { name: "À L'OUEST" },
      { name: 'NICE TO MEET YOU' },
      { name: 'DENISE' },
      { name: 'WAIMEA BAY' },
      { name: "L'EXPRESS" },
      { name: 'SMOKE ON THE WATER' },
      { name: 'PORTE DOREE' },
      { name: 'BEER DROP' }
    ]
  },
  {
    name: 'Le Triangle',
    website: 'http://www.triangleparis.com/',
    beers: [
      { name: `Simone ` },
      { name: `Gryesette ` },
      { name: `Brumaire et Frimaire` },
      { name: `Beetle Juice` },
      { name: `Ocean Bey ` },
      { name: `Hazy Diamond` },
      { name: `Saison Mistral ` },
      { name: `Overexposed ` }
    ]
  }
];
