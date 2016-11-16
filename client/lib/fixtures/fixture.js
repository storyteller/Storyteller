"use strict";

var MissingGrammar = require('./../grammars/missing-grammar');
var Section = require('./../model/section');
var _ = require('lodash');

class Fixture{
	constructor(data){
		this.key = data.key;
		this.title = data.title || data.key;
		this.errors = data.errors || [];
		this.implementation = data.implementation;
		this.sample = data.sample;
		this.missingCount = data.missingCount;
		this.missing = data.missing;
		this.missingCode = data.missingCode;

		var grammars = {};
		
		if (data.grammars){
			var buildGrammar = require('./../grammars/grammar-builder');

			data.grammars.forEach(metadata => {
				grammars[metadata.key] = buildGrammar(metadata);
			});
		}

		this.grammars = grammars;
	}

	contextualControl(section, loader){
		return loader.stepAdder({holder: section, title: 'Grammars'});
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

	addAndSelect(location){
		return {holder: location.holder, step: location.holder.adder, cell: null};
	}

}



	
module.exports = Fixture;