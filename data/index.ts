interface Beer {
  name: string;
  alcool: number | null;
  url: string;
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
      {
        name: 'ORIGINAL',
        alcool: 5.8,
        url: 'https://www.bapbap.paris/bieres-artisanales-parisiennes-bapbap/'
      },
      {
        name: 'BLANC BEC',
        alcool: 4.5,
        url: 'https://www.bapbap.paris/bieres-artisanales-parisiennes-bapbap/'
      },
      {
        name: 'VERTIGO',
        alcool: 6,
        url: 'https://www.bapbap.paris/bieres-artisanales-parisiennes-bapbap/'
      },
      {
        name: 'TOAST',
        alcool: 4.5,
        url: 'https://www.bapbap.paris/bieres-artisanales-parisiennes-bapbap/'
      },
      {
        name: 'POIDS PLUME',
        alcool: 3,
        url: 'https://www.bapbap.paris/bieres-artisanales-parisiennes-bapbap/'
      },
      {
        name: 'TRANSALPINE',
        alcool: 6.8,
        url: 'https://www.bapbap.paris/bieres-artisanales-parisiennes-bapbap/'
      },
      {
        name: 'МИРАБЕЛЬ',
        alcool: 4.3,
        url: 'https://www.bapbap.paris/bieres-artisanales-parisiennes-bapbap/'
      },
      {
        name: 'WEISSE CITY',
        alcool: 4.5,
        url: 'https://www.bapbap.paris/bieres-artisanales-parisiennes-bapbap/'
      },
      {
        name: 'TUTTI FRUTTI',
        alcool: 5.2,
        url: 'https://www.bapbap.paris/bieres-artisanales-parisiennes-bapbap/'
      },
      {
        name: 'SHIFUMI',
        alcool: 5.3,
        url: 'https://www.bapbap.paris/bieres-artisanales-parisiennes-bapbap/'
      }
    ]
  },
  {
    name: 'Société Parisienne de Bière',
    website: 'http://societeparisiennedebiere.fr/',
    beers: [
      {
        name: 'Batignolle',
        alcool: 5.4,
        url: 'http://societeparisiennedebiere.fr/nos-creations.html'
      }
    ]
  },
  {
    name: 'Demory Paris',
    website: 'http://demoryparis.com/',
    beers: [
      {
        name: 'PARIS ALE',
        alcool: 4.7,
        url: 'http://demoryparis.com/paris-ale-blonde-ale/'
      },
      {
        name: 'PARIS IPA',
        alcool: 5.5,
        url: 'http://demoryparis.com/paris-ipa/'
      },
      {
        name: 'ROQUETTE BLANCHE',
        alcool: 5.7,
        url: 'http://demoryparis.com/roquette-blanche-57/'
      },
      {
        name: 'ASTROBLONDE',
        alcool: 4.8,
        url: 'http://demoryparis.com/astroblonde-48/'
      },
      {
        name: 'ALTITUDE',
        alcool: 4.7,
        url: 'http://demoryparis.com/altitude-altbier/'
      },
      {
        name: 'NOVA NOIRE',
        alcool: 4.7,
        url: 'http://demoryparis.com/nova-noire-47/'
      },
      {
        name: 'COSMOBLONDE',
        alcool: 4.7,
        url: 'http://demoryparis.com/cosmoblonde-47/'
      },
      {
        name: 'ATOMIQUE',
        alcool: 6.5,
        url: 'http://demoryparis.com/atomique-65/'
      },
      {
        name: 'SAINTE GENEVIÈVE',
        alcool: 7.8,
        url: 'http://demoryparis.com/sainte-genevieve-triple/'
      },
      {
        name: 'PRODIGE IPA SANS ALCOOL',
        alcool: 0.9,
        url: 'http://demoryparis.com/prodige-ipa-sans-alcool/'
      },
      {
        name: 'INTRÉPIDE IPA',
        alcool: 6.3,
        url: 'http://demoryparis.com/intrepide-ipa-63/'
      },
      {
        name: 'HÉROÏQUE DIPA',
        alcool: 8,
        url: 'http://demoryparis.com/heroique-dipa/'
      }
    ]
  },
  {
    name: `Brasserie de l'Être`,
    website: 'https://brasseriedeletre.paris/',
    beers: [
      { name: 'Sphinx', alcool: 4.5, url: 'https://brasseriedeletre.paris/' },
      {
        name: 'Salamandra',
        alcool: 6.5,
        url: 'https://brasseriedeletre.paris/'
      },
      { name: 'Oliphant', alcool: 6.5, url: 'https://brasseriedeletre.paris/' },
      { name: 'Cerberus', alcool: 7.5, url: 'https://brasseriedeletre.paris/' },
      { name: 'Feond', alcool: 8.5, url: 'https://brasseriedeletre.paris/' }
    ]
  },
  {
    name: 'Brasserie La Baleine',
    website: 'http://www.brasserie-la-baleine.com/',
    beers: [
      {
        name: 'La Lucite',
        alcool: 4.2,
        url: 'http://www.brasserie-la-baleine.com/'
      },
      {
        name: 'La Gitane',
        alcool: 5,
        url: 'http://www.brasserie-la-baleine.com/'
      },
      {
        name: 'La Picaro',
        alcool: 5,
        url: 'http://www.brasserie-la-baleine.com/'
      },
      {
        name: `L'Arrache Coeur`,
        alcool: 5,
        url: 'http://www.brasserie-la-baleine.com/'
      },
      {
        name: `Fête l'Amour`,
        alcool: 4.2,
        url: 'http://www.brasserie-la-baleine.com/'
      },
      {
        name: 'La Phare',
        alcool: 5,
        url: 'http://www.brasserie-la-baleine.com/'
      },
      {
        name: 'Volute',
        alcool: 5,
        url: 'http://www.brasserie-la-baleine.com/'
      },
      {
        name: 'Cru 1910',
        alcool: 5,
        url: 'http://www.brasserie-la-baleine.com/'
      },
      {
        name: 'Cru 1924',
        alcool: 5,
        url: 'http://www.brasserie-la-baleine.com/'
      }
    ]
  },
  {
    name: 'Brasserie Parisis',
    website: 'http://brasserie-parisis.com/',
    beers: [
      {
        name: 'PARISIS BLONDE',
        alcool: 6.5,
        url: 'http://brasserie-parisis.com/les-classiques/'
      },
      {
        name: 'PARISIS BLANCHE',
        alcool: 4.1,
        url: 'http://brasserie-parisis.com/les-classiques/'
      },
      {
        name: 'PARISIS AMBRÉE',
        alcool: 6.2,
        url: 'http://brasserie-parisis.com/les-classiques/'
      },
      {
        name: 'PSYCHOTIC PALE ALE',
        alcool: 5,
        url: 'http://brasserie-parisis.com/les-classiques/'
      },
      {
        name: 'IPA SOUS SÉNART',
        alcool: 7.6,
        url: 'http://brasserie-parisis.com/les-speciales/'
      },
      {
        name: 'IPARISIS',
        alcool: 6.2,
        url: 'http://brasserie-parisis.com/les-speciales/'
      },
      {
        name: 'MORTAL KAWA',
        alcool: 9.5,
        url: 'http://brasserie-parisis.com/les-speciales/'
      },
      {
        name: 'SMASH',
        alcool: 5,
        url: 'http://brasserie-parisis.com/les-speciales/'
      },
      {
        name: 'HOP SAVE THE QUEEN',
        alcool: 5.6,
        url: 'http://brasserie-parisis.com/les-speciales/'
      }
    ]
  },
  {
    name: 'Galia Paris',
    website: 'https://www.galliaparis.com/',
    beers: [
      {
        name: `Weissbier`,
        alcool: 5.2,
        url: 'https://www.galliaparis.com/bieres/weissbier'
      },
      {
        name: `West IPA`,
        alcool: 6,
        url: 'https://www.galliaparis.com/bieres/west-ipa'
      },
      {
        name: `Corde Sensible BA`,
        alcool: 13.2,
        url: 'https://www.galliaparis.com/bieres/corde-sensible-ba'
      },
      {
        name: `Karea`,
        alcool: 4.4,
        url: 'https://www.galliaparis.com/bieres/karea'
      },
      {
        name: `Le Champ Sauvage`,
        alcool: 5,
        url: 'https://www.galliaparis.com/bieres/le-champ-sauvage'
      },
      {
        name: `Lager`,
        alcool: 5.5,
        url: 'https://www.galliaparis.com/bieres/lager'
      },
      {
        name: `Njut`,
        alcool: 4,
        url: 'https://www.galliaparis.com/bieres/njut'
      },
      {
        name: `East IPA`,
        alcool: 6,
        url: 'https://www.galliaparis.com/bieres/east-ipa'
      },
      {
        name: `Carioca`,
        alcool: 4.5,
        url: 'https://www.galliaparis.com/bieres/carioca'
      },
      {
        name: `Red Star x Gallia`,
        alcool: 5.6,
        url: 'https://www.galliaparis.com/bieres/red-star-x-gallia'
      },
      {
        name: `Session IPA`,
        alcool: 4.3,
        url: 'https://www.galliaparis.com/bieres/session-ipa'
      },
      {
        name: `Brut IPA`,
        alcool: 7,
        url: 'https://www.galliaparis.com/bieres/brut-ipa'
      }
    ]
  },
  {
    name: `Brasserie de la Goutte d'Or`,
    website: 'http://brasserielagouttedor.com/',
    beers: [
      {
        name: 'ALABAMA',
        alcool: 3.1,
        url: 'http://brasserielagouttedor.com/bieres/alabama/'
      },
      {
        name: 'LE ROI DES MOUCHES',
        alcool: null,
        url: 'http://brasserielagouttedor.com/bieres/le-roi-des-mouches/'
      },
      {
        name: 'MERINGUE',
        alcool: null,
        url: 'http://brasserielagouttedor.com/bieres/meringue/'
      },
      {
        name: 'BLE D’INDE',
        alcool: null,
        url: 'http://brasserielagouttedor.com/bieres/ble-dinde/'
      },
      {
        name: 'CREAM',
        alcool: null,
        url: 'http://brasserielagouttedor.com/bieres/cream/'
      },
      {
        name: 'SUCCUBE',
        alcool: null,
        url: 'http://brasserielagouttedor.com/bieres/succube/'
      },
      {
        name: 'ERNESTINE',
        alcool: null,
        url: 'http://brasserielagouttedor.com/bieres/ernestine/'
      },
      {
        name: 'TRUAND',
        alcool: null,
        url: 'http://brasserielagouttedor.com/bieres/truand/'
      },
      {
        name: 'LA SOURCE',
        alcool: null,
        url: 'http://brasserielagouttedor.com/bieres/la-source/'
      },
      {
        name: 'YASAMIN',
        alcool: null,
        url: 'http://brasserielagouttedor.com/bieres/yasamin/'
      },
      {
        name: 'SWEET GANESH',
        alcool: null,
        url: 'http://brasserielagouttedor.com/bieres/sweet-ganesh/'
      },
      {
        name: 'L’EDEN',
        alcool: null,
        url: 'http://brasserielagouttedor.com/bieres/leden/'
      },
      {
        name: 'CHÂTEAU ROUGE',
        alcool: null,
        url: 'http://brasserielagouttedor.com/bieres/chateau-rouge/'
      },
      {
        name: 'LA CHAPELLE',
        alcool: null,
        url: 'http://brasserielagouttedor.com/bieres/la-chapelle/'
      },
      {
        name: 'L’ASSOMMOIR',
        alcool: null,
        url: 'http://brasserielagouttedor.com/bieres/lassommoir/'
      },
      {
        name: 'HERBE BLEUE',
        alcool: null,
        url: 'http://brasserielagouttedor.com/bieres/herbe-bleue/'
      },
      {
        name: 'PETITE PIGALLE',
        alcool: null,
        url: 'http://brasserielagouttedor.com/bieres/petite-pigalle/'
      },
      {
        name: 'MYRHA',
        alcool: null,
        url: 'http://brasserielagouttedor.com/bieres/myrha-pale-ale/'
      }
    ]
  },
  {
    name: 'La Montreuilloise',
    website: 'http://la-montreuilloise.com/',
    beers: [
      {
        name: 'Blonde Pale Ale',
        alcool: 4.4,
        url: 'http://la-montreuilloise.com/bieres/la-blonde/'
      },
      {
        name: 'Rousse aux raisins fermentés',
        alcool: 5,
        url: 'http://la-montreuilloise.com/bieres/la-rousse/'
      },
      {
        name: 'Brune Chocolate Stout',
        alcool: 4.8,
        url: 'http://la-montreuilloise.com/bieres/la-brune/'
      },
      {
        name: 'Blanche Witbier',
        alcool: 4.7,
        url: 'http://la-montreuilloise.com/bieres/la-blanche/'
      },
      {
        name: 'Smoked Porter',
        alcool: 5.2,
        url: 'http://la-montreuilloise.com/bieres/smoked-porter/'
      },
      {
        name: 'IPA – Mandarina Bavaria',
        alcool: 4.2,
        url:
          'http://la-montreuilloise.com/bieres/ipa-single-hop-mandarina-bavaria/'
      },
      {
        name: 'PEREGRINA London Ale',
        alcool: 4.5,
        url: 'http://la-montreuilloise.com/bieres/peregrina-london-ale/'
      },
      {
        name: 'Fleur de Montreuil',
        alcool: 5,
        url: 'http://la-montreuilloise.com/bieres/les-speciales/'
      },
      {
        name: 'La Grisette',
        alcool: 3.8,
        url: 'http://la-montreuilloise.com/bieres/la-grisette/'
      }
    ]
  },
  {
    name: 'La Parisienne',
    website: 'http://brasserielaparisienne.com/',
    beers: [
      {
        name: 'La Parisienne Blanche',
        alcool: 5.5,
        url:
          'http://brasserielaparisienne.com/biere-artisanale-parisienne-classique-blanche/'
      },
      {
        name: 'La Parisienne Blonde',
        alcool: 5.5,
        url:
          'http://brasserielaparisienne.com/biere-artisanale-parisienne-classique-blonde/'
      },
      {
        name: 'La Parisienne Rousse',
        alcool: 5.5,
        url:
          'http://brasserielaparisienne.com/biere-artisanale-parisienne-classique-rousse/'
      },
      {
        name: 'La Parisienne Brune',
        alcool: 5.5,
        url:
          'http://brasserielaparisienne.com/biere-artisanale-parisienne-classique-brune/'
      },
      {
        name: 'La Parisienne Bio Blanche',
        alcool: 5.5,
        url:
          'http://brasserielaparisienne.com/biere-artisanale-parisienne-bio-blanche/'
      },
      {
        name: 'La Parisienne Bio Blonde',
        alcool: 5.5,
        url:
          'http://brasserielaparisienne.com/biere-artisanale-parisienne-bio-blonde/'
      },
      {
        name: 'La Parisienne Libérée',
        alcool: 5.5,
        url:
          'http://brasserielaparisienne.com/biere-artisanale-parisienne-speciale-parisienne-liberee-lager/'
      },
      {
        name: 'Le Titi Parisien',
        alcool: 5.5,
        url:
          'http://brasserielaparisienne.com/biere-artisanale-parisienne-speciale-titi-parisien-ipa/'
      },
      {
        name: 'l’Apache 2.0',
        alcool: 7.5,
        url:
          'http://brasserielaparisienne.com/biere-artisanale-parisienne-speciale-apache-stout/'
      }
    ]
  },
  {
    name: 'Brasserie du Grand Paris',
    website: 'https://www.bgp.paris/18/accueil',
    beers: [
      {
        name: 'IPA CITRA GALACTIQUE',
        alcool: 6.5,
        url: 'https://www.bgp.paris/7/nos-bieres'
      },
      {
        name: "À L'OUEST",
        alcool: 4.7,
        url: 'https://www.bgp.paris/7/nos-bieres'
      },
      {
        name: 'NICE TO MEET YOU',
        alcool: 8.5,
        url: 'https://www.bgp.paris/7/nos-bieres'
      },
      {
        name: 'DENISE',
        alcool: 5.5,
        url: 'https://www.bgp.paris/7/nos-bieres'
      },
      {
        name: 'WAIMEA BAY',
        alcool: 4.7,
        url: 'https://www.bgp.paris/7/nos-bieres'
      },
      {
        name: "L'EXPRESS",
        alcool: 4.5,
        url: 'https://www.bgp.paris/7/nos-bieres'
      },
      {
        name: 'SMOKE ON THE WATER',
        alcool: 6,
        url: 'https://www.bgp.paris/7/nos-bieres'
      },
      {
        name: 'PORTE DOREE',
        alcool: 5.2,
        url: 'https://www.bgp.paris/7/nos-bieres'
      }
    ]
  },
  {
    name: 'Le Triangle',
    website: 'http://www.triangleparis.com/',
    beers: [
      {
        name: `Simone `,
        alcool: 5.4,
        url: 'http://www.triangleparis.com/#bieres'
      },
      {
        name: `Gryesette `,
        alcool: 5.7,
        url: 'http://www.triangleparis.com/#bieres'
      },
      {
        name: `Brumaire et Frimaire`,
        alcool: 5.3,
        url: 'http://www.triangleparis.com/#bieres'
      },
      {
        name: `Beetle Juice`,
        alcool: 8,
        url: 'http://www.triangleparis.com/#bieres'
      },
      {
        name: `Ocean Bey `,
        alcool: 3.6,
        url: 'http://www.triangleparis.com/#bieres'
      },
      {
        name: `Hazy Diamond`,
        alcool: 5,
        url: 'http://www.triangleparis.com/#bieres'
      },
      {
        name: `Saison Mistral `,
        alcool: 5,
        url: 'http://www.triangleparis.com/#bieres'
      },
      {
        name: `Overexposed `,
        alcool: 5.5,
        url: 'http://www.triangleparis.com/#bieres'
      }
    ]
  }
];
