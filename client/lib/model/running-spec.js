var Immutable = require('immutable');
var Specification = require('./specification');
var Counts = require('./counts');
var _ = require('lodash');

class RunningSpec extends Immutable.Record({spec: null, list: [], version: 0})
{
    constructor(data, library){
        var spec = new Specification(data, library);
        
        super({spec: spec, version: 0});
        
        
    }
    
    get id(){
        return this.spec.id;
    }
    
    get loading(){
        return this.spec.mode == 'header';
    }
    
    replaceData(data){
        var newSpec = new Specification(data, this.spec.fixture);
        this.list.forEach(x => newSpec.readResult(x));
        
        return this.set('spec', newSpec);
    }
    
    readResult(result){
        this.list.push(result);
        if (!this.loading){
            this.spec.readResult(result);
        }
        
        var newVersion = this.version + 1;
        return this.set('version', newVersion);
    }
    
    buildResults(loader){
        if (this.loading){
            return loader.noResults();
        }
        
        return this.spec.buildResults(loader);
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
    
    isDirty(){
        return this.spec.isDirty();
    }
    
    canRedo(){
        return this.spec.canRedo();
    }
    
    canUndo(){
        return this.spec.canUndo();
    }
    
    icon(running, queued, progress){
        if (!running) return 'running';
        
        return {
            'none': 'running', 
            'success': 'running-success', 
            'failed': 'running-failed'}[running.status];
    }
    
    hasResults(){
        return this.list.length > 0;
    }

    acceptChange(func){
        var version = this.get('version') + 1;
        func(this.spec);
        
        return this.set('version', version)
    }
    
}

module.exports = RunningSpec;