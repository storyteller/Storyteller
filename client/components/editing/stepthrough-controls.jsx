var React = require("react");
var ReactDOM = require("react-dom");
var Postal = require('postal');
var {Button} = require('react-bootstrap');
var {ButtonGroup} = require('react-bootstrap');
var Icons = require('./../icons');
var Mousetrap = require('mousetrap');

/*

		engine({
			keys: ['f10'],
			topic: 'stepthrough',
			description: "Run the next step in 'stepthrough' mode",
			message: {
				type: 'stepthrough',
				action: 'next'
			}
		});

		engine({
			keys: ['shift+f10'],
			topic: 'stepthrough',
			description: "Run to the end in 'stepthrough' mode",
			message: {
				type: 'stepthrough',
				action: 'runToEnd'
			}
		});

		engine({
			keys: ['f8'],
			topic: 'stepthrough',
			description: "Run to the next breakpoint in 'stepthrough' mode",
			message: {
				type: 'stepthrough',
				action: 'run'
			}
		});
*/


class StepthroughCommand extends React.Component{
    constructor(){
        super();
    }

    componentDidMount(){
        Mousetrap.bind(this.props.keys, (e, combo) => {
            this.sendMessage();
        });
    }

    componentWillUnmount(){
        Mousetrap.unbind(this.props.keys);
    }

    sendMessage(){
        Postal.publish({
            channel: 'engine-request',
            topic: 'stepthrough',
            data: {
                type: 'stepthrough',
                action: this.props.action,
                spec: this.props.spec.id,
                breakpoints: this.props.spec.breakpoints
            }
        });
    }

    render(){
        var onclick = e => {
            this.sendMessage();

            e.preventDefault();
        };

        var Icon = Icons[this.props.icon];

        return (
            <Button
                title={this.props.title}
                bsSize="small"
                onClick={onclick}><Icon /></Button>

        );
    }
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
            <StepthroughCommand spec={spec} keys="f10" action="next" title="Step into the next operation (F10)" icon="run-next"/>
            <StepthroughCommand spec={spec} keys="f8" action="run" title="Run to the next breakpoint (F8)" icon="run"/>
            <StepthroughCommand spec={spec} keys="shift+f10" action="runToEnd" title="Run to the end of the specification (Shift+F10)" icon="run-to-end"/>
            <StepthroughCommand spec={spec} keys="shift+esc" action="stop" title="Stop the execution (shift+esc)" icon="stop"/>

		</ButtonGroup>
	);
}