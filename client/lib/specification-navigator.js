

function selectNext(location){
	if (location.step){
		var stepNext = location.step.selectNext(location.cell);
		if (stepNext) return stepNext;
	}

	if (location.holder){
		var holderNext = location.holder.selectNext(location);
		if (holderNext) return holderNext;


	}

	return null;

	// MORE HERE
}

function selectPrevious(location){
	throw new Error('not done yet');
}

class SpecificationNavigator {
	constructor(spec){
		this.spec = spec;
		this.location = {holder: null, step: null, cell: null}
	}

	// needs tests
	replace(location){
		if (this.location.holder) this.location.holder.active = false;
		if (this.location.step) this.location.step.active = false;
		if (this.location.cell) this.location.cell.active = false;

		this.spec.clearActiveState();

		if (location.holder) location.holder.active = true;
		if (location.step) location.step.active = true;
		if (location.cell) location.cell.active = true;

		this.location = location;
	}

	// needs tests
	moveFirst(){
		if (this.spec.children.length == 0){
			this.replace({holder: this.spec, step: this.spec.adder});
		}
		else{
			this.replace(this.spec.children[0].moveFirst());
		}
	}


	moveNext(){
		var next = selectNext(this.location);
		if (next){
			this.replace(next);
		}
	}

	moveLast(){
		this.replace({holder: this.spec, step: this.spec.adder, cell: null});
	}

	movePrevious(){
		var previous = selectPrevious(this.location);
		if (previous){
			this.replace(previous);
		}		
	}

	goToHolder(holder){
		this.replace({holder: holder, step: holder.adder, cell: null});
	}



}

module.exports = SpecificationNavigator;