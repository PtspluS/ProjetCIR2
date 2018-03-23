Arrive = function(sprite,posx,posy,groupe,tabEl,time,pattern){
	this.arrive = groupe.create(posx,posy,sprite);
	this.arrive.animations.add('actif', [ 0, 1, 2, 3], 2, true);
	this.arrive.play('actif');
	this.tab = tabEl;
	this.time = time;
	this.pattern = pattern;
	this.patnum = 0;
	
	game.time.events.add(this.time, () => {this.envoie();} , this);
}

Arrive.prototype.envoie = function(){
	var infront = map[Math.round(parseInt((this.arrive.y + 26)/64))+1][Math.round(parseInt((this.arrive.x)/64))];
	if(infront.recup != undefined){
		infront.recup(this.pattern ? this.tab[this.patnum++ % this.tab.length] : this.tab[Math.floor(Math.random() * this.tab.length)], 'down');
	}else{
		infront.drop(this.pattern ? this.tab[this.patnum++ % this.tab.length] : this.tab[Math.floor(Math.random() * this.tab.length)]);
	}
	game.time.events.add(this.time, () => {this.envoie();} , this);
}

Arrive.prototype.interact = function(){
	return;
}

Arrive.prototype.drop = function(itemId){
	return itemId;
}
