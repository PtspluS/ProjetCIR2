Player=function(sprite,posx,posy,groupe){
  //constructeur du player
  this.player = groupe.create(posx, posy,sprite);
  game.physics.arcade.enable(this.player);
  this.player.body.collideWorldBounds = true;
  this.player.enableBody=true;
  this.player.animations.add('down', [1, 2, 3,2], 10, true);
  this.player.animations.add('downright', [5, 6, 7,6], 10, true);
  this.player.animations.add('right', [9,10,11,10], 10, true);
  this.player.animations.add('upright', [13,14,15,14], 10, true);
  this.player.animations.add('up', [17,18,19,18], 10, true);
  this.player.animations.add('upleft', [21,22,23,22], 10, true);
  this.player.animations.add('left', [25, 26, 27,26], 10, true);
  this.player.animations.add('downleft', [29,30,31,30], 10, true);
  this.direction=null;
  this.speed=150;
  this.player.body.setSize(40,34,2,32);
  this.carry=null;

}
//deplacement du player en diagonale basdroite
Player.prototype.downright=function(){
  this.player.body.velocity.x = (this.speed/2)+20;
  this.player.body.velocity.y = (this.speed/2)+20;
  this.player.animations.play('downright');
  this.direction='downright';
}
//deplacement du player en diagonale hautdroite
Player.prototype.upright=function(){
  this.player.body.velocity.x = (this.speed/2)+20;
  this.player.body.velocity.y = -((this.speed/2)+20);
  this.player.animations.play('upright');
  this.direction='upright';
}
//deplacement du player en diagonale basgauche
Player.prototype.downleft=function(){
  this.player.body.velocity.x = -((this.speed/2)+20);
  this.player.body.velocity.y = (this.speed/2)+20;
  this.player.animations.play('downleft');
  this.direction='downleft';
}
//deplacement du player en diagonale hautgauche
Player.prototype.upleft=function(){
  this.player.body.velocity.x = -((this.speed/2)+20);
  this.player.body.velocity.y = -((this.speed/2)+20);
  this.player.animations.play('upleft');
  this.direction='upleft';
}
//deplacement du player en bas
Player.prototype.down=function(){
  this.player.body.velocity.y = this.speed;
  this.player.animations.play('down');
  this.direction='down';
}
//deplacement du player en bas
Player.prototype.up=function(){
  this.player.body.velocity.y = -this.speed;
  this.player.animations.play('up');
  this.direction='up';
}
//deplacement du player a droite
Player.prototype.right=function(){
  this.player.body.velocity.x = this.speed;
  this.player.animations.play('right');
  this.direction='right';
}
//deplacement du player a gauche
Player.prototype.left=function(){
  this.player.body.velocity.x = -this.speed;
  this.player.animations.play('left');
  this.direction='left';
}
//action du joueur
Player.prototype.wait=function(){
  switch(this.direction){
    case "downright":
    this.player.frame =4;
    break;
    case "downleft":
    this.player.frame =28;
    break;
    case "upright":
    this.player.frame =12;
    break;
    case "upleft":
    this.player.frame =20;
    break;
    case "up":
    this.player.frame =16;
    break;
    case "down":
    this.player.frame =0;
    break;
    case "left":
    this.player.frame =24;
    break;
    case "right":
    this.player.frame =8;
    break;
  }
}

Player.prototype.update=function(cursorup,cursordown,cursorleft,cursorright,cursordrop,platforms,otherplayer){
  var hitPlayer = game.physics.arcade.collide(this.player,otherplayer.player);
  var hitPlatform = game.physics.arcade.collide(this.player,platforms);

  this.player.body.velocity.x = 0;
  this.player.body.velocity.y = 0;
  if (game.input.keyboard.isDown(cursorright) && game.input.keyboard.isDown(cursordown))
  {
    this.downright();
  }
  else if (game.input.keyboard.isDown(cursorright) && game.input.keyboard.isDown(cursorup))
  {
      this.upright();
  }
  else if (game.input.keyboard.isDown(cursorleft) && game.input.keyboard.isDown(cursordown))
  {
    this.downleft();
  }
else if (game.input.keyboard.isDown(cursorleft) && game.input.keyboard.isDown(cursorup))
  {
  this.upleft();
  }
else if (game.input.keyboard.isDown(cursordown))
  {
  this.down();
  }
else if (game.input.keyboard.isDown(cursorright))
  {
  this.right();
  }
else if (game.input.keyboard.isDown(cursorup))
  {
  this.up();
  }
else if (game.input.keyboard.isDown(cursorleft))
  {
  this.left();
}
else{
  this.wait();
}

if(game.input.keyboard.onDown(cursordrop)){
 this.drop();
}
}

Player.prototype.checkfront=function(){
  var x=0;
  var y=0;

  switch(this.direction){
    case "downright":

    x=1;
    y=1;
    break;
    case "downleft":
    x=-1;
    y=1;
    break;
    case "upright":
    x=1;
    y=-1;
    break;
    case "upleft":
    x=-1;
    y=-1;
    break;
    case "up":

   y=-1;
    break;
    case "down":
    y=1;
    break;
    case "left":
    x=-1;
    break;
    case "right":
  x=+1;
    break;
  }

   return map[Math.round(this.player.x/64)+x][Math.round(this.player.y/64)+y];

}

Player.prototype.drop=function(){
let machine= this.checkfront()
console.log(machine);
if(machine!= null){

//this.carry=machine.drop();
}else{}
}
