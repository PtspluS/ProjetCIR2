
Level1=function(){ // Ici on doit charge le json et la map recup est matrice!!
matrice = [
		[3,3,3,3,3,4,3,3,4,4,3,3,3,3,3,3,3,3],
		[3,0,1,1,1,0,0,0,0,0,7,0,7,2,2,1,1,3],
		[3,0,0,0,0,0,2,2,2,0,0,0,0,0,0,0,0,3],
		[3,2,2,0,0,0,2,2,2,0,2,2,2,0,0,0,0,3],
		[3,0,0,0,0,0,0,0,0,0,4,3,3,0,0,1,1,3],
		[3,0,0,0,0,0,0,6,6,0,0,0,0,0,0,2,2,3],
		[3,0,0,0,0,0,0,6,0,0,0,5,5,0,0,0,0,3],
		[3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3]
];

var game = new Phaser.Game(64*matrice[0].length, 64*matrice.length, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {

	game.load.spritesheet('dude', 'assets/dude.png', 44, 68);
	game.load.spritesheet('oven','assets/ovenanimation.png',64,94)
	game.load.spritesheet('items','assets/items.png', 56, 56);
	game.load.spritesheet('itemsbubbles','assets/itemsbubbles.png', 28, 28);
	game.load.spritesheet('wall','assets/wall.png',64,74);
	game.load.spritesheet('wallposters','assets/wallposters.png',64,74);
	game.load.spritesheet('broyeur','assets/broyeur.png',64,74);
	game.load.spritesheet('compresseur','assets/compresseur.png',128,64);
	game.load.spritesheet('etabli','assets/etabli.png',192,96);
	game.load.image('ground','assets/beton.png');
	game.load.image('table','assets/table.png');
}
function create() {
game.physics.startSystem(Phaser.Physics.ARCADE);

map = Array(matrice.length);
for(let i = 0; i < matrice.length; i++){
	map[i] = Array(matrice[0].length);
}

// Groupes de sprites
platformsSolid = game.add.group();
platformsSolid.enableBody = true;
object=game.add.group();
object.enableBody = true;
itemGui=game.add.group();
itemGui.enableBody = true;

// Generation de la map
for(let j = 0; j < matrice.length; j++){
	for(let i = 0; i < matrice[0].length; i++){
		if(map[j][i] == undefined){
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
				let tuile = platformsSolid.create(i*64, j*64, 'ground');
				tuile.body.immovable = true;
				map[j][i] = 0;
				let wall = object.create(i*64, j*64 - (74-64), 'wall');
				// Generation du mur
				let left = true;
				let right = true;
				let down = true;
				if(j == matrice.length - 1){ // Bas
					down = false;
				}else if(matrice[j+1][i] != 3 && matrice[j+1][i] != 4){
					down = false;
				}
				if(i == 0){ // Gauche
					left = false;
				}else if(matrice[j][i-1] != 3 && matrice[j][i-1] != 4){
					left = false;
				}
				if(i == matrice[0].length - 1){ // Droite
					right = false;
				}else if(matrice[j][i+1] != 3 && matrice[j][i+1] != 4){
					right = false;
				}

				if(left && right && down){ // Selection de la bonne frame
					wall.frame = 4;
				}else if(!left && right && down){
					wall.frame = 5;
				}else if(left && !right && down){
					wall.frame = 3;
				}else if(left && right && !down){
					wall.frame = 6;
				}else if(!left && !right && down){
					wall.frame = 7;
				}else if(!left && right && !down){
					wall.frame = 1;
				}else if(left && !right && !down){
					wall.frame = 2;
				}else{
					wall.frame = 0;
				}
			}else if(matrice[j][i] == 4){ // MUR POSTERS
				let tuile = platformsSolid.create(i*64, j*64, 'ground');
				tuile.body.immovable = true;
				map[j][i] = 0;
				let wall = object.create(i*64, j*64 - (74-64), 'wallposters');
				wall.frame = Math.floor(Math.random() * 11);
			}else if(matrice[j][i] == 5){ // BROYEUR
				let tuile = platformsSolid.create(i*64, j*64, 'ground');
				tuile.body.immovable = true;
				map[j][i] = new Broyeur('broyeur',i*64,j*64 - (74-64),object,itemGui);
			}else if(matrice[j][i] == 6){ // COMPRESSEUR
				let tuile = platformsSolid.create(i*64, j*64, 'ground')
				let tuile2 = platformsSolid.create((i+1)*64, j*64, 'ground');
				tuile.body.immovable = true;
				tuile2.body.immovable = true;
				map[j][i] = new Compresseur('compresseur',i*64,j*64,object,itemGui);
				map[j][i+1] = map[j][i];
			}else if(matrice[j][i] == 7){ // ETABLI
				let tuile = platformsSolid.create(i*64, j*64, 'ground')
				let tuile2 = platformsSolid.create((i+1)*64, j*64, 'ground');
				let tuile3 = platformsSolid.create((i+2)*64, j*64, 'ground');
				tuile.body.immovable = true;
				tuile2.body.immovable = true;
				tuile3.body.immovable = true;
				map[j][i] = new Etabli('etabli',i*64,j*64 - (96-64),object,itemGui);;
				map[j][i+1] = map[j][i].table2;
				map[j][i+2] = map[j][i].table3;
			}
		}
	}
}


player1=new Player(game,'dude',64+16,64*4,object,itemGui);
player2=new Player(game,'dude',64*2+16,64*4,object,itemGui);
game.world.bringToTop(object);
game.world.bringToTop(itemGui);



map[1][13].drop(itemsId.Verre);
map[1][14].drop(itemsId.Verre);
map[3][2].drop(itemsId.Sceau);
map[3][1].drop(itemsId.Sceau);
map[2][6].drop(itemsId.Metal);
map[2][7].drop(itemsId.Sceau);
map[2][8].drop(itemsId.Metal);
map[3][6].drop(itemsId.Metal);
map[3][7].drop(itemsId.Pneu);
map[3][8].drop(itemsId.Sceau);
map[3][10].drop(itemsId.Carton);
map[3][11].drop(itemsId.Plastique);
map[3][12].drop(itemsId.Plastique);
map[5][15].drop(itemsId.Pneu);
map[5][16].drop(itemsId.Pneu);


}
function update() {

	player1.update(game,Phaser.Keyboard.UP,Phaser.Keyboard.DOWN,Phaser.Keyboard.LEFT,Phaser.Keyboard.RIGHT,Phaser.Keyboard.NUMPAD_2,Phaser.Keyboard.NUMPAD_3,platformsSolid,player2);
	player2.update(game,Phaser.Keyboard.Z,Phaser.Keyboard.S,Phaser.Keyboard.Q,Phaser.Keyboard.D,Phaser.Keyboard.F,Phaser.Keyboard.G,platformsSolid,player1);
 	object.sort('y', Phaser.Group.SORT_ASCENDING);

}
}
