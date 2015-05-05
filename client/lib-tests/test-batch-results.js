var expect = require('chai').expect;
var BatchResults = require('./../lib/batch-results');
var BatchData = require('./../batch-result-data');


describe('The Batch Results data structure', function(){
	var results = new BatchResults(BatchData);

	it('counts the successful specs', function(){
		expect(results.succeeded).to.equal(5);
	});

	it('counts the failed specs', function(){
		expect(results.failed).to.equal(19);
	});

	it('counts the acceptance specs', function(){
		expect(results.acceptance.total).to.equal(21);
	});

	it('counts the regression specs', function(){
		expect(results.regression.total).to.equal(3);
	});

	it('can get a specification with result data', function(){
		var spec = results.specFor('embeds');

		expect(spec.results.performance).to.not.be.null;
	});

	it('can get a spec header with counts', function(){
		var header = results.headerFor('embeds');
		expect(header.status()).to.equal('failed');
	});

	it('can filter for anything', function(){
		expect(results.filter('any', 'all').length).to.equal(24);
	});

	it('can filter by lifecycle', function(){
		expect(results.filter('acceptance', 'all').length).to.equal(21);
		expect(results.filter('regression', 'all').length).to.equal(3);
	});

	it('can filter by status', function(){
		expect(results.filter('any', 'failed').length).to.equal(19);
		expect(results.filter('any', 'success').length).to.equal(5);
	});
});