Camion = function(sprite, posx, groupe, barres){
	this.camion = groupe.create(posx,-250,sprite);
	game.physics.arcade.enable(this.camion);
	this.camion.body.immovable = true;
	
	this.barrieres = barres;
	for(let i = 0; i < this.barrieres.length; i++){
		this.barrieres[i].animations.add('leve', [0,1,2], 3, false);
		this.barrieres[i].animations.add('baisse', [2,1,0], 3, false);
	}
	
	setTimeout(() => {this.roule();} , 5000);
}

Camion.prototype.roule = function(){
	for(let i = 0; i < this.barrieres.length; i++){
		this.barrieres[i].play('leve');
	}
	this.camion.body.velocity.y = 150;
	setTimeout(() => {
		this.camion.body.velocity.y = 0;
		this.camion.y = -250;
		for(let i = 0; i < this.barrieres.length; i++){
			this.barrieres[i].play('baisse');
		}
		setTimeout(() => {this.roule();} , 5000);
	} , 7000);
}

//this.player.body.velocity.x = this.speed