import { Beer } from './types';

export const BEERS: Array<Beer> = [
  {
    id: 'n11nqy7',
    name: 'ORIGINAL',
    alcool: 5.8,
    url: 'https://www.bapbap.paris/bieres-artisanales-parisiennes-bapbap/',
    description: [
      'Première bière à sortir des cuves de la rue Saint-Maur, la BAPBAP Originale est une bière de fermentation haute de type Pale Ale titrant à 5,8%. C’est une interprétation parisienne des bières belges rondes et épicées et des Pale Ales américaines aux houblons si distinctifs. Sa recette est issue d’un mélange subtil entre la douceur des malts (d’orge et de blé) et les notes rafraîchissantes délivrées par le houblon.',
      'Le houblon Cascade procure des arômes d’agrumes qui se mêlent aux sucres résiduels du malt Cara Vienne. C’est une bière dorée, ronde et fruitée qui dévoile une agréable amertume en fin de bouche.'
    ],
    brewery: { id: 'n00nqo9', name: 'BAPBAP' }
  },
  {
    id: 'n12nqri',
    name: 'BLANC BEC',
    alcool: 4.5,
    url: 'https://www.bapbap.paris/bieres-artisanales-parisiennes-bapbap/',
    description: [
      'La Blanc Bec, notre 2ème bière permanente sortie fin 2015, s’offre une nouvelle recette !',
      'On conserve sa base de blé qui lui confère une robe légèrement trouble, d’une belle couleur de paille qui rendra jalouse toutes ses consoeurs en terrasse. Son corps est plutôt sec, céréalier, avec une finale délicatement acidulée. À la croisée des chemins entre la Belgique et les Etats-Unis, elle tire ses notes légèrement épicées et rustiques de sa levure de Witbier, et ses arômes d’agrumes et de fruits exotiques du houblon Mosaic utilisé en\n          houblonnage à froid. En somme, le meilleur du vieux et du nouveau continent dans une seule bière. En résulte une bière de blé sèche, fruitée et à l’amertume très légère, avec un nez séduisant d’ananas et de pamplemousse. Belle et désaltérante, parfaite pour les journées ensoleillées, sa complexité en bouche saura aussi séduire les palets exigeants.'
    ],
    brewery: { id: 'n00nqo9', name: 'BAPBAP' }
  },
  {
    id: 'n13nq5r',
    name: 'VERTIGO',
    alcool: 6,
    url: 'https://www.bapbap.paris/bieres-artisanales-parisiennes-bapbap/',
    description: [
      'La Vertigo est notre première India Pale Ale (IPA), un style très emblématique du renouveau brassicole en Angleterre et aux États-Unis. Nous avons voulu donner la part belle aux houblons aromatiques et aux amertumes parfumées, en réalisant un assemblage de trois houblons : Magnum, Summit et Sorachi Ace (ce dernier ayant aussi servi pour un houblonnage à cru). Côté céréales, la Vertigo n’est pas en reste avec pas moins de 6 malts d’orge différents et du malt de blé.',
      'Le résultat est une IPA complexe, à la robe caramel aux reflets rouges et auburn. Le corps est limpide, lumineux, animé d’une effervescence légère ; le tout surmonté d’une fine mousse blanc cassé. Son nez est puissant, fruité avec des notes fruits de la passion et fraise prononcées. Les malts caramélisés se marient bien avec les flaveurs résineuses des houblons.',
      'En bouche, les arômes fruités, soutenus par les malts caramélisés envahissent votre palais. Sa texture fine et soyeuse la rend accessible mais ne vous détrompez pas, nous sommes bien sur une IPA ! Après quelques instants les houblons amérisants viennent parfaitement équilibrer les premières notes sucrées pour une finale sèche, amère et parfumée. Avec sa belle longueur en bouche, ces vertiges gustatifs devraient se prolonger longtemps, pour votre plus grand plaisir.'
    ],
    brewery: { id: 'n00nqo9', name: 'BAPBAP' }
  },
  {
    id: 'n14nqh5',
    name: 'TOAST',
    alcool: 4.5,
    url: 'https://www.bapbap.paris/bieres-artisanales-parisiennes-bapbap/',
    description: [
      'La Toast est une brune de style Porter. Ne vous laissez pas impressionner par sa robe sombre : son titrage peu élevé (4,5%) et sa texture légère la rendent rafraîchissante. Une Porter qui vous fera aimer le côté obscur de la bière !',
      'À l’œil, la Toast arbore fièrement ses malts torréfiés, avec un beau brun profond, coiffée d’une mousse beige. Son nez est lui aussi sans équivoque : chocolat noir, liqueur de café, pain grillé. Le houblon, assez discret, apporte néanmoins une subtile touche de fraîcheur.',
      'En bouche, les arômes torréfiés sont toujours bien présents, accompagnés par les notes de réglisse et de menthol du houblon East Kent Golding. Les flocons d’avoine lui confèrent une texture soyeuse, laissant place à une finale assez sèche, fraîche et désaltérante.'
    ],
    brewery: { id: 'n00nqo9', name: 'BAPBAP' }
  },
  {
    id: 'n15nqgt',
    name: 'POIDS PLUME',
    alcool: 3,
    url: 'https://www.bapbap.paris/bieres-artisanales-parisiennes-bapbap/',
    description: [
      'La Poids Plume est une bière de table, un style belge populaire jusque dans les années 80, leur faible titrage (1% à 3%) permettant une consommation facile, par un large public (même dans les cantines !). Aujourd’hui, BAPBAP revisite ce style avec une touche bien houblonnée.',
      'À l’œil, on observe un doré pale et lumineux avec des reflets abricot, une robe légèrement trouble, coiffée d’une fine mousse blanche. Au nez, la personnalité de la Poids Plume se révèle : les houblons Willamette et Chinook, généreusement utilisés pendant la garde à froid, délivrent leurs arômes puissants et parfumés de fruits jaunes (abricot) et de fleur (chèvrefeuille) pour un résultat ultra-frais.',
      'En bouche, les houblons sont toujours aux commandes avec une entrée vive, sèche, dominée par le côté floral du Chinook. La texture est mince, légère, très facile à boire. Les malts sont discrets mais apportent des notes de pain et caramel, équilibrant les arômes végétaux des houblons. La finale est sèche, avec une belle amertume parfumée, mise en avant par l’absence de sucres résiduels. Vous n’aurez plus à choisir entre le goût et la fraicheur !'
    ],
    brewery: { id: 'n00nqo9', name: 'BAPBAP' }
  },
  {
    id: 'n16nqls',
    name: 'TRANSALPINE',
    alcool: 6.8,
    url: 'https://www.bapbap.paris/bieres-artisanales-parisiennes-bapbap/',
    description: [
      'Bière brassée en collaboration avec Bevog Brewery, brasserie emblématique autrichienne.',
      'De cette collaboration est née la Transalpine, une bière de style Saison titrant à 6,8% et généreusement houblonnée au Nelson Sauvin.',
      'Serrez bien vos fixations car il en résulte une avalanche de saveurs avec des notes puissantes de vin blanc, de pamplemousse et de groseille. Sa belle robe jaune abricot cache les saveurs épicées et rustiques typiques d’une levure Belle Saison.',
      'Cette bière sèche et très fruitée saura séduire tous les palais qui croiseront son chemin sur les pentes enneigées Parisiennes.'
    ],
    brewery: { id: 'n00nqo9', name: 'BAPBAP' }
  },
  {
    id: 'n17nqo1',
    name: 'МИРАБЕЛЬ',
    alcool: 4.3,
    url: 'https://www.bapbap.paris/bieres-artisanales-parisiennes-bapbap/',
    description: [
      'Après une première rencontre à Saint Pétersbourg début 2019, c’est lors de la Paris Beer Week que BAPBAP s’est associé à la brasserie Bakunin pour créer une nouvelle recette.',
      'De cette collaboration est née мирабель (ou Mirabelle en Russe). Cette recette de Gose, bière acide et légèrement saline, est brassée avec du sel de Guérande et de la coriandre, puis fermentée avec de la levure French Saison. C’est dans cette base que nous avons ensuite ajouté 100 grammes par litre d’un fruit tellement typiquement Français qu’il n’existe pas de mot en russe pour le traduire : la mirabelle !',
      'En résulte une belle Gose fruitée, à l’acidité rafraichissante, délicatement parfumée par la coriandre, sur laquelle ressortent de belles notes de prunes et de compote de mirabelles.',
      'Bakunin est un partenaire de choix pour cette collaboration. Fondée en 2013 à Saint-Petersbourg, Bakunin Brewery est une brasserie pionnière de la révolution craft en Russie. Brasserie d’avant-garde, Bakunin ne cesse d’innover à travers l’emploi de levures atypiques, l’utilisation de nouvelles variétés de houblons, ou le développement d’un programme de vieillissement en barrique, le tout dans des canettes et bouteilles au graphisme travaillé !'
    ],
    brewery: { id: 'n00nqo9', name: 'BAPBAP' }
  },
  {
    id: 'n18nqvq',
    name: 'WEISSE CITY',
    alcool: 4.5,
    url: 'https://www.bapbap.paris/bieres-artisanales-parisiennes-bapbap/',
    description: [
      'Bière de blé acidulée d’inspiration allemande, la Weisse City revisite le style Berliner Weisse avec l’ajout de melon directement en fermenteur.',
      ' résulte une bière artisanale fraîche, à l’entrée en bouche vive grâce à son acidité. Elle présente de belles notes citronnées relevées par un retour céréalier en fin de bouche, et une pointe de melon pour une finale estivale. Il suffit d’admirer sa robe jaune pâle pour comprendre son pouvoir désaltérant et rafraichissant. Parfaite pour les fortes chaleurs de Miami, on parie qu’elle vous accompagnera plus d’une fois sur les terrasses d’Ocean Drive… ou de Paris.'
    ],
    brewery: { id: 'n00nqo9', name: 'BAPBAP' }
  },
  {
    id: 'n19nqfl',
    name: 'TUTTI FRUTTI',
    alcool: 5.2,
    url: 'https://www.bapbap.paris/bieres-artisanales-parisiennes-bapbap/',
    description: [
      'Bop bopa-a-lu a whop bam boo ! Tutti frutti est notre dernière création estivale, une bière légère et fruitée pour affronter les grosses chaleurs. Une base de Pale Ale houblonnée au Cascade lui confère de subtiles notes herbacées et légèrement fruitées, pour une amertume désaltérante.',
      'Puis arrive la ribambelle de fruits : le fruit de la passion d’abord, relevé par l’acidité de la framboise, avant de finir sur une délicieuse touche de fraise. Garantie sans sucres ajoutés, sa finale plutôt sèche en fait une bière fruitée mais désaltérante !'
    ],
    brewery: { id: 'n00nqo9', name: 'BAPBAP' }
  },
  {
    id: 'n1anqcq',
    name: 'SHIFUMI',
    alcool: 5.3,
    url: 'https://www.bapbap.paris/bieres-artisanales-parisiennes-bapbap/',
    description: [
      'La Shifumi fait son retour pour une troisième version !',
      'Cette Pale Ale estivale bien houblonnée met en valeur à chaque édition une nouvelle variété de houblon utilisée en houblonnage à cru (dry-hopping).',
      'En 2019, place au Citra !',
      'Généreusement utilisé lors de la garde à froid, ce houblon américain mythique apporte un nez explosif de fruits tropicaux (mangue, litchi). Sous sa belle robe dorée, cette bière légère délivre de belles notes florales et d’agrumes relevées par une amertume discrète. Sa finale sèche et désaltérante vous donnera envie d’y retourner encore et encore !'
    ],
    brewery: { id: 'n00nqo9', name: 'BAPBAP' }
  },
  {
    id: 'n1cnqgx',
    name: 'Batignolle',
    alcool: 5.4,
    url: 'http://societeparisiennedebiere.fr/nos-creations.html',
    description: [
      "La bière Batignolle a été développée en deux ROUNDS, lesquels se sont déclinés en plusieurs cuvées. Il s'agit de notre bière d'introduction.",
      "Nous avons choisi ce style AMERICAN PALE ALE (APA) qui est à nos yeux un emblême de la révolution craft beer américaine. Il est bien différent de ceux auquels nous avons pu être habitués en France. C'est un style porté sur les houblons, plutôt que sur le malt ou la levure. Au nez ce sont eux qui s'expriment le plus (il s'agit en principe de variétés américaines très fruitées). Le corps léger et la bouche sèche (peu de sucre résiduel) font également ressortir leur amertume. Le niveau d'alcool reste inférieur à 6%.",
      "Pour interpreter ce style, nous avons souhaité renforcer la base de malt pour asseoir l'amertume des houblons, prolonger la bouche et créer de nouvelles saveurs. Le niveau d'alcool peu élevé participe de cette volonté de vous proposer une première bière pouvant être dégustée facilement (session beer)."
    ],
    brewery: { id: 'n1bnqwg', name: 'Société Parisienne de Bière' }
  },
  {
    id: 'n1enqqn',
    name: 'PARIS ALE',
    alcool: 4.7,
    url: 'http://demoryparis.com/paris-ale-blonde-ale/',
    description: [
      "La Paris Ale est la bière de tous et toutes les parisien(ne)s. Légère mais avec une belle complexité maltée, elle est facile à boire et désaltérante tout en gardant un gout fruité et houblonné. Une bière unique, surprenante et élégante, à l'image de la ville qu'elle représente."
    ],
    brewery: { id: 'n1dnqrl', name: 'Demory Paris' }
  },
  {
    id: 'n1fnq43',
    name: 'PARIS IPA',
    alcool: 5.5,
    url: 'http://demoryparis.com/paris-ipa/',
    description: [
      "La Paris IPA est brassée exclusivement avec des houblons français. C'est une vraie India Pale Ale bien amère, mais interprétée à la parisienne - pleine d'émotions et de vie... et plein d'amour pour cette magnifique ville."
    ],
    brewery: { id: 'n1dnqrl', name: 'Demory Paris' }
  },
  {
    id: 'n1gnqx4',
    name: 'ROQUETTE BLANCHE',
    alcool: 5.7,
    url: 'http://demoryparis.com/roquette-blanche-57/',
    description: [
      'Gout fruité de banane et, en même temps, malteux et de pain. Non filtrée, la levure donne beaucoup de corps en bouche. Faible en amertume. Le taux naturellement élevé de gaz carbonique rend la Roquette Blanche tres rafraichissante.'
    ],
    brewery: { id: 'n1dnqrl', name: 'Demory Paris' }
  },
  {
    id: 'n1hnq2h',
    name: 'ASTROBLONDE',
    alcool: 4.8,
    url: 'http://demoryparis.com/astroblonde-48/',
    description: [
      'Gout frais, parfaitement équilibré, avec une agréable amertume en bouche. Une vraie Pils de type allemand, au goût sec et malteux, dans laquelle il est possible de sentir un léger gout de miel.'
    ],
    brewery: { id: 'n1dnqrl', name: 'Demory Paris' }
  },
  {
    id: 'n1inqvy',
    name: 'ALTITUDE',
    alcool: 4.7,
    url: 'http://demoryparis.com/altitude-altbier/',
    description: [
      'Signifiant vieux" en allemand, le style Alt est la bière embléma tique de la ville de Düsseldorf au bord du Rhin. Ce style peut aussi être comparé à des ales anglaises rouges et surprend avec sa douceur. La Altitude est à la fois amère et maltée et c\'est une biere très équilibrée.'
    ],
    brewery: { id: 'n1dnqrl', name: 'Demory Paris' }
  },
  {
    id: 'n1jnq3u',
    name: 'NOVA NOIRE',
    alcool: 4.7,
    url: 'http://demoryparis.com/nova-noire-47/',
    description: [
      'Au goût torréfié et malteux, cette bière rafraichissante surprend par sa douceur et sa légèreté. Aromes de caramel, pain et café coupé par des notes herbacées, légèrement amères.'
    ],
    brewery: { id: 'n1dnqrl', name: 'Demory Paris' }
  },
  {
    id: 'n1knq4m',
    name: 'COSMOBLONDE',
    alcool: 4.7,
    url: 'http://demoryparis.com/cosmoblonde-47/',
    description: [
      "Plus douce et harmonieuse qu'une Pils,classique\", la Cosmoblonde (non filtrée) est une bière légère et rafraîchissante. Elle est agréablement amère, aux notes fruitées, herbacées, d'agrumes et de céréales."
    ],
    brewery: { id: 'n1dnqrl', name: 'Demory Paris' }
  },
  {
    id: 'n1lnqry',
    name: 'ATOMIQUE',
    alcool: 6.5,
    url: 'http://demoryparis.com/atomique-65/',
    description: [
      "Texture riche et chaleureuse. L'Atomique est une bière de caractère, tres douce et équilibrée. Très peu amère aux notes caramélisées, légèrement alcoolisées et sucrées."
    ],
    brewery: { id: 'n1dnqrl', name: 'Demory Paris' }
  },
  {
    id: 'n1mnqyk',
    name: 'SAINTE GENEVIÈVE',
    alcool: 7.8,
    url: 'http://demoryparis.com/sainte-genevieve-triple/',
    description: [
      'Brassée selon la tradition des bières triples belges, notre Sainte Geneviève est néanmoins une vraie biere parisienne et porte fièrement le nom de la sainte patronne de la ville de Paris. Une vraie triple belge savoureuse et chaleureuse, grâce à sa levure et ses esters dominants.'
    ],
    brewery: { id: 'n1dnqrl', name: 'Demory Paris' }
  },
  {
    id: 'n1nnqhk',
    name: 'PRODIGE IPA SANS ALCOOL',
    alcool: 0.9,
    url: 'http://demoryparis.com/prodige-ipa-sans-alcool/',
    description: [
      'Prodigy, Wunderkind, Prodige... Une bonne bière sans alcool, ca existe enfin. La Prodige est une véritable Session IPA aux aromes fruités et herbacés et avec une amertume bien prononcée.'
    ],
    brewery: { id: 'n1dnqrl', name: 'Demory Paris' }
  },
  {
    id: 'n1onq96',
    name: 'INTRÉPIDE IPA',
    alcool: 6.3,
    url: 'http://demoryparis.com/intrepide-ipa-63/',
    description: [
      "Concue pour résister aux longs voyages en bateau entre l'Angleterre et l'Inde, la India Pale Ale est une bière plus forte et beaucoup plus houblonnée que la moyenne. On y retrouve une prédominance des arômes fruités et une amertume prononcée."
    ],
    brewery: { id: 'n1dnqrl', name: 'Demory Paris' }
  },
  {
    id: 'n1pnqrl',
    name: 'HÉROÏQUE DIPA',
    alcool: 8,
    url: 'http://demoryparis.com/heroique-dipa/',
    description: [
      "Double dry-hopped et pleins de houblons d'arôme et d'amertume: Cette bière est une bombe de houblon. Une explosion d'arômes accompagnée par un corps chaleureux et malté, notre Héroique Double IPA s'adresse clairement à l'héroïne) en vous."
    ],
    brewery: { id: 'n1dnqrl', name: 'Demory Paris' }
  },
  {
    id: 'n1rnq33',
    name: 'Sphinx',
    alcool: 4.5,
    url: 'https://brasseriedeletre.paris/',
    description: [
      'SPHINX : Un nom des sables, de vents brûlants, d’énigmes légendaires, un nom idéal pour une bière légère, à la douce amertume, fille des expériences érudites d’un mystérieux EDMOND EPSILON. À quoi rêvait-il dont le sphinx serait la solution ?'
    ],
    brewery: { id: 'n1qnq57', name: "Brasserie de l'Être" }
  },
  {
    id: 'n1snq5h',
    name: 'Salamandra',
    alcool: 6.5,
    url: 'https://brasseriedeletre.paris/',
    description: [
      'Tachetée de noir et or, la SALAMANDRE est fille du feu. Les brasseurs de L’Être ont soumis la petite créature pour une bière de saison, légère et désaltérante. Heureusement, nous n’avons gardé de sa chaleur terrible que celle qu’on ressent entre amis autour d’un verre de soleil liquide. Aventureux, mais prudent.'
    ],
    brewery: { id: 'n1qnq57', name: "Brasserie de l'Être" }
  },
  {
    id: 'n1tnq71',
    name: 'Oliphant',
    alcool: 6.5,
    url: 'https://brasseriedeletre.paris/',
    description: [
      'Le cornac indien du vieil Oliphant Jerakine bu un jour une IPA, il la trouva tellement à son goût qu’il voulu en acquérir une grande quantité. “Combien j’en veux ? Assez pour remplir mon Oliphant, là… Jéri… Jira… Jérakine!” Ayant mal compris, les brasseurs lui remplir ce qu’ils avaient de plus volumineux, un bidon de 25 litres qui acquit par un caprice linguistique le nom de l’Oliphant Jerakine.'
    ],
    brewery: { id: 'n1qnq57', name: "Brasserie de l'Être" }
  },
  {
    id: 'n1unqhr',
    name: 'Cerberus',
    alcool: 7.5,
    url: 'https://brasseriedeletre.paris/',
    description: [
      '“Attention au chien” : la bière qui vous saute à la gueule! Cerbère, le chien à 3 têtes, nous a inspiré la cave CANEM CERBERUS, une bière à triple fermentation à la fois maltée et houblonnée. Découvrez la CERBERUS, la bière domptée mais pas muselée !'
    ],
    brewery: { id: 'n1qnq57', name: "Brasserie de l'Être" }
  },
  {
    id: 'n1vnqyt',
    name: 'Feond',
    alcool: 8.5,
    url: 'https://brasseriedeletre.paris/',
    description: [
      'Bière brassée pour les Ombres d’Esteren (studio de jeux de rôle) « La bière du Feond est sombre, complexe et énigmatique. Cette bière sèche, puissante, aux arôme torréfiés et aux senteurs résineuses vous emmène dans les forêts profondes de Tri-Kazel.» Genre IMPERIAL DARK SAISON !'
    ],
    brewery: { id: 'n1qnq57', name: "Brasserie de l'Être" }
  },
  {
    id: 'n1xnq4b',
    name: 'La Lucite',
    alcool: 4.2,
    url: 'http://www.brasserie-la-baleine.com/',
    description: [
      'Bière blonde travaillée avec des malts blonds et caramels, des plantes aromatiques.',
      'Note de citron / anis.',
      "Idée d'association : viande blanche, grillades, crustacés, charcuterie."
    ],
    brewery: { id: 'n1wnqpo', name: 'Brasserie La Baleine' }
  },
  {
    id: 'n1ynqj8',
    name: 'La Gitane',
    alcool: 5,
    url: 'http://www.brasserie-la-baleine.com/',
    description: [
      'Bière ambrée fumée à la tourbe.',
      "Idée d'association : fromage fumé ou non, poisson cru, charcuterie."
    ],
    brewery: { id: 'n1wnqpo', name: 'Brasserie La Baleine' }
  },
  {
    id: 'n1znqm1',
    name: 'La Picaro',
    alcool: 5,
    url: 'http://www.brasserie-la-baleine.com/',
    description: [
      'Bière blanche aux 4 malts de différentes céréales ( malt de seigle, orge, blé et épeautre).',
      'Note de pomme / pamplemousse.',
      "Idée d'association : foie gras, fromages pâte dur."
    ],
    brewery: { id: 'n1wnqpo', name: 'Brasserie La Baleine' }
  },
  {
    id: 'n110nqre',
    name: "L'Arrache Coeur",
    alcool: 5,
    url: 'http://www.brasserie-la-baleine.com/',
    description: [
      'Bière ambrée houblonnée et poivre.',
      "Idée d'association : charcuterie, plat asiatique, fish and chips."
    ],
    brewery: { id: 'n1wnqpo', name: 'Brasserie La Baleine' }
  },
  {
    id: 'n111nqwd',
    name: "Fête l'Amour",
    alcool: 4.2,
    url: 'http://www.brasserie-la-baleine.com/',
    description: [
      "Base de bière blanche travaillée avec des fleurs d'hibiscus et de la noix de muscade.",
      'Bière aérienne, fine et florale.'
    ],
    brewery: { id: 'n1wnqpo', name: 'Brasserie La Baleine' }
  },
  {
    id: 'n112nqoa',
    name: 'La Phare',
    alcool: 5,
    url: 'http://www.brasserie-la-baleine.com/',
    description: [
      'Bière brune aux malts torréfiés, café et chocolat, épices.',
      "Idée d'association : fruit sec, dessert, plat en sauce, pot au feu."
    ],
    brewery: { id: 'n1wnqpo', name: 'Brasserie La Baleine' }
  },
  {
    id: 'n113nq67',
    name: 'Volute',
    alcool: 5,
    url: 'http://www.brasserie-la-baleine.com/',
    description: [
      'Bière brune au sel volcanique, cardamome et un bouquet de feuilles séchées.',
      "Idée d'association : met de poisson cru, pot-au-feu."
    ],
    brewery: { id: 'n1wnqpo', name: 'Brasserie La Baleine' }
  },
  {
    id: 'n114nq2a',
    name: 'Cru 1910',
    alcool: 5,
    url: 'http://www.brasserie-la-baleine.com/',
    description: [
      'Base de bière blanche travailler avec 4 malts de céréales et un assemblage de levure de brasserie et de boulanger.',
      "Idée d'association : huitres"
    ],
    brewery: { id: 'n1wnqpo', name: 'Brasserie La Baleine' }
  },
  {
    id: 'n115nqu2',
    name: 'Cru 1924',
    alcool: 5,
    url: 'http://www.brasserie-la-baleine.com/',
    description: [
      'Bière brune travaillée avec un assemblage de levures de boulanger et brassicole',
      'Note de melon mûr, melon au porto.',
      "Idée d'association : côté de bœuf , bœuf bourguignon."
    ],
    brewery: { id: 'n1wnqpo', name: 'Brasserie La Baleine' }
  },
  {
    id: 'n117nq2p',
    name: 'PARISIS BLONDE',
    alcool: 6.5,
    url: 'http://brasserie-parisis.com/les-classiques/',
    description: [
      'Bière blonde fruitée, aux notes houblonnées délicates.',
      "Un houblonnage à cru avec variétés spécifques lui conférence des arômes d'agrumes et de fruits tropicaux."
    ],
    brewery: { id: 'n116nqjm', name: 'Brasserie Parisis' }
  },
  {
    id: 'n118nqpo',
    name: 'PARISIS BLANCHE',
    alcool: 4.1,
    url: 'http://brasserie-parisis.com/les-classiques/',
    description: [
      'Bière de blé légèrement épicée. Bière surprenante aux notes fruitées et acidulées. Légère et rafraichissante.'
    ],
    brewery: { id: 'n116nqjm', name: 'Brasserie Parisis' }
  },
  {
    id: 'n119nqxf',
    name: 'PARISIS AMBRÉE',
    alcool: 6.2,
    url: 'http://brasserie-parisis.com/les-classiques/',
    description: [
      'Bière ambrée aux notes caramel et saveur de biscuit.',
      'Houblonnage franc et équilibre.'
    ],
    brewery: { id: 'n116nqjm', name: 'Brasserie Parisis' }
  },
  {
    id: 'n11anqoj',
    name: 'PSYCHOTIC PALE ALE',
    alcool: 5,
    url: 'http://brasserie-parisis.com/les-classiques/',
    description: [
      "Bière légère, houblonnée et rafraichissante. Une amertume franche en première bouche suivie par des arômes d'agrumes et fruits exotiques, finale sèche."
    ],
    brewery: { id: 'n116nqjm', name: 'Brasserie Parisis' }
  },
  {
    id: 'n11bnqfj',
    name: 'IPA SOUS SÉNART',
    alcool: 7.6,
    url: 'http://brasserie-parisis.com/les-speciales/',
    description: [
      "Bière abondamment houblonnée à l'amertume vigoureuse, mise en balance par de notes résineuses et fruitées.",
      'Hautement recommandée aux amateurs de houblons.'
    ],
    brewery: { id: 'n116nqjm', name: 'Brasserie Parisis' }
  },
  {
    id: 'n11cnqh0',
    name: 'IPARISIS',
    alcool: 6.2,
    url: 'http://brasserie-parisis.com/les-speciales/',
    description: [
      'Indian pale ale douce aux parfums généreux de fruits exotiques.'
    ],
    brewery: { id: 'n116nqjm', name: 'Brasserie Parisis' }
  },
  {
    id: 'n11dnqkp',
    name: 'MORTAL KAWA',
    alcool: 9.5,
    url: 'http://brasserie-parisis.com/les-speciales/',
    description: [
      'Stout vivement houblonné et délicatement infusé au café.',
      'Aux arômes enivrants de café, ce stout est réservé aux amateurs de sensations fortes.'
    ],
    brewery: { id: 'n116nqjm', name: 'Brasserie Parisis' }
  },
  {
    id: 'n11enq0p',
    name: 'SMASH',
    alcool: 5,
    url: 'http://brasserie-parisis.com/les-speciales/',
    description: [
      "Single Malt Single Hop: Pale ale conçue pour mettre en avant l'aspect unique du houblon utilisé."
    ],
    brewery: { id: 'n116nqjm', name: 'Brasserie Parisis' }
  },
  {
    id: 'n21fnqul',
    name: 'HOP SAVE THE QUEEN',
    alcool: 5.6,
    url: 'http://brasserie-parisis.com/les-speciales/',
    description: [
      'Indian pale ale de style anglais, brassée aux houblons anglais classiques.'
    ],
    brewery: { id: 'n116nqjm', name: 'Brasserie Parisis' }
  },
  {
    id: 'n21hnq1q',
    name: 'Weissbier',
    alcool: 5.2,
    url: 'https://www.galliaparis.com/bieres/weissbier',
    description: [
      'Notre bière de blé doit son nom à sa levure spécifique d’origine bavaroise qui lui apporte son goût caractéristique et son trouble naturel.'
    ],
    brewery: { id: 'n21gnqsq', name: 'Galia Paris' }
  },
  {
    id: 'n21inqs1',
    name: 'West IPA',
    alcool: 6,
    url: 'https://www.galliaparis.com/bieres/west-ipa',
    description: [
      'Notre West IPA utilisent 5 houblons américains dont principalement le Simcoe qui lui offrent des notes d’agrumes et des arômes plus herbacées que son homologue de la côte est des États-Unis. Le houblonnage se fait à ébullition mais aussi à froid (dry hopping) grâce à la technologie du Hopgun qui permet d’affiner l’extraction des propriétés aromatiques des houblons.'
    ],
    brewery: { id: 'n21gnqsq', name: 'Galia Paris' }
  },
  {
    id: 'n21jnqyt',
    name: 'Corde Sensible BA',
    alcool: 13.2,
    url: 'https://www.galliaparis.com/bieres/corde-sensible-ba',
    description: [
      'Un Russian Imperial Stout vieilli dans des fûts de wisky qui a flirté avec 60kg de grains de chez «Terres de café». Illustration de l’étiquette par Fabienne Wagenaar.'
    ],
    brewery: { id: 'n21gnqsq', name: 'Galia Paris' }
  },
  {
    id: 'n21knqmb',
    name: 'Karea',
    alcool: 4.4,
    url: 'https://www.galliaparis.com/bieres/karea',
    description: [
      'On met de nouveau notre grain de sel dans une Gose, au citron vert cette fois. Le résultat: une bière saline avec une belle rondeur grâce à la coriandre, de la fraîcheur et de l’acidité grâce au citron.'
    ],
    brewery: { id: 'n21gnqsq', name: 'Galia Paris' }
  },
  {
    id: 'n21lnqi5',
    name: 'Le Champ Sauvage',
    alcool: 5,
    url: 'https://www.galliaparis.com/bieres/le-champ-sauvage',
    description: [
      'Des malts d’orge et de blé, un petit goût de yaourt, “sehr” typique, et une bonne dose de groseille. Une bière comme un soir d’été, aussi acidulée qu’un bonbon et légère qu’un nuage, bref un truc à tomber. Illustration de l’étiquette par Fabienne Wagenaar.'
    ],
    brewery: { id: 'n21gnqsq', name: 'Galia Paris' }
  },
  {
    id: 'n21mnqwd',
    name: 'Lager',
    alcool: 5.5,
    url: 'https://www.galliaparis.com/bieres/lager',
    description: [
      "C'est la lager historique de Paris, celle par laquelle l'aventure Gallia à recommencé en 2009. Inspirée d'une recette de la brasserie Gallia de 1890, elle est brassée à partir de malt « Pilsner ». Le goût de cette bière de fermentation basse est relevé par ses houblons sélectionnés qui lui apportent de délicates saveurs florales et épicées."
    ],
    brewery: { id: 'n21gnqsq', name: 'Galia Paris' }
  },
  {
    id: 'n21nnqcr',
    name: 'Njut',
    alcool: 4,
    url: 'https://www.galliaparis.com/bieres/njut',
    description: [
      'Njut, prononcé « niout », est un hommage à la famille de notre brasseur adoré, Rémy. Cette Berliner Weisse a été houblonnée à froid avec des fleurs de sureau cueillies par sa mère dans les forêts sauvages d’Örebro. Illustration de l’étiquette par Fabienne Wagenaar.'
    ],
    brewery: { id: 'n21gnqsq', name: 'Galia Paris' }
  },
  {
    id: 'n21onq8e',
    name: 'East IPA',
    alcool: 6,
    url: 'https://www.galliaparis.com/bieres/east-ipa',
    description: [
      "Inspirée du style New England IPA, cette bière est marquée par sa fraîcheur et son intensité aromatique. L'avoine et le blé lui confèrent une texture veloutée."
    ],
    brewery: { id: 'n21gnqsq', name: 'Galia Paris' }
  },
  {
    id: 'n21pnq5i',
    name: 'Carioca',
    alcool: 4.5,
    url: 'https://www.galliaparis.com/bieres/carioca',
    description: [
      'Cette Berliner Weisse n’est pas sans évoquer les cueillettes estivales de notre enfance. Des notes fruitées, de l’acidité, voilà une bière faite pour l’été indien ! Illustration de l’étiquette par Fabienne Wagenaar.'
    ],
    brewery: { id: 'n21gnqsq', name: 'Galia Paris' }
  },
  {
    id: 'n21qnqj9',
    name: 'Red Star x Gallia',
    alcool: 5.6,
    url: 'https://www.galliaparis.com/bieres/red-star-x-gallia',
    description: [
      'Cette bière a été conçue par amour du Red Star, le club de foot emblématique du 93. L’accent est mis sur les notes aromatiques des malts d’orge qui lui donnent à la fois sa douceur caramélisée et sa robe ambrée. Illustration de l’étiquette par Fabienne Wagenaar.'
    ],
    brewery: { id: 'n21gnqsq', name: 'Galia Paris' }
  },
  {
    id: 'n21rnqe0',
    name: 'Session IPA',
    alcool: 4.3,
    url: 'https://www.galliaparis.com/bieres/session-ipa',
    description: [
      'Une IPA désaltérante légère en alcool, à déguster à tout moment de la journée. Son aromatique est portée par les houblons américains.'
    ],
    brewery: { id: 'n21gnqsq', name: 'Galia Paris' }
  },
  {
    id: 'n21snq8c',
    name: 'Brut IPA',
    alcool: 7,
    url: 'https://www.galliaparis.com/bieres/brut-ipa',
    description: [
      "Une IPA sèche en bouche qui se rapproche d'un pétillant brut. Elle s'en éloigne cependant par les arômes apportés par les houblons."
    ],
    brewery: { id: 'n21gnqsq', name: 'Galia Paris' }
  },
  {
    id: 'n21unqrj',
    name: 'ALABAMA',
    alcool: 3.1,
    url: 'http://brasserielagouttedor.com/bieres/alabama/',
    description: [
      'Cette Brown Porter a été brassée dans l’idée de se rapprocher le plus possible à ce qu’était les Porters lors de la première apparition du « Style ». C’est une bière foncé mais très légère à la fois, (3,1% Alc/Vol) et intense en gout. Brassée avec du malt, du houblon et des levures traditionnels britannique.',
      'Toutes les arômes du malt vont envahir votre bouche et venir vous réconforter pour attaquer l’hiver.'
    ],
    brewery: { id: 'n21tnqw8', name: "Brasserie de la Goutte d'Or" }
  },
  {
    id: 'n21vnq62',
    name: 'LE ROI DES MOUCHES',
    alcool: null,
    url: 'http://brasserielagouttedor.com/bieres/le-roi-des-mouches/',
    description: [
      'Le Roi des mouches, c’est en s’inspirant de l’environnement Bruxellois que nous en sommes venus à concevoir cette jolie saison sauvage, elle met en valeur la complexité des levures et la douceur du sureau fraîchement cueilli. Elle est aussi cosmopolite que transcendante, plutôt qu’un pèlerinage vers le nord elle vous emmènera aux confins du voyage gustatif'
    ],
    brewery: { id: 'n21tnqw8', name: "Brasserie de la Goutte d'Or" }
  },
  {
    id: 'n21wnq6t',
    name: 'MERINGUE',
    alcool: null,
    url: 'http://brasserielagouttedor.com/bieres/meringue/',
    description: [
      'IPA DDH ( double houblonnage à crue), brassé avec du lactose pour plus de corpulence, refermenté sur du sudachi et yuzu.'
    ],
    brewery: { id: 'n21tnqw8', name: "Brasserie de la Goutte d'Or" }
  },
  {
    id: 'n21xnqzd',
    name: 'BLE D’INDE',
    alcool: null,
    url: 'http://brasserielagouttedor.com/bieres/ble-dinde/',
    description: [
      'Blé d’inde est notre pale ale massivement houblonnée à crue avec des cultivars américain très aromatique et soutenue par une base de maïs violet pour en faire une bière hautement rafraîchissante et désaltérante. A partager lors d’épluchettes ou tout autre occasion festive !'
    ],
    brewery: { id: 'n21tnqw8', name: "Brasserie de la Goutte d'Or" }
  },
  {
    id: 'n21ynqdp',
    name: 'CREAM',
    alcool: null,
    url: 'http://brasserielagouttedor.com/bieres/cream/',
    description: [
      'Bière de type « california common », gourmande, amertume franche affiné sur du jus et pulpe d’orange et orange amère. Tout ça pour en faire la bière plus que parfaite pour un été chaud & groovy !'
    ],
    brewery: { id: 'n21tnqw8', name: "Brasserie de la Goutte d'Or" }
  },
  {
    id: 'n21znqvw',
    name: 'SUCCUBE',
    alcool: null,
    url: 'http://brasserielagouttedor.com/bieres/succube/',
    description: [
      'Succube revient occuper vos nuits sous la forme cette fois-ci d’une sour célébrant le mariage de l’abricot et de l’estragon (la nommée autrefois herbe dragon) tous les pièges de la tentation vous sont tendus… Résister?.. Not Today !'
    ],
    brewery: { id: 'n21tnqw8', name: "Brasserie de la Goutte d'Or" }
  },
  {
    id: 'n220nq7l',
    name: 'ERNESTINE',
    alcool: null,
    url: 'http://brasserielagouttedor.com/bieres/ernestine/',
    description: [
      'Houblonnée a cru, cette bière au corps malté et à la bouche soyeuse et épicée offre une note de biscuit et caramel. Aux arômes de fruits exotiques et pamplemousse, cette Rye IPA puissante vous laissera le gout de l’Angleterre avec sa longue amertume finale.'
    ],
    brewery: { id: 'n21tnqw8', name: "Brasserie de la Goutte d'Or" }
  },
  {
    id: 'n221nq49',
    name: 'TRUAND',
    alcool: null,
    url: 'http://brasserielagouttedor.com/bieres/truand/',
    description: [
      'American Rice lager. Bière pale de fermentation basse mettant en vedette un houblons différents à chaque brassin.'
    ],
    brewery: { id: 'n21tnqw8', name: "Brasserie de la Goutte d'Or" }
  },
  {
    id: 'n222nqh3',
    name: 'LA SOURCE',
    alcool: null,
    url: 'http://brasserielagouttedor.com/bieres/la-source/',
    description: [
      'C’est un amour en commun pour ce style de bières et de brassage qui nous a permis de convaincre ce savoyard de sortir de ses montagnes pour venir à Paris. C’est à partir d’ingrédients cueillis et produits tout autour de sa brasserie que nous avons créée La Source. Aussi cosmopolite que local elle se rapproche de cet idéal de Brassage que nous cherchons à atteindre.',
      'Cette saison multigrain est brassé avec du miel des alpes et des baies d’églantier. Fermenté avec un cocktail de levure saison et brett nord américaine.'
    ],
    brewery: { id: 'n21tnqw8', name: "Brasserie de la Goutte d'Or" }
  },
  {
    id: 'n223nq9c',
    name: 'YASAMIN',
    alcool: null,
    url: 'http://brasserielagouttedor.com/bieres/yasamin/',
    description: [
      'Sour Ale de Riz et Thé Jasmin, légèreté et croustillance du riz basmati, vivacité du thé vert aux accent tannique et aux notes subtiles de jasmin. Acidité. Une bière complexe, discrète et subtile.'
    ],
    brewery: { id: 'n21tnqw8', name: "Brasserie de la Goutte d'Or" }
  },
  {
    id: 'n224nqeo',
    name: 'SWEET GANESH',
    alcool: null,
    url: 'http://brasserielagouttedor.com/bieres/sweet-ganesh/',
    description: [
      'Ale Dessert à l’Indienne, c’est la douceur épicée d’une gourmandise Indienne camouflée sous l’étouffe d’un white stout britannique, de quoi prendre les voiles vers le Taj Mahal !'
    ],
    brewery: { id: 'n21tnqw8', name: "Brasserie de la Goutte d'Or" }
  },
  {
    id: 'n225nqiw',
    name: 'L’EDEN',
    alcool: null,
    url: 'http://brasserielagouttedor.com/bieres/leden/',
    description: [
      'l’Eden est une association avec les vergers de la silve pour créer une saison sauvage à base de sarrasin et de pommes, le tout fermenté grâce à une souche de levures issue de vergers canadiens. That is cosmopolites folks !'
    ],
    brewery: { id: 'n21tnqw8', name: "Brasserie de la Goutte d'Or" }
  },
  {
    id: 'n226nqgl',
    name: 'CHÂTEAU ROUGE',
    alcool: null,
    url: 'http://brasserielagouttedor.com/bieres/chateau-rouge/',
    description: [
      'Bière rousse épicée aux arômes végétaux de fruits rouges et épices. Les malts Munich et Caramel lui donnent sa rondeur alliée aux saveurs de muscade, poivre, gentiane et trois piments pour un final en fraîcheur.'
    ],
    brewery: { id: 'n21tnqw8', name: "Brasserie de la Goutte d'Or" }
  },
  {
    id: 'n227nqtu',
    name: 'LA CHAPELLE',
    alcool: null,
    url: 'http://brasserielagouttedor.com/bieres/la-chapelle/',
    description: [
      'Bière blanche de blé au Chaï aux parfums de thé indien. Une bière citronnée et épicée, marquée par l’acidité provenant des malts de blé ainsi que par le goût de levure. Une bière originale et rafraîchissante qui vous séduira par sa rondeur et sa complexité.'
    ],
    brewery: { id: 'n21tnqw8', name: "Brasserie de la Goutte d'Or" }
  },
  {
    id: 'n228nq30',
    name: 'L’ASSOMMOIR',
    alcool: null,
    url: 'http://brasserielagouttedor.com/bieres/lassommoir/',
    description: [
      'Bière forte et veloutée, délicatement relevée par des notes de gingembre qui s’associent aux saveurs des malts torréfiés. Son final houblonné lui renforce la longueur en bouche.'
    ],
    brewery: { id: 'n21tnqw8', name: "Brasserie de la Goutte d'Or" }
  },
  {
    id: 'n229nqd0',
    name: 'HERBE BLEUE',
    alcool: null,
    url: 'http://brasserielagouttedor.com/bieres/herbe-bleue/',
    description: [
      'Saison multigrain acidulée, le caractère des levures de saison donne de l’emphase aux céréales et accompagne l’acidité qui donne à cette bière printanière toute son originalité.'
    ],
    brewery: { id: 'n21tnqw8', name: "Brasserie de la Goutte d'Or" }
  },
  {
    id: 'n22anq99',
    name: 'PETITE PIGALLE',
    alcool: null,
    url: 'http://brasserielagouttedor.com/bieres/petite-pigalle/',
    description: [
      'Bière de table brasée en hommage aux cabarets populaires qui peuplent notre imaginaire, Pigalle redevient réalité.'
    ],
    brewery: { id: 'n21tnqw8', name: "Brasserie de la Goutte d'Or" }
  },
  {
    id: 'n22bnqa8',
    name: 'MYRHA',
    alcool: null,
    url: 'http://brasserielagouttedor.com/bieres/myrha-pale-ale/',
    description: [
      'Bière blonde, American Pale Ale aux notes légères de céréales. Sèche, fruitée et modérément amère et totalement aromatique, elle est une belle initiation aux plaisirs houblonnés.'
    ],
    brewery: { id: 'n21tnqw8', name: "Brasserie de la Goutte d'Or" }
  },
  {
    id: 'n22dnqs2',
    name: 'Blonde Pale Ale',
    alcool: 4.4,
    url: 'http://la-montreuilloise.com/bieres/la-blonde/',
    description: [
      'La traditionnelle, la classique, l’incontournable de la gamme de La Montreuilloise.',
      'Généreuse et subtile, ponctuée d’une touche d’amertume, sa robe dorée reste trouble car non filtrée.',
      'Au nez, cette blonde de type Pale Ale dégage des notes de fleurs et d’herbe soulignées d’une pointe d’agrumes apportés par le houblon Cascade.',
      'Agréable, équilibrée, légère, néanmoins excentrique, cette blonde accompagnera avec douceur vos apéros et mets préférés. Vous ne pourrez plus la quitter !'
    ],
    brewery: { id: 'n22cnq3w', name: 'La Montreuilloise' }
  },
  {
    id: 'n22enqjz',
    name: 'Rousse aux raisins fermentés',
    alcool: 5,
    url: 'http://la-montreuilloise.com/bieres/la-rousse/',
    description: [
      'Rafraîchissante, douce et originale, cette Amber Ale sait se faire apprécier tout autant des néophytes que des fins connaisseurs.',
      'Elle a du corps et son équilibre penche du côté du malt et du caramel, par l’alliance du Pale, du Pilsen, des malts caramels et des malts grillés, sans pourtant jamais effacer la légère amertume et les notes florales inspirées par ses houblons anglais (Sovereign).',
      'Cette bière aux fins arômes de raisins Sultanines, ajoutés en début de fermentation, saura vous séduire dès la première goulée… Et vous y reviendrez !'
    ],
    brewery: { id: 'n22cnq3w', name: 'La Montreuilloise' }
  },
  {
    id: 'n22fnqso',
    name: 'Brune Chocolate Stout',
    alcool: 4.8,
    url: 'http://la-montreuilloise.com/bieres/la-brune/',
    description: [
      'Intense, onctueuse et charnue, notre Brune Chocolate Stout dégage des arômes de caramel, de café, de cacao et d’une pointe de vanille.',
      'De couleur très brune, presque noire, cette bière est un mélange de neuf malts relevés de houblons anglais (First Gold), qui la rendent très complexe au goût.'
    ],
    brewery: { id: 'n22cnq3w', name: 'La Montreuilloise' }
  },
  {
    id: 'n22gnq9n',
    name: 'Blanche Witbier',
    alcool: 4.7,
    url: 'http://la-montreuilloise.com/bieres/la-blanche/',
    description: [
      'Légère et très fruitée, la Blanche se boit fraiche, en apéritif ou en accompagnement de fromages de chèvre.',
      'Cette bière de blé de type Witbier, à la robe trouble caractéristique est relevée d’écorces d’oranges et de coriandre, afin de lui donner ses riches arômes.',
      'Les levures ainsi que les houblons traditionnels utilisés (Hallertau Smaragd) lui confèrent un puissante tenue en bouche et de légères notes de fleurs.'
    ],
    brewery: { id: 'n22cnq3w', name: 'La Montreuilloise' }
  },
  {
    id: 'n22hnqrq',
    name: 'Smoked Porter',
    alcool: 5.2,
    url: 'http://la-montreuilloise.com/bieres/smoked-porter/',
    description: [
      'Dans la tradition anglaise, notre Porter fumée arbore une robe sombre et des accents maltés. Elle se caractérise par sa profondeur et son onctuosité tout en restant légère et fruitée. Travaillée avec des malts fumés, elle transmet ses saveurs boisées, présentes mais sans excès',
      'Une bière en parfait accord avec des fromages et charcuteries de caractère.',
      'Elle est travaillée avec des houblons Sovereign et First Gold qui ajoutent leurs belles notes d’épices.',
      'Titrant à 5,2°, c’est une belle bière de dégustation qui vous enverra dans les embruns des Highlands !'
    ],
    brewery: { id: 'n22cnq3w', name: 'La Montreuilloise' }
  },
  {
    id: 'n22inq5s',
    name: 'IPA – Mandarina Bavaria',
    alcool: 4.2,
    url:
      'http://la-montreuilloise.com/bieres/ipa-single-hop-mandarina-bavaria/',
    description: [
      'Venu d’Allemagne, le houblon Mandarina Bavaria est la récente réponse européenne aux houblons américains.',
      'Avec des notes d’agrumes affirmées, tout en gardant la légèreté florale des houblons nobles allemands, il donne à notre IPA un grand équilibre aromatique.',
      'Les malts utilisés (Pilsen, Cara Blond et Froment) viennent donner à cette bière son assise dorée et charnue.'
    ],
    brewery: { id: 'n22cnq3w', name: 'La Montreuilloise' }
  },
  {
    id: 'n22jnq45',
    name: 'PEREGRINA London Ale',
    alcool: 4.5,
    url: 'http://la-montreuilloise.com/bieres/peregrina-london-ale/',
    description: [
      'Qu’est-ce qu’une London Ale ? ',
      'Une recette ancestrale de bière anglaise, une Ale brassée à partir du 18ème siècle à Londres.',
      'Sa caractéristique est d’être une bière blonde cuivrée de fermentation haute dont les houblons aromatiques ont été remplacés par des épices (coriandre, écorce d’orange, gingembre) relevés d’une pointe de sel. A l’amertume et aux arômes floraux elle préfère donc la rondeur et le fruité…',
      'Ronde et fraiche, Peregrina notre proposition de bière de fêtes….',
      'Pourquoi Peregrina ?',
      'Parce que cette bière est une invitation au voyage, dans le temps et à travers la planète avec sa combinaison d’épices et de saveurs. La magnifique étiquette a été réalisée par Sidonie Rocher – dessinatrice montreuilloise.'
    ],
    brewery: { id: 'n22cnq3w', name: 'La Montreuilloise' }
  },
  {
    id: 'n22knqcg',
    name: 'Fleur de Montreuil',
    alcool: 5,
    url: 'http://la-montreuilloise.com/bieres/les-speciales/',
    description: [
      'Saisonnière, Fleur de Montreuil est une bière de blé à la fleur de sureau.',
      'Tout autour de la brasserie, dans notre quartier des Murs à Pêches, des sureaux ont envahi les jardins et les friches. Peu connu, cette plante permet de réaliser de succulents jus, sirops et limonades, mais aussi … de la bière !',
      'La fleur de sureau récoltée à maturité à la fin mai est ensuite ajoutée fraiche en fermentation sur la base d’une belle bière de blé.',
      'Ses accents acidulés et ses notes de chlorophylle rencontrent la douceur rafraichissante des malts (Pilsen, Blé, Avoine), donnant une belle bière de soif.',
      'Brassée au mois de juin, pour être disponible en été, elle revient tout au long de l’année au gré des stocks de fleur de sureau que nous aurons pu glané.'
    ],
    brewery: { id: 'n22cnq3w', name: 'La Montreuilloise' }
  },
  {
    id: 'n22lnq7r',
    name: 'La Grisette',
    alcool: 3.8,
    url: 'http://la-montreuilloise.com/bieres/la-grisette/',
    description: [
      'La Grisette est une bière de type Saison Belge.',
      'Bière de blé, légère (3,8°), sèche et fruitée, elle exprime des notes de pain frais et de fleurs.',
      'Bière d’été, la Grisette est originaire de la province du Hainaut en Belgique.\n        Bière ouvrière, elle était brassée pour étancher la soif des mineurs.',
      'Nous avons souhaité, en vous proposant cette bière, faire (re)découvrir un autre héritage des bières Belges, fait de fraicheur et de légèreté.',
      'L’étiquette de cette bière, hommage à toutes les définitions de la grisette, a été réalisée par Amankaï Araya, graphiste indépendante montreuilloise.'
    ],
    brewery: { id: 'n22cnq3w', name: 'La Montreuilloise' }
  },
  {
    id: 'n22nnqjo',
    name: 'La Parisienne Blanche',
    alcool: 5.5,
    url:
      'http://brasserielaparisienne.com/biere-artisanale-parisienne-classique-blanche/',
    description: [
      'Bière de dégustation légère et désaltérante avec des arômes d’agrumes et de discrètes notes épicées. La bouche, fraîche et élégante, conjugue joliment l’amertume et l’acidité.'
    ],
    brewery: { id: 'n22mnqc5', name: 'La Parisienne' }
  },
  {
    id: 'n22onq6k',
    name: 'La Parisienne Blonde',
    alcool: 5.5,
    url:
      'http://brasserielaparisienne.com/biere-artisanale-parisienne-classique-blonde/',
    description: [
      'Bière de dégustation avec un subtil équilibre entre houblons amérisants et aromatisants, aux délicats arômes d’agrumes.'
    ],
    brewery: { id: 'n22mnqc5', name: 'La Parisienne' }
  },
  {
    id: 'n22pnqt3',
    name: 'La Parisienne Rousse',
    alcool: 5.5,
    url:
      'http://brasserielaparisienne.com/biere-artisanale-parisienne-classique-rousse/',
    description: [
      'Bière de dégustation complexe et subtile, ou s’équilibrent saveurs maltées et amertume.'
    ],
    brewery: { id: 'n22mnqc5', name: 'La Parisienne' }
  },
  {
    id: 'n22qnqkl',
    name: 'La Parisienne Brune',
    alcool: 5.5,
    url:
      'http://brasserielaparisienne.com/biere-artisanale-parisienne-classique-brune/',
    description: [
      'Bière de dégustation ronde et capiteuse, aux arômes maltés de café et chocolat avec un bel équilibre entre la richesse et l’amertume.'
    ],
    brewery: { id: 'n22mnqc5', name: 'La Parisienne' }
  },
  {
    id: 'n22rnqzs',
    name: 'La Parisienne Bio Blanche',
    alcool: 5.5,
    url:
      'http://brasserielaparisienne.com/biere-artisanale-parisienne-bio-blanche/',
    description: [
      'Bière de dégustation légère et désaltérante aux arômes maltés et floraux, apportés par du houblon français et de l’hydrolat de rose.'
    ],
    brewery: { id: 'n22mnqc5', name: 'La Parisienne' }
  },
  {
    id: 'n22snqh6',
    name: 'La Parisienne Bio Blonde',
    alcool: 5.5,
    url:
      'http://brasserielaparisienne.com/biere-artisanale-parisienne-bio-blonde/',
    description: [
      'Bière de dégustation ronde et subtile aux arômes de thym et d’herbe fraîche, apportés par du houblon français et un assemblage de 3 céréales.'
    ],
    brewery: { id: 'n22mnqc5', name: 'La Parisienne' }
  },
  {
    id: 'n22tnq8n',
    name: 'La Parisienne Libérée',
    alcool: 5.5,
    url:
      'http://brasserielaparisienne.com/biere-artisanale-parisienne-speciale-parisienne-liberee-lager/',
    description: [
      'Bière de dégustation légère et désaltérante, aux arômes houblonnés et floraux avec une amertume subtile.'
    ],
    brewery: { id: 'n22mnqc5', name: 'La Parisienne' }
  },
  {
    id: 'n22unql0',
    name: 'Le Titi Parisien',
    alcool: 5.5,
    url:
      'http://brasserielaparisienne.com/biere-artisanale-parisienne-speciale-titi-parisien-ipa/',
    description: [
      'Bière de dégustation complexe et généreuse, avec des arômes maltés et briochés qui enrobent délicatement l’amertume.'
    ],
    brewery: { id: 'n22mnqc5', name: 'La Parisienne' }
  },
  {
    id: 'n22vnqqd',
    name: 'l’Apache 2.0',
    alcool: 7.5,
    url:
      'http://brasserielaparisienne.com/biere-artisanale-parisienne-speciale-apache-stout/',
    description: [
      'L’Apache est une bière ronde brassée à partir de grains hautement torréfiés. Avant la filtration, le brasseur ajoute le café fraichement moulu. En résulte une belle aromatique (café, tonka).'
    ],
    brewery: { id: 'n22mnqc5', name: 'La Parisienne' }
  },
  {
    id: 'n22xnqmd',
    name: 'IPA CITRA GALACTIQUE',
    alcool: 6.5,
    url: 'https://www.bgp.paris/7/nos-bieres',
    description: [
      "Nous avons conçu l'IPA Citra Galactique à partir d'une sélection de nos houblons favoris. Ils donnent à cette bière des notes explosives de citron et de fruits tropicaux, dont l'amertume s'éteint sur une touche finale sèche."
    ],
    brewery: { id: 'n22wnq7m', name: 'Brasserie du Grand Paris' }
  },
  {
    id: 'n22ynq2u',
    name: "À L'OUEST",
    alcool: 4.7,
    url: 'https://www.bgp.paris/7/nos-bieres',
    description: [
      'A l’Ouest est une bière aux notes florales et fruitées à laquelle l’apport de malt de blé confère une fraîcheur en bouche et un trouble naturel. Son nom est un clin d’oeil à nos familles et amis du Pays Bigouden.'
    ],
    brewery: { id: 'n22wnq7m', name: 'Brasserie du Grand Paris' }
  },
  {
    id: 'n22znq5g',
    name: 'NICE TO MEET YOU',
    alcool: 8.5,
    url: 'https://www.bgp.paris/7/nos-bieres',
    description: [
      "Nice to Meet You est une bière créée pour ceux qui estiment qu’assez de houblon... c'est encore trop peu ! Du premier arôme à la dernière goutte, rien ne viendra atténuer la puissance des cinq variétés de houblons qui composent cette Double IPA."
    ],
    brewery: { id: 'n22wnq7m', name: 'Brasserie du Grand Paris' }
  },
  {
    id: 'n230nqsl',
    name: 'DENISE',
    alcool: 5.5,
    url: 'https://www.bgp.paris/7/nos-bieres',
    description: [
      'Denise est une bière de dégustation dorée aux arômes complexes dominés par des notes d’agrumes et à l’amertume équilibrée. Sa recette est une variante de celle de notre première bière : La Levalloise. Son nom est un clin d’oeil à la ville où nous avons installé nos cuves en 2017.'
    ],
    brewery: { id: 'n22wnq7m', name: 'Brasserie du Grand Paris' }
  },
  {
    id: 'n231nqy4',
    name: 'WAIMEA BAY',
    alcool: 4.7,
    url: 'https://www.bgp.paris/7/nos-bieres',
    description: [
      "Dans Waimea Bay, nous avons associé les houblons Waimea et Mosaic pour créer une bière rafraîchissante, aux notes de citron et de fruits de la passion. L'ajout de flocons d'avoine (Oatmeal) la dote d'une texture crémeuse, d'une mousse persistante, et lui confère un léger trouble."
    ],
    brewery: { id: 'n22wnq7m', name: 'Brasserie du Grand Paris' }
  },
  {
    id: 'n232nqvv',
    name: "L'EXPRESS",
    alcool: 4.5,
    url: 'https://www.bgp.paris/7/nos-bieres',
    description: [
      "Alliant des notes fruitées à une amertume modérée, l'Express est une bière rafraîchissante. Élaborée dans notre brasserie de Saint-Denis, près de la voie ferrée, c'est un aller simple pour l'univers des bières artisanales."
    ],
    brewery: { id: 'n22wnq7m', name: 'Brasserie du Grand Paris' }
  },
  {
    id: 'n233nqc8',
    name: 'SMOKE ON THE WATER',
    alcool: 6,
    url: 'https://www.bgp.paris/7/nos-bieres',
    description: [
      'La Smoke on the Water est composée de trois malts traditionnels: le malt pils pour une base aux accents de céréales et de miel, le malt Munich pour la touche toastée et enfin une pointe de Rauchmalt délivrant des notes élégantes de hêtre fumé légères au nez comme en bouche.'
    ],
    brewery: { id: 'n22wnq7m', name: 'Brasserie du Grand Paris' }
  },
  {
    id: 'n234nqgs',
    name: 'PORTE DOREE',
    alcool: 5.2,
    url: 'https://www.bgp.paris/7/nos-bieres',
    description: [
      'La Porte Dorée doit sa robe rouge ambrée à un mélange de cinq malts. Des saveurs de pain et de caramel se marient à un mélange de houblons aux notes épicées et citronnées pour composer cette bière complexe et équilibrée. Son nom est un hommage à San Francisco, et à ce pont que nous avons souvent emprunté.'
    ],
    brewery: { id: 'n22wnq7m', name: 'Brasserie du Grand Paris' }
  },
  {
    id: 'n236nqzp',
    name: 'Simone ',
    alcool: 5.4,
    url: 'http://www.triangleparis.com/#bieres',
    description: ['Pale Ale'],
    brewery: { id: 'n235nq6p', name: 'Le Triangle' }
  },
  {
    id: 'n237nqzy',
    name: 'Gryesette ',
    alcool: 5.7,
    url: 'http://www.triangleparis.com/#bieres',
    description: ['Grisette au seigle'],
    brewery: { id: 'n235nq6p', name: 'Le Triangle' }
  }
];
