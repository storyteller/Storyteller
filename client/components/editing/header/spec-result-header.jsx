var React = require("react");
var Postal = require('postal');

var {Alert} = require('react-bootstrap');
var Icons = require('./../../icons');
var Counts = require('./../../../lib/model/counts');

function SpecResultHeader(props){
    var icon = props.spec.icon();
    var status = props.spec.status;
    
    var queued = props.spec.state;
    var counts = null;
    var duration = null;
    var time = null;
    
    /*
    
    // TODO -- show the running state here!
    
    var counts = new Counts(0, 0, 0, 0);
    if (queued == 'running'){
        // Should be the running counts
        counts = new Counts(0, 0, 0, 0);
    }
    else if (ResultCache.hasResults(this.props.spec.id)){
        var result = ResultCache.lastResultFor(this.props.spec.id);

        counts = result.counts;
        duration = result.results.duration;
        time = result.time;
    }
    */
    
    if (queued == 'none' && status == 'none') return (<span />);

    var Icon = Icons[icon];

    var bsStyle = 'info';
    if (counts && counts.anyResults()){
        if (counts.success()){
            bsStyle = 'success';
        }
        else {
            bsStyle = 'danger';
        }
    }

    var text = null;

    if (queued == 'queued'){
        if (status == 'none'){
            text = 'Queued for Execution';
        }
        else {
            text = (<span>Queued for Execution, last run was {counts.toString()}</span>);
        }
        
    }
    else if (queued == 'running'){
        text = (<span>Running with {counts.toString()}</span>);
    }
    else if (status == 'success') {
        text = (<span>Succeeded in {duration} ms with {counts.toString()} at {time}</span>)
    }
    else {
        text = (<span>Failed in {duration} ms with {counts.toString()} at {time}</span>)
    }

    return (
        <Alert bsStyle={bsStyle}>
            <Icon /> {text}
        </Alert>
    );
}


module.exports = SpecResultHeader;