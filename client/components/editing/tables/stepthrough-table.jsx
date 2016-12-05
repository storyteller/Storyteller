var React = require("react");

function StepthroughTable({cells, title, section, rows, dispatch, spec}){
	var tableWidth = cells.length + 1;

	return (
		<table className="table table-bordered table-hover" id={section.id}>
			<thead>
				<tr><th colSpan={tableWidth}>{title}</th></tr>
				<HeaderRow cells={cells} hideActions={false} actionTitle="Breakpoint"/>
			</thead>
			<tbody>
				{rows}
			</tbody>
		</table>

	);
}


module.exports = StepthroughTable;