var expect = require('chai').expect;

var QueueState = require('./../lib/stores/queue-state');

describe('The QueueState', () => {
	beforeEach(() => QueueState.clear());

	it('statusFor is always none in the initial state', () => {
		expect(QueueState.stateFor('foo')).to.equal('none');
		expect(QueueState.stateFor('bar')).to.equal('none');
		expect(QueueState.stateFor('baz')).to.equal('none');
	});

	it('derive the state for running spec', () => {
		QueueState.store({running: 'bar'});

		expect(QueueState.stateFor('bar')).to.equal('running');

		expect(QueueState.stateFor('foo')).to.equal('none');
	});

	it('can determine that a spec is queued', () => {
		QueueState.store({queued: ['bar', 'baz']});

		expect(QueueState.stateFor('bar')).to.equal('queued');
		expect(QueueState.stateFor('baz')).to.equal('queued');
		expect(QueueState.stateFor('foo')).to.equal('none');
	});

	it('knows when there are no changes in queued specs', () => {
		QueueState.store({queued: ['bar', 'baz']});

		//expect(QueueState.store({queued: ['bar', 'baz']})).to.be.false;
		expect(QueueState.store({queued: ['baz', 'bar']})).to.be.false;
	});

	it('knows there are no changes to the running spec', () => {
		QueueState.store({queued: [], running: 'bar'});
		expect(QueueState.store({queued: [], running: 'bar'})).to.be.false;
	});

	it('knows there are changes when the running spec changes', () => {
		QueueState.store({queued: [], running: 'baz'});
		expect(QueueState.store({queued: [], running: 'bar'})).to.be.true;
	});

	it('knows there are changes when the running spec changes 2', () => {
		QueueState.store({queued: [], running: null});
		expect(QueueState.store({queued: [], running: 'bar'})).to.be.true;
	});

	it('knows there are changes when the running spec changes 3', () => {
		QueueState.store({queued: [], running: 'baz'});
		expect(QueueState.store({queued: [], running: null})).to.be.true;
	});

	it('knows when there are changes to the queued specs', () => {
		QueueState.store({queued: ['bar', 'baz']});

		expect(QueueState.store({queued: ['bar', 'baz', 'foo']})).to.be.true;
	});


	it('knows when there are changes to the queued specs', () => {
		QueueState.store({queued: ['bar', 'baz', 'wrong']});

		expect(QueueState.store({queued: ['bar', 'baz', 'foo']})).to.be.true;
	});
});