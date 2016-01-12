import SystemRecycled from './system-recycled';
var HierarchyLoaded = require('./hierarchy-loaded');
var Immutable = require('immutable');
var Specification = require('./../model/specification');
var Counts = require('./../model/counts');
var _ = require('lodash');

var initialState = Immutable.Map({
    'lifecycle-filter': 'any', 
    'status-filter': 'any',
    'tree-state': Immutable.Map({}),
    'specs': Immutable.Map({}),
    'running': null,
    'queued': [],
    'progress': null
});

function updateSpec(state, id, func){
    try {
        return state.updateIn(['specs', id], r => r.acceptChange(func));
    }
    catch (e){
        console.error('Error trying to update spec: ' + id);
        throw e;
    }
    
}

module.exports = function Reducer(state = initialState, action){
  switch (action.type) {
    case 'initial-model':
        var one = SystemRecycled(state, action.recycled);
        return HierarchyLoaded(one, action.hierarchy);
      
    case 'system-recycled':
      return SystemRecycled(state, action);
      
    case 'system-recycle-start':
      return state.updateIn(['system-state', 'recycling'], _ => true);
      
    case 'hierarchy-loaded':
        return HierarchyLoaded(state, action);
      
    case 'expand-all':
        var treeState = state.get('tree-state').toJS();
        var suite = state.get('hierarchy');
        
        suite.allSuites().forEach(s => treeState[s.path] = true);
        
        return state.set('tree-state', Immutable.Map(treeState));
        
    case 'collapse-all':
        var treeState = {};
        var suite = state.get('hierarchy');
        
        suite.allSuites().forEach(s => treeState[s.path] = false);
        
        return state.set('tree-state', Immutable.Map(treeState));
     
    case 'toggle-tree-state': 
        if (state.get('tree-state').has(action.path)){
            return state.updateIn(['tree-state', action.path], x => !x);
        }
    
        return state.setIn(['tree-state', action.path], false);
     
    case 'spec-status-filter-changed':
        return state.set('status-filter', action.status);
        
    case 'lifecycle-filter-changed':
        return state.set('lifecycle-filter', action.lifecycle);
        
    case 'spec-data':
        var library = state.get('fixtures');
        var spec = new Specification(action.data, library);
        return state.updateIn(['specs', action.id], x => x.replace(spec));
    
    case 'queue-state':
        var one = state.set('running', action.running);
        if (!_.isEqual(state.get('queued'), action.queued)){
            return one.set('queued', action.queued);
        }
        else {
            return one;
        }
        
    case 'spec-progress':
        action.counts = new Counts(action.counts);
        return state.set('running', action.id).set('progress', action);

    case 'spec-execution-completed':
        // TODO -- clear the results out
        return state.updateIn(['specs', action.id], record => record.recordLastResult(action));

   
    case 'clear-all-results':
        throw new Error('Do this!');
   
    case 'step-result':
        if (state.get('specs').get(action.spec).mode == 'header') return state;
    
        return updateSpec(state, action.spec, spec => spec.logResult(action));
    
    case 'set-verification-result':
        if (state.get('specs').get(action.spec).mode == 'header') return state;
    
        return updateSpec(state, action.spec, spec => spec.logResult(action));
    
    case 'go-home':
        return updateSpec(state, action.id, spec => spec.navigator.moveFirst());
    
    case 'go-end':
        return updateSpec(state, action.id, spec => spec.navigator.moveLast());
    
    case 'go-next':
        return updateSpec(state, action.id, spec => spec.navigator.moveNext());
    
    case 'go-previous':
        return updateSpec(state, action.id, spec => spec.navigator.movePrevious());
    
    case 'undo':
        return updateSpec(state, action.id, spec => spec.undo());
        
    case 'redo':
        return updateSpec(state, action.id, spec => spec.redo());

    case 'add-item':
        return updateSpec(state, action.id, spec => {
            var navigator = spec.navigator;
            var location = navigator.location;
            if (location.holder){
                var next = location.holder.fixture.addAndSelect(location);
                navigator.replace(next);
            }
        });
    
    case 'select-cell':
        return updateSpec(state, action.id, spec => {
            spec.selectCell(action.step, action.cell);
        });
    
    case 'select-holder':
        return updateSpec(state, action.id, spec => {
            spec.selectHolder(action.holder);
        });
        
    case 'changes':
        return updateSpec(state, action.id, spec => spec.apply(action.change));
    
    case 'bump-spec-date':
    
    case 'updated-spec-header':
    
     
    default:
      console.log("Reducer does not know how to handle: " + action.type);
      return state;
  }
}