


var game = new Phaser.Game(64*6, 64*6, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {

	game.load.spritesheet('dude', 'assets/dude.png', 44, 68);
	game.load.image('ground','assets/wood.png');
	game.load.image('mech1','assets/boutonrouge.png')
	game.load.image('mech2','assets/boutonrose.png')
}
function create() {
game.physics.startSystem(Phaser.Physics.ARCADE);
var nbcase=6
map=[[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,1,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];

platforms = game.add.group();
platforms.enableBody = true;
for(let i=0;i<nbcase;i++){

for(let j=0;j<nbcase;j++){
		  if(map[i][j]==0){game.add.sprite(i*64, j*64, 'ground');
		}else if(map[i][j]==1){map[i][j]=new Machine('mech1',i*64,j*64,platforms);}
	}
}

object=game.add.group();
player1=new Player('dude',50,50,object);
player2=new Player('dude',200,200,object);

object.add(platforms)



//object.sort();

}
function update() {


	player1.update(Phaser.Keyboard.UP,Phaser.Keyboard.DOWN,Phaser.Keyboard.LEFT,Phaser.Keyboard.RIGHT,platforms,player2,object);
	player2.update(Phaser.Keyboard.Z,Phaser.Keyboard.S,Phaser.Keyboard.Q,Phaser.Keyboard.D,platforms,player1,object);


    if(game.input.keyboard.isDown(Phaser.Keyboard.A)){
game.world.swap(player1.player, player2.player);

}


}
