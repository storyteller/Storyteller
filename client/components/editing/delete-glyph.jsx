/** @jsx React.DOM */

var React = require("react");
var Postal = require('postal');
var changes = require('./../../lib/change-commands');
var Icons = require('./../icons');

var Close = Icons['close'];

module.exports = React.createClass({
	propTypes: {
		step: React.PropTypes.object.isRequired
	},

	render: function(){
		var onclick = e => {
			Postal.publish({
				channel: 'editor',
				topic: 'remove-step',
				data: changes.stepRemoved(this.props.step.parent, this.props.step)
			});

			e.preventDefault();

		}

		return (
			<a 
				title="Remove this step or section" 
				className="delete" 
				onClick={onclick}>
					<Close />
			</a>
		);
	}
});
