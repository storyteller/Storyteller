/** @jsx React.DOM */
var React = require("react");
var CheckboxIcon = require('./../../icons')['checked'];
var Arg = require('./../../../lib/model/arg');
var _ = require('lodash');

var ResultRow = React.createClass({
	render: function(){
		var loader = require('./../component-loader').results;

		// TODO -- this is horrible.
		var result = this.props.step.getResult();
		if (this.props.step.position){
			result = this.props.step.getResult(this.props.step.position);
		}

		var cells = this.props.cells.map(cell => {
			var arg = this.props.step.args.find(cell.key);
			if (!arg){
				arg = new Arg(cell, {cells:{}}, this.props.step.id);
			}

			var inner = arg.buildResults(loader);

			return (
				<td nowrap>{inner}</td>
			);
		});

		if (result.status == 'ok'){
			var arg = this.props.step.args.find(this.props.cells[0].key);
			if (!arg){
				arg = new Arg(cell, {cells:{}}, this.props.step.id);
			}
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