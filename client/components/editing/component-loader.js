var React = require('react');
var _ = require('lodash');
var {TabbedArea, TabPane} = require('react-bootstrap');

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

		chromeless.add('line', 'lines/line');
		chromeless.add('container', 'containers/preview-container');

		return chromeless;
	}
}

function toEditor(editor){
	editor.add('cell', 'cells/cell');
	editor.add('line', 'lines/line-with-chrome');
	editor.add('container', 'containers/editor-container');
	editor.add('comment', 'comments/comment-editor');
	editor.add('table', 'tables/table-editor');
	editor.add('row', 'tables/body-row');
	editor.add('errorBox', 'lines/error-box');
	editor.add('stepAdder', 'adders/step-adder');
	editor.add('tableContext', 'tables/table-context');
	editor.add('stepAdderLookup', 'adders/step-adder-lookup');
	editor.add('stepAdderPlaceholder', 'adders/step-adder-placeholder');
}

var editor = new Loader();
toEditor(editor);




var preview = new Loader();
preview.add('line', 'lines/line');
preview.add('container', 'containers/preview-container');
preview.add('cell', 'cells/preview-cell');
preview.add('table', 'tables/table-preview');
preview.add('comment', 'comments/comment');
preview.add('row', 'tables/preview-row');
preview.add('errorBox', 'lines/error-box');

preview.stepAdder = x => null;
preview.tableContext = x => null;

var CheckboxIcon = require('./../icons')['checked'];

var results = new Loader();
results.add('line', 'lines/line');
results.add('container', 'containers/preview-container');
results.add('cell', 'cells/preview-cell');
results.add('table', 'tables/table-preview');
results.add('errorRow', 'tables/error-row');
results.add('row', 'tables/result-row');
results.add('errorBox', 'lines/error-box');
results.add('matchedRow', 'tables/set-verification-row');
results.add('extraRow', 'tables/extra-row');
results.add('comment', 'comments/comment');
results.add('successCell', 'cells/success-cell');
results.add('failedCell', 'cells/failure-cell');
results.add('missingCell', 'cells/missing-cell');
results.add('errorCell', 'cells/error-cell');
results.add('perfTable', 'logging/perf-table');
results.add('logComponent', 'logging/log-component');
results.add('setResultsTable', 'tables/set-results-table');
results.add('noResults', 'alerts/no-results');
results.checked = () => CheckboxIcon({});

results.tabbedArea = props => {
	return TabbedArea(props)
};

results.tab = (inner, key, title) => {
	var children = [inner];
	if (inner instanceof Array){
		children = inner;
	}

	return TabPane({children: children, eventKey: key, tab: title});
};

results.stepAdder = x => null;
results.tableContext = x => null;

module.exports = {
	editing: editor,
	preview: preview,
	results: results
}
