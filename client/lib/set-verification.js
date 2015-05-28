var Table = require('./table');

function SetVerification(metadata){
	var table = new Table(metadata);

	table.type = 'set-verification';
	table.ordered = metadata.ordered;

	table.fixture.contextualControl = (section, loader) => null;

	var orderSteps = function(section, wrongOrders){
		var actuals = {}

		if (wrongOrders){
			wrongOrders.forEach(function(x){
				actuals[x.id] = x.actual;
			});
		}

		for (var i = 0; i < section.steps.length; i++){
			var step = section.steps[i];
			step.order = i + 1;

			if (actuals.hasOwnProperty(step.id)){
				step.setStatus('wrong-order');
				step.actualOrder = actuals[step.id];
			}
		}


	}

	table.buildResults = function(step, loader){
		var cells = this.cells;
		var self = this;
		var section = this.readSection(step);

		if (this.ordered){
			orderSteps(section, section.results.wrongOrders);
		}

		var width = this.cells.length + 1;
		if (table.ordered){
			width++;
		}

		var rows = _.map(section.allErrors(), function(error){
			return loader.errorRow({width: width, error: error, step: section});
		});

		rows = rows.concat(_.map(section.steps, function(step){
			return loader.matchedRow({ordered: table.ordered, step: step, cells: cells});
		}));

		rows = rows.concat(_.map(section.results.extras || [], function(extra){
			return loader.extraRow({ordered: table.ordered, data: extra, cells: cells});
		}));

		return loader.setResultsTable({ordered: this.ordered, section: section, cells: cells, title: this.title, rows: rows});
	}

	return table;
}

module.exports = SetVerification;