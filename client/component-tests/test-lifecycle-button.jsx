var React = require('react');
var expect = require('chai').expect;
var Postal = require('postal');
var $ = require('jquery');

var LifecycleButton = require('./../components/editing/header/lifecycle-button');

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



describe('The Lifecycle Button', function(){
	var div = null;
	var button = null;

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
	});

	function write(spec){
		var div = document.createElement('div');
		document.documentElement.appendChild(div);
		button = React.render((<LifecycleButton spec={spec} />), div);
	}

	it('should show Acceptance for that lifecycle', function(){
		write({lifecycle: 'Acceptance', id: 'foo'});

		var text = $(button.getDOMNode()).html();
		expect(text).to.equal('Acceptance');
	});

	it('should send toggle-lifecycle message on click', function(){
		write({lifecycle: 'Regression', id: 'foo'});

		$(button.getDOMNode()).click();

		var message = findPublishedMessage('changes');
		expect(message).to.not.be.null;
	});

	it('should show Regression for that lifecycle', function(){
		write({lifecycle: 'Regression', id: 'foo'});

		var text = $(button.getDOMNode()).html();
		expect(text).to.equal('Regression');
		
	});


});