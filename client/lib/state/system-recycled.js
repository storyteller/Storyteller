
var {Record, Map, fromJS} = require('immutable');
var _ = require('lodash');
var FixtureLibrary = require('./../fixtures/fixture-library');

export default function SystemRecycled(state, action) {
    var system = _.extend({}, action);
    
    delete system.fixtures;
    delete system.types;
    system.recycling = false;
    
    var systemState = fromJS(system);
    
    var library = new FixtureLibrary(action.fixtures);
    state = state.set('fixtures', library);
    
    // TODO -- do something with fixtures here too!
    return state.set('system-state', systemState);
}