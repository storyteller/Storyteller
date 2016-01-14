var React = require("react");
var {Button} = require('react-bootstrap');
var { connect } = require('react-redux');

var Postal = require('postal');

var CommandLink = require('./../explorer/command-link');
var icons = require('./../icons');
var SuitePath = require('./../explorer/suite-path');


function getQueue(state){
    var specs = state.get('specs');
    var queued = state.get('queued');
    
    return {
        queued: queued,
        specs: specs
    };
}

var cancelAll = e => {
	Postal.publish({
		channel: 'engine-request',
		topic: 'cancel-all-specs', 
		data: {type: 'cancel-all-specs'}
	});

	e.preventDefault();
}

function QueueItem(props){
    var id = props.spec.id;

    var createMessage = function(){
        return {type: 'cancel-spec', id: id};
    }

    var icon = icons[props.spec.icon(null, [], {})]({});
    var divId = 'queued-spec-' + id;

    return (
        <div id={divId}>
            {icon}
            <SuitePath path={props.spec.path} linkToLeaf={true} />
            <span> / </span>
            <span className="queued-spec-name">{props.spec.title}</span>
            <CommandLink createMessage={createMessage} text="cancel" />
        </div>
    );
}


function QueuePage(props){
    var queue = props.queued.map(id => props.specs.get(id));
    
    var items = queue.map(spec => {
        return (
            <QueueItem spec={spec} />
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