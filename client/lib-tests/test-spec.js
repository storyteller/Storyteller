var expect = require('chai').expect;
var Spec = require('./../lib/model/specification');
var Counts = require('./../lib/model/counts');
var QueueState = require('./../lib/stores/queue-state');
var ResultCache = require('./../lib/stores/result-cache');

// Some of the logic in spec.js is just tested within
// the spec explorer work
describe('Spec node logic', function(){
	var spec = null;

	beforeEach(function(){
		QueueState.clear();
		ResultCache.clear();
		spec = new Spec({id: 'Foo', name: 'The Foo'});
	});

	it('mode is full by default', () => {
		expect(spec.mode).to.equal('full');
	});

	it('reads the mode off the data', () => {
		var s = new Spec({id: 'Foo', title: 'the foo', mode: 'header'});
		expect(s.mode).to.equal('header');
	});

	it('status is none', function(){
		expect(spec.status()).to.equal('none');
	});

	it('status is failed', function(){
		ResultCache.record({id: spec.id, counts: {rights: 0, wrongs: 1, errors: 0, invalids: 0}});

		expect(spec.status()).to.equal('failed');
	});

	it('status is success', function(){
		ResultCache.record({id: spec.id, counts: {rights: 1, wrongs: 0, errors: 0, invalids: 0}});

		expect(spec.status()).to.equal('success');
	});

	it('select icon when not running and no results', function(){
		expect(spec.icon()).to.equal('none');
	});

	it('select icon when running but with no results', function(){
		QueueState.markRunning(spec.id);

		expect(spec.icon()).to.equal('running');
	});

	it('select icon when not running and having succeeded', function(){
		ResultCache.record({id: spec.id, counts: {rights: 1, wrongs: 0, errors: 0, invalids: 0}});


		expect(spec.icon()).to.equal('success');
	});

	it('select icon when not running and having failed', function(){
		ResultCache.record({id: spec.id, counts: {rights: 1, wrongs: 1, errors: 0, invalids: 0}});

		expect(spec.icon()).to.equal('failed');
	});

	it('select icon when running with currently successful results', function(){
		QueueState.markRunning(spec.id, new Counts({rights: 1, wrongs: 0, errors: 0, invalids: 0}));
		ResultCache.record({id: spec.id, counts: {rights: 1, wrongs: 0, errors: 0, invalids: 0}});

		expect(spec.icon()).to.equal('running-success');
	});

	it('select icon when running with currently failed results', function(){
		QueueState.markRunning(spec.id, new Counts({rights: 0, wrongs: 1, errors: 0, invalids: 0}));
		ResultCache.record({id: spec.id, counts: {rights: 1, wrongs: 1, errors: 0, invalids: 0}});

		expect(spec.icon()).to.equal('running-failed');
	});	
});