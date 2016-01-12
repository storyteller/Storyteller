var Broadcaster = require('./../broadcaster');
var CellChange = require('./cell-change');
var ToggleLifecycle = require('./toggle-lifecycle');


function SpecRenamed(title){
	this.apply = store => {
		this.old = store.title;
		store.title = title;
	}

	this.unapply = store => {
		store.title = this.old;
	}
}

function ToggleColumn(section, cell){
	this.section = section;
	this.cell = cell;

	this.apply = store => {
		this.section.toggleColumn(cell);
	}

	this.unapply = this.apply;
}



function StepMovedUp(parent, step){
	this.apply = store => {
		parent.moveUp(step);
	}

	this.unapply = store => {
		parent.moveDown(step);
	}
}

function StepMovedDown(parent, step){
	this.apply = store => {
		parent.moveDown(step);
	}

	this.unapply = store => {
		parent.moveUp(step);
	}
}

function StepAdded(parent, step, index){
	this.navigateOnAdd = store => {
		if (step.isHolder && step.isHolder()){
			store.selectHolder(step.id);
		}
		else if (step.selectFirst) {
			var location = step.selectFirst();
			if (location.cell){
				store.navigator.replace(location);
			}
		}
	}

	if (index != null){
		this.apply = function(store){
			parent.insertStep(index, step);
			store.storeStep(step);

			this.navigateOnAdd(store);
		}
	}
	else {
		this.apply = function(store){
			parent.addStep(step);
			store.storeStep(step);

			this.navigateOnAdd(store);
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

function RetryCountChanged(count){
	this.count = count;

	this.apply = store => {
		this.old = store['max-retries'];
		store['max-retries'] = count;
	}

	this.unapply = store => {
		store['max-retries'] = this.old;
	}
}

function ExpirationPeriodChanged(period){
	this.period = period;

	this.apply = store => {
		this.old = store['expiration-period'];
		store['expiration-period'] = period;
	}

	this.unapply = store => {
		store['expiration-period'] = this.old;
	}
}



module.exports = {
	rename: function(name){
		return Broadcaster.applyChange(new SpecRenamed(name));
	},

	toggleLifecycle: function(){
		return Broadcaster.applyChange(new ToggleLifecycle());
	},

	toggleColumn: function(section, cell){
		return Broadcaster.applyChange(new ToggleColumn(section, cell));
	},

	changeRetryCount: function(count){
		return Broadcaster.applyChange(new RetryCountChanged(count));
	},

	changeExpirationPeriod: function(period){
		return Broadcaster.applyChange(new ExpirationPeriodChanged(period));
	},

	cellValue: function(id, cell, value){
		var change = new CellChange(id, cell, value);
		Broadcaster.applyChange(change);

		return change;
	},

	// the following two can do sections too
	stepAdded: function(parent, step, index){
		return Broadcaster.applyChange(new StepAdded(parent, step, index));
	},

	stepRemoved: function(parent, step){
		return Broadcaster.applyChange(new StepRemoved(parent, step));
	},

	moveDown(parent, step){
		return new StepMovedDown(parent, step);
	},

	moveUp(parent, step){
		return new StepMovedUp(parent, step);
	}

}
