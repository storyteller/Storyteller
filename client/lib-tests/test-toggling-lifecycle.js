var expect = require('chai').expect;
var ObjectMother = require('./object-mother');
var changes = require('./../lib/model/change-commands');

describe('Toggling a Specification Lifecycle', () => {
	it('can change from Acceptance to Regression', () => {
		var spec = ObjectMother.specification();

		var toggle = changes.toggleLifecycle();

		expect(spec.lifecycle).to.equal('Acceptance');
		toggle.apply(spec);

		expect(spec.lifecycle).to.equal('Regression');
	});

	it('can unapply starting from Acceptance', () => {
		var spec = ObjectMother.specification();

		var toggle = changes.toggleLifecycle();

		expect(spec.lifecycle).to.equal('Acceptance');
		toggle.apply(spec);
		toggle.unapply(spec);

		expect(spec.lifecycle).to.equal('Acceptance');
	});

	it('can change from Regression to Acceptance', () => {
		var spec = ObjectMother.specification();
		spec.lifecycle = 'Regression';

		var toggle = changes.toggleLifecycle();

		
		toggle.apply(spec);

		expect(spec.lifecycle).to.equal('Acceptance');
	});

	it('can unapply starting from Acceptance', () => {
		var spec = ObjectMother.specification();
		spec.lifecycle = 'Regression';

		var toggle = changes.toggleLifecycle();

		toggle.apply(spec);
		toggle.unapply(spec);

		expect(spec.lifecycle).to.equal('Regression');
	});
});