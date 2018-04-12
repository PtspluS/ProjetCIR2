var game = {
	id : 0,
	playersskins : [0, 0, 0, 0],
	nbPlayers : 2,
	score : 0,
	chrono : 0,
	chronomax : 2*60,
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
	controlP3 : [
		() => {return game.input.keyboard.isDown(NaN);},
		() => {return game.input.keyboard.isDown(NaN);},
		() => {return game.input.keyboard.isDown(NaN);},
		() => {return game.input.keyboard.isDown(NaN);},
		() => {return game.input.keyboard.isDown(NaN);},
		() => {return game.input.keyboard.isDown(NaN);}
	],
	controlP4 : [
		() => {return game.input.keyboard.isDown(NaN);},
		() => {return game.input.keyboard.isDown(NaN);},
		() => {return game.input.keyboard.isDown(NaN);},
		() => {return game.input.keyboard.isDown(NaN);},
		() => {return game.input.keyboard.isDown(NaN);},
		() => {return game.input.keyboard.isDown(NaN);}
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
		game.load.spritesheet('title','assets/logo.png',408,222);
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
		game.load.spritesheet('fullscreen','assets/buttons/fullscreen.png',84,92);

		game.load.bitmapFont('font', 'fonts/fontwith.png', 'fonts/fontwith.fnt');//chargement de la police
		game.load.bitmapFont('fontred', 'fonts/font.png', 'fonts/font.fnt');//chargement de la police

		//Sound
		game.load.audio('broyeursound', 'Sound/broyeur.mp3');
		game.load.audio('ovensound', 'Sound/oven.mp3');
		game.load.audio('pressesound', 'Sound/presse.mp3');
		game.load.audio('souffleriesound', 'Sound/soufflerie.mp3');
		game.load.audio('incinerateursound', 'Sound/incinerateur.mp3');
			game.load.audio('compresseursound', 'Sound/compresseur.mp3');
		game.load.audio('bassinesound', 'Sound/bassine.mp3');

	},
	create : function() {

		// Lancement de la physique Arcade
		game.physics.startSystem(Phaser.Physics.ARCADE);

		// Bordures de la scene
		game.world.setBounds(-10, -10, jeu.width + 10, jeu.height + 10);

		// Creation de la map
		let level = levels[this.id];
		map = Creatmap(level);
		players = [];
		for(let i = 0; i < this.nbPlayers; i++){
			players.push(new Player(skins[this.playersskins[i]].name,64* level.spawnpoints[i][0] +10,64*level.spawnpoints[i][1]-4,object,itemGui))
		}

		//enleve le cursor
		document.body.style.cursor = 'none';

		//Creation du timer
		mytimer = new MyTimer(level.chrono);

		//Creation d un score
		this.score = new MyScore();

		// PAUSE
		var pauseGroup = game.add.group();
		var keyPause = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
		keyPause.onDown.add(()=>{
			if(jeu.paused){
				// Destruction des elements de la pause
				pauseGroup.removeAll(true,true);
				document.body.style.cursor = 'none';
				jeu.paused = false;
			} else {
				// Fond Gris
				document.body.style.cursor = 'default';
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
				let pauseHelpb = game.add.button(900, 100, 'helpbutton', () => {
					// Affiche / enleve les aides
					for(let i = 0; i < pauseHelps.length; i++){
						pauseHelps[i].alpha = (pauseHelps[i].alpha + 1) % 2;
					}
				},this,1,0,2);
				pauseHelpb.anchor.setTo(0.5,0.5);
				pauseGroup.add(pauseHelpb);

				let banner = game.add.button(300,100,'title',()=>{
						let mapName = game.add.bitmapText(500,30,'font','Map : '+levels[MenuGame.cursorMap].name,30);
						let timerInfo = game.add.bitmapText(500,80,'font','Time : '+Math.floor((mytimer.timemax-mytimer.valuetime)/60)+':'+((mytimer.timemax-mytimer.valuetime)%60),30);
						let score = game.add.bitmapText(500,130,'font','Money : '+this.score.score+'$');
						pauseGroup.add(mapName);
						pauseGroup.add(timerInfo);
						pauseGroup.add(score);
				});//banniere pour le menu de pause
				banner.anchor.setTo(0.5,0.5);
				banner.scale.setTo(0.75,0.75);
				pauseGroup.add(banner);

				// Bouton Fullscreen
				let goFullscreen = game.add.button(game.world.width-104, 20,'fullscreen',() => {
					if (jeu.scale.isFullScreen){
						jeu.scale.stopFullScreen();
					} else {
						jeu.scale.startFullScreen(false);
					}
				},this,1,0,2);
				pauseGroup.add(goFullscreen);

				let pauseResume = game.add.button(300, 300, 'resume', () => {
					// Destruction des elements de la pause
					pauseGroup.removeAll(true,true);
					jeu.paused = false;
				},this,1,0,2);
				pauseResume.anchor.setTo(0.5,0.5);
				pauseGroup.add(pauseResume);

				let pauseMenu = game.add.button(300, 450, 'menu', () => {
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
		let playersControls = [this.controlP1, this.controlP2, this.controlP3, this.controlP4];
		for(let i = 0; i < this.nbPlayers; i++){
			players[i].update(playersControls[i][0],playersControls[i][1],playersControls[i][2],playersControls[i][3],playersControls[i][4],playersControls[i][5],platformsSolid,players);
		}
		object.sort('y', Phaser.Group.SORT_ASCENDING);
		mytimer.updatetimer();
		if(mytimer.valuetime == mytimer.timemax){
			end.score = this.score;
			document.body.style.cursor = 'default';
			this.state.start('End');
		}
	}
}
