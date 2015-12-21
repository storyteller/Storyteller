var React = require("react");
var Postal = require("postal");

var {Grid, Row} = require('react-bootstrap');
var SpecResultHeader = require('./../editing/header/spec-result-header');

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