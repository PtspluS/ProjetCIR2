Table = function(sprite,posx,posy,groupe){
	this.table = groupe.create(posx,posy,sprite);
	this.stock = 0;
	this.item = groupe.create(this.table.position.x + 4, this.table.position.y + 4, 'items');
	this.item.frame = 0;
}

Table.prototype.drop = function(itemId){
	if(this.stock != 0 && itemId != 0){
		return itemId;
	}else if(this.stock != 0 && itemId == 0){
		let tmp = this.stock;
		this.stock = 0;
		this.item.frame = 0;
		return tmp;
	}else if(this.stock == 0 && itemId != 0){
		this.stock = itemId;
		this.item.frame = itemId;
		return 0;
	}
	// En cas de possible erreur, on retourne l'objet passe en argument
	return itemId;
}
