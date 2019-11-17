import { Brewery } from './types';

export const BREWERIES: Array<Brewery> = [
  {
    id: 'tm07qr1',
    name: 'BAPBAP',
    description: [
      'Du concassage des grains jusqu’à l’embouteillage, tout est réalisé localement dans notre brasserie parisienne artisanale du 11ème arrondissement. Idéalement située à quelques encablures de la Place de la République, la brasserie est un lieu très atypique de 1800m2 abrité par une structure métallique du début du XXème siècle type Eiffel.',
      'Plus de 6 mois de travaux ont été nécessaires pour transformer cet ancien entrepôt d’accessoires textiles en fabrique de bières artisanales.',
      'Aujourd’hui, la brasserie accueille notre outil de production, un espace de coworking et une salle de dégustation. La prochaine fois que vous êtes à proximité de République, Bastille ou du Père-Lachaise, passez nous voir dans notre brasserie parisienne !'
    ],
    website: 'https://www.bapbap.paris/',
    beers: [
      { id: 'tn17qu3', name: 'ORIGINALE' },
      { id: 'tn27qcj', name: 'BLANC BEC' },
      { id: 'tn37qoz', name: 'VERTIGO' },
      { id: 'tn47qg6', name: 'TOAST' },
      { id: 'tn57qld', name: 'POIDS PLUME' },
      { id: 'tn67q96', name: 'TRANSALPINE' },
      { id: 'tn77qwi', name: 'МИРАБЕЛЬ' },
      { id: 'tn87qfs', name: 'WEISSE CITY' },
      { id: 'tn97qwa', name: 'TUTTI FRUTTI' },
      { id: 'tna7qnu', name: 'SHIFUMI' }
    ]
  },
  {
    id: 'tnb7qn4',
    name: 'Société Parisienne de Bière',
    description: [
      "Notre laboratoire c'est une cuve de brassage de 30 litres, de multiples fermeteurs, une cave électrique pour controler la fermentation de nos bières; le tout situé au coeur du quartier des Batignolles à Paris. Nous expérimentons chaque semaine.",
      'Afin de vous faire découvrir nos créations, nous brassons en suite nos recettes dans les cuves de brasseries partenaires en France. C\'est ça le brassage "gypsie". Nous installons enfin notre brasserie cette année 2018.'
    ],
    website: 'http://societeparisiennedebiere.fr/',
    beers: [{ id: 'tnc7qsx', name: 'Batignolle' }]
  },
  {
    id: 'tnd7q91',
    name: 'Demory Paris',
    description: [
      'Installée à Bobigny, au 1 rue de Paris à 30 mètres du métro Bobigny-Pantin Raymond Queneau et au bord du canal de l’Ourcq, notre brasserie se situe sans doute dans la région la plus dynamique du nouveau Grand Paris.',
      'Brassées à l’origine dans la petite ville d’Eschwege en Allemagne, les bières Demory-Paris ont investit cette « nouvelle » maison en janvier 2016. Depuis, notre Maître Brasseur Julien Perrod et son équipe ont installé notre nouveau système de brassage du type Braukon, pleins de nouveaux fermenteurs et ils n’ont pas arrêté de créer des nouvelles recettes de bière.',
      'Notre ambition de devenir la première grande brasserie de Paris depuis 50 ans prend enfin forme et nous avons encore des idées plein la tête !',
      'Nous aimons Paris et nous vivons notre passion, la bière.'
    ],
    website: 'http://demoryparis.com/',
    beers: [
      { id: 'tne7q2f', name: 'PARIS ALE' },
      { id: 'tnf7qou', name: 'PARIS IPA' },
      { id: 'tng7qx2', name: 'ROQUETTE BLANCHE' },
      { id: 'tnh7qza', name: 'ASTROBLONDE' },
      { id: 'tni7qe6', name: 'ALTITUDE' },
      { id: 'tnj7qs1', name: 'NOVA NOIRE' },
      { id: 'tnk7qio', name: 'COSMOBLONDE' },
      { id: 'tnl7qjp', name: 'ATOMIQUE' },
      { id: 'tnm7q3f', name: 'SAINTE GENEVIÈVE' },
      { id: 'tnn7qlm', name: 'PRODIGE IPA SANS ALCOOL' },
      { id: 'tno7qx4', name: 'INTRÉPIDE IPA' },
      { id: 'tnp7qy6', name: 'HÉROÏQUE DIPA' }
    ]
  },
  {
    id: 'tnq7qmw',
    name: "Brasserie de l'Être",
    description: [
      'Depuis quelques années les brasseries artisanales entreprennent avec succès de redorer le blason de la bière à travers la France. A Paris, l’implantation est plus difficile qu’en région, mais quelques irréductibles tentent l’aventure. Pour l’équipe de la Brasserie de l’Être, s’implanter à Paris relève autant d’un amour profond pour la ville que du désir de ressusciter les tissus industriels et conviviaux de la capitale.',
      'Le produit que nous vous proposons est une bière consciente, respectueuse de vos palais et de l’environnement. Symbole de la qualité culinaire locale, reflet de la qualité de vie issue de son terroir, et fierté pour les habitants de celui-ci.'
    ],
    website: 'https://brasseriedeletre.paris/',
    beers: [
      { id: 'tnr7q38', name: 'Sphinx' },
      { id: 'tns7qdn', name: 'Salamandra' },
      { id: 'tnt7qnu', name: 'Oliphant' },
      { id: 'tnu7qu7', name: 'Cerberus' },
      { id: 'tnv7qrq', name: 'Feond' }
    ]
  },
  {
    id: 'tnw7qi7',
    name: 'Brasserie La Baleine',
    description: [
      'La Brasserie La Baleine est une micro-brasserie proposant des bières artisanales brassées de façon traditionnelle (à la main), ce qui permet de vous offrir des produits authentiques, vivants et naturels. Les bières qui y sont fabriquées ont ce goût caractéristique des pur malt. Les houblons, les levures, les plantes aromatiques et les épices sont sélectionnés afin d’obtenir des produits de qualité et des recettes uniques.'
    ],
    website: 'http://www.brasserie-la-baleine.com/',
    beers: [
      { id: 'tnx7qmv', name: 'La Lucite' },
      { id: 'tny7qxt', name: 'La Gitane' },
      { id: 'tnz7q5p', name: 'La Picaro' },
      { id: 'tn107qme', name: "L'Arrache Coeur" },
      { id: 'tn117qr0', name: "Fête l'Amour" },
      { id: 'tn127q45', name: 'La Phare' },
      { id: 'tn137qox', name: 'Volute' },
      { id: 'tn147qxz', name: 'Cru 1910' },
      { id: 'tn157ql0', name: 'Cru 1924' }
    ]
  },
  {
    id: 'tn167qno',
    name: 'Brasserie Parisis',
    description: [
      'Vous savez, nous ne croyons pas qu’il y ait de bonnes ou de mauvaises brasseries, si nous devions résumer la situation c’est surtout des rencontres, des banques qui nous ont tendu la main. Et c’est assez curieux de se dire que les hasards, les rencontres forgent une destinée… Parce que quand on a le goût de la chose bien faite, parfois on ne trouve pas le beer-geek en face, je dirais, le miroir qui vous aide à avancer.'
    ],
    website: 'http://brasserie-parisis.com/',
    beers: [
      { id: 'tn177qeb', name: 'PARISIS BLONDE' },
      { id: 'tn187q5b', name: 'PARISIS BLANCHE' },
      { id: 'tn197qt9', name: 'PARISIS AMBRÉE' },
      { id: 'tn1a7qlu', name: 'PSYCHOTIC PALE ALE' },
      { id: 'tn1b7q92', name: 'IPA SOUS SÉNART' },
      { id: 'tn1c7qjn', name: 'IPARISIS' },
      { id: 'tn1d7qox', name: 'MORTAL KAWA' },
      { id: 'tn1e7q7b', name: 'SMASH' },
      { id: 'tn1f7qes', name: 'HOP SAVE THE QUEEN' }
    ]
  },
  {
    id: 'tn1g7qgu',
    name: 'Galia Paris',
    description: [
      'Pour nous, c’est en 2009 que l’aventure commence. À l’époque, on a envie de monter notre boîte alors on reprend Gallia, une ancienne brasserie parisienne abandonnée. Notre ambition : redonner leur bière aux parisiens, rien que ça !'
    ],
    website: 'https://www.galliaparis.com/',
    beers: [
      { id: 'tn1h7qi2', name: 'Weissbier' },
      { id: 'tn1i7qhi', name: 'West IPA' },
      { id: 'tn1j7qtr', name: 'Corde Sensible BA' },
      { id: 'tn1k7qub', name: 'Karea' },
      { id: 'tn1l7qyo', name: 'Le Champ Sauvage' },
      { id: 'tn1m7qsr', name: 'Lager' },
      { id: 'to1n7qny', name: 'Njut' },
      { id: 'to1o7qcw', name: 'East IPA' },
      { id: 'to1p7q8r', name: 'Carioca' },
      { id: 'to1q7qoi', name: 'Red Star x Gallia' },
      { id: 'to1r7q4g', name: 'Session IPA' },
      { id: 'to1s7q48', name: 'Brut IPA' }
    ]
  },
  {
    id: 'to1t7qyb',
    name: "Brasserie de la Goutte d'Or",
    description: [
      'Créée en 2012, la brasserie de la goutte d’or fait figure de pionnière du mouvement craft à Paris. Localisés au coeur du quartier cosmopolite de la goutte d’or, nos influences viennent de ce quartier populaire du 18e dans lequel nous sommes installés ainsi que des scènes internationales actives au sein du renouveau brassicole.',
      'Inspirées par l’idée d’une culture transmise par les gouts, les saveurs et le métissage, nos bières sont artisanales, épicées, houblonnées ou collaboratives.',
      'Découvrez notre tap room tous les jeudis, vendredis et samedis soirs et dégustez nos bières ou celles de nos invités accompagnées d’un de nos délicieux tapas maison.'
    ],
    website: 'http://brasserielagouttedor.com/',
    beers: [
      { id: 'to1u7qia', name: 'ALABAMA' },
      { id: 'to1v7qei', name: 'LE ROI DES MOUCHES' },
      { id: 'to1w7qno', name: 'MERINGUE' },
      { id: 'to1x7qgx', name: 'BLE D’INDE' },
      { id: 'to1y7qem', name: 'CREAM' },
      { id: 'to1z7q92', name: 'SUCCUBE' },
      { id: 'to207q2g', name: 'ERNESTINE' },
      { id: 'to217qrq', name: 'TRUAND' },
      { id: 'to227qlk', name: 'LA SOURCE' },
      { id: 'to237qch', name: 'YASAMIN' },
      { id: 'to247qok', name: 'SWEET GANESH' },
      { id: 'to257qc7', name: 'L’EDEN' },
      { id: 'to267qmz', name: 'CHÂTEAU ROUGE' },
      { id: 'to277q9p', name: 'LA CHAPELLE' },
      { id: 'to287q3v', name: 'L’ASSOMMOIR' },
      { id: 'to297qzz', name: 'HERBE BLEUE' },
      { id: 'to2a7q2s', name: 'PETITE PIGALLE' },
      { id: 'to2b7qwb', name: 'MYRHA' }
    ]
  },
  {
    id: 'to2c7qwl',
    name: 'La Montreuilloise',
    description: [
      'Créée en 2014, La Montreuilloise est une microbrasserie dédiée à la fabrication de bières.\n    La Montreuilloise, c’est aussi un engagement local et une démarche militante pour une bière artisanale et respectueuse de l’environnement !'
    ],
    website: 'http://la-montreuilloise.com/',
    beers: [
      { id: 'to2d7qgj', name: 'Blonde Pale Ale' },
      { id: 'to2e7qne', name: 'Rousse aux raisins fermentés' },
      { id: 'to2f7qf6', name: 'Brune Chocolate Stout' },
      { id: 'to2g7qwt', name: 'Blanche Witbier' },
      { id: 'to2h7qav', name: 'Smoked Porter' },
      { id: 'to2i7qwk', name: 'IPA – Mandarina Bavaria' },
      { id: 'to2j7qmf', name: 'PEREGRINA London Ale' },
      { id: 'to2k7qqc', name: 'Fleur de Montreuil' },
      { id: 'to2l7qlo', name: 'La Grisette' }
    ]
  },
  {
    id: 'to2m7qnk',
    name: 'La Parisienne',
    description: [
      'Née à Paris en 2014, et aujourd’hui située à Porte de la Villette (Pantin) dans une ancienne usine des années 30, La Parisienne met toute sa passion et son obsession de l’excellence pour créer des bières de dégustation originales, brassées à partir d’ingrédients de qualité qui mettent en valeur le terroir d’Ile-de-France.',
      'La Parisienne est une bière artisanale non filtrée et non pasteurisée. La présence de lie dans la bouteille apporte à la bière complexité et structure.',
      'Tous les ingrédients sont sélectionnés avec le plus grand soin. Depuis l’été 2018, La Parisienne est équipée d’une salle de brassage de 40hl et d’une embouteilleuse de dernière génération.'
    ],
    website: 'http://brasserielaparisienne.com/',
    beers: [
      { id: 'to2n7q46', name: 'La Parisienne Blanche' },
      { id: 'to2o7qwf', name: 'La Parisienne Blonde' },
      { id: 'to2p7q3x', name: 'La Parisienne Rousse' },
      { id: 'to2q7q2w', name: 'La Parisienne Brune' },
      { id: 'to2r7qov', name: 'La Parisienne Bio Blanche' },
      { id: 'to2s7qeb', name: 'La Parisienne Bio Blonde' },
      { id: 'to2t7qxp', name: 'La Parisienne Libérée' },
      { id: 'to2u7qyq', name: 'Le Titi Parisien' },
      { id: 'to2v7qsn', name: 'l’Apache 2.0' }
    ]
  },
  {
    id: 'to2w7qay',
    name: 'Brasserie du Grand Paris',
    description: [
      "Pendant 5 années d'apprentissage en mode nomade, nous avons décidé de nous lancer dans l'aventure, d'imaginer puis de bâtir notre propre brasserie dans cette zone géographique que l'on appelle le Grand Paris.    "
    ],
    website: 'https://www.bgp.paris/18/accueil',
    beers: [
      { id: 'to2x7qkt', name: 'IPA CITRA GALACTIQUE' },
      { id: 'to2y7qsu', name: "À L'OUEST" },
      { id: 'to2z7q91', name: 'NICE TO MEET YOU' },
      { id: 'to307qki', name: 'DENISE' },
      { id: 'to317qsk', name: 'WAIMEA BAY' },
      { id: 'to327qfm', name: "L'EXPRESS" },
      { id: 'to337q0k', name: 'SMOKE ON THE WATER' },
      { id: 'to347qfa', name: 'PORTE DOREE' }
    ]
  },
  {
    id: 'to357qrw',
    name: 'Le Triangle',
    description: [
      'Le Triangle est à la fois un restaurant et une microbrasserie.',
      "Nous vous proposons une cuisine maison à base de produits frais, simple et raffinée, mettant en valeur la qualité des produits que nous travaillons. Et puisque nous aimons la convivialité, nos plats sont présentés sous forme d'assiettes à partager.",
      "En parallèle, nous vous proposons 8 bières artisanales à la pression ( oui nous avons du vin aussi ). Ces bières de dégustation sont sélectionnées par notre brasseur ou produites sur place. En effet nous brassons nos propres bières en petites quantités, en s'inspirant des traditions européennes et des récentes innovations brassicoles nord-américaines."
    ],
    website: 'http://www.triangleparis.com/',
    beers: [
      { id: 'to367qlg', name: 'Simone ' },
      { id: 'to377qzk', name: 'Gryesette ' }
    ]
  }
];
