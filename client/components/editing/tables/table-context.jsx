var React = require("react");
var {Button, ButtonGroup, ListGroupItem, ListGroup} = require('react-bootstrap');
var Postal = require('postal');
var changes = require('./../../../lib/model/change-commands');
var uuid = require('node-uuid');


var OptionalColumn = React.createClass({
	render(){
		var style = '';
		if (this.props.active){
			style = 'info';
		}

		var onClick = e => {
			changes.toggleColumn(this.props.section, this.props.cell);

			e.stopPropagation();
		}

		var onChange = e => {};

		return (
			<ListGroupItem key={this.props.cell.key} onClick={onClick} disabled={!this.props.active}>
				<input onClick={onClick} onChange={onChange} type="checkbox" checked={this.props.active}  />
				<span>{this.props.header}</span>
			</ListGroupItem>
		);
	}
});

module.exports = React.createClass({
	render: function(){
		var optionals = null;
		if (this.props.optionals.length > 0){
            var i = 0;
			var buttons = this.props.optionals.map(opt => {
				return (<OptionalColumn key={++i} section={this.props.section} header={opt.header} cell={opt.cell} active={opt.active} />);
			});

			optionals = (
				<ListGroup vertical>
					<ListGroupItem active={true}>Optional Columns</ListGroupItem>
					{buttons}
				</ListGroup>
			);
		}

		return (
			<div>
				<h4>{this.props.table.title}</h4>
				{optionals}
			</div>
		);
	}
});