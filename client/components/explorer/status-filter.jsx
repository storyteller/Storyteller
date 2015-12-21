/** @jsx React.DOM */

var React = require("react");
var Postal = require('postal');
var icons = require('./../icons');
var {Button, ButtonGroup} = require('react-bootstrap');

var StatusButton = React.createClass({
	render: function(){
		var icon = null;
		if (this.props.icon){
			icon = icons[this.props.icon]({});
		}

		var badge = ( <span className="badge pull-right">{this.props.count}</span> );
		var content = ( <span className="pull-left">{icon} {this.props.text}</span> );

		if (this.props.active){
			return (
				<Button id={this.props.id} active>{content} {badge}</Button>
			);
		}

		var handler = () => {
			Postal.publish({
				channel: 'explorer',
				topic: 'spec-status-filter-changed',
				data: {status: this.props.status}
			});
		}




		

		return (
			<Button id={this.props.id} onClick={handler} active={this.props.active}>{content} {badge}</Button>
		);
	}
});

var StatusFilter = React.createClass({
	render: function(){

		var actives = {any: false, success: false, failed: false, none: false};
		actives[this.props.status] = true;

		return (
			<ButtonGroup vertical className="status-filter-buttons">
				<StatusButton id="status-any" count={this.props.summary.total} active={actives.any} text="All" status="any" />
				<StatusButton id="status-success" count={this.props.summary.success} active={actives.success} text="Success" status="success" icon="success"/>
				<StatusButton id="status-failed" count={this.props.summary.failed} active={actives.failed} text="Failed" status="failed" icon="failed"/>
				<StatusButton id="status-none" count={this.props.summary.none} active={actives.none} text="No Results" status="none" icon="none"/>

			</ButtonGroup>

		);

	}
});

module.exports = StatusFilter;