


var game = new Phaser.Game(64*6, 64*6, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {

	game.load.spritesheet('dude', 'assets/dude.png', 44, 68);
	game.load.spritesheet('oven','assets/ovenanimation.png',64,94)
	game.load.spritesheet('items','assets/items.png', 56, 56);
	game.load.image('ground','assets/beton.png');
	game.load.image('table','assets/table.png');
}
function create() {
game.physics.startSystem(Phaser.Physics.ARCADE);
var nbcase=6
map=[
		[0,0,0,0,0,1],
		[0,0,2,1,0,1],
		[0,0,2,2,0,1],
		[0,0,0,0,0,1],
		[0,0,2,2,0,1],
		[2,0,2,1,0,1]
];

platformsSolid = game.add.group();
platformsSolid.enableBody = true;
object=game.add.group();
object.enableBody = true;
itemGui=game.add.group();
itemGui.enableBody = true;


for(let i=0;i<nbcase;i++){
	for(let j=0;j<nbcase;j++){
		if(map[j][i]==0){
			game.add.sprite(i*64, j*64, 'ground');
		}else if(map[j][i]==1){
			let tuile = platformsSolid.create(i*64, j*64, 'ground');
			tuile.body.immovable = true;
			map[j][i] = new Oven('oven',i*64,j*64 - (94-64),object);
		}else if(map[j][i]==2){
			let tuile=platformsSolid.create(i*64, j*64, 'ground');
			tuile.body.immovable = true;
			map[j][i] = new Table('table', i*64, j*64 - (84-64),object);
		}
	}
}


player1=new Player('dude',50,50,object,itemGui);
player2=new Player('dude',200,200,object,itemGui);
game.world.bringToTop(object);
game.world.bringToTop(itemGui);



map[1][2].drop(1);


}
function update() {
	
	player1.update(Phaser.Keyboard.UP,Phaser.Keyboard.DOWN,Phaser.Keyboard.LEFT,Phaser.Keyboard.RIGHT,Phaser.Keyboard.NUMPAD_0,platformsSolid,player2);
	player2.update(Phaser.Keyboard.Z,Phaser.Keyboard.S,Phaser.Keyboard.Q,Phaser.Keyboard.D,Phaser.Keyboard.A,platformsSolid,player1);
 	object.sort('y', Phaser.Group.SORT_ASCENDING);

	


}
