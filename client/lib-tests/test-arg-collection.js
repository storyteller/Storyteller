var expect = require('chai').expect;

var Cell = require('./../lib/cell');
var Arg = require('./../lib/arg');
var ArgCollection = require('./../lib/arg-collection');


describe('ArgCollection', function(){
	var args = null;

	beforeEach(function(){
		var cells = [new Cell('A'), new Cell('B'), new Cell('C')];
		var data = {cells: {
			A: 1,
			B: 2,
			C: 3
		}};

		args = new ArgCollection(cells, data, 1);
	});

	it('can build itself with data and grammar', function(){
		expect(args.length).to.equal(3);

		expect(args.find('A').value).to.equal(1);
		expect(args.find('B').value).to.equal(2);
		expect(args.find('C').value).to.equal(3);
	});

	it('can return all keys', function(){
		expect(args.allKeys()).to.deep.equal(['A', 'B', 'C']);
	});

});