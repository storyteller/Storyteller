var React = require("react");



function HeaderCell({cell, key}){
	var title = cell.header || cell.key;

	return (
		<th key={key}>{title}</th>
	);
}

function HeaderRow({cells, hideActions, actionTitle}){
	var i = 0;
	var cells = cells.map(x => {
		return ( <HeaderCell key={i++} cell={x} /> );
	});

	actionTitle = actionTitle || "Actions";

	var actionCell = null;
	if (!hideActions){
		actionCell = (
			<th><i>{actionTitle}</i></th>
		);
	}

	return (
		<tr>
			{actionCell}
			{cells}
		</tr>
	);
}



module.exports = HeaderRow;