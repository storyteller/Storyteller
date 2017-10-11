var React = require("react");
var TableCell = require('./table-cell');
var DeleteGlyph = require('./../delete-glyph');
var ReorderGlyph = require('./../reorder-glyph');

var Icons = require('./../../icons');
var Copy = Icons['copy'];

function BodyRow({cells, step}){
	var tds = cells.map(cell => {
		var arg = step.args.find(cell.key);

		var value = null;
		var active = false;
		if (arg){
			value = arg.value;
			active = arg.active;
		}

		return (
			<TableCell key={cell.key} cell={cell} value={value} active={active} id={step.id} />
		)
	});

	var clickClone = e => {
		this.props.cloneRow();

		e.preventDefault();
	}

	var clazz = 'table-editor-row';
	if (step.active){
		clazz += ' active';
	}

	return (
		<tr id={step.id} key={step.id} className={clazz}>
			<td nowrap> 
				<DeleteGlyph step={step} /> 
				<ReorderGlyph step={step} /> 
				<a onClick={clickClone} className="clone-table-row" title="Clone this row" href="#"><Copy /></a>
			</td>
			{tds}
		</tr>
	);
}

module.exports = BodyRow;
