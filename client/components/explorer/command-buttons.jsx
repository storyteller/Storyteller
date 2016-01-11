var React = require("react");

var {Button, ButtonGroup} = require('react-bootstrap');
var Postal = require('postal');



function CommandButton(props){
    var onclick = e => {
        Postal.publish({
            channel: 'commands',
            topic: props.topic,
            data: {suite: props.hierarchy}
        });
    };
    
    return (<Button onClick={onclick}>{props.children}</Button>);
}

function CommandButtons(props){
    var hierarchy = props.hierarchy;

    return (
        <ButtonGroup vertical>
            <CommandButton hierarchy={props.hierarchy} topic="run-specs">Run All</CommandButton>
            <CommandButton hierarchy={props.hierarchy} topic="mark-as-acceptance">Mark as Acceptance</CommandButton>
            <CommandButton hierarchy={props.hierarchy} topic="mark-as-regression">Mark as Regression</CommandButton>
        </ButtonGroup>
    );
}

module.exports = CommandButtons;