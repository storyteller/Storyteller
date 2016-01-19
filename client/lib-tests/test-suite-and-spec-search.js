var expect = require('chai').expect;
var Search = require('./../lib/presentation/search');
var Postal = require('postal');
var reducer = require('./../lib/state/reducer');
var { createStore } = require('redux');
var initial = require('./../initialization');
var _ = require('lodash');

describe('The Spec and Suite Lookup Search', function(){

    var store;
   
    beforeEach(() => {
        store = createStore(reducer);
        store.dispatch(initial);
    });

	it('can find suites', () => {
		var matches = Search.findMatches(store.getState(), 'Sentence');

		var index = _.findIndex(matches, x => x.title == 'Suite: Sentences');
		expect(index >= 0).to.be.true;
	});

	it('can find specs', () => {
		var matches = Search.findMatches(store.getState(), 'fact');

		var index = _.findIndex(matches, x => x.title == 'Spec: Facts');
		expect(index >= 0).to.be.true;
	});
});