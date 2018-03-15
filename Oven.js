Oven=function(sprite,posx,posy,groupe,itemgroupe){
  this.oven = groupe.create(posx,posy,sprite);
  this.oven.animations.add('actif', [1, 2, 3,4], 10, true);
  this.oven.frame=0;
  this.stock=0;
  this.cook=false;
  this.container=null;
this.weight=0;

	this.item = itemgroupe.create(this.oven.x + 2, this.oven.y + 2, 'itemsbubbles');
	this.item.frame = 0;

}

Oven.prototype.drop=function(itemId){
  if(this.cook==true){
    return itemId;
  }else if(this.stock!=0 && (itemId==itemsId.Sceau||(itemId>=this.container&& 3>=itemId+this.container+weight))&& this.cook==false){
    let tmp = this.stock;
    this.stock = 0;
	this.item.frame = 0;
    return tmp;
  }else if(this.stock == 0 && itemId != 0){
    switch(itemId){
      case itemsId.BlockMetal1:
      this.typesort(itemId,0,itemsId.SceauMetal0,1,itemsId.SceauMetal1,5000);
  		return 0;
      break;

      case itemsId.BlockMetal2:
      this.typesort(itemId,0,itemsId.SceauMetal0,2,itemsId.SceauMetal2,5000);
  		return 0;
      break;

      case itemsId.BlockMetal3:
      this.typesort(itemId,0,itemsId.SceauMetal0,3,itemsId.SceauMetal3,5000)
      break;

      case itemsId.SceauVerre1:
      this.typesort(itemId,itemsId.SceauVerre0,1,itemsId.SceauVerreLiquide0,itemsId.SceauVerreLiquide1,6000)
      return 0;
      break;

      case itemsId.SceauVerre2:
      this.typesort(itemId,itemsId.SceauVerre0,2,itemsId.SceauVerreLiquide0,itemsId.SceauVerreLiquide2,6000)
      return 0;
      break;

      case itemsId.SceauVerre3:
      this.typesort(itemId,itemId.SceauVerre0,3,itemsId.SceauVerreLiquide0,itemsId.SceauVerreLiquide3,6000)
      return 0;
      break;

    }
}
return itemId;
}

Oven.prototype.typesort=function(itemId,itemreturn,contenaire,weight,itemend,time){
  this.stock = itemId;
  this.item.frame=itemId;
  this.container=contenaire;
  this.weight=weight;
  this.oven.animations.play('actif');
  this.cook=true;
  setTimeout(() => {this.iscook(itemend);} , time);
}



Oven.prototype.iscook=function(itemId){
  this.cook=false;
  this.oven.animations.stop();
  this.oven.frame=0;
    this.stock=itemId;
  this.item.frame=itemId;



}
