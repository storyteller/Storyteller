var React = require("react");
var Postal = require('postal');
var Icons = require('./../icons');

var Up = Icons['up-arrow'];
var Down = Icons['down-arrow'];

module.exports = React.createClass({
	propTypes: {
		step: React.PropTypes.object.isRequired
	},

	render: function(){
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
			<span style={{marginLeft: '10px'}}>
				<a 
					style={{color: 'inherit'}}
					title="Move this step or section up in order" 
					onClick={onreorderup}>
						<Up />
				</a>
				<a 
					style={{color: 'inherit'}}
					title="Move this step or section down in order" 
					onClick={onreorderdown}>
						<Down />
				</a>
			</span>
		);
	}
});