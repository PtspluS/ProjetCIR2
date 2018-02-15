Machine=function(sprite,posx,posy,groupe){
  this.mech = groupe.create(posx,posy,'mech1');
  this.mech.body.immovable = true;
}
