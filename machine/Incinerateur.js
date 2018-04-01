Incinerateur = function(sprite,posx,posy,groupe){
	this.incinerateur = groupe.create(posx,posy,sprite);
	this.incinerateur.animations.add('actif',[0,1,2,1], 4, true);
	this.incinerateur.animations.play('actif');
	this.stock = 0; // Constante pour les rouleaux
}

Incinerateur.prototype.interact = function(){
	return;
}

Incinerateur.prototype.drop = function(itemId){
	if(itemId != 0){
		game.cameraShake(0);
		Score.updatescore(-100);
		return 0;
	}
	// En cas de possible erreur, on retourne l'objet passe en argument
	return itemId;
}
