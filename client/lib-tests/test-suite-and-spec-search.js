var expect = require('chai').expect;

var Hierarchy = require('./../lib/stores/hierarchy');
var Search = require('./../lib/presentation/search');
var Postal = require('postal');
var AllSpecData = require('./../all-spec-data');
var _ = require('lodash');

describe('The Spec and Suite Lookup Search', function(){
    // TODO -- put this back in, but running against the data store.
    return;
    
    
	beforeEach(() => {
		Postal.reset();
		Hierarchy.reset();

		Postal.publish({
			channel: 'engine',
			topic: 'hierarchy-loaded',
			data: {hierarchy: AllSpecData.hierarchy}
		});
	});

	it('can find suites', () => {
		var matches = Search.findMatches('Sentence');

		var index = _.findIndex(matches, x => x.title == 'Suite: Sentences');
		expect(index >= 0).to.be.true;
	});

	it('can find specs', () => {
		var matches = Search.findMatches('fact');

		var index = _.findIndex(matches, x => x.title == 'Spec: Facts');
		expect(index >= 0).to.be.true;
	});
});