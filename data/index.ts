interface Beer {
  name: string;
  alcool: number | null;
  url: string;
}

export interface Brewery {
  name: string;
  description: Array<string>;
  website: string;
  beers: Array<Beer>;
  // address: string;
}

export const BREWERIES: Array<Brewery> = [
  {
    name: 'BAPBAP',
    description: [
      `Du concassage des grains jusqu’à l’embouteillage, tout est réalisé localement dans notre brasserie parisienne artisanale du 11ème arrondissement. Idéalement située à quelques encablures de la Place de la République, la brasserie est un lieu très atypique de 1800m2 abrité par une structure métallique du début du XXème siècle type Eiffel.`,
      `Plus de 6 mois de travaux ont été nécessaires pour transformer cet ancien entrepôt d’accessoires textiles en fabrique de bières artisanales.`,
      `Aujourd’hui, la brasserie accueille notre outil de production, un espace de coworking et une salle de dégustation. La prochaine fois que vous êtes à proximité de République, Bastille ou du Père-Lachaise, passez nous voir dans notre brasserie parisienne !`
    ],
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
    description: [
      `Notre laboratoire c'est une cuve de brassage de 30 litres, de multiples fermeteurs, une cave électrique pour controler la fermentation de nos bières; le tout situé au coeur du quartier des Batignolles à Paris. Nous expérimentons chaque semaine.`,
      `Afin de vous faire découvrir nos créations, nous brassons en suite nos recettes dans les cuves de brasseries partenaires en France. C'est ça le brassage "gypsie". Nous installons enfin notre brasserie cette année 2018.`
    ],
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
    description: [
      `Installée à Bobigny, au 1 rue de Paris à 30 mètres du métro Bobigny-Pantin Raymond Queneau et au bord du canal de l’Ourcq, notre brasserie se situe sans doute dans la région la plus dynamique du nouveau Grand Paris.`,
      `Brassées à l’origine dans la petite ville d’Eschwege en Allemagne, les bières Demory-Paris ont investit cette « nouvelle » maison en janvier 2016. Depuis, notre Maître Brasseur Julien Perrod et son équipe ont installé notre nouveau système de brassage du type Braukon, pleins de nouveaux fermenteurs et ils n’ont pas arrêté de créer des nouvelles recettes de bière.`,
      `Notre ambition de devenir la première grande brasserie de Paris depuis 50 ans prend enfin forme et nous avons encore des idées plein la tête !`,
      `Nous aimons Paris et nous vivons notre passion, la bière.`
    ],
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
    description: [
      `Depuis quelques années les brasseries artisanales entreprennent avec succès de redorer le blason de la bière à travers la France. A Paris, l’implantation est plus difficile qu’en région, mais quelques irréductibles tentent l’aventure. Pour l’équipe de la Brasserie de l’Être, s’implanter à Paris relève autant d’un amour profond pour la ville que du désir de ressusciter les tissus industriels et conviviaux de la capitale.`,
      `Le produit que nous vous proposons est une bière consciente, respectueuse de vos palais et de l’environnement. Symbole de la qualité culinaire locale, reflet de la qualité de vie issue de son terroir, et fierté pour les habitants de celui-ci.`
    ],
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
    description: [
      `La Brasserie La Baleine est une micro-brasserie proposant des bières artisanales brassées de façon traditionnelle (à la main), ce qui permet de vous offrir des produits authentiques, vivants et naturels. Les bières qui y sont fabriquées ont ce goût caractéristique des pur malt. Les houblons, les levures, les plantes aromatiques et les épices sont sélectionnés afin d’obtenir des produits de qualité et des recettes uniques.`
    ],
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
    description: [
      `Vous savez, nous ne croyons pas qu’il y ait de bonnes ou de mauvaises brasseries, si nous devions résumer la situation c’est surtout des rencontres, des banques qui nous ont tendu la main. Et c’est assez curieux de se dire que les hasards, les rencontres forgent une destinée… Parce que quand on a le goût de la chose bien faite, parfois on ne trouve pas le beer-geek en face, je dirais, le miroir qui vous aide à avancer.`
    ],
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
    description: [
      `Pour nous, c’est en 2009 que l’aventure commence. À l’époque, on a envie de monter notre boîte alors on reprend Gallia, une ancienne brasserie parisienne abandonnée. Notre ambition : redonner leur bière aux parisiens, rien que ça !`
    ],
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
    description: [
      `Créée en 2012, la brasserie de la goutte d’or fait figure de pionnière du mouvement craft à Paris. Localisés au coeur du quartier cosmopolite de la goutte d’or, nos influences viennent de ce quartier populaire du 18e dans lequel nous sommes installés ainsi que des scènes internationales actives au sein du renouveau brassicole.`,
      `Inspirées par l’idée d’une culture transmise par les gouts, les saveurs et le métissage, nos bières sont artisanales, épicées, houblonnées ou collaboratives.`,
      `Découvrez notre tap room tous les jeudis, vendredis et samedis soirs et dégustez nos bières ou celles de nos invités accompagnées d’un de nos délicieux tapas maison.`
    ],
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
    description: [
      `Créée en 2014, La Montreuilloise est une microbrasserie dédiée à la fabrication de bières.
    La Montreuilloise, c’est aussi un engagement local et une démarche militante pour une bière artisanale et respectueuse de l’environnement !`
    ],
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
    description: [
      `Née à Paris en 2014, et aujourd’hui située à Porte de la Villette (Pantin) dans une ancienne usine des années 30, La Parisienne met toute sa passion et son obsession de l’excellence pour créer des bières de dégustation originales, brassées à partir d’ingrédients de qualité qui mettent en valeur le terroir d’Ile-de-France.`,
      `La Parisienne est une bière artisanale non filtrée et non pasteurisée. La présence de lie dans la bouteille apporte à la bière complexité et structure.`,
      `Tous les ingrédients sont sélectionnés avec le plus grand soin. Depuis l’été 2018, La Parisienne est équipée d’une salle de brassage de 40hl et d’une embouteilleuse de dernière génération.`
    ],
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
    description: [
      `Pendant 5 années d'apprentissage en mode nomade, nous avons décidé de nous lancer dans l'aventure, d'imaginer puis de bâtir notre propre brasserie dans cette zone géographique que l'on appelle le Grand Paris.    `
    ],
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
    description: [
      `Le Triangle est à la fois un restaurant et une microbrasserie.`,
      `Nous vous proposons une cuisine maison à base de produits frais, simple et raffinée, mettant en valeur la qualité des produits que nous travaillons. Et puisque nous aimons la convivialité, nos plats sont présentés sous forme d'assiettes à partager.`,
      `En parallèle, nous vous proposons 8 bières artisanales à la pression ( oui nous avons du vin aussi ). Ces bières de dégustation sont sélectionnées par notre brasseur ou produites sur place. En effet nous brassons nos propres bières en petites quantités, en s'inspirant des traditions européennes et des récentes innovations brassicoles nord-américaines.`
    ],
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
