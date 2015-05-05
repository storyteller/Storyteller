var _ = require('lodash');

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

	markRunning(id){
		queued.running = id;
	},

	store(data){
		queued = data;
	}
}