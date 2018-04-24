Arrive = function(sprite,posx,posy,groupe,tabEl,time,pattern){
	this.arrive = groupe.create(posx,posy,sprite);
	this.arrive.animations.add('actif', [ 0, 1, 2, 3], 500/levels[MenuGame.cursorMap].itemSpeed, true);
	this.arrive.play('actif');
	this.tab = tabEl;
	this.time = time;
	this.pattern = pattern;
	this.patnum = 0;
	this.posx=posx+20;
	this.posy=posy+20;
	this.scoretext = game.add.bitmapText(this.posx,this.posy, 'fontred', '', 30);
		game.physics.arcade.enable([ this.scoretext ]);

	game.time.events.add(this.time, () => {this.envoie();} , this);
}

Arrive.prototype.envoie = function(){
	var infront = map[Math.round(parseInt((this.arrive.y + 26)/64))+1][Math.round(parseInt((this.arrive.x)/64))];
	console.log('a');
if(infront.drop(this.pattern ? this.tab[this.patnum++ % this.tab.length] : this.tab[Math.floor(Math.random() * this.tab.length)])!=0){
	console.log('ai');
	this.addscore(-100);
};


	game.time.events.add(this.time, () => {this.envoie();} , this);
}

Arrive.prototype.addscore=function(value){
	game.world.bringToTop(this.scoretext);
this.scoretext.text=value;
this.scoretext.body.velocity.y=-50;
game.time.events.add(1000, () => {game.score.updatescore(value);
this.scoretext.x=this.posx;
this.scoretext.y=this.posy;
this.scoretext.body.velocity.y=0;
this.scoretext.text='';
},this);


}

Arrive.prototype.interact = function(){
	return;
}

Arrive.prototype.drop = function(itemId){
	return itemId;
}
