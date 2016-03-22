var React = require("react");

var changes = require('./../../../lib/model/change-commands');

var Postal = require('postal');

var CellTextBox = require('./textbox-editor');
var CheckboxEditor = require('./checkbox-editor');
var SelectEditor = require('./select-editor');
var BigText = require('./big-text');

var defaultEditor = 'text';

function toDisplay(cell, value){
	if (value == null) return 'NULL';

	var text = value.toString();
	if (text != '') return text;

	if (cell.default) return cell.default;

	return '[' + (cell.header || cell.key) + ']';
}

// think this ends up being very similar to component-loaders
var builders = {
	add: function(key, strategy){
		if (typeof(strategy) === 'function'){
			this[key] = {
				edit: strategy,
				display: toDisplay
			}
		}
		else {
			this[key] = strategy;
			if (!strategy.hasOwnProperty('display')){
				strategy.display = toDisplay;
			}
		}
	},

	findEditor: function(editor){
    var defaultedEditor = editor || defaultEditor;
		if (!this.hasOwnProperty(defaultedEditor)){
			throw new Error('builders do not recognize editor: ' + editor);
		}

		return this[defaultedEditor];
	},

	toEditor: function(arg){
		var builder = this.findEditor(arg.cell.editor);
		return builder.edit(arg);
	},

	toText: function(arg){
		var builder = this.findEditor(arg.cell.editor);
		return builder.display(arg.cell.key, arg.value);
	}
};



builders.add('text', function(arg){
	return ( <CellTextBox arg={arg} />);
});

builders.add('boolean', function(arg){
	return ( <CheckboxEditor arg={arg} />);
});

builders.add('comment', function(arg){
	return ( <CellTextBox arg={arg} classes="form-control" />);
});

builders.add('select', function(arg){
	return ( <SelectEditor arg={arg} /> );
});

builders.add('bigtext', function(arg){
	return ( <BigText arg={arg} /> );
})



builders.get = function(type){
	if (!type) type = 'text';

	var builder = this[type];
	if (!builder){
		throw new Error("Unable to find a cell builder strategy for '" + builderType + "'");
	}

	return builder;
}


module.exports = builders;

