var Step = require('./../model/step');

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

	buildResults(step, loader, isStepthrough, dispatch, spec){
		var components = [];

		var result = step.getResult(this.position);

		if (isStepthrough){
			components.push(loader.breakpointLine({spec: spec, id: step.id, position: this.position, title: '(Silent Action)', dispatch: dispatch}))
		}

		if (result && result.status != 'ok'){
			components.push(loader.errorBox({title: 'Silent Action', error: result.error, errorDisplay: result.errorDisplay}));
		}

		return components;
	}


}



module.exports = Silent;