Soufflerie = function(sprite,posx,posy,groupe,itemgroupe){
  this.souffle = groupe.create(posx,posy,sprite);
  this.souffle.animations.add('actif', [0,1,2,3,4,5,6,7,8,9,10,11,12,8,7,6,5,4,3,2,1,0], 5, false);
  this.souffle.frame = 0;
  this.stock = 0;
  this.work = false;
  this.weight=0;

	this.item = itemgroupe.create(this.souffle.x + 18, this.souffle.y + 70, 'itemsbubbles');
	this.item.frame = 0;

}

Soufflerie.prototype.interact = function(){
	return;
}

Soufflerie.prototype.drop=function(itemId){
    if(this.work){
		return itemId;
	}else if(this.stock != 0 && itemId == 0 && this.work == false){
		let tmp = this.stock;
		this.stock = 0;
		this.item.frame = 0;
		return tmp;
	}else if(this.stock == 0 && itemId != 0 && this.work == false){
		switch(itemId){
			case itemsId.SceauVerreLiquide1:
				this.typesort(itemsId.SceauVerreLiquide1, itemsId.BouteilleVerre1);
				return itemsId.SceauVerreLiquide0;
				break;

			case itemsId.SceauVerreLiquide2:
				this.typesort(itemsId.SceauVerreLiquide2, itemsId.BouteilleVerre2);
				return itemsId.SceauVerreLiquide0;
				break;

			case itemsId.SceauVerreLiquide3:
				this.typesort(itemsId.SceauVerreLiquide3, itemsId.BouteilleVerre3);
				return itemsId.SceauVerreLiquide0;
				break;



		}
	}
	// En cas de possible erreur, on retourne l'objet passe en argument
	return itemId;
}

Soufflerie.prototype.typesort = function(itemId, itemend){
	this.work = true;
	this.souffle.play('actif');
	this.stock = itemId;
	this.item.frame = itemId;
	setTimeout(() => {this.iswork(itemend);} , 4400);
	return;
}

Soufflerie.prototype.iswork = function(itemId){
	this.work = false;
	this.stock = itemId;
	this.item.frame = itemId;
	return;
}
