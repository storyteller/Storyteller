var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('chai').expect;

var TableCell = require('../components/editing/tables/table-cell');
var Arg = require('../lib/model/arg');
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

describe('Rendering a TableCell', function(){
	var props = null;
	var instance = null;

	beforeEach(function(){
		props = new Arg({key: 'X', description: 'The operand'}, {cells: {X: null}}, 1);
		listener.clear();
	});

	function element(){
		instance = TestUtils.renderIntoDocument(
			<table>
			<tbody>
			<tr>
			<TableCell {... props} />
			</tr>
			</tbody>
			</table>
		);

        var top = ReactDOM.findDOMNode(instance);

		var cell = $('td', top).get(0);
		return cell;
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
		elementTypeShouldBe('TD');
		innerTextShouldBe(text);
	}

	function innerTextShouldBe(text){
		expect(element().innerHTML).to.equal(text);
	}



	describe('default visualizations', function(){
		it('should be a readonly TD', function(){
			elementTypeShouldBe('td');
		});

		it('should have the cell class', function(){
			elementShouldHaveClass('table-cell');
		});

		it('should have the data-class attribute', function(){
			elementShouldHaveAttribute('data-cell', 'X');
		});

		it('has the description in the title', function(){
			props.cell.description = 'a description of this cell';
			expect(element().title).to.equal('a description of this cell');
		});
	});

	it('can render display-only cell', function(){
		props.cell.editor = 'display-only';
		props.value = 'The Lakers';

		var elem = element();
		expect(elem.tagName).to.equal('TD');
		expect(elem.innerHTML).to.equal('The Lakers');
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
			props.value = 'foo';

			var elem = element().firstChild;

			expect(elem.tagName).to.equal('INPUT');
		});



	});




});


