MyScore=function(){
this.score=0;
this.scoretext = game.add.bitmapText(0, 0, 'font', 'Score: '+this.score, 64);
this.scoretextadd = game.add.bitmapText(350, 10, 'font', '', 50);
this.scoretextsub = game.add.bitmapText(350, 10, 'fontred', '', 50);

}

MyScore.prototype.updatescore=function(value){
  this.score+=value
  this.scoretext.text ='Score: '+this.score;

}
