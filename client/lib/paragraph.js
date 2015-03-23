var Step = require('./step');
var uuid = require('node-uuid');
var _ = require('lodash');

class Paragraph{
	constructor(metadata){
		this.title = metadata.title;
		this.key = metadata.key;

		var buildGrammar = require('./grammar-builder');

		this.children = metadata.children.map(data => {
			return buildGrammar(data);
		});

		for (var i = 0; i < this.children.length; i++){
			this.children[i].position = i.toString();
		}
	}


	buildStep(data){
		var parts = this.children.map(x => x.buildStep(data));

		var step = Step.merge(parts);

		step.id = data.id || uuid.v4();
		step.grammar = this;
		step.key = data.key;

		return step;
	}

	newStep(){
		return this.buildStep({key: this.key, cells: {}});
	}

	editor(step, loader){
		var chromeless = loader.chromeless();

		if (chromeless == null){
			throw new Error('Unable to create a chromeless loader from the current loader');
		}

		var components = this.children.map(g => g.editor(step, chromeless));

		return loader.container({title: this.title, components: components});
	}

	preview(step, loader){
		var components = this.children.map(grammar => {
			try {
				return grammar.preview(step, loader);
			}
			catch (e){
				throw 'Failed to write the preview of a child grammar within a paragraph of ' + this.key + ' at position ' + grammar.position + ': ' + e;
			}
			
		});

		components = _.flatten(components);

		return loader.container({title: this.title, components: components});
	}

	buildResults(step, loader){
		var components = this.children.map(grammar => {
			return grammar.buildResults(step, loader);
		});

		components = _.flatten(components);

		return loader.container({title: this.title, components: components});
	}


}


module.exports = Paragraph;
