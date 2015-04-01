/** @jsx React.DOM */
var React = require("react");
var DeleteGlyph = require('./delete-glyph');

var HeaderRow = require('./header-row');


var TableEditor = React.createClass({
	render: function(){
		var tableWidth = this.props.cells.length + 1;

		var addOnClick = e => {
			this.props.addStep();

			e.preventDefault();
		}

		var headerClass = "";
		if (this.props.section.active == true){
			headerClass += ' bg-primary';
		}

		return (
			

			<table className="table table-bordered table-hover" id={this.props.section.id}>
				<thead>
					<tr><th className={headerClass} colSpan={tableWidth}><DeleteGlyph step={this.props.step}/>{this.props.title}</th></tr>
					<HeaderRow cells={this.props.cells}/>
				</thead>
				<tbody>
					{this.props.rows}
				</tbody>
				<tfoot>
					<tr><td colSpan={tableWidth}>
						<a tabIndex="0" className="add-table-step" href="#" onClick={addOnClick}>Add Row</a>
					</td></tr>
				</tfoot>

			</table>

		);
	}
});

module.exports = TableEditor;