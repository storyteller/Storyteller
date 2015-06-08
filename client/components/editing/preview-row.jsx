/** @jsx React.DOM */
var React = require("react");
var builders = require("./builders");

var PreviewRow = React.createClass({
	render: function(){
		var tds = this.props.cells.map(cell => {
			var arg = this.props.step.args.find(cell.key);
			
			var text = builders.toText(arg);
			
			var key = cell.key;

			return (
				<td nowrap key={key}>{text}</td>
			);
		});

		return (
			<tr>{tds}</tr>
		);
	}
});

module.exports = PreviewRow;