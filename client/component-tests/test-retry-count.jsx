var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('chai').expect;
var Postal = require('postal');
var $ = require('jquery');
var RetryCount = require('./../components/editing/header/retry-count');

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

class Wrapper extends React.Component {
	render() { 
	  return this.props.children
	}
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

		var instance = TestUtils.renderIntoDocument(<Wrapper><RetryCount count={1} /></Wrapper>);
		div = ReactDOM.findDOMNode(instance);

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

		var message = findPublishedMessage('changes');
		expect(message.count).to.equal(3);
	});
});