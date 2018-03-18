var game;

game = new Phaser.Game(1000, 300, Phaser.AUTO, '');

game.state.add('Menu', Menu);
game.state.add('MenuGame', MenuGame);
game.state.add('MenuOpt', MenuOpt);
game.state.add('Game', Game);

game.state.start('Menu');
