//Menu générale
var Menu = {
  preload : function(){
    Menu.load.audio('testmus','musics/testmus.mp3');//Musique du menu
    Menu.load.image('title','assets/banner.png');
    Menu.load.image('button1','assets/table.png');
  },
  create : function(){
    musicMenu = Menu.add.audio('testmus');
    musicMenu.play("",0,0.5,true);
    let button = Menu.add.button(Menu.world.centerX, Menu.world.centerY, 'button1', goMenuGame,this,0,0,0);
    button.anchor.setTo(0.5,0.5);
    let btt = Menu.add.button(Menu.world.centerX, Menu.world.centerY+32,'button1',goMenuOpt, this,0,0,0);
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

var MenuGame ={
  preload : function(){
    MenuGame.load.image('title','assets/banner.png');
    MenuGame.load.image('button2','assets/table.png');
  },
  create : function(){
    musicMenu.resume();//relance la musique là ou elle s'était arrêtée
    let button = MenuGame.add.button(MenuGame.world.centerX, MenuGame.world.centerY, 'title');
    button.anchor.setTo(0.5,0.5);
  }
}

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
