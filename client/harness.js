var Postal = require('postal');
var startRouting = require('./components/app');
var AllSpecData = require('./all-spec-data');

var initialization = require('./initialization');


Postal.subscribe({
	channel: 'engine-request',
	topic: '*',
	callback: function(data, env){
		console.log('Sent to engine (' + env.topic + '): ' + JSON.stringify(data));
	}
});


function register(store){
    Postal.subscribe({
        channel: 'engine-request',
        topic: 'spec-data-requested',
        callback: function(data){
            var spec = AllSpecData.specs[data.id];
            store.dispatch({type: 'spec-data', id: data.id, data: spec});
        }
    });

    Postal.subscribe({
        channel: 'engine-request',
        topic: 'run-spec',
        callback: function(data){
            var results = AllSpecData.results[data.id];

            results.data = AllSpecData.specs[data.id];

            if (!results){
                throw new Error('no results for ' + data.id);
            }

            Postal.publish({
                channel: 'engine',
                topic: 'spec-execution-completed',
                data: results
            });


        }
    });
}


startRouting(initialization, register);










