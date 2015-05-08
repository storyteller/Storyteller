var Specification = require('./../lib/specification');
var expect = require('chai').expect;
var FixtureLibrary = require('./../lib/fixture-library');
var AllSpecData = require('./../all-spec-data');
var _ = require('lodash');


describe('Specification reading results', function(){
	var library = new FixtureLibrary(AllSpecData.fixtures);
	var specData = AllSpecData.specs.embeds;

	var specification = new Specification(specData, library);

	var completed = AllSpecData.results.embeds;

	expect(completed.type).to.equal('spec-execution-completed');

	specification.results = {
		performance: 'weird',
		logging: 'wrong'
	}

	specification.readResults(completed.results);

	it('captures the logging', function(){
		expect(specification.results.logging).to.equal(completed.results.logging);
	});

	it('captures the performance', function(){
		expect(specification.results.performance).to.equal(completed.results.performance);
	});

	it('captures the step results - spot check', function(){
		var step = specification.find('errors');

		expect(step).to.not.be.null;

		expect(step.results.before.status).to.equal('error');
	});
});