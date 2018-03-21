//Menu générale
var Menu = {
  preload : function(){
    Menu.load.audio('testmus','musics/testmus.mp3');//Musique du menu
    Menu.load.image('title','assets/banner.png');
    Menu.load.image('button1','assets/game.png');
    Menu.load.image('button2','assets/controls.png')
  },
  create : function(){
    musicMenu = Menu.add.audio('testmus');
    if(musicMenu.pause()===true){
      musicMenu.resume();
    }
    else {
      musicMenu.play("",0,1,true);
    }
    let banner = Menu.add.sprite(Menu.world.centerX, Menu.world.centerY-128, 'title');
    banner.anchor.setTo(0.5,0.5);
    banner.scale.setTo(2,2);
    let button = Menu.add.button(Menu.world.centerX, Menu.world.centerY, 'button1', goMenuGame,this,0,0,0);
    button.anchor.setTo(0.5,0.5);
    let btt = Menu.add.button(Menu.world.centerX, Menu.world.centerY+64,'button2',goMenuOpt, this,0,0,0);
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
    MenuGame.load.image('title','assets/banner.png');
    MenuGame.load.image('button','assets/go.png');
    MenuGame.load.image('arrow','assets/arrow.png');
  },
  create : function(){
    musicMenu.resume();//relance la musique là ou elle s'était arrêtée
    let button = MenuGame.add.button(MenuGame.world.centerX, MenuGame.world.centerY+128, 'button', goGame, this,0,0,0);
    button.anchor.setTo(0.5,0.5);
    let back = MenuGame.add.button(0,0,'arrow',returnMenu,this,0,0,0);
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
    MenuOpt.load.image('arrow','assets/arrow.png')
  },
  create : function(){
    musicMenu.resume();//relance la musique là ou elle s'était arrêtée
    let button = MenuOpt.add.button(MenuOpt.world.centerX,MenuOpt.world.centerY, 'button3');
    button.anchor.setTo(0.5,0.5);
    let back = MenuGame.add.button(0,0,'arrow',returnMenu,this,0,0,0);
  }
}
