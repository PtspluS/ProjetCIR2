/**
* Observable
* Module RequireJS
* Version 0.1.0 
*
* Author : Ferdinand Piette
* Last Update : 2013
*/

define([], function() {
    
    console.log('Load core/Observable');
   
    var Observable = function() {
		this._observableEvents = new Map();
    };

	/**
	 * Déclenche un événement et exécute toutes les callbacks abonnées à cet événement
	 * @param eventName - le nom de l'événement déclenché
	 * @param args[n>0] - les paramètres à passer aux callbacks abonnées à cet événement
	 * @return l'objet observable (pour chainage)
	 */
    Observable.prototype.trigger = function(eventName, ...args) {
		if(this._observableEvents.has(eventName)) {
			this._observableEvents.get(eventName).forEach(
				event => { event.callback.apply(event.context || event.observable, args); }
			);
		}
		if(this._observableEvents.has('all')) {
			this._observableEvents.get('all').forEach(
				event => { event.callback.apply(event.context || event.observable, args); }
			);
		}
		return this;
    };

	/**
	 * S'abonne un événement
	 * @param eventName - le nom de l'événement à observer
	 * @param callback - la fonction à exécuter lorsque l'événement se produit
	 * @param context - le context dans lequel il faut exécuter la callback
	 * @return l'objet observable (pour chainage)
	 */
    Observable.prototype.on = function(eventNames, callback, context) {
		if(!Array.isArray(eventNames)) { eventNames = [eventNames]; }
		eventNames.forEach(eventName => {
			if(!this._observableEvents.has(eventName)) { this._observableEvents.set(eventName, []); }
			this._observableEvents.get(eventName).push({
				eventName: eventName,
				callback: callback,
				context: context,
				observable: this
			});
		});
		return this;
    };

	/**
	 * Se désabonne d'un événement
	 * @param eventName - le nom de l'événement à ne plus observer
	 * @param callback - la fonction qui devait s'exécuter lorsque l'événement se produit
	 * @param context - le context dans lequel il fallait exécuter la callback
	 * @return l'objet observable (pour chainage)
	 */
    Observable.prototype.off = function(eventNames, callback, context) {
		if(!eventNames) { eventNames = [...this._observableEvents.keys()]; } 
		else if(!Array.isArray(eventNames)) { eventNames = [eventNames]; }

		eventNames.forEach(eventName => {
			if(!callback && !context) { this._observableEvents.delete(eventName); }
			let events = this._observableEvents.get(eventName);
			if(!events) { return; }
			for(let index = events.length-1; index >= 0; --index) {
				if((!callback || events[index].callback === callback) && (!context || events[index].context === context)) {
					events.splice(index, 1);
				}
			}            
			if(0 === events.length) { this._observableEvents.delete(eventName); }
		});
		return this;
    };

    return Observable;
    
});
