var React = require('react');
var _ = require('lodash');

class Loader {
	constructor(parent){
		this.parent = parent;
	}

	

	add(method, path){
		var component = require('./' + path);
		this[method] = function(props){
			return component(props);
		}
	}

	span(text){
		return React.DOM.span(null, text);
	}

	chromed(){
		return this.parent || this;
	}

	chromeless(){
		var chromeless = new Loader(this);
		toEditor(chromeless);

		chromeless.add('line', 'line');
		chromeless.add('container', 'preview-container');

		return chromeless;
	}
}

function toEditor(editor){
	editor.add('cell', 'cell');
	editor.add('line', 'line-with-chrome');
	editor.add('container', 'editor-container');
	editor.add('comment', 'comment-editor');
	editor.add('table', 'table-editor');
	editor.add('row', 'body-row');
	editor.add('errorBox', 'error-box');
	editor.add('stepAdder', 'step-adder');
	editor.add('tableContext', 'table-context');
	editor.add('stepAdderLookup', 'step-adder-lookup');
	editor.add('stepAdderPlaceholder', 'step-adder-placeholder');
}

var editor = new Loader();
toEditor(editor);




var preview = new Loader();
preview.add('line', 'line');
preview.add('container', 'preview-container');
preview.add('cell', 'preview-cell');
preview.add('table', 'table-preview');
preview.add('comment', 'comment');
preview.add('row', 'preview-row');
preview.add('errorBox', 'error-box');

preview.stepAdder = x => null;
preview.tableContext = x => null;

var results = new Loader();
results.add('line', 'line');
results.add('container', 'preview-container');
results.add('cell', 'preview-cell');
results.add('table', 'table-preview');
results.add('errorRow', 'error-row');
results.add('row', 'result-row');
results.add('errorBox', 'error-box');
results.add('matchedRow', 'set-verification-row');
results.add('extraRow', 'extra-row');
results.add('comment', 'comment');
results.add('successCell', 'success-cell');
results.add('failedCell', 'failure-cell');
results.add('missingCell', 'missing-cell');
results.add('errorCell', 'error-cell');
results.add('perfTable', 'perf-table');
results.add('logComponent', 'log-component');
results.add('setResultsTable', 'set-results-table');
results.add('noResults', 'no-results');

results.stepAdder = x => null;
results.tableContext = x => null;

module.exports = {
	editing: editor,
	preview: preview,
	results: results
}
