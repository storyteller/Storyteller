import React from 'react';
import { connect } from 'react-redux';
import TreeView from './tree-view';

function findSuite(names, top){
  let suite = top;

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
    return { dispatch };
}

function SuiteExplorer(props){
  const params = props.params;
  const path = params.splat;
  const top = props.suite;
  const suite = findSuite(path, top);

  return (<TreeView {...props} suite={suite} />);
}

module.exports = connect(getExplorerState, addDispatch)(SuiteExplorer);
