var $ = require('jquery');

function CellDriver(getDOMNode){
	this.isTextbox = function(){
		var element = getDOMNode();
		return element.tagName == 'INPUT' && element.getAttribute('type').toUpperCase() == 'TEXT';
	};

	this.isReadonly = function(){
		return getDOMNode().tagName == 'SPAN';
	};

	this.typeText = function(text){
		TestUtils.Simulate.change(getDOMNode(), {target: {value: text}});
	};

	this.value = function(){
		var element = getDOMNode();
		if (this.isReadonly()){
			return element.innerHTML;
		}

		if (element.tagName == 'TEXTAREA'){
			return element.innerHTML;
		}

		return $(element).val();
	};

	this.click = function(){
		TestUtils.Simulate.click(getDOMNode());
	};

	this.hasFocus = function(){
		return getDOMNode() == document.activeElement;
	};

}

module.exports = CellDriver;
