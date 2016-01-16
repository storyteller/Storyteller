var React = require('react');
var expect = require('chai').expect;
//var StepAdderInjector = require('inject!./../components/editing/adders/step-adder');
var ObjectMother = require('./../lib-tests/object-mother');
var $ = require('jquery');
var Postal = require('postal');
var defaultDomUtils = {
	offsetTop: function() { return 51; },
	scrollTop: function(domNode) { return 52; },
	width: function() { return 53; },
	screenHeight: function() { return 50; },
	height: function() { return 49; }
};

/*
var domUtilsOffPage = {
	...defaultDomUtils,
	height: function() { return 51; }
}
*/

var StepAdder;
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

/*
describe('The StepAdder component', function(){
	beforeEach(function(){
		StepAdder = StepAdderInjector({'./../../../lib/dom-utils': defaultDomUtils});
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


	it ('changes to position fixed when scrolled out of view', function() {
		var adder = TestUtils.renderIntoDocument(
			<StepAdder holder={spec} />
		);
		var node = $(adder.getDOMNode());
		expect(node.css('position')).to.be.empty;

		adder.handleScroll();
		expect(node.css('position')).to.equal('fixed');
	});

	it ('keeps original width after scrolled out of view', function() {
		var adder = TestUtils.renderIntoDocument(
			<StepAdder holder={spec} />
		);
		var node = $(adder.getDOMNode());
		expect(node.css('width')).to.equal('0px');

		adder.handleScroll();
		expect(node.css('width')).to.equal('53px');
	});

	it ('enabled scrolling when node is off the page', function() {
		StepAdder = StepAdderInjector({'./../../../lib/dom-utils': domUtilsOffPage});
		var adder = TestUtils.renderIntoDocument(
			<StepAdder holder={spec} />
		);
		var node = $(adder.getDOMNode());
		expect(node.css('overflow-y')).to.be.empty;

		adder.handleScroll();
		expect(node.css('overflow-y')).to.equal('scroll');
	});


	it ('does not enable scrolling when node height is not too large', function() {
		var adder = TestUtils.renderIntoDocument(
			<StepAdder holder={spec} />
		);
		var node = $(adder.getDOMNode());
		expect(node.css('overflow-y')).to.be.empty;

		adder.handleScroll();
		expect(node.css('overflow-y')).to.be.empty;
	});


});
*/
