var expect = require('chai').expect;
var Postal = require('postal');
var Hierarchy = require('./../lib/stores/hierarchy');
var ObjectMother = require('./object-mother');
var _ = require('lodash');
var library = ObjectMother.library();
var specData = ObjectMother.specData();
var Specification = require('./../lib/model/specification');
var FixtureLibrary = require('./../lib/fixtures/fixture-library');

var listener = {
	events: [],

	clear: function(){
		this.events = [];
	},

	append: function(data){
		//console.log(JSON.stringify(data));
		this.events.push(data);
		
	}
};



function findPublishedMessage(topic){
	return _.find(listener.events, function(x){
		return x.topic == topic;
	});
}

function assertMessageWasNotPublished(topic){
	var message = findPublishedMessage(topic);
	expect(message).to.be.undefined;
}

describe('SpecificationStore Functionality of Hierarchy', function(){
	beforeEach(function(){
		Postal.reset();
		Hierarchy.reset();

		listener.clear();

		Postal.subscribe({
		    channel  : "explorer",
		    topic    : "*",
		    callback : function(data, envelope) {
		    	data.topic = envelope.topic;
		        listener.append(data);
		    }
		});

		Postal.subscribe({
		    channel  : "engine-request",
		    topic    : "*",
		    callback : function(data, envelope) {
		    	data.topic = envelope.topic;
		        listener.append(data);
		    }
		});

		Postal.subscribe({
		    channel  : "editor",
		    topic    : "*",
		    callback : function(data, envelope) {
		    	data.topic = envelope.topic;
		    	data.channel = 'editor';
		        listener.append(data);
		    }
		});
	});

	it('hasData negative', function(){
		expect(Hierarchy.hasData('foo')).to.be.false;
	});

	it('can set a new library with no spec data', function(){
		Hierarchy.setLibrary(library);

		expect(Hierarchy.fixtures()).to.equal(library);

		var message = findPublishedMessage('fixtures-loaded');
		expect(message).to.not.be.null;
	});

	it('can request data', function(){
		Hierarchy.requestData('1');

		var message = findPublishedMessage('spec-data-requested');
		expect(message.id).to.equal('1');
	});

	var results = {
		logging: {},
		performance: {},
		results: []
	};

	describe('when responding to spec-data', function(){
		beforeEach(function(){
			Hierarchy.setLibrary(library);
			Postal.publish({
				channel: 'engine',
				topic: 'spec-data',
				data: {
					id: 'spec1',
					data: specData,
					results: results
				}
			});
		});

		it('should now have the data', function(){
			expect(Hierarchy.hasData('spec1')).to.be.true;
		});

		it('can get the data straight out of the store', function(){
			var spec = Hierarchy.findSpec('spec1');
			expect(spec instanceof Specification).to.be.true;
		});

		it('should have broadcasted the spec-changed message', function(){
			var message = findPublishedMessage('spec-changed');
			expect(message.id).to.equal('spec1');
			expect(message.channel).to.equal('editor');
		});



	});



	it('handles the spec-changed message when it does not have the specification', function(){
		Hierarchy.setLibrary(library);
		Postal.publish({
			channel: 'engine',
			topic: 'spec-data',
			data: {
				id: 'spec1',
				data: specData
			}
		});

		Postal.publish({
			channel: 'engine',
			topic: 'spec-changed',
			data: {
				node: {id:'spec2'}
			}
		});

		assertMessageWasNotPublished('spec-data-invalidated');
		expect(Hierarchy.hasData('spec1')).to.be.true;
	});

	describe('storing results for a specification that is already stored', function(){
		var results = null;

		beforeEach(function(){
			Hierarchy.setLibrary(library);
			Hierarchy.storeData('spec1', specData);

			results = {
				results: [],
				logging: [{}, {}, {}],
				performance: [{}, {}]
			};

			Hierarchy.readResults('spec1', results);
		});

		it('should apply the results to the matching spec', function(){
			var spec = Hierarchy.findSpec('spec1');
			expect(spec.results.logging).to.equal(results.logging);
		});

		it('should broadcast a results-available message', function(){
			var message = findPublishedMessage('spec-changed');
			expect(message).to.deep.equal({
				channel: 'editor',
				topic: 'spec-changed',
				id: 'spec1'
			})
		});
	});

	describe('applying results for a spec that it has', function(){
		beforeEach(function(){
			var data = ObjectMother.specData();

			Hierarchy.setLibrary(library);
			Hierarchy.storeData('test-spec', data);
		});


		it('applies the spec-result message', function(){
			var message = {type: 'step-result', status: 'failed', id: 'first-step', spec: 'test-spec'};

			Postal.publish({
				channel: 'engine',
				topic: 'step-result',
				data: message
			});

			var spec = Hierarchy.findSpec('test-spec');
			expect(spec.find(message.id)).to.not.be.null;
			expect(spec).to.not.be.null;
			var step = spec.find(message.id);

			expect(step.results.root).to.equal(message);

			var message = findPublishedMessage('spec-changed');
			expect(message).to.deep.equal({
				channel: 'editor',
				topic: 'spec-changed',
				id: 'test-spec'
			});
		});

		it('applies the set-verification-result message', function(){
			var extras = [{}, {}, {}];

			var message = {
				type: 'set-verification-result',
				matches: [],
				missing: [],
				extras: extras,
				wrongOrders: [],
				id: 'tabulating-section',
				spec: 'test-spec'
			}

			Postal.publish({
				channel: 'engine',
				topic: 'set-verification-result',
				data: message
			});

			var spec = Hierarchy.findSpec('test-spec');
			expect(spec.find(message.id)).to.not.be.null;
			expect(spec).to.not.be.null;
			var section = spec.find(message.id);
			expect(section.results.extras).to.equal(extras);

			var message = findPublishedMessage('spec-changed');
			expect(message).to.deep.equal({
				channel: 'editor',
				topic: 'spec-changed',
				id: 'test-spec'
			});
		});

	});

	describe('when handling a new FixtureLibrary when there is already data in memory', function(){
		var originalSpec;

		beforeEach(function(){
			Hierarchy.setLibrary(library);
			Hierarchy.storeData('spec1', specData);

			originalSpec = Hierarchy.findSpec('spec1');

			Postal.publish({
				channel: 'engine',
				topic: 'system-recycled',
				data: {
					fixtures: ObjectMother.fixtureData()
				}
			});
		});

		it('should have rebuilt the specification', function(){
			var newSpec = Hierarchy.findSpec('spec1');

			expect(newSpec).to.not.equal(originalSpec);
		});

		it('should have sent a spec-changed message for the existing spec', function(){
			var message = findPublishedMessage('spec-changed');
			expect(message.channel).to.equal('editor');
			expect(message.id).to.equal('spec1');
		});
	});


	describe('can find all the errors', function(){
		var grammarErrorFixture = null;

		beforeEach(() => {
			var data = require('./../all-spec-data').fixtures;
			var library = new FixtureLibrary(data);

			Hierarchy.setLibrary(library);
			grammarErrorFixture = library.fixtures['GrammarError'];


		});

		it('exposes errors at the fixture level', () => {
			var errors = Hierarchy.errorReport();

			var fixture = _.find(errors, e => e.key == 'Failure');
			expect(fixture.errors.length).to.equal(1);

			var error = fixture.errors[0];
			expect(error.error).to.contain('This fixture ctor blew up');
		});

		it('the fixture can reach grammar errors in errorReport', function(){
			expect(grammarErrorFixture).to.not.be.null;

			var bad = grammarErrorFixture.grammars['Bad'];

			expect(grammarErrorFixture.errorCount()).to.equal(1);

			expect(grammarErrorFixture.errorReport())
		});

		it('exposes errors at the grammar level', () => {
			var errors = Hierarchy.errorReport();

			var fixture = _.find(errors, e => e.key == 'GrammarError');
			expect(fixture.errors.length).to.equal(0);

			var grammar = _.find(fixture.grammars, g => g.key == 'Bad');
			var error = grammar.errors[0];
			expect(error.error).to.contain('DivideByZeroException');
		});

		it('exposes errors from sentence format validation on the client', () => {
			var errors = Hierarchy.errorReport();

			var fixture = _.find(errors, e => e.key == 'Sentence');
			expect(fixture.errors.length).to.equal(0);

			var grammar = _.find(fixture.grammars, g => g.key == 'BadSentence');

			expect(grammar).to.not.be.null;
			expect(grammar).to.not.be.undefined;


			expect(grammar.errors.length).to.equal(1);

			var error = grammar.errors[0];

			expect(error.message).to.contain('Cell(s) name are unaccounted for in the sentence format');
			expect(error.error).to.contain('Missing cells in the format');
		});
	});
});
