var React = require('react');
var _ = require('lodash');

function Loader(){
	var self = this;

	this.add = function(method, path){
		var component = require('./' + path);
		self[method] = function(props){
			return component(props);
		}
	}

	this.span = function(text){
		return React.DOM.span(null, text);
	}

	this.chromed = function(){
		return self;
	}

	this.chromeless = function(){
		var loader = new Loader();

		_.assign(loader, this);

		loader.add('line', 'line');
		loader.add('container', 'preview-container');
		loader.chromed = function(){
			return self;
		}

		return loader;
	}

	return this;
}

var editor = new Loader();
editor.add('cell', 'cell');
editor.add('line', 'line-with-chrome');
editor.add('container', 'editor-container');
editor.add('comment', 'comment-editor');
editor.add('table', 'table-editor');
editor.add('row', 'body-row');
editor.add('errorBox', 'error-box');



var preview = new Loader();
preview.add('line', 'line');
preview.add('container', 'preview-container');
preview.add('cell', 'preview-cell');
preview.add('table', 'table-preview');
preview.add('comment', 'comment');
preview.add('row', 'preview-row');
preview.add('errorBox', 'error-box');

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

module.exports = {
	editing: editor,
	preview: preview,
	results: results
}
