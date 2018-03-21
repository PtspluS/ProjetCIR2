var jeu = new Phaser.Game(1150, 500, Phaser.AUTO, '');

//Donne les différents menus
jeu.state.add('Menu', Menu);
jeu.state.add('MenuGame', MenuGame);
jeu.state.add('MenuOpt', MenuOpt);
//Donne la fenetre de jeu
jeu.state.add('Game', game);

//On commence au Menu générale
jeu.state.start('Menu');
