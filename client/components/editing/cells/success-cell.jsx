var React = require("react");

var SuccessCell = React.createClass({
	render: function(){
		return (
			<span className="label label-success">{this.props.value}</span>
		);
	}
});

module.exports = SuccessCell;