Broyeur = function(sprite,posx,posy,groupe){
	this.broyeur = groupe.create(posx,posy,sprite);
	this.broyeur.animations.add('actif', [1, 2, 3,4], 10, true);
	this.stock = 0;
	this.item.frame = 0;
  this.work=false;
	this.container=null;
this.weight=0;
}

Broyeur.prototype.drop=function(itemId){
	if(this.work==true){
		return itemId;
	}else if(this.stock != 0 && (itemId == itemsId.Sceau || (itemId >= this.container && 3 >= itemId - this.container + this.weight)) && this.work == false){
		let tmp = this.stock;
		this.stock = 0;
		this.item.frame = 0;
		if(itemId == itemsId.Sceau || itemId == this.container){
			return tmp;
		}else{
			return (itemId + this.weight);
		}
	}else if(this.stock == 0 && itemId != 0){
		switch(itemId){
      case itemsId.Pneu:
      this.typesort(itemId,itemsId.SceuPneu0,1,itemsId.SceauPneu1,500);
  		return 0;
      break;


      case itemsId.BlockPlastique1:
      this.typesort(itemId,itemsId.SceauPlastique0,itemsId.SceauPlastique1,600)
      return 0;
      break;

      case itemsId.BlockPlastique2:
      this.typesort(itemId,itemsId.SceauPlastique0,itemsId.SceauPlastique2,600)
      return 0;
      break;

      case itemsId.BlockPlastique3:
      this.typesort(itemId,itemsId.SceauPlastique0,itemsId.SceauPlastique3,600)
      return 0;
      break;

    }
}
return itemId;
}


Broyeur.prototype.typesort=function(itemId,contenaire,weight,itemend,time){
	this.stock = itemId;
  this.item.frame=itemId;
  this.container=conteneur;
  this.weight=weight;
  this.broyeur.animations.play('actif');
  this.work=true;
  setTimeout(() => {this.iscook(itemend);} , time);
}

Broyeur.prototype.iswork=function(item){
	this.work=false;
	this.broyeur.animations.stop();
	this.broyeur.frame=0;
		this.stock=itemId;
	this.item.frame=itemId;


}
