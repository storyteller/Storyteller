var expect = require('chai').expect;
var StepHolder = require('../lib/step-holder');

var fixtureData = [require('./math-fixture-data'), require('./zork-fixture-data')];
var FixtureLibrary = require('./../lib/fixture-library');
var library = new FixtureLibrary(fixtureData);
var Comment = require('./../lib/comment');
var Fixture = require('./../lib/fixture');

describe('StepHolder mechanics', function(){
	it('should set the parent on add', function(){
		var step = {};

		var holder = new StepHolder(null, new FixtureLibrary([]));

		holder.addStep(step);

		expect(step.parent).to.equal(holder);
	});

	it('should allow you to remove a step and get the original position', function(){
		var holder = new StepHolder(null, new FixtureLibrary([]));

		var step1 = {};
		var step2 = {};
		var step3 = {};
		var step4 = {};
	
		holder.addStep(step1);
		holder.addStep(step2);
		holder.addStep(step3);
		holder.addStep(step4);

		var position = holder.removeStep(step3);
	
		expect(position).to.equal(2);

		expect(holder.steps.length).to.equal(3);
	});

	it('should allow you to add a step at a position', function(){
		var holder = new StepHolder(null, new FixtureLibrary([]));

		var step1 = {};
		var step2 = {};
		var step3 = {};
		var step4 = {};
	
		holder.addStep(step1);
		holder.addStep(step2);
		holder.addStep(step3);
		holder.addStep(step4);

		var step5 = {};

		holder.insertStep(2, step5);

		expect(step5.parent).to.equal(holder);

		expect(holder.steps[2]).to.equal(step5);
		expect(holder.steps[0]).to.equal(step1);
		expect(holder.steps[4]).to.equal(step4);

	});

	it('can build a comment from data', function(){
		var holder = new StepHolder(null, new FixtureLibrary([]));


		var comment = holder.buildStep({type: 'comment', text: 'Foo!'}, library);

		expect(comment.arg.value).to.equal('Foo!');
		expect(comment instanceof Comment).to.be.true;
	});

	it('can build a section from data', function(){
		var holder = new StepHolder(null, new FixtureLibrary(fixtureData));

		var data = {
			type: 'section',
			key: 'Math', 
			steps: [
				{key: 'StartWith', cells: {x: 1}},
				{key: 'Add', cells: {x: 5}},
				{key: 'Subtract', cells: {x: 2}},
				{key: 'TheResultShouldBe', cells: {x: 4}},
				{key: 'Adding', cells:{x:1, y:2, result:3}}
			]
		};

		var section = holder.buildStep(data);

		expect(section.steps.length).to.equal(5);

		expect(section.steps[4].findValue('x'))
			.to.equal(1);

		expect(section.steps[4].findValue('y'))
			.to.equal(2);

		expect(section.steps[4].findValue('result'))
			.to.equal(3);
	});

	describe('writing and packing step collections', function(){

		function FakeStep(written, packed){
			this.pack = function(){
				return packed;
			}

			this.write = function(){
				return written;
			}

			this.written = written;
			this.packed = packed;
		}

		it('can write all the steps for persistence', function(){
			var holder = new StepHolder(null, new FixtureLibrary([]));

			var step1 = new FakeStep({}, {});
			var step2 = new FakeStep({}, {});
			var step3 = new FakeStep({}, {});
			var step4 = new FakeStep({}, {});
		
			holder.addStep(step1);
			holder.addStep(step2);
			holder.addStep(step3);
			holder.addStep(step4);

			var steps = holder.writeSteps();

			expect(steps).to.deep.equal([step1.written, step2.written, step3.written, step4.written]);
		});


		it('can pack all the steps for execution', function(){
			var holder = new StepHolder(null, new FixtureLibrary([]));

			var step1 = new FakeStep({}, {});
			var step2 = new FakeStep({}, {});
			var step3 = new FakeStep({}, null);
			var step4 = new FakeStep({}, {});
		
			holder.addStep(step1);
			holder.addStep(step2);
			holder.addStep(step3);
			holder.addStep(step4);

			var steps = holder.packSteps();

			// step3 should be ignored
			expect(steps).to.deep.equal([step1.written, step2.written, step4.written]);
		});
	});
});