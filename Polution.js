PolutionObject = function(){
  this.polution = levels[MenuGame.cursorMap].polution;
  this.polutionText = game.add.bitmapText(game.world.centerX-100,0,'font','Pollution : '+this.polution,64);
}

PolutionObject.prototype.updatePolution = function(val){
    this.polution += val;
  if(this.polution<3){
    this.polutionText.font ='fontred';
  }


  this.polutionText.text = 'Pollution : '+this.polution;
}
