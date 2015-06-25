var React = require('react');
var expect = require('chai').expect;
var StepAdder = require('./../components/editing/adders/step-adder');
var ObjectMother = require('./../lib-tests/object-mother');
var $ = require('jquery');
var Postal = require('postal');

var listener = {
	events: [],

	clear: function(){
		this.events = [];
	},

	append: function(data){
		this.events.push(data);
	}
};

Postal.subscribe({
    channel  : "editor",
    topic    : "changes",
    callback : function(data, envelope) {
        listener.append(data);
    }
});

function singleEventReceivedShouldBe(expected){
	expect(listener.events.length).to.equal(1);
	expect(listener.events[0]).to.deep.equal(expected);
}

describe('The StepAdder component', function(){
	beforeEach(function(){
		listener.clear();
	});

	var spec = ObjectMother.specification();

	it('can render for a specification', function(){

		var adder = TestUtils.renderIntoDocument(
		  <StepAdder holder={spec} />
		)

		var keys = $('a.add-step', adder.getDOMNode()).map(function(){
			return $(this).attr('data-key');
		}).get();

		expect(keys).to.deep.equal(['Comment', 'Math', 'Zork']);
	});

	/* Can't get the double click to fire somehow
	it('publishes the add step on double click in specification', function(){
		$('<div id="add-step-holder"></div>').appendTo(document.body).get(0);
		var div = $('#add-step-holder').get(0);

		var adder = StepAdder({holder: spec});

		React.renderComponent(adder, div);

		var search = $('a.add-step[data-key=Math]', div);
		search.css("background", "green");
		expect(search.length).to.equal(1);

		search.dblclick();

		expect(listener.events.length).to.equal(1);
	});
*/

	it('can render for a section', function(){
		var section = spec.findByPath('0');

		var adder = TestUtils.renderIntoDocument(
		  <StepAdder holder={section} />
		);

		var keys = $('a.add-step', adder.getDOMNode()).map(function(){
			return $(this).attr('data-key');
		}).get();

		expect(keys).to.deep.equal(['Comment', 'Add', 'Adding', 'Tabulating', 'StartWith', 'Subtract', 'TheResultShouldBe']);
	});

/*
	it('publishes the add step on double click in section', function(){
		$('<div id="add-step-holder-2"></div>').appendTo(document.body).get(0);
		var div = $('#add-step-holder-2').get(0);

		var adder = StepAdder({holder: spec.steps[0]});

		React.renderComponent(adder, div);

		var search = $('a.add-step[data-key=Add]', div);

		search.css("background", "brown");

		expect(search.length).to.equal(1);

		search.trigger('dblclick');

		expect(listener.events.length).to.equal(1);
	});
*/
});
