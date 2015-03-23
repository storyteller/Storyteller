var expect = require('chai').expect;
var Spec = require('./../lib/specs/spec');
var Counts = require('./../lib/specs/counts');

// Some of the logic in spec.js is just tested within
// the spec explorer work
describe('Spec node logic', function(){
	var spec = null;

	beforeEach(function(){
		spec = new Spec({id: 'Foo', name: 'The Foo'});
	});

	it('status is none', function(){
		expect(spec.status()).to.equal('none');
	});

	it('status is failed', function(){
		spec.recordResults({counts: new Counts(0, 1, 0, 0)});

		expect(spec.status()).to.equal('failed');
	});

	it('status is success', function(){
		spec.recordResults({counts: new Counts(1, 0, 0, 0)});

		expect(spec.status()).to.equal('success');
	});

	it('select icon when not running and no results', function(){
		expect(spec.icon()).to.equal('none');
	});

	it('select icon when running but with no results', function(){
		spec.state = 'running';

		expect(spec.icon()).to.equal('running');
	});

	it('select icon when not running and having succeeded', function(){
		spec.recordResults({counts: new Counts(1, 0, 0, 0)});

		expect(spec.icon()).to.equal('success');
	});

	it('select icon when not running and having failed', function(){
		spec.recordResults({counts: new Counts(0, 1, 0, 0)});

		expect(spec.icon()).to.equal('failed');
	});

	it('select icon when running with currently successful results', function(){
		spec.recordRunningResults(new Counts({rights: 1, wrongs: 0, errors: 0, invalids: 0}));
	
		expect(spec.icon()).to.equal('running-success');
	});

	it('select icon when running with currently failed results', function(){
		spec.recordRunningResults(new Counts({rights: 0, wrongs: 1, errors: 0, invalids: 0}));
	
		expect(spec.icon()).to.equal('running-failed');
	});	
});