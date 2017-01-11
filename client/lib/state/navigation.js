import {updateSpec} from './specs'

export function goHome(state, action){
    return updateSpec(state, action.id, spec => spec.navigator.moveFirst());
}

export function goEnd(state, action){
    return updateSpec(state, action.id, spec => spec.navigator.moveLast());
}

export function goNext(state, action){
    return updateSpec(state, action.id, spec => spec.navigator.moveNext());
}

export function goPrevious(state, action){
    return updateSpec(state, action.id, spec => spec.navigator.movePrevious());
}

export function undo(state, action){
    return updateSpec(state, action.id, spec => spec.undo());
}

export function redo(state, action){
    return updateSpec(state, action.id, spec => spec.redo());
}    

export function addItem(state, action){
    return updateSpec(state, action.id, spec => {
        var navigator = spec.navigator;
        var location = navigator.location;
        if (location.holder){
            var next = location.holder.fixture.addAndSelect(location);
            navigator.replace(next);
        }
    });
}
        
export function selectCell(state, action){
    return updateSpec(state, action.id, spec => {
        spec.selectCell(action.step, action.cell);
    });
}

export function selectHolder(state, action){
    return updateSpec(state, action.id, spec => {
        spec.selectHolder(action.holder);
    });
}
    

        
