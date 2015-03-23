
var uuid = require('node-uuid');
var ArgCollection = require('./arg-collection');
var _ = require('lodash');


class Step{
	constructor(data, cells, grammar){
		this.id = data.id || uuid.v4();
		this.args = new ArgCollection(cells || [], data, this.id);
		this.key = data.key;
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
				self.args.find(cellResult.cell).result = cellResult;
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
			return {status: 'ok'};
		}

	}

	clearResults(){
		this.results = {};
		this.args.clearResults();
	}

	static merge(parts){
		var step = new Step({}, []);

		for (var i = 0; i < parts.length; i++){
			var part = parts[i];

			part.args.mergeInto(step.args);

			for (var key in part.collections){
				step.collections[key] = part.collections[key];
			}
		}


		return step;
	}

	children(){
		return _.values(this.collections);
	}

	write(){
		var data = {key: this.key, cells: {}, id: this.id};

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

	// TODO -- get rid of the duplication in writing sections
	pack(){
		var data = {key: this.key, cells: {}, id: this.id};
		this.args.store(data);
		data.id = this.id;

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
		// TODO: Will need to get fancier later when we
		// introduce embedded sections and tables
		return false;
	}

	clearActiveState(){
		this.args.clearActiveState();
	}

}



module.exports = Step;