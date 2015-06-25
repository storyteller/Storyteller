/** @jsx React.DOM */

var React = require("react");

var statusClass = {
	success: 'bg-success',
	failed: 'bg-danger',
	error: 'bg-warning'
}

module.exports = React.createClass({
	render: function(){
		var clazz = "sentence";

		if (this.props.status){
			clazz += ' ' + statusClass[this.props.status];
		}
		
		return (
			<div className={clazz}>{this.props.components}</div>
		);
	}
});