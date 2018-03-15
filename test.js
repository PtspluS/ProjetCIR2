
// Ici on doit charge le json et la map recup est matrice!!
matrice = [
		[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
		[3,0,1,1,1,0,0,0,0,0,0,0,0,2,2,1,1,3],
		[3,0,0,0,0,0,2,2,0,0,0,0,0,0,0,0,0,3],
		[3,2,2,0,0,0,2,2,0,3,3,0,0,0,0,0,0,3],
		[3,0,0,0,0,0,0,0,0,3,3,0,0,0,0,1,1,3],
		[3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,3],
		[3,0,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,3],
		[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]
];

var game = new Phaser.Game(64*matrice[0].length, 64*matrice.length, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {

	game.load.spritesheet('dude', 'assets/dude.png', 44, 68);
	game.load.spritesheet('oven','assets/ovenanimation.png',64,94)
	game.load.spritesheet('items','assets/items.png', 56, 56);
	game.load.spritesheet('itemsbubbles','assets/itemsbubbles.png', 28, 28);
	game.load.spritesheet('wall','assets/wall.png',64,74)
	game.load.image('ground','assets/beton.png');
	game.load.image('table','assets/table.png');
}
function create() {
game.physics.startSystem(Phaser.Physics.ARCADE);

map = Array(matrice.length);
for(let i = 0; i < matrice.length; i++){
	map[i] = Array(matrice[0].length);
}

platformsSolid = game.add.group();
platformsSolid.enableBody = true;
object=game.add.group();
object.enableBody = true;
itemGui=game.add.group();
itemGui.enableBody = true;


for(let j = 0; j < matrice.length; j++){
	for(let i = 0; i < matrice[0].length; i++){
		if(matrice[j][i]==0){ // SOL
			game.add.sprite(i*64, j*64, 'ground');
			map[j][i] = 0;
		}else if(matrice[j][i]==1){ // FOUR
			let tuile = platformsSolid.create(i*64, j*64, 'ground');
			tuile.body.immovable = true;
			map[j][i] = new Oven('oven',i*64,j*64 - (94-64),object,itemGui);
		}else if(matrice[j][i]==2){ // TABLE
			let tuile=platformsSolid.create(i*64, j*64, 'ground');
			tuile.body.immovable = true;
			map[j][i] = new Table('table', i*64, j*64 - (84-64),object);
		}else if(matrice[j][i]==3){ // MUR
			let tuile=platformsSolid.create(i*64, j*64, 'ground');
			tuile.body.immovable = true;
			map[j][i] = object.create(i*64, j*64 - (74-64), 'wall');
			// Generation du mur
			let left = true;
			let right = true;
			let down = true;
			if(j == matrice.length - 1){ // Bas
				down = false;
			}else if(matrice[j+1][i] != 3){
				down = false;
			}
			if(i == 0){ // Gauche
				left = false;
			}else if(matrice[j][i-1] != 3){
				left = false;
			}
			if(i == matrice[0].length - 1){ // Droite
				right = false;
			}else if(matrice[j][i+1] != 3){
				right = false;
			}
			
			if(left && right && down){ // Selection de la bonne frame
				map[j][i].frame = 4;
			}else if(!left && right && down){
				map[j][i].frame = 5;
			}else if(left && !right && down){
				map[j][i].frame = 3;
			}else if(left && right && !down){
				map[j][i].frame = 6;
			}else if(!left && !right && down){
				map[j][i].frame = 7;
			}else if(!left && right && !down){
				map[j][i].frame = 1;
			}else if(left && !right && !down){
				map[j][i].frame = 2;
			}else{
				map[j][i].frame = 0;
			}
		}
	}
}


player1=new Player('dude',64+16,64*4,object,itemGui);
player2=new Player('dude',64*2+16,64*4,object,itemGui);
game.world.bringToTop(object);
game.world.bringToTop(itemGui);



map[3][2].drop(2);
map[3][1].drop(2);
map[2][6].drop(7);
map[2][7].drop(7);
map[3][6].drop(7);
map[3][7].drop(7);
map[5][15].drop(1);
map[5][16].drop(3);


}
function update() {
	
	player1.update(Phaser.Keyboard.UP,Phaser.Keyboard.DOWN,Phaser.Keyboard.LEFT,Phaser.Keyboard.RIGHT,Phaser.Keyboard.NUMPAD_0,platformsSolid,player2);
	player2.update(Phaser.Keyboard.Z,Phaser.Keyboard.S,Phaser.Keyboard.Q,Phaser.Keyboard.D,Phaser.Keyboard.A,platformsSolid,player1);
 	object.sort('y', Phaser.Group.SORT_ASCENDING);

	


}
