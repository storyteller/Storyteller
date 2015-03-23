/** @jsx React.DOM */

var React = require("react");
var changes = require('./../../lib/change-commands');
var Postal = require('postal');

var CellTextBox = require('./textbox-editor');
var CheckboxEditor = require('./checkbox-editor');
var SelectEditor = require('./select-editor');

// think this ends up being very similar to component-loaders
var builders = {
	add: function(key, strategy){
		if (typeof(strategy) === 'function'){
			this[key] = {
				edit: strategy,
				display: (cell, value) => {
					if (value == null) return 'NULL';

					return value.toString();
				}
			}
		}
		else {
			this[key] = strategy;
		}
	},

	findEditor: function(editor){
		if (!this.hasOwnProperty(editor || 'text')){
			throw new Error('builders do not recognize editor: ' + editor);
		}

		return this[editor];
	},

	toEditor: function(arg){
		var builder = this.findEditor(arg.cell.editor);
		return builder.edit(arg);
	},

	toText: function(arg){
		var builder = this.findEditor(arg.cell.editor);
		return builder.display(arg);
	}
};



builders.add('text', function(arg){
	return CellTextBox({arg: arg});
});

builders.add('boolean', function(arg){
	return CheckboxEditor({arg: arg});
});

builders.add('comment', function(arg){
	return CellTextBox({arg: arg, classes: 'form-control'});
});

builders.add('select', function(arg){
	return SelectEditor({arg: arg});
});




builders.get = function(type){
	if (!type) type = 'text';

	var builder = this[type];
	if (!builder){
		throw new Error("Unable to find a cell builder strategy for '" + builderType + "'");
	}

	return builder;
}


module.exports = builders;