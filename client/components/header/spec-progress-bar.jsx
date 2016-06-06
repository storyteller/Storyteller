var React = require("react");
var Postal = require('postal');
var Counts = require('./../../lib/model/counts');
var { connect } = require('react-redux');

var {ProgressBar, Button, Navbar} = require('react-bootstrap');


function findState(state){
    var running = state.get('running');
    
    if (!running){
        return {running: false};
    }
    
    var spec = state.get('specs').get(running.id);
    var progress = state.get('progress');
    var counts = new Counts(0, 0, 0, 0);
    if (progress){
        counts = new Counts(progress.counts);
    }


    return {running: true, spec: spec, progress: progress, counts: counts};
}

function SpecProgressBar({running, progress, counts, spec}){
    if (!running){
        return (<span />);
    }
    
    if (!progress){
        return (<span />);
    }
    
    
    var bsStyle = "info";
    if (counts.anyResults()){
        if (counts.success()){
            bsStyle = "success";
        }
        else{
            bsStyle = "danger";
        }
    }

    var cancel = e => {
        Postal.publish({
            channel: 'engine-request',
            topic: 'cancel-spec',
            data: {id: spec.id}
        });

        e.preventDefault();
    }

    return (
        <div className="well status-bar" style={{margin: '10px', padding: '5px'}} id="spec-progress-bar">
        <Button onClick={cancel} className="pull-right" bsStyle="link" style={{marginLeft: '10px', marginRight: '10px', height: '25px'}}>Cancel Execution</Button>
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