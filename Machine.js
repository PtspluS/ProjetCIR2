Oven=function(sprite,posx,posy,groupe){
  this.oven = groupe.create(posx,posy,sprite);
  this.oven.animations.add('actif', [1, 2, 3,4], 10, true);
  this.oven.frame=0;
  this.stock=null
  this.oven.animations.play('actif');
}

Oven.prototype.dropin=function(){
console.log('interaction');
}
