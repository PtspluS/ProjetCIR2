Etabli = function(sprite, posx, posy, groupe){
	this.etabli = groupe.create(posx, posy, sprite);
	
	this.table1 = new Table(null, posx, posy + 12, groupe);
	this.table2 = new Table(null, posx + 64, posy + 12, groupe);
	this.table3 = new Table(null, posx + 128, posy + 12, groupe);
	
	// tableX sont les parties de l'etabli stockees dans la map respectivement de gauche a droite
	
	// l'interaction n'appelera pas celle de la table(qui est "null") mais elle est commune au 3 parties
	this.table1.interact = () => {this.interact();};
	this.table2.interact = () => {this.interact();};
	this.table3.interact = () => {this.interact();};
}

Etabli.prototype.interact = function(){ 
	// Si du verre est sur une table
	if(this.table1.stock == itemsId.Verre || this.table2.stock == itemsId.Verre || this.table3.stock == itemsId.Verre){
		// Si un seau est sur la table 1, 2 ou 3
		if(this.table1.stock == itemsId.Sceau || this.table1.stock == itemsId.SceauVerre0 || this.table1.stock == itemsId.SceauVerre1 || this.table1.stock == itemsId.SceauVerre2){
			// On remplit le seau
			this.table1.drop(itemsId.SceauVerre1);
			// On enleve le verre de l'une des autres tables
			if(this.table2.stock == itemsId.Verre){
				this.table2.drop(0);
			}else if(this.table3.stock == itemsId.Verre){
				this.table3.drop(0);
			}
		}else if(this.table2.stock == itemsId.Sceau || this.table2.stock == itemsId.SceauVerre0 || this.table2.stock == itemsId.SceauVerre1 || this.table2.stock == itemsId.SceauVerre2){
			this.table2.drop(itemsId.SceauVerre1);
			if(this.table1.stock == itemsId.Verre){
				this.table1.drop(0);
			}else if(this.table3.stock == itemsId.Verre){
				this.table3.drop(0);
			}
		}else if(this.table3.stock == itemsId.Sceau || this.table3.stock == itemsId.SceauVerre0 || this.table3.stock == itemsId.SceauVerre1 || this.table3.stock == itemsId.SceauVerre2){
			this.table3.drop(itemsId.SceauVerre1);
			if(this.table1.stock == itemsId.Verre){
				this.table1.drop(0);
			}else if(this.table2.stock == itemsId.Verre){
				this.table2.drop(0);
			}
		}
	}
}

Etabli.prototype.drop = function(itemId){
	return this.table1.drop(itemId);
}