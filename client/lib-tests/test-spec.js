var expect = require('chai').expect;
var Spec = require('./../lib/specs/spec');
var Counts = require('./../lib/specs/counts');
var QueueState = require('./../lib/specs/queue-state');
var ResultCache = require('./../lib/specs/result-cache');

// Some of the logic in spec.js is just tested within
// the spec explorer work
describe('Spec node logic', function(){
	var spec = null;

	beforeEach(function(){
		QueueState.clear();
		ResultCache.clear();
		spec = new Spec({id: 'Foo', name: 'The Foo'});
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