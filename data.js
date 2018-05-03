var levels = [
  {
    matrice: [
      [ 3,15, 3, 3, 3, 4, 3, 3, 4, 4, 3, 3, 3,22,23, 3, 3,22,23, 3, 3],
      [ 3,11, 0, 8, 0, 0, 0, 0, 0, 0, 7, 0, 7, 2, 2, 1, 1, 0, 0,16 ,3],
      [ 3,11, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
      [ 3,11, 0, 0, 0, 0, 2, 2, 2, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0,17, 3],
      [ 3,11, 0, 0, 0, 0, 0, 0, 0, 0, 6, 6, 9, 0, 0, 1, 1, 0, 0, 0, 3],
      [ 3,11, 0, 0, 0, 0, 8, 9, 0, 0, 0, 0, 0, 0, 0, 2, 2,23,23,18, 3],
      [ 3,11, 0, 0, 0, 0,12,12,12,12,11, 0, 0, 0, 0, 5, 5, 0, 0, 0, 3],
      [ 3,14, 0, 0, 0, 0,10,13,13,13,11, 0, 0, 0, 0,21, 0, 0, 0,19, 3],
      [ 3, 0, 0, 0, 0, 0, 0, 0, 0,10,13, 0, 0, 0, 0, 0, 0, 0, 0,20, 3],
      [ 3, 0, 0, 0, 12, 12, 12, 12, 12, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,20, 3],
      [ 3, 0, 0, 0, 1, 8, 9, 21, 16, 17, 0, 0, 0, 0, 0, 0, 0, 0, 0,20, 3],
      [ 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,23,23, 3, 3,23,23, 3, 3]
    ],
    items: [itemsId.Pneu, itemsId.Poubelle, itemsId.Plastique, itemsId.Metal, itemsId.Verre, itemsId.Carton, itemsId.Sceau, itemsId.Poubelle],
    itemsTime: 10000,
    itemsPattern: true,
    itemSpeed : 100,
    chrono: 10000,
    score : 1000,
    polution : 10,
    spawnpoints: [[2,4],[3,4],[4,4],[5,4]],
    seauSpawnpoints: [],
    imagePath: "assets/miniMap/debugmap.png",
    name: "Level test",
    tutoText: [
		'Bon, ce niveau est principalement là pour faire du déboguage, il est jouable mais très grand, dur et les seaux arrivent aussi parmi les dechets.',
		'Il sera quand même préférable de faire les autres niveaux plutôt que celui-ci.'
	],
    tutoGuys : [0,0,0,1],//martin,pe,pierre
    tips : "Vous savez que ce niveau est là pour le debug hein?",
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
    itemSpeed : 120,
    chrono: 80,
    score : 50,//score pour un joueur
    polution : 10,
    spawnpoints: [[5,6],[7,6],[9,6],[11,7]],
    seauSpawnpoints: [[7,4],[12,7]],
    imagePath: "assets/miniMap/level1.PNG",
    name: "Tutoriel 1",
    tutoText:[
      'Bonjour messieurs. Alors comme ça c\'est vous la nouvelle équipe de recyclage ?\nSi vous souhaitez que je saute les étapes afin de continuer les instructions, cliquez dans le vide.\nSi vous savez déjà comment tout fonctionne, je ne vous retiens pas plus, vous pouvez cliquer sur \"SKIP\". ',
      'Pour faire simple, nous devons traiter les déchets qui nous arrivent depuis la ville. Nous allons commencer par le tri des pneus.',
      'Les pneus vont arriver sur le tapis roulant, attrapez les avant qu\'ils ne soient incinérés afin d\'éviter de polluer d\'avantage l\'atmosphère qu\'il ne l\'est déjà et mettez les dans le broyeur.#2#',
      'Le pneu broyé, appelé broyat, doit être ramassé avec un seau et vidé dans le conteneur correspondant: le gris. On peut mettre jusqu\'à 3 doses de broyats dans un seul seau.',
      'En cas de probleme appuyez sur ENTREE pour mettre le jeu en pause et regarder l\'aide si vous ne vous souvenez plus comment on fait pour recycler !'
    ],
    tutoGuys : [1,0,0,0],
    tips : 'Au final, ce que vous venez de recycler servira de combustible pour des entreprises, pour entretenir les terrains de foot synthétiques ou, le broyat une fois fondu, peut servir de revêtement sur les terrains de jeu pour enfants.'
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
    itemSpeed : 120,
    chrono: 180,
    score : 150,
    polution : 10,
    spawnpoints: [[5,6],[12,5],[7,6],[14,5]],
    seauSpawnpoints: [[8,6],[9,6]],
    imagePath: "assets/miniMap/level2.PNG",
    name: "Tutoriel 2",
    tutoText: [
      'Faites attention, vous allez maintenant être confronté à un problème fondamental: le tri! Dans cette usine vous allez devoir recyler à la fois des pneux et des bidons de plastique.',
      'Pour les pneux vous savez déja comment cela fonctionne.\nJe vous fait quand même un petit rappel: #2#',
      'Sinon, pour le plastique, vous devez premièrement le compresser.\nPour ce faire il faut mettre les déchets dans le compresseur. On peut mettre jusqu\'à 3 objets dans un compresseur, alors essayez de maximiser cette capacité pour rendre le travail plus facile.\nUne fois que vous souhaitez lancer la compression, activez la machine avec le bouton d\action.',
      'Une fois compressé, vous devrez le broyer, puis comme pour les pneux vous déposerez les paillettes de plastique dans le bac correspondant: le jaune.#3#"',
      'N\'Oubliez pas non plus que le but du tri c\'est de pas mélanger.\nVous devrez donc laver les seaux si vous souhaitez transporter du plastique après avoir transporté des broyats de pneu car ceux-ci seront sales.',
      'Pour laver les seaux, il faut aller à une bassine, deposer le seau à l\'interieur, puis le laver en appuyant une dizaine de fois sur la touche d\'action.#5#',
      'Le plastique ainsi recyclé sera fondu en fibres de plastique pour faire des polaires, ou en bouteilles, ou encore en de nouveaux objets en plastique',
    ],
    tutoGuys : [1,0,0,0],
    tips : "Avec 7 bidons on peut réaliser un siège bébé pour les sales gosses."
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
    itemSpeed : 120,
    chrono: 180,
    score : 200,
    polution : 10,
    spawnpoints: [[5,6],[13,6],[9,6],[15,6]],
    seauSpawnpoints: [],
    imagePath: "assets/miniMap/level3.PNG",
    name: "Tutoriel 3",
    tutoText: [
      'Nous allons maintenant nous attaquer aux cartons.',
      'Celui-ci doit etre compressé puis transformé en pâte à papier dans la bassine. Vous savez comment faire ces manipulations, le fonctionnement est le même que pour laver un seau.',
      'La pâte doit ensuite être pressée pour créer de nouvelles plaques de carton à deposer dans le bac bleu.#1#'
    ],
    tutoGuys : [1,0,0,0],
    tips : "Le carton c'est comme les chats, ça a plusieurs vies, et en plus ça griffe pas. Donc pensez à l'adopter dans votre quotidien pour un environnement plus sain!."
  },{
    matrice: [
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1, 3, 3, 3, 4, 3, 4, 3, 3, 3, 4, 3, 4, 3, 3, 3,-1,-1,-1],
      [-1,-1,-1, 3, 1, 1, 0,17, 0, 0, 0,20, 0, 0, 0, 0, 0, 3,-1,-1,-1],
      [-1,-1,-1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 9, 3,-1,-1,-1],
      [-1,-1,-1, 3, 0, 0, 0, 0, 0,15, 0, 0, 0, 0, 0, 0, 9, 3,-1,-1,-1],
      [-1,-1,-1, 3, 0, 6, 0, 0, 0,11, 0, 0, 8, 8, 0, 0, 0, 3,-1,-1,-1],
      [-1,-1,-1, 3, 0, 0, 0, 0, 0,11, 0, 0, 0, 0, 0, 0, 0, 3,-1,-1,-1],
      [-1,-1,-1, 3, 0, 2, 2, 0, 0,12,12,12,12,12,12,12,14, 3,-1,-1,-1],
      [-1,-1,-1, 3, 3, 3, 4, 3, 4, 3, 3, 3, 4, 3, 4, 3, 3, 3,-1,-1,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
    ],
    items: [itemsId.Metal,itemsId.Carton],
    itemsTime: 10000,
    itemsPattern: false,
    itemSpeed : 120,
    chrono: 180,
    score : 500,
    polution : 10,
    spawnpoints: [[4,5],[14,6],[7,5],[11,6]],
    seauSpawnpoints: [[13,4],[5,8]],
    imagePath: "assets/miniMap/level4.PNG",
    name: "Tutoriel 4",
    tutoText: [
      'Aujourd\'hui, en plus du carton vous devrez recycler des canettes métalliques.',
      'Les canettes doivent être à nouveau compressées puis fondues dans un four. Pour récupérer le métal en fusion il vous faudra être équipé d\'un seau et enuite le verser dans une presse.#0#',
      'Les plaques de metal ainsi obtenu sont envoyées à d\'autres usines ou elles seront refondues pour refaire des canettes ou de la carroserie.'
    ],
    tutoGuys : [1,0,0,0],
    tips : "Avec ce que vous venez de recycler vous pouvez offrir un cadeau à un enfant.\nLe métal pour construire un vélo et le carton pour l'emballage ... un cadeau utile et écolo!",
  },{
    matrice: [
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1, 3, 3, 3,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1, 3, 3, 3, 4, 3, 4, 3,15, 3, 3, 3, 3, 4, 3, 3,-1,-1,-1],
      [-1,-1,-1, 3, 0, 0, 0, 0, 0, 0,11, 0,16, 0,16, 0, 2, 3,-1,-1,-1],
      [-1,-1,-1, 3, 7, 0, 0, 0, 0, 0,11, 0, 0, 0, 0, 0, 0, 3,-1,-1,-1],
      [-1,-1,-1, 3, 0, 0, 0, 0, 0, 0,11, 0, 0, 0, 0, 0, 0, 3,-1,-1,-1],
      [-1,-1,-1, 3, 0, 0, 0, 0, 0, 0,14, 0,21, 0,21, 0, 0, 3,-1,-1,-1],
      [-1,-1,-1, 3, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,-1,-1,-1],
      [-1,-1,-1, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3,-1,-1,-1],
      [-1,-1,-1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,-1,-1,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
    ],
    items: [itemsId.Verre],
    itemsTime: 10000,
    itemsPattern: false,
    itemSpeed : 140,
    chrono: 180,
    score : 500,
    polution : 10,
    spawnpoints: [[4,5],[14,4],[7,5],[12,4]],
    seauSpawnpoints: [[4,8],[16,8]],
    imagePath: "assets/miniMap/level5.PNG",
    name: "Tutoriel 5",
    tutoText: [
      'Enfin le dernier élément majeur du recyclage: le verre!',
      'Si vous souhaitez le recycler, il vous faudra premièrement le réduire en morceau sur un établi. Pour ce faire, déposez un seau et les bouteilles sur l\établi et appuyez sur la touche action pour le briser.#4#',
      'Le verre doit ensuite être fondu dans le four. Vous pourrez ensuite amener le verre fondu dans la soufflerie à l\'aide d\'un seau.#4#',
      'La machine soufflera de nouvelles bouteilles qu\'il vous faudra déposer dans le bac à verre qui lui-même est vert.'
    ],
    tutoGuys : [1,0,0,0],
    tips : "Le verre c'est comme les diamants, c'est éternel, une bouteille recyclée à le même cycle de vie qu'une bouteille qui vient d'être créée et on ne peut pas voir la différence.",
  },{
    matrice: [
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1, 3, 3, 3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1, 3,15, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,-1,-1,-1],
      [-1,-1,-1, 3,12,12,12,12,12,12,12,12,14, 0,17,18, 2, 3,-1,-1,-1],
      [-1,-1,-1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 3,-1,-1,-1],
      [-1,-1,-1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 3,-1,-1,-1],
      [-1,-1,-1, 3, 7, 0, 0, 0, 0, 7, 0, 0, 0, 1, 1, 0, 0, 3,-1,-1,-1],
      [-1,-1,-1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3,-1,-1,-1],
      [-1,-1,-1, 3, 9, 0, 6, 0, 6, 0, 0, 0, 0, 5, 5, 0, 2, 3,-1,-1,-1],
      [-1,-1,-1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,-1,-1,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
    ],
    items: [itemsId.Poubelle,itemsId.Poubelle,itemsId.Poubelle,itemsId.Poubelle,itemsId.Plastique,itemsId.Metal],
    itemsTime: 8000,
    itemsPattern: false,
    itemSpeed : 140,
    chrono: 180,
    score : 500,
    polution : 10,
    spawnpoints: [[4,5],[14,4],[7,5],[12,4]],
    seauSpawnpoints: [[16,8],[16,7]],
    imagePath: "assets/miniMap/level6.PNG",
    name: "Tutoriel 6",
    tutoText: [
      'Les habitants ne trient pas toujours leurs dechets. En plus de ne pas être très propre, cela nous complexifie la tâche. Ici nous pourrons donc avoir des sacs poubelle avec des déchets inconnus à l\'interieur',
      'Pour ouvrir un de ces sacs, emmenez-le sur un etabli complètement vide, vous ne souhaitez pas mélanger encore plus les nouveaux déchets avec ceux déjà présents, et appuyez sur la touche action.#6# ',
      'Il peut y avoir de 1 à 3 dechets dans un sac poubelle alors faites attention!',
    ],
    tutoGuys : [0,1,0,0],
    tips : "Tout le monde veut sauver la planète, mais personne veut descendre les poubelles.",
  }
  ,{
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
    itemSpeed : 50,
    chrono: 180,
    score : 500,
    polution : 10,
    spawnpoints: [[6,5],[14,5],[8,5],[12,5]],
    seauSpawnpoints: [[10,4],[10,7]],
    imagePath: "assets/miniMap/levelCoop1.PNG",
    name: "Fait la passe",
    tutoText: [
      'J\'espère que vous formez une bonne équipe, ici vous ne pourrez pas travailler tout seul, ça va être un peu plus complexe, vous serez séparés et vous ne pourrez pas accéder à toutes les machines.',
      'Soit vous utiliserez les tables soit vous avez assez confiance dans votre camarade pour qu\'il récupère l\'objet avant qu\'il soit jeté à l\'incinérateur.',
      'Ca va être dur, mais c\'est un bon moyen de voir si vous savez communiquer.'
    ],
    tutoGuys : [1,0,1,0],
  },
  {
    matrice: [
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1, 3, 3, 3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 3, 3, 3,-1],
      [-1, 3,15, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,15, 3,-1],
      [-1, 3,11, 7, 0, 0,17,16, 3, 1, 1, 1, 3,16,17, 7, 0, 0,11, 3,-1],
      [-1, 3,11, 0, 0, 0, 0, 0, 3, 1, 0, 1, 3, 0, 0, 0, 0, 0,11, 3,-1],
      [-1, 3,11, 0, 0, 0, 0, 0, 3, 1, 0, 1, 3, 0, 0, 0, 0, 0,11, 3,-1],
      [-1, 3,11, 0, 6, 0, 0, 0, 3, 4, 0, 4, 3, 0, 0, 6, 0, 0,11, 3,-1],
      [-1, 3,11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,11, 3,-1],
      [-1, 3,14, 0,21, 8, 2, 0, 0, 0, 9, 0, 0, 0, 2, 8,21, 0,14, 3,-1],
      [-1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
    ],
    items:[itemsId.Metal,itemsId.Verre] ,
    itemsTime: 10000,
    itemsPattern: false,
    itemSpeed : 100,
    chrono: 180,
    score : 500,
    polution : 10,
    spawnpoints: [[4,5],[14,4],[7,6],[13,6]],
    seauSpawnpoints: [[3,3],[15,3],[6,8]],
    imagePath: "assets/miniMap/fondrie.PNG",
    name: "Fondrie",
    tutoText: [],
    tutoGuys : [0,1,0,0],
  },{
    matrice: [
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1, 3, 3, 3,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1, 3,15, 3, 4, 3, 3, 3, 4, 3, 3, 3, 3, 4, 3, 3, 4, 3, 3, 3,-1],
      [-1, 3,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,14, 3,-1],
      [-1, 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3,-1],
      [-1, 3, 6, 0, 0, 3, 9, 0, 0, 3, 5, 0, 0,18, 3, 8, 0, 0,20, 3,-1],
      [-1, 3, 6, 0, 0, 3, 9, 0, 0, 3, 5, 0, 0,19, 3, 8, 0, 0, 0, 3,-1],
      [-1, 3, 0, 0, 0, 3, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3,-1],
      [-1, 3, 2, 0, 0, 0, 0, 2, 0, 0, 0, 2, 2, 0, 0, 0, 2, 2, 0, 3,-1],
      [-1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
    ],
    items: [itemsId.Carton,itemsId.Plastique,itemsId.Pneu],
    itemsTime: 5000,
    itemsPattern: true,
    itemSpeed : 50,
    chrono: 180,
    score : 500,
    polution : 10,
    spawnpoints: [[4,6],[7,5],[11,5],[16,5]],
    seauSpawnpoints: [[11,8],[12,8]],
    imagePath: "assets/miniMap/fordisme.PNG",
    name: "Fordisme",
    tutoText: [
      'Ce niveau est conseillé pour 4 ouvriers.',
      'Chacun a sa place sur la chaîne et si chacun fait bien son travail ils n\'y aura pas de problèmes.'
    ],
    tutoGuys : [1,1,1,1],
    tips : "Le recyclage est une industrie à part entière et on peut y appliquer les même techniques de travail que dans une usine de production.",
  },{
    matrice: [
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3, 3, 3, 3, 4, 3, 3, 3,-1],
      [-1, 3,20, 1, 5, 2, 2, 0,13,13,13,13,13,13, 0,21, 0, 6, 0, 3,-1],
      [-1, 3, 0, 0, 0, 0, 0, 0,12,12,12,12,12,12, 0, 0, 0, 6, 0, 3,-1],
      [-1, 3, 3, 3,10,11, 3, 4, 3, 3, 3, 3, 4, 3,18, 2, 0, 0, 0, 3,-1],
      [-1, 3,15, 3,10,11, 3,-1,-1,-1,-1,-1,-1, 3, 4, 3, 3,10,11, 3,-1],
      [-1, 3,11,16,10,11, 3,-1,-1,-1,-1,-1,-1,-1,-1,-1, 3,10,11, 3,-1],
      [-1, 3,11, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 4, 3, 3,10,11, 3,-1],
      [-1, 3,11, 0, 0, 0, 0, 0,13,13,13,13,13,13, 0, 0, 0, 0, 0, 3,-1],
      [-1, 3,12,12,12,14, 8, 0,12,12,12,12,12,12, 0, 9, 7, 0, 0, 3,-1],
      [-1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
    ],
    items: [itemsId.Verre,itemsId.Plastique,itemsId.Carton],
    itemsTime: 8000,
    itemsPattern: false,
    itemSpeed : 70,
    chrono: 180,
    score : 500,
    polution : 10,
    spawnpoints: [[4,7],[15,8],[3,3],[16,3]],
    seauSpawnpoints: [[5,2],[6,2],[17,9]],
    imagePath: "assets/miniMap/teletravail.PNG",
    name: "Teletravail",
    tutoText: [
      'Vous avez besoin d\'être une équipe de 4 pour réussir dans cette usine, chacun à un poste et vous ne pouvez vous envoyer les objets qu\'avec des tapis roulants.'
    ],
    tutoGuys : [0,1,0,0],
  }
  ,{
    matrice: [
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1, 3, 3, 3,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1, 3, 3, 3, 3, 3, 3, 3, 3,15, 3, 3, 3, 3, 3,-1,-1,-1,-1],
      [-1,-1,-1, 3,14,13,13,13,13,13,13,13,17,20, 2, 2, 3,-1,-1,-1,-1],
      [-1,-1,-1, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 3,-1,-1,-1,-1],
      [-1,-1,-1, 3, 2, 0, 3, 4, 3, 3, 4, 3, 3, 3, 0, 8, 3,-1,-1,-1,-1],
      [-1,-1,-1, 3, 2, 0, 3,-1,-1,-1,-1,-1,-1, 3, 0, 2, 3,-1,-1,-1,-1],
      [-1,-1,-1, 3, 2, 0, 3,-1,-1,-1,-1,-1,-1, 3, 0, 2, 3,-1,-1,-1,-1],
      [-1,-1,-1, 3, 2, 0, 3, 3, 4, 3, 4, 3, 4, 3, 0, 2, 3,-1,-1,-1,-1],
      [-1,-1,-1, 3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3,-1,-1,-1,-1],
      [-1,-1,-1, 3, 2, 6, 0, 2, 2, 2, 2, 2, 2, 9, 1, 2, 3,-1,-1,-1,-1],
      [-1,-1,-1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,-1,-1,-1,-1]

    ],
    items: [itemsId.Metal,itemsId.Carton],
    itemsTime: 8000,
    itemsPattern: false,
    itemSpeed : 70,
    chrono: 180,
    score : 500,
    polution : 10,
    spawnpoints: [[5,7],[14,7],[5,4],[14,4]],
    seauSpawnpoints: [[15,7],[15,8]],
    imagePath: "assets/miniMap/rond.PNG",
    name: "Rond-point",
    tutoText: [],
    tutoGuys : [0,1,0,0],
  },{
    matrice: [
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1, 3, 3, 4, 3, 3, 3, 3,-1, 3, 3, 3, 3, 3, 3,-1,-1,-1,-1],
      [-1,-1,-1, 3,15, 0, 7, 0, 0, 3,-1, 3, 5, 1,21, 2, 3,-1,-1,-1,-1],
      [-1,-1,-1, 3,11, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 3,-1,-1,-1,-1],
      [-1,-1,-1, 3,11, 0, 9, 0, 0, 2, 2, 2, 0, 0, 0,16, 3,-1,-1,-1,-1],
      [-1,-1,-1, 3,11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,-1,-1,-1,-1],
      [-1,-1,-1, 3,11, 0, 9, 0, 0, 2, 2, 2, 0, 0, 0,18, 3,-1,-1,-1,-1],
      [-1,-1,-1, 3,11, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 3,-1,-1,-1,-1],
      [-1,-1,-1, 3,14, 0, 6, 0, 2, 3,-1, 3, 5, 1,21, 2, 3,-1,-1,-1,-1],
      [-1,-1,-1, 3, 3, 3, 3, 3, 3, 3,-1, 3, 3, 3, 3, 3, 3,-1,-1,-1,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
    ],
    items: [itemsId.Plastique,itemsId.Verre],
    itemsTime: 8000,
    itemsPattern: false,
    itemSpeed : 100,
    chrono: 180,
    score : 500,
    polution : 10,
    spawnpoints: [[8,8],[13,6],[8,6],[13,8]],
    seauSpawnpoints: [[6,3],[15,3],[15,9],[8,9]],
    imagePath: "assets/miniMap/Un par un.PNG",
    name: "Un par un",
    tutoText: [],
    tutoGuys : [1,1,1,0],
  },{
    matrice: [
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 3, 3, 4, 3, 3, 4, 3, 3, 3,-1],
      [-1, 3, 1, 1, 1, 0, 8, 8,21,21, 0, 0, 0, 0, 0, 0, 0,19,18, 3,-1],
      [-1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9, 0, 0, 0, 0, 0, 3,-1],
      [-1, 3,16, 0, 2, 2, 0, 0, 0, 0, 0, 9, 9, 9, 0, 0, 0, 0, 2, 3,-1],
      [-1, 3,17, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,-1],
      [-1, 3, 0, 0, 7, 0, 0, 0, 6, 0, 0, 6, 0, 0, 0, 5, 5, 5, 0, 3,-1],
      [-1, 3,15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3,-1],
      [-1, 3,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,14, 3,-1],
      [-1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]
    ],
    items: [itemsId.Plastique,itemsId.Verre,itemsId.Metal,itemsId.Pneu,itemsId.Plastique,itemsId.Verre,itemsId.Metal],
    itemsTime: 9000,
    itemsPattern: false,
    itemSpeed : 100,
    chrono: 240,
    score : 500,
    polution : 10,
    spawnpoints: [[5,7],[10,7],[7,3],[16,3]],
    seauSpawnpoints: [[4,6],[18,4]],
    imagePath: "assets/miniMap/Machine.PNG",
    name: "Machine a laver",
    tutoText: [
      "On a plus beaucoup de seau ici.\nVous allez devoir frotter les amis!"
    ],
    tutoGuys : [1,0,0,0],
  },{
    matrice: [
      [-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1],
      [ 3, 3, 3,-1, 3, 3, 3, 4, 3, 3, 3, 3, 3, 4, 3, 3, 3, 3, 3, 4, 3],
      [ 3, 8, 3, 4, 3, 0, 0, 0, 0, 0,17, 3, 8, 0, 0, 0, 0, 0, 0, 0, 3],
      [ 3, 0, 0, 0, 0, 0, 3,15, 3, 3, 3, 3, 3, 8, 0, 3, 3, 3, 3, 0, 3],
      [ 3, 2, 0, 3, 3, 0, 3,12,12,12,12,12,12,14, 0, 0, 3, 9, 3, 0, 3],
      [ 3, 8, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 3],
      [ 3, 3, 3, 0, 3, 3, 3, 6, 0, 0, 6, 0, 6, 0, 3, 0, 3, 0, 3, 9, 3],
      [ 3,18, 3, 0, 3, 1, 1, 2, 3, 0, 3, 3, 3, 3, 3, 0, 2, 0, 3, 3, 3],
      [ 3, 0, 3, 0, 0, 0, 0, 0, 3, 0, 3, 2, 5, 3, 0, 0, 0, 0, 3, 20, 3],
      [ 3, 0, 2, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 3, 0, 3, 4, 3, 3, 0, 3],
      [ 3, 0, 0, 0, 3, 2, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 3],
      [ 3, 3, 3, 3, 3, 3, 3,-1,-1,-1,-1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
    ],
    items: [itemsId.Plastique,itemsId.Metal,itemsId.Carton],
    itemsTime: 9000,
    itemsPattern: false,
    itemSpeed : 140,
    chrono: 240,
    score : 500,
    polution : 10,
    spawnpoints: [[5,5],[9,5],[7,5],[11,5]],
    seauSpawnpoints: [[7,7],[11,8],[5,10]],
    imagePath: "assets/miniMap/Way.PNG",
    name: "Show me the way",
    tutoText: [
      "Do you know the way ?"
    ],
    tutoGuys : [1,0,0,0],
  }


];

