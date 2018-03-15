Oven=function(sprite,posx,posy,groupe){
  this.oven = groupe.create(posx,posy,sprite);
  this.oven.animations.add('actif', [1, 2, 3,4], 10, true);
  this.oven.frame=0;
  this.stock=0;
  this.cook=false

}

Oven.prototype.drop=function(itemId){
  if((this.stock != 0 && itemId != 0)||this.cook==true){
    return itemId;
  }else if(this.stock!=0 && itemId==0){
    let tmp = this.stock;
    this.stock = 0;
    return tmp;
  }else if(this.stock == 0 && itemId != 0){
    switch(itemId){
      case 'block de metal'://remplacer le nom par son id
      this.stock = itemId;
      this.oven.animations.play('actif');
      this.cook=true
      setTimeout(this.iscook() , 5000);
  		return 0;
      break;

      case 'block de verre'://remplacer le nom par son id
      this.stock = itemId;
      this.oven.animations.play('actif');
      this.cook=true
      setTimeout(this.iscook() , 6000);
      return 0;
      break;

    }
}
return itemId;
}

Oven.prototype.iscook=function(){
  this.cook=false;
  this.oven.animations.stop();
  this.oven.frame=0;
  switch(this.stock){
    case 'block metal1'://remplacer le nom par son id
    this.stock='metal liquide1';//remplacer le nom par son id
    break;
    case 'block metal2'://remplacer le nom par son id
    this.stock='metal liquide2';//remplacer le nom par son id
    break;
    case 'block metal3'://remplacer le nom par son id
    this.stock='metal liquide3';//remplacer le nom par son id
    break;
    case 'verre pilé'://remplacer le nom par son id
    this.stock='verre liquide1';//remplacer le nom par son id
    break;
  };

}
