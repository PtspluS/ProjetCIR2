Broyeur = function(sprite,posx,posy,groupe){
	this.broyeur = groupe.create(posx,posy,sprite);
	this.stock = 0;
	this.item.frame = 0;
  this.work=false;
}

Broyeur.prototype.drop=function(itemId){
  if((this.stock != 0 && itemId != 0)||this.work==true){
    return itemId;
  }else if(this.stock!=0 && itemId==0){
    let tmp = this.stock;
    this.stock = 0;
    return tmp;
  }else if(this.stock == 0 && itemId != 0){
    switch(itemId){
      case 1://remplacer le nom par son id
      this.stock = itemId;
      //jouer l animation ici
      this.work=true
      setTimeout(this.iswork() , 5000);
  		return 0;
      break;

      case 'block plastique'://remplacer le nom par son id
      this.stock = itemId;
      //jouer l animation ici
      this.work=true
      setTimeout(this.iswork() , 6000);
      return 0;
      break;

    }
}
return itemId;
}

Broyeur.prototype.iswork=function(){
  this.work=false;
//arreter l animation
  this.broyeur.frame=0;
  switch(this.stock){
    case 'block plastique1'://remplacer le nom par son id
    this.stock='metal plastique1';//remplacer le nom par son id
    break;
    case 'block plastique2'://remplacer le nom par son id
    this.stock='metal plastique2';//remplacer le nom par son id
    break;
    case 'block plastique3'://remplacer le nom par son id
    this.stock='metal plastique3';//remplacer le nom par son id
    break;
    case 1://remplacer le nom par son id
    this.stock='granulé';//remplacer le nom par son id
    break;
  };

}
