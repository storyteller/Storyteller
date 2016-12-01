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

    return state.updateIn(['specs', action.spec], r => r.acceptChange(func));
}

export function SendBreakpoints(state, action){
    if (!state.get('specs').has(action.spec)){
        console.log('Unknown specification ' + action.spec);
        return;
    }

    var spec = state.get('specs').get(action.spec);

    Postal.publish({
        channel: 'engine-request',
        topic: 'set-breakpoints',
        data: {type: 'set-breakpoints', id: action.spec, breakpoints: spec.breakpoints()}
    });
    
}

export function NextStep(state, action){
    if (!state.get('specs').has(action.spec)){
        console.log('Unknown specification ' + action.spec);
        return;
    }

    var spec = state.get('specs').get(action.spec);

    var breakpoint = {id: action.id, position: action.position};
    var change = r => r.acceptChange(s => s.nextStep = breakpoint);

    return state.updateIn(['specs', action.spec], change);
}