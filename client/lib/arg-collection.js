var Arg = require('./arg');
var _ = require('lodash');

class ArgCollection {
	constructor(cells, data, id){
		var args = {};

		cells.forEach(function(cell){
			var arg = new Arg(cell, data, id);
			args[arg.key] = arg;
		});

		this.args = args;
		
	}

	length(){
		return _.values(this.args).length;
	}

	allKeys(){
		var allCells = [];
		for (var key in this.args){
			allCells.push(key);
		}

		return allCells;
	}

	mergeInto(other){
		for (var key in this.args){
			other.args[key] = this.args[key];
		}
	}

	find(key){
		return this.args[key];
	}


	store(data){
		for (var key in this.args){
			this.args[key].store(data);
		}
	}

	clearActiveState(){
		for (var key in this.args){
			this.args[key].active = false;
		}
	}

	clearResults(){
		for (var key in this.args){
			this.args[key].result = null;
		}
	}
}

	
module.exports = ArgCollection;