var Step = require('./../model/step');
var uuid = require('node-uuid');
var _ = require('lodash');
var Sentence = require('./sentence');

class Paragraph{
	constructor(metadata){
		this.title = metadata.title;
		this.key = metadata.key;
		this.type = 'paragraph';

		var buildGrammar = require('./grammar-builder');

		this.children = metadata.children.map(data => {
			return buildGrammar(data);
		});

		for (var i = 0; i < this.children.length; i++){
			this.children[i].position = i.toString();
		}

		// smelly, but hey, it works
		var cells = this.children
			.filter(x => x instanceof Sentence)
			.map(x => x.orderedCells);

		this.orderedCells = _.flatten(cells);
		
	}


	buildStep(data){
		var parts = this.children.map(x => x.buildStep(data));

		var id = data.id || uuid.v4();
		var step = Step.merge(id, parts);

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

		return loader.container({
			title: this.title, 
			components: components, 
			deleteSubject: step,
			subject: step
		});
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

	buildResults(step, loader, isStepthrough, dispatch, spec){
		var components = this.children.map(grammar => {
			return grammar.buildResults(step, loader, isStepthrough, dispatch, spec);
		});

		components = _.flatten(components);

		return loader.container({title: this.title, components: components});
	}


	firstCell(step){
		if (this.orderedCells.length == 0) return null;

		return step.args.find(this.orderedCells[0]);
	}

	lastCell(step){
		if (this.orderedCells.length == 0) return null;

		return step.args.find(_.last(this.orderedCells));
	}

	nextCell(arg, step){
		if (arg == null) return this.firstCell(step);

		var cell = arg.cell.key;

		if (_.last(this.orderedCells) == cell) return null;

		var index = _.indexOf(this.orderedCells, arg.cell.key);
		if (index < 0) return null;

		return step.args.find(this.orderedCells[index + 1]);
	}

	previousCell(arg, step){
		if (arg == null) return this.lastCell(step);

		var cell = arg.cell.key;

		if (this.orderedCells[0] == cell) return null;

		var index = _.indexOf(this.orderedCells, arg.cell.key);
		if (index < 0) return null;

		return step.args.find(this.orderedCells[index - 1]);
	}

	selectNext(){
		return null;
	}

	selectFirst(step){
		for (var i = 0; i < this.children.length; i++){
			var first = this.children[0].selectFirst(step);
			if (first) return first;
		}

		return null;
	}
}


module.exports = Paragraph;
