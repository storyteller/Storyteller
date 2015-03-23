function CellChange(id, cell, value){
	this.id = id;
	this.cell = cell;
	this.value = value;

	this.apply = function(store){
		var step = store.find(id);

		var arg = step.findByPath(cell);

		this.oldValue = arg.value;
		this.oldChanged = arg.changed;

		arg.value = value;
		arg.changed = true;
	}

	this.unapply = function(store){
		var arg = store.find(id).findByPath(cell);

		arg.value = this.oldValue;
		arg.changed = this.oldChanged;
	}

	return this;
}

function StepAdded(parent, step, index){
	if (index != null){
		this.apply = function(store){
			parent.insertStep(index, step);
			store.storeStep(step);

			if (step.isHolder && step.isHolder()){
				store.selectHolder(step.id);
			}
		}
	}
	else {
		this.apply = function(store){
			parent.addStep(step);
			store.storeStep(step);

			if (step.isHolder && step.isHolder()){
				store.selectHolder(step.id);
			}
		}
	}

	this.unapply = function(store){
		parent.removeStep(step);
		store.removeStep(step);
	}

	return this;
}

function StepRemoved(parent, step){
	this.apply = function(store){
		this.position = parent.removeStep(step);
		store.removeStep(step);
	}

	this.unapply = function(store){
		parent.insertStep(this.position, step);
		store.storeStep(step);
	}

	return this;
}

module.exports = {
	cellValue: function(id, cell, value){
		return new CellChange(id, cell, value);
	},

	// the following two can do sections too
	stepAdded: function(parent, step, index){
		return new StepAdded(parent, step, index);
	},

	stepRemoved: function(parent, step){
		return new StepRemoved(parent, step);
	},



}