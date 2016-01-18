

function selectNext(location){
	if (location.step){
		var stepNext = location.step.selectNext(location);
		if (stepNext) return stepNext;
	}

	var holderNext = location.holder.selectNext(location);
	if (holderNext) return holderNext;

	var holder = location.holder;
	while (holder.parent){
		var parent = holder.parent;

		var next = parent.selectNext({holder: parent, step: holder, cell: null});
		if (next) return next;

		holder = parent;
	}

	return null;
}

function selectPrevious(location){
	if (location.step){
		var stepPrevious = location.step.selectPrevious(location);
		if (stepPrevious) return stepPrevious;
	}

	var holderPrevious = location.holder.selectPrevious(location);
	if (holderPrevious) return holderPrevious;

	var holder = location.holder;
	while (holder.parent){
		var parent = holder.parent;

		var previous = parent.selectPrevious({holder: parent, step: holder, cell: null});
		if (previous) return previous;

		holder = parent;
	}

	return null;
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
		if (this.spec.steps.length == 0){
			this.replace({holder: this.spec, step: this.spec.adder});
		}
		else{
			this.replace(this.spec.steps[0].selectFirst());
		}
	}

    atHome(){
        if (this.spec.steps.length == 0){
            return true;
        }
        else {
            var first = this.spec.steps[0].selectFirst();
            return this.location.holder == first.holder 
                && this.location.step == first.step 
                && this.location.cell == first.cell;
        }
    }

	moveNext(){
		if (this.location.step == this.spec.adder) return false;

		var next = selectNext(this.location);
		if (next){
			this.replace(next);
			return true;
		}

		return false;
	}

	moveLast(){
		if (this.atEnd()) return false;

		this.replace({holder: this.spec, step: this.spec.adder, cell: null});

		return true;
	}
    
    atEnd(){
        return (this.location.step == this.spec.adder);
    }

	movePrevious(){
		var previous = selectPrevious(this.location);
		if (previous){
			this.replace(previous);
			return true;
		}		

		return false;
	}

	goToHolder(holder){
		this.replace({holder: holder, step: holder.adder, cell: null});
	}



}

module.exports = SpecificationNavigator;