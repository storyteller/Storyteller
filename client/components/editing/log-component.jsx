/** @jsx React.DOM */
var React = require("react");

// dangerouslySetInnerHTML={{__html: rawMarkup}}


var LogComponent = React.createClass({
	render: function(){
		return (
			<div>
				<h5>{this.props.title}</h5>
				<div dangerouslySetInnerHTML={{__html: this.props.html}}></div>
			</div>
		);
	}
});

module.exports = LogComponent;