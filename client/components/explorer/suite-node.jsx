import React from 'react';
import SpecLeaf from './spec-leaf';

import icons from './../icons';

import CommandLink from './command-link';
import CommandWithNameEntryLink from './command-with-name-entry-link';
import SuitePath from './suite-path';

const FolderOpen = icons['folder-open'];
const FolderClosed = icons['folder-closed'];


function NewSpecLink({suite}){
  const toMessage = function(name){
    return {
      type: 'add-spec',
      name: name,
      parent: suite.path
    };
  };

  const title = 'Add a new Specification to ' + suite.path;

  return (
    <CommandWithNameEntryLink
      title={title}
      text='new spec'
      commandText='Create'
      toMessage={toMessage}/>
  );
}

function NewSuiteLink({suite}){
  const toMessage = name => {
    return {
      type: 'add-suite',
      name: name,
      parent: suite.path
    };
  };

  const title = 'Add a new Child Suite to ' + suite.path;

  return (
    <CommandWithNameEntryLink
      title={title}
      text='new child suite'
      commandText='Create'
      toMessage={toMessage}/>
  );
}

function SuiteHeader(props){
  const suite = props.suite;

  const buildMessage = function(){
    const list = suite.allSpecs();

    return {type: 'run-specs', list: list};
  };

  const count = suite.allSpecs().length;

  const href = '#/suite/' + suite.path;

  const openClosed = props.expanded ? <FolderOpen /> : <FolderClosed />;
  const openClass = props.expanded ? 'open' : 'closed';

  const Icon = icons[suite.icon(props.specs, props.running, props.queued, props.progress)];
  const icon = (<Icon />);

  const toggle = e => {
    props.dispatch({type:'toggle-tree-state', path: suite.path});
    e.preventDefault();
  }

  return (
    <div key={suite.path} data-path={suite.path} className={openClass + ' suite-header'}>
      <a className="toggle" href='#' onClick={toggle}>
        {openClosed}
      </a>
      {icon}
      <a href={href} className='suite-name'>{props.suite.name}</a> ({count})
      <CommandLink createMessage={buildMessage} text='run all' />
      <NewSpecLink {...props} />
      <NewSuiteLink {...props} />
    </div>
  );
}

function SuiteBody({suite, specs, treeState, dispatch, running, queued, progress}){
  const suites = _.sortBy(suite.suites, x => x.name);
  const childSuites = suites.map(suite => (<SuiteNode suite={suite} key={suite.path} specs={specs} treeState={treeState} dispatch={dispatch} running={running} queued={queued} progress={progress} />) );

  let sp = suite.specs.map(x => specs.get(x));

  const specLeaves = _.sortBy(sp, x => x.title).map(x => (<SpecLeaf spec={x} key={x.id} running={running} queued={queued} progress={progress} />) );

  return (
    <div id={suite.path} className='suite-body' >
      {childSuites}
      {specLeaves}
    </div>
  );
}

function isExpanded({treeState, suite}){
  if (!treeState.has(suite.path)) return true;

  return treeState.get(suite.path);
}

function SuiteNode(props){
  let body = null;

  let expanded = false;
  if (isExpanded(props)){
    body = (<SuiteBody {...props} />);
    expanded = true;
  }

  const toggle = e => props.dispatch({type: 'toggle-tree-state', path: props.suite.path});

  return (
    <div className='suite-node' data-path={props.suite.path}>
      <SuiteHeader {...props} toggle={toggle} expanded={expanded} />
      {body}
    </div>
  );
}



module.exports = SuiteNode;
