var React = require('react');
var Postal = require('postal');

var SuitePath = require('./../explorer/suite-path');
var ResultsCache = require('./../../lib/stores/result-cache');
var Hierarchy = require('./../../lib/stores/hierarchy');


var ResultsRow = React.createClass({
	render(){
		var href = "#/spec/results/" + this.props.spec.id;

		var bsStyle = 'bg-danger';

		if (this.props.counts.success()){
			bsStyle = 'bg-success'
		}

		return (
			<tr className={bsStyle}>
				<td><SuitePath suite={this.props.spec.suite} linkToLeaf={true} /></td>
				<td><a href={href}>{this.props.spec.title}</a></td>
				<td>{this.props.counts.toString()}</td>
				<td className="number-cell">{this.props.duration}</td>
			</tr>
		);
	}
});

var ResultsTable = React.createClass({
	componentDidMount(){
		this.subscription = Postal.subscribe({
			channel: 'results',
			topic: 'results-changed',
			callback: () => {
				this.setState({});
			}
		});
	},

	componentWillUnmount(){
		this.subscription.unsubscribe();
	},

	render(){
		var results = ResultsCache.latestResults();

		if (results.length == 0){
			return (
				<div>
					<br />
					<br />
					<h1 style={{textAlign: 'center'}}>No results yet.</h1>

				</div>

			);
		}

		var ordered = _.sortBy(results, 'timestamp').reverse();

		var rows = ordered.map(completed => {
			var spec = Hierarchy.findSpec(completed.id);
			return (<ResultsRow spec={spec} counts={completed.counts} duration={completed.results.duration} />);
		});

		return (
			<div>

			<h2>Most Recent Results</h2>

			<table className="table table-bordered">
				<thead>
					<tr>
						<th>Suite</th>
						<th>Specification</th>
						<th>Counts</th>
						<th>Duration (ms)</th>
					</tr>
				</thead>
				<tbody>
					{rows}
				</tbody>
			</table>


			</div>
		);
	}
});

module.exports = ResultsTable;