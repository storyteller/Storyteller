var expect = require('chai').expect;
var Table = require('./../lib/grammars/table');
var _ = require('lodash');

describe('Table Grammar and Active Cells', () => {
	var metadata = {
		type: 'table',
		key: 'AddTable',
		title: 'Adding some numbers',
		collection: 'steps',
		cells: [
			{key: 'u', title: 'Operand 1', description: 'The first operand for addition'},
			{key: 'v', title: 'Operand 2', description: 'The first operand for addition'},
			{key: 'x', default: 1, title: 'Operand 3', description: 'The first operand for addition'},
			{key: 'y', default: 2, title: 'Operand 4', description: 'The second operand for addition'},
			{key: 'z', default: 3, header: 'Zorro', title: 'Operand 5', description: 'The expected result'},
		]
	};

	var table = null;
	var section = null;

	beforeEach(function(){
		table = new Table(metadata);
		var step = table.newStep();
		section = table.readSection(step);
	});

	it('all optional columns are active in a brand new step', () => {
		var optionals = table.optionalCells(section);

		expect(optionals).to.deep.equal([
			{cell: 'x', header: 'x', active: true},
			{cell: 'y', header: 'y', active: true},
			{cell: 'z', header: 'Zorro', active: true}
		]);
	});

	it('get optional columns with some cells turned off', () => {
		section.activeCells.x = false;
		section.activeCells.z = false;

		var optionals = table.optionalCells(section);

		expect(optionals).to.deep.equal([
			{cell: 'x', header: 'x', active: false},
			{cell: 'y', header: 'y', active: true},
			{cell: 'z', header: 'Zorro', active: false}
		]);
	});
});