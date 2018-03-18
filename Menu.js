var Menu = new Phaser.Game(1000, 600, Phaser.AUTO, '', { preload: preload, create: create });

function preload() {
  Menu.load.image('title','assets/banner.png');
  Menu.load.image('button1','assets/table.png');
}
function create() {
  Menu.add.sprite(Menu.world.centerX-16, 0, 'title');
  Menu.state.add('level1',Level1);
//  Menu.state.start('level1');

//button = Menu.add.button(Menu.world.centerX-16, Menu.world.centerY, 'button1', function(){Level1(menu);}, this, 2, 1, 0);
}
