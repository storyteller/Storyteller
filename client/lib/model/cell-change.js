module.exports = function CellChange(id, cell, value){
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