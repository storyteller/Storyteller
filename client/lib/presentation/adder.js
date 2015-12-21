"use strict";

class Adder {
	constructor(holder, text){
		this.holder = holder;
		this.active = false;
		this.text = text;
		this.type = 'adder';
	}

	editor(loader){
		if (this.active){
			return loader.stepAdderLookup({holder: this.holder});
		}

		return loader.stepAdderPlaceholder({holder: this.holder, text: this.text});
	}

	selectNext(){
		return null;
	}

	selectPrevious(){
		return null;
	}

	selectLast(){
		return null;
	}

	selectFirst(){
		return null;
	}
}

module.exports = Adder;