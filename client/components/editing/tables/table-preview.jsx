/** @jsx React.DOM */
var React = require("react");
var HeaderRow = require('./header-row');


var TablePreview = React.createClass({
	render: function(){
		var tableWidth = this.props.cells.length + 1;

		var addOnClick = e => {
			this.props.addStep();

			e.preventDefault();
		}

		return (
			<table className="table table-bordered table-hover" id={this.props.section.id}>
				<thead>
					<tr><th colSpan={tableWidth}>{this.props.title}</th></tr>
					<HeaderRow cells={this.props.cells} hideActions={true}/>
				</thead>
				<tbody>
					{this.props.rows}
				</tbody>
			</table>

		);
	}
});

module.exports = TablePreview;