var React = require("react");

var {Button, ButtonGroup} = require('react-bootstrap');
var Postal = require('postal');



function CommandButton({hierarchy, children, topic}){
    var onclick = e => {
        Postal.publish({
            channel: 'commands',
            topic: topic,
            data: {suite: hierarchy}
        });
    };
    
    return (<Button onClick={onclick}>{children}</Button>);
}

function CommandButtons({hierarchy}){
    return (
        <ButtonGroup vertical>
            <CommandButton hierarchy={hierarchy} topic="run-specs">Run All</CommandButton>
            <CommandButton hierarchy={hierarchy} topic="mark-as-acceptance">Mark as Acceptance</CommandButton>
            <CommandButton hierarchy={hierarchy} topic="mark-as-regression">Mark as Regression</CommandButton>
        </ButtonGroup>
    );
}

module.exports = CommandButtons;