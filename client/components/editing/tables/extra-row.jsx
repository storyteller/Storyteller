var React = require("react");
var PreviewCell = require('./../cells/preview-cell');

module.exports = function({data, cells, ordered}){
	var data = data;
	
	var i = 0;
	var cells = cells.map(function(cell){
		return (
			<td key={i++}><PreviewCell cell={cell} value={data[cell.key]}/></td>
		);
	});

	var orderedCell = null;
	if (ordered){
		orderedCell = (<td>ORDER GOES HERE</td>);
	}

	return (
		<tr className="bg-danger extra-row">
			<td className="set-row-status">
				<i className="fa fa-exclamation-circle" style={{paddingRight: '5px'}}></i>
				<i>Extra</i>
			</td>
			{cells}
		</tr>
	);
}