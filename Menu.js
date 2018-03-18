var Menu = {
  preload : function(){
    Menu.load.audio('testmus','musics/testmus.mp3');
    Menu.load.image('title','assets/banner.png');
    Menu.load.image('button1','assets/table.png');
  },
  create : function(){
    let music = Menu.add.audio('testmus');
    musi.play("",0,0.5,true);
    let button = Menu.add.button(Menu.world.centerX, Menu.world.centerY, 'button1', goMenuGame,this,0,0,0);
    button.anchor.setTo(0.5,0.5);
  },
  goMenuGame : function(){
    this.state.start('MenuGame');
  }
}
