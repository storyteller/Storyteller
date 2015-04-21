var React = require('react');
var expect = require('chai').expect;
var Postal = require('postal');
var $ = require('jquery');
var RetryCount = require('./../components/editing/retry-count');

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




describe('RetryCount', () => {
	var div = null;
	var textbox = null;

	beforeEach(() => {
		Postal.reset();
		listener.clear();

		Postal.subscribe({
		    channel  : "editor",
		    topic    : "*",
		    callback : function(data, envelope) {
		    	data.topic = envelope.topic;
		        listener.append(data);
		    }
		});

		var instance = TestUtils.renderIntoDocument(<RetryCount count={1} />);

		div = instance.getDOMNode();
		textbox = $('input', div).get(0);
	});

	it('can render the initial count', () => {
		expect(textbox.value).to.equal('1');
	});

	it('change to a bad value does nothing and resets the textbox value', () => {
		TestUtils.Simulate.change(textbox, {target: {value: 'aaa'}});

		// no message
		expect(listener.events.length).to.equal(0);

		// Still the original value
		expect(textbox.value).to.equal('1');
	});

	it('broadcasts a change message when it receives a good number', () => {
		TestUtils.Simulate.change(textbox, {target: {value: '3'}});

		var message = findPublishedMessage('change-retry-count');
		expect(message.count).to.equal(3);
	});
});