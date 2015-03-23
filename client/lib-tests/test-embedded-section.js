var expect = require('chai').expect;
var Sentence = require('./../lib/sentence');
var Step = require('./../lib/step');
var EmbeddedSection = require('./../lib/embedded-section');
var Fixture = require('./../lib/fixture');

describe('EmbeddedSection', function(){
	var metadata = {
		type: 'embedded-section',
		key: 'DoMath',
		title: 'Doing some mathematics',
		fixture: require('./math-fixture-data'),
		collection: 'steps'
	};



	var grammar = new EmbeddedSection(metadata);
	
	it('uses steps as the default collection', function(){
		var grammar = new EmbeddedSection({
			type: 'embedded-section',
			key: 'DoMath',
			title: 'Doing some mathematics',
			fixture: require('./math-fixture-data')
			//collection: 'steps'

		});

		expect(grammar.collection).to.equal('steps');
	});

	it('uses the internal fixture title for the title if none is specified', function(){
		var grammar = new EmbeddedSection({
			type: 'embedded-section',
			key: 'DoMath',
			//title: 'Doing some mathematics',
			fixture: require('./math-fixture-data'),
			collection: 'steps'

		});

		expect(grammar.title).to.equal(grammar.fixture.title);
	});

	it('should capture the key', function(){
		expect(grammar.key).to.equal('DoMath');
	});

	it('should capture the title', function(){
		expect(grammar.title).to.equal('Doing some mathematics');
	});

	it('should capture the embedded fixture', function(){
		expect(grammar.fixture.find('StartWith')).to.not.be.null;
	});

	describe('when building a step from data', function(){
		var stepData = {
			key: 'DoMath', cells: {}, collections: [
				{
					key: 'steps',
					id: 'foo',
					steps: [
						{key: 'StartWith', cells: {x: 1}},
						{key: 'Add', cells: {x: 5}},
						{key: 'Subtract', cells: {x: 2}},
						{key: 'TheResultShouldBe', cells: {x: 4}},
						{key: 'Adding', cells:{x:1, y:2, result:3}}
					]
				}
			]





		};

		var step = grammar.buildStep(stepData);

		it('should read the id in the child section', function(){
			expect(step.collections.steps.id).to.equal('foo');
		});

		it('should set itself as the grammar', function(){
			expect(step.grammar).to.equal(grammar);
		});

		it('should flesh out all the child steps', function(){
			var section = step.collections['steps'];
			var keys = section.steps.map(function(x){
				return x.key;
			});

			expect(keys).to.deep.equal(['StartWith', 'Add', 'Subtract', 'TheResultShouldBe', 'Adding']);
		});
	});

	describe('when building a new step', function(){
		var step = grammar.newStep();

		it('should set itself as the grammar', function(){
			expect(step.grammar).to.equal(grammar);
		});

		it('should have an empty section in the collections', function(){
			expect(step.collections.steps).to.not.be.null;
			expect(step.collections.steps.steps.length).to.equal(0);
			expect(step.collections.steps.fixture).to.equal(grammar.fixture);
		});
	});
});