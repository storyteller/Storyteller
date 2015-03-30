/** @jsx React.DOM */

var React = require("react");

var Button = require('react-bootstrap/Button');
var ButtonGroup = require('react-bootstrap/ButtonGroup');
var Postal = require('postal');


var CommandButton = React.createClass({
	render: function(){
		var onclick = e => {
			var data = {type: this.props.topic, list: this.props.hierarchy.allSpecIds()};
			Postal.publish({
				channel: 'engine-request',
				topic: this.props.topic,
				data: data
			});

			e.preventDefault();
		}

		return (
			<Button onClick={onclick}>{this.props.children}</Button>
		);
	}
});

var CommandButtons = React.createClass({
	render: function(){
		var hierarchy = this.props.hierarchy;

		return (
		    <ButtonGroup vertical>
		      <CommandButton hierarchy={this.props.hierarchy} topic="run-specs">Run All</CommandButton>
		      <CommandButton hierarchy={this.props.hierarchy} topic="mark-as-acceptance">Mark as Acceptance</CommandButton>
		      <CommandButton hierarchy={this.props.hierarchy} topic="mark-as-regression">Mark as Regression</CommandButton>
		    </ButtonGroup>
		);
	}
});

module.exports = CommandButtons;