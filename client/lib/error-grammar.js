class ErrorGrammar{
	constructor(metadata){
		this.errors = metadata.errors;
	}

	buildStep(data, steps){

	}

	newStep(){

	}

	editor(step, loader){
		throw new Error("Not implemented yet!");
	}

	preview(step, loader){
		throw new Error("Not implemented yet!");
	}

	firstCell(){
		return null;
	}

	nextCell(){
		return null;
	}
}



module.exports = ErrorGrammar;