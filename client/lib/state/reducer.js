import {SystemRecycled, FixturesUpdated} from './system-recycled';
var HierarchyLoaded = require('./hierarchy-loaded');
var BatchRunResponse = require('./batch-run-response');
var Immutable = require('immutable');
var Specification = require('./../model/specification');
var SpecRecord = require('./../model/spec-record');
var RunningState = require('./../model/running-state');
var Suite = require('./../model/suite');
var Counts = require('./../model/counts');
var _ = require('lodash');
import {AlterBreakpoints, SendBreakpoints, NextStep} from './breakpoints';

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

function updateSpec(state, id, func){
    try {
        return state.updateIn(['specs', id], r => r.acceptChange(func));
    }
    catch (e){
        console.error('Error trying to update spec: ' + id);
        throw e;
    }
    
}

function expandAll(state){
    var treeState = state.get('tree-state').toJS();
    var suite = state.get('hierarchy');
    
    suite.allSuites().forEach(s => treeState[s.path] = true);
    
    return state.set('tree-state', Immutable.Map(treeState));
}

function collapseAll(state){
    var treeState = {};
    var suite = state.get('hierarchy');
    
    suite.allSuites().forEach(s => treeState[s.path] = false);
    
    return state.set('tree-state', Immutable.Map(treeState));
}

function replaceRunning(state, running){
    var currentRunning = state.get('running');
    
    if (running == null && currentRunning != null){
        return state.set('running', null).set('running-spec', null);
    }
    
    if (running != null && (currentRunning == null || currentRunning.id != running)){
        state = state.set('running', new RunningState(running));

        var record = state.get('specs').get(running);
        return state.set('running-spec', record.forRunning());
    }

    return state;
}

function recordResult(state, action){
    var runningState = state.get('running-spec');
    if (!runningState || runningState.id != action.spec) return state;
    
    return state.update('running-spec', x => x.readResult(action));
}

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
        var library = state.get('fixtures');
        var spec = new SpecRecord(action.data, library, null);
        return state
            .set('hierarchy', new Suite(action.hierarchy, null))
            .setIn(['specs', action.data.id], spec);
            
    case 'spec-deleted':
        return state
            .set('hierarchy', new Suite(action.hierarchy, null))
            .deleteIn(['specs', action.id]);
      
    case 'suite-added':
        return state
            .set('hierarchy', new Suite(action.hierarchy, null));
      
    case 'expand-all':
        return expandAll(state);
        
    case 'collapse-all':
        return collapseAll(state);
     
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
        state = state.updateIn(['specs', action.id], x => x.replace(spec));
        if (state.get('running-spec') != null){
            state = state.update('running-spec', x => x.replaceData(action.data))
        }
        return state;


    case 'queue-state':
        state = replaceRunning(state, action.running);

        state = state.set('running-mode', action.mode);
    
        if (!_.isEqual(state.get('queued'), action.queued)){
            return state.set('queued', action.queued);
        }
        else {
            return state;
        }
        
    case 'spec-progress':
        state = replaceRunning(state, action.id);
        state = state.update('running', x => x.updateCounts(action));
    
        return state.set('progress', action);

    case 'spec-execution-completed':
        var running = state.get('running');
        if (running && running.id == action.id){
            state = state.set('running', null);
        }
    
        return state.updateIn(['specs', action.id], record => record.recordLastResult(action));

    case 'step-result':
        return recordResult(state, action);
        
    case 'set-verification-result':
        return recordResult(state, action);

    case 'alter-breakpoints':
        return AlterBreakpoints(state, action);

    case 'next-step':
        return NextStep(state, action);
    
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


    return state;
}


module.exports = Batched;