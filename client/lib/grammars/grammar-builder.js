

var builders = {};


builders['sentence'] = require('./sentence');
builders['embedded-section'] = require('./embedded-section');
builders['table'] = require('./table');
builders['paragraph'] = require('./paragraph');
builders['error'] = require('./error-grammar');
builders['set-verification'] = require('./set-verification');
builders['silent'] = require('./silent-grammar');



module.exports = function(metadata){
	var ctor = builders[metadata.type];
	if (ctor instanceof Function){
		var grammar = new ctor(metadata);
		grammar.missing = metadata.missing;

		return grammar;
	}
	else {
		throw new Error('Fixture does not support a grammar type ' + metadata.type);
	}
}
