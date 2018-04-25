console.log('Load main.js');
    
// RequireJS Configuration
require.config({
    // Par défaut, aller chercher les modules dans le dossier js/
    baseUrl: 'js',
    // Définition des racourccis
    paths: {
        templates:  '../templates',
        jquery:     'libs/jquery', 
        handlebars: 'libs/handlebars',
        text:       'libs/text'
    },
    // Encapsulation des bibliothèques externes dans des modules
    shim: {
        jquery: {
            exports: '$'
        },
        handlebars: {
            exports: 'Handlebars'
        }
    }
});

// Register Handlebars helpers
require(['handlebars'],
function(Handlebars) {
    Handlebars.registerHelper('getCaseIndex', function(line, column) {
        return line * 3 + column + 1;
    });
});


// Load Application
require(['models/TicTacToeModel', 'controllers/TicTacToeController'],
function(TicTacToeModel, TicTacToeController) {    
    var game = new TicTacToeModel();
    var view1 = new TicTacToeController(game, '#view1');
    var view2 = new TicTacToeController(game, '#view2');
});