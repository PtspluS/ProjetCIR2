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
    this.state.start('Game');
  }

var MenuGame ={
  preload : function(){
    MenuGame.load.spritesheet('go','assets/go.png',104,80);
    MenuGame.load.spritesheet('back','assets/backbutton.png',68,84);
  },
  create : function(){
    musicMenu.resume();//relance la musique là ou elle s'était arrêtée
    let button = MenuGame.add.button(MenuGame.world.centerX, MenuGame.world.centerY+128, 'go', goGame, this,1,0,2);
    button.anchor.setTo(0.5,0.5);
    let back = MenuGame.add.button(0,0,'back',returnMenu,this,1,0,2);
  }
}

/*let moveLeft = function(let indice){
  indice--;
  if(indice<0) indice = correspondanceMap.length;
  indice = indice%correspondanceMap.length;

}*/

var MenuOpt ={
  preload: function(){
    MenuOpt.load.image('title','assets/banner.png');
    MenuOpt.load.image('button3','assets/table.png');
  },
  create : function(){
    musicMenu.resume();//relance la musique là ou elle s'était arrêtée
    let button = MenuOpt.add.button(MenuOpt.world.centerX,MenuOpt.world.centerY, 'button3');
    button.anchor.setTo(0.5,0.5);
  }
}
