"use strict";

var uuid = require('node-uuid');

class Arg{
	constructor(cell, data, id){
		if (!id){
			throw new Error('No id for the data passed into Arg: ' + JSON.stringify(data));
		}

		this.key = cell.key;
		this.result = null;
		this.cell = cell;
		this.changed = false;
		this.data = data;
		this.editing = false;

		this.value = data.cells[this.key] || cell.default;
		this.id = id

		if (!this.cell.editor){
			this.cell.editor = 'text';
		}
	}

	toggleUsage(){
		if (this.usage == 'visible'){
			this.usage = 'hidden';
		}
		else {
			this.usage = 'visible';
		}
	}

	static isMissing(props){
		return props.value == null && props.cell.default == null;
	}

	status(props){
		if (props.result){
			return props.result.status || 'ok';
		}
		else {
			return 'ok';
		}
	}

	isMissing(){
		return Arg.isMissing(this);
	}

	store(data){
		if (!data.cells) data.cells = {};

		if (this.value == false){
			data.cells[this.key] = false;
		}
		else{
			data.cells[this.key] = this.value || this.cell.default;
		}

		
	}

	hasDefault(){
		return this.cell.default != null && this.cell.default != undefined;
	}

	buildResults(loader){
		var status = 'ok';
		if (this.result){
			status = this.result.status;
		}

		switch (status){
			case 'ok':
				return loader.cell({cell: this.cell, value: this.value});
			case 'success':
				return loader.successCell({cell: this.cell, value: this.value});
			case 'error':
				return loader.errorCell({cell: this.cell, value: this.value, error: this.result.error});
			case 'missing':
				return loader.missingCell({});
			case 'failed':
				return loader.failedCell({cell: this.cell, value: this.value, actual: this.result.actual});
			case 'invalid':
				return loader.errorCell({cell: this.cell, value: this.value, error: this.result.error});
		}

		return loader.cell({cell: this.cell, value: this.value});
	}


}



module.exports = Arg;