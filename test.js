


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


player1=new Player('dude',50,50);



cursors = game.input.keyboard.createCursorKeys();


}
function update() {

	var hitPlatform = game.physics.arcade.collide(player1.player, platforms);
	player1.stop();

		if (cursors.right.isDown && cursors.down.isDown)
    {
      player1.downright();
    }
    else if (cursors.right.isDown && cursors.up.isDown)
    {
        player1.upright();
    }
    else if (cursors.left.isDown && cursors.down.isDown)
    {
      player1.downleft();
    }
	else if (cursors.left.isDown && cursors.up.isDown)
    {
      player1.upleft();
    }
	else if (cursors.down.isDown)
    {
		player1.down();
    }
	else if (cursors.right.isDown)
    {
		player1.right();
    }
	else if (cursors.up.isDown)
    {
		player1.up();
    }
	else if (cursors.left.isDown)
    {
		player1.left();
    }
	else{
		player1.wait();
	}

    if(game.input.keyboard.isDown(Phaser.Keyboard.A)){
let posx=Math.round(player.position.x/64);
let posy=Math.round(player.position.y/64);
	console.log(posx,posy)
if(last==16){
	if(map[posx][posy-1]==1){

		mech = platforms.create((posx)*64,(posy-1)*64 , 'mech2');

	}
}else if(last==0){
	if(map[posx][posy+1]==1){

		mech = platforms.create((posx)*64,(posy+1)*64 , 'mech2');

	}}
	else if(last==8){
		if(map[posx+1][posy]==1){

			mech = platforms.create((posx+1)*64,(posy)*64 , 'mech2');

		}}else if(last==24){
			if(map[posx-1][posy]==1){

				mech = platforms.create((posx-1)*64,(posy)*64 , 'mech2');

			}}




}


}
