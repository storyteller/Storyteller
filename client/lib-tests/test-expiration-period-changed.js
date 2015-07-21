const {expect} = require('chai');
const changes = require('./../lib/model/change-commands');

describe('ExpirationPeriodChanged', () => {
	it('can apply itself', () => {
		let expirationChanged = changes.changeExpirationPeriod(4);
		let spec = {};

		expirationChanged.apply(spec);

		expect(spec['expiration-period']).to.equal(4);
	});

	it('can undo', () => {
		let expirationChanged = changes.changeExpirationPeriod(4);
		let spec = {};
		spec['expiration-period'] = 3;

		expirationChanged.apply(spec);
		expirationChanged.unapply(spec);

		expect(spec['expiration-period']).to.equal(3);
	});
});
