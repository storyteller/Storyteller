var React = require("react");

var MissingCell = React.createClass({
	render: function(){
		return (
			<span className="label label-warning">[Missing]</span>
		);
	}
});

module.exports = MissingCell;