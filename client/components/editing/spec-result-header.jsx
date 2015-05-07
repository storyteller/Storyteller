/** @jsx React.DOM */

var React = require("react");
var Postal = require('postal');

var Alert = require('react-bootstrap/Alert');
var ResultCache = require('./../../lib/specs/result-cache');
var QueueState = require('./../../lib/specs/queue-state');
var Icons = require('./../icons');


var SpecResultHeader = React.createClass({
	getData: function(){
		var counts = null;
		var duration = null;
		var time = null;

		var queued = this.props.spec.state;
		if (queued == 'running'){
			counts = QueueState.runningCounts();
		}
		else if (ResultCache.hasResults(this.props.spec.id)){
			var result = ResultCache.lastResultFor(this.props.spec.id);

			counts = result.counts;
			duration = result.results.duration;
			time = result.time;
		}



		return {
			icon: this.props.spec.icon(),
			status: this.props.spec.status(),
			queued: queued,
			counts: counts,
			duration: duration,
			time: time
		}
	},

	getInitialState: function(){
		return this.getData();
	},

	componentDidMount: function(){
		this.subscription = Postal.subscribe({
			channel: 'explorer',
			topic: 'hierarchy-updated',
			callback: () => {
				this.setState(this.getData());
			}
		});
	},

	componentWillUnmount: function(){
		this.subscription.unsubscribe();
	},

	render: function(){
		if (this.state.queued == 'none' && this.state.status == 'none') return null;

		var Icon = Icons[this.state.icon];

		var bsStyle = 'info';
		if (this.state.counts && this.state.counts.anyResults()){
			if (this.state.counts.success()){
				bsStyle = 'success';
			}
			else {
				bsStyle = 'danger';
			}
		}

		var text = null;

		if (this.state.queued == 'queued'){
			if (this.state.status == 'none'){
				text = 'Queued for Execution';
			}
			else {
				text = (<span>Queued for Execution, last run was {this.state.counts.toString()}</span>);
			}
			
		}
		else if (this.state.queued == 'running'){
			text = (<span>Running with {this.state.counts.toString()}</span>);
		}
		else if (this.state.status == 'success') {
			text = (<span>Succeeded in {this.state.duration} ms with {this.state.counts.toString()} at {this.state.time}</span>)
		}
		else {
			text = (<span>Failed in {this.state.duration} ms with {this.state.counts.toString()} at {this.state.time}</span>)
		}

		return (
			<Alert bsStyle={bsStyle}>
				<Icon /> {text}
			</Alert>
		);
	}
});

module.exports = SpecResultHeader;