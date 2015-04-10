/** @jsx React.DOM */
var React = require("react");

// dangerouslySetInnerHTML={{__html: rawMarkup}}


var LogComponent = React.createClass({
	render: function(){
		return (
			<div>
				<h3>{this.props.title}</h3>
				<div dangerouslySetInnerHTML={{__html: this.props.html}}></div>
				<hr />
			</div>
		);
	}
});

module.exports = LogComponent;