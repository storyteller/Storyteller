var Postal = require('postal');
var app = require('./components/app').default;
var disconnect = require('./components/disconnected').default;

export default function(component){
    // TODO -- HOKEY!!!!!
    var theStore = null;
    var startRouting = app(Storyteller.initialization, component, store => {
        theStore = store;

        Postal.subscribe({
            channel: 'engine',
            topic: '*',
            callback: (data, env) => {
                data.type = env.topic;
                store.dispatch(data);
            }
        });

        
    });

    var Communicator = require('./communicator');
    var wsAddress = Storyteller.wsAddress;

    var rebroadcast = m => {
        Postal.publish({
            channel: 'engine',
            topic: m.type,
            data: m
        });
    }

    var dispatch = msg => {
        theStore.dispatch(msg);

        switch (msg.type){
            case 'spec-added':
                var href = '#/spec/editing/' + msg.data.id;
                window.location = href;

            case 'spec-saved':
                rebroadcast(msg);

            case 'runtime-error':
                rebroadcast(msg);
        }
    }

    var communicator = new Communicator(dispatch, wsAddress, disconnect);

    require('./lib/command-processor')(communicator, theStore);
    require('./lib/presentation/spec-editor-presenter')(theStore, communicator);

    startRouting();
}


