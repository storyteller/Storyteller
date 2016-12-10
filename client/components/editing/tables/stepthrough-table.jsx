var React = require("react");
var HeaderRow = require("./header-row");
var BreakpointLine = require("./../breakpoint-line");

function StepthroughRow({tableWidth, position, section, spec, title, dispatch}) {
	return (
		<tr>
			<td colSpan={tableWidth} style={{padding: '0px', margin: '0px'}}>
				<BreakpointLine 
					spec={spec} 
					id={section.id} 
					position={position} 
					dispatch={dispatch}
					title={title}/>
			</td>
		</tr>

	);
}

function StepthroughTable({cells, title, section, rows, dispatch, spec, hasBeforeStep, hasAfterStep}){
	var tableWidth = cells.length + 1;

	var beforeRow = null;
	if (hasBeforeStep){
		beforeRow = (
			<StepthroughRow 
				tableWidth={tableWidth} 
				position="before" 
				section={section}
				spec={spec}
				title="Action before all the rows"
				dispatch={dispatch}
				/>
		);
	}

	var afterRow = null;
	if (hasAfterStep){
		afterRow = (
			<StepthroughRow 
				tableWidth={tableWidth} 
				position="after" 
				section={section}
				spec={spec}
				title="Action after all the rows"
				dispatch={dispatch}
				/>
		);
	}

	return (
		<table className="table table-bordered table-hover" id={section.id}>
			<thead>
				<tr><th colSpan={tableWidth}>{title}</th></tr>
				<HeaderRow cells={cells} hideActions={false} actionTitle="Breakpoint"/>
			</thead>
			<tbody>
				{beforeRow}
				{rows}
				{afterRow}
			</tbody>
		</table>

	);
}


module.exports = StepthroughTable;