var ArrayList = require('./../array-list');
var Counts = require('./counts');

var results = {};



module.exports = {
	clear(){
		results = {}
	},

	record(completed){
		if (!results.hasOwnProperty(completed.id)){
			results[completed.id] = new ArrayList();
		}

		var counts = null;

		if (completed.counts){
			counts = new Counts(completed.counts); 
		}
		else if (completed.results && completed.results.counts){
			counts = new Counts(completed.results.counts);
		}
		else {
			counts = new Counts(0, 0, 0, 0);
		}

		completed.counts = counts;

		results[completed.id].insertAt(0, completed);
	},

	hasResults(id){
		return results.hasOwnProperty(id);
	},

	lastResultFor(id){
		console.log('looking for results for ' + id);
		if (!this.hasResults(id)) return null;

		return results[id].first();
	},

	resultsFor(id){
		if (this.hasResults(id)) return results[id].toArray();

		return [];
	}
}