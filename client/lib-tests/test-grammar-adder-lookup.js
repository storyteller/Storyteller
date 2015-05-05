var expect = require('chai').expect;
var Postal = require('postal');
var ObjectMother = require('./object-mother');
var GrammarLookup = require('./../lib/grammar-adder-lookup');
var _ = require('lodash');

var listener = {
	events: [],

	clear: function(){
		this.events = [];
	},

	append: function(data){
		this.events.push(data);
	}
};



function findPublishedMessage(topic){
	return _.find(listener.events, function(x){
		return x.topic == topic;
	});
}


describe('Grammar Adder Lookup', function(){
	var spec = ObjectMother.specification();
	var section = spec.steps[0];
	var lookup = null;

	beforeEach(function(){
		listener.clear();

		Postal.subscribe({
		    channel  : "editor",
		    topic    : "*",
		    callback : function(data, envelope) {
		    	data.topic = envelope.topic;
		    	data.channel = 'editor';
		        listener.append(data);
		    }
		});

		lookup = new GrammarLookup(section);
	});

	it('should have comment as the first option', function(){
		expect(lookup.options[0].title).to.equal('New Comment');
	});

	it('should have an option for each grammar in the fixture', function(){
		var keys = lookup.options.map(x => x.title);

		expect(keys).to.deep.equal([
			'New Comment', 
			'Add {x}', 
			'Adding {x} to {y} should be {result}', 
			'Doing some tabulations!',
			'Start with {x}',
			'Subtract {x}',
			'The result should be {x}'
		])

	});

	it('matches case insensitive', function(){
		expect(lookup.findMatches('aDd').map(x => x.title))
			.to.deep.equal(['Add {x}', 'Adding {x} to {y} should be {result}']);
	});

	it('can create a new step when an option is selected', function(){
		var second = lookup.options[1];

		second.select();

		var message = findPublishedMessage('changes');

		expect(_.last(spec.steps[0].steps).key).to.equal('Tabulating');

		message.apply(spec);

		expect(_.last(spec.steps[0].steps).key).to.equal(second.grammar.key);
	});
});