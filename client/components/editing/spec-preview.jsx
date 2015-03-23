/** @jsx React.DOM */

var React = require("react");

module.exports = React.createClass({
	render: function(){
		return (
			<div className="spec">
			  <h2 className="spec-title">{this.props.title}</h2>
			
			  {this.props.components}
			</div>
		);
	}
});