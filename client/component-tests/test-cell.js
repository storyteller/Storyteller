var React = require('react');
var expect = require('chai').expect;

var Cell = require('../components/editing/cell');
var Arg = require('../lib/arg');
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

Postal.subscribe({
    channel  : "editor",
    topic    : "select-cell",
    callback : function(data, envelope) {
        listener.append(data);
    }
});

function singleEventReceivedShouldBe(expected){
	expect(listener.events.length).to.equal(1);
	expect(listener.events[0]).to.deep.equal(expected);
}

describe('Rendering a Cell', function(){
	var props = null;

	beforeEach(function(){
		props = new Arg({key: 'X', description: 'The operand'}, {cells: {X: null}}, 1);
		listener.clear();
	});

	function element(){
		var instance = TestUtils.renderIntoDocument(
			<Cell {... props} />
		);
		return instance.getDOMNode();
	}

	function elementShouldHaveClass(clazz){
		var classes = element().className.split(' ');
		expect(classes).to.contain(clazz);
	}

	function elementShouldNotHaveClass(clazz){
		var classes = element().className.split(' ');
		expect(classes).to.not.contain(clazz);
	}

	function elementShouldHaveAttribute(att, value){
		var elem = element();

		expect(elem.getAttribute(att)).to.equal(value);
	}

	function elementTypeShouldBe(type){
		expect(element().nodeName).to.equal(type.toUpperCase());
	}

	function elementShouldBeLinkWithText(text){
		elementTypeShouldBe('span');
		innerTextShouldBe(text);
	}

	function innerTextShouldBe(text){
		expect(element().innerHTML).to.equal(text);
	}

	describe('default visualizations', function(){
		it('should be a readonly span', function(){
			elementTypeShouldBe('span');
		});

		it('should have the cell class', function(){
			elementShouldHaveClass('cell');
		});

		it('should have the data-class attribute', function(){
			elementShouldHaveAttribute('data-cell', 'X');
		});

		it('has the description in the title', function(){
			props.cell.description = 'a description of this cell';
			expect(element().title).to.equal('a description of this cell');
		});
	});

	describe('render changed display', function(){
		it('should show as changed if changed', function(){
			props.changed = true;

			elementShouldHaveClass('changed');
		});

		it('should not show as changed if not changed', function(){
			props.changed = false;
			elementShouldNotHaveClass('changed');
		});
	});

	describe('Rendering a cell in editing mode', function(){
		beforeEach(function(){
			props.active = true;
		});

		it('should render a textbox when the cell editor is "text"', function(){
			props.cell.editor = 'text';
			props.value = 'Foo!';

			elementTypeShouldBe('input');
			elementShouldHaveAttribute('type', 'text');
			elementShouldHaveAttribute('value', props.value);
		});

		it('should have the cell class and data-cell att when in editing mode', function(){
			props.cell.editor = 'text';
			props.value = 'Foo!';

			elementShouldHaveAttribute('data-cell', 'X');
			elementShouldHaveClass('cell');
		});

		/* Works in the harness, but this code isn't really firing the 
		   change event
		it('should fire a cell changed event on changes', function(){
			props.cell.editor = 'text';
			props.value = 'Foo!';

			var elem = element();
			$(elem).val('Bar!');
			$(elem).change();

			singleEventReceivedShouldBe({foo: 1});
		});
*/
	});

	describe('Rendering a Cell without results', function(){
		it('with no default and no value', function(){
			elementShouldBeLinkWithText('[X]');
			elementShouldHaveClass('missing');
		});
	
		it('with no value but a default', function(){
			props = new Arg({
				key: 'X', 
				description: 'The operand',
				default: 'bar'
			}, {cells: {X: null}}, 1);

			expect(props.cell.default).to.equal('bar');
			expect(props.value).to.equal('bar');

			elementShouldBeLinkWithText('bar');
			elementShouldNotHaveClass('missing');
		});

		it ('with a value but no default', function(){
			props.value = 'my sweet love';
			props.cell.default = null;

			elementShouldBeLinkWithText('my sweet love');
			elementShouldNotHaveClass('missing');
		});

		it('with both a value and a default, value wins', function(){
			props.value = 'my sweet love';
			props.cell.default = 'whaa whaa';

			elementShouldBeLinkWithText('my sweet love');
			elementShouldNotHaveClass('missing');
		});
	});



	describe('when responding to focus or click events in read only mode', function(){
		it('should send a message for select-cell when clicked', function(){
			var elem = element();

			TestUtils.Simulate.click(elem);

			singleEventReceivedShouldBe({step: props.id, cell: 'X'});
		});

		it('should send a message for select-cell it receives focus', function(){
			var elem = element();

			TestUtils.Simulate.focus(elem);

			singleEventReceivedShouldBe({step: props.id, cell: 'X'});
		});
	});

});


