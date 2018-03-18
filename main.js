var jeu = new Phaser.Game(1000, 300, Phaser.AUTO, '');

jeu.state.add('Menu', Menu);
jeu.state.add('MenuGame', MenuGame);
//jeu.state.add('MenuOpt', MenuOpt);
//jeu.state.add('Game', Game);

jeu.state.start('Menu');
