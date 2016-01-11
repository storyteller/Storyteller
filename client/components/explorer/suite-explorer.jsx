var TreeView = require('./tree-view');
var {connect} = require('react-redux');
var React = require('react');

function findSuite(names, top){
  var suite = top;

  if (names && !(names instanceof Array)){
    names = names.split('/');
  }

  names.forEach(x => {
    if (suite == null) return null;
    suite = suite.childSuite(x);
  });

  if (suite == undefined) return null;

  return suite;
}

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

function SuiteExplorer(props){
    var params = props.params;

    var path = params.splat;
    
    var top = props.suite;
    var suite = findSuite(path, top);

    return (<TreeView {...props} suite={suite} />);
}

module.exports = connect(getExplorerState, addDispatch)(SuiteExplorer);