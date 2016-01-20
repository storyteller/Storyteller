var Immutable = require('immutable');
var Specification = require('./specification');
var Counts = require('./counts');
var _ = require('lodash');
var FixtureLibrary = require('./../fixtures/fixture-library');
var RunningSpec = require('./running-spec');

function statusForResults(results){
    if (!results) return 'none';
    
    var counts = new Counts(results.results.counts);
    if (counts.success()) return 'success';
    
    return 'failed';
}

class SpecRecord extends Immutable.Record({id: null, spec: null, version: 0, last_result: null, status: 'none'}) {
    constructor(data, library, last_result){
        var spec = new Specification(data, library);

        super({id: data.id, spec: spec, version: 0, last_result: last_result, status: statusForResults(last_result)});
    }
    
    forResults(){
        var data = this.last_result.data;
        data.path = this.spec.path;
        var spec = new Specification(data, this.spec.fixture);
        spec.readResults(this.last_result.results);
        
        return this.set('spec', spec);
    }
    
    forRunning(){
        var data = this.spec.write();
        return new RunningSpec(data, this.spec.fixture);
    }
    
    get path(){
        return this.spec.path;
    }
    
    get revision(){
        return this.spec.revision();
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
    
    replaceLibrary(library){
        var data = this.spec.write();
        return this.set('spec', new Specification(data, library));
    }
    
    replaceData(data){
        var spec = new Specification(data, this.spec.fixture);
        return this.set('spec', spec);
    }
    
    buildResults(loader){
        if (this.hasResults()){
            var library = this.spec.fixture;
            
            var spec = new Specification(this.last_result.data, library);
            spec.readResults(this.last_result.results);
            
            return spec.buildResults(loader);
        }
        
        return loader.noResults();
    }
    
    
    
    previews(loader){
        return this.spec.previews(loader);
    }
    
    replace(spec){
        return this.set('spec', spec);
    }
    
    recordLastResult(result){
        this.spec.clearResults();
        return this.set('last_result', result).set('status', statusForResults(result));
    }
    
    clearResults(){
        return this.set('last_result', null).set('status', 'none');
    }
    
    hasResults(){
        return this.last_result != null;
    }
    
    icon(running, queued, progress){
        if (running && this.id == running.id){
            return {
                'none': 'running', 
                'success': 'running-success', 
                'failed': 'running-failed'}[running.status];

        }
        else if (_.includes(queued, this.id)){
            return 'queued';
        }
        else if (this.hasResults()){
            return this.status;
        }
        else {
            return 'none';
        }


    }

    acceptChange(func){
        var version = this.get('version') + 1;
        func(this.spec);
        
        return this.set('version', version)
    }
    
    write(){
        return this.spec.write();
    }
    
    

}

module.exports = SpecRecord;