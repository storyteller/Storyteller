var Immutable = require('immutable');
var Specification = require('./specification');

function ExtendRecord(record){
    // apply changes
    // record results
    // status
}

function SpecRecord(data, library, last_results){
    var spec = new Specification(data, library);
    var record = Immutable.Record({id: spec.id, spec: spec, version: 0, last_results: last_results});
    
    ExtendRecord(record);
    
    return record;
}

module.exports = SpecRecord;