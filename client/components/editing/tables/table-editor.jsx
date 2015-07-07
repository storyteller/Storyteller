/** @jsx React.DOM */
var React = require("react");
var DeleteGlyph = require('./../delete-glyph');
var ReorderGlyph = require('./../reorder-glyph');

var HeaderRow = require('./header-row');

var TableRowAdder = React.createClass({
	render(){
		var tableClass = "add-table-step";
		if (this.props.adder && this.props.adder.active){
			tableClass += ' active';
		}

		return (<a tabIndex="0" title="Click to add a new row to this table, or use alt+ins" className={tableClass} href="#" onClick={this.props.addOnClick}>Add Row</a>);
	}
});

var TableEditor = React.createClass({
	propTypes: {
		step: React.PropTypes.object.isRequired
	},
	
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
					<tr>
						<th className={headerClass} colSpan={tableWidth}>
							<DeleteGlyph step={this.props.step}/>
							{this.props.title}
							<ReorderGlyph step={this.props.step}/>
						</th>
					</tr>
					<HeaderRow cells={this.props.cells}/>
				</thead>
				<tbody>
					{this.props.rows}
				</tbody>
				<tfoot>
					<tr>
						<td colSpan={tableWidth}>
							<TableRowAdder adder={this.props.adder} addOnClick={addOnClick} />
						</td>
					</tr>
				</tfoot>

			</table>

		);
	}
});

module.exports = TableEditor;