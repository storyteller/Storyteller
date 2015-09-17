/** @jsx React.DOM */
var React = require("react");
var Postal = require('postal');
var changes = require('./../../../lib/model/change-commands');

var RetryCount = React.createClass({
	render(){
		var onChange = e => {
			var value = e.target.value;
			var number = parseInt(value);

			if (!isNaN(number)){

				changes.changeRetryCount(number);
			}

			e.preventDefault();
		};

		return (
			<div>Retry Count: <input id="retry-count" onChange={onChange} type="text" value={this.props.count}/></div>
		);
	}
});

module.exports = RetryCount;