/** @jsx React.DOM */

var React = require("react");
var Postal = require("postal");
var _ = require('lodash');

var {Grid, Row, Alert} = require('react-bootstrap');


var BatchResults = require('./../../lib/batch-results');

var loader = require('./../editing/component-loader').results;

var SummaryTable = require('./summary-table');
var ResultsView = require('./results-view');






var BatchReport = React.createClass({
	getInitialState: function(){
		if (this.props.data.records.length == 1){
			return {
				mode: 'spec',
				id: this.props.data.records[0].specification.id
			}
		}

		return {
			mode: 'summary'
		}

	},

	componentWillMount: function(){
		var self = this;

		self.results = new BatchResults(self.props.data);

		Postal.subscribe({
			channel: 'batch',
			topic: 'show-spec',
			callback: function(data){
				self.setState({
					id: data.id,
					mode: 'spec'
				});
			}

		});

		Postal.subscribe({
			channel: 'batch',
			topic: 'show-summary',
			callback: function(data){
				self.setState({
					mode: 'summary'
				});
			}
		});
	},

	render: function(){
		var headerText = this.props.data.system;
		if (this.props.data.suite && this.props.data.suite != 'All'){
			headerText += ': ' + this.props.data.suite;
		}

		var inner = null;

		if (this.state.mode == 'summary'){
			inner = (<SummaryTable results={this.results} records={this.props.data.records}/>);
		}
		else {
			var spec = this.results.specFor(this.state.id);
			var components = spec.buildResults(loader);
			var header = this.results.headerFor(this.state.id);

			inner = (<ResultsView title={spec.title} header={header.name} header={header} components={components} />);
		}

		var alertStyle = 'danger';
		var alertText = 'Failed ';
		if (this.props.data.success){
			alertStyle = 'success';
			alertText = 'Succeeded ';
		}

		return (
			<Grid>
				<Row>
					<Alert bsStyle={alertStyle}>
						<h3>Storyteller Results for {headerText} <small>{alertText} at {this.props.data.time}</small></h3>
					</Alert>

					{inner}
				</Row>
			</Grid>
		);
	}
});

module.exports = BatchReport;