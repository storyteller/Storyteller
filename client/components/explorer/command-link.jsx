/** @jsx React.DOM */

var React = require("react");
var Postal = require('postal');

var CommandLink = React.createClass({
	render: function(){
		var onclick = e => {
			var data = this.props.createMessage();

			Postal.publish({
				channel: 'engine-request',
				topic: data.type,
				data: data
			});
			
			e.stopPropagation();
			e.preventDefault();
		}

		var className = "explorer-command";
		if (this.props.identifier){
			className += ' ' + this.props.identifier;
		}

		return (
			<a href="#" onClick={onclick} className={className}>{this.props.text}</a>
		);
	}
});

module.exports = CommandLink;