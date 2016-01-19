"use strict";

var uuid = require('node-uuid');
var ArgCollection = require('./arg-collection');
var _ = require('lodash');


class Step{
	constructor(data, cells, grammar){
		this.id = data.id || uuid.v4();
		this.args = new ArgCollection(cells || [], data, this.id);
		this.key = data.key;
		if (!this.key && grammar){
			this.key = grammar.key;
		}

		this.type = 'step';
		this.grammar = grammar; // set by the StepHolder.buildStep() method
		this.collections = {};

		this.results = {};
	}

	setStatus(status){
		this.results.root = {status: status};
	}

	getStatus(){
		if (this.results.root){
			return this.results.root.status;
		}

		return 'none';
	}

	allErrors(){
		return _.values(this.results).filter(x => {
			return x.status == 'error'
		}).map(x => x.error);
	}

	logResult(result){
		if (result.position){
			this.results[result.position] = result;
		}
		else {
			this.results.root = result;
		}

		var self = this;
		if (result.cells){
			result.cells.forEach(cellResult => {
				var arg = self.args.find(cellResult.cell);
				if (arg){
					arg.result = cellResult;
				}
				else {
					console.log('Unable to find an Arg for cell ' + cellResult.cell + ' of step ' + self.id);
				}
				
			});
		}


	}

	getResult(position){
		if (position){
			return this.results[position];
		}
		else if (this.results.root){
			return this.results.root;
		}
		else {
			return {status: 'none'};
		}

	}

	clearResults(){
		this.results = {};
		this.args.clearResults();
	}

	static merge(id, parts){
		var step = new Step({}, []);
		step.id = id;

		for (var i = 0; i < parts.length; i++){
			var part = parts[i];

			part.args.mergeInto(step.args);

			for (var key in part.collections){
				step.collections[key] = part.collections[key];
			}
		}

		_.values(step.collections).forEach(x => x.parent = step);

		step.args.all().forEach(x => x.id = step.id);


		return step;
	}

	children(){
		return _.values(this.collections);
	}

	write(){
		var key = this.key || this.grammar.key;

		var data = {key: key, cells: {}, id: this.id};

		this.args.store(data);

		if (_.keys(this.collections).length > 0){
			data.collections = [];

			for (var key in this.collections){
				var section = this.collections[key];

				var sectionData = section.write();
				data.collections.push(sectionData);
			}
		}

		return data;
	}


	findValue(key){
		var arg = this.args.find(key);
		if (arg == null) return null;

		if (arg.value === false) return false;

		return arg.value || arg.default;
	}

	preview(loader){
		try {
			return this.grammar.preview(this, loader);
		}
		catch (e){
			for (key in this.grammar){
				console.log('grammar has ' + key);
			}


			throw 'Failed to write preview with step ' + this.id + ' and grammar ' + this.grammar.key + ': ' + e;
		}
		
	}

	editor(loader){
		return this.grammar.editor(this, loader);
	}

	buildResults(loader){
		return this.grammar.buildResults(this, loader);
	}

	findByPath(path){
		if ( !(path instanceof Array)){
			path = path.split('.');
		}

		if (path.length == 0) return null;

		var next = this.args.find(path[0]) || this.collections[path[0]];

		if (path.length == 1){
			return next;
		}
		else {
			path.shift();
			return next.findByPath(path);
		}
	}

	isHolder(){
		return false;
	}

	clearActiveState(){
		this.args.clearActiveState();
	}

	hasArgs(){
		return this.args.length() > 0;
	}

	hasCollections(){
		return _.values(this.collections).length > 0;
	}

	isSimple(){
		if (this.hasArgs()) return false;
		if (this.hasCollections()) return false;

		return true;
	}

	selectFirst(){
		if (this.isSimple()) return {holder: this.parent, step: this, cell: null};

		if (!this.hasCollections()){
			return {holder: this.parent, step: this, cell: this.grammar.firstCell(this)};
		}

		return this.grammar.selectFirst(this);
	}

	selectNext(location){
		if (this.isSimple()) return null;

		if (this.hasCollections()){
			return this.grammar.selectNext(location);
		}

		var nextCell = this.grammar.nextCell(location.cell, location.step);
		if (nextCell == null) return null;

		return {holder: this.parent, step: this, cell: nextCell};
	}

	selectPrevious(location){
		if (this.isSimple()) return null;

		if (this.hasCollections()){
			return this.grammar.selectPrevious(location);
		}

		var previousCell = this.grammar.previousCell(location.cell, location.step);
		if (previousCell == null) return null;

		return {holder: this.parent, step: this, cell: previousCell};
	}

	selectLast(location){
		if (this.isSimple()) return {holder: this.parent, step: this, cell: null};

		if (!this.hasCollections()){
			return {holder: this.parent, step: this, cell: this.grammar.lastCell(this)};
		}

		return this.grammar.selectLast(this);
	}

}



module.exports = Step;