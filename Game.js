var game = {
	id :0,
	skinP1 :0,
	skinP2 :0,
	controlP1 : [
		() => {return game.input.keyboard.isDown(Phaser.Keyboard.Z);},
		() => {return game.input.keyboard.isDown(Phaser.Keyboard.S);},
		() => {return game.input.keyboard.isDown(Phaser.Keyboard.Q);},
		() => {return game.input.keyboard.isDown(Phaser.Keyboard.D);},
		() => {return game.input.keyboard.isDown(Phaser.Keyboard.F);},
		() => {return game.input.keyboard.isDown(Phaser.Keyboard.G);}
	],
	controlP2 : [
		() => {return game.input.keyboard.isDown(Phaser.Keyboard.UP);},
		() => {return game.input.keyboard.isDown(Phaser.Keyboard.DOWN);},
		() => {return game.input.keyboard.isDown(Phaser.Keyboard.LEFT);},
		() => {return game.input.keyboard.isDown(Phaser.Keyboard.RIGHT);},
		() => {return game.input.keyboard.isDown(Phaser.Keyboard.NUMPAD_2);},
		() => {return game.input.keyboard.isDown(Phaser.Keyboard.NUMPAD_3);}
	],
	cameraShake: function(count) {
		this.camera.x+= Math.floor(Math.random() * (20 + 1)) - 10;
		this.camera.y+= Math.floor(Math.random() * (20 + 1)) - 10;
		if(count < 10){
			game.time.events.add(10, () => {this.cameraShake(count+1); } , this);
		}else{
			this.camera.x = 0;
			this.camera.y = 0;
		}
    },
	preload : function() {
		for (let sk in skins) {//boucle de chargement de tout les skins
			game.load.spritesheet(skins[sk].name, skins[sk].sprite, skins[sk].width, skins[sk].height);
		}

		// Sprites du jeu
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
		game.load.spritesheet('barriere','assets/barriere.png',128,80);
		game.load.image('truck','assets/truck.png');
		game.load.image('ground','assets/beton.png');
		game.load.image('table','assets/table.png');
		game.load.image('benneverre','assets/benneverre.png');
		game.load.image('bennemetal','assets/bennemetal.png');
		game.load.image('benneplastique','assets/benneplastique.png');
		game.load.image('bennepneu','assets/bennepneu.png');
		game.load.image('bennecarton','assets/bennecarton.png');

		//Sprites Pause
		game.load.spritesheet('help','assets/help.png', 397, 60);
		game.load.spritesheet('resume','assets/buttons/resume.png',236,80);
		game.load.spritesheet('menu','assets/buttons/menu.png',168,80);
		game.load.spritesheet('helpbutton','assets/buttons/helpbutton.png',204,80);

		 game.load.bitmapFont('font', 'fonts/fontwith.png', 'fonts/fontwith.fnt');//chargement de la police
		 game.load.bitmapFont('fontred', 'fonts/font.png', 'fonts/font.fnt');//chargement de la police


	},
	create : function() {

		// Lancement de la physique Arcade
		game.physics.startSystem(Phaser.Physics.ARCADE);

		// Bordures de la scene
		game.world.setBounds(-10, -10, jeu.width + 10, jeu.height + 10);

		// Creation de la map
		let level = levels[this.id];
		map = Creatmap(level);
		player1=new Player(skins[this.skinP1].name,64* level.spawnpoints[0][0] +16,64*level.spawnpoints[0][1],object,itemGui);
		player2=new Player(skins[this.skinP2].name,64* level.spawnpoints[1][0] +16,64*level.spawnpoints[1][1],object,itemGui);

			//Creation du timer
			Mytimer=new MyTimer(120);

			//Creation d un score
			Score= new MyScore();

		// PAUSE
		var pauseGroup = game.add.group();
		var keyPause = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
		keyPause.onDown.add(()=>{
			if(jeu.paused){
				// Destruction des elements de la pause
				pauseGroup.removeAll(true,true);
				jeu.paused = false;
			} else {
				// Fond Gris
				var pauseRect = game.add.graphics(0, 0);
				pauseRect.beginFill(0x222222);
				pauseRect.drawRect(0, 0, 1344, 768)
				pauseRect.alpha = 0.8;
				pauseGroup.add(pauseRect);

				// Aides
				var pauseHelps = [];
				pauseHelps.push(pauseGroup.create(700, (pauseHelps.length * 80 + 200), 'help'));
				pauseHelps[pauseHelps.length - 1].frame = 5;
				pauseHelps[pauseHelps.length - 1].alpha = 0;
				if(levels[this.id].items.indexOf(itemsId.Metal) != -1){
					pauseHelps.push(pauseGroup.create(700, (pauseHelps.length * 80 + 200), 'help'));
					pauseHelps[pauseHelps.length - 1].frame = 0;
					pauseHelps[pauseHelps.length - 1].alpha = 0;
				}
				if(levels[this.id].items.indexOf(itemsId.Carton) != -1){
					pauseHelps.push(pauseGroup.create(700, (pauseHelps.length * 80 + 200), 'help'));
					pauseHelps[pauseHelps.length - 1].frame = 1;
					pauseHelps[pauseHelps.length - 1].alpha = 0;
				}
				if(levels[this.id].items.indexOf(itemsId.Pneu) != -1){
					pauseHelps.push(pauseGroup.create(700, (pauseHelps.length * 80 + 200), 'help'));
					pauseHelps[pauseHelps.length - 1].frame = 2;
					pauseHelps[pauseHelps.length - 1].alpha = 0;
				}
				if(levels[this.id].items.indexOf(itemsId.Plastique) != -1){
					pauseHelps.push(pauseGroup.create(700, (pauseHelps.length * 80 + 200), 'help'));
					pauseHelps[pauseHelps.length - 1].frame = 3;
					pauseHelps[pauseHelps.length - 1].alpha = 0;
				}
				if(levels[this.id].items.indexOf(itemsId.Verre) != -1){
					pauseHelps.push(pauseGroup.create(700, (pauseHelps.length * 80 + 200), 'help'));
					pauseHelps[pauseHelps.length - 1].frame = 4;
					pauseHelps[pauseHelps.length - 1].alpha = 0;
				}

				// Boutons
				var pauseHelpb = game.add.button(900, 100, 'helpbutton', () => {
					// Affiche / enleve les aides
					for(let i = 0; i < pauseHelps.length; i++){
						pauseHelps[i].alpha = (pauseHelps[i].alpha + 1) % 2;
					}
				},this,1,0,2);
				pauseHelpb.anchor.setTo(0.5,0.5);
				pauseGroup.add(pauseHelpb);

				var pauseResume = game.add.button(300, 300, 'resume', () => {
					// Destruction des elements de la pause
					pauseGroup.removeAll(true,true);
					jeu.paused = false;
				},this,1,0,2);
				pauseResume.anchor.setTo(0.5,0.5);
				pauseGroup.add(pauseResume);

				var pauseMenu = game.add.button(200, 400, 'menu', () => {
					// Retour au menu
					jeu.paused = false;
					this.state.start('Menu');
				},this,1,0,2);
				pauseMenu.anchor.setTo(0.5,0.5);
				pauseGroup.add(pauseMenu);

				jeu.paused = true;
			}
		},this);
		// FIN PAUSE
	},
	update : function() {
		player1.update(this.controlP1[0],this.controlP1[1],this.controlP1[2],this.controlP1[3],this.controlP1[4],this.controlP1[5],platformsSolid,player2);
		player2.update(this.controlP2[0],this.controlP2[1],this.controlP2[2],this.controlP2[3],this.controlP2[4],this.controlP2[5],platformsSolid,player1);
		object.sort('y', Phaser.Group.SORT_ASCENDING);
		Mytimer.updatetimer();


	}
}
