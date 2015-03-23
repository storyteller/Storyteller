var Postal = require('postal');
var Communicator = require('./lib/communicator');

var startRouting = require('./components/app');

require('./lib/specs/hierarchy').reset(); // just forcing it to get loaded
require('./lib/specification-store').reset(); // just forcing it to get loaded

Postal.publish({
	channel: 'engine',
	topic: 'hierarchy-loaded',
	data: {hierarchy: Storyteller.hierarchy}
});


Postal.publish({
	channel: 'engine',
	topic: 'system-recycled',
	data: Storyteller.initialization
});

var communicator = new Communicator(Storyteller.wsAddress, startRouting);


Postal.subscribe({
	channel: 'engine',
	topic: 'spec-node-added',
	callback: function(data){
		var href = '#/spec/editing/' + data.node.id;
		window.location = href;
	}
});