/** @jsx React.DOM */
var React = require("react");

var ErrorBox = React.createClass({
	render: function(){
		var title = null;
		if (this.props.title){
			title = (
				<span>{this.props.title}</span>
			);
		}

		var style = {
			overflow: 'auto'
		}

		if (title){
			return (
				<pre style={style} className="error bg-warning">
					{title}
					<hr />
					{this.props.error}
				</pre>
			);
		}

		return (
			<pre style={style} className="error bg-warning">
				{this.props.error}
			</pre>
		);

	}
});

module.exports = ErrorBox;
