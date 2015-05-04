/** @jsx React.DOM */

var Postal = require('postal');
var React = require("react");
var Button = require('react-bootstrap/Button');
var ButtonGroup = require('react-bootstrap/ButtonGroup');
var Well = require('react-bootstrap/Well');


var SpecRow = require('./spec-row');

var LifecycleButton = React.createClass({
	render: function(){
		var badge = (<span className="badge">{this.props.count}</span>);

		if (this.props.active){
			return (
				<Button active>{badge} {this.props.text}</Button>
			);
		}

		var lifecycle = this.props.lifecycle;

		var handler = () => {
			Postal.publish({
				channel: 'batch',
				topic: 'lifecycle-filter-changed',
				data: {lifecycle: lifecycle}
			});
		}



		return (
			<Button active={this.props.active} onClick={handler}>{badge} {this.props.text}</Button>
		);
	}
});

var LifecycleFilter = React.createClass({
	render: function(){
		var actives = {any: false, acceptance: false, regression: false};
		actives[this.props.lifecycle] = true;

		return (
			<ButtonGroup>
				<LifecycleButton count={this.props.results.total} active={actives.any} text="Any" lifecycle="any" />
				<LifecycleButton count={this.props.results.acceptance.total} active={actives.acceptance} text="Acceptance" lifecycle="acceptance" />
				<LifecycleButton count={this.props.results.regression.total} active={actives.regression} text="Regression" lifecycle="regression" />
			</ButtonGroup>
		);
	}
});

var StatusButton = React.createClass({
	render: function(){
		var badge = (<span className="badge">{this.props.count}</span>);

		if (this.props.active){
			return (
				<Button active>{badge} {this.props.text}</Button>
			);
		}

		var status = this.props.status;

		var handler = () => {
			Postal.publish({
				channel: 'batch',
				topic: 'spec-status-filter-changed',
				data: {status: status}
			});
		}




		return (
			<Button onClick={handler} active={this.props.active}>{badge} {this.props.text}</Button>
		);
	}
});

var StatusFilter = React.createClass({
	render: function(){

		var actives = {all: false, success: false, failed: false, none: false};
		actives[this.props.status] = true;

		return (
			<ButtonGroup className="status-filter-buttons">
				<StatusButton count={this.props.results.total} active={actives.all} text="All" status="all" />
				<StatusButton count={this.props.results.succeeded} active={actives.success} text="Success" status="success" icon="success"/>
				<StatusButton count={this.props.results.failed} active={actives.failed} text="Failed" status="failed" icon="failed"/>
			</ButtonGroup>

		);

	}
});

var SummaryTable = React.createClass({
	getInitialState: function(){
		return {
			lifecycle: 'any',
			status: 'all'
		}

	},

	componentDidMount: function(){
		var self = this;

		this.subscriptions = [
			Postal.subscribe({
				channel: 'batch',
				topic: 'lifecycle-filter-changed',
				callback: function(data){
					self.setState({lifecycle: data.lifecycle});
				}
			}),
			Postal.subscribe({
				channel: 'batch',
				topic: 'spec-status-filter-changed',
				callback: function(data){
					self.setState({status: data.status});
				}
			})
		];
	},

	componentWillUnmount: function(){
		this.subscriptions.forEach(function(x){
			x.unsubscribe();
		});
	},

	render: function(){
		var records = this.props.results.filter(this.state.lifecycle, this.state.status);

		var rows = records.map(x => {
			return (
				<SpecRow 
					path={x.specification.path} 
					id={x.specification.id}
					counts={x.results.counts}
					duration={x.results.duration}
					lifecycle={x.specification.lifecycle}
					attempts={x.results.attempts}
					/>
			);
		});


		var spacerStyle = {
			marginLeft: '50px'
		}

		return (
			<div>
				<Well bsSize="small" className="text-center">
					<strong>Lifecycle: </strong>
					<LifecycleFilter lifecycle={this.state.lifecycle} results={this.props.results}/>
					<strong style={spacerStyle}>Status: </strong>
					<StatusFilter status={this.state.status} results={this.props.results} />
				</Well>
				
				

				<table className="table">
					<tr>
						<th>Specification</th>
						<th>Lifecycle</th>
						<th>Results</th>
						<th>Duration (ms)</th>
						<th>Attempts</th>
					</tr>
					<tbody>
					{rows}
					</tbody>
				</table>
			</div>
		);
	}
});

module.exports = SummaryTable;