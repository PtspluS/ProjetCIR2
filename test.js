


var game = new Phaser.Game(64*6, 64*6, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {

	game.load.spritesheet('dude', 'assets/dude.png', 44, 68);
	game.load.spritesheet('oven','assets/ovenanimation.png',64,94)
	game.load.image('ground','assets/wood.png');


	game.load.image('mech2','assets/boutonrose.png')
}
function create() {
game.physics.startSystem(Phaser.Physics.ARCADE);
var nbcase=6
map=[
		[0,0,0,0,0,1],
		[0,0,0,1,0,1],
		[0,0,0,0,0,1],
		[0,0,0,0,0,1],
		[0,0,0,0,0,1],
		[0,0,0,1,0,1],
		[0,0,0,1,0,1],
		[0,0,0,1,0,1]
];

platformsSolid = game.add.group();
platformsSolid.enableBody = true;
object=game.add.group();
object.enableBody = true;


for(let i=0;i<nbcase;i++){
	for(let j=0;j<nbcase;j++){
		if(map[j][i]==0){
			game.add.sprite(i*64, j*64, 'ground');
			map[j][i]=null;
		}else if(map[j][i]==1){
			let tuile=platformsSolid.create(i*64, j*64, 'ground');
			tuile.body.immovable = true;
			map[j][i]=new Oven('oven',i*64,j*64 - (94-64),object);
		}
	}
}


player1=new Player('dude',50,50,object);
player2=new Player('dude',200,200,object);
game.world.bringToTop(object);

KeyUP = new Key(game, UP);
KeyDOWN = new Key(game, DOWN);
KeyLEFT = new Key(game, LEFT);
KeyRIGHT = new Key(game, RIGHT);
Key0 = new Key(game, NUMPAD_0);




}
function update() {


	player1.update(Phaser.Keyboard.UP,Phaser.Keyboard.DOWN,Phaser.Keyboard.LEFT,Phaser.Keyboard.RIGHT,Phaser.Keyboard.NUM0,platformsSolid,player2);
	player2.update(Phaser.Keyboard.Z,Phaser.Keyboard.S,Phaser.Keyboard.Q,Phaser.Keyboard.D,Phaser.Keyboard.A,platformsSolid,player1);
 	object.sort('y', Phaser.Group.SORT_ASCENDING);




}
