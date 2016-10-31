import React from 'react';

import SuitePath from './suite-path';
import icons from './../icons';

import LifecycleFilter from './lifecycle-filter';
import StatusFilter from './status-filter';
import SuiteNode from './suite-node';
import CommandButtons from './command-buttons';

import CommandWithNameEntryLink from './command-with-name-entry-link';

import filterSuite from './../../lib/filter-suite';


function SuiteHeader({suite, dispatch, }){
  const links = [];
  let title = '';

  if (suite.isHierarchy){
    title = 'All Specifications';

    const buildChildSuiteMessage = name => {
      return {
        type: 'add-suite',
        name: name,
        parent: ''
      };
    };

    const childSuiteLink = (
      <small key="child-suite"><CommandWithNameEntryLink
        title="Add a new Child Suite"
        text="new suite"
        commandText="Create"
        toMessage={buildChildSuiteMessage}/></small>
    );

    links.push(childSuiteLink);
  }
  else {
    title = (<SuitePath suite={suite.path} linkToLeaf={false}/>)
  }

  if (suite.suites.length > 0){
    const expandAll = () => dispatch({type: 'expand-all'});

    const collapseAll = () => {
      dispatch({type: 'collapse-all'});
    };

    const expandLink = (<small key="expand"><a id="expand-all" className="explorer-command" title="Expand All Suite nodes in the Tree View" onClick={expandAll}>expand all</a></small> );
    links.push(expandLink);

    const collapseLink = (<small key="collapse"><a id="collapse-all" className="explorer-command" title="Collapse All Suite nodes in the Tree View" onClick={collapseAll}>collapse all</a></small>);
    links.push(collapseLink);
  }

  return(
    <h4><span id="spec-editor-header">{title}</span>
      {links}
    </h4>
  );
}


module.exports = function TreeView(props){
    let suite = props.suite;
    let top = suite;

    suite = filterSuite(top, props.specs, props.status, props.lifecycle);

    const summary = top.summary(props.specs);

    let suites = null;
    if (suite.isHierarchy){
      suites = suite.suites.map(s => {
        return (
          <SuiteNode suite={s} key={s.path} specs={props.specs} treeState={props.treeState} dispatch={props.dispatch} running={props.running} queued={props.queued} progress={props.progress} />
        );
      });
    }
    else {
      suites = [(<SuiteNode suite={suite} key={suite.path} specs={props.specs} treeState={props.treeState} dispatch={props.dispatch} running={props.running} queued={props.queued} progress={props.progress}/>)];
    }

    if (suites.length == 0){
      suites = (
        <div id="no-matching-specs">No matching specifications.</div>
      );
    }

    return (
      <div className="row">
        <div className="col-md-2 explorer-controls">
          <CommandButtons hierarchy={props.suite}/>
          <br />
          <br />
          <h5>Filter by Status</h5>
          <StatusFilter summary={summary} status={props.status} dispatch={props.dispatch}/>
          <br />
          <br />
          <h5>Filter by Lifecycle</h5>
          <LifecycleFilter summary={summary} lifecycle={props.lifecycle} dispatch={props.dispatch}/>
        </div>
        <div className="col-md-10">
          <SuiteHeader suite={suite} dispatch={props.dispatch} {...props}/>
          {suites}
        </div>
      </div>
    );
}
