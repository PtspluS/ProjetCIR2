
// Ici on doit charge le json et la map recup est matrice!!
matrice = [
	[3,3,3,3,3,4,3,3,4,4,3,3,3,3,3,3,3,3,3,3,3],
	[3,1,1,8,0,0,0,0,0,0,7,0,7,2,2,1,1,0,0,16,3],
	[3,0,0,0,0,0,2,2,2,0,0,0,0,0,0,0,0,0,0,0,3],
	[3,15,2,0,0,0,2,2,2,0,2,2,2,0,0,0,0,0,0,17,3],
	[3,11,0,0,0,0,0,0,0,0,6,6,9,0,0,1,1,0,0,0,3],
	[3,11,0,0,0,0,8,9,0,0,0,0,0,0,0,2,2,0,0,18,3],
	[3,11,0,0,0,0,12,12,12,12,11,0,0,0,0,5,5,0,0,0,3],
	[3,14,0,0,0,0,10,13,13,13,11,0,0,0,0,21,0,0,0,19,3],
	[3,0,0,0,0,0,0,0,0,10,13,0,0,0,0,0,0,0,0,20,3],
	[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]
];

var game = {

	preload : function() {

		game.load.spritesheet('billy', 'assets/billy.png', 44, 68);
		game.load.spritesheet('walle', 'assets/walle.png', 44, 68);
		game.load.spritesheet('bob', 'assets/bob.png', 44, 68);
		game.load.spritesheet('oven','assets/ovenanimation.png',64,94)
		game.load.spritesheet('items','assets/items.png', 56, 56);
		game.load.spritesheet('itemsbubbles','assets/itemsbubbles.png', 28, 28);
		game.load.spritesheet('wall','assets/wall.png',64,74);
		game.load.spritesheet('wallposters','assets/wallposters.png',64,74);
		game.load.spritesheet('broyeur','assets/broyeur.png',64,74);
		game.load.spritesheet('compresseur','assets/compresseur.png',128,64);
		game.load.spritesheet('etabli','assets/etabli.png',192,96);
		game.load.spritesheet('presse','assets/presse.png',64,108);
		game.load.spritesheet('bassine','assets/bassine.png',64,82);
		game.load.spritesheet('conveyor','assets/conveyor.png',64,74);
		game.load.spritesheet('arrive','assets/arrive.png',64,90);
		game.load.spritesheet('incinerateur','assets/incinerateur.png',64,64);
		game.load.spritesheet('soufflerie','assets/soufflerie.png',64,90);
		game.load.image('ground','assets/beton.png');
		game.load.image('table','assets/table.png');
		game.load.image('benneverre','assets/benneverre.png');
		game.load.image('bennemetal','assets/bennemetal.png');
		game.load.image('benneplastique','assets/benneplastique.png');
		game.load.image('bennepneu','assets/bennepneu.png');
		game.load.image('bennecarton','assets/bennecarton.png');
	},
	create : function() {
		game.physics.startSystem(Phaser.Physics.ARCADE);

		Creatmap(matrice);


			player1=new Player('bob',64*3+16,64*4,object,itemGui);
			player2=new Player('billy',64*2+16,64*4,object,itemGui);
			game.world.bringToTop(object);
			game.world.bringToTop(itemGui);



			map[1][13].drop(itemsId.Verre);
			map[1][14].drop(itemsId.Verre);
			map[3][2].drop(itemsId.Sceau);
			map[2][6].drop(itemsId.Metal);
			map[2][7].drop(itemsId.Sceau);
			map[2][8].drop(itemsId.Metal);
			map[3][6].drop(itemsId.Metal);
			map[3][7].drop(itemsId.Pneu);
			map[3][8].drop(itemsId.Sceau);
			map[3][10].drop(itemsId.Carton);
			map[3][11].drop(itemsId.Plastique);
			map[3][12].drop(itemsId.Plastique);
			map[5][15].drop(itemsId.Pneu);
			map[5][16].drop(itemsId.Pneu);


		},
		update : function() {

			player1.update(Phaser.Keyboard.UP,Phaser.Keyboard.DOWN,Phaser.Keyboard.LEFT,Phaser.Keyboard.RIGHT,Phaser.Keyboard.NUMPAD_2,Phaser.Keyboard.NUMPAD_3,platformsSolid,player2);
			player2.update(Phaser.Keyboard.Z,Phaser.Keyboard.S,Phaser.Keyboard.Q,Phaser.Keyboard.D,Phaser.Keyboard.F,Phaser.Keyboard.G,platformsSolid,player1);
			object.sort('y', Phaser.Group.SORT_ASCENDING);

		}

	}
