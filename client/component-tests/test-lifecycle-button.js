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
		//console.log(JSON.stringify(data));
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
		    channel  : "engine-request",
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

	it('should send a mark-as-accepted message if in Regression', function(){
		write({lifecycle: 'Regression', id: 'foo'});

		$(button.getDOMNode()).click();

		var message = findPublishedMessage('mark-as-acceptance');
		expect(message.list).to.deep.equal(['foo']);
	});

	it('should show Regression for that lifecycle', function(){
		write({lifecycle: 'Regression', id: 'foo'});

		var text = $(button.getDOMNode()).html();
		expect(text).to.equal('Regression');
		
	});


	it('should send a mark-as-regression message if in Acceptance', function(){
		write({lifecycle: 'Acceptance', id: 'foo'});

		$(button.getDOMNode()).click();

		var message = findPublishedMessage('mark-as-regression');
		expect(message.list).to.deep.equal(['foo']);
	});
});