var expect = require('chai').expect;
var Section = require('./../lib/section');
var Fixture = require('./../lib/fixture');
var Sentence = require('./../lib/sentence');
var Step = require('./../lib/step');
var _ = require('lodash');
var FixtureLibrary = require('./../lib/fixture-library');

describe('Section', function(){
	var fixtureData = require('./math-fixture-data');
	var fixture = new Fixture(fixtureData);

	var data = {
		id: 1,
		type: 'section',
		key: 'Math', 
		activeCells: ['a', 'b', 'c'],
		steps: [
			{key: 'StartWith', cells: {x: 1}},
			{key: 'Add', cells: {x: 5}},
			{key: 'Subtract', cells: {x: 2}},
			{key: 'TheResultShouldBe', cells: {x: 4}},
			{key: 'Adding', cells:{x:1, y:2, result:3}}
		]
	}

	var section = new Section(data, new Fixture(fixtureData));


	it('section is always a holder', function(){
		expect(section.isHolder()).to.be.true;
	});

	it('copies the activeCells from the raw data', () => {
		expect(section.activeCells).to.deep.equal(['a', 'b', 'c']);
	});

	it('can write for persistence', function(){
		var data = section.write();

		expect(data.key).to.equal(section.key);
		expect(data.hasOwnProperty('id')).to.be.true;
		expect(data.type).to.equal('section');

		expect(data.activeCells).to.deep.equal(['a', 'b', 'c']);

		expect(data.steps.length).to.equal(5);
	});


	it('should connect the grammar to each child step', function(){
		expect(section.steps[0].grammar.key).to.equal('StartWith');
		expect(section.steps[4].grammar.key).to.equal('Adding');
	});

	it('can return all the possible grammars that could be used within it', function(){
		var grammars = section.grammars().map(function(x){
			return x.key;
		});

		expect(grammars).to.deep.equal(['Add', 'Adding', 'Tabulating', 'StartWith', 'Subtract', 'TheResultShouldBe']);

	});

	it('uses the persisted id if it exists', function(){
		expect(section.id).to.equal(1);
	});

	it('assigns an id if one is not in the data', function(){
		var section = new Section({type: 'section', key: 'Math', steps: []}, fixture);

		expect(section.id).to.not.be.null;
	});

	it('should make itself the parent of all children', function(){
		expect(section.steps[0].parent).to.equal(section);
		expect(section.steps[1].parent).to.equal(section);
		expect(section.steps[2].parent).to.equal(section);
		expect(section.steps[3].parent).to.equal(section);
		expect(section.steps[4].parent).to.equal(section);
	});

	it('should be able to build a simple sentence step for the data', function(){
		expect(section.steps[0] instanceof Step).to.be.true;
		expect(section.steps[1] instanceof Step).to.be.true;
		expect(section.steps[2] instanceof Step).to.be.true;
		expect(section.steps[3] instanceof Step).to.be.true;
		expect(section.steps[4] instanceof Step).to.be.true;

		// these mechanics are tested through Sentence
		expect(section.steps[0].findValue('x')).to.equal(1);
		expect(section.steps[1].findValue('x')).to.equal(5);
	});

	it('can return the immediate children', function(){
		var descendents = section.children();

		expect(_.contains(descendents, section.steps[0])).to.be.true;
		expect(_.contains(descendents, section.steps[1])).to.be.true;
		expect(_.contains(descendents, section.steps[2])).to.be.true;
		expect(_.contains(descendents, section.steps[3])).to.be.true;
		expect(_.contains(descendents, section.steps[4])).to.be.true;
	});
});

