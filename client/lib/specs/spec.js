var _ = require("lodash");
var Counts = require('./counts');
var QueueState = require('./queue-state');
var ResultCache = require('./result-cache');

class Spec{
	constructor(data){
		this.title = data.title || data.name; // older test data still uses name in some places
		this.id = data.id;
		this.lifecycle = data.lifecycle || 'Acceptance';
		this['max-retries'] = data['max-retries'];
		this.mode = data.mode || 'full';
		this.results = null;
	}

	get state(){
		return QueueState.stateFor(this.id);
	}


	status(){
		if (!this.hasResults()) return 'none';

		if (ResultCache.lastResultFor(this.id).counts.success()) return 'success';

		return 'failed';
	}

	hasResults(){
		return ResultCache.hasResults(this.id);
	}

	icon(){
		if (this.state == 'running'){
			var counts = QueueState.runningCounts();
			if (!counts.anyResults()) return 'running';

			if (counts.success()) return 'running-success';

			return 'running-failed';
		}

		return this.status();
	}


}




module.exports = Spec;