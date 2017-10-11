var React = require("react");
var HeaderRow = require('./header-row');
var BreakpointLine = require('./../breakpoint-line');

function SetResultsTable({cells, section, title, addStep, isStepthrough, rows}){
	var tableWidth = cells.length + 1;
	
	var addOnClick = e => {
		addStep();

		e.preventDefault();
	}

	var id = section.id;
	var breakpointLine = null;
	if (isStepthrough){
		breakpointLine = (
			<tr><td colSpan={tableWidth} style={{padding: '0px', margin: '0px'}}>
				<BreakpointLine 
				    spec={spec}
					title={title}
					dispatch={dispatch}
					id={id}
					position={null}
					title="Execute and Verify this Set"
				/>
			</td></tr>
		);
	}

	var perfViolationLine = null;
	var results = section.results;
	if (results.exceeded){
		perfViolationLine = (
			<tr className="bg-warning">
				<td colSpan={tableWidth}>
					<b>Performance threshold violation</b>: actual {results.duration} > max {results.threshold}
				</td>
			</tr>

		)
	}

	var headerCells = [{header: ''}].concat(cells);

	return (
		<table className="table table-bordered table-hover" id={section.id}>
			<thead>
				<tr><th colSpan={tableWidth}>{title}</th></tr>
				<HeaderRow cells={headerCells} hideActions={true}/>
			</thead>
			<tbody>
				{breakpointLine}
				{perfViolationLine}
				{rows}
			</tbody>
		</table>

	);
}

module.exports = SetResultsTable;