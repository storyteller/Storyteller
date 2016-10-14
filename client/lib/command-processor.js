var filterSuite = require('./filter-suite');
var changes = require('./model/change-commands');
var ToggleLifecycle = require('./model/toggle-lifecycle');
var Postal = require('postal');

function CommandProcessor(communicator, store){
    var findFilteredSpecs = suite => {
        var state = store.getState();
        
        var status = state.get('status-filter');
        var lifecycle = state.get('lifecycle-filter');
        var specs = state.get('specs');
        
        var filtered = filterSuite(suite, specs, status, lifecycle);
        return filtered.allSpecs().map(id => specs.get(id));
    }
    
    this["run-specs"] = data => {
        var specs = findFilteredSpecs(data.suite);
       
        specs.forEach(spec => {
            var message = {
                type: 'run-spec',
                id: spec.id,
                spec: spec.write(),
                revision: spec.revision
            };
            
            communicator.send(message);

        });

        communicator.send({type: 'run-specs', list: heads.map(x => x.id)});
    };
    
    this["mark-as-acceptance"] = data => {
        var specs = findFilteredSpecs(data.suite);

        _.filter(specs, x => x.lifecycle == 'Regression').forEach(spec => {
            store.dispatch({type: 'changes', id: spec.id, change: new ToggleLifecycle()});
        });
    };
    
    this["mark-as-regression"] = data => {
        var specs = findFilteredSpecs(data.suite);

        _.filter(specs, x => x.lifecycle == 'Acceptance').forEach(spec => {
            store.dispatch({type: 'changes', id: spec.id, change: new ToggleLifecycle()});
        });
    }
    
    
}

module.exports = function startHandling(communicator, store){
    var processor = new CommandProcessor(communicator, store);
    
    Postal.subscribe({
        channel: 'commands',
        topic: '*',
        callback: (data, env) => {
            if (processor.hasOwnProperty(env.topic)){
                processor[env.topic](data);
            }   
        }
    })
}

