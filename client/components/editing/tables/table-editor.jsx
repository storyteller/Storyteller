var React = require("react");
var DeleteGlyph = require('./../delete-glyph');
var ReorderGlyph = require('./../reorder-glyph');

var HeaderRow = require('./header-row');
var {Button} = require('react-bootstrap');
var Postal = require('postal');

class TableRowAdder extends React.Component{
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
	}

	componentWillUnmount(){
		this.subscription.unsubscribe();
	}

	render(){
		var tableClass = "add-table-step";
		if (this.props.adder && this.props.adder.active){
			tableClass += ' active';
		}


		return (
			<Button 
				ref="adder" 
				tabIndex="0" 
				bsSize="small" 
				title="Click to add a new row to this table, press enter or alt+ins" 
				className={tableClass} 
				onClick={this.props.addOnClick} >Add Row</Button>
				);
	}
}

function TableEditor({cells, addStep, section, step, title, rows, adder}){
	var tableWidth = cells.length + 1;
	
	var addOnClick = e => {
		addStep();

		e.preventDefault();
	}

	var headerClass = "";
	var onHeaderClick = () => {};
	if (section.active == true){
		headerClass += ' bg-primary';
	}
	else {
		onHeaderClick = e => {
			Postal.publish({
				channel: 'editor',
				topic: 'select-holder',
				data: {holder: section.id}
			});
			
			e.stopPropagation();
		}
	}

	return (
		

		<table className="table table-bordered table-hover" id={section.id}>
			<thead>
				<tr>
					<th className={headerClass} colSpan={tableWidth}>
						<div onClick={onHeaderClick}>
						<DeleteGlyph step={step}/>
						{title}
						<ReorderGlyph step={step}/>
						</div>
					</th>
				</tr>
				<HeaderRow cells={cells}/>
			</thead>
			<tbody>
				{rows}
			</tbody>
			<tfoot>
				<tr>
					<td colSpan={tableWidth}>
						<TableRowAdder adder={adder} addOnClick={addOnClick} />
					</td>
				</tr>
			</tfoot>

		</table>

	);
}

module.exports = TableEditor;
