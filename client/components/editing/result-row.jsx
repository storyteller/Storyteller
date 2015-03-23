/** @jsx React.DOM */
var React = require("react");

var ResultRow = React.createClass({
	render: function(){
		var loader = require('./component-loader').results;

		var cells = this.props.cells.map(cell => {
			var arg = this.props.step.args.find(cell.key);
			var inner = arg.buildResults(loader);

			return (
				<td>{inner}</td>
			);
		});

		return (
			<tr>{cells}</tr>
		);
	}
});

module.exports = ResultRow;