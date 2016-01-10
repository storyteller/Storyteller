var Immutable = require('immutable');
var Specification = require('./specification');
var Counts = require('./counts');

function statusForResults(results){
    if (!results) return 'none';
    
    var counts = new Counts(results.results.counts);
    if (counts.success()) return 'success';
    
    return 'failed';
}

class SpecRecord extends Immutable.Record({id: null, spec: null, version: 0, last_result: null, state: 'none', status: 'none'}) {
    constructor(data, library, last_result){
        var spec = new Specification(data, library);

        super({id: data.id, spec: spec, version: 0, last_result: last_result, status: statusForResults(last_result)});
    }
    
    get lifecycle() {
        return this.spec.lifecycle;
    }
    
    get title(){
        return this.spec.title;
    }
    
    get mode(){
        return this.spec.mode;
    }
    
    get activeContainer(){
        return this.spec.activeContainer;
    }
    
    markRunning(){
        return this.set('state', 'running');
    }
    
    isDirty(){
        return this.spec.isDirty();
    }
    
    canRedo(){
        return this.spec.canRedo();
    }
    
    canUndo(){
        return this.spec.canUndo();
    }
    
    editors(loader){
        return this.spec.editors(loader);
    }
    
    outline(){
        return this.spec.outline();
    }
    
    buildResults(loader){
        return this.spec.buildResults(loader);
    }
    
    previews(loader){
        return this.spec.previews(loader);
    }
    
    replace(spec){
        return this.set('spec', spec);
    }
    
    recordLastResult(result){
        return this.set('state', 'none').set('last_result', result).set('status', statusForResults(result));
    }
    
    hasResults(){
        return this.last_result != null;
    }
    
    icon(){
        if (this.state == 'running'){
            return 'running';
            // TODO -- need to add the progress counts here?
            /*
            var counts = QueueState.runningCounts();
            if (!counts.anyResults()) return 'running';

            if (counts.success()) return 'running-success';
            
            return 'running-failed';
            */
        }

        return this.status;
    }


}

module.exports = SpecRecord;