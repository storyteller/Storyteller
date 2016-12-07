var _ = require('lodash');
var SentenceParser = require('./sentence-parser');
var Step = require('./../model/step');

class Sentence{
	constructor(metadata){
		var cells = {};
		this.type = 'sentence';

		(metadata.cells || []).forEach(c => cells[c.key] = c);

		this.key = metadata.key;
		this.description = metadata.description;

		this.parts = [];
		this.errors = [];

		this.cells = cells;

		// TODO: Someday this needs to become an object.defineproperty getter
		this.title = metadata.format;

		try {
			var parser = new SentenceParser(metadata.format, this);
			parser.parse();
		}
		catch (e){
			this.errors.push({
				message: 'Sentence parsing with format "' + metadata.format + '" failed.',
				error: e.toString()
			});
		}


		var usedCells = this.parts
			.filter(part => part.type == "Cell")
			.map(p => p.cell.key);

		this.orderedCells = usedCells;

		var allCells = _.keys(cells);
		var unusedCells = _.difference(allCells, usedCells).join(', ');

		

		if (unusedCells.length > 0){
			this.errors.push({
				message: 'Cell(s) ' + unusedCells + ' are unaccounted for in the sentence format',
				error: 'Missing cells in the format'
			});
		}

		this.allCells = _.values(this.cells);
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

	buildResults(step, loader, isStepthrough, dispatch, spec){
		var result = step.getResult(this.position) || {status: 'none'};

		var components = this.parts.map(part => part.buildResults(step, loader));

		var isActive = false;
		if (isStepthrough){
			isActive = spec.isActiveStep(step.id, this.position);

			if (!isActive){
				var breakpoint = loader.breakpoint({
					spec: spec, 
					id: step.id,
					position: this.position,
					dispatch: dispatch
				});

				components = [breakpoint].concat(components);
			}
		}

		
        switch (result.status){
            case 'ok':
                components = [loader.checked()].concat(components);
                break;
                
            case 'success':
                components = [loader.success()].concat(components);
                break;
                
            case 'failed':
                components = [loader.failed()].concat(components);
                break;
                
            case 'error':
                components = [loader.error()].concat(components);
                break;
        }
        
		var status = result.status;

		if (result.status == 'error'){
            components.push(loader.errorBox({error: result.error}));
		}

		if (isActive){
			var stepthrough = loader.stepthroughControls({spec: spec});
			components = [stepthrough].concat(components);

			status = 'primary';
		}
        
		var line = loader.line({
			components: components, 
			status: status
		});

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

	selectFirst(step){
		return {step: step, holder: step.parent, cell: this.firstCell(step)};
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

