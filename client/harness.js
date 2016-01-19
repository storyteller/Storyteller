var Postal = require('postal');
var app = require('./components/app');
var AllSpecData = require('./all-spec-data');

var initialization = require('./initialization');


if (location.search.includes('batch=true')){
    var BatchReport = require('./components/batching/batch-report');
    var batch_report_data = require('./batch-run-response-data');
    
    BatchReport(batch_report_data);
}
else {
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
        
        var communicator = {
            send(message){
                var json = JSON.stringify(message);
                console.log('Sent to backend: ' + json);
            }
        }
        
        require('./lib/presentation/spec-editor-presenter')(store, communicator);
    }




    var startRouting = app(initialization, register);
    startRouting();
}















