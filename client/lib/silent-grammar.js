var Step = require('./step');

class Silent{
	constructor(data){
		this.type = 'silent';
	}


	buildStep(data){
		return new Step({}, []);
	}

	newStep(){
		return this.buildStep({key: this.key, cells: {}});
	}

	editor(step, loader){
		return null;
	}

	preview(step, loader){
		return null;
	}

	buildResults(step, loader){
		var result = step.getResult(this.position);
		if (result){
			return loader.errorBox({title: 'Silent Action', error: result.error});
		}
		else {
			return [];
		}
	}


}



module.exports = Silent;