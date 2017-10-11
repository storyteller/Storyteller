var React = require("react");
var PreviewCell = require('./../cells/preview-cell');

var statuses = {
	'success': {header: 'Matched', rowClass: 'success'},
	'missing': {header: 'Missing', rowClass: 'danger'}
}

var ComponentLoader = require('./../component-loader');

var loader = ComponentLoader.results;

function determineStatus(step){
	var stepStatus = step.getStatus();
	if (stepStatus == 'wrong-order'){
		return {
			header: 'Wrong order, expected ' + step.order + ' but was ' + step.actualOrder,
			rowClass: 'danger'
		}
	}

	return statuses[stepStatus] || {header: '', rowClass:''};
}

function SetVerificationRow({step, cells}){
	var loader = require('./../component-loader').results;
	
	var status = determineStatus(step);

	var header = status.header;

	var i = 0;
	var cells = cells.map(cell => {
		var arg = step.args.find(cell.key);
		var inner = arg.buildResults(loader);

		return (
			<td key={++i}>{inner}</td>
		);
	});

	var icon = '';
	if (status.rowClass != 'success') {
		icon = (<i className="fa fa-exclamation-circle" style={{paddingRight: '5px'}}></i>);
	}
	else {
		icon = (<i className="fa fa-check" style={{paddingRight: '5px'}}></i>);
	}
	

	return (
		<tr id={step.id} className={status.rowClass}>
			<td 
				className="set-row-status" 
				style={{paddingLeft: '10px', paddingRight: '10px', fontStyle: 'italic'}} >
				{icon}
				<span className="set-row-header">{header}</span>
			</td>
			{cells}
		</tr>
	);
}


module.exports = SetVerificationRow;
