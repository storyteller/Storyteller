/** @jsx React.DOM */

var React = require("react");
var builders = require("./builders");

var FailureCell = React.createClass({
	render: function(){
		var builder = builders.get(this.props.cell.type);
		var text = builder.display(this.props.cell, this.props.value);

		return (
			<span className="label label-danger">{text} but was {this.props.actual}</span>
		);
	}
});

module.exports = FailureCell;