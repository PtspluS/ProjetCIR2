Benne = function(sprite,posx,posy,groupe,type){
	this.benne = groupe.create(posx,posy,sprite);
    this.work=false;
	this.weight=0;
	this.stock = 0;
	this.type = type;
}

Benne.prototype.interact = function(){
	return;
}

Benne.prototype.drop=function(itemId){
	if(this.stock == 0 && itemId != 0){
		switch(this.type){
			case 'metal':
				switch(itemId){
					case itemsId.PlaqueMetal1:
						this.weight += 1;
						Score.updatescore(40);
						return 0;
						break;
					case itemsId.PlaqueMetal2:
						this.weight += 2;
						Score.updatescore(80);
						return 0;
						break;
					case itemsId.PlaqueMetal3:
						this.weight += 3;
						Score.updatescore(120);
						return 0;
						break;
				}
				break;
			case 'plastique':
				switch(itemId){
					case itemsId.SceauPlastique1:
						this.weight += 1;
						Score.updatescore(20);
						return itemsId.SceauPlastique0;
						break;
					case itemsId.SceauPlastique2:
						this.weight += 2;
						Score.updatescore(40);
						return itemsId.SceauPlastique0;
						break;
					case itemsId.SceauPlastique3:
						this.weight += 3;
						Score.updatescore(60);
						return itemsId.SceauPlastique0;
						break;
				}
				break;
			case 'verre':
				switch(itemId){
					case itemsId.BouteilleVerre1:
						this.weight += 1;
							Score.updatescore(50);
						return 0;
						break;
					case itemsId.BouteilleVerre2:
						this.weight += 2;
						Score.updatescore(100);
						return 0;
						break;
					case itemsId.BouteilleVerre3:
						this.weight += 3;
						Score.updatescore(150);
						return 0;
						break;
				}
				break;
			case 'pneu':
				switch(itemId){
					case itemsId.SceauPneu1:
						this.weight += 1;
						Score.updatescore(10);
						return itemsId.SceauPneu0;
						break;
					case itemsId.SceauPneu2:
						this.weight += 2;
						Score.updatescore(20);
						return itemsId.SceauPneu0;
						break;
					case itemsId.SceauPneu3:
						this.weight += 3;
						Score.updatescore(30);
						return itemsId.SceauPneu0;
						break;
				}
				break;
			case 'carton':
				switch(itemId){
					case itemsId.PlaqueCarton1:
						this.weight += 1;
						Score.updatescore(30);
						return 0;
						break;
					case itemsId.PlaqueCarton2:
						this.weight += 2;
						Score.updatescore(60);
						return 0;
						break;
					case itemsId.PlaqueCarton3:
						this.weight += 3;
						Score.updatescore(90);
						return 0;
						break;
				}
				break;
		}
    }
	return itemId;
}
