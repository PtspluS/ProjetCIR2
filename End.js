var end = {
  musicEnd : 0,
  equationResult : 0,//donne le nombre de point que peut raporter un joueur sur la levels[MenuGame.cursorMap] au max
  preload : function(){
    end.load.audio('endMusic','musics/endMusic.mp3');
    end.load.audio('easterEgg','musics/eminem.mp3');
    end.load.spritesheet('title','assets/logo.png',408,222);
    end.load.spritesheet('next','assets/buttons/next.png',168,80);
	end.load.spritesheet('restart','assets/buttons/restart.png',264,80);
	end.load.spritesheet('menu','assets/buttons/menu.png',168,80);

    end.load.bitmapFont('font', 'fonts/fontwith.png', 'fonts/fontwith.fnt');//chargement de la police
    end.load.bitmapFont('fontred', 'fonts/font.png', 'fonts/font.fnt');//chargement de la police
  },
  create : function(){
    this.equationResult = game.pollution.pollution * (Math.floor((game.score.score*levels[MenuGame.cursorMap].itemSpeed)/(MenuOpt.nbPlayers*levels[MenuGame.cursorMap].chrono)));//pollution*score par joueur par seconde
    if (levels[MenuGame.cursorMap].score*0.42==this.equationResult) {this.musicEnd = end.add.audio('easterEgg');}
    else {this.musicEnd = end.add.audio('endMusic');}
    //let musicEnd = end.add.audio('endMusic');
    this.musicEnd.play('',0,1,true);

    var tab = Array(99);
    for(let i = 0; i < 99; i++){
      tab[i] = i;
    }

    let banner = end.add.sprite(end.world.centerX, end.world.centerY-300, 'title');
    banner.animations.add('shiny', tab, 20, true);
    banner.play('shiny');
    banner.anchor.setTo(0.5,0.5);
    banner.scale.setTo(0.6,0.6);
    //affichage du recap de partie et de la note
    let indication = ['Player : '+MenuOpt.nbPlayers,'Time : '+Math.floor(levels[MenuGame.cursorMap].chrono/60)+':'+levels[MenuGame.cursorMap].chrono%60,'Pollution : '+game.pollution.pollution,'Profit : '+game.score.score +'$','Score : '+this.equationResult];//tableau contenant toutes les infos à afficher pour résumer la partie
    let Result = end.add.bitmapText(end.world.width-500, 200,'font', 'The Result :', 56);
    let message = end.add.bitmapText(end.world.width-450, 200+Result.height+40*indication.length+100,'fontred','',60);
    let posY = 200+Result.height;
    let iteration = 0;
    end.time.events.repeat(Phaser.Timer.SECOND * 1.5,indication.length+1,()=>{
      let txt = end.add.bitmapText(end.world.width-500+Result.width/2,posY+=40,'font',indication[iteration++],30);
      txt.anchor.setTo(0.5,0.5);
      if(iteration==indication.length){
        let GradeL = end.add.bitmapText(end.world.width-300, 200+Result.height+40*indication.length+60,'fontred','',60);
        GradeL.anchor.setTo(0.5,0.5);
        //choix du grade
        if(this.equationResult>=2*levels[MenuGame.cursorMap].score){
          GradeL.text = 'A+';
          message.text = 'SUCCESS';
          MenuGame.cursorMap += 1;
        }else if(levels[MenuGame.cursorMap].score*2>this.equationResult && this.equationResult>=1.7*levels[MenuGame.cursorMap].score){
          GradeL.text = 'A';
          message.text = 'SUCCESS';
          MenuGame.cursorMap += 1;
        }else if(levels[MenuGame.cursorMap].score*1.7>this.equationResult && this.equationResult>=1.5*levels[MenuGame.cursorMap].score){
          GradeL.text = 'A-';
          message.text = 'SUCCESS';
          MenuGame.cursorMap += 1;
        }else if(levels[MenuGame.cursorMap].score*1.5>this.equationResult && this.equationResult>=1.3*levels[MenuGame.cursorMap].score){
          GradeL.text = 'B';
          message.text = 'SUCCESS';
          MenuGame.cursorMap += 1;
        }else if(levels[MenuGame.cursorMap].score*1.3>this.equationResult && this.equationResult>=1.2*levels[MenuGame.cursorMap].score){
          GradeL.text = 'B-';
          message.text = 'SUCCESS';
          MenuGame.cursorMap += 1;
        }else if(levels[MenuGame.cursorMap].score*1.2>this.equationResult && this.equationResult>=1.1*levels[MenuGame.cursorMap].score){
          GradeL.text = 'C+';
          message.text = 'SUCCESS';
          MenuGame.cursorMap += 1;
        }else if(levels[MenuGame.cursorMap].score*1.1>this.equationResult && this.equationResult>=1*levels[MenuGame.cursorMap].score){
          GradeL.text = 'C';
          message.text = 'SUCCESS';
          MenuGame.cursorMap += 1;
        }else if(levels[MenuGame.cursorMap].score*1>this.equationResult && this.equationResult>=0.95*levels[MenuGame.cursorMap].score){
          GradeL.text = 'C-';
          message.text = 'FAILURE';
        }else if(levels[MenuGame.cursorMap].score*0.95>this.equationResult && this.equationResult>=0.75*levels[MenuGame.cursorMap].score){
          GradeL.text='D';
          message.text = 'FAILURE';
        }else if(levels[MenuGame.cursorMap].score*0.75>this.equationResult && this.equationResult>=0.5*levels[MenuGame.cursorMap].score){
          GradeL.text = 'E';
          message.text = 'FAILURE';
        }else {
          GradeL.text = 'F';
          message.text = 'FAILURE';
        }
      }
    },this);
    let Grade = end.add.bitmapText(end.world.width-400, posY+40*indication.length+60,'font','Grade : ',42);
    Grade.anchor.setTo(0.5,0.5);
    let tips = end.add.bitmapText(end.world.centerX-200,200,'font','INFO : ',60);
    tips.anchor.setTo(0.5,0.5);
    let info = '';
    if(levels[MenuGame.cursorMap].tips){
      info = levels[MenuGame.cursorMap].tips; //+'\n'+citations[Math.floor(Math.random()*citations.length)];
    }
    else {
      info = citations[Math.floor(Math.random()*citations.length)];
    }
    let tip = end.add.text(100, 0.7 * end.world.centerY,info,{
      align: "left",
      wordWrap: true,
      wordWrapWidth: 800
    });
    tip.fill = 'white';
    let next = end.add.button(end.world.width-350, posY+40*indication.length+60+140,'next',()=>{
      //if(this.equationResult>=levels[MenuGame.cursorMap].score){MenuGame.cursorMap += 1};

      if(MenuGame.cursorMap >= levels.length-1){this.state.start('MenuGame');
      Menu.musicMenu.play("",0,0.6,true);}
      else{
        MenuGame.cursorMap++;
		  if(levels[MenuGame.cursorMap].tutoText.length < 1){
			game.id =   MenuGame.cursorMap;
			game.playersskins = MenuGame.playersskins;
			game.nbPlayers = MenuOpt.nbPlayers;
			this.state.start('Game');
		  }else{
			Tuto.id =   MenuGame.cursorMap;
			game.id =  MenuGame.cursorMap;
			game.playersskins = MenuGame.playersskins;
			game.nbPlayers = MenuOpt.nbPlayers;
			this.state.start('Tuto');
		  }
	  }

      this.musicEnd.stop();

    },this,1,0,2);
    next.anchor.setTo(0.5,0.5);

    let restart = end.add.button(end.world.width-615,posY+40*indication.length+60+140,'restart',()=>{
      this.state.start('Game');
      this.musicEnd.stop();

    },this,1,0,2);
    restart.anchor.setTo(0.5,0.5);

    let toMenu = end.add.button(end.world.width-890, posY+40*indication.length+60+140,'menu',()=>{
      this.state.start('MenuGame');
      Menu.musicMenu.play("",0,0.6,true);
      this.musicEnd.stop();
      //  Menu.musicMenu.play('',0,0.6,true);
    },this,1,0,2);
    toMenu.anchor.setTo(0.5,0.5);
  },
};
