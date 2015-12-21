var React = require("react");
var DeleteGlyph = require('./../delete-glyph');
var ReorderGlyph = require('./../reorder-glyph');

var HeaderRow = require('./header-row');
var {Button} = require('react-bootstrap');
var Postal = require('postal');

var TableRowAdder = React.createClass({
	componentDidMount(){
		this.subscription = Postal.subscribe({
			channel: 'editor',
			topic: 'add-table-step',
			callback: data => {
				if (this.props.adder.active){
					if (data.evt) data.evt.preventDefault();
					this.props.addOnClick(data.evt);

				}
			}
		});
	},

	componentWillUnmount(){
		this.subscription.unsubscribe();
	},

	render(){
		var tableClass = "add-table-step";
		if (this.props.adder && this.props.adder.active){
			tableClass += ' active';
		}


		return (<Button ref="adder" tabIndex="0" bsSize="small" title="Click to add a new row to this table, press enter or alt+ins" className={tableClass} onClick={this.props.addOnClick} ref='adder'>Add Row</Button>);
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