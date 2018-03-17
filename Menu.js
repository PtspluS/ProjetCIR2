var Menu = new Phaser.Game(1000, 300, Phaser.AUTO, '', { preload: preload, create: create });

function preload() {
  Menu.load.image('title','assets/banner.png');
  Menu.load.image('button1','assets/table.png');
}
function create() {
button = Menu.add.button(Menu.world.centerX, Menu.world.centerY, 'button1', function(){Level1();}, this, 2, 1, 0);
}
