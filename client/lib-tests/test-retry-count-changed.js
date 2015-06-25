var expect = require('chai').expect;
var changes = require('./../lib/model/change-commands');

describe('RetryCountChanged', () => {
	it('can apply itself', () => {
		var retryChanged = changes.changeRetryCount(4);
		var spec = {};

		retryChanged.apply(spec);

		expect(spec['max-retries']).to.equal(4);
	});

	it('can undo', () => {
		var retryChanged = changes.changeRetryCount(4);
		var spec = {};
		spec['max-retries'] = 3;

		retryChanged.apply(spec);
		retryChanged.unapply(spec);

		expect(spec['max-retries']).to.equal(3);
	});
});
