function ToggleLifecycle(){
	this.apply = store => {
		if (store.lifecycle == 'Acceptance'){
			store.lifecycle = 'Regression';
		}
		else {
			store.lifecycle = 'Acceptance';
		}
	}

	this.unapply = this.apply;
}

module.exports = ToggleLifecycle;