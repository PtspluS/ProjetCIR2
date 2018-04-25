define(['utils/Observable'], function(Observable) {
    
	var Morpion = function() {
		Observable.call(this);
		this.reset();
	}

	Morpion.prototype = Object.create(Observable.prototype);
	Morpion.prototype.constructor = Morpion;

	Morpion.prototype.play = function(x, y) {
		var player = this.getCaseState(x,y)
		if(null !== player) {
			throw new Error('('+x+','+y+') is already played by '+player+'.');
		}
		if(this.finished) {
			throw new Error('Game is finished.');
		}
		this.grid[x][y] = this.currentPlayer;
		this.moveCount++;
		if(9 === this.moveCount) {
			this.finished = true;
		}

		var line = 0, column = 0, diag = 0, rdiag = 0;
		for(let i = 0; i < 3; ++i) {
			if(this.currentPlayer === this.getCaseState(x,i)) {
				line++;
			}
			if(this.currentPlayer === this.getCaseState(i,y)) {
				column++;
			}
			if(this.currentPlayer === this.getCaseState(i,i)) {
				diag++;
			}
			if(this.currentPlayer === this.getCaseState(i,2-i)) {
				rdiag++;
			}
		}
		if(3 === line || 3 === column || 3 === diag || 3 === rdiag) {
			this.finished = true;
			this.winner = this.currentPlayer
		}
		
		var old = this.currentPlayer;
		this.currentPlayer = (this.currentPlayer+1)%2;
		this.trigger('play', x, y, old);
		if(this.finished) {
			this.trigger('finished', this.hasWinner(), this.getWinner());
		}
	};

	Morpion.prototype.getCaseState = function(x,y) {
		if(0 > x || 3 < x || 0 > y || 3 < y) {
			return undefined;
		}
		return this.grid[x][y];
	};

	Morpion.prototype.reset = function() {		
		this.currentPlayer = 0;
		this.grid = new Array(3);
		for(let lineIndex = 0; lineIndex < 3; ++lineIndex) {
			this.grid[lineIndex] = new Array(3);
            for(let cellIndex = 0; cellIndex < 3; ++cellIndex) {
                this.grid[lineIndex][cellIndex] = null;
            }
		}
		this.finished = false;
		this.moveCount = 0;
        this.winner = null;
		this.trigger('reset');
	};

	Morpion.prototype.getCurrentPlayer = function() {
		return this.currentPlayer;
	};

	Morpion.prototype.isFinished = function() {
		return this.finished;
	};

	Morpion.prototype.hasWinner = function() {
		return this.finished ? undefined !== this.winner : false ;
	};

	Morpion.prototype.getWinner = function() {
		return this.winner;
	};

	return Morpion;
 
});
