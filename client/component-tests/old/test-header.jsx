var React = require('react');
var expect = require('chai').expect;
var Postal = require('postal');
var AllSpecData = require('./../all-spec-data');

var $ = require('jquery');

var Header = require('./../components/header/header');
var Hierarchy = require('./../lib/stores/hierarchy');

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


describe('The Header Control', () => {
	var component;
	var element;

	var render = function(data){
		if (!data.fixtures){
			data.fixtures = AllSpecData.fixtures;
		}
		

		Postal.publish({
			channel: 'engine',
			topic: 'system-recycled',
			data: data
		})

		component = TestUtils.renderIntoDocument(
		  <Header />
		);



		element = component.getDOMNode();
	}

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


	});

	it('renders the project name without the profile', function(){
		render({
			name: 'My Project',
			success: true,
			time: 'recently',
			properties: {
				Profile: null
			}
		});

		var title = $('#project-title a', element).html();
		expect(title).to.equal('My Project');
	});

	it('displays the project name with the profile', () => {
		render({
			name: 'My Project',
			success: true,
			time: 'recently',
			properties: {
				Profile: 'Connected'
			}
		});

		var title = $('#project-title a', element).html();
		expect(title).to.equal('My Project (Connected)');
	});

	it('a request can be sent to recycle the system', function(){
		render({
			name: 'My Project',
			success: true,
			time: 'recently',
			properties: {
				Profile: 'Connected'
			}
		});

		$('#force-recycle a', element).click();

		var message = findPublishedMessage('force-recycle');

		expect(message).to.not.be.null;
	});

	it('shows the grammar errors if there are some', function(){
		render({
			name: 'My Project',
			success: true,
			time: 'recently',
			properties: {
				Profile: 'Connected'
			}
		});

		var errorCount = Hierarchy.errorCount();

		var grammarCountText = $('#grammar-error-count .badge', element).html();

		expect(grammarCountText).to.equal(errorCount.toString());
	});

	it('does not show grammar errors if there are none', function(){
		render({
			name: 'My Project',
			success: true,
			time: 'recently',
			properties: {
				Profile: 'Connected'
			},
			fixtures: []
		});

		expect(Hierarchy.errorCount()).to.equal(0);

		expect($('#grammar-error-count', element).length).to.equal(0);
	});

	it('can open the help modal without errors', () => {
		render({
			name: 'My Project',
			success: true,
			time: 'recently',
			properties: {
				Profile: 'Connected'
			},
			fixtures: []
		});

		$('#help-icon', element).click();
	});

});