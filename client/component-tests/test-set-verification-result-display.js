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

function forRow(id){
	var row = $('#' + id, driver.div);
	return {
		header: $('.set-row-status', row).html().toString(),
		class: row.get(0).className
	}
}

describe('SetVerification Results Display Normal Mode', function(){
	before(() => {
		openResultsTo('set1');
	});

	it('can display matched rows', () => {
		// See the file Ordered Set.xml in the sample project for the input data

		expect(forRow('2')).to.deep.equal({header: 'Matched', class: 'success'});
		expect(forRow('3')).to.deep.equal({header: 'Matched', class: 'success'});
		expect(forRow('4')).to.deep.equal({header: 'Matched', class: 'success'});

	});

	it('can display missing rows', () => {
		expect(forRow('11')).to.deep.equal({header: 'Missing', class: 'danger'});
	});

	it('can show an extra row', () => {
		var table = $('#9', driver.div);
		expect(table.length).to.equal(1);

		var row = $('.extra-row', table);

		expect(row.length).to.equal(1);
	});



});

describe('SetVerification Results Display when the Fetch Fails', () => {
	it('can show an error for a set that could not be fetched', () => {
		openResultsTo('set3');

		var errorRow = $('tr.error-row', driver.div);
		expect(errorRow.length).to.equal(1);

		expect($('pre', errorRow).html().toString()).to.be.contain('System.NotImplementedException');
	});
});

