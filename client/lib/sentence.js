var _ = require('lodash');
var SentenceParser = require('./sentence-parser');
var Step = require('./step');

class Sentence{
	constructor(metadata){
		var cells = {};
		this.type = 'sentence';

		(metadata.cells || []).forEach(c => cells[c.key] = c);

		this.key = metadata.key;
		this.description = metadata.description;

		this.parts = [];

		this.cells = cells;

		// TODO: Someday this needs to become an object.defineproperty getter
		this.title = metadata.format;

		var parser = new SentenceParser(metadata.format, this);
		parser.parse();

		var usedCells = this.parts
			.filter(part => part.type == "Cell")
			.map(p => p.cell.key);

		this.orderedCells = usedCells;

		var allCells = _.keys(cells);
		var unusedCells = _.difference(allCells, usedCells).join(', ');

		if (unusedCells.length > 0){
			throw new Error('Cell(s) ' + unusedCells + ' are unaccounted for in the sentence format');
		}

		this.allCells = _.values(this.cells);
	}

	firstCell(step){
		if (this.orderedCells.length == 0) return null;

		return step.args.find(this.orderedCells[0]);
	}

	nextCell(arg, step){
		if (arg == null) return this.firstCell(step);
		console.log(JSON.stringify(arg));
		var cell = arg.cell.key;

		if (_.last(this.orderedCells) == cell) return null;

		var index = _.indexOf(this.orderedCells, arg.cell.key);
		return step.args.find(this.orderedCells[index + 1]);
	}

	buildStep(data){
		return new Step(data, this.allCells, this);
	}

	newStep(){
		return this.buildStep({key: this.key, cells: {}});
	}

	editor(step, loader){
		var components = this.parts.map(part => part.editor(step, loader));

		return loader.line({step: step, components: components});
	}


	preview(step, loader){
		var components = this.parts.map(part => part.preview(step, loader));

		return loader.line({components: components});
	}

	buildResults(step, loader){
		var components = this.parts.map(part => part.buildResults(step, loader));

		var result = step.getResult(this.position) || {status: 'none'};

		var line = loader.line({
			components: components, 
			status: result.status
		});

		if (result.status == 'error'){
			return [
				line,
				loader.errorBox({error: result.error})
			]
		}

		return line;
	}



	addCell(key){
		if (!this.cells[key]){
			this.cells[key] = {key: key};
		}

		this.parts.push(new CellPart(this.cells[key]));
	}

	addText(text){
		this.parts.push(new TextPart(text));
	}



}


class CellPart{
	constructor(cell){
		if (cell == null) throw new Error("'cell' cannot be null");

		this.type = "Cell";
		this.cell = cell;
		this.key = cell.key;
	}


	preview(step, loader){
		var value = step.findValue(this.key);
		if (value == null || typeof value === 'undefined'){
			value = '[' + this.key + ']';
		}

		return loader.cell({cell: this.cell, value: value});
	}

	editor(step, loader){
		var arg = step.args.find(this.cell.key);

		return loader.cell(arg);
	}

	buildResults(step, loader){
		var arg = step.args.find(this.cell.key);
		return arg.buildResults(loader);
	}

}


class TextPart{
	constructor(text){
		this.text = text;
		this.type = "Text";

		return this;
	}


	preview(step, loader){
		return this.editor(step, loader);
	}

	editor(step, loader){
		return loader.span(this.text);
	}

	buildResults(step, loader){
		return this.editor(step, loader);
	}
}



module.exports = Sentence;

