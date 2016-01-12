var React = require("react");
var Postal = require('postal');
var Counts = require('./../../lib/model/counts');
var { connect } = require('react-redux');

var {ProgressBar, Button, Navbar} = require('react-bootstrap');


function findState(state){
    var running = state.get('running');
    
    if (running == null){
        return {running: false};
    }
    
    var spec = state.get('specs').get(running);
    var progress = state.get('progress');
    var counts = new Counts(0, 0, 0, 0);
    if (progress){
        counts = new Counts(progress.counts);
    }


    return {running: true, spec: spec, progress: progress, counts: counts};
}

function SpecProgressBar(props){
    if (!props.running){
        return (<span />);
    }
    
    if (!props.progress){
        return (<span />);
    }
    
    
    var bsStyle = "info";
    if (props.counts.anyResults()){
        if (props.counts.success()){
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
            data: {id: props.spec.id}
        });

        e.preventDefault();
    }

    return (
        <div className="well status-bar" style={{margin: '10px', padding: '5px'}} id="spec-progress-bar">
        <Button onClick={cancel} className="pull-right" bsStyle="link" style={{marginLeft: '10px', marginRight: '10px', height: '25px'}}>Cancel Execution</Button>
        <ProgressBar  
            label={'Running ' + props.spec.title} 
            bsStyle={bsStyle} 
            min={0} 
            max={props.progress.total} 
            now={props.progress.step} />
            
        </div>
    );
}




module.exports = connect(findState)(SpecProgressBar);