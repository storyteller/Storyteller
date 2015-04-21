/** @jsx React.DOM */
var React = require("react");
var {Button, ButtonGroup, ListGroupItem, ListGroup} = require('react-bootstrap');
var Postal = require('postal');


var OptionalColumn = React.createClass({
	render(){
		var style = '';
		if (this.props.active){
			style = 'info';
		}

		var onClick = e => {
			Postal.publish({
				channel: 'editor',
				topic: 'changes',
				data: {
					// TODO
				}
			})

			e.preventDefault();
		}

		// <Button style={{minWidth: '100px'}} onClick={onClick} title="Click to toggle the usage of this column in the current table" bsStyle={style}>{this.props.header}</Button>

		return (
			<ListGroupItem onClick={onClick} disabled={!this.props.active}>
				<input onClick={onClick} type="checkbox" checked={this.props.active}  />
				<span>{this.props.header}</span>
			</ListGroupItem>
		);
	}
});

module.exports = React.createClass({
	render: function(){
		var optionals = null;
		if (this.props.optionals.length > 0){
			var buttons = this.props.optionals.map(opt => {
				return (<OptionalColumn id={this.props.section.id} header={opt.header} cell={opt.cell} active={opt.active} />);
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