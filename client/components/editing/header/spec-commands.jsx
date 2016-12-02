var React = require("react");
var CommandButton = require('./command-button');
var {ButtonGroup} = require('react-bootstrap');

function SpecCommands({spec}){
	return (
		<ButtonGroup style={{marginRight: '30px'}}>
			<CommandButton
				title="Run the specification"
				spec={spec}
				icon="run"
				message="run-spec"
				disabled={false} />

			<CommandButton
				title="Stepthrough the specification"
				spec={spec}
				icon="run-stepthrough"
				message="stepthrough-spec"
				disabled={false} />

			<CommandButton
				title="Save outstanding changes to the spec"
				spec={spec}
				icon="save"
				message="save-spec"
				disabled={!spec.isDirty()}/>

			<CommandButton
				title="Undo the last change"
				spec={spec}
				id='undo'
				icon="undo"
				message="undo"
				disabled={!spec.isDirty()} />

			<CommandButton
				title="Redo the previous change"
				spec={spec}
				id='redo'
				icon="redo"
				message="redo"
				disabled={!spec.canRedo()}/>

			<CommandButton
				title="Open this specification in a file editor"
				spec={spec}
				id="open"
				icon="open"
				message="open-in-editor"
				channel="engine-request"
				disabled={false} />
		</ButtonGroup>
	);
}



module.exports = SpecCommands;
