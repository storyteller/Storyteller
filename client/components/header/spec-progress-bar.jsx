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
    const mode = state.get('running-mode');

    let counts = new Counts(0, 0, 0, 0);
    if (progress){
        counts = new Counts(progress.counts);
    }

    return { running: true, spec: spec, progress: progress, counts: counts, mode: mode };
}

function SpecProgressBar({running, progress, counts, spec, mode}){
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

    var label = 'Running ' + spec.title;
    var cancelMessage = 'Cancel Execution';
    var navigate = () => {
        window.location = '#/spec/results/' + spec.id;
    }

    if (mode != 'normal'){
        label = "Stepping through: " + spec.title;
        cancelMessage = 'Cancel Stepthrough';
        navigate = () => {
            window.location = '#/spec/stepthrough/' + spec.id;
        }
    }





    return (
      <div title={label} className="well status-bar" style={{margin: '10px', padding: '5px'}} id="spec-progress-bar">
        <Button
          onClick={cancel}
          className="pull-right"
          bsStyle="link"
          style={{marginRight: '10px', height: '25px'}}>
            {cancelMessage}
        </Button>
        <Button
          onClick={navigate}
          className="pull-right"
          bsStyle="link"
          style={{marginLeft: '10px', height: '25px'}}>
            Open Spec
        </Button>


        <ProgressBar
            label={label}
            bsStyle={bsStyle}
            min={0}
            max={progress.total}
            now={progress.step} />
      </div>
    );
}


module.exports = connect(findState)(SpecProgressBar);
