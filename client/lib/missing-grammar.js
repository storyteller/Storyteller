var Step = require('./step');

class MissingGrammar{
	constructor(key){
		this.key = key;
	}
	
	preview(step, loader){
		return loader.errorBox({error: 'Grammar ' + this.key + ' does not exist!'});
	}

	buildResults(step, loader){
		return loader.errorBox({error: 'Grammar ' + this.key + ' does not exist!'});
	}

	editor(step, loader){
		var inner = loader.span('Grammar ' + this.key + ' does not exist!');
	
		return loader.line( {components: [inner], step: step, warning: true});
	}

	buildStep(data){
		return new Step(data, []);
	}
}

module.exports = MissingGrammar;