var Step = require('./../model/step');
var MissingGrammar = require('./../grammars/missing-grammar');
var Section = require('./../model/section');

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