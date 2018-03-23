//Menu générale
var Menu = {
  preload : function(){
    Menu.load.audio('testmus','musics/testmus.mp3');//Musique du menu
    Menu.load.spritesheet('title','assets/logo.png',408,222);
    Menu.load.spritesheet('game','assets/game.png',172,80);
    Menu.load.spritesheet('controls','assets/controls.png',296,80);
  },
  create : function(){
    jeu.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL; // SHOW_ALL pour eviter les etirements
    musicMenu = Menu.add.audio('testmus');
    if(musicMenu.pause()===true){
      musicMenu.resume();
    }
    else {
      musicMenu.play("",0,1,true);
    }

    var tab = Array(99);
    for(let i = 0; i < 99; i++){
      tab[i] = i;
    }

    let banner = Menu.add.sprite(Menu.world.centerX, Menu.world.centerY-152, 'title');
    banner.animations.add('shiny', tab, 20, true);
    banner.play('shiny');
    banner.anchor.setTo(0.5,0.5);
    banner.scale.setTo(1,1);
    let btt1 = Menu.add.button(Menu.world.centerX, Menu.world.centerY+20, 'game', goMenuGame,this,1,0,2);
    btt1.anchor.setTo(0.5,0.5);
    let btt = Menu.add.button(Menu.world.centerX, Menu.world.centerY+134,'controls',goMenuOpt, this,1,0,2);
    btt.anchor.setTo(0.5,0.5);
  }
}
let goMenuGame =  function(){
  musicMenu.pause();//met la musique en pause pour le changement de page
  this.state.start('MenuGame');
}
let goMenuOpt = function(){
  musicMenu.pause();//met la musique en pause pour le changement de page
  this.state.start('MenuOpt');
}
let returnMenu = function(){
  musicMenu.stop();//met la musique en pause pour le changement de page
  this.state.start('Menu');
}
let goGame = function(){
  musicMenu.stop();
  game.id = this.cursorMap;
  game.skinP1 = this.skinPlayer1;
  game.skinP2 = this.skinPlayer2;
  this.state.start('Game');
}



