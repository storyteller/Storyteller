var React = require("react");
var {Button, ButtonGroup, ListGroupItem, ListGroup} = require('react-bootstrap');
var Postal = require('postal');
var changes = require('./../../../lib/model/change-commands');
var uuid = require('node-uuid');


function OptionalColumn({active, section, cell, header}){
	var style = '';
	if (active){
		style = 'info';
	}

	var onClick = e => {
		changes.toggleColumn(section, cell);

		e.stopPropagation();
	}

	var onChange = e => {};

	return (
		<ListGroupItem key={cell.key} onClick={onClick} disabled={!active}>
			<input onClick={onClick} onChange={onChange} type="checkbox" checked={active}  />
			<span style={{marginLeft: '5px'}}>{header}</span>
		</ListGroupItem>
	);
}

class TableContext extends React.Component{
    render(){
		var optionals = null;
		if (this.props.optionals.length > 0){
            var i = 0;
			var buttons = this.props.optionals.map(opt => {
				return (<OptionalColumn style={{width: '100%'}} key={++i} section={this.props.section} header={opt.header} cell={opt.cell} active={opt.active} />);
			});

			optionals = (
				<ListGroup vertical>
					<ListGroupItem active={true}>Optional Columns</ListGroupItem>
					{buttons}
				</ListGroup>
			);
		}

		return (
			<div className="table-column-context">
				<h4>{this.props.table.title}</h4>
				{optionals}
			</div>
		);
    }
    
    title(){
        return 'Optional Columns';
    }
}

module.exports = TableContext;
