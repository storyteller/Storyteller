import {SystemRecycled, FixturesUpdated} from './system-recycled';
var HierarchyLoaded = require('./hierarchy-loaded');
var BatchRunResponse = require('./batch-run-response');
var Immutable = require('immutable');
var Specification = require('./../model/specification');
var SpecRecord = require('./../model/spec-record');
var Suite = require('./../model/suite');
var Counts = require('./../model/counts');
var _ = require('lodash');
var Postal = require('postal');
import {AlterBreakpoints, SendBreakpoints, NextStep} from './breakpoints';
import {expandAll, collapseAll, specAdded, specDeleted, toggleTreeState, specStatusFilterChanged, lifecycleFilterChanged} from './tree-state'
import {updateSpec, replaceRunning, recordResult, specData} from './specs'
import {queueState, specProgress, specExecutionCompleted} from './progress'
import {goHome, goEnd, goNext, goPrevious, undo, redo, addItem, selectCell, selectHolder} from './navigation'

var initialState = Immutable.Map({
    'lifecycle-filter': 'any', 
    'status-filter': 'any',
    'tree-state': Immutable.Map({}),
    'specs': Immutable.Map({}),
    'running': null,
    'queued': [],
    'progress': null,
    'running-spec': null
});



function Reducer(state = initialState, action){
  switch (action.type) {
    case 'reset-all':
        state = initialState;
        state = SystemRecycled(state, action.initialization.recycled);
        return HierarchyLoaded(state, action.initialization.hierarchy);
      
    case '@@redux/INIT':
        return state;
      
    case 'initial-model':
        var one = SystemRecycled(state, action.recycled);
        var two = HierarchyLoaded(one, action.hierarchy);
        
        var suite = two.get('hierarchy');
        if (suite.allSpecs().length > 50){
            return collapseAll(two);
        }
        else {
            return expandAll(two);
        }

      
    case 'system-recycled':
      return SystemRecycled(state, action);
      
    case 'system-recycle-start':
      return state.updateIn(['system-state', 'recycling'], _ => true);

    case 'fixtures-reloaded':
      return FixturesUpdated(state, action);
      
    case 'batch-run-response':
      return BatchRunResponse(state, action);
      
    case 'hierarchy-loaded':
        return HierarchyLoaded(state, action);
        
    case 'spec-added':
        return specAdded(state, action);
            
    case 'spec-deleted':
        return specDeleted(state, action);
      
    case 'suite-added':
        return state
            .set('hierarchy', new Suite(action.hierarchy, null));
      
    case 'expand-all':
        return expandAll(state);
        
    case 'collapse-all':
        return collapseAll(state);
     
    case 'toggle-tree-state':
        return toggleTreeState(state, action);
     
    case 'spec-status-filter-changed':
        return specStatusFilterChanged(state, action);
        
    case 'lifecycle-filter-changed':
        return lifecycleFilterChanged(state, action);
        
    case 'spec-data':
        return specData(state, action);

    case 'queue-state':
        return queueState(state, action);
        
    case 'spec-progress':
        return specProgress(state, action);

    case 'spec-execution-completed':
        return specExecutionCompleted(state, action);

    case 'step-result':
        return recordResult(state, action);
        
    case 'set-verification-result':
        return recordResult(state, action);

    case 'alter-breakpoints':
        return AlterBreakpoints(state, action);

    case 'next-step':
        return NextStep(state, action);
    
    case 'go-home':
        return goHome(state, action);
    
    case 'go-end':
        return goEnd(state, action);
    
    case 'go-next':
        return goNext(state, action);
    
    case 'go-previous':
        return goPrevious(state, action);
    
    case 'undo':
        return undo(state, action);
        
    case 'redo':
        return redo(state, action);

    case 'add-item':
        return addItem(state, action);
    
    case 'select-cell':
        return selectCell(state, action);
    
    case 'select-holder':
        return selectHolder(state, action);
        
    case 'changes':
        return updateSpec(state, action.id, spec => spec.apply(action.change));
    

    case 'spec-saved':
        return state.updateIn(['specs', action.spec.id], r => r.replaceData(action.spec));
    
     
    default:
      console.log("Reducer does not know how to handle: " + action.type);
      return state;
  }
}

function Batched(state, action){
    if (action.type == 'batch'){
        for (var i = 0; i < action.messages.length; i++){
            state = Reducer(state, action.messages[i]);
        }
        
        return state;
    }

    state = Reducer(state, action);



    // TODO -- move this to more formal middleware
    if (action.type == 'alter-breakpoints'){
        SendBreakpoints(state, action);
    }

    if (action.type == 'spec-execution-completed' && action.mode != 'normal'){
        if (window != undefined){
            window.location = '#/spec/results/' + action.id;
        }
    }

    if (action.type == 'suite-added' && window != undefined){
        window.location = '#/suite/' + action.path;
    }


    return state;
}


module.exports = Batched;