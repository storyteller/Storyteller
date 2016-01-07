var _ = require('lodash');
var SpecRecord = require('./../model/spec-record');
var Immutable = require('immutable');
var Suite = require('./../model/suite');

        // 'lifecycle-filter'
        // 'status-filter'
        // 'hierarchy'
        // 'specs'

function HierarchyLoaded(state, action){
    var library = state.get('fixtures');
    var specs = {};
    action.specs.forEach(x => {
        var record = SpecRecord(x.data, library, x.last_result);
        specs[record.id] = record;
    });
    
    var specMap = Immutable.Map(specs);
    state = state.set('specs', specMap);
    
    var hierarchy = new Suite(action.hierarchy, null, library, specs);
    state = state.set('hierarchy', hierarchy);
    
    return state;
}

module.exports = HierarchyLoaded;