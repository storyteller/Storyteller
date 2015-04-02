var Step = require('./step');
var CompositeGrammar = require('./composite-grammar');
var StepHolder = require('./step-holder');
var changes = require('./change-commands');
var Postal = require('postal');
var _ = require('lodash');


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
				return loader.tableContext({table: self, section: section});
			},

			firstCell(step){
				return step.args.find(self.cells[0].key);
			},

			nextCell(arg, step){
				if (arg == null) return this.firstCell(step);

				var cell = arg.cell.key;

				if (cell == _.last(self.cells).key) return null;

				var index = _.findIndex(self.cells, c => c.key == cell);
				if (index < 0) return null;

				return step.args.find(self.cells[index + 1].key);
			},

			key: self.key,
			title: metadata.title
		}
		
		super(metadata);

		this.title = metadata.title;
		this.cells = metadata.cells;


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
			var cloneRow = () => {
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

			return loader.row({cloneRow: cloneRow, step: step, cells: cells, section: section});
		});

		var section = this.readSection(step);
		
		var addStep = () => {
			var step = this.newRowStep();
			var message = changes.stepAdded(section, step);

			Postal.publish({
				channel: 'editor',
				topic: 'add-step',
				data: message
			});
		}

		return loader.table({addStep: addStep, cells: this.cells, title: this.title, rows: rows, section: section});
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

	firstCell(){
		return null;
	}

	nextCell(){
		return null;
	}
}



module.exports = Table;