import {replaceRunning} from './specs'
var _ = require('lodash');

export function queueState(state, action){
    state = replaceRunning(state, action.running);

    state = state.set('running-mode', action.mode);

    if (!_.isEqual(state.get('queued'), action.queued)){
        return state.set('queued', action.queued);
    }
    else {
        return state;
    }
}

export function specProgress(state, action){
    state = replaceRunning(state, action.id);
    state = state.update('running', x => x.updateCounts(action));

    return state.set('progress', action);
}

export function specExecutionCompleted(state, action){
    var running = state.get('running');
    if (running && running.id == action.id){
        state = state.set('running', null);
    }

    return state.updateIn(['specs', action.id], record => record.recordLastResult(action));
}