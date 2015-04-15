var Step = require('./step');
var MissingGrammar = require('./missing-grammar');
var Section = require('./section');

function InvalidFixture(key){
	this.key = key;
	this.title = 'Missing Fixture: ' + key + '!';

	this.invalid = true;

	this.find = function(key){
		return new MissingGrammar(key);
	}

	this.buildStep = function(data){
		return new Section(data, this);
	}

	this.contextualControl = function(){
		return null;
	}
}

module.exports = InvalidFixture;