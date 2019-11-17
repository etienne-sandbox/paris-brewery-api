import { Brewery } from './types';

export const BREWERIES: Array<Brewery> = [
  {
    id: 'sj0sqvv',
    name: 'BAPBAP',
    description: [
      'Du concassage des grains jusqu’à l’embouteillage, tout est réalisé localement dans notre brasserie parisienne artisanale du 11ème arrondissement. Idéalement située à quelques encablures de la Place de la République, la brasserie est un lieu très atypique de 1800m2 abrité par une structure métallique du début du XXème siècle type Eiffel.',
      'Plus de 6 mois de travaux ont été nécessaires pour transformer cet ancien entrepôt d’accessoires textiles en fabrique de bières artisanales.',
      'Aujourd’hui, la brasserie accueille notre outil de production, un espace de coworking et une salle de dégustation. La prochaine fois que vous êtes à proximité de République, Bastille ou du Père-Lachaise, passez nous voir dans notre brasserie parisienne !'
    ],
    website: 'https://www.bapbap.paris/',
    beers: [
      { id: 'sj1sq4l', name: 'ORIGINAL' },
      { id: 'sj2sqtq', name: 'BLANC BEC' },
      { id: 'sj3sq3a', name: 'VERTIGO' },
      { id: 'sj4sqqo', name: 'TOAST' },
      { id: 'sj5sqwx', name: 'POIDS PLUME' },
      { id: 'sj6sq3j', name: 'TRANSALPINE' },
      { id: 'sj7sqfg', name: 'МИРАБЕЛЬ' },
      { id: 'sj8sqrr', name: 'WEISSE CITY' },
      { id: 'sj9sq69', name: 'TUTTI FRUTTI' },
      { id: 'sjasqgk', name: 'SHIFUMI' }
    ]
  },
  {
    id: 'sjbsq4h',
    name: 'Société Parisienne de Bière',
    description: [
      "Notre laboratoire c'est une cuve de brassage de 30 litres, de multiples fermeteurs, une cave électrique pour controler la fermentation de nos bières; le tout situé au coeur du quartier des Batignolles à Paris. Nous expérimentons chaque semaine.",
      'Afin de vous faire découvrir nos créations, nous brassons en suite nos recettes dans les cuves de brasseries partenaires en France. C\'est ça le brassage "gypsie". Nous installons enfin notre brasserie cette année 2018.'
    ],
    website: 'http://societeparisiennedebiere.fr/',
    beers: [{ id: 'sjcsq9e', name: 'Batignolle' }]
  },
  {
    id: 'sjdsqr0',
    name: 'Demory Paris',
    description: [
      'Installée à Bobigny, au 1 rue de Paris à 30 mètres du métro Bobigny-Pantin Raymond Queneau et au bord du canal de l’Ourcq, notre brasserie se situe sans doute dans la région la plus dynamique du nouveau Grand Paris.',
      'Brassées à l’origine dans la petite ville d’Eschwege en Allemagne, les bières Demory-Paris ont investit cette « nouvelle » maison en janvier 2016. Depuis, notre Maître Brasseur Julien Perrod et son équipe ont installé notre nouveau système de brassage du type Braukon, pleins de nouveaux fermenteurs et ils n’ont pas arrêté de créer des nouvelles recettes de bière.',
      'Notre ambition de devenir la première grande brasserie de Paris depuis 50 ans prend enfin forme et nous avons encore des idées plein la tête !',
      'Nous aimons Paris et nous vivons notre passion, la bière.'
    ],
    website: 'http://demoryparis.com/',
    beers: [
      { id: 'sjesqqd', name: 'PARIS ALE' },
      { id: 'sjfsqx9', name: 'PARIS IPA' },
      { id: 'sjgsqsh', name: 'ROQUETTE BLANCHE' },
      { id: 'sjhsqyv', name: 'ASTROBLONDE' },
      { id: 'sjisqv9', name: 'ALTITUDE' },
      { id: 'sjjsqv4', name: 'NOVA NOIRE' },
      { id: 'sjksqx4', name: 'COSMOBLONDE' },
      { id: 'sjlsqg5', name: 'ATOMIQUE' },
      { id: 'sjmsqy3', name: 'SAINTE GENEVIÈVE' },
      { id: 'sjnsqce', name: 'PRODIGE IPA SANS ALCOOL' },
      { id: 'sjosqpl', name: 'INTRÉPIDE IPA' },
      { id: 'sjpsq7s', name: 'HÉROÏQUE DIPA' }
    ]
  },
  {
    id: 'sjqsqhm',
    name: "Brasserie de l'Être",
    description: [
      'Depuis quelques années les brasseries artisanales entreprennent avec succès de redorer le blason de la bière à travers la France. A Paris, l’implantation est plus difficile qu’en région, mais quelques irréductibles tentent l’aventure. Pour l’équipe de la Brasserie de l’Être, s’implanter à Paris relève autant d’un amour profond pour la ville que du désir de ressusciter les tissus industriels et conviviaux de la capitale.',
      'Le produit que nous vous proposons est une bière consciente, respectueuse de vos palais et de l’environnement. Symbole de la qualité culinaire locale, reflet de la qualité de vie issue de son terroir, et fierté pour les habitants de celui-ci.'
    ],
    website: 'https://brasseriedeletre.paris/',
    beers: [
      { id: 'sjrsqhk', name: 'Sphinx' },
      { id: 'sjssqj2', name: 'Salamandra' },
      { id: 'sjtsqaz', name: 'Oliphant' },
      { id: 'sjusqim', name: 'Cerberus' },
      { id: 'sjvsqzz', name: 'Feond' }
    ]
  },
  {
    id: 'sjwsq4x',
    name: 'Brasserie La Baleine',
    description: [
      'La Brasserie La Baleine est une micro-brasserie proposant des bières artisanales brassées de façon traditionnelle (à la main), ce qui permet de vous offrir des produits authentiques, vivants et naturels. Les bières qui y sont fabriquées ont ce goût caractéristique des pur malt. Les houblons, les levures, les plantes aromatiques et les épices sont sélectionnés afin d’obtenir des produits de qualité et des recettes uniques.'
    ],
    website: 'http://www.brasserie-la-baleine.com/',
    beers: [
      { id: 'skxsqej', name: 'La Lucite' },
      { id: 'skysqdw', name: 'La Gitane' },
      { id: 'skzsqfu', name: 'La Picaro' },
      { id: 'sk10sqiu', name: "L'Arrache Coeur" },
      { id: 'sk11sq8c', name: "Fête l'Amour" },
      { id: 'sk12sqa5', name: 'La Phare' },
      { id: 'sk13sq55', name: 'Volute' },
      { id: 'sk14sqca', name: 'Cru 1910' },
      { id: 'sk15sqgl', name: 'Cru 1924' }
    ]
  },
  {
    id: 'sk16sqv9',
    name: 'Brasserie Parisis',
    description: [
      'Vous savez, nous ne croyons pas qu’il y ait de bonnes ou de mauvaises brasseries, si nous devions résumer la situation c’est surtout des rencontres, des banques qui nous ont tendu la main. Et c’est assez curieux de se dire que les hasards, les rencontres forgent une destinée… Parce que quand on a le goût de la chose bien faite, parfois on ne trouve pas le beer-geek en face, je dirais, le miroir qui vous aide à avancer.'
    ],
    website: 'http://brasserie-parisis.com/',
    beers: [
      { id: 'sk17sq0f', name: 'PARISIS BLONDE' },
      { id: 'sk18squy', name: 'PARISIS BLANCHE' },
      { id: 'sk19sqx3', name: 'PARISIS AMBRÉE' },
      { id: 'sk1asq09', name: 'PSYCHOTIC PALE ALE' },
      { id: 'sk1bsq48', name: 'IPA SOUS SÉNART' },
      { id: 'sk1csq2n', name: 'IPARISIS' },
      { id: 'sk1dsqun', name: 'MORTAL KAWA' },
      { id: 'sk1esqwm', name: 'SMASH' },
      { id: 'sk1fsqm2', name: 'HOP SAVE THE QUEEN' }
    ]
  },
  {
    id: 'sk1gsq60',
    name: 'Galia Paris',
    description: [
      'Pour nous, c’est en 2009 que l’aventure commence. À l’époque, on a envie de monter notre boîte alors on reprend Gallia, une ancienne brasserie parisienne abandonnée. Notre ambition : redonner leur bière aux parisiens, rien que ça !'
    ],
    website: 'https://www.galliaparis.com/',
    beers: [
      { id: 'sk1hsqiu', name: 'Weissbier' },
      { id: 'sk1isqjq', name: 'West IPA' },
      { id: 'sk1jsq9c', name: 'Corde Sensible BA' },
      { id: 'sk1ksq1s', name: 'Karea' },
      { id: 'sk1lsqs5', name: 'Le Champ Sauvage' },
      { id: 'sk1msq3d', name: 'Lager' },
      { id: 'sk1nsqb2', name: 'Njut' },
      { id: 'sk1osqsk', name: 'East IPA' },
      { id: 'sk1psq75', name: 'Carioca' },
      { id: 'sk1qsq6p', name: 'Red Star x Gallia' },
      { id: 'sk1rsqw6', name: 'Session IPA' },
      { id: 'sk1ssqkx', name: 'Brut IPA' }
    ]
  },
  {
    id: 'sk1tsqjx',
    name: "Brasserie de la Goutte d'Or",
    description: [
      'Créée en 2012, la brasserie de la goutte d’or fait figure de pionnière du mouvement craft à Paris. Localisés au coeur du quartier cosmopolite de la goutte d’or, nos influences viennent de ce quartier populaire du 18e dans lequel nous sommes installés ainsi que des scènes internationales actives au sein du renouveau brassicole.',
      'Inspirées par l’idée d’une culture transmise par les gouts, les saveurs et le métissage, nos bières sont artisanales, épicées, houblonnées ou collaboratives.',
      'Découvrez notre tap room tous les jeudis, vendredis et samedis soirs et dégustez nos bières ou celles de nos invités accompagnées d’un de nos délicieux tapas maison.'
    ],
    website: 'http://brasserielagouttedor.com/',
    beers: [
      { id: 'sk1usqes', name: 'ALABAMA' },
      { id: 'sk1vsqtx', name: 'LE ROI DES MOUCHES' },
      { id: 'sk1wsq9j', name: 'MERINGUE' },
      { id: 'sk1xsq10', name: 'BLE D’INDE' },
      { id: 'sk1ysqds', name: 'CREAM' },
      { id: 'sk1zsqbw', name: 'SUCCUBE' },
      { id: 'sk20sqik', name: 'ERNESTINE' },
      { id: 'sk21sqgv', name: 'TRUAND' },
      { id: 'sk22sqmw', name: 'LA SOURCE' },
      { id: 'sk23sqql', name: 'YASAMIN' },
      { id: 'sk24sq2v', name: 'SWEET GANESH' },
      { id: 'sk25sqq0', name: 'L’EDEN' },
      { id: 'sk26sqs0', name: 'CHÂTEAU ROUGE' },
      { id: 'sk27sqk5', name: 'LA CHAPELLE' },
      { id: 'sk28sqp9', name: 'L’ASSOMMOIR' },
      { id: 'sk29sqfp', name: 'HERBE BLEUE' },
      { id: 'sk2asqvm', name: 'PETITE PIGALLE' },
      { id: 'sk2bsqah', name: 'MYRHA' }
    ]
  },
  {
    id: 'sk2csqvm',
    name: 'La Montreuilloise',
    description: [
      'Créée en 2014, La Montreuilloise est une microbrasserie dédiée à la fabrication de bières.\n    La Montreuilloise, c’est aussi un engagement local et une démarche militante pour une bière artisanale et respectueuse de l’environnement !'
    ],
    website: 'http://la-montreuilloise.com/',
    beers: [
      { id: 'sk2dsqsk', name: 'Blonde Pale Ale' },
      { id: 'sk2esq0s', name: 'Rousse aux raisins fermentés' },
      { id: 'sk2fsqu5', name: 'Brune Chocolate Stout' },
      { id: 'sk2gsqil', name: 'Blanche Witbier' },
      { id: 'sk2hsqgy', name: 'Smoked Porter' },
      { id: 'sk2isqhn', name: 'IPA – Mandarina Bavaria' },
      { id: 'sk2jsqhd', name: 'PEREGRINA London Ale' },
      { id: 'sk2ksqxm', name: 'Fleur de Montreuil' },
      { id: 'sk2lsq7i', name: 'La Grisette' }
    ]
  },
  {
    id: 'sk2msqfl',
    name: 'La Parisienne',
    description: [
      'Née à Paris en 2014, et aujourd’hui située à Porte de la Villette (Pantin) dans une ancienne usine des années 30, La Parisienne met toute sa passion et son obsession de l’excellence pour créer des bières de dégustation originales, brassées à partir d’ingrédients de qualité qui mettent en valeur le terroir d’Ile-de-France.',
      'La Parisienne est une bière artisanale non filtrée et non pasteurisée. La présence de lie dans la bouteille apporte à la bière complexité et structure.',
      'Tous les ingrédients sont sélectionnés avec le plus grand soin. Depuis l’été 2018, La Parisienne est équipée d’une salle de brassage de 40hl et d’une embouteilleuse de dernière génération.'
    ],
    website: 'http://brasserielaparisienne.com/',
    beers: [
      { id: 'sk2nsqiz', name: 'La Parisienne Blanche' },
      { id: 'sk2osqo5', name: 'La Parisienne Blonde' },
      { id: 'sk2psq5w', name: 'La Parisienne Rousse' },
      { id: 'sk2qsq1j', name: 'La Parisienne Brune' },
      { id: 'sk2rsqki', name: 'La Parisienne Bio Blanche' },
      { id: 'sk2ssq6k', name: 'La Parisienne Bio Blonde' },
      { id: 'sk2tsqie', name: 'La Parisienne Libérée' },
      { id: 'sk2usq3d', name: 'Le Titi Parisien' },
      { id: 'sk2vsq8o', name: 'l’Apache 2.0' }
    ]
  },
  {
    id: 'sk2wsq3n',
    name: 'Brasserie du Grand Paris',
    description: [
      "Pendant 5 années d'apprentissage en mode nomade, nous avons décidé de nous lancer dans l'aventure, d'imaginer puis de bâtir notre propre brasserie dans cette zone géographique que l'on appelle le Grand Paris.    "
    ],
    website: 'https://www.bgp.paris/18/accueil',
    beers: [
      { id: 'sk2xsq7v', name: 'IPA CITRA GALACTIQUE' },
      { id: 'sk2ysqwc', name: "À L'OUEST" },
      { id: 'sk2zsqxv', name: 'NICE TO MEET YOU' },
      { id: 'sk30sqjw', name: 'DENISE' },
      { id: 'sk31sq2w', name: 'WAIMEA BAY' },
      { id: 'sk32sqr3', name: "L'EXPRESS" },
      { id: 'sk33sqix', name: 'SMOKE ON THE WATER' },
      { id: 'sk34sqt1', name: 'PORTE DOREE' }
    ]
  },
  {
    id: 'sk35sqin',
    name: 'Le Triangle',
    description: [
      'Le Triangle est à la fois un restaurant et une microbrasserie.',
      "Nous vous proposons une cuisine maison à base de produits frais, simple et raffinée, mettant en valeur la qualité des produits que nous travaillons. Et puisque nous aimons la convivialité, nos plats sont présentés sous forme d'assiettes à partager.",
      "En parallèle, nous vous proposons 8 bières artisanales à la pression ( oui nous avons du vin aussi ). Ces bières de dégustation sont sélectionnées par notre brasseur ou produites sur place. En effet nous brassons nos propres bières en petites quantités, en s'inspirant des traditions européennes et des récentes innovations brassicoles nord-américaines."
    ],
    website: 'http://www.triangleparis.com/',
    beers: [
      { id: 'sk36sqz4', name: 'Simone ' },
      { id: 'sk37sqgu', name: 'Gryesette ' },
      { id: 'sk38sqzo', name: 'Brumaire et Frimaire' },
      { id: 'sk39sqsw', name: 'Beetle Juice' },
      { id: 'sk3asqn1', name: 'Ocean Bey ' },
      { id: 'sk3bsqk9', name: 'Hazy Diamond' },
      { id: 'sk3csqt9', name: 'Saison Mistral ' },
      { id: 'sk3dsq1i', name: 'Overexposed ' }
    ]
  }
];
