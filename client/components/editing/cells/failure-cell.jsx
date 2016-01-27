var React = require("react");
var builders = require("./../editors/builders");

var FailureCell = React.createClass({
	render: function(){
		var builder = builders.get(this.props.cell.type);
		var text = builder.display(this.props.cell, this.props.value);

		return (
			<span className="label label-danger">{text} but was <i>{this.props.actual}</i></span>
		);
	}
});

module.exports = FailureCell;