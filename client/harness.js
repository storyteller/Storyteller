var Postal = require('postal');
var startRouting = require('./components/app');

var AllSpecData = require('./all-spec-data');
var Hierarchy = require('./lib/specs/hierarchy');

Hierarchy.reset(); // just forcing it to get loaded

Postal.publish({
	channel: 'engine',
	topic: 'hierarchy-loaded',
	data: {hierarchy: AllSpecData.hierarchy}
});

Storyteller.initialization.fixtures = AllSpecData.fixtures;

Postal.publish({
	channel: 'engine',
	topic: 'system-recycled',
	data: Storyteller.initialization
});

Postal.subscribe({
	channel: 'engine-request',
	topic: '*',
	callback: function(data){
		//alert(JSON.stringify(data));

	}
});


Postal.subscribe({
	channel: 'engine-request',
	topic: 'spec-data-requested',
	callback: function(data){
		var spec = AllSpecData.specs[data.id];

		Postal.publish({
			channel: 'engine',
			topic: 'spec-data',
			data: {id: data.id, data: spec}
		});

	}
});

Postal.subscribe({
	channel: 'engine-request',
	topic: 'run-spec',
	callback: function(data){
		var results = AllSpecData.results[data.id];

		if (!results){
			throw new Error('no results for ' + data.id);
		}


		console.log('wanting to run specification ' + data.id);


		results.forEach(function(x){
			Postal.publish({
				channel: 'engine',
				topic: x.type,
				data: x
			});
		});


	}
});

startRouting();


Postal.publish({
	channel: 'engine',
	topic: 'system-recycled',
	data: Storyteller.initialization
});