var skins = [//permet de stocker tout les skins des persos
  {
    name : 'billy',
    sprite : 'assets/billy.PNG',
    width : 44,
    height : 68,
  },{
    name : 'bob',
    sprite : 'assets/bob.PNG',
    width : 44,
    height : 68,
  },{
    name : 'walle',
    sprite : 'assets/walle.PNG',
    width : 44,
    height : 68,
  },{
    name : 'ghostbuster',
    sprite : 'assets/ghostbuster.PNG',
    width : 44,
    height : 68,
  },{
    name : 'hazman',
    sprite : 'assets/hazman.PNG',
    width : 44,
    height : 68,
  },{
    name : 'janine',
    sprite : 'assets/janine.PNG',
    width :44,
    height : 68,
  }
];

var citations = [
  "'Les musées préservent notre passé;\nle recyclage préserve notre avenir.'\n Theodor Wiesengrund Adorno",
  "'Il n'y a pas de passagers sur le vaisseau Terre. Nous sommes tous des membres de l'équipage.'\nMarshall McLuhan",
  "'L'homme se doit d'être le gardien de la nature, non son propriétaire.'\nPhilippe St Marc",
  "'Les problèmes du monde ne peuvent être résolus par des sceptiques ou des cyniques dont les horizons se limitent aux réalités évidentes. Nous avons besoin d'hommes capables d'imaginer ce qui n'a jamais existé.'\nJohn F. Kennedy",
  "'Le coût de la protection du milieu naturel est beaucoup plus faible que le coût de sa reconstitution. La défense de la nature est rentable pour les nations.'\nPhilippe St Marc",
  "'Nous n'héritons pas de la terre de nos parents, nous l'empruntons à nos enfants.'\nAntoine de Saint-Exupéry",
  "'Le développement durable n'est ni une utopie ni même une contestation, mais la condition de survie de l'économie de marché.'\nLouis Schweitzer",

]
