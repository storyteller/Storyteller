var React = require("react");
var uuid = require('node-uuid');

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
				<i className="fa fa-exclamation-circle" style={{paddingRight: '5px'}}></i>{this.props.error}
			</pre>
		);

	}
});

module.exports = ErrorBox;
