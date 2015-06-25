var _ = require('lodash');
var Counts = require('./../model/counts');

var queued = {running: null, queued: []};

var hasChanges = function(original, next){
	if (!(original.running === next.running)){
		return true;
	}

	if (original.queued.length != next.queued.length) return true;

	var one = _.sortBy(original.queued, x => x.toString());
	var two = _.sortBy(next.queued, x => x.toString());



	for (var i = 0; i < one.length; i++){
		if (one[i] != two[i]) return true;
	}

	return false;
}

module.exports = {
	clear(){
		queued = {queued:[]}
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
		if (!data.queued) data.queued = [];

		var changed = hasChanges(queued, data);

		queued = data;

		return changed;
	},

}