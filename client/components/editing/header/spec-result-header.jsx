var React = require("react");
var Postal = require('postal');

var {Alert} = require('react-bootstrap');
var Icons = require('./../../icons');
var {connect} = require('react-redux');
var Counts = require('./../../../lib/model/counts');

function getState(state, ownProps){
    return {
        spec: ownProps.spec,
        running: state.get('running'),
        queued: state.get('queued'),
        progress: state.get('progress')
    }
}


function SpecResultHeader(props){
    var icon = props.spec.icon(props.running, props.queued, props.progress);

    var counts = null;
    var duration = null;
    var time = null;

    if (icon == 'none') return (<span />);

    var Icon = Icons[icon];
    
    if (!Icon){
        throw new Error('could not find an icon for ' + icon);
    }

    var bsStyle = 'info';
    if (props.spec.hasResults()){
        if (props.spec.status == 'success'){
            bsStyle = 'success';
        }
        else {
            bsStyle = 'danger';
        }
    }

    var text = null;
    var runningCount = null;
    if (props.progress && props.progress.counts){
        runningCount = new Counts(props.progress.counts).toString();
    }

    if (icon == 'queued'){
        if (props.spec.status == 'none'){
            text = 'Queued for Execution';
        }
        else {
            var countDescription = new Counts(props.spec.last_result.results.counts).toString();
            text = (<span>Queued for Execution, last run was {countDescription}</span>);
        }
        
    }
    else if (icon == 'running'){
        text = (<span>Running with {runningCount}</span>);
    }
    else if (icon == 'running-success'){
        bsStyle = 'success';
        text = (<span>Running with {runningCount}</span>);
    }
    else if (icon == 'running-failed'){
        bsStyle = 'danger';
        text = (<span>Running with {runningCount}</span>);
    }
    else if (props.spec.status == 'success') {
        var countDescription = new Counts(props.spec.last_result.results.counts).toString();
        
        text = (<span>Succeeded in {props.spec.last_result.results.duration} ms with {countDescription} at {props.spec.last_result.time}</span>)
    }
    else {
        var countDescription = new Counts(props.spec.last_result.results.counts).toString();
        
        text = (<span>Failed in {props.spec.last_result.results.duration} ms with {countDescription} at {props.spec.last_result.time}</span>)
    }

    return (
        <Alert id="spec-result-header" bsStyle={bsStyle}>
            <Icon /> {text}
        </Alert>
    );
}


module.exports = connect(getState)(SpecResultHeader);