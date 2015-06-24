/** @jsx React.DOM */
var React = require("react");
var CheckboxIcon = require('./../icons')['checked'];

var ResultRow = React.createClass({
	render: function(){
		var loader = require('./component-loader').results;

		var result = this.props.step.getResult();

		var cells = this.props.cells.map(cell => {
			var arg = this.props.step.args.find(cell.key);
			var inner = arg.buildResults(loader);

			return (
				<td nowrap>{inner}</td>
			);
		});

		if (result.status == 'ok'){
			var arg = this.props.step.args.find(this.props.cells[0].key);
			var inner = arg.buildResults(loader);


			cells[0] = (
				<td nowrap><CheckboxIcon /> {inner}</td>
			);
		}

		return (
			<tr>{cells}</tr>
		);
	}
});

module.exports = ResultRow;