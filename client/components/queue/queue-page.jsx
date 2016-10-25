import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

import Postal from 'postal';

import CommandLink from './../explorer/command-link';
import icons from './../icons';
import SuitePath from './../explorer/suite-path';


function getQueue(state){
    const specs = state.get('specs');
    const queued = state.get('queued');

    return {
      queued,
      specs
    };
}

const cancelAll = e => {
	Postal.publish({
		channel: 'engine-request',
		topic: 'cancel-all-specs',
		data: {type: 'cancel-all-specs'}
	});

	e.preventDefault();
}

function QueueItem({spec}){
    const id = spec.id;

    const createMessage = function(){
        return {type: 'cancel-spec', id: id};
    }

    const Icon = icons[spec.icon(null, [], {})];
    const icon = (<Icon />);

    const divId = 'queued-spec-' + id;

    return (
      <div id={divId}>
        {icon}
        <SuitePath path={spec.path} linkToLeaf={true} />
        <span> / </span>
        <span className="queued-spec-name">{spec.title}</span>
        <CommandLink createMessage={createMessage} text="cancel" />
      </div>
    );
}


function QueuePage({queued, specs}){
  const queue = queued.map(id => specs.get(id));

  const items = queue.map((spec, i) => {
    return (
      <QueueItem spec={spec} key={i} />
    );
  });

  return (
    <div>
      <h3>Execution Queue <Button id="cancel-all-specs" onClick={cancelAll}>Cancel All</Button></h3>
      {items}
    </div>
  );
}


module.exports = connect(getQueue)(QueuePage);
