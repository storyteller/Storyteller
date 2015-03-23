var Counts = require('./../lib/specs/counts');
var expect = require('chai').expect;

describe('Counts', function(){
	it('succeeds with no failures of any kind', function(){
		expect(new Counts(3, 0, 0, 0).success()).to.be.true;
	});

	it('fails with one or more failures', function(){
		expect(new Counts(3, 1, 0, 0).success()).to.be.false;
	});

	it('fails with one or more errors', function(){
		expect(new Counts(3, 0, 1, 0).success()).to.be.false;
	});

	it('fails with one or more invalids', function(){
		expect(new Counts(3, 0, 0, 1).success()).to.be.false;
	});

	it('has not results with all zeros', function(){
		expect(new Counts(0, 0, 0, 0).anyResults()).to.be.false;
	});

	it('has results with any value', function(){
		expect(new Counts(1, 0, 0, 0).anyResults()).to.be.true;
		expect(new Counts(0, 1, 0, 0).anyResults()).to.be.true;
		expect(new Counts(0, 0, 1, 0).anyResults()).to.be.true;
		expect(new Counts(0, 0, 0, 1).anyResults()).to.be.true;
	});
});