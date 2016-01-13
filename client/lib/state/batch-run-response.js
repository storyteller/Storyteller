var Immutable = require('immutable');
var FixtureLibrary = require('./../fixtures/fixture-library');
var SpecRecord = require('./../model/spec-record');


module.exports = function BatchRunResponse(state, action){
    var library = new FixtureLibrary(action.fixtures);
    
    state = state
        .set('time', action.time)
        .set('system', action.system)
        .set('suite', action.suite)
        .set('fixtures', library);
        
    var specs = {};
    action.records.forEach(x => {
        var completed = {
            data: x.specification,
            results: x.results,
            time: action.time,
            id: x.specification.id
        }
        
        var spec = new SpecRecord(x.specification, library).recordLastResult(completed);
        
        specs[spec.id] = spec; 
    });
    
        
    return state.set('specs', new Immutable.Map(specs));
}