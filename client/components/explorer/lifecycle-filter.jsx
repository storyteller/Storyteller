/** @jsx React.DOM */

var React = require("react");
var {Button, ButtonGroup} = require('react-bootstrap');
var Postal = require('postal');

var LifecycleButton = React.createClass({
	render: function(){
		var badge = ( <span className="badge pull-right">{this.props.count}</span> );
		var content = ( <span className="pull-left">{this.props.text}</span> );

		if (this.props.active){
			return (
				<Button id={this.props.id} active>{content} {badge}</Button>
			);
		}

		var handler = e => {
			Postal.publish({
				channel: 'explorer',
				topic: 'lifecycle-filter-changed',
				data: {lifecycle: this.props.lifecycle}
			});

			e.preventDefault();
		}



		return (
			<Button id={this.props.id} active={this.props.active} onClick={handler}>{content} {badge}</Button>
		);
	}
});

var LifecycleFilter = React.createClass({
	render: function(){
		var actives = {any: false, Acceptance: false, Regression: false};
		actives[this.props.lifecycle] = true;

		return (
			<ButtonGroup vertical>
				<LifecycleButton id="any-lifecycle" count={this.props.summary.total} active={actives.any} text="Any" lifecycle="any" />
				<LifecycleButton id="acceptance-lifecycle" count={this.props.summary.acceptance} active={actives.Acceptance} text="Acceptance" lifecycle="Acceptance" />
				<LifecycleButton id="regression-lifecycle" count={this.props.summary.regression} active={actives.Regression} text="Regression" lifecycle="Regression" />
			</ButtonGroup>
		);
	}
});

module.exports = LifecycleFilter;