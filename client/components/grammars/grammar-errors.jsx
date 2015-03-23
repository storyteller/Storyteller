/** @jsx React.DOM */

var React = require("react");
var Postal = require('postal');
var SpecificationStore = require('./../../lib/specification-store');

var Alert = require('react-bootstrap/Alert');

function toErrorMessage(data){
	if (data.error != null && data.message != null){
		return data.message + " -> " + data.error;
	}

	return data.message || data.error;
}


var FixtureError = React.createClass({
	render: function(){
		var text = toErrorMessage(this.props.error);

		return (
			<pre>{text}</pre>
		);
		
	}
});


var GrammarError = React.createClass({
	render: function(){
		var text = toErrorMessage(this.props.error);

		return (
				<pre>
					<strong>{this.props.key}</strong> 
					{text}
				</pre>
		);
	}
});



var FixtureHeader = React.createClass({
	render: function(){
		return (
			<h5>{this.props.fixture.key} implemented by {this.props.fixture.implementation} ({this.props.fixture.title})</h5>
		);
	}
});


var getReport = function(){
	return SpecificationStore.errorReport();
}


var GrammarErrors = React.createClass({
	getInitialState: function(){
		return {
			report: getReport()
		}
	},

	componentDidMount: function(){
		var self = this;

		Postal.subscribe({
			channel: 'explorer',
			topic: 'fixtures-loaded',
			callback: function(data, envelope){
				self.setState({
					report: getReport()
				});
			}
		});
		

	},

	render: function(){

		var body = [];

		this.state.report.forEach(fixture => {
			var header = (<FixtureHeader fixture={fixture} />);
			body.push(header);

			fixture.errors.forEach(e => {
				var error = (<FixtureError error={e} />);
				body.push(error);
			});

			fixture.grammars.forEach(function(g){
				g.errors.forEach(e => {
					var error = (<GrammarError error={e} key={g.key} />);
					body.push(error);
				});
			});

			
		});


		return (
			<div>
			<h3>Grammar Errors</h3>

			{body}

			</div>
		);
	}
});

module.exports = GrammarErrors;