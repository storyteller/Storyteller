var expect = require('chai').expect;
var ResultCache = require('./../lib/specs/result-cache');

describe('ResultCache', () => {
	beforeEach(() => ResultCache.clear());

	it('knows if a spec has a result', () => {
		expect(ResultCache.hasResults('foo')).to.be.false;

		ResultCache.record({id: 'foo'});

		expect(ResultCache.hasResults('foo')).to.be.true;
	});

	it('returns null for last results if there are none', () => {
		expect(ResultCache.lastResultFor('foo')).to.be.null;
	});

	it('can fetch the last results with a valid counts object', () => {
		ResultCache.record({id: 'foo', counts: {rights: 1, wrongs: 0, errors: 0, invalids: 0}});

		var last = ResultCache.lastResultFor('foo');

		expect(last.counts.success()).to.be.true;
	});

	it('can return the very last result for a spec', () => {
		var result1 = {id: 'foo'};
		var result2 = {id: 'bar'};
		var result3 = {id: 'foo'};
		var result4 = {id: 'bar'};
		var result5 = {id: 'foo'};

		ResultCache.record(result1);
		ResultCache.record(result2);
		ResultCache.record(result3);
		ResultCache.record(result4);
		ResultCache.record(result5);

		expect(ResultCache.lastResultFor('foo')).to.equal(result5);
		expect(ResultCache.lastResultFor('bar')).to.equal(result4);
	});

	it('can return an empty array if there are no results', () => {
		expect(ResultCache.resultsFor('foo')).to.deep.equal([]);
	});

	it('can return all the recorded results for a spec', () => {
		var result1 = {id: 'foo'};
		var result2 = {id: 'bar'};
		var result3 = {id: 'foo'};
		var result4 = {id: 'bar'};
		var result5 = {id: 'foo'};

		ResultCache.record(result1);
		ResultCache.record(result2);
		ResultCache.record(result3);
		ResultCache.record(result4);
		ResultCache.record(result5);

		expect(ResultCache.resultsFor('foo')).to.deep.equal([result5, result3, result1]);
		expect(ResultCache.resultsFor('bar')).to.deep.equal([result4, result2]);
	});
});