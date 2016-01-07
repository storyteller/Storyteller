var Immutable = require('immutable');
var Specification = require('./specification');



class SpecRecord extends Immutable.Record({id: null, spec: null, version: 0, last_result: null, running: false}) {
    constructor(data, library, last_result){
        var spec = new Specification(data, library);
        super({id: data.id, spec: spec, version: 0, last_results: last_result});
        
        
    }
    
    get lifecycle() {
        return this.spec.lifecycle;
    }
    
    recordLastResult(result){
        return this.set('last_result', result);
    }
    
    status(){
        // do something here!
        
        return 'none';
    }

}

module.exports = SpecRecord;