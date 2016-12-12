import React from 'react';
import Postal from 'postal';
import icons from './../icons';

import CommandLink from './command-link';
import CommandWithNameEntryLink from './command-with-name-entry-link';
import DeleteLink from './delete-link';
import _ from 'lodash';

const toCloneText = (text) => {
  if (_.endsWith(text, ' Copy')) {
    return text + ' 1';
  }
  else if (_.contains(text, ' Copy ')) {
    return text.replace(/Copy \d+/, function (attr) { return attr.replace(/\d+/, function(n) { return ++n; }); });
  }
  else {
    return text + ' Copy';
  }
}

function CloneLink(props){
  const toMessage = name => {return {type: 'clone-spec', id: props.spec.id, name: name}};
  const defaultValue = toCloneText(props.spec.title);

  return (
    <CommandWithNameEntryLink
      title="Clone a Specification"
      text="clone"
      commandText="Clone"
      toMessage={toMessage}
      value={defaultValue} />
  );
}

function SpecLeaf(props){
  const onclick = e => {
    e.preventDefault();
  }

  const iconName = props.spec.icon(props.running, props.queued, props.progress);
  const Icon = icons[iconName];
  const icon = (<Icon />);

  let clazz = 'spec-name spec-state-' + props.spec.state;

  let spec = props.spec;

  let link = null;
  if (iconName !== 'queued' && !iconName.includes('running')){
      const buildMessage = () => {return {type: 'run-spec', id: spec.id}};

      link = (<CommandLink identifier="run" createMessage={buildMessage} text="run" />);
  }

  let href = '#/spec/editing/' + spec.id;
  if (spec.hasResults() || spec.id == props.running){
      href = '#/spec/results/' + spec.id;
  }

  return (
    <div className="spec-leaf" data-path={props.spec.spec.path}>
      {icon}
      <a href={href} className={clazz}>{props.spec.title}</a>
      {link}<CloneLink {...props} />
      <DeleteLink spec={props.spec}/>
    </div>
  );
}


module.exports = SpecLeaf;
