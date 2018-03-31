// Tutoriel
var Tuto ={
	id : 0,
	skinP1 : 0,
	skinP2 : 0,
	textCursor: 0,
	charCursor: 0,
	next : function(texte){
		if(texte.text.length == levels[this.id].tutoText[this.textCursor].length){
			texte.text = "";
			this.textCursor++;
			if(this.textCursor == levels[this.id].tutoText.length){
				game.id = this.id;
				game.skinP1 = this.skinP1;
				game.skinP2 = this.skinP2;
				this.state.start('Game');
				return;
			}
			this.charCursor = 0;
			Tuto.time.events.repeat(25, levels[this.id].tutoText[this.textCursor].length, () => {
				let character = levels[this.id].tutoText[this.textCursor].charAt(this.charCursor++);
				texte.text = texte.text.concat(character.toString());
			}, this);
		}
	},
	preload : function(){
		Tuto.load.spritesheet('martintuto','assets/martintuto.png',140,340);
		Tuto.load.spritesheet('back','assets/backbutton.png',68,84);
	},
	create : function(){
		this.textCursor = 0;
		this.charCursor = 0;
		
		var texte = MenuGame.add.text(MenuGame.world.centerX, 0.7 * MenuGame.world.centerY,"",{ 
			align: "left",
			wordWrap: true, 
			wordWrapWidth: 600
		});
		texte.fill = 'white';
		
		
		var skipButton = Tuto.add.button(1200,640,'back',() => {
			game.id = this.id;
			game.skinP1 = this.skinP1;
			game.skinP2 = this.skinP2;
			this.state.start('Game');
		},this,1,0,2);
		skipButton.anchor.setTo(0.5,0.5);
		skipButton.scale.setTo(-1,1);
		
		
		Tuto.input.onDown.add(() => {this.next(texte);}, this);
		var tutoGuy = Tuto.add.image(0.5 * MenuGame.world.centerX, MenuGame.world.centerY,'martintuto')
		tutoGuy.anchor.setTo(0.5,0.5);
		tutoGuy.animations.add('vie', [0,1,2], 5, true);
		tutoGuy.animations.play('vie');
		
		Tuto.time.events.repeat(25, levels[this.id].tutoText[this.textCursor].length, () => {
			let character = levels[this.id].tutoText[this.textCursor].charAt(this.charCursor++);
			texte.text = texte.text.concat(character.toString());
		}, this);
	}
}
