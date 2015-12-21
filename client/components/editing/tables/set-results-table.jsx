var React = require("react");
var HeaderRow = require('./header-row');


var SetResultsTable = React.createClass({
	render: function(){
		var tableWidth = this.props.cells.length + 1;

		var addOnClick = e => {
			this.props.addStep();

			e.preventDefault();
		}


		var headerCells = [{header: ''}].concat(this.props.cells);

		return (
			<table className="table table-bordered table-hover" id={this.props.section.id}>
				<thead>
					<tr><th colSpan={tableWidth}>{this.props.title}</th></tr>
					<HeaderRow cells={headerCells} hideActions={true}/>
				</thead>
				<tbody>
					{this.props.rows}
				</tbody>
			</table>

		);
	}
});

module.exports = SetResultsTable;