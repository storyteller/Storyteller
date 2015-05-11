/** @jsx React.DOM */

var React = require("react");

module.exports = React.createClass({
	render(){
		return (
			<div>
				<h4>{this.props.spec.title}</h4>
				{this.props.children}
			</div>
		)
	}
});