var Step = require('./step');

class MissingGrammar{
	constructor(key){
		this.key = key;
		this.type = 'missing';
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

	firstCell(){
		return null;
	}

	nextCell(){
		return null;
	}
}

module.exports = MissingGrammar;