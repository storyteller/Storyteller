var Immutable = require('immutable');
var Specification = require('./specification');
var Counts = require('./counts');
var _ = require('lodash');

class RunningSpec extends Immutable.Record({spec: null, list: [], version: 0})
{
    constructor(data, library){
        var spec = new Specification(data, library);
        
        super({spec: spec});
        
        
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
        if (this.loading){
            this.list.push(result);
        }
        else {
            this.spec.readResult(result);
        }
        
        var newVersion = this.version + 1;
        return this.set('version', newVersion);
    }
    
}

module.exports = RunningSpec;