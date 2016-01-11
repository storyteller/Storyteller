var TreeView = require('./tree-view');
var {connect} = require('react-redux');

function getExplorerState(state){
    var status = state.get('status-filter');
    var lifecycle = state.get('lifecycle-filter');
    
    return {
        suite: state.get('hierarchy'), 
        status: status, 
        lifecycle: lifecycle, 
        specs: state.get('specs'), 
        treeState: state.get('tree-state'),
        running: state.get('running'),
        queued: state.get('queued'),
        progress: state.get('progress')
    };
}

function addDispatch(dispatch){
    return {dispatch: dispatch};
}

module.exports = connect(getExplorerState, addDispatch)(TreeView);






