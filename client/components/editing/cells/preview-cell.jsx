var React = require("react");
var builders = require("./../editors/builders");

module.exports = React.createClass({
	render: function(){
		var builder = builders.get(this.props.cell.editor);

		var text = builder.display(this.props.cell, this.props.value);

		return (
			<span className="preview-cell" title={this.props.cell.description}>{text}</span>
		);
	}
});