let leftMap = function(){
  if(this.cursorMap<=0){
    this.cursorMap = levels.length-1;
  }
  else{
    this.cursorMap--;
  }
  mapName.text = levels[this.cursorMap].name;
  imgMap.image = levels[this.cursorMap].name;
}
let rightMap = function(){
  this.cursorMap = (this.cursorMap+1)%levels.length;
  mapName.text = levels[this.cursorMap].name;
  imgMap.image = levels[this.cursorMap].name;
}
var MenuGame ={
  cursorMap : 0,
  skinPlayer1:0,
  skinPlayer2:0,
  preload : function(){
    MenuGame.load.spritesheet('go','assets/go.png',104,80);
    MenuGame.load.spritesheet('back','assets/backbutton.png',68,84);
    MenuGame.load.spritesheet('leftArrow', 'assets/leftbutton.png',74,76);
    MenuGame.load.spritesheet('rightArrow','assets/rightbutton.png',74,76);
    for (let lvl in levels) {//boucle de chargement de tt les lvl
      MenuGame.load.image(levels[lvl].name,levels[lvl].imagePath);
    };
    for (let sk in skins) {//boucle de chargement de tt les skins
      MenuGame.load.spritesheet(skins[sk].name, skins[sk].sprite, skins[sk].width, skins[sk].height);
    }
  },
  create : function(){
    musicMenu.resume();//relance la musique là ou elle s'était arrêtée
    imgMap = MenuGame.add.image(MenuGame.world.centerX, MenuGame.world.centerY,levels[this.cursorMap].name)
    imgMap.anchor.setTo(0.5,0.5);
    let button1 = MenuGame.add.button(MenuGame.world.centerX, MenuGame.world.centerY+imgMap.height/2+80, 'go', goGame, this,1,0,2);
    button1.anchor.setTo(0.5,0.5);
    let button2 = MenuGame.add.button(MenuGame.world.centerX-128, MenuGame.world.centerY+imgMap.height/2+80,'leftArrow',leftMap,this,1,0,2);
    button2.anchor.setTo(0.5,0.5);
    let button3 = MenuGame.add.button(MenuGame.world.centerX+128, MenuGame.world.centerY+imgMap.height/2+80,'rightArrow',rightMap,this,1,0,2);
    button3.anchor.setTo(0.5,0.5);
    let back = MenuGame.add.button(0,0,'back',returnMenu,this,1,0,2);
    mapName = MenuGame.add.text(MenuGame.world.centerX, MenuGame.world.centerY-imgMap.height/2-10,levels[this.cursorMap].name);
    mapName.fill = 'white';
    mapName.anchor.setTo(0.5,0.5);
	
	// Selection Perso 1
    sprite1 = MenuGame.add.sprite(0.5*MenuGame.world.centerX,MenuGame.world.centerY-0.5*MenuGame.world.centerY,skins[this.skinPlayer1].name);
    sprite1.anchor.setTo(0.5,0.5);
	sprite1.animations.add('turn',[0,4,8,12,16,20,24,28], 8, true);
	sprite1.play('turn');
    let bp1 = MenuGame.add.button(0.5*MenuGame.world.centerX-128, 0.5*MenuGame.world.centerY-sprite1.height/2-10+80,'leftArrow',() => {
			this.skinPlayer1 = (this.skinPlayer1 == 0 ? skins.length - 1 : this.skinPlayer1 - 1)
			sprite1.loadTexture( skins[this.skinPlayer1].name, 0);
			sprite1.animations.add('turn',[0,4,8,12,16,20,24,28], 8, true);
			sprite1.play('turn');
		},this,1,0,2);
	bp1.anchor.setTo(0.5,0.5);
    let bp2 = MenuGame.add.button(0.5*MenuGame.world.centerX+128, 0.5*MenuGame.world.centerY-sprite1.height/2-10+80,'rightArrow',() => {
			this.skinPlayer1 = (this.skinPlayer1 == skins.length - 1 ? 0 : this.skinPlayer1 + 1)
			sprite1.loadTexture( skins[this.skinPlayer1].name, 0);
			sprite1.animations.add('turn',[0,4,8,12,16,20,24,28], 8, true);
			sprite1.play('turn');
		},this,1,0,2);
	bp2.anchor.setTo(0.5,0.5);
	
	
    sprite2 = MenuGame.add.sprite(1.5*MenuGame.world.centerX,MenuGame.world.centerY-0.5*MenuGame.world.centerY,skins[this.skinPlayer2].name);
    sprite2.anchor.setTo(0.5,0.5);
	sprite2.animations.add('turn',[0,4,8,12,16,20,24,28], 8, true);
	sprite2.play('turn');
    let bpp1 = MenuGame.add.button(1.5*MenuGame.world.centerX-128, 0.5*MenuGame.world.centerY-sprite2.height/2-10+80,'leftArrow',() => {
			this.skinPlayer2 = (this.skinPlayer2 == 0 ? skins.length - 1 : this.skinPlayer2 - 1)
			sprite2.loadTexture( skins[this.skinPlayer2].name, 0);
			sprite2.animations.add('turn',[0,4,8,12,16,20,24,28], 8, true);
			sprite2.play('turn');
		},this,1,0,2);
    bpp1.anchor.setTo(0.5,0.5);
    let bpp2 = MenuGame.add.button(1.5*MenuGame.world.centerX+128, 0.5*MenuGame.world.centerY-sprite2.height/2-10+80,'rightArrow',() => {
			this.skinPlayer2 = (this.skinPlayer2 == skins.length - 1 ? 0 : this.skinPlayer2 + 1)
			sprite2.loadTexture( skins[this.skinPlayer2].name, 0);
			sprite2.animations.add('turn',[0,4,8,12,16,20,24,28], 8, true);
			sprite2.play('turn');
		},this,1,0,2);
    bpp2.anchor.setTo(0.5,0.5);
	}
}

var MenuOpt ={
  preload: function(){
    MenuOpt.load.image('button3','assets/table.png');
    MenuOpt.load.spritesheet('back','assets/backbutton.png',68,84);
  },
  create : function(){
    musicMenu.resume();//relance la musique là ou elle s'était arrêtée
    let button1 = MenuOpt.add.button(MenuOpt.world.centerX,MenuOpt.world.centerY, 'button3');
    button1.anchor.setTo(0.5,0.5);
    let back = MenuOpt.add.button(0,0,'back',returnMenu,this,1,0,2);
  }
}
