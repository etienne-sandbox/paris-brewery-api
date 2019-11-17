import { Brewery } from './types';

export const BREWERIES: Array<Brewery> = [
  {
    id: 'l90hqhh',
    name: 'BAPBAP',
    description: [
      'Du concassage des grains jusqu’à l’embouteillage, tout est réalisé localement dans notre brasserie parisienne artisanale du 11ème arrondissement. Idéalement située à quelques encablures de la Place de la République, la brasserie est un lieu très atypique de 1800m2 abrité par une structure métallique du début du XXème siècle type Eiffel.',
      'Plus de 6 mois de travaux ont été nécessaires pour transformer cet ancien entrepôt d’accessoires textiles en fabrique de bières artisanales.',
      'Aujourd’hui, la brasserie accueille notre outil de production, un espace de coworking et une salle de dégustation. La prochaine fois que vous êtes à proximité de République, Bastille ou du Père-Lachaise, passez nous voir dans notre brasserie parisienne !'
    ],
    website: 'https://www.bapbap.paris/',
    beers: [
      { id: 'l91hq2n', name: 'ORIGINAL' },
      { id: 'la2hq5m', name: 'BLANC BEC' },
      { id: 'la3hqyf', name: 'VERTIGO' },
      { id: 'la4hqnc', name: 'TOAST' },
      { id: 'la5hqi2', name: 'POIDS PLUME' },
      { id: 'la6hq2y', name: 'TRANSALPINE' },
      { id: 'la7hqhp', name: 'МИРАБЕЛЬ' },
      { id: 'la8hq19', name: 'WEISSE CITY' },
      { id: 'la9hqa8', name: 'TUTTI FRUTTI' },
      { id: 'laahqsf', name: 'SHIFUMI' }
    ]
  },
  {
    id: 'labhq5q',
    name: 'Société Parisienne de Bière',
    description: [
      "Notre laboratoire c'est une cuve de brassage de 30 litres, de multiples fermeteurs, une cave électrique pour controler la fermentation de nos bières; le tout situé au coeur du quartier des Batignolles à Paris. Nous expérimentons chaque semaine.",
      'Afin de vous faire découvrir nos créations, nous brassons en suite nos recettes dans les cuves de brasseries partenaires en France. C\'est ça le brassage "gypsie". Nous installons enfin notre brasserie cette année 2018.'
    ],
    website: 'http://societeparisiennedebiere.fr/',
    beers: [{ id: 'lachq4m', name: 'Batignolle' }]
  },
  {
    id: 'ladhqk7',
    name: 'Demory Paris',
    description: [
      'Installée à Bobigny, au 1 rue de Paris à 30 mètres du métro Bobigny-Pantin Raymond Queneau et au bord du canal de l’Ourcq, notre brasserie se situe sans doute dans la région la plus dynamique du nouveau Grand Paris.',
      'Brassées à l’origine dans la petite ville d’Eschwege en Allemagne, les bières Demory-Paris ont investit cette « nouvelle » maison en janvier 2016. Depuis, notre Maître Brasseur Julien Perrod et son équipe ont installé notre nouveau système de brassage du type Braukon, pleins de nouveaux fermenteurs et ils n’ont pas arrêté de créer des nouvelles recettes de bière.',
      'Notre ambition de devenir la première grande brasserie de Paris depuis 50 ans prend enfin forme et nous avons encore des idées plein la tête !',
      'Nous aimons Paris et nous vivons notre passion, la bière.'
    ],
    website: 'http://demoryparis.com/',
    beers: [
      { id: 'laehq5z', name: 'PARIS ALE' },
      { id: 'lafhqpy', name: 'PARIS IPA' },
      { id: 'laghqbo', name: 'ROQUETTE BLANCHE' },
      { id: 'lahhqdg', name: 'ASTROBLONDE' },
      { id: 'laihqcc', name: 'ALTITUDE' },
      { id: 'lajhqc5', name: 'NOVA NOIRE' },
      { id: 'lakhqpy', name: 'COSMOBLONDE' },
      { id: 'lalhqob', name: 'ATOMIQUE' },
      { id: 'lamhq9b', name: 'SAINTE GENEVIÈVE' },
      { id: 'lanhqof', name: 'PRODIGE IPA SANS ALCOOL' },
      { id: 'laohqs6', name: 'INTRÉPIDE IPA' },
      { id: 'laphqwt', name: 'HÉROÏQUE DIPA' }
    ]
  },
  {
    id: 'laqhqzp',
    name: "Brasserie de l'Être",
    description: [
      'Depuis quelques années les brasseries artisanales entreprennent avec succès de redorer le blason de la bière à travers la France. A Paris, l’implantation est plus difficile qu’en région, mais quelques irréductibles tentent l’aventure. Pour l’équipe de la Brasserie de l’Être, s’implanter à Paris relève autant d’un amour profond pour la ville que du désir de ressusciter les tissus industriels et conviviaux de la capitale.',
      'Le produit que nous vous proposons est une bière consciente, respectueuse de vos palais et de l’environnement. Symbole de la qualité culinaire locale, reflet de la qualité de vie issue de son terroir, et fierté pour les habitants de celui-ci.'
    ],
    website: 'https://brasseriedeletre.paris/',
    beers: [
      { id: 'larhqic', name: 'Sphinx' },
      { id: 'lashqg1', name: 'Salamandra' },
      { id: 'lathq55', name: 'Oliphant' },
      { id: 'lauhq6b', name: 'Cerberus' },
      { id: 'lavhqpd', name: 'Feond' }
    ]
  },
  {
    id: 'lawhqox',
    name: 'Brasserie La Baleine',
    description: [
      'La Brasserie La Baleine est une micro-brasserie proposant des bières artisanales brassées de façon traditionnelle (à la main), ce qui permet de vous offrir des produits authentiques, vivants et naturels. Les bières qui y sont fabriquées ont ce goût caractéristique des pur malt. Les houblons, les levures, les plantes aromatiques et les épices sont sélectionnés afin d’obtenir des produits de qualité et des recettes uniques.'
    ],
    website: 'http://www.brasserie-la-baleine.com/',
    beers: [
      { id: 'laxhqvr', name: 'La Lucite' },
      { id: 'layhq9f', name: 'La Gitane' },
      { id: 'lazhqin', name: 'La Picaro' },
      { id: 'la10hqjl', name: "L'Arrache Coeur" },
      { id: 'la11hqge', name: "Fête l'Amour" },
      { id: 'la12hqcy', name: 'La Phare' },
      { id: 'la13hq1u', name: 'Volute' },
      { id: 'la14hqih', name: 'Cru 1910' },
      { id: 'la15hq12', name: 'Cru 1924' }
    ]
  },
  {
    id: 'la16hq3o',
    name: 'Brasserie Parisis',
    description: [
      'Vous savez, nous ne croyons pas qu’il y ait de bonnes ou de mauvaises brasseries, si nous devions résumer la situation c’est surtout des rencontres, des banques qui nous ont tendu la main. Et c’est assez curieux de se dire que les hasards, les rencontres forgent une destinée… Parce que quand on a le goût de la chose bien faite, parfois on ne trouve pas le beer-geek en face, je dirais, le miroir qui vous aide à avancer.'
    ],
    website: 'http://brasserie-parisis.com/',
    beers: [
      { id: 'la17hqtj', name: 'PARISIS BLONDE' },
      { id: 'la18hqj2', name: 'PARISIS BLANCHE' },
      { id: 'la19hqxx', name: 'PARISIS AMBRÉE' },
      { id: 'la1ahqq1', name: 'PSYCHOTIC PALE ALE' },
      { id: 'la1bhql1', name: 'IPA SOUS SÉNART' },
      { id: 'la1chqnw', name: 'IPARISIS' },
      { id: 'la1dhqt8', name: 'MORTAL KAWA' },
      { id: 'la1ehqmc', name: 'SMASH' },
      { id: 'la1fhq0t', name: 'HOP SAVE THE QUEEN' }
    ]
  },
  {
    id: 'la1ghqpe',
    name: 'Galia Paris',
    description: [
      'Pour nous, c’est en 2009 que l’aventure commence. À l’époque, on a envie de monter notre boîte alors on reprend Gallia, une ancienne brasserie parisienne abandonnée. Notre ambition : redonner leur bière aux parisiens, rien que ça !'
    ],
    website: 'https://www.galliaparis.com/',
    beers: [
      { id: 'la1hhqld', name: 'Weissbier' },
      { id: 'la1ihqt6', name: 'West IPA' },
      { id: 'la1jhqlo', name: 'Corde Sensible BA' },
      { id: 'la1khq0y', name: 'Karea' },
      { id: 'la1lhqq1', name: 'Le Champ Sauvage' },
      { id: 'la1mhqmi', name: 'Lager' },
      { id: 'la1nhqdc', name: 'Njut' },
      { id: 'la1ohq5e', name: 'East IPA' },
      { id: 'la1phqnq', name: 'Carioca' },
      { id: 'la1qhqpd', name: 'Red Star x Gallia' },
      { id: 'la1rhqh8', name: 'Session IPA' },
      { id: 'la1shqzi', name: 'Brut IPA' }
    ]
  },
  {
    id: 'la1thqdn',
    name: "Brasserie de la Goutte d'Or",
    description: [
      'Créée en 2012, la brasserie de la goutte d’or fait figure de pionnière du mouvement craft à Paris. Localisés au coeur du quartier cosmopolite de la goutte d’or, nos influences viennent de ce quartier populaire du 18e dans lequel nous sommes installés ainsi que des scènes internationales actives au sein du renouveau brassicole.',
      'Inspirées par l’idée d’une culture transmise par les gouts, les saveurs et le métissage, nos bières sont artisanales, épicées, houblonnées ou collaboratives.',
      'Découvrez notre tap room tous les jeudis, vendredis et samedis soirs et dégustez nos bières ou celles de nos invités accompagnées d’un de nos délicieux tapas maison.'
    ],
    website: 'http://brasserielagouttedor.com/',
    beers: [
      { id: 'la1uhqew', name: 'ALABAMA' },
      { id: 'la1vhqub', name: 'LE ROI DES MOUCHES' },
      { id: 'la1whqop', name: 'MERINGUE' },
      { id: 'la1xhqyb', name: 'BLE D’INDE' },
      { id: 'la1yhqmt', name: 'CREAM' },
      { id: 'la1zhqjg', name: 'SUCCUBE' },
      { id: 'la20hqw3', name: 'ERNESTINE' },
      { id: 'la21hqku', name: 'TRUAND' },
      { id: 'la22hqfv', name: 'LA SOURCE' },
      { id: 'la23hqp6', name: 'YASAMIN' },
      { id: 'la24hq81', name: 'SWEET GANESH' },
      { id: 'la25hqp3', name: 'L’EDEN' },
      { id: 'la26hqns', name: 'CHÂTEAU ROUGE' },
      { id: 'la27hqg0', name: 'LA CHAPELLE' },
      { id: 'la28hqs1', name: 'L’ASSOMMOIR' },
      { id: 'la29hqra', name: 'HERBE BLEUE' },
      { id: 'la2ahqu6', name: 'PETITE PIGALLE' },
      { id: 'la2bhqd4', name: 'MYRHA' }
    ]
  },
  {
    id: 'la2chqnq',
    name: 'La Montreuilloise',
    description: [
      'Créée en 2014, La Montreuilloise est une microbrasserie dédiée à la fabrication de bières.\n    La Montreuilloise, c’est aussi un engagement local et une démarche militante pour une bière artisanale et respectueuse de l’environnement !'
    ],
    website: 'http://la-montreuilloise.com/',
    beers: [
      { id: 'la2dhqx9', name: 'Blonde Pale Ale' },
      { id: 'la2ehqic', name: 'Rousse aux raisins fermentés' },
      { id: 'la2fhq0f', name: 'Brune Chocolate Stout' },
      { id: 'la2ghqh1', name: 'Blanche Witbier' },
      { id: 'la2hhqh6', name: 'Smoked Porter' },
      { id: 'la2ihqaz', name: 'IPA – Mandarina Bavaria' },
      { id: 'la2jhqu0', name: 'PEREGRINA London Ale' },
      { id: 'la2khqhr', name: 'Fleur de Montreuil' },
      { id: 'la2lhqez', name: 'La Grisette' }
    ]
  },
  {
    id: 'la2mhq8y',
    name: 'La Parisienne',
    description: [
      'Née à Paris en 2014, et aujourd’hui située à Porte de la Villette (Pantin) dans une ancienne usine des années 30, La Parisienne met toute sa passion et son obsession de l’excellence pour créer des bières de dégustation originales, brassées à partir d’ingrédients de qualité qui mettent en valeur le terroir d’Ile-de-France.',
      'La Parisienne est une bière artisanale non filtrée et non pasteurisée. La présence de lie dans la bouteille apporte à la bière complexité et structure.',
      'Tous les ingrédients sont sélectionnés avec le plus grand soin. Depuis l’été 2018, La Parisienne est équipée d’une salle de brassage de 40hl et d’une embouteilleuse de dernière génération.'
    ],
    website: 'http://brasserielaparisienne.com/',
    beers: [
      { id: 'la2nhqvj', name: 'La Parisienne Blanche' },
      { id: 'la2ohqes', name: 'La Parisienne Blonde' },
      { id: 'la2phqau', name: 'La Parisienne Rousse' },
      { id: 'la2qhq6e', name: 'La Parisienne Brune' },
      { id: 'la2rhqot', name: 'La Parisienne Bio Blanche' },
      { id: 'la2shq49', name: 'La Parisienne Bio Blonde' },
      { id: 'la2thqqp', name: 'La Parisienne Libérée' },
      { id: 'la2uhqr5', name: 'Le Titi Parisien' },
      { id: 'la2vhq14', name: 'l’Apache 2.0' }
    ]
  },
  {
    id: 'la2whqvj',
    name: 'Brasserie du Grand Paris',
    description: [
      "Pendant 5 années d'apprentissage en mode nomade, nous avons décidé de nous lancer dans l'aventure, d'imaginer puis de bâtir notre propre brasserie dans cette zone géographique que l'on appelle le Grand Paris.    "
    ],
    website: 'https://www.bgp.paris/18/accueil',
    beers: [
      { id: 'la2xhqzu', name: 'IPA CITRA GALACTIQUE' },
      { id: 'la2yhqow', name: "À L'OUEST" },
      { id: 'la2zhqsv', name: 'NICE TO MEET YOU' },
      { id: 'la30hqxu', name: 'DENISE' },
      { id: 'la31hqol', name: 'WAIMEA BAY' },
      { id: 'la32hqn8', name: "L'EXPRESS" },
      { id: 'la33hqnh', name: 'SMOKE ON THE WATER' },
      { id: 'la34hqt2', name: 'PORTE DOREE' }
    ]
  },
  {
    id: 'la35hqh2',
    name: 'Le Triangle',
    description: [
      'Le Triangle est à la fois un restaurant et une microbrasserie.',
      "Nous vous proposons une cuisine maison à base de produits frais, simple et raffinée, mettant en valeur la qualité des produits que nous travaillons. Et puisque nous aimons la convivialité, nos plats sont présentés sous forme d'assiettes à partager.",
      "En parallèle, nous vous proposons 8 bières artisanales à la pression ( oui nous avons du vin aussi ). Ces bières de dégustation sont sélectionnées par notre brasseur ou produites sur place. En effet nous brassons nos propres bières en petites quantités, en s'inspirant des traditions européennes et des récentes innovations brassicoles nord-américaines."
    ],
    website: 'http://www.triangleparis.com/',
    beers: [
      { id: 'la36hqxb', name: 'Simone ' },
      { id: 'la37hqnn', name: 'Gryesette ' }
    ]
  }
];
