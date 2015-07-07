/** @jsx React.DOM */

var React = require("react");
var Postal = require('postal');
var changes = require('./../../lib/model/change-commands');
var Icons = require('./../icons');

var Close = Icons['close'];
var Up = Icons['up-arrow'];
var Down = Icons['down-arrow'];


module.exports = React.createClass({
	propTypes: {
		step: React.PropTypes.object.isRequired
	},

	render: function(){
		var ondelete = e => {
			Postal.publish({
				channel: 'editor',
				topic: 'changes',
				data: changes.stepRemoved(this.props.step.parent, this.props.step)
			});

			e.preventDefault();

		}

		var location = {holder: this.props.step.parent, step: this.props.step};
		var onreorderup = e => {
			Postal.publish({
				channel: 'editor',
				topic: 'reorder-up',
				data: {location: location}
			});

			e.preventDefault();
		}

		var onreorderdown = e => {
			Postal.publish({
				channel: 'editor',
				topic: 'reorder-down',
				data: {location: location}
			});

			e.preventDefault();
		}


		return (
			<span>
				<a 
					title="Remove this step or section" 
					className="delete" 
					onClick={ondelete}>
						<Close />
				</a>
				<a 
					title="Move this step or section up in order" 
					onClick={onreorderup}>
						<Up />
				</a>
				<a 
					title="Move this step or section down in order" 
					onClick={onreorderdown}>
						<Down />
				</a>
			</span>
		);
	}
});
