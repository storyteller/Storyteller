var expect = require('chai').expect;
var changes = require('./../lib/change-commands');
var StepHolder = require('./../lib/step-holder');
var Specification = require('./../lib/specification');

describe('Add Step', function(){
	
	describe('when built with no index', function(){
		var spec = null;
		var holder = null;
		var newStep = null;
		var added = null;

		beforeEach(function(){
			holder = new StepHolder(null, {});
			spec = new Specification({}, {});

			holder.addStep({});
			holder.addStep({});
			holder.addStep({});

			newStep = {id: 11};

			added = changes.stepAdded(holder, newStep);
		});


		it('applies by adding the step last', function(){
			holder.addStep({});
			holder.addStep({});
			holder.addStep({});

			added.apply(spec);

			expect(holder.steps.last()).to.equal(newStep);
		});

		it('should add the new step to the Specification', function(){
			added.apply(spec);
			expect(spec.find(newStep.id)).to.equal(newStep);
		});

		it('unapplies by just removing the step from the parent', function(){
			holder.addStep({});
			holder.addStep({});
			holder.addStep({});

			added.apply(spec);

			expect(holder.steps.contains(newStep)).to.be.true;

			added.unapply(spec);

			expect(holder.steps.contains(newStep)).to.be.false;
		});

		it('should remove the step from the data spec when unapplying', function(){
			added.apply(spec);
			added.unapply(spec);

			expect(spec.find(newStep.id)).to.be.null;
		});
	});

	describe('when built for a specific index', function(){
		var step1 = {};
		var step2 = {};
		var step3 = {};
		var step4 = {};

		var newStep = {};

		var holder = null;
		var added = null;

		var spec = null;

		beforeEach(function(){
			holder = new StepHolder(null, {});
			spec = new Specification({}, {});

			holder.addStep(step1);
			holder.addStep(step2);
			holder.addStep(step3);
			holder.addStep(step4);

			added = changes.stepAdded(holder, newStep, 2);
		});

		it('should add the new step to the SpecificationDataspec', function(){
			added.apply(spec);
			expect(spec.find(newStep.id)).to.equal(newStep);
		});

		it('should be able to insert the step on apply', function(){
			added.apply(spec);

			expect(holder.steps.length).to.equal(5);
			expect(holder.steps[2]).to.equal(newStep);
		});

		it('should be able to remove the step on unapply', function(){
			added.apply(spec);

			expect(holder.steps.contains(newStep)).to.be.true;

			added.unapply(spec);

			expect(holder.steps.contains(newStep)).to.be.false;
		});

		it('should remove the step from the data spec when unapplying', function(){
			added.apply(spec);
			added.unapply(spec);

			expect(spec.find(newStep.id)).to.be.null;
		});

	});

});