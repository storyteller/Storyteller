var _ = require('lodash');

function StubLoader(){
	this.add = function(method){
		this[method] = function(props){
			return {
				type: method, 
				props: props
			};
		}
	}


	this.add('cell');
	this.add('line');
	this.add('container');
	this.add('comment');
	this.add('table');
	this.add('row');
	this.add('errorBox');
	this.add('successCell');
	this.add('errorCell');
	this.add('missingCell');
	this.add('failedCell');
	this.add('errorRow');
	this.add('stepAdder');
	this.add('tableContext');
	this.add('tab');
	this.add('tabbedArea');

	this.buildComponents = function(){
		return [];
	}

	this.span = function(text){
		return {type: 'span', text: text};
	}

	this.chromed = function(){
		return this;
	}

	return this;
}

module.exports = StubLoader;