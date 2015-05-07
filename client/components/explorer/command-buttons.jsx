/** @jsx React.DOM */

var React = require("react");

var Button = require('react-bootstrap/Button');
var ButtonGroup = require('react-bootstrap/ButtonGroup');
var Postal = require('postal');
var Hierarchy = require('./../../lib/specs/hierarchy');


var CommandButton = React.createClass({
	render: function(){
		var onclick = e => {


			if (this.props.topic == 'run-specs'){
				var specs = this.props.hierarchy.allSpecs();

				var heads = _.filter(specs, x => x.mode == 'header').map(x => x.id);

				var fulls = _.filter(specs, x => x.mode == 'full').forEach(spec => {
					Hierarchy.runSpec(spec);
				});

				Postal.publish({
					channel: 'engine-request',
					topic: 'run-specs',
					data: {
						list: heads
					}
				});
			}
			else {
				// look for what doesn't fit, then apply a toggleLifecycle
				// and publish hierarchy-loaded

				alert('not doing anything yet for ' + this.props.topic);
			}
/*
			var data = {type: this.props.topic, list: this.props.hierarchy.allSpecIds()};
			Postal.publish({
				channel: 'engine-request',
				topic: this.props.topic,
				data: data
			});
*/

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