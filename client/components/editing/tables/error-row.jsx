/** @jsx React.DOM */
var React = require("react");
var ErrorBox = require('./../lines/error-box');

var ErrorRow = React.createClass({
	render: function(){
		return (
			<tr className="error-row">
				<td colSpan={this.props.width}>
					<ErrorBox error={this.props.error} />
				</td>
			</tr>
		);
	}
});

module.exports = ErrorRow;