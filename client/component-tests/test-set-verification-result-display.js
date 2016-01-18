var expect = require('chai').expect;
var ComponentHarness = require('./component-harness');
var _ = require('lodash');
var $ = require('jquery');




describe('SetVerification Results Display Normal Mode', function(){

    var harness;

    function forRow(id){
        var row = harness.$('#' + id);
        if (!row || row.length == 0) throw new Error('did not find row ' + id);
        return {
            header: $('.set-row-status span.set-row-header', row).html(),
            class: row.attr('class')
        }
    }
    
    function assertRowProps(id, header, className){
        var row = forRow(id);
        expect(row.header).to.equal(header);
        expect(row.class).to.equal(className);
    }
    
	beforeEach(() => {
        harness = new ComponentHarness();
        harness.openResults('set1');
	});

	it('can display matched rows', () => {
		// See the file Ordered Set.xml in the sample project for the input data

        assertRowProps('2', 'Matched', 'success');
        assertRowProps('3', 'Matched', 'success');
        assertRowProps('4', 'Matched', 'success');

	});

	it('can display missing rows', () => {
        assertRowProps('11', 'Missing', 'danger');
        
	});

	it('can show an extra row', () => {
		var table = harness.$('#9');
		expect(table.length).to.equal(1);

		var row = $('.extra-row', table);

		expect(row.length).to.equal(1);
	});



});


describe('SetVerification Results Display when the Fetch Fails', () => {
    var harness;

    function forRow(id){
        var row = harness.$('#' + id);
        if (!row || row.length == 0) throw new Error('did not find row ' + id);
        return {
            header: $('.set-row-status span.set-row-header', row).html(),
            class: row.attr('class')
        }
    }
    
    function assertRowProps(id, header, className){
        var row = forRow(id);
        expect(row.header).to.equal(header);
        expect(row.class).to.equal(className);
    }
    
	beforeEach(() => {
        harness = new ComponentHarness();
        harness.openResults('set3');
	});
    
    it('can show an error for a set that could not be fetched', () => {
		var errorRow = harness.$('tr.error-row');
		expect(errorRow.length).to.equal(1);

		expect($('pre', errorRow).html().toString()).to.be.contain('System.NotImplementedException');
	});
});



