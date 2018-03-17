var Menu = new Phaser.Game(1000, 300, Phaser.AUTO, '', { preload: preload, create: create });
var MenuGame = new Phaser.Game(1000, 300, Phaser.AUTO, '',{preload: preload, create : create});
//var MenuOpt = new Phaser.Game(1000,300, Phaser.AUTO,'',{preload: preload, create: create});

function preload() {
  Menu.load.audio('testmus','musics/testmus.mp3');
  Menu.load.image('title','assets/banner.png');
  MenuGame.load.image('title','assets/banner.png');
  Menu.load.image('button1','assets/table.png');
  MenuGame.load.image('button1','assets/banner.png');
  //MenuOpt.load.image('button1','assets/banner.png');
}
function create() {
let music = Menu.add.audio('testmus');
music.play("",0,1,true);
let level = function(){
  console.log("hello");
  Menu.world.removeAll();
  mg()};
let button = Menu.add.button(Menu.world.centerX, Menu.world.centerY, 'button1', level, this, 0, 0, 0);
button.anchor.setTo(0.5,0.5);
}

mg = function(){
  console.log("hello here");
  let button = MenuGame.add.button(MenuGame.world.centerX, MenuGame.world.centerY, 'button1');
}
