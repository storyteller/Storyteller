import TreeView from './tree-view';
import { connect} from 'react-redux';

function getExplorerState(state){
  const status = state.get('status-filter');
  const lifecycle = state.get('lifecycle-filter');

  return {
    suite: state.get('hierarchy'),
    status,
    lifecycle,
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
