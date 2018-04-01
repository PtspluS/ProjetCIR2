MyTimer=function(duration){
  this.timemax=duration;
  this.valuetime=0;
  this.timer = game.time.create(false);//timer
  this.timer.loop(1000,()=>{this.valuetime++;}, this);
  this.timer.start();
  this.timertext = game.add.bitmapText(21*64, 0, 'font', 'Time '+(this.timemax/60)+':'+(this.timemax%60), 64);
  this.timertextred = game.add.bitmapText(21*64, 0, 'fontred', '', 65);
  this.timertext.anchor.x=1;
  this.timertextred.anchor.x=1;

}

MyTimer.prototype.updatetimer=function(){
  if(this.valuetime>this.timemax-30){
    this.timertext.text ='';
    this.timertextred.text ='Time '+(Math.floor((this.timemax-this.valuetime)/60))+':'+((this.timemax-this.valuetime)%60);
  }else{

  this.timertext.text ='Time '+(Math.floor((this.timemax-this.valuetime)/60))+':'+((this.timemax-this.valuetime)%60);
}
}
