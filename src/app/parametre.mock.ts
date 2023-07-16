export interface IVoyage {
  id: number;
  country: string;
  city: string;
  goDate?: Date | null;
  backDate?: Date | null;
  image: string;
  imageGalerie: IimageGalerie[];
  voyage: string[];
  description: string[];
  avisPositive: string[];
  avisNegatif: string[];
  conseil: string[];
}
export interface IimageGalerie {
  id: number;
  titre: string;
  picture: string;
}

export const IVOYAGES: IVoyage[] = [
  {
    id: 1,
    country: 'Maroc',
    city: 'Marrakech',
    goDate: new Date(2023, 4, 14),
    backDate: new Date(2023, 4, 24),
    image: 'assets/photos/maroc/maroc1.jpg',
    imageGalerie: [
      {
        id: 1,
        titre: 'Maroc,désert avec des chameaux',
        picture: 'assets/photos/maroc/maroc2.jpg',
      },
      {
        id: 2,
        titre: 'Maroc, désert la nuit , des gens autours de feu',
        picture: 'assets/photos/maroc/maroc3.jpg',
      },
      {
        id: 3,
        titre: 'Maroc,la rue',
        picture: 'assets/photos/maroc/maroc4.jpg',
      },
      {
        id: 4,
        titre: 'Maroc, la rue aves des tapis',
        picture: 'assets/photos/maroc/maroc5.jpg',
      },
      {
        id: 5,
        titre: 'Maroc, piscine ,hotel',
        picture: 'assets/photos/maroc/maroc6.jpg',
      },
      {
        id: 6,
        titre: 'Maroc, mosaique',
        picture: 'assets/photos/maroc/maroc7.jpg',
      },
      {
        id: 7,
        titre: "Maroc, cours d'interieure",
        picture: 'assets/photos/maroc/maroc8.jpg',
      },
      {
        id: 8,
        titre: "Maroc,chameau",
        picture: 'assets/photos/maroc/maroc9.jpg',
      },
      {
        id: 9,
        titre: "Maroc,boutique d'epices",
        picture: 'assets/photos/maroc/maroc10.jpg',
      },
      {
        id: 10,
        titre: "Maroc,dunes de désert",
        picture: 'assets/photos/maroc/maroc11.jpg',
      }
    ],
    voyage: ['xx'],
    description: [
      "Marrakech... rien que son nom permet de s'évader et promet tout un programme.\n Marrakech, également appelée la ville rouge est une destination phare du Maroc. \nEt pour cause : ville animée, de culture, de divertissements, d'histoire, d'architecture, c'est un lieu où tout est possible. \nIl existe en effet différents types de séjour : voyage romantique pour les couples, voyage en famille, voyage culturel, voyage insolite... \nMarrakech est l'une des rares destinations réunissant les différents critères exigés par ces profils de voyageurs diamétralement opposés. \nSon histoire intense laisse une grande place à la culture dans cette ville que l'on connaît aussi bien sous le nom de ville rouge que ville ocre ou perle du sud. Ses paysages dont la beauté est à vous couper le souffle promettent de forts moments de romantisme. Son caractère permet quant à lui à ses visiteurs de ne pas s'ennuyer une seconde entre l'animation de ses souks ou les spectacles nocturnes dans les différents quartiers de la ville.",
    ],
    avisPositive: [
      "L'ancienne cité jardin a conservé la tradition de somptueux espaces verts.",
      "L'hôtel très sympa",
      "L'équipe d'animation excellente",
      ' Beaucoup de lieux touristiques accessibles à pied.',
    ],
    avisNegatif: ['les chambres bruillants'],
    conseil: ["Il est recommmandé de ne pas boire l'eau du robine"],
  },
  {
    id: 2,
    country: 'Pologne',
    city: 'Cracovie',
    goDate: new Date(2023, 5, 7),
    backDate: new Date(2023, 5, 12),
    image: 'assets/photos/pologne/pologne1.jpg',
    imageGalerie: [
      {
        id: 1,
        titre: 'Pologne,la ville',
        picture: 'assets/photos/pologne/pologne2.jpg',
      },
      {
        id: 2,
        titre: 'Pologne, désert la nuit , des gens autours de feu',
        picture: 'assets/photos/pologne/pologne3.jpg',
      },
      {
        id: 3,
        titre: 'Pologne, désert la nuit , des gens autours de feu',
        picture: 'assets/photos/pologne/pologne4.jpg',
      },
      {
        id: 4,
        titre: 'Pologne, désert la nuit , des gens autours de feu',
        picture: 'assets/photos/pologne/pologne5.jpg',
      },
      {
        id: 5,
        titre: 'Pologne, désert la nuit , des gens autours de feu',
        picture: 'assets/photos/pologne/pologne6.jpg',
      },
      {
        id: 6,
        titre: 'Pologne, désert la nuit , des gens autours de feu',
        picture: 'assets/photos/pologne/pologne7.jpg',
      },
      {
        id: 7,
        titre: 'Pologne, désert la nuit , des gens autours de feu',
        picture: 'assets/photos/pologne/pologne8.jpg',
      },
      {
        id: 8,
        titre: 'Pologne, désert la nuit , des gens autours de feu',
        picture: 'assets/photos/pologne/pologne9.jpg',
      },
    ],
    voyage: ["L'ancienne capitale de la Pologne et le siège des rois polonais, Cracovie, fondée par le mythique Krak, est l'une des plus anciennes villes du pays. Etablie sur la Vistule (Wisla), elle est la capitale de la région de Małopolska. Cracovie est un véritable joyau du patrimoine culturel national qui attire une foule de touristes du monde entier",
    "Cracovie est l’un des joyaux d’Europe Centrale. Elle regorge d’églises, de musées et de palais en un formidable éventail de styles, du gothique au baroque."
    ],
    description: [
      'Classée au Patrimoine mondial de l’UNESCO dès 1978, ville de légendes et de monuments inestimables, Cracovie est aussi une ville qui sait faire la fête et enchante au premier regard.\nLe quartier de Kazimierz, qui jouxte la vieille ville, avait été - du XIVe eu XIXe siècle une ville indépendante,  Pour les habitants et les touristes, Kazimierz, c’est avant tout un salon avec ses clubs, ses pubs et ses restaurants dont certains proposent des plats traditionnels casher.',
      'Cracovie est une belle  ville, agreable et a taille humaine, une fois que tu connais du monde, il arrive souvent de rencontrer des gens que tu connais le soir.',
    ],
    avisPositive: [
      'La vie n’est pas chere ',
      "Cracovie est une ville chargée d'histoire: la forteresse de Barbacana",
      'La vie culturelle animee avec de muliples evenements'
    ],
    avisNegatif: [
     'Les crimes mineurs comme le vol à la tire',
      "Certains automobilistes ne respectent pas le code de la route,les déplacements routiers peuvent être dangereux",
      "À l’occasion des matchs de soccer, des affrontements violents, peuvent éclater entre les partisans d’équipes adverses." 
    ],
    conseil: [
      "Planifiez votre transfert de l'aéroport à Cracovie",
      ' Familiarisez-vous avec la monnaie locale : le złoty.',
      'Optez pour une visite guidée'

    ],
  },
  {
    id: 3,
    country: 'Japon',
    city: 'Tokyo',
    goDate: new Date(2023, 6, 5),
    backDate: new Date(2023, 6, 12),
    image: 'assets/photos/japon/japon.jpg',
    imageGalerie: [
      {
        id: 1,
        titre: 'Japon, rue avec 2 femmes traditionnelles',
        picture: 'assets/photos/japon/japon2.jpg',
      },
      {
        id: 2,
        titre: 'Japon, architecture traditionnelle',
        picture: 'assets/photos/japon/japon3.jpg',
      },
      {
        id: 3,
        titre: 'Japon,maison traditionelle',
        picture: 'assets/photos/japon/japon4.jpg',
      },
      {
        id: 4,
        titre: 'Japon,rue de Tokyo',
        picture: 'assets/photos/japon/japon5.jpg',
      },
      {
        id: 5,
        titre: 'Japon, des grattes ciels',
        picture: 'assets/photos/japon/japon6.jpg',
      },
      {
        id: 6,
        titre: 'Japon, des restaurants',
        picture: 'assets/photos/japon/japon7.jpg',
      },
      {
        id: 7,
        titre: 'Japon, une fille kawai',
        picture: 'assets/photos/japon/japon8.jpg',
      },
      {
        id: 8,
        titre: 'Japon, Tokyo vu sur Fuji',
        picture: 'assets/photos/japon/japon9.jpg',
      },
      {
        id: 9,
        titre: 'Japon, quartier de Tokyo vu sur Fuji',
        picture: 'assets/photos/japon/japon10.jpg',
      },
      {
        id: 10,
        titre: 'Japon, Fuji ',
        picture: 'assets/photos/japon/japon11.jpg',
      },
      {
        id: 11,
        titre: 'Japon,la rue de Tokyo ',
        picture: 'assets/photos/japon/japon12.jpg',
      },
      {
        id: 12,
        titre: 'Japon, fleur de cerises dans la rue ',
        picture: 'assets/photos/japon/japon13.jpg',
      }
    ],
    voyage: [
      "Rien de plus dépaysant qu’un voyage au Japon… Depuis le sommet du mont Fuji au soleil levant ou dans un parc de Nara un après-midi d’automne, on se sent hors du monde. Dans les ruelles médiévales de Kanazawa ou dans un jardin japonais zen enveloppé d’une brume matinale, on vit des moments hors du temps.",
      "Dans les villes japonaises, le voyageur est pris de vertiges: au pied des gratte-ciel de Shinjuku à Tokyo, au milieu des échoppes d’un marché d’Osaka, dans les boutiques branchées de Hiroshima… Entre ville et nature, partez à la découverte des traditions culturelles du Japon grâce à nos voyages en immersion au pays du Soleil-Levant.",
     ],
    description: [
      'Au nom seul de « Tokyo », notre imaginaire plonge dans un univers de gratte-ciel futuristes, de lolitas branchées et de néons multicolores. Or, comme seuls les Japonais savent le faire, la capitale est le fruit d’un savant dosage d’avant-garde et d’héritage du passé, d’effervescence et de zen.',
      'Même en plein cœur de la ville, on peut trouver une forêt, un gigantesque temple bouddhique, des ruelles où le temps semble suspendu. En filant en métro d’un quartier à un autre, on multiplie les expériences et les ambiances.',
      'Tokyo s’apprécie particulièrement au printemps (fin mars-début avril), quand les températures sont douces (9 à 19 °C). Le must, c’est bien sûr de découvrir la capitale sous les cerisiers en fleurs ,'
    ],
    avisPositive: [
      'Les eaux thermales sont alimentées par des sources volcaniques. Les onsens sont des bains chauds intérieurs ou extérieurs ayant des propriétés thérapeutiques pour le corps et l’esprit',
      'La pratique des arts',
      "La propreté des lieux publics",
    ],
    avisNegatif: [
      'Japon est cher! L',
      'Il est très rare de trouver des endroits pour pouvoir payer en carte bancaire car la majorité des transactions se font en espèces',
      'Pas de wifi gratuit'
    ],
    conseil: [
      'Connaître les habitudes japonaises: ne pas donner des pourboires ',
      'Ne pas y aller en été (humidité et de 40° C)',
      'Prévoir un GPS '
    ],
  },
  {
    id: 4,
    country: 'Australie',
    city: 'Sydney',
    goDate: new Date(2023, 7, 12),
    backDate: new Date(2024, 7, 29),
    image: 'assets/photos/australie/australie.jpg',
    imageGalerie: [
      {
        id: 1,
        titre: 'Australie,les koalas',
        picture: 'assets/photos/australie/australie2.jpg',
      },
      {
        id: 2,
        titre: 'Australie,la montagne rouge',
        picture: 'assets/photos/australie/australie3.jpg',
      },
      {
        id: 3,
        titre: "Australie,bord d'océan",
        picture: 'assets/photos/australie/australie4.jpg',
      },
      {
        id: 4,
        titre: 'Afrique du Sud,des montagnes avec une cascade',
        picture: 'assets/photos/australie/australie5.jpg',
      },
      {
        id: 5,
        titre: 'Afrique du Sud,paysage des montagnes et des champs ',
        picture: 'assets/photos/australie/australie6.jpg',
      },
      {
        id: 6,
        titre: 'Afrique du Sud,paysage des montagnes et des champs ',
        picture: 'assets/photos/australie/australie7.jpg',
      },
      {
        id: 7,
        titre: 'Afrique du Sud,paysage des montagnes et des champs ',
        picture: 'assets/photos/australie/australie8.jpg',
      },
      {
        id: 8,
        titre: 'Afrique du Sud,paysage des montagnes et des champs ',
        picture: 'assets/photos/australie/australie9.jpg',
      },
      {
        id: 9,
        titre: 'Afrique du Sud,paysage des montagnes et des champs ',
        picture: 'assets/photos/australie/australie10.jpg',
      },
      {
        id: 10,
        titre: 'Afrique du Sud,paysage des montagnes et des champs ',
        picture: 'assets/photos/australie/australie11.jpg',
      },
      {
        id: 11,
        titre: 'Afrique du Sud,paysage des montagnes et des champs ',
        picture: 'assets/photos/australie/australie12.jpg',
      },
      {
        id: 12,
        titre: 'Afrique du Sud,paysage des montagnes et des champs ',
        picture: 'assets/photos/australie/australie13.jpg',
      },
      {
        id: 13,
        titre: 'Afrique du Sud,paysage des montagnes et des champs ',
        picture: 'assets/photos/australie/australie14.jpg',
      },

    ],
    voyage: [
      'S’imprégner de la culture millénaire des Aborigènes en contemplant un coucher de soleil à Uluru. Partir sur les traces de Crocodile Dundee en explorant les espaces vierges du Kimberley. Marcher sur les sentiers apaisants de Tasmanie, et voir plus de wallabies que de randonneurs.',
      'Partir en road-trip sur la Great Ocean Road et se sentir petit devant les falaises magistrales.Chercher le meilleur spot de surf sur la côte Est. S’émerveiller devant les fonds multicolores de la Grande Barrière de Corail. ',
    ],

    description: [
      'L’Australie est une terre de contraste située à l’autre bout du monde, regorgeant de trésors. Entre la beauté sauvage de ses milliers de paysages, sa faune et sa flore uniques au monde, ses richesses naturelles et culturelles exceptionnelles, l’Australie est une destination exceptionnelle à visiter au moins une fois dans sa vie.',
      'L’Australie, de part sa large étendu, dispose de paysages aussi différents que fascinants.',
      'La moitié sud de l’Australie (qui comprend Sydney, Melbourne, Adélaïde et Perth) se situe en dehors des tropiques et a quatre saisons différentes. Les étés sont secs et chauds avec de fréquentes vagues de chaleur à court terme dépassant 40 ° C',
    ],
    avisPositive: [
      'Australiens sympas et accueillants',
      'Plages magnifiques',
      'Sentiment de liberté ',
      'Beauté et diversité des paysages ',
    ],
    avisNegatif: [
      'Coût de la vie et des activités',
      'Nourriture sans grand intérêt',
      'Distances très longues',
    ],
    conseil: [
      'Calculer son budget sur place, car le coût de la vie élevé',
      'protégez-vous du soleil ',
    ],
  },

  {
    id: 5,
    country: 'Afrique du Sud',
    city: 'Cape Town',
    goDate: new Date(2023, 8, 12),
    backDate: new Date(2024, 8, 29),
    image: 'assets/photos/afriqueDuSud/afrique.jpg',
    imageGalerie: [
      {
        id: 1,
        titre: 'Afrique du Sud, des elephants',
        picture: 'assets/photos/afriqueDuSud/afrique2.jpg',
      },
      {
        id: 2,
        titre: 'Afrique du Sud,paysage avec le bord de la mer',
        picture: 'assets/photos/afriqueDuSud/afrique3.jpg',
      },
      {
        id: 3,
        titre: 'Afrique du Sud,des zebres',
        picture: 'assets/photos/afriqueDuSud/afrique4.jpg',
      },
      {
        id: 4,
        titre: 'Afrique du Sud,des montagnes avec une cascade',
        picture: 'assets/photos/afriqueDuSud/afrique5.jpg',
      },
      {
        id: 5,
        titre: 'Afrique du Sud,paysage des montagnes et des champs ',
        picture: 'assets/photos/afriqueDuSud/afrique6.jpg',
      },
      {
        id: 6,
        titre: 'Afrique,lion ',
        picture: 'assets/photos/afriqueDuSud/afrique7.jpg',
      },
      {
        id: 7,
        titre: 'Afrique du Sud, baobab ',
        picture: 'assets/photos/afriqueDuSud/afrique8.jpg',
      },
      {
        id: 8,
        titre: 'Afrique du Sud, des elephants',
        picture: 'assets/photos/afriqueDuSud/afrique9.jpg',
      },
      {
        id: 9,
        titre: "Afrique du Sud,la route au bord de l'ocean",
        picture: 'assets/photos/afriqueDuSud/afrique10.jpg',
      },
      {
        id: 10,
        titre: "Afrique du Sud, bord de l'ocean",
        picture: 'assets/photos/afriqueDuSud/afrique11.jpg',
      },
      {
        id: 11,
        titre: "Afrique du Sud, village au pied de la montagne",
        picture: 'assets/photos/afriqueDuSud/afrique12.jpg',
      },
    ],
    voyage: [
      "Savane vierge abritant une véritable arche de Noé, plaines de baobabs, plages de rêve ou dunes dorées, légendes de la reine de Saba et du roi Salomon... Partir en Afrique, c’est à la fois retrouver le berceau de l'humanité et arpenter une terre jeune, créative, dans une mosaïque de paysages grandioses infiniment variés. Dans cet ailleurs sauvage qui n’en finit pas de fasciner, on rêve du plus beau des voyages.",
      'Un circuit accompagné au plus près des animaux, un voyage sur mesure à la rencontre de peuples aux rites ancestraux, un séjour en camp de luxe dans l’esprit d’Out of Africa... ',
    ],

    description: [
      "Afrique du Sud réserve de belles surprises ! C'est un grand pays (2 fois plus grand que la France). Entre mer et montagne, l'Afrique du Sud profite d'un climat agréable toute l’année, avec des températures variant entre 18 °C et 30 °C en moyenne.",
      ' Découvrez des décors naturels majestueux tels que le Blyde River Canyon avec ses falaises et ses cascades, le cap de Bonne-Espérance, ou le Jardin botanique de Kirstenbosch au Cap. Plongez dans la riche histoire de Johannesburg et passez par le parc Kruger pour vivre un safari hors du temps. En circuit sur la terre ou sur l’eau, votre séjour vous mène vers les plus beaux recoins de l’Afrique du Sud. Tout près, d’autres destinations merveilleuses vous attendent : le Swaziland, la Namibie, le Botswana.',
    ],
    avisPositive: [
      'Sa diversité de paysages et de nature. ',
      'Très beau voyage avec de belles prestations.',
      'Pour sa gastronomie variée ',
      'Pour vivre des aventures insolites et hors du commun ',
    ],
    avisNegatif: [
      'La communication lors de ce voyage est à revoir...',
      "Il est recommmandé de ne pas boire l'eau du robine",
    ],
    conseil: [
      'Faites preuve d’une grande prudence en raison du nombre élevé de crimes.',
    ],
  },
];
