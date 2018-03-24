var game = {
	id :0,
	skinP1 :0,
	skinP2 :0,
	preload : function() {
		for (let sk in skins) {//boucle de chargement de tout les skins
			game.load.spritesheet(skins[sk].name, skins[sk].sprite, skins[sk].width, skins[sk].height);
		}
		//game.load.spritesheet('billy', 'assets/billy.png', 44, 68);
		//game.load.spritesheet('walle', 'assets/walle.png', 44, 68);
		//game.load.spritesheet('bob', 'assets/bob.png', 44, 68);
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
		game.load.spritesheet('route','assets/route.png',128,64);
		game.load.spritesheet('truck','assets/truck.png',128,204);
		game.load.spritesheet('barriere','assets/barriere.png',128,80);
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
		let level = levels[this.id];
		map = Creatmap(level);
			player1=new Player(skins[this.skinP1].name,64* level.spawnpoints[0][0] +16,64*level.spawnpoints[0][1],object,itemGui);
			player2=new Player(skins[this.skinP2].name,64* level.spawnpoints[1][0] +16,64*level.spawnpoints[1][1],object,itemGui);
/*
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
*/
		},
		update : function() {

			player1.update(Phaser.Keyboard.UP,Phaser.Keyboard.DOWN,Phaser.Keyboard.LEFT,Phaser.Keyboard.RIGHT,Phaser.Keyboard.NUMPAD_2,Phaser.Keyboard.NUMPAD_3,platformsSolid,player2);
			player2.update(Phaser.Keyboard.Z,Phaser.Keyboard.S,Phaser.Keyboard.Q,Phaser.Keyboard.D,Phaser.Keyboard.F,Phaser.Keyboard.G,platformsSolid,player1);
			object.sort('y', Phaser.Group.SORT_ASCENDING);

		}

	}
