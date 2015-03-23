/** @jsx React.DOM */
var React = require("react");
var Postal = require('postal');

module.exports = React.createClass({
	render: function(){
		var onclick = e => {
			Postal.publish({
				channel: 'editor',
				topic: 'select-holder',
				data: {holder: this.props.holder}
			});

			e.preventDefault();
		}

		return (
			<a 
				className="step-adder-placeholder"
				data-holder={this.props.holder} 
				onClick={onclick}>{this.props.text}</a>
		);
	}
});