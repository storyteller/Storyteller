var _ = require("lodash");
var Counts = require('./counts');

class Spec{
	constructor(data){
		this.name = data.name;
		this.id = data.id;
		this.lifecycle = data.lifecycle || 'Acceptance';

		this.state = 'none'; // can be queued or running as well
		this.results = null;
		this.runningCounts = null;

		if (data.results){
			this.recordResults(data.results);
		}
	}


	status(){
		if (this.results == null) return 'none';

		if (this.results.counts.success()) return 'success';

		return 'failed';
	}

	recordResults(results){
		this.state = 'none';
		this.results = results;
		if (results.counts){
			this.results.counts = new Counts(results.counts);
		}


		this.runningCounts = null;
	}

	hasResults(){
		return (this.results);
	}

	recordRunningResults(counts){
		this.state = 'running';
		this.runningCounts = counts;
	}

	icon(){
		if (this.state == 'running'){
			if (this.runningCounts){
				if (this.runningCounts.success()) return 'running-success';

				return 'running-failed';
			}
			else {
				return 'running';
			}
		}
		else {
			if (this.results == null) return 'none';

			if (this.results.counts.success()) return 'success';

			return 'failed';
		}
	}


}




module.exports = Spec;