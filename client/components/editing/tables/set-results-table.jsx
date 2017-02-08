var React = require("react");
var HeaderRow = require('./header-row');
var BreakpointLine = require('./../breakpoint-line');

var SetResultsTable = React.createClass({
	render: function(){
		var tableWidth = this.props.cells.length + 1;

		var addOnClick = e => {
			this.props.addStep();

			e.preventDefault();
		}

		var id = this.props.section.id;
		var breakpointLine = null;
		if (this.props.isStepthrough){
			breakpointLine = (
				<tr><td colSpan={tableWidth} style={{padding: '0px', margin: '0px'}}>
					<BreakpointLine 
						{...this.props}
						id={id}
						position={null}
						title="Execute and Verify this Set"
					/>
				</td></tr>
			);
		}

		var perfViolationLine = null;
		var results = this.props.section.results;
		if (results.exceeded){
			perfViolationLine = (
				<tr className="bg-warning">
					<td colSpan={tableWidth}>
						<b>Performance threshold violation</b>: actual {results.duration} > max {results.threshold}
					</td>
				</tr>

			)
		}

		var headerCells = [{header: ''}].concat(this.props.cells);

		return (
			<table className="table table-bordered table-hover" id={this.props.section.id}>
				<thead>
					<tr><th colSpan={tableWidth}>{this.props.title}</th></tr>
					<HeaderRow cells={headerCells} hideActions={true}/>
				</thead>
				<tbody>
					{breakpointLine}
					{perfViolationLine}
					{this.props.rows}
				</tbody>
			</table>

		);
	}
});

module.exports = SetResultsTable;