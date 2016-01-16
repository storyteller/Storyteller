var expect = require('chai').expect;
var IntegrationDriver = require('./spec-editor-harness');
var AllSpecData = require('./../all-spec-data');
var _ = require('lodash');
var $ = require('jquery');

var driver = null;

function openResultsTo(id){
	driver = new IntegrationDriver(AllSpecData.fixtures, 'results', AllSpecData.results[id]);
	driver.loadSpecData(AllSpecData.specs[id]);
}
/*
describe('Table Results Display', () => {
	before(() => {
		openResultsTo('table4');
	});

	it('can show an error that happens before the rest of the table', () => {
		var table = $('#before', driver.div);

		var row = $('.error-row', table);

		expect(row.length).to.equal(1);
		expect(row.html()).to.contain('The method or operation is not implemented');
	});

	it('can show an error that happens at the end of a table', () => {
		var table = $('#after', driver.div);

		var row = $('.error-row', table);

		expect(row.length).to.equal(1);
		expect(row.html()).to.contain('The method or operation is not implemented');
	});
});
*/