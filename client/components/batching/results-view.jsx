/** @jsx React.DOM */

var React = require("react");
var Postal = require("postal");

var Grid = require('react-bootstrap/Grid');
var Row = require('react-bootstrap/Row');
var SpecResultHeader = require('./../editing/spec-result-header');

var ResultsView = React.createClass({
	render: function(){
		var onClick = e => {
			Postal.publish({
				channel: 'batch',
				topic: 'show-summary',
				data: {}
			});

			e.preventDefault();
		}

		return (
			<div>
				<h4>{this.props.title} ({this.props.header.results.attempts} attempts) <small style={{marginLeft: '25px'}}><a onClick={onClick}>  back to summary</a></small></h4>
				<hr />
				<SpecResultHeader spec={this.props.header} />
				{this.props.components}
			</div>
		);
	}
});

module.exports = ResultsView;