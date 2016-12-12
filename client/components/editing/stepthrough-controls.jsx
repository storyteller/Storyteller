var React = require("react");
var ReactDOM = require("react-dom");
var Postal = require('postal');
var {Button} = require('react-bootstrap');
var {ButtonGroup} = require('react-bootstrap');
var Icons = require('./../icons');
var Mousetrap = require('mousetrap');

function StepthroughCommand({action, spec, icon, title, message}){
    if (!message){
        message = {
            type: 'stepthrough',
            action: action,
            spec: spec.id,
            breakpoints: spec.breakpoints
        };
    }

    var onclick = e => {
        Postal.publish({
            channel: 'engine-request',
            topic: 'stepthrough',
            data: message
        });

        e.preventDefault();
    };

    var Icon = Icons[icon];

    return (
        <Button
            title={title}
            bsSize="small"
            onClick={onclick}><Icon /></Button>

    );
}



module.exports = function({spec}){
    var focus = elem => {
        if (!elem){
            return;
        }

        ReactDOM.findDOMNode(elem).scrollIntoView({block: 'end', behavior: 'smooth'});
    };

	return (
		<ButtonGroup ref={focus} style={{marginRight: '30px'}}>
            <StepthroughCommand spec={spec} action="next" title="Step into the next operation (F10)" icon="run-next"/>
            <StepthroughCommand spec={spec} action="run" title="Run to the next breakpoint (F8)" icon="run"/>
            <StepthroughCommand spec={spec} action="runToEnd" title="Run to the end of the specification (Shift+F10)" icon="run-to-end"/>
            <StepthroughCommand spec={spec} message={{type: 'cancel-spec', id: spec.id}} title="Stop the execution (shift+esc)" icon="stop"/>

		</ButtonGroup>
	);
}