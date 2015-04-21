var expect = require('chai').expect;

var Cell = require('./../lib/cell');
var Step = require('./../lib/step');
var StepHolder = require('./../lib/step-holder');

describe('Step', function(){
	describe('when getting a cell value', function(){
		var cells = [new Cell('A'), new Cell('B'), new Cell('C')];
		var data = {key: 'foo', cells: {
			A: 1,
			B: 2,
			C: 3
		}};

		var step = new Step(data, cells);

		it('should find the value happy path', function(){
			expect(step.findValue('A')).to.equal(1);
		});

		it('should resolve to null if the cell arg is missing', function(){
			expect(step.findValue('D')).to.be.null;
		});

		it('should resolve the default if the cell arg is null', function(){
			step.args.find('A').default = -1;
			step.args.find('A').value = null;

			expect(step.findValue('A')).to.equal(-1);
		});

		it('should resolve to null if value is null and default is null', function(){
			step.args.find('A').default = null;
			step.args.find('A').value = null;

			expect(step.findValue('A')).to.null;
		});
	});

	it('should have an id', function(){
		var step1 = new Step({key: 'foo'}, []);
		var step2 = new Step({key: 'foo'}, []);
		var step3 = new Step({key: 'foo'}, []);
	

		expect(step1.id).to.not.be.null;
		expect(step2.id).to.not.be.null;
		expect(step3.id).to.not.be.null;
	
		expect(step1.id).to.not.equal(step2.id);
		expect(step1.id).to.not.equal(step3.id);
		expect(step2.id).to.not.equal(step3.id);
	});

	it('by default is not a holder', function(){
		var step1 = new Step({key: 'foo'}, []);

		expect(step1.isHolder()).to.be.false;
	});

	it('should capture the grammar key of the data', function(){
		var step = new Step({key: 'foo'}, []);
		expect(step.key).to.equal('foo');
	});

	it('should build up args', function(){
		var cells = [new Cell('A'), new Cell('B'), new Cell('C')];
		var data = {key: 'foo', cells: {
			A: 1,
			B: 2,
			C: 3
		}};

		var step = new Step(data, cells);

		expect(step.args.length()).to.equal(3);

		expect(step.args.find('A').value).to.equal(1);
		expect(step.args.find('B').value).to.equal(2);
		expect(step.args.find('C').value).to.equal(3);
	});

	it('should be able to clear any active state', function(){
		var cells = [new Cell('A'), new Cell('B'), new Cell('C')];
		var data = {key: 'foo', cells: {
			A: 1,
			B: 2,
			C: 3
		}};

		var step = new Step(data, cells);
		step.args.find('A').active = true;
		step.args.find('B').active = true;
		step.args.find('C').active = true;

		step.clearActiveState();

		expect(step.args.find('A').active).to.be.false;
		expect(step.args.find('B').active).to.be.false;
		expect(step.args.find('C').active).to.be.false;
	});

	it('children just gives you an empty array -- FOR RIGHT NOW', function(){
		var cells = [new Cell('A'), new Cell('B'), new Cell('C')];
		var data = {key: 'foo', cells: {
			A: 1,
			B: 2,
			C: 3
		}};

		var step = new Step(data, cells);

		expect(step.children().length).to.equal(0);
	});

	it('should write arg data back out', function(){
		var cells = [new Cell('A'), new Cell('B'), new Cell('C')];
		var data = {key: 'foo', cells: {
			A: 1,
			B: 2,
			C: 3
		}};

		var step = new Step(data, cells);

		step.args.find('A').value = 4;

		var data = step.write();

		expect(data).to.deep.equal({id: step.id, key: 'foo', cells: {A: 4, B: 2, C: 3}});
	});

	describe('when finding items by path', function(){
		var step = null;

		beforeEach(function(){
			var cells = [new Cell('A'), new Cell('B'), new Cell('C')];
			var data = {key: 'foo', cells: {
				A: 1,
				B: 2,
				C: 3
			}};

			step = new Step(data, cells);
			var holder = new StepHolder(null, {});

			holder.addStep(new Step({key: 'foo', cells: {A: 4, B: 5, C: 6}}, cells));
			holder.addStep(new Step({key: 'foo', cells: {A: 7, B: 8, C: 9}}, cells));
			holder.addStep(new Step({key: 'foo', cells: {A: 10, B: 11, C: 12}}, cells));

			step.collections['rows'] = holder;


		});

		it('can find an arg by path', function(){
			expect(step.findByPath('A').value).to.equal(1);
			expect(step.findByPath(['A']).value).to.equal(1);
		});

		it('can find a collection by name', function(){
			expect(step.findByPath(['rows'])).to.equal(step.collections['rows']);
			expect(step.findByPath('rows')).to.equal(step.collections['rows']);
		});

		it('can find a step within a collection', function(){
			expect(step.findByPath(['rows', '1', 'A']).value).to.equal(7);
		});
	});

	it('should return all the collections as children', function(){
		var cells = [new Cell('A'), new Cell('B'), new Cell('C')];
		var data = {key: 'foo', cells: {
			A: 1,
			B: 2,
			C: 3
		}};

		var step = new Step(data, cells);
		var holder1 = new StepHolder(null, {});
		var holder2 = new StepHolder(null, {});
		var holder3 = new StepHolder(null, {});
	
		step.collections['a'] = holder1;
		step.collections['b'] = holder2;
		step.collections['c'] = holder3;

		expect(step.children()).to.deep.equal([holder1, holder2, holder3]);
	});

	it('copies arguments on merge', function(){
		var cells1 = [new Cell('A'), new Cell('B'), new Cell('C')];
		var data1 = {key: 'foo', cells: {
			A: 1,
			B: 2,
			C: 3
		}};

		var step1 = new Step(data1, cells1);

		var cells2 = [new Cell('D'), new Cell('E')];
		var data2 = {key: 'bar', cells: {
			D: 4,
			E: 5
		}};

		var step2 = new Step(data2, cells2);

		var merged = Step.merge('123', [step1, step2]);

		expect(merged.findValue('A')).to.equal(1);
		expect(merged.findValue('B')).to.equal(2);
		expect(merged.findValue('C')).to.equal(3);
		expect(merged.findValue('D')).to.equal(4);
		expect(merged.findValue('E')).to.equal(5);
	});

	it('has an accurate args count after merging', function(){
		var cells1 = [new Cell('A'), new Cell('B'), new Cell('C')];
		var data1 = {key: 'foo', cells: {
			A: 1,
			B: 2,
			C: 3
		}};

		var step1 = new Step(data1, cells1);

		var cells2 = [new Cell('D'), new Cell('E')];
		var data2 = {key: 'bar', cells: {
			D: 4,
			E: 5
		}};

		var step2 = new Step(data2, cells2);

		var merged = Step.merge('id', [step1, step2]);

		expect(merged.hasArgs()).to.be.true;
	});

	it('all args should have the id of the parent step after merging', function(){
		var cells1 = [new Cell('A'), new Cell('B'), new Cell('C')];
		var data1 = {key: 'foo', cells: {
			A: 1,
			B: 2,
			C: 3
		}};

		var step1 = new Step(data1, cells1);

		var cells2 = [new Cell('D'), new Cell('E')];
		var data2 = {key: 'bar', cells: {
			D: 4,
			E: 5
		}};

		var step2 = new Step(data2, cells2);

		var merged = Step.merge('123', [step1, step2]);

		expect(merged.id).to.equal('123');

		expect(merged.args.find('A').id).to.equal(merged.id);
		expect(merged.args.find('B').id).to.equal(merged.id);
		expect(merged.args.find('C').id).to.equal(merged.id);
		expect(merged.args.find('D').id).to.equal(merged.id);
		expect(merged.args.find('E').id).to.equal(merged.id);
	});

	it('copies collections on merge', function(){
		var step1 = new Step({}, []);
		var colA = {};
		var colB = {};

		step1.collections['A'] = colA;
		step1.collections['B'] = colB;

		var step2 = new Step({}, []);
		var colC = {};
		step2.collections['C'] = colC;

		var merged = Step.merge('123', [step1, step2]);

		expect(merged.collections.A).to.equal(colA);
		expect(merged.collections.B).to.equal(colB);
		expect(merged.collections.C).to.equal(colC);

		expect(merged.collections.A.parent).to.equal(merged);
		expect(merged.collections.B.parent).to.equal(merged);
		expect(merged.collections.C.parent).to.equal(merged);
	});

	describe('when logging results', function(){
		var result1 = {
			status: 'failure',
			cells: [
				{cell: 'A', status: 'ok'},
				{cell: 'B', status: 'ok'}
			]
		};

		var result2 = {
			status: 'ok',
			position: '2',
			cells: [
				{cell: 'C', status: 'ok'}
			]
		};

		var step = null;

		beforeEach(function(){
			var cells = [new Cell('A'), new Cell('B'), new Cell('C')];
			var data = {key: 'foo', cells: {
				A: 1,
				B: 2,
				C: 3
			}};

			step = new Step(data, cells);

			step.logResult(result1);
			step.logResult(result2);
		});

		it('can get all errors', function(){
			step.logResult({status: 'error', error: 'bad', position: 'a'});
			step.logResult({status: 'error', error: 'worse', position: 'b'});

			expect(step.allErrors()).to.deep.equal(['bad', 'worse']);
		});

		it('get result for no position gives you the root', function(){
			expect(step.getResult(null)).to.equal(result1);
			expect(step.getResult(undefined)).to.equal(result1);


		});

		it('get result by position', function(){
			expect(step.getResult('2')).to.equal(result2);
		});

		it('stores the root result', function(){
			expect(step.results.root).to.equal(result1);
		});

		it('stores the position result', function(){
			expect(step.results['2']).to.equal(result2);
		});

		it('stores each cell result', function(){
			expect(step.args.find('A').result).to.equal(result1.cells[0]);
			expect(step.args.find('B').result).to.equal(result1.cells[1]);
			expect(step.args.find('C').result).to.equal(result2.cells[0]);
		});


		it('can clear all results', function(){
			step.clearResults();

			expect(step.results.hasOwnProperty('root')).to.be.false;
			expect(step.results.hasOwnProperty('2')).to.be.false;

			expect(step.args.find('A').result).to.be.null;
			expect(step.args.find('B').result).to.be.null;
			expect(step.args.find('C').result).to.be.null;
		});
	});
});