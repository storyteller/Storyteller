/** @jsx React.DOM */
var React = require("react");
var TableCell = require('./table-cell');
var DeleteGlyph = require('./../delete-glyph');
var Icons = require('./../../icons');
var Copy = Icons['copy'];

var BodyRow = React.createClass({
	render: function(){
		var tds = this.props.cells.map(cell => {
			var arg = this.props.step.args.find(cell.key);

			var value = null;
			if (arg){
				value = arg.value;
			}

			return (
				<TableCell cell={cell} value={value} />
			)
		});

		var clickClone = e => {
			this.props.cloneRow();

			e.preventDefault();
		}

		var clazz = 'table-editor-row';
		if (this.props.step.active){
			clazz += ' active';
		}

		return (
			<tr id={this.props.step.id} key={this.props.step.id} className={clazz}>
				<td> 
					<DeleteGlyph step={this.props.step} /> 
					<a onClick={clickClone} className="clone-table-row" title="Clone this row" href="#"><Copy /></a>
				</td>
				{tds}
			</tr>
		);


	}
});

module.exports = BodyRow;
