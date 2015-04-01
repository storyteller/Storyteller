class ErrorGrammar{
	constructor(metadata){

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