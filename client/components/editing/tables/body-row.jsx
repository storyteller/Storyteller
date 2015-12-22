var React = require("react");
var TableCell = require('./table-cell');
var DeleteGlyph = require('./../delete-glyph');
var ReorderGlyph = require('./../reorder-glyph');

var Icons = require('./../../icons');
var Copy = Icons['copy'];

var BodyRow = React.createClass({
	render: function(){
		var tds = this.props.cells.map(cell => {
			var arg = this.props.step.args.find(cell.key);

			var value = null;
			var active = false;
			if (arg){
				value = arg.value;
				active = arg.active;
			}

			return (
				<TableCell key={cell.key} cell={cell} value={value} active={active} id={this.props.step.id} />
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
				<td nowrap> 
					<DeleteGlyph step={this.props.step} /> 
					<ReorderGlyph step={this.props.step} /> 
					<a onClick={clickClone} className="clone-table-row" title="Clone this row" href="#"><Copy /></a>
				</td>
				{tds}
			</tr>
		);


	}
});

module.exports = BodyRow;
