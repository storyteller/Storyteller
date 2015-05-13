var _ = require('lodash');
var Counts = require('./counts');

var queued = {running: null, queued: []};


module.exports = {
	clear(){
		queued = {}
	},

	stateFor(id){
		if (queued.running == id) return 'running';

		if (queued.queued){
			if (_.include(queued.queued, id)){
				return 'queued';
			}
		}

		return 'none';
	},

	runningCounts(){
		return queued.runningCounts || new Counts(0, 0, 0, 0);
	},

	markRunning(id, counts){
		queued.running = id;
		queued.runningCounts = counts || new Counts(0, 0, 0, 0);
	},

	markCompleted(id){
		if (queued.running == id){
			queued.running = null;
		}
	},

	store(data){
		queued = data;
	},

}