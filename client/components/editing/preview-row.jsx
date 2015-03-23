/** @jsx React.DOM */
var React = require("react");
var builders = require("./builders");

var PreviewRow = React.createClass({
	render: function(){
		var tds = this.props.cells.map(cell => {
			var arg = this.props.step.args.find(cell.key);
			var cell = builders.toText(arg);
			

			return (
				<td>{cell}</td>
			);
		});

		return (
			<tr>{tds}</tr>
		);
	}
});

module.exports = PreviewRow;