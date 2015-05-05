var expect = require('chai').expect;

var QueueState = require('./../lib/specs/queue-state');

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
});