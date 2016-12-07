var React = require("react");
var Postal = require('postal');
var {Button} = require('react-bootstrap');
var {ButtonGroup} = require('react-bootstrap');
var Icons = require('./../icons');



function StepthroughCommand({spec, title, action, icon}){
    var onclick = e => {

        Postal.publish({
            channel: 'engine-request',
            topic: 'stepthrough',
            data: {
                type: 'stepthrough',
                action: action,
                spec: spec.id,
                breakpoints: spec.breakpoints
            }
        });

        e.preventDefault();
    };

    var Icon = Icons[icon];

    return (
        <Button
            title={title}
            onClick={onclick}><Icon /></Button>

    );
}

module.exports = function({spec}){
	return (
		<ButtonGroup style={{marginRight: '30px'}}>
            <StepthroughCommand spec={spec} action="next" title="Step into the next operation" icon="run-next"/>
            <StepthroughCommand spec={spec} action="run" title="Run to the next breakpoint" icon="run"/>
            <StepthroughCommand spec={spec} action="runToEnd" title="Run to the end of the specification" icon="run-to-end"/>
            <StepthroughCommand spec={spec} action="stop" title="Stop the execution" icon="stop"/>

		</ButtonGroup>
	);
}