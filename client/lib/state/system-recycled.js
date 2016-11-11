
var {Record, Map, fromJS} = require('immutable');
var _ = require('lodash');
var FixtureLibrary = require('./../fixtures/fixture-library');
var Immutable = require('immutable');

export function FixturesUpdated(state, action){
    var library = new FixtureLibrary(action.fixtures);
    return state.set('fixtures', library);
}

export function SystemRecycled(state, action) {
    var system = _.extend({}, action);
    
    delete system.fixtures;
    delete system.types;
    system.recycling = false;
    
    var systemState = fromJS(system);
    
    state = FixturesUpdated(state, action);
    
    if (state.has('specs')){
        var specArray = state.get('specs').toList().toArray();
        var specs = {};
        
        specArray.forEach(x => {
            specs[x.id] = x.replaceLibrary(library);
        });
        
        state = state.set('specs', new Immutable.Map(specs));
    }


    return state.set('system-state', systemState);
}

