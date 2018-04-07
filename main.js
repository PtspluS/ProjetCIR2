var jeu = new Phaser.Game(64*21,  64*12, Phaser.AUTO, '');
//Donne les différents menus
jeu.state.add('Menu', Menu);
jeu.state.add('MenuGame', MenuGame);
jeu.state.add('MenuOpt', MenuOpt);
// Donne la fenetre du tutoriel
jeu.state.add('Tuto', Tuto);
//Donne la fenetre de jeu
jeu.state.add('Game', game);
//Donne la fenetre de fin
jeu.state.add('End',end);

//On commence au Menu générale
jeu.state.start('Menu');
