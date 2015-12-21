var React = require('react');
var expect = require('chai').expect;
var Postal = require('postal');
var Hierarchy = require('./../lib/stores/hierarchy');
var $ = require('jquery');
var TestUtils = require('react-addons-test-utils');

var QueuePage = require('./../components/queue/queue-page');

var data = require('./../lib-tests/hierarchy-data');

function publishEngineMessage(topic, data){
	Postal.publish({
		channel: 'engine',
		topic: topic,
		data: data
	});
}

function hierarchyIsPublishedFromEngine(){
	publishEngineMessage('hierarchy-loaded', {hierarchy: data});
}

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


describe('The Queue Page', function(){
	var component;

	beforeEach(function(){
		Postal.reset();
		Hierarchy.reset();

		Postal.subscribe({
		    channel  : "engine-request",
		    topic    : "*",
		    callback : function(data, envelope) {
		    	data.topic = envelope.topic;
		    	data.channel = 'engine-request';
		        listener.append(data);
		    }
		});

		hierarchyIsPublishedFromEngine();

		component = TestUtils.renderIntoDocument(
		  <QueuePage />
		);
	});

	it('should show all the currently queued specs', function(){
		Postal.publish({
			channel: 'engine',
			topic: 'queue-state',
			data: {running: null, queued: ['general1', 'general2', 'general3']}
		});

		var element = component.getDOMNode();

		var displayedNames = [];

		$('span.queued-spec-name', element).each((i, elem) => {
			displayedNames.push(elem.innerHTML);
		});


		expect(displayedNames).to.deep.equal(["Check properties","Selection List Values","Services"]);
	});

	it('can cancel a single spec', function(){
		Postal.publish({
			channel: 'engine',
			topic: 'queue-state',
			data: {running: null, queued: ['general1', 'general2', 'general3']}
		});

		var element = component.getDOMNode();
		var specElement = $('#queued-spec-general2', element);

		TestUtils.Simulate.click($('a.explorer-command', specElement).get(0));

		var message = findPublishedMessage('cancel-spec');
		expect(message.id).to.equal('general2');

	});

	it('can cancel all the specs', function(){
		var element = component.getDOMNode();
		$('#cancel-all-specs', element).click();

		var message = findPublishedMessage('cancel-all-specs');
		expect(message).to.not.be.null;
	});
});