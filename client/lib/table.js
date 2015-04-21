var Step = require('./step');
var CompositeGrammar = require('./composite-grammar');
var StepHolder = require('./step-holder');
var changes = require('./change-commands');
var Postal = require('postal');
var _ = require('lodash');
var Section = require('./section');


class Table extends CompositeGrammar{
	constructor(metadata){
		var self = this;

		this.fixture = {
			find(key){
				return this;
			},

			buildStep(data){
				var step = new Step(data || {cells:{}}, self.cells, this);
				step.key = this.key + '-row';

				return step;
			},

			contextualControl(section, loader){
				var optionals = self.optionalCells(section);
				return loader.tableContext({table: self, section: section, optionals: optionals});
			},

			firstCell(step){
				return step.args.find(self.cells[0].key);
			},

			lastCell(step){
				var key = _.last(self.cells).key;
				return step.args.find(key);
			},

			nextCell(arg, step){
				if (arg == null) return this.firstCell(step);

				var cell = arg.cell.key;

				if (cell == _.last(self.cells).key) return null;

				var index = _.findIndex(self.cells, c => c.key == cell);
				if (index < 0) return null;

				return step.args.find(self.cells[index + 1].key);
			},

			previousCell(arg, step){
				if (arg == null) return this.lastCell(step);

				var cell = arg.cell.key;

				if (cell == self.cells[0].key) return null;

				var index = _.findIndex(self.cells, c => c.key == cell);
				if (index < 0) return null;

				return step.args.find(self.cells[index - 1].key);
			},

			addAndSelect(location){
				var newStep = self.addStep(location.holder);
				return newStep.selectFirst();
			},

			key: metadata.key,
			title: metadata.title
		}
		
		super(metadata);

		this.title = metadata.title;
		this.cells = metadata.cells;
		this.optionals = metadata.cells.filter(x => x.default != null && x.default != undefined).map(x => x.key);

	}

	addStep(section) {
		var step = this.newRowStep();
		var message = changes.stepAdded(section, step);

		Postal.publish({
			channel: 'editor',
			topic: 'add-step',
			data: message
		});

		return step;
	}

	toCloneRow (step, section){
		return () => {
			var newStep = this.newRowStep();

			this.cells.forEach(c => {
				var value = step.findValue(c.key);
				newStep.args.find(c.key).value = value;
			});

			Postal.publish({
				channel: 'editor',
				topic: 'add-step',
				data: changes.stepAdded(section, newStep)
			})
		}
	}

	newRowStep(){
		return this.fixture.buildStep({cells: {}});
	}

	buildStep(data){
		var step = new Step({}, [], this);
		step.key = this.key;

		var children = this.readRawData(data);
		this.writeSection(step, children);

		return step;
	}

	newStep(){
		var step = this.buildStep({cells: {}});
		var section = this.readSection(step);


		return step;
	}

	editor(step, loader){
		var section = this.readSection(step);

		var cells = this.cells;
		
		var rows = section.steps.map(step => {
			var cloneRow = this.toCloneRow(step, section);

			return loader.row({cloneRow: cloneRow, step: step, cells: cells, section: section});
		});

		var section = this.readSection(step);
		
		var addStep = () => {
			this.addStep(section);
		}

		return loader.table({addStep: addStep, cells: this.cells, title: this.title, rows: rows, section: section, step: step, adder: section.adder});
	}

	buildResults(step, loader){
		var cells = this.cells;
		var section = this.readSection(step);

		var rows = section.allErrors().map(error => {
			return loader.errorRow({width: cells.length, error: error});
		});

		section.steps.forEach(step => {
			var result = step.getResult();

			rows.push(loader.row({step: step, cells: cells})); 

			if (result.status == 'error'){
				rows.push(loader.errorRow({width: cells.length, error: result.error}));
			}
		});

		return loader.table({cells: this.cells, title: this.title, rows: rows, section: section});
	}

	preview(step, loader){
		var cells = this.cells;
		var section = this.readSection(step);

		var rows = section.steps.map(step => {
			return loader.row({step: step, cells: cells}); 
		});

		return loader.table({cells: this.cells, title: this.title, rows: rows, section: section});
	}

	selectFirst(step){
		var section = this.readSection(step);
		if (section.steps.length == 0){
			return {holder: section, step: section.adder, cell: section.adder};
		}

		var step = section.steps[0];
		return step.selectFirst();
	}

	selectNext(location){
		return null;
	}

	selectPrevious(location){
		return null;
	}

	selectLast(step){
		var section = this.readSection(step);
		return {holder: section, step: section.adder, cell: null};
	}

	optionalCells(section){
		return this.optionals.map(x => {
			return {
				cell: x,
				active: section.isCellActive(x)
			};
		});
	}
}



module.exports = Table;