describe('Section storing and clearing results', function(){
	var fixtureData = require('./math-fixture-data');
	var fixture = new Fixture(fixtureData);
	var section = null;
	var result1 = {type: 'step-result', position: 'setup', error: 'bad!', status: 'error'};
	var result2 = {type: 'step-result', position: 'teardown', error: 'bad!', status: 'error'};

	var result3 = {
		type: 'set-verification-result',
		matches: ['1', '2'],
		missing: ['3', '4', '5'],
		extras: [{}, {}],
		wrongOrdered: [{}, {}]
	}

	var data = {
		id: 1,
		type: 'section',
		key: 'Math', 
		steps: [
			{id: '1', key: 'StartWith', cells: {x: 1}},
			{id: '2', key: 'Add', cells: {x: 5}},
			{id: '3', key: 'Subtract', cells: {x: 2}},
			{id: '4', key: 'TheResultShouldBe', cells: {x: 4}},
			{id: '5', key: 'Adding', cells:{x:1, y:2, result:3}}
		]
	}

	beforeEach(function(){
		section = new Section(data, new Fixture(fixtureData));
		section.logResult(result1);
		section.logResult(result2);
		section.logResult(result3); 
	});


	it('can get all errors', function(){
		section = new Section({steps:[]}, new Fixture(fixtureData));

		section.logResult({type: 'step-result', status: 'error', error: 'bad', position: 'a'});
		section.logResult({type: 'step-result', status: 'error', error: 'worse', position: 'b'});

		expect(section.allErrors()).to.deep.equal(['bad', 'worse']);
	});


	it('logs a step-result by position', function(){
		expect(section.results.setup).to.equal(result1);
		expect(section.results.teardown).to.equal(result2);
	});

	it('applies the matching to each step', function(){
		expect(section.steps[0].getStatus()).to.equal('success');
		expect(section.steps[1].getStatus()).to.equal('success');
	});

	it('applies the missing to each step', function(){
		expect(section.steps[2].getStatus()).to.equal('missing');
		expect(section.steps[3].getStatus()).to.equal('missing');
		expect(section.steps[4].getStatus()).to.equal('missing');
	});

	it('stores the wrong orders', function(){
		expect(section.results.wrongOrders).to.equal(result3.wrongOrdered);
	});

	it('stores the extras', function(){
		expect(section.results.extras).to.equal(result3.extras);
	});

	it('clearResults removes the positional results', function(){
		section.clearResults();
		expect(section.results).to.deep.equal({});
	});

	it('clearResults removes the status from steps', function(){
		section.clearResults();

		expect(section.steps[0].getStatus()).to.equal('none');
		expect(section.steps[1].getStatus()).to.equal('none');
		expect(section.steps[2].getStatus()).to.equal('none');
		expect(section.steps[3].getStatus()).to.equal('none');
		expect(section.steps[4].getStatus()).to.equal('none');
	});

	var StubLoader = require('./stub-loader');
	describe('writing setup error in results', function(){
		var section = null;
		var loader = new StubLoader();
		var result1 = {};
		var results2 = [{}, {}];

		beforeEach(function(){
			
			var fixtureData = require('./math-fixture-data');
			section = new Section({id: 1, key: 'Math', steps: []}, new Fixture(fixtureData));

			section.steps.push({
				buildResults: function(){
					return result1;
				}
			});

			section.steps.push({
				buildResults: function(){
					return results2;
				}
			});

		});

		it('should delegate to all its children', function(){
			var results = section.buildResults(loader);

			expect(results.props.components).to.deep.equal([result1, results2[0], results2[1]]);
		});

		it('should write an error for setup at the beginning', function(){
			// no setup result
			expect(section.buildResults(loader).props.components.length).to.equal(3);

			section.logResult({type: 'step-result', position:'setup', error: 'bad!'});

			var results = section.buildResults(loader).props.components;

			expect(results.length).to.equal(4);
			expect(results[0]).to.deep.equal({
				type: 'errorBox',
				props: {
					title: 'SetUp Error',
					error: 'bad!'
				}
			});
		});


		it('should write an error for before at the beginning', function(){
			// no setup result
			expect(section.buildResults(loader).props.components.length).to.equal(3);

			section.logResult({type: 'step-result', position:'before', error: 'bad!'});

			var results = section.buildResults(loader).props.components;

			expect(results.length).to.equal(4);
			expect(results[0]).to.deep.equal({
				type: 'errorBox',
				props: {
					title: 'Error before the Section',
					error: 'bad!'
				}
			});
		});

		it('should write an error for teardown at the end', function(){
			// no teardown result
			expect(section.buildResults(loader).props.components.length).to.equal(3);

			section.logResult({type: 'step-result', position:'teardown', error: 'bad!'});

			var results = section.buildResults(loader).props.components;

			expect(results.length).to.equal(4);
			expect(results[3]).to.deep.equal({
				type: 'errorBox',
				props: {
					title: 'TearDown Error',
					error: 'bad!'
				}
			});
		});


	});
});