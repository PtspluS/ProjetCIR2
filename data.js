var levels = [
    {
		matrice: [
			[3,15,3,3,3,4,3,3,4,4,3,3,3,22,22,3,3,22,22,3,3],
			[3,11,0,8,0,0,0,0,0,0,7,0,7,2,2,1,1,0,0,16,3],
			[3,11,0,0,0,0,2,2,2,0,0,0,0,0,0,0,0,0,0,0,3],
			[3,11,2,0,0,0,2,2,2,0,2,2,2,0,0,0,0,0,0,17,3],
			[3,11,0,0,0,0,0,0,0,0,6,6,9,0,0,1,1,0,0,0,3],
			[3,11,0,0,0,0,8,9,0,0,0,0,0,0,0,2,2,22,22,18,3],
			[3,11,0,0,0,0,12,12,12,12,11,0,0,0,0,5,5,0,0,0,3],
			[3,14,0,0,0,0,10,13,13,13,11,0,0,0,0,21,0,0,0,19,3],
			[3,0,0,0,0,0,0,0,0,10,13,0,0,0,0,0,0,0,0,20,3],
			[3,0,0,0,0,0,0,0,0,10,13,0,0,0,0,0,0,0,0,20,3],
			[3,0,0,0,0,0,0,0,0,10,13,0,0,0,0,0,0,0,0,20,3],
			[3,3,3,3,3,3,3,3,3,3,3,3,3,22,22,3,3,22,22,3,3]
		],
		items: [itemsId.Pneu, itemsId.Plastique, itemsId.Metal, itemsId.Verre, itemsId.Carton, itemsId.Sceau],
		itemsTime: 10000,
		itemsPattern: false,
		spawnpoints: [[3,4],[2,4]],
		seauSpawnpoints: [],
		imagePath: "/assets/levels/",
		name: "Level test",
		tutoText: []
  },
  {
    matrice: [
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1, 3, 3, 3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1, 3,15, 3, 3, 3, 4, 3, 3, 4, 3, 3, 4, 3, 3, 3,-1,-1,-1],
      [-1,-1,-1, 3,11, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0,19, 3,-1,-1,-1],
      [-1,-1,-1, 3,11, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 3,-1,-1,-1],
      [-1,-1,-1, 3,11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,-1,-1,-1],
      [-1,-1,-1, 3,12,12,12,14, 0, 0, 0, 0, 2, 2, 2, 2, 2, 3,-1,-1,-1],
      [-1,-1,-1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,-1,-1,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
    ],
    items: [itemsId.Pneu,itemsId.Pneu,itemsId.Pneu,itemsId.Pneu],
    itemsTime: 10000,
    itemsPattern: false,
    spawnpoints: [[5,6],[6,6]],
    seauSpawnpoints: [[7,4],[12,7]],
    imagePath: "/assets/levels/",
    name: "Level 1",
	tutoText: [
		'Bon les gars v\'là le topo ... Je suis dans la merde ...',
    'Pour faire simple on m\'a chargé de monter un équipe pour traiter les déchets qui arrivent depuis la ville.',
    'Le problème c\'est que la ville en produit trop et que toutes les équipes qui sont venu avant n\'ont pas réussi à gérer le problème.',
    'J\'ai dû toutes les virer ...',
    'Donc vous êtes ma dernière chance ... v\'là la chance.',
    'Pour commencer on va faire simple ...\ncar de toute façon vous avez raté tous les tests donc je peux rien vous demander de compliquer ...',
    'On va commencer par le tri des pneux, ils y sont tous arrivés.',
    'Sur le tapis roulant il y a des pneux qui vont arriver, choppez les avant qu\'ils ne soient incinérés et mettez les dans le broyeur.',
    'Une fois broyez, mettez le tous dans le bac, il y en a qu\'un vous pouvez pas vous tromper ...\nVous avez des question ?',
    'De toute façon je m\'en fou allez GO !!!'
	]
  },{
    matrice: [
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 3, 3, 3,-1,-1,-1],
      [-1,-1,-1, 3, 3, 4, 3, 3, 3, 3, 3, 3, 3, 3, 4, 3,15, 3,-1,-1,-1],
      [-1,-1,-1, 3, 2, 0, 0, 2, 2, 2, 2, 0, 6, 0, 0, 0,11, 3,-1,-1,-1],
      [-1,-1,-1, 3, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,11, 3,-1,-1,-1],
      [-1,-1,-1, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,11, 3,-1,-1,-1],
      [-1,-1,-1, 3, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0,11, 3,-1,-1,-1],
      [-1,-1,-1, 3, 5, 0, 5, 0, 2, 2, 0,19, 0,18, 0, 0,14, 3,-1,-1,-1],
      [-1,-1,-1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,-1,-1,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
    ],
    items: [itemsId.Pneu,itemsId.Plastique],
    itemsTime: 10000,
    itemsPattern: false,
    spawnpoints: [[5,6],[6,6]],
    seauSpawnpoints: [[8,6],[9,6]],
    imagePath: "/assets/levels/",
    name: "Level 2",
	tutoText: [
    'Vous avez réussi à recycler des pneux, mais bon Pierre aussi donc vous avez rien fait de fou.',
    'Là on me demande de tri... de vous faire trier des pneux et des bidons de plastique.',
    'Pour les pneux vous savez comment faire pas besoin de vous réexpliquer.\nPour les bidons vu vos résultats aux tests je vais vous réexpliquer.',
    'Un bidon ça se prend et ça se compresse !!! Pour compresser je vous ai mis une machine,\nvous voyez à quoi ressemble le broyeur ? Bah c\'est l\'autre machine.',
    'Une fois compressé, vous pouvez enfin le broyer, puis comme pour les pneux vous jeter le tout dans le bac mais pas celui des pneux par pitié.',
    'Oubliez pas non plus que le but du tri c\'est de pas mélanger.',
    'Donc oubliez pas de laver les seaux dès qu\'ils doivent contenir autre chose que ce qu\'ils contenaient.',
    'Pour laver les seaux, le faites pas dans les chiottes, j\'ai mis des bacs pour ça.',
    'Par contre v\'là l\'huile de coude que vous devrez user pour laver les seaux, sinon vous pouvez attendre longtemps.',
    'Toujours pas de question ?',
  ]
  },{
    matrice: [
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1, 3, 3, 3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1, 3,15, 3, 3, 3, 4, 3, 3, 4, 3, 4, 3, 3, 3, 3,-1,-1,-1],
      [-1,-1,-1, 3,11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 0, 9, 3,-1,-1,-1],
      [-1,-1,-1, 3,11, 0, 0, 2, 2, 0, 0, 6, 0, 0, 0, 0, 0, 3,-1,-1,-1],
      [-1,-1,-1, 3,11, 0, 0, 0, 0, 0, 0, 6, 0, 0, 0, 0, 0, 3,-1,-1,-1],
      [-1,-1,-1, 3,14, 0, 2,20, 0, 2, 0, 0, 0, 0, 8, 0, 8, 3,-1,-1,-1],
      [-1,-1,-1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,-1,-1,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
    ],
    items: [itemsId.Carton],
    itemsTime: 10000,
    itemsPattern: false,
    spawnpoints: [[5,6],[6,6]],
    seauSpawnpoints: [[4,7]],
    imagePath: "/assets/levels/",
    name: "Level 3",
	tutoText: [
    'Maintenant va falloir créer de la valeur à ce que vous faites car sinon vous servez à rien.',
    'C\'est bien beau de broyer des trucs mais maintenant va falloir créer, bande de larv...\neuh laver.',
    'Ouai c\'est ça, va falloir laver des trucs et tout. V\'là le plan, il va y avoir du carton qui va arriver.',
    'Faut me compresser ça, puis me le laver dans les bacs comme d\'habitude, commencez pas à inventer des trucs, vous êtes pas encore assez qualifiés.',
    'Après une fois que c\'est lavé, faut me foutre ça dans la presse. Vous récupérerez les plaques et les mettrez dans le bon bac.',
    'Par contre j\'ai vu que la dernière fois vous saviez pas mettre plusieurs objets dans le compresseur. Donc soit vous êtes cons, soit vous ..., non vous êtes juste cons.',
    'Donc merci de pas oublier sinon on va perdre du temps et moi ... euh nous ... de l\'argent.'
  ]
  },{
    matrice: [
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1, 3, 3, 3, 4, 3, 4, 3, 3, 3, 4, 3, 4, 3, 3, 3,-1,-1,-1],
      [-1,-1,-1, 3,15,14,13,13,13,13,13,13,13,13,13,13,13, 3,-1,-1,-1],
      [-1,-1,-1, 3,11, 1, 0, 0, 0, 1,10, 0, 0, 0, 0, 0,10, 3,-1,-1,-1],
      [-1,-1,-1, 3,11, 0, 0, 0, 0, 0, 2, 0, 8, 5, 8, 0,10, 3,-1,-1,-1],
      [-1,-1,-1, 3,11, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0,10, 3,-1,-1,-1],
      [-1,-1,-1, 3,11, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0,10, 3,-1,-1,-1],
      [-1,-1,-1, 3,11, 0,17, 9,18, 0, 2, 0, 0, 6, 6, 0,10, 3,-1,-1,-1],
      [-1,-1,-1, 3,11, 0, 0, 0, 0, 0,11, 0, 0, 0, 0, 0,10, 3,-1,-1,-1],
      [-1,-1,-1, 3,12,12,12,12,12,12,12,12,12,12,12,12,10, 3,-1,-1,-1],
      [-1,-1,-1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,-1,-1,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
    ],
    items: [itemsId.Metal, itemsId.Plastique],
    itemsTime: 10000,
    itemsPattern: false,
    spawnpoints: [[7,5],[13,5]],
    seauSpawnpoints: [[10,4],[10,7]],
    imagePath: "/assets/levels/",
    name: "Level Coop - 1",
	tutoText: [
    'Salut, je remplace Big Boss ... mais si Big Boss ... un grand blond ... voilà, fort sympatique ... ah non.',
    'Bref, il est pas en état de vous aider ... hum, il a pas assumé la bière d\'hier.\nBon ok, les bières.',
    'Ici ça va être un peu plus complex, vous allez être séparés.\nVa falloir bosser ensemble vu que vous pouvez pas accéder à toutes les machines.',
    'Donc soit vous utilisez les tables soit vous avez assez confiance dans votre camarade pour qu\'il récupère l\'objet avant l\'incinérateur.'
    'En résumé vous allez galérer, ça va être chaud mais c\'est un bon moyen de voir si vous savez bien communiquer.'
  ]
  }
];

var skins = [//permet de stocker tt les skins des persos
  {
    name : 'billy',
    sprite : 'assets/billy.png',
    width : 44,
    height : 68,
  },{
    name : 'bob',
    sprite : 'assets/bob.png',
    width : 44,
    height : 68,
  },{
    name : 'walle',
    sprite : 'assets/walle.png',
    width : 44,
    height : 68,
  },
];
