var expect = require('chai').expect;
var Specification = require('./../lib/model/specification');
var ObjectMother = require('./object-mother');
var changes = require('./../lib/model/change-commands');

describe('Rename a Spec', () => {
	var spec = null;

	beforeEach(() => {
		spec = ObjectMother.specification();
		spec.title = 'Before';
	});

	it('can rename the spec', () => {
		var change = changes.rename('After');
		spec.apply(change);

		expect(spec.title).to.equal('After');
	});

	it('can unapply back to the original value', ()=>{
		var change = changes.rename('After');
		spec.apply(change);
		change.unapply(spec);

		expect(spec.title).to.equal('Before');
	});
});