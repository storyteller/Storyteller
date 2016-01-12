var { createHistory } = require('history');
var Broadcaster = require('./../broadcaster');
var Postal = require('postal');
var changes = require('./../model/change-commands');

function applyOutstandingChanges(){
  // If any thing is open, pack it in now
  Broadcaster.toEditor('apply-changes');
}

function parentLocation(location){
  var holder = location.holder;
  return {holder: holder.parent, step: holder};
}

var store = null;
var communicator = null;
var spec = null;
var subscriptions = [];

function setLocation(location){
    console.log('location is ' + JSON.stringify(location));
    var parts = location.hash.split('/');
    if (parts[1] == 'spec'){
        spec = parts[3].split('?')[0];
    }
    else if (parts[0] = '#spec'){
        spec = parts[2].split('?')[0];
    }
    else {
        spec = null;
    }
    
    console.log('spec was set to ' + spec);
}

var history = createHistory();
history.listen(location => {
    setLocation(location);
});

function subscribe(topic, callback, channel = 'editor'){
    Postal.subscribe({
        channel: channel,
        topic: topic,
        callback: (data, env) => {
            console.log('GOT: ' + env.topic);
            console.log('Spec is ' + spec);
            
            if (spec){
                callback(data, env);
            }
            
        }
    });
}

function navigate(topic){
    subscribe(topic, x => {
        applyOutstandingChanges();
        store.dispatch({type: topic, id: spec});
    });
}

navigate('go-home');
navigate('go-end');
navigate('go-next');
navigate('go-previous');
navigate('undo');
navigate('redo');
navigate('add-item');

var gotoResults = () => window.location = '#spec/results/' + spec;

var gotoPreview = () => window.location = '#spec/preview/' + spec;
subscribe('go-preview', gotoPreview);


subscribe('go-editing', x => window.location = '#spec/editing/' + spec);

subscribe('go-results', gotoResults);

subscribe('run-spec', x => {
    applyOutstandingChanges();
    var record = store.get('specs').get(spec);
    
    var message = {
        type: 'run-spec',
        id: spec,
        spec: record.write(),
        revision: record.revision()
    }
    
    communicator.send(message);

    gotoResults();  
});

subscribe('save-spec', x => {
    var record = store.get('specs').get(spec);
    
    var message = {
        type: 'save-spec-body',
        id: spec,
        spec: record.write(),
        revision: record.revision()
        
    }
    
    communicator.send(message);

    // TODO --for the persisting alert
    //this.view.setState({persisting: true});
});



function locationForReordering(){
    var record = store.get('specs').get(spec);
    var location = record.spec.navigator.location;
    if (location.step == location.holder.adder){
        location = parentLocation(location);
    }

    while (!location.holder.isHolder()){
        location = parentLocation(location);
    }

    return location;
}

function reorderUp(location){
    applyOutstandingChanges();

    if (!location){
        location = this.locationForReordering();
    }

    if (location.step && !location.holder.isFirst(location.step)){
        var change = changes.moveUp(location.holder, location.step);
        store.dispatch({type: 'changes', id: spec, change: change});
    }
}

  function reorderDown(location){
    applyOutstandingChanges();

    if (!location){
      location = this.locationForReordering();
    }

    if (location.step && !location.holder.isLast(location.step)){
      var change = changes.moveDown(location.holder, location.step);
      store.dispatch({type: 'changes', id: spec, change: change});
    }
  }

subscribe('reorder-up', data => reorderUp(data));

subscribe('reorder-down', data => reorderDown(data));
    
 
subscribe('select-cell', data => {
   if (!data.step){
       return;
   } 
   
   applyOutstandingChanges();
   store.dispatch({type: 'select-cell', step: data.step, cell: data.cell});
});

subscribe('select-holder', data => {
    applyOutstandingChanges();
    store.dispatch({type: 'select-holder', holder: data.holder});
});

subscribe('changes', data => {
    store.dispatch({type: 'changes', id: spec, change: data});
});

subscribe('clear-all-results', gotoPreview);

module.exports = function start(theStore, theCommunicator){
    store = theStore;
    communicator = theCommunicator;
}