
class Adder {
	constructor(holder, text){
		this.holder = holder;
		this.active = false;
		this.text = text;
	}

	editor(loader){
		if (this.active){
			return loader.stepAdderLookup({holder: this.holder});
		}

		return loader.stepAdderPlaceholder({holder: this.holder, text: this.text});
	}
}

module.exports = Adder;