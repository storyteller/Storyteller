var React = require("react");
var PreviewCell = require('./../cells/preview-cell');

var ExtraRow = React.createClass({
	render: function(){
		var data = this.props.data;

        var i = 0;
		var cells = this.props.cells.map(function(cell){
			return (
				<td key={i++}><PreviewCell cell={cell} value={data[cell.key]}/></td>
			);
		});

		var orderedCell = null;
		if (this.props.ordered){
			orderedCell = (<td>ORDER GOES HERE</td>);
		}

		return (
			<tr className="bg-danger extra-row">
				<td className="set-row-status"><i>Extra</i></td>
				{cells}
			</tr>
		);
	}
});

module.exports = ExtraRow;