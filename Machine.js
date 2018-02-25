Oven=function(sprite,posx,posy,groupe){
  this.oven = groupe.create(posx,posy,sprite);
  this.oven.animations.add('actif', [1, 2, 3,4], 10, true);
  this.oven.frame=0;
  this.stock=0;
  this.use=false

}

Oven.prototype.drop=function(itemId){
  if((this.stock != 0 && itemId != 0)||this.use==true){
    return itemId;
  }else if(this.stock!=0 && itemId==0){
    let tmp = this.stock;
    this.stock = 0;

    this.use=false
    this.oven.frame=0;
    return tmp;
  }else if(this.stock == 0 && itemId != 0){
		this.stock = itemId;

    this.oven.animations.play('actif');
    this.use=true
		return 0;
}
return itemId;
}


Table = function(sprite,posx,posy,groupe){
	this.table = groupe.create(posx,posy,sprite);
	this.stock = 0;
	this.item = groupe.create(this.table.position.x + 16, this.table.position.y + 8, 'items');
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
