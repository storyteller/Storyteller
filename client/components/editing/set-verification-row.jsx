/** @jsx React.DOM */
var React = require("react");
var PreviewCell = require('./preview-cell');

var statuses = {
	'success': {header: 'Matched', rowClass: 'success'},
	'missing': {header: 'Missing', rowClass: 'danger'}
}

var ComponentLoader = require('./component-loader');

var loader = ComponentLoader.results;

var SetVerificationRow = React.createClass({
	determineStatus: function(step){
		var stepStatus = step.getStatus();
		if (stepStatus == 'wrong-order'){
			return {
				header: 'Wrong order, expected ' + step.order + ' but was ' + step.actualOrder,
				rowClass: 'danger'
			}
		}

		return statuses[stepStatus] || {header: '', rowClass:''};
	},

	render: function(){
		var step = this.props.step;
		var loader = require('./component-loader').results;

		var status = this.determineStatus(step);

		var header = status.header;


		var cells = this.props.cells.map(cell => {
			var arg = step.args.find(cell.key);
			var inner = arg.buildResults(loader);


			return (
				<td>{inner}</td>
			);
		});

		var cellStyle = {
			fontStyle: 'italic'
		}


		return (
			<tr className={status.rowClass}>
				<td style={cellStyle} className="set-row-status"> {header} </td>
				{cells}
			</tr>
		);
	}
});

module.exports = SetVerificationRow;