var _ = require("lodash");
var Counts = require('./counts');
var QueueState = require('./queue-state');

class Spec{
	constructor(data){
		this.title = data.title || data.name; // older test data still uses name in some places
		this.id = data.id;
		this.lifecycle = data.lifecycle || 'Acceptance';

		this.results = null;

		if (data.results){
			this.recordResults(data.results);
		}
	}

	get state(){
		return QueueState.stateFor(this.id);
	}


	status(){
		if (this.results == null) return 'none';

		if (this.results.counts.success()) return 'success';

		return 'failed';
	}

	recordResults(results){
		this.results = results;
		if (results.counts){
			this.results.counts = new Counts(results.counts);
		}
	}

	hasResults(){
		return (this.results);
	}

	icon(){
		if (this.state == 'running'){
			var counts = QueueState.runningCounts();
			if (!counts.anyResults()) return 'running';

			if (counts.success()) return 'running-success';

			return 'running-failed';
		}
		else {
			if (this.results == null) return 'none';

			if (this.results.counts.success()) return 'success';

			return 'failed';
		}
	}


}




module.exports = Spec;