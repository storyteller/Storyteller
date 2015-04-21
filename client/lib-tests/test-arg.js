var expect = require('chai').expect;
var Cell = require('./../lib/cell');
var Arg = require('./../lib/arg');


describe('Arg', function(){
	it('should grab the basic props from the cell', function(){
		var cell = new Cell('foo');
		var step = {cells:{foo: 'A'}};

		var arg = new Arg(cell, step, 1);

		expect(arg.cell).to.equal(cell);
		expect(arg.result).to.be.null;
		expect(arg.key).to.equal('foo');
	});

	it('has a default positive', () => {
		var cell = new Cell('foo');
		cell.default = 'what?';

		var step = {cells:{foo: 'A'}};

		var arg = new Arg(cell, step, 1);

		expect(arg.hasDefault()).to.be.true;
	});

	it('has a default negative', () => {
		var cell = new Cell('foo');
		cell.default = null;

		var step = {cells:{foo: 'A'}};

		var arg = new Arg(cell, step, 1);

		expect(arg.hasDefault()).to.be.false;
	});

	it('uses text as the default editor if none', function(){
		var step = {cells:{foo: 'A'}};

		var arg = new Arg({}, step, 1);
		expect(arg.cell.editor).to.equal('text');
	});

	it('editing should be false by default', function(){
		var cell = new Cell('foo');
		var step = {cells:{foo: 'A'}};

		var arg = new Arg(cell, step, 1);

		expect(arg.editing).to.be.false;
	});

	it('should not be changed by default', function(){
		var cell = new Cell('foo');
		var step = {cells:{foo: 'A'}};

		var arg = new Arg(cell, step, 1);

		expect(arg.changed).to.be.false;
	});

	it('should use the actual value if it exists', function(){
		var cell = new Cell('foo');
		cell.default = 'B';

		var step = {cells:{foo: 'A'}};

		var arg = new Arg(cell, step, 1);
		expect(arg.value).to.equal('A');
	});

	it('should use the default if there is no given value', function(){
		var cell = new Cell('foo');
		cell.default = 'B';

		var step = {cells:{}};

		var arg = new Arg(cell, step, 1);
		expect(arg.value).to.equal('B');
	});

	it('should not be missing with a default', function(){
		var cell = new Cell('foo');
		cell.default = 'B';

		var step = {cells:{}};

		var arg = new Arg(cell, step, 1);

		expect(arg.isMissing()).to.be.false;
	});

	it('should not be missing with a value', function(){
		var cell = new Cell('foo');

		var step = {cells:{foo: 'A'}};

		var arg = new Arg(cell, step, 1);

		expect(arg.isMissing()).to.be.false;
	});

	it('should be missing with neither a value or default', function(){
		var cell = new Cell('foo');

		var step = {cells:{}};

		var arg = new Arg(cell, step, 1);

		expect(arg.isMissing()).to.be.true;
	});

	it('should store its value back into persisted data', function(){
		var cell = new Cell('foo');

		var step = {cells:{foo: 'A'}};

		var arg = new Arg(cell, step, 1);
		arg.value = 'C';

		var data = {};
		arg.store(data);

		expect(data.cells.foo).to.equal('C');
	});


	var StubLoader = require('./stub-loader');
	describe('writing the results', function(){
		var cell = new Cell('foo');
		var step = {cells:{foo: 'A'}};
		var loader = new StubLoader();
		var arg = null;

		beforeEach(function(){
			arg = new Arg(cell, step, 1);
		});

		it('just writes a cell for no result', function(){
			expect(arg.buildResults(loader)).to.deep.equal({
				type: 'cell',
				props: {cell: arg.cell, value: arg.value}
			});
		});

		it('just writes a cell if the result is ok', function(){
			arg.result = {status: 'ok'};

			expect(arg.buildResults(loader)).to.deep.equal({
				type: 'cell',
				props: {cell: arg.cell, value: arg.value}
			});
		});

		it('writes a success result', function(){
			arg.result = {status: 'success'};

			expect(arg.buildResults(loader)).to.deep.equal({
				type: 'successCell',
				props: {cell: arg.cell, value: arg.value}
			});
		});

		it('writes an error cell', function(){
			arg.result = {status: 'error', error: 'Terrible!'};

			expect(arg.buildResults(loader)).to.deep.equal({
				type: 'errorCell',
				props: {cell: arg.cell, value: arg.value, error: 'Terrible!'}
			});
		});

		it('writes a missing cell', function(){
			arg.result = {status: 'missing'};

			expect(arg.buildResults(loader)).to.deep.equal({
				type: 'missingCell',
				props: {}
			});
		});

		it('writes a failed cell', function(){
			arg.result = {status: 'failed', actual: 'different'};

			expect(arg.buildResults(loader)).to.deep.equal({
				type: 'failedCell',
				props: {cell: arg.cell, value: arg.value, actual: 'different'}
			});
		});

		it('writes an invalid cell', function(){
			arg.result = {status: 'invalid', error: 'Terrible!'};

			expect(arg.buildResults(loader)).to.deep.equal({
				type: 'errorCell',
				props: {cell: arg.cell, value: arg.value, error: 'Terrible!'}
			});
		});
	});

});