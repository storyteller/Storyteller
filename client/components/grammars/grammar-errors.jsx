/** @jsx React.DOM */

var React = require("react");
var Postal = require('postal');
var Hierarchy = require('./../../lib/stores/hierarchy');

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

		var title = null;
		if (this.props.grammar != null && this.props.grammar != 'null'){
			title = (<h4>Grammar: {this.props.grammar}</h4>);
		}

		return (
				<div>
					{title}
					<pre>
						{text}
					</pre>
				</div>
		);
	}
});



var FixtureHeader = React.createClass({
	render: function(){
		var title = this.props.fixture.key + ' implemented by ' + this.props.fixture.implementation + ' (' + this.props.fixture.title + ')';

		return (
			<h3>{title}</h3>
		);
	}
});


var getReport = function(){
	return Hierarchy.errorReport();
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

			fixture.grammars.forEach(g => {
				g.errors.forEach(e => {
					var error = (<GrammarError error={e} grammar={g.key} />);
					body.push(error);
				});
			});

			body.push(<hr />);
		});


		return (
			<div>
			<h2>Grammar Errors</h2>

			{body}

			</div>
		);
	}
});

module.exports = GrammarErrors;