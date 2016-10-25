import React from 'react';
import Postal from 'postal';
import Icons from './../icons';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';

function getState(state){
    return { specs: state.get('specs') }
}

function UnsavedChanges({specs}){
    const dirties = specs.toList().toArray().filter(x => x.spec.isDirty());

    if (dirties.length == 0) return (<span />);

    const SaveIcon = Icons['save'];

    const onClick = e => {
      dirties.forEach(spec => {
        const message = {
          type: 'save-spec-body',
          id: spec.id,
          spec: spec.write(),
          revision: spec.revision
        };

        Postal.publish({
          channel: 'engine-request',
          topic: 'save-spec-body',
          data: message
        });
      });

      e.preventDefault();
    };

    return (
        <Button bsStyle="link" onClick={onClick} title="Click to save all specifications with unsaved changes"><SaveIcon />Save All Changes</Button>
    );
}

module.exports = connect(getState)(UnsavedChanges);
