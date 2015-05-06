/** @jsx React.DOM */

var React = require("react");

var Alert = require('react-bootstrap/Alert');
var ResultCache = require('./../../lib/specs/result-cache');

var SpecResultHeader = React.createClass({
	render: function(){
		var succeeded = (this.props.spec.status() == 'success');

		var counts = ResultCache.lastResultFor(this.props.spec.id).counts;
		var countsText = counts.toString();

		if (succeeded){
			return (
				<Alert bsStyle="success">
					Succeeded in {this.props.spec.results.duration} ms with {countsText}
				</Alert>

			);
		}

		return (
			<Alert bsStyle="danger">
				Failed in {this.props.spec.results.duration} ms with {countsText}
			</Alert>

		);
	}
});

module.exports = SpecResultHeader;