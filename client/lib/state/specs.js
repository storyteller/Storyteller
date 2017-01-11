var Specification = require('./../model/specification');
var RunningState = require('./../model/running-state');


export function updateSpec(state, id, func){
    try {
        return state.updateIn(['specs', id], r => r.acceptChange(func));
    }
    catch (e){
        console.error('Error trying to update spec: ' + id);
        throw e;
    }
    
}



export function replaceRunning(state, running){
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

export function recordResult(state, action){
    var runningState = state.get('running-spec');
    if (!runningState || runningState.id != action.spec) return state;
    
    return state.update('running-spec', x => x.readResult(action));
}

export function specData(state, action){
    var library = state.get('fixtures');
    var spec = new Specification(action.data, library);
    state = state.updateIn(['specs', action.id], x => x.replace(spec));
    if (state.get('running-spec') != null){
        state = state.update('running-spec', x => x.replaceData(action.data))
    }

    return state;
}

