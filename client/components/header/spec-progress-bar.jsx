import React from 'react';
import Postal from 'postal';
import Counts from './../../lib/model/counts';
import { connect } from 'react-redux';

import { ProgressBar, Button, Navbar } from 'react-bootstrap';


function findState(state){
    const running = state.get('running');

    if (!running){
        return { running: false };
    }

    const spec = state.get('specs').get(running.id);
    const progress = state.get('progress');
    let counts = new Counts(0, 0, 0, 0);
    if (progress){
        counts = new Counts(progress.counts);
    }

    return { running: true, spec: spec, progress: progress, counts: counts };
}

function SpecProgressBar({running, progress, counts, spec}){
    if (!running){
        return (<span />);
    }

    if (!progress){
        return (<span />);
    }

    let bsStyle = 'info';
    if (counts.anyResults()){
        if (counts.success()){
            bsStyle = 'success';
        }
        else {
            bsStyle = 'danger';
        }
    }

    const cancel = e => {
        Postal.publish({
            channel: 'engine-request',
            topic: 'cancel-spec',
            data: {id: spec.id}
        });

        e.preventDefault();
    }

    return (
      <div className="well status-bar" style={{margin: '10px', padding: '5px'}} id="spec-progress-bar">
        <Button
          onClick={cancel}
          className="pull-right"
          bsStyle="link"
          style={{marginLeft: '10px', marginRight: '10px', height: '25px'}}>
            Cancel Execution
        </Button>
        <ProgressBar
            label={'Running ' + spec.title}
            bsStyle={bsStyle}
            min={0}
            max={progress.total}
            now={progress.step} />
      </div>
    );
}


module.exports = connect(findState)(SpecProgressBar);
