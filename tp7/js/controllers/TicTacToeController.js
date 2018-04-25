define(['text!templates/tictactoe-view.tpl', 'handlebars', 'jquery'], function(tictactoeView, Handlebars, $) {
    
    console.log('Load controllers/TicTacToeController');
    
    var Controller = function(model, selector) {
        this._element = $(selector);
        this._model = model;
        this._template = Handlebars.compile(tictactoeView);
        this.addListeners();
        this.render();
    };
    
    // Add listeners on DOM elements and on model
    Controller.prototype.addListeners = function() {
        
        // Si l'utilisateur clique sur une case de la grille
        this._element.on('click', 'td', event => {
            var cellNumber = $(event.target).attr('data')-1;
            var column = cellNumber%3;
            var line = Math.floor(cellNumber/3);
            this._model.play(line, column);
        });
        
        // Si l'utilisateur clique sur le bouton reset
        this._element.on('click', 'input[type=button]', event => this._model.reset());
        
        // Si le model est mis à jour
        this._model.on(['play', 'reset'], this.render, this);
    };
    
    // Remove listeners on DOM elements and on model
    Controller.prototype.removeListeners = function() {
        this._element.on('click', 'td');
        this._element.on('click', 'input[type=button]');
        this._model.off(['play', 'reset', this.render, this);
    };
    
    // Generate HTML and display
    Controller.prototype.render = function() {
        var htmlContent = this._template(this._model);
        this._element.html(htmlContent);
    };
    
    return Controller;
    
});
