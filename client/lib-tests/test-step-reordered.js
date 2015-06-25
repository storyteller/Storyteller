var expect = require('chai').expect;
var ObjectMother = require('./object-mother');
var changes = require('./../lib/model/change-commands');
var StepHolder = require('./../lib/model/step-holder');
var Specification = require('./../lib/model/specification');

describe('Reordering Steps', function(){
	var step1 = {};
	var step2 = {};
	var step3 = {};

	var holder = null;
	var spec = null;

	beforeEach(() => {
		holder = new StepHolder(null, {});
		spec = new Specification({}, {});

		holder.addStep(step1);
		holder.addStep(step2);
		holder.addStep(step3);
	});

	it('can move the top step down', function(){
		var moveDown = changes.moveDown(holder, step1);
		moveDown.apply(spec);

		expect(holder.steps[1]).to.equal(step1);
		expect(holder.steps[0]).to.equal(step2);

		moveDown.unapply(spec);
		expect(holder.steps[0]).to.equal(step1);
		expect(holder.steps[1]).to.equal(step2);
	});

	it('can move a step up', function(){
		var moveUp = changes.moveUp(holder, step2);
		moveUp.apply(spec);

		expect(holder.steps[1]).to.equal(step1);
		expect(holder.steps[0]).to.equal(step2);

		moveUp.unapply(spec);
		expect(holder.steps[0]).to.equal(step1);
		expect(holder.steps[1]).to.equal(step2);
	});
});