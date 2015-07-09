/** @jsx React.DOM */

var React = require("react");
var Postal = require('postal');
var {Button, ButtonGroup} = require('react-bootstrap');
var Icons = require('./../../icons');

var CommandButton = React.createClass({
	render: function(){
		var onclick = e => {
			var data = {id: this.props.spec.id};

			Postal.publish({
				channel: 'editor',
				topic: this.props.message,
				data: data
			});

			e.preventDefault();
		};

		var Icon = Icons[this.props.icon];

		return (
			<Button
				id={this.props.id}
				title={this.props.title}
				disabled={this.props.disabled}
				onClick={onclick}><Icon /></Button>

		);
	}
});

var SpecCommands = React.createClass({
	render: function(){


		return (
			<ButtonGroup style={{marginRight: '30px'}}>
				<CommandButton
					title="Run the specification"
					spec={this.props.spec}
					icon="run"
					message="run-spec"
					disabled={false} />

				<CommandButton
					title="Save outstanding changes to the spec"
					spec={this.props.spec}
					icon="save"
					message="save-spec"
					disabled={!this.props.spec.isDirty()}/>

				<CommandButton
					title="Undo the last change"
					spec={this.props.spec}
					id='undo'
					icon="undo"
					message="undo"
					disabled={!this.props.spec.isDirty()} />

				<CommandButton
					title="Redo the previous change"
					spec={this.props.spec}
					id='redo'
					icon="redo"
					message="redo"
					disabled={!this.props.spec.canRedo()}/>
			</ButtonGroup>
		);
	}
});

module.exports = SpecCommands;
