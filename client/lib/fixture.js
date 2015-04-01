var MissingGrammar = require('./missing-grammar');
var Section = require('./section');
var _ = require('lodash');

class Fixture{
	constructor(data){
		this.key = data.key;
		this.title = data.title || data.key;
		this.errors = data.errors || [];
		this.implementation = data.implementation;

		var grammars = {};
		
		if (data.grammars){
			var buildGrammar = require('./grammar-builder');

			data.grammars.forEach(metadata => {
				grammars[metadata.key] = buildGrammar(metadata);
			});
		}

		this.grammars = grammars;
	}

	contextualControl(section, loader){
		return loader.stepAdder({holder: section});
	}

	newStep(){
		return new Section({}, this);
	}

	find(key){
		if (this.grammars[key]){
			return this.grammars[key];
		}

		return new MissingGrammar(key);
	}

	errorCount(){
		var sum = this.errors.length;
		for (var key in this.grammars){
			var g = this.grammars[key];
			if (g.errors){
				sum = sum + g.errors.length;
			}
		}

		return sum;
	}

	errorReport(){
		var data = {
			key: this.key,
			title: this.title,
			implementation: this.implementation,
			errors: this.errors,
			grammars: []

		};

		for (var key in this.grammars){
			var g = this.grammars[key];
			if (g.errors && g.errors.length > 0){
				data.grammars.push({key: key, errors: g.errors});
			}
		}

		return data;


	}

	// tested therough the Section ctor
	buildStep(data){
		return new Section(data, this);
	}

}



	
module.exports = Fixture;