/** @jsx React.DOM */

var React = require("react");

module.exports = React.createClass({
	render: function(){
		return (
			<div className="panel panel-default">
			  <div className="panel-heading">
			    <h3 className="panel-title">{this.props.title}</h3>
			  </div>
			  <div className="panel-body">
			    {this.props.components}
			  </div>
			</div>
		);
	}
});