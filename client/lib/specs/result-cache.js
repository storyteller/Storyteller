var ArrayList = require('./../array-list');
var Counts = require('./counts');
var Postal = require('postal');
var results = {};



var ResultsCache = {
	results: {},

	clear(){
		this.results = {}
	},

	record(completed){
		if (!this.results.hasOwnProperty(completed.id)){
			this.results[completed.id] = new ArrayList();
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

		this.results[completed.id].insertAt(0, completed);
	},

	hasResults(id){
		return this.results.hasOwnProperty(id) && this.results[id].length > 0;
	},

	replaceResults(id, resultHistory){
		var list = new ArrayList();

		if (resultHistory == null || resultHistory == undefined){
			resultHistory = [];
		}

		if (!(resultHistory instanceof Array)){
			resultHistory = [resultHistory];
		}

		if (resultHistory != null && resultHistory != undefined){
			resultHistory.forEach(x => list.add(x));
		}
		

		this.results[id] = list;
	},

	lastResultFor(id){
		if (!this.hasResults(id)) return null;

		return this.results[id].first();
	},

	resultsFor(id){
		if (this.hasResults(id)) return this.results[id].toArray();

		return [];
	}
}



module.exports = ResultsCache;