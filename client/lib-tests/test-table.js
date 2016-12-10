var expect = require('chai').expect;
var Table = require('./../lib/grammars/table');
var StubLoader = require('./stub-loader');
var Step = require('./../lib/model/step');
var Section = require('./../lib/model/section');


describe('Table Grammar', function(){
	var loader = null;

	var metadata = {
		type: 'table',
		key: 'AddTable',
		title: 'Adding some numbers',
		collection: 'steps',
		cells: [
			{key: 'x', title: 'Operand 1', description: 'The first operand for addition'},
			{key: 'y', title: 'Operand 2', description: 'The second operand for addition'},
			{key: 'result', title: 'The Result', description: 'The expected result'}
		]
	};

	var table = null;

	beforeEach(function(){
		table = new Table(metadata);
		loader = new StubLoader();
	});

	it('the inner fixture grammar can select the first cell', function(){
		var step = table.fixture.buildStep(null);
		step.parent = new Section({}, table.fixture);
		expect(table.fixture.firstCell(step).cell.key).to.equal('x');
	});

	it('the inner fixture grammar can select the last cell', function(){
		var step = table.fixture.buildStep(null);
		step.parent = new Section({}, table.fixture);
		expect(table.fixture.lastCell(step).cell.key).to.equal('result');
	});

	it('the inner fixture grammar can select the next cell in a row step', function(){
		var step = table.fixture.buildStep(null);
		step.parent = new Section({}, table.fixture);
		var x = step.args.find('x');
		var y = step.args.find('y');
		var result = step.args.find('result');

		expect(table.fixture.nextCell(x, step)).to.equal(y);
		expect(table.fixture.nextCell(y, step)).to.equal(result);
		expect(table.fixture.nextCell(result, step)).to.be.null;
	});

	it('the inner fixture grammar can select the previous cell in a row step', function(){
		var step = table.fixture.buildStep(null);
		step.parent = new Section({}, table.fixture);
		var x = step.args.find('x');
		var y = step.args.find('y');
		var result = step.args.find('result');

		expect(table.fixture.previousCell(x, step)).to.be.null;
		expect(table.fixture.previousCell(y, step)).to.equal(x);
		expect(table.fixture.previousCell(result, step)).to.equal(y);
	});

	it('can build its contextual control', function(){
		var section = {};
		var optionals = {};
		table.optionalCells = section => optionals;
		var control = table.fixture.contextualControl(section, loader);



		expect(control).to.deep.equal({type: 'tableContext', props: {table: table, section: section, optionals: optionals, title: 'Optional Columns'}});
	});

	it('should capture the key', function(){
		expect(table.key).to.equal('AddTable');
	});

	it('should capture the title', function(){
		expect(table.title).to.equal('Adding some numbers');
	});

	it('captures the cells', function(){
		expect(table.cells).to.equal(metadata.cells);
	});

	it('can build a new step', function(){
 		var step = table.newStep();

 		var holder = table.readSection(step);
 		expect(holder).to.not.be.null;

	});

	it('moves to the row adder position on moveFirst with no rows', function(){
		var step = table.newStep();
		var section = table.readSection(step);

		var first = table.selectFirst(step);

		expect(first.holder).to.equal(section);
		expect(first.step).to.equal(section.adder);
		expect(first.cell).to.equal(section.adder);



	});

	it('selects the first cell in the first row if there is a row for selectFirst', () => {
		var data = {
			collections: [
				{
					key: 'steps',
					steps: [
						{cells: {x: 1, y: 2, result: 3}},
						{cells: {x: 4, y: 5, result: 9}},
						{cells: {x: 6, y: 7, result: 13}}

					]
				} 
			]
		}

		var step = table.buildStep(data);
		var section = table.readSection(step);
		var firstRow = section.steps[0];

		var first = table.selectFirst(step);

		expect(first.holder).to.equal(section);
		expect(first.step).to.equal(firstRow);


	});

	it('can build a step from data', function(){
		var data = {
			collections: [
				{
					key: 'steps',
					steps: [
						{cells: {x: 1, y: 2, result: 3}},
						{cells: {x: 4, y: 5, result: 9}},
						{cells: {x: 6, y: 7, result: 13}}

					]
				} 
			]
		}

		var step = table.buildStep(data);

		var holder = step.collections.steps;

		expect(holder.parent).to.equal(step);

		expect(holder.steps.length).to.equal(3);

		// spot check
		expect(holder.steps[0].findValue('x')).to.equal(1);
		expect(holder.steps[1].findValue('y')).to.equal(5);
		expect(holder.steps[2].findValue('result')).to.equal(13);
	});

	it('should place its fixture object on the right section of built steps', function(){
		var data = {
			collections: [
				{
					key: 'steps',
					steps: [
						{cells: {x: 1, y: 2, result: 3}},
						{cells: {x: 4, y: 5, result: 9}},
						{cells: {x: 6, y: 7, result: 13}}

					]
				} 
			]
		}

		var step = table.buildStep(data);

		var holder = step.collections.steps;

		expect(holder.fixture).to.equal(table.fixture);
	});

	it('should build an error row if there is a before error', function(){
		var step = new Step({}, []);

		table.writeSection(step, {steps: [], results: {}, allErrors: function(){
			return [];
		}});

		step.parent = new Section({}, table.fixture);

		// negative condition
		var initial = table.buildResults(step, loader);
		expect(initial.props.rows.length).to.equal(0);

		table.writeSection(step, {steps: [], allErrors: function(){
			return ['Bad table!'];
		}});

		var withBeforeError = table.buildResults(step, loader);

		expect(withBeforeError.props.rows[0]).to.deep.equal({
			type: 'errorRow', 
			props: {
				width: 3,
				error: 'Bad table!'
			}

		});

	});

	it('should write a row for each child step', function(){
		var step = new Step({}, []);
		var section = {steps: [], results: {}, allErrors: function(){
			return [];
		}};
		table.writeSection(step, section);

		var FakeStep = function(){
			this.getResult = function(){
				return {status: 'ok'};
			}
		}

		var child1 = new FakeStep();
		var child2 = new FakeStep();
		var child3 = new FakeStep();

		section.steps = [child1, child2, child3];

		var spec = {};
		var dispatch = o => {};
		var isStepthrough = false;

		var results = table.buildResults(step, loader, isStepthrough, dispatch, spec);

		expect(results.props.rows.length).to.equal(3);
		expect(results.props.rows[0]).to.deep.equal({
			type: 'row',
			props: {
				cells: table.cells,
				step: child1,
				spec: spec,
				position: null,
				dispatch: dispatch,
				isStepthrough: isStepthrough
			}

		});

		expect(results.props.rows[1]).to.deep.equal({
			type: 'row',
			props: {
				cells: table.cells,
				step: child2,
				spec: spec,
				position: null,
				dispatch: dispatch,
				isStepthrough: isStepthrough
			}
		});

		expect(results.props.rows[2]).to.deep.equal({
			type: 'row',
			props: {
				cells: table.cells,
				step: child3,
				spec: spec,
				position: null,
				dispatch: dispatch,
				isStepthrough: isStepthrough
			}
		});
	});

	it('should write an error row for a step that failed', function(){
		var step = new Step({}, []);
		var section = {steps: [], results: {}, allErrors: function(){
			return [];
		}};
		table.writeSection(step, section);

		section.steps.push({
			getResult: function(){
				return {status: 'error', error: 'bad row!'}
			}
		});

		var results = table.buildResults(step, loader);

		expect(results.props.rows[0].type).to.equal('row');
		expect(results.props.rows[1]).to.deep.equal({
			type: 'errorRow',
			props: {
				width: 3,
				error: 'bad row!'
			}
		});
	});
});