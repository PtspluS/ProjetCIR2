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
let leftSkin = function(idPlayer){
  if(this.idPlayer<=0){
    this.('skinPlayer'+idPlayer) = skins.length-1;
  }
  else{
    this.('skinPlayer'+idPlayer)--;
  }
  ('skinName'+idPlayer).text = skins[idplayer].name;
}
let rightSkin = function(idPlayer){
  this.('skinPlayer'+idPlayer) = this.('skinPlayer'+idPlayer)%skins.length;
  ('skinName'+idPlayer).text = skins[idplayer].name;
}
var MenuGame ={
  cursorMap : 0,
  skinPlayer1:0,
  skinPlayer2:0,
  skinPlayer3:0,
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
    sprite1 = MenuGame.add.sprite(MenuGame.world.centerX-0.5*MenuGame.world.centerX,MenuGame.world.centerY-0.5*MenuGame.world.centerY,skins[this.skinPlayer1].sprite);
    sprite1.anchor.setTo(0.5,0.5);
    sprite2 = MenuGame.add.sprite(MenuGame.world.centerX+0.5*MenuGame.world.centerX,MenuGame.world.centerY-0.5*MenuGame.world.centerY,skins[this.skinPlayer2].sprite);
    sprite2.anchor.setTo(0.5,0.5);
    sprite3 = MenuGame.add.sprite(MenuGame.world.centerX+0.5*MenuGame.world.centerX,MenuGame.world.centerY-0.5*MenuGame.world.centerY,skins[this.skinPlayer3].sprite);
    sprite3.anchor.setTo(0.5,0.5);
    let button = MenuGame.add.button(MenuGame.world.centerX, MenuGame.world.centerY+imgMap.height/2+80, 'go', goGame, this,1,0,2);
    button.anchor.setTo(0.5,0.5);
    let button2 = MenuGame.add.button(MenuGame.world.centerX-128, MenuGame.world.centerY+imgMap.height/2+80,'leftArrow',leftMap,this,1,0,2);
    button2.anchor.setTo(0.5,0.5);
    let button3 = MenuGame.add.button(MenuGame.world.centerX+128, MenuGame.world.centerY+imgMap.height/2+80,'rightArrow',rightMap,this,1,0,2);
    button3.anchor.setTo(0.5,0.5);
    let back = MenuGame.add.button(0,0,'back',returnMenu,this,1,0,2);
    mapName = MenuGame.add.text(MenuGame.world.centerX, MenuGame.world.centerY-imgMap.height/2-10,levels[this.cursorMap].name);
    mapName.fill = 'white';
    mapName.anchor.setTo(0.5,0.5);
    skinName1 = MenuGame.add.text(MenuGame.world.centerX-0.5*MenuGame.world.centerX,MenuGame.world.centerY-0.5*MenuGame.world.centerY-sprite1.height/2-10,skins[this.skinPlayer1].name);
    skinName2 = MenuGame.add.text(MenuGame.world.centerX+0.5*MenuGame.world.centerX,MenuGame.world.centerY-0.5*MenuGame.world.centerY-sprite2.height/2-10,skins[this.skinPlayer2].name);
    skinName1 = MenuGame.add.text(MenuGame.world.centerX+0.5*MenuGame.world.centerX,MenuGame.world.centerY+0.5*MenuGame.world.centerY-sprite3.height/2-10,skins[this.skinPlayer3].name);
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
