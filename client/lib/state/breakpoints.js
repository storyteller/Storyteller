var Postal = require('postal');

export function AlterBreakpoints(state, action){
    var specs = state.get('specs');
    if (!specs.has(action.spec)){
        console.log("Unknown specification: " + action.spec);
        return;
    }

    var spec = state.get('specs').get(action.spec);
    if (!spec) return state;

    var func = null;

    switch (action.action){
        case 'set':
            func = s => s.setBreakpoint(action.id, action.position);
            break;

        case 'clear':
            func = s => s.clearBreakpoint(action.id, action.position);
            break;

        case 'clear-all':
            func = s => s.breakpoints = [];
            break;

        default: 
            return state;
    }

    state = state.updateIn(['specs', action.spec], r => r.acceptChange(func));

    var runningState = state.get('running-spec');
    if (!runningState || runningState.id != action.spec) return state;

    return state = state.updateIn(['running-spec'], r => r.acceptChange(func));
}

export function SendBreakpoints(state, action){
    if (!state.get('specs').has(action.spec)){
        console.log('Unknown specification ' + action.spec);
        return state;
    }

    var spec = state.get('specs').get(action.spec);

    Postal.publish({
        channel: 'engine-request',
        topic: 'set-breakpoints',
        data: {type: 'set-breakpoints', id: action.spec, breakpoints: spec.breakpoints()}
    });
    
}

export function NextStep(state, action){
    var runningState = state.get('running-spec');
    if (!runningState || runningState.id != action.spec) return state;


    if (!state.get('specs').has(action.spec)){
        console.log('Unknown specification ' + action.spec);
        return;
    }

    var breakpoint = {id: action.id, position: action.position};
    var change = r => r.acceptChange(s => s.nextStep = breakpoint);

    return state.updateIn(['running-spec'], change);
}