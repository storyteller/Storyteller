var Immutable = require('immutable');
var SpecRecord = require('./../model/spec-record');
var Suite = require('./../model/suite');

export function expandAll(state){
    var treeState = state.get('tree-state').toJS();
    var suite = state.get('hierarchy');
    
    suite.allSuites().forEach(s => treeState[s.path] = true);
    
    return state.set('tree-state', Immutable.Map(treeState));
}

export function collapseAll(state){
    var treeState = {};
    var suite = state.get('hierarchy');
    
    suite.allSuites().forEach(s => treeState[s.path] = false);
    
    return state.set('tree-state', Immutable.Map(treeState));
}

export function specAdded(state, action){
    var library = state.get('fixtures');
    var spec = new SpecRecord(action.data, library, null);
    return state
        .set('hierarchy', new Suite(action.hierarchy, null))
        .setIn(['specs', action.data.id], spec);
}

export function specDeleted(state, action){
    return state
        .set('hierarchy', new Suite(action.hierarchy, null))
        .deleteIn(['specs', action.id]);
}

export function toggleTreeState(state, action){
    if (state.get('tree-state').has(action.path)){
        return state.updateIn(['tree-state', action.path], x => !x);
    }

    return state.setIn(['tree-state', action.path], false);
}

export function specStatusFilterChanged(state, action){
    return state.set('status-filter', action.status);
}

export function lifecycleFilterChanged(state, action){
    return state.set('lifecycle-filter', action.lifecycle);